from flask import Blueprint, request

from tamarack.common import data_response
from tamarack.core.db import db
from tamarack.core.models import Application, process_minute_datapoint

receiverapi = Blueprint('receiverapi', __name__)


@receiverapi.route('/request-data', methods=['POST'])
def handle_request_data():
    data = request.get_json()
    print(data)
    app = Application.by_name(data['app_name'])

    for minute_data in data['by_minute']:
        process_minute_datapoint(app, minute_data)

    db.session.commit()

    return data_response({'status': 'ok'})
