from .defaults import Config as DefaultConfig


class Config(DefaultConfig):
    DEBUG = True
    SQLALCHEMY_ECHO = True
