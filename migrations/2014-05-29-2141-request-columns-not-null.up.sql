ALTER TABLE request_by_minute
    ALTER COLUMN request_count SET NOT NULL,
    ALTER COLUMN error_count SET NOT NULL;
