"""incr_key function

Revision ID: 23e475d6af9
Revises: 5a3a03e932e
Create Date: 2014-06-29 12:47:45.479186

"""

# revision identifiers, used by Alembic.
revision = '23e475d6af9'
down_revision = '5a3a03e932e'

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.execute('''
    CREATE OR REPLACE FUNCTION incr_key(field hstore, key text, val bigint)
        RETURNS hstore
        LANGUAGE sql
        IMMUTABLE
    AS $function$
        SELECT field || HSTORE(key, COALESCE((field -> key)::BIGINT + val, val)::TEXT)
    $function$
    ''')


def downgrade():
    op.execute('DROP FUNCTION incr_key(hstore, text, bigint)')
