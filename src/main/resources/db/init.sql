DROP DATABASE myhuiban;

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
                            id BIGINT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            website VARCHAR(255),
                            abbreviation VARCHAR(255),
                            call_for_papers TEXT,
                            CCF VARCHAR(10),
                            CORE VARCHAR(10),
                            QUALIS VARCHAR(10),
                            submission_deadline DATE,
                            notification_date DATE,
                            conference_date DATE,
                            location VARCHAR(255),
                            frequency INT,
                            view_count BIGINT,
                            is_postponed BOOLEAN
);


INSERT INTO conference (name, website, abbreviation, call_for_papers, CCF, CORE, QUALIS, submission_deadline, notification_date, conference_date, location, frequency, view_count, is_postponed)
VALUES
    ('International Conference on Machine Learning', 'http://icml.cc', 'ICML', 'Call for papers details...', 'A', 'A*', 'A1', '2024-06-01', '2024-07-01', '2024-08-01', 'San Francisco, USA', 38, 1500, FALSE),
    ('Conference on Neural Information Processing Systems', 'http://neurips.cc', 'NeurIPS', 'Call for papers details...', 'A', 'A*', 'A1', '2024-06-15', '2024-07-15', '2024-08-15', 'Montreal, Canada', 35, 2000, FALSE);


CREATE TABLE journal (
                         id BIGINT AUTO_INCREMENT PRIMARY KEY,
                         name VARCHAR(255) NOT NULL,
                         website VARCHAR(255),
                         special_issue TEXT,
                         CCF VARCHAR(10),
                         submission_deadline DATE,
                         impact_factor VARCHAR(10),
                         publisher VARCHAR(255),
                         ISSN VARCHAR(20),
                         view_count BIGINT
);

INSERT INTO journal (name, website, special_issue, CCF, submission_deadline, impact_factor, publisher, ISSN, view_count)
VALUES
    ('Journal of Machine Learning Research', 'http://jmlr.org', 'Special Issue on Deep Learning', 'A', '2024-06-01', '2.567', 'MIT Press', '1533-7928', 1200),
    ('IEEE Transactions on Neural Networks', 'https://www.ieee.org', 'Special Issue on Reinforcement Learning', 'A*', '2024-07-01', '5.123', 'IEEE', '1045-9227', 1500);



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
