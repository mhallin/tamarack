from edn_format import Keyword

from tamarack.common.edn import py_to_clj


def test_number():
    assert py_to_clj(10) == 10


def test_string():
    assert py_to_clj('test') == 'test'


def test_array():
    assert py_to_clj([1, 2, 3]) == [1, 2, 3]


def test_tuple():
    assert py_to_clj((1, 2, 3)) == (1, 2, 3)


def test_set():
    assert py_to_clj(set([1, 2, 3])) == set([1, 2, 3])


def test_frozenset():
    assert py_to_clj(frozenset([1, 2, 3])) == frozenset([1, 2, 3])


def test_dict():
    assert py_to_clj({'key': 'value'}) == {Keyword('key'): 'value'}


def test_dict_in_dict():
    assert py_to_clj({'items': {'key': 'value'}}) \
        == {Keyword('items'): {Keyword('key'): 'value'}}


def test_dict_in_list():
    assert py_to_clj([{'a': 1}, {'b': 2}]) \
        == [{Keyword('a'): 1}, {Keyword('b'): 2}]


def test_dict_in_tuple():
    assert py_to_clj(({'a': 1}, {'b': 2})) \
        == ({Keyword('a'): 1}, {Keyword('b'): 2})


def test_keyword_cases():
    assert py_to_clj({'full_name': 'test'}) \
        == {Keyword('full-name'): 'test'}
