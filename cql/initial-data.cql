CREATE KEYSPACE IF NOT EXISTS tamarack
  WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE tamarack;

CREATE TABLE IF NOT EXISTS application (
  app_name text,
  app_id uuid,
  display_name text,
  PRIMARY KEY (app_name)
);

CREATE INDEX IF NOT EXISTS application_app_id_idx ON application (app_id);

CREATE TABLE IF NOT EXISTS request_by_minute (
  app_id uuid,
  date_part text,
  timestamp timestamp,
  errors counter,
  requests counter,
  total_time counter,
  PRIMARY KEY ((app_id, date_part), timestamp)
);

CREATE TABLE IF NOT EXISTS request_endpoint_by_minute_for_agg (
  app_id uuid,
  date_part text,
  timestamp timestamp,
  endpoint text,
  errors counter,
  requests counter,
  total_time counter,
  PRIMARY KEY ((app_id, date_part), timestamp, endpoint)
);

CREATE TABLE IF NOT EXISTS request_endpoint_by_minute (
  app_id uuid,
  date_part text,
  timestamp timestamp,
  endpoint text,
  errors counter,
  requests counter,
  total_time counter,
  PRIMARY KEY ((app_id, date_part), endpoint, timestamp)
);
