USEC_TO_MSEC = 1 / 1000


def ms_per_req(datapoint):
    request_count = datapoint.request_count

    def val_per_req(x):
        return (USEC_TO_MSEC * x / request_count) if request_count else None

    return {k: val_per_req(v) for k, v in datapoint.sensor_data.items()}


def reqs_per_min(datapoint):
    return {'request_count': datapoint.request_count}


def errs_per_req(datapoint):
    request_count = datapoint.request_count
    error_count = datapoint.error_count

    return {'error_count': (error_count / request_count) if request_count else None}


def total_time(datapoint):
    return {'total_time': sum(datapoint.sensor_data.values()) * USEC_TO_MSEC}


MAPPERS = {
    'ms-per-req': ms_per_req,
    'reqs-per-min': reqs_per_min,
    'errs-per-req': errs_per_req,
    'total-time': total_time,
}


def mapper_with_name(name):
    return MAPPERS[name]
