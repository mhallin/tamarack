from tamarack.core.db import db
from tamarack.core.celery import celery
from tamarack.core.models import Application
from tamarack.core.models.request import process_minute_datapoint


@celery.task()
def process_request_data(data):
    app = Application.by_name(data['app_name'])

    for minute_data in data['by_minute']:
        process_minute_datapoint(app, minute_data)

    db.session.commit()
