from collections import OrderedDict
from flask import jsonify, request

from .edn import ednify

GENERIC_MIME_TYPES = OrderedDict([
    ('application/json',
     lambda d: jsonify(**d) if isinstance(d, dict) else jsonify(items=d)),
    ('application/edn', ednify),
])

DEFAULT_MIME_TYPE = 'application/json'


def data_response(data):
    best_mime = request.accept_mimetypes.best_match(GENERIC_MIME_TYPES.keys())
    conversion = GENERIC_MIME_TYPES.get(best_mime)

    if not conversion:
        conversion = GENERIC_MIME_TYPES[DEFAULT_MIME_TYPE]

    return conversion(data)
