CREATE FUNCTION incr_key(field HSTORE, key TEXT, val BIGINT) RETURNS HSTORE IMMUTABLE AS $$
  SELECT field || HSTORE(key, COALESCE((field -> key)::BIGINT + val, val)::TEXT)
$$ LANGUAGE SQL;
