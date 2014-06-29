"""hstore extension

Revision ID: 4989fdc8401
Revises: 23e475d6af9
Create Date: 2014-06-29 13:58:45.148809

"""

# revision identifiers, used by Alembic.
revision = '4989fdc8401'
down_revision = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.execute('CREATE EXTENSION hstore')


def downgrade():
    op.execute('DROP EXTENSION hstore')
