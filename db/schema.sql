-- ID - PRIMARY KEY
-- User email - EMAIL NOT NULL
-- Location (Long NOT NULL
-- Location / Lat) - FLOAT NOT NULL
-- Date - DATE NOT NULL
-- Time - TIME NOT NULL
-- User Input (sql injection protection) - TEXT

CREATE DATABASE safehaven;

\c safehaven;

CREATE TABLE reports(
    id              SERIAL PRIMARY KEY,
    user_email      TEXT NOT NULL,
    lat             FLOAT NOT NULL,
    lng             FLOAT NOT NULL,
    date            DATE NOT NULL,
    time            TIME NOT NULL,
    user_input      TEXT
);

INSERT INTO reports (user_email, lat, lng, date, time, authenticated) VALUES ('dummy_user@gmail.com', -37.80358354065614, 144.9829537530948, '2022-02-08', '19:21', TRUE);

INSERT INTO reports (user_email, lat, lng, date, time, authenticated) VALUES ('dummy_user@gmail.com', -37.801142115052, 144.977975573588, '2022-02-08', '21:12', TRUE);

INSERT INTO reports (user_email, lat, lng, date, time, authenticated) VALUES ('dummy_user@gmail.com', -37.860942804966975, 145.0335521558427, '2022-01-21', '11:29', TRUE);

INSERT INTO reports (user_email, lat, lng, date, time, authenticated) VALUES ('dummy_user@gmail.com', -37.86579137378682, 144.90928653091368, '2022-01-21', '11:29', FALSE);

INSERT INTO reports (user_email, lat, lng, date, time, authenticated) VALUES ('dummy_user@gmail.com', -37.82724588813131, 144.95809947096345, '2022-01-11', '16:19', TRUE);