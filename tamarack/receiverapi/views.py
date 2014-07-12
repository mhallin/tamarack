from flask import Blueprint, request

from tamarack.common import data_response
from tamarack.core.db import db
from tamarack.core.models import Application
from tamarack.core.models.request import process_minute_datapoint
from tamarack.tasks.request import process_request_data

receiverapi = Blueprint('receiverapi', __name__)


@receiverapi.route('/request-data', methods=['POST'])
def handle_request_data():
    data = request.get_json()
    process_request_data.delay(data)

    return data_response({'status': 'ok'})
