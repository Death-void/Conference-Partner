DROP DATABASE myhuiban

CREATE DATABASE myhuiban;
USE myhuiban;

CREATE TABLE user (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY UNIQUE,
                      user_name VARCHAR(255) NOT NULL UNIQUE,
                      email VARCHAR(255) NOT NULL,
                      password VARCHAR(255) NOT NULL,
                      institution VARCHAR(255),
                      registration_time TIMESTAMP
);

INSERT INTO user (user_name, email, password, institution, registration_time) VALUES
                                                                                  ('user1', 'user1@example.com', '$2a$10$7Q7rOd/oPSK.s4xPSzX5M.3Ow5nxjG5B27I7jN5XBItuMwBsSlD6a', 'Institution1', '2023-05-29 10:00:00'),
                                                                                  ('user2', 'user2@example.com', '$2a$10$6V3BnA9L1QfJujVuA5vX8O5G74PIROdBdS1Q/.IRrfD.ZMt5F7O0C', 'Institution2', '2023-05-29 11:00:00');

CREATE TABLE role (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY UNIQUE,
                      role VARCHAR(255) NOT NULL
);

INSERT INTO role (role) VALUES
                            ('ROLE_USER'),
                            ('ROLE_ADMIN');

CREATE TABLE conference (
                            id BIGINT AUTO_INCREMENT PRIMARY KEY UNIQUE,
                            name VARCHAR(255) NOT NULL,
                            abbreviation VARCHAR(255),
                            ccf VARCHAR(255),
                            core VARCHAR(255),
                            qualis VARCHAR(255),
                            submission_deadline DATE,
                            notification_date DATE,
                            conference_date DATE,
                            location VARCHAR(255),
                            frequency INT
);

INSERT INTO conference (name, abbreviation, ccf, core, qualis, submission_deadline, notification_date, conference_date, location, frequency) VALUES
                                                                                                                                                 ('Conference 1', 'Conf1', 'A', 'B', 'C', '2024-06-01', '2024-07-01', '2024-08-01', 'Location 1', 10),
                                                                                                                                                 ('Conference 2', 'Conf2', 'A', 'B', 'C', '2024-06-02', '2024-07-02', '2024-08-02', 'Location 2', 11);

CREATE TABLE journal (
                         id BIGINT AUTO_INCREMENT PRIMARY KEY UNIQUE,
                         name VARCHAR(255) NOT NULL,
                         special_issue VARCHAR(255),
                         ccf VARCHAR(255),
                         submission_deadline DATE,
                         impact_factor VARCHAR(255),
                         publisher VARCHAR(255)
);

INSERT INTO journal (name, special_issue, ccf, submission_deadline, impact_factor, publisher) VALUES
                                                                                                  ('Journal 1', 'Special Issue 1', 'A', '2024-06-01', '5.0', 'Publisher 1'),
                                                                                                  ('Journal 2', 'Special Issue 2', 'A', '2024-06-02', '6.0', 'Publisher 2');

CREATE TABLE follow_journal (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                user_id BIGINT NOT NULL,
                                journal_id BIGINT NOT NULL,
                                FOREIGN KEY (user_id) REFERENCES user(id),
                                FOREIGN KEY (journal_id) REFERENCES journal(id)
);

INSERT INTO follow_journal (user_id, journal_id) VALUES
                                                     (1, 1),
                                                     (2, 2);

CREATE TABLE follow_conference (
                                   id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                   user_id BIGINT NOT NULL,
                                   conference_id BIGINT NOT NULL,
                                   FOREIGN KEY (user_id) REFERENCES user(id),
                                   FOREIGN KEY (conference_id) REFERENCES conference(id)
);

INSERT INTO follow_conference (user_id, conference_id) VALUES
                                                           (1, 1),
                                                           (2, 2);

CREATE TABLE browse (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        user_id BIGINT NOT NULL,
                        browse_count INT NOT NULL,
                        FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO browse (user_id, browse_count) VALUES
                                               (1, 5),
                                               (2, 10);

CREATE TABLE participate_conference (
                                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                        user_id BIGINT NOT NULL,
                                        conference_id BIGINT NOT NULL,
                                        FOREIGN KEY (user_id) REFERENCES user(id),
                                        FOREIGN KEY (conference_id) REFERENCES conference(id)
);

INSERT INTO participate_conference (user_id, conference_id) VALUES
                                                                (1, 1),
                                                                (2, 2);
