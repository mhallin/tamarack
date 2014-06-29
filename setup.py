import shutil
import subprocess
import sys

from distutils.command.sdist import sdist as SdistCommand
from os import path
from setuptools import setup, find_packages
from setuptools.command.test import test as TestCommand
from pathlib import Path

thisdir = Path(__file__).parent.resolve()
thisdir = thisdir


class TamarackSdistCommand(SdistCommand):
    def run_lein(self):
        print('running lein cljsbuild in frontend dir')

        result = subprocess.call('lein cljsbuild once tamarack tamarack-release',
                                 shell=True,
                                 cwd=bytes(thisdir))

        if result:
            raise Exception('Could not compile ClojureScript')

    def run_copy_static(self):
        print('copying static folder from frontend dir')

        staticdir = thisdir / 'static'
        destdir = thisdir / 'tamarack/static'

        if path.exists(bytes(destdir)):
            shutil.rmtree(bytes(destdir))

        shutil.copytree(bytes(staticdir), bytes(destdir))

    def run(self):
        self.run_lein()
        self.run_copy_static()

        super().run()


class PyTestCommand(TestCommand):
    def run_tests(self):
        import pytest
        sys.exit(pytest.main())


tests_requires = [
    'pytest>=2.5,<2.6',
    'flake8>=2.0.0,<3.0.0',
]


setup(
    name='tamarack',
    version='0.0.1',
    description='A quantitative web application profiler',
    url='https://github.com/mhallin/tamarack',

    author='Magnus Hallin',
    author_email='mhallin@gmail.com',

    license='BSD',

    packages=find_packages(exclude=['tests']),

    include_package_data=True,
    zip_safe=False,

    install_requires=[
        'flask>=0.10.0,<0.11.0',
        'click>=2.0,<3.0',
        'SQLAlchemy>=0.9.6,<1.0.0',
        'alembic>=0.6.0,<0.7.0',
        'Flask-SQLAlchemy>=1.0,<2.0',
        'edn_format>=0.5,<0.6',
        'psycopg2>=2.5,<2.6',
        'aiohttp',
    ],

    extras_require={
        'tests': tests_requires,
    },

    entry_points={
        'console_scripts': [
            'tamarack = tamarack.runner.main:cli'
        ],
    },

    cmdclass={
        'sdist': TamarackSdistCommand,
        'test': PyTestCommand,
    }
)
