from sqlalchemy import Column

from ..db import db


class Application(db.Model):
    __tablename__ = 'application'

    id = Column(db.Integer, primary_key=True)
    name = Column(db.String(80), nullable=False, unique=True)
    display_name = Column(db.String(80), nullable=False)

    def __init__(self, name):
        self.name = name
        self.display_name = name

    def as_data(self):
        return {
            'id': self.id,
            'name': self.name,
            'display_name': self.display_name
        }

    @classmethod
    def by_name(cls, name):
        app = Application.query.filter(cls.name == name).first()

        if not app:
            app = Application(name)
            db.session.add(app)

        return app
