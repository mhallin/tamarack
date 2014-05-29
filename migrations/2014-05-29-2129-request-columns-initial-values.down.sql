UPDATE request_by_minute
    SET sensor_data = sensor_data
        || HSTORE(ARRAY['request-count', 'error-count'],
                  ARRAY[request_count::text, error_count::text]);