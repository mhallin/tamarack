ALTER TABLE request_endpoint_by_minute
    ALTER COLUMN request_count DROP NOT NULL,
    ALTER COLUMN error_count DROP NOT NULL;
