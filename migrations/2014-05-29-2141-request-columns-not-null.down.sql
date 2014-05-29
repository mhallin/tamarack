ALTER TABLE request_by_minute
    ALTER COLUMN request_count DROP NOT NULL,
    ALTER COLUMN error_count DROP NOT NULL;
