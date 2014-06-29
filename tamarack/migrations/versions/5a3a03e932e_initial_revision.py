"""Initial revision

Revision ID: 5a3a03e932e
Revises: None
Create Date: 2014-06-27 21:55:35.102633

"""

# revision identifiers, used by Alembic.
revision = '5a3a03e932e'
down_revision = '4989fdc8401'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

def upgrade():
    op.create_table('application',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('display_name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('request_endpoint_by_minute',
    sa.Column('app_id', sa.Integer(), nullable=False),
    sa.Column('endpoint', sa.String(length=100), nullable=False),
    sa.Column('timestamp', sa.DateTime(timezone=True), nullable=False),
    sa.Column('sensor_data', postgresql.HSTORE(), nullable=False),
    sa.Column('request_count', sa.BigInteger(), nullable=False),
    sa.Column('error_count', sa.BigInteger(), nullable=False),
    sa.ForeignKeyConstraint(['app_id'], ['application.id'], ),
    sa.PrimaryKeyConstraint('app_id', 'endpoint', 'timestamp')
    )
    op.create_table('request_by_minute',
    sa.Column('app_id', sa.Integer(), nullable=False),
    sa.Column('timestamp', sa.DateTime(timezone=True), nullable=False),
    sa.Column('sensor_data', postgresql.HSTORE(), nullable=False),
    sa.Column('request_count', sa.BigInteger(), nullable=False),
    sa.Column('error_count', sa.BigInteger(), nullable=False),
    sa.ForeignKeyConstraint(['app_id'], ['application.id'], ),
    sa.PrimaryKeyConstraint('app_id', 'timestamp')
    )


def downgrade():
    op.drop_table('request_by_minute')
    op.drop_table('request_endpoint_by_minute')
    op.drop_table('application')
