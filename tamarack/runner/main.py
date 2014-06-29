import click
import os
import shutil

from alembic import command
from alembic.config import Config
from werkzeug import script

from tamarack.core.app import create_app


@click.group(context_settings={'help_option_names': ['-h', '--help']})
@click.option('--config', metavar='PYTHONCLASS',
              default='tamarack.settings.development.Config',
              help='Python class used as configuration')
@click.pass_context
def cli(ctx, config):
    '''Tamarack manager and runner'''

    ctx.obj = {
        'config': os.path.join(os.getcwd(), os.path.expanduser(config)) if config else None
    }


@cli.command()
@click.option('--enable-profiler', default=False, is_flag=True,
              help='Start the server with a Python profiler on each request')
@click.pass_context
def devserver(ctx, enable_profiler):
    '''Starts a development server'''

    app = create_app(ctx.obj['config'])

    if enable_profiler:
        from werkzeug.contrib.profiler import ProfilerMiddleware
        app.wsgi_app = ProfilerMiddleware(app.wsgi_app, restrictions=[30])

    app.run(debug=app.config['DEBUG'], port=app.config['PORT'])


@cli.command()
@click.pass_context
def server(ctx):
    '''Starts a production HTTP server'''
    import asyncio

    from aiohttp.wsgi import WSGIServerHttpProtocol

    app = create_app(ctx.obj['config'])

    loop = asyncio.get_event_loop()

    def create_server():
        return WSGIServerHttpProtocol(app, readpayload=True)

    future = loop.create_server(create_server,
                                app.config['LISTEN_ADDRESS'],
                                app.config['PORT'])

    loop.run_until_complete(future)

    try:
        print('Tamarack server started')
        loop.run_forever()
    except KeyboardInterrupt:
        pass


@cli.command()
@click.pass_context
def upgrade(ctx):
    '''Upgrade the Tamarack installation'''

    ctx.forward(db)
    ctx.forward(db_upgrade, revision='head', sql=False)


@cli.command()
@click.pass_context
def shell(ctx):
    '''Start a Tamarack-enabled development shell'''

    def make_shell_env():
        from tamarack.core import models
        from tamarack.core.db import db

        app = create_app(ctx.obj['config'])
        request = app.test_request_context('/')
        request.push()

        return {
            'app': app,
            'models': models,
            'request': request,
            'db': db,
        }

    script.make_shell(make_shell_env,
                      banner='Interactive Tamarack Shell')()


@cli.command()
@click.argument('config')
def init(config):
    '''Generate a Tamarack configuration file'''

    srcpath = os.path.join(os.path.dirname(os.path.realpath(__file__)),
                           '../templates/settings.py')
    destpath = os.path.join(os.getcwd(), os.path.expanduser(config))

    shutil.copy(srcpath, destpath)

    click.echo('Tamarack settings file created at %s' % config)


@cli.group()
@click.pass_context
def db(ctx):
    '''Perform database operations'''

    app = create_app(ctx.obj['config'])

    config = Config(os.path.join(os.path.dirname(__file__),
                                 '../../alembic.ini'))
    config.set_section_option('alembic', 'sqlalchemy.url',
                              app.config['SQLALCHEMY_DATABASE_URI'])

    ctx.obj['db_cfg'] = config


@db.command('revision')
@click.option('--message', '-m', default=None,
              help="Message string to use with 'revision'")
@click.option('--sql', default=False, is_flag=True,
              help="Don't emit SQL to database - dump to standard output/file instead")
@click.option('--autogenerate', default=False, is_flag=True,
              help="Populate revision script with candidate migration operations, based on comparison of database to model.")
@click.pass_context
def db_revision(ctx, message, autogenerate, sql):
    '''Create a new revision file'''

    command.revision(ctx.obj['db_cfg'],
                     message=message,
                     autogenerate=autogenerate,
                     sql=sql)


@db.command('upgrade')
@click.argument('revision')
@click.option('--sql', default=False, is_flag=True,
              help="Don't emit SQL to database - dump to standard output/file instead")
@click.pass_context
def db_upgrade(ctx, revision, sql):
    '''Upgrade to a later version'''

    command.upgrade(ctx.obj['db_cfg'],
                    revision=revision,
                    sql=sql)


@db.command('downgrade')
@click.argument('revision')
@click.option('--sql', default=False, is_flag=True,
              help="Don't emit SQL to database - dump to standard output/file instead")
@click.pass_context
def db_downgrade(ctx, revision, sql):
    '''Revert to a previous version'''

    command.downgrade(ctx.obj['db_cfg'],
                      revision=revision,
                      sql=sql)


@db.command('history')
@click.option('--rev-range', '-r', default=None,
              help="Specify a revision range; format is [start]:[end]")
@click.pass_context
def db_history(ctx, rev_range):
    '''List changesets in chronological order'''

    command.history(ctx.obj['db_cfg'],
                    rev_range=rev_range)
