"""update_counters function

Revision ID: 4026a7a9d9f
Revises: 23e475d6af9
Create Date: 2014-07-12 18:07:14.843760

"""

# revision identifiers, used by Alembic.
revision = '4026a7a9d9f'
down_revision = '23e475d6af9'

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.execute('''
        CREATE OR REPLACE FUNCTION hstore_sum
            (lhs hstore, rhs hstore)
            RETURNS hstore
            LANGUAGE sql
            IMMUTABLE

        AS $function$
            SELECT hstore(array_agg(key), array_agg(value::text))
                FROM (SELECT key, SUM(value::bigint) AS value
                    FROM (
                        SELECT (each(lhs)).*
                        UNION ALL
                        SELECT (each(rhs)).*
                    ) AS data
                    GROUP BY key
                ) AS agg
        $function$
    ''')

    op.execute('''
        CREATE OR REPLACE FUNCTION update_request_by_minute
            (in_app_id integer, in_timestamp timestamp,
                sensor_data_delta hstore, request_count_delta bigint, error_count_delta bigint)
            RETURNS VOID
            LANGUAGE plpgsql
    AS $function$
        BEGIN
            LOOP
                UPDATE request_by_minute SET
                    sensor_data = hstore_sum(sensor_data, sensor_data_delta),
                    request_count = request_count + request_count_delta,
                    error_count = error_count + error_count_delta
                WHERE
                    app_id = in_app_id AND
                    timestamp = in_timestamp;

                IF found THEN
                    RETURN;
                END IF;

                BEGIN
                    INSERT INTO request_by_minute
                        (app_id, timestamp, sensor_data, request_count, error_count)
                        VALUES (
                            in_app_id,
                            in_timestamp,
                            sensor_data_delta,
                            request_count_delta,
                            error_count_delta
                        );
                    RETURN;
                EXCEPTION WHEN unique_violation THEN
                    -- continue loop
                END;
            END LOOP;
        END;
    $function$
    ''')

    op.execute('''
        CREATE OR REPLACE FUNCTION update_request_endpoint_by_minute
            (in_app_id integer, in_timestamp timestamp, in_endpoint varchar(100),
                sensor_data_delta hstore, request_count_delta bigint, error_count_delta bigint)
            RETURNS VOID
            LANGUAGE plpgsql
    AS $function$
        BEGIN
            LOOP
                UPDATE request_endpoint_by_minute SET
                    sensor_data = hstore_sum(sensor_data, sensor_data_delta),
                    request_count = request_count + request_count_delta,
                    error_count = error_count + error_count_delta
                WHERE
                    app_id = in_app_id AND
                    timestamp = in_timestamp AND
                    endpoint = in_endpoint;

                IF found THEN
                    RETURN;
                END IF;

                BEGIN
                    INSERT INTO request_endpoint_by_minute
                        (app_id, timestamp, endpoint, sensor_data, request_count, error_count)
                        VALUES (
                            in_app_id,
                            in_timestamp,
                            in_endpoint,
                            sensor_data_delta,
                            request_count_delta,
                            error_count_delta
                        );
                    RETURN;
                EXCEPTION WHEN unique_violation THEN
                    -- continue loop
                END;
            END LOOP;
        END;
    $function$
    ''')


def downgrade():
    op.execute('''
        DROP FUNCTION IF EXISTS hstore_sum(hstore, hstore)
    ''')
    op.execute('''
        DROP FUNCTION IF EXISTS update_request_by_minute
            (integer, timestamp, hstore, bigint, bigint)
    ''')
    op.execute('''
        DROP FUNCTION IF EXISTS update_request_endpoint_by_minute
            (integer, timestamp, hstore, bigint, bigint)
    ''')
