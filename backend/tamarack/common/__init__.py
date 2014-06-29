from flask import abort

from .edn import ednify
from .generic import data_response


def get_one_or_404(query):
    obj = query.first()

    if not obj:
        abort(404)

    return obj


__all__ = ['ednify', 'data_response', 'get_one_or_404']
