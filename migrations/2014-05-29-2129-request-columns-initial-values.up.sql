UPDATE request_by_minute
    SET request_count = (sensor_data -> 'request-count')::bigint,
        error_count = (sensor_data -> 'error-count')::bigint,
        sensor_data = sensor_data - ARRAY['request-count', 'error-count'];