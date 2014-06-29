import operator

from collections import defaultdict
from flask import Blueprint, request

from tamarack.common import data_response, get_one_or_404
from tamarack.core.models import Application, RequestByMinute, RequestEndpointByMinute
from tamarack.core.mappers import mapper_with_name

explorerapi = Blueprint('explorerapi', __name__)


@explorerapi.route('/applications')
def application_list():
    apps = Application.query.order_by('display_name')
    return data_response([app.as_data() for app in apps])


@explorerapi.route('/applications/<app_name>')
def application_info(app_name):
    app = get_one_or_404(Application.query.filter_by(name=app_name))

    return data_response(app.as_data())


@explorerapi.route('/applications/<app_name>/chart/<chart_type>')
def application_chart(app_name, chart_type):
    app = get_one_or_404(Application.query.filter_by(name=app_name))

    from_timestamp = request.args['from']
    to_timestamp = request.args['to']
    mapper = mapper_with_name(chart_type)

    datapoints = app.request_by_minute.filter(
        RequestByMinute.timestamp >= from_timestamp,
        RequestByMinute.timestamp <= to_timestamp)

    return data_response({
        int(datapoint.timestamp.timestamp()) * 1000: mapper(datapoint) for datapoint in datapoints
    })


def aggregate_endpoint_data(mapper, datapoints):
    endpoint_aggregates = defaultdict(lambda: {'count': 0, 'sum': 0})

    for datapoint in datapoints:
        aggregate = endpoint_aggregates[datapoint.endpoint]
        aggregate['sum'] += sum(mapper(datapoint).values())
        aggregate['count'] += 1

    averaged = {endpoint: aggregate['sum'] / aggregate['count']
                for endpoint, aggregate in endpoint_aggregates.items()}

    return averaged


@explorerapi.route('/applications/<app_name>/aggregate/<agg_type>')
def application_aggregate(app_name, agg_type):
    app = get_one_or_404(Application.query.filter_by(name=app_name))

    from_timestamp = request.args['from']
    to_timestamp = request.args['to']
    mapper = mapper_with_name(agg_type)

    datapoints = list(app.request_endpoint_by_minute.filter(
        RequestEndpointByMinute.timestamp >= from_timestamp,
        RequestEndpointByMinute.timestamp <= to_timestamp))

    averaged_aggregates = aggregate_endpoint_data(mapper, datapoints)

    sorted_aggregates = sorted(
        [(endpoint, value) for endpoint, value in averaged_aggregates.items()],
        key=operator.itemgetter(1),
        reverse=True)

    return data_response(sorted_aggregates)


@explorerapi.route('/applications/<app_name>/endpoints/<endpoint>/chart/<chart_type>')
def application_endpoint_chart(app_name, endpoint, chart_type):
    app = get_one_or_404(Application.query.filter_by(name=app_name))

    from_timestamp = request.args['from']
    to_timestamp = request.args['to']
    mapper = mapper_with_name(chart_type)

    datapoints = app.request_endpoint_by_minute.filter(
        RequestEndpointByMinute.timestamp >= from_timestamp,
        RequestEndpointByMinute.timestamp <= to_timestamp)

    return data_response({
        int(datapoint.timestamp.timestamp()) * 1000: mapper(datapoint) for datapoint in datapoints
    })
