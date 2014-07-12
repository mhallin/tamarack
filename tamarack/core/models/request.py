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

    @classmethod
    def prepare_datapoint(cls, app, timestamp):
        with locked_table(cls):
            if not cls.query.filter_by(app=app, timestamp=timestamp).first():
                db.session.add(cls(app, timestamp))

    @classmethod
    def increment_master_data(cls, app, timestamp, request_count, error_count):
        cls.query.filter_by(app=app, timestamp=timestamp) \
            .update({
                cls.request_count: cls.request_count + request_count,
                cls.error_count: cls.error_count + error_count,
            })

    @classmethod
    def increment_sensor_data(cls, app, timestamp, sensor_name, sensor_value):
        cls.query.filter_by(app=app, timestamp=timestamp) \
            .update({
                cls.sensor_data: db.func.incr_key(
                    cls.sensor_data, sensor_name, sensor_value)
            }, synchronize_session=False)


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

    @classmethod
    def prepare_datapoint(cls, app, timestamp, endpoint):
        with locked_table(cls):
            if not cls.query.filter_by(app=app, timestamp=timestamp, endpoint=endpoint).first():
                db.session.add(cls(app, timestamp, endpoint))

    @classmethod
    def increment_master_data(cls, app, timestamp, endpoint, request_count, error_count):
        cls.query.filter_by(app=app, timestamp=timestamp, endpoint=endpoint) \
            .update({
                cls.request_count: cls.request_count + request_count,
                cls.error_count: cls.error_count + error_count,
            })

    @classmethod
    def increment_sensor_data(cls, app, timestamp, endpoint, sensor_name, sensor_value):
        cls.query.filter_by(app=app, timestamp=timestamp, endpoint=endpoint) \
            .update({
                cls.sensor_data: db.func.incr_key(
                    cls.sensor_data, sensor_name, sensor_value)
            }, synchronize_session=False)


def process_minute_datapoint(app, datapoint):
    timestamp = datapoint['timestamp']
    request_count = datapoint['request_count']
    error_count = datapoint['error_count']
    endpoint = datapoint['endpoint']

    RequestByMinute.prepare_datapoint(app, timestamp)
    RequestEndpointByMinute.prepare_datapoint(app, timestamp, endpoint)

    RequestByMinute.increment_master_data(app, timestamp,
                                          request_count, error_count)
    RequestEndpointByMinute.increment_master_data(app, timestamp, endpoint,
                                                  request_count, error_count)

    for sensor_name, sensor_value in datapoint['sensor_data'].items():
        RequestByMinute.increment_sensor_data(app, timestamp,
                                              sensor_name, sensor_value)
        RequestEndpointByMinute.increment_sensor_data(
            app, timestamp, endpoint,
            sensor_name, sensor_value)


@db.event.listens_for(RequestByMinute, 'load')
@db.event.listens_for(RequestEndpointByMinute, 'load')
def make_int_sensor_values(target, context):
    target.sensor_data = {k: int(v) for k, v in target.sensor_data.items()}
