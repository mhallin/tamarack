from edn_format import Keyword, dumps
from flask import current_app


def keywordize(s):
    return Keyword(s.replace('_', '-'))


def py_to_clj(v):
    if isinstance(v, dict):
        return {(keywordize(k) if isinstance(k, str) else k): py_to_clj(v)
                for k, v in v.items()}

    if any(isinstance(v, c) for c in (list, tuple, set, frozenset)):
        return v.__class__([py_to_clj(x) for x in v])

    return v


def ednify(data):
    return current_app.response_class(
        dumps(py_to_clj(data)).encode('utf-8'),
        mimetype='application/edn; charset=UTF-8')
