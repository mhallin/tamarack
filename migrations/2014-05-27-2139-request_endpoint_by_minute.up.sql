CREATE TABLE request_endpoint_by_minute (
  app_id INTEGER REFERENCES application(id) NOT NULL,
  endpoint VARCHAR(100) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  sensor_data HSTORE NOT NULL,
  PRIMARY KEY (app_id, endpoint, timestamp)
);
