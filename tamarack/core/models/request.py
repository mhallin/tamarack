from sqlalchemy.dialects.postgresql import HSTORE

from ..db import db, locked_table


class RequestByMinute(db.Model):
    __tablename__ = 'request_by_minute'

    app_id = db.Column(db.Integer, db.ForeignKey('application.id'), primary_key=True)
    timestamp = db.Column(db.DateTime(timezone=True), primary_key=True)
    sensor_data = db.Column(HSTORE, nullable=False)
    request_count = db.Column(db.BigInteger, nullable=False)
    error_count = db.Column(db.BigInteger, nullable=False)

    app = db.relationship('Application',
                          backref=db.backref('request_by_minute', lazy='dynamic'))

    def __init__(self, app, timestamp):
        self.app = app
        self.timestamp = timestamp
        self.sensor_data = {}
        self.request_count = 0
        self.error_count = 0


class RequestEndpointByMinute(db.Model):
    __tablename__ = 'request_endpoint_by_minute'

    app_id = db.Column(db.Integer, db.ForeignKey('application.id'), primary_key=True)
    endpoint = db.Column(db.String(100), primary_key=True)
    timestamp = db.Column(db.DateTime(timezone=True), primary_key=True)
    sensor_data = db.Column(HSTORE, nullable=False)
    request_count = db.Column(db.BigInteger, nullable=False)
    error_count = db.Column(db.BigInteger, nullable=False)

    app = db.relationship('Application',
                          backref=db.backref('request_endpoint_by_minute', lazy='dynamic'))

    def __init__(self, app, timestamp, endpoint):
        self.app = app
        self.timestamp = timestamp
        self.endpoint = endpoint
        self.sensor_data = {}
        self.request_count = 0
        self.error_count = 0


def process_minute_datapoint(app, datapoint):
    timestamp = datapoint['timestamp']
    request_count = datapoint['request_count']
    error_count = datapoint['error_count']
    endpoint = datapoint['endpoint']
    sensor_data = {k: str(v) for k, v in datapoint['sensor_data'].items()}

    db.session.execute(
        db.func.update_request_by_minute(
            app.id, timestamp,
            sensor_data, request_count, error_count))

    db.session.execute(
        db.func.update_request_endpoint_by_minute(
            app.id, timestamp, endpoint,
            sensor_data, request_count, error_count))


@db.event.listens_for(RequestByMinute, 'load')
@db.event.listens_for(RequestEndpointByMinute, 'load')
def make_int_sensor_values(target, context):
    target.sensor_data = {k: int(v) for k, v in target.sensor_data.items()}
