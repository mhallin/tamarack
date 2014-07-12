import os

from tamarack.core.app import create_app
from tamarack.core.celery import celery

app = create_app(os.getenv('TAMARACK_CONFIG'))
