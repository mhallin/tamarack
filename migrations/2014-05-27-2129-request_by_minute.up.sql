CREATE TABLE request_by_minute (
  app_id INTEGER REFERENCES application(id) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  sensor_data HSTORE NOT NULL,
  PRIMARY KEY (app_id, timestamp)
);
