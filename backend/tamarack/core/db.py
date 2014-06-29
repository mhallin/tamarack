import contextlib

from flask.ext.sqlalchemy import SQLAlchemy

db = SQLAlchemy()


@contextlib.contextmanager
def locked_table(model, lockmode='EXCLUSIVE'):
    lockmodes = ['EXCLUSIVE']
    lockmode = lockmode.upper()

    assert lockmode in lockmodes

    db.session.begin_nested()
    db.session.execute('LOCK TABLE %s IN %s MODE'
                       % (model.__tablename__, lockmode))
    try:
        yield
        db.session.commit()
    except:
        db.session.rollback()
        raise
