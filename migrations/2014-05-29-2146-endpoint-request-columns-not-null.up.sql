ALTER TABLE request_endpoint_by_minute
    ALTER COLUMN request_count SET NOT NULL,
    ALTER COLUMN error_count SET NOT NULL;
