ALTER TABLE request_endpoint_by_minute 
    ADD COLUMN request_count BIGINT,
    ADD COLUMN error_count BIGINT;