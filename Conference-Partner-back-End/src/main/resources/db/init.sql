DROP DATABASE myhuiban;

CREATE DATABASE myhuiban;
USE myhuiban;

CREATE TABLE user (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY UNIQUE,
                      user_name VARCHAR(255) NOT NULL UNIQUE,
                      email VARCHAR(255) NOT NULL,
                      password VARCHAR(255) NOT NULL,
                      institution VARCHAR(255),
                      registration_time TIMESTAMP,
                      role VARCHAR(255) NOT NULL
);

-- 插入初始用户数据
INSERT INTO user (user_name, email, password, institution, registration_time, role)
VALUES
    ('admin', 'admin@example.com', '$2a$10$DowJonesIndexMayRise', 'Admin Institution', '2024-01-01 12:00:00', 'ROLE_ADMIN'),
    ('user', 'user@example.com', '$2a$10$DowJonesIndexMayFall', 'User Institution', '2024-01-01 12:00:00', 'ROLE_USER');


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
                            is_postponed BOOLEAN,
                            last_modified_date DATE,
                            last_modified_user VARCHAR(255)
);


INSERT INTO conference (name, website, abbreviation, call_for_papers, CCF, CORE, QUALIS, submission_deadline, notification_date, conference_date, location, frequency, view_count, is_postponed, last_modified_date, last_modified_user)
VALUES
    ('International Conference on Machine Learning', 'http://icml.cc', 'ICML', 'Call for papers details...', 'A', 'A*', 'A1', '2024-06-01', '2024-07-01', '2024-08-01', 'San Francisco, USA', 38, 1500, FALSE, '2024-06-10', 'user1'),
    ('Conference on Neural Information Processing Systems', 'http://neurips.cc', 'NeurIPS', 'Call for papers details...', 'A', 'A*', 'A1', '2024-06-15', '2024-07-15', '2024-08-15', 'Montreal, Canada', 35, 2000, FALSE, '2024-06-10', 'user1');

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
                         view_count BIGINT,
                         last_modified_date DATE,
                         last_modified_user VARCHAR(255)
);

INSERT INTO journal (name, website, special_issue, CCF, submission_deadline, impact_factor, publisher, ISSN, view_count, last_modified_date, last_modified_user)
VALUES
    ('Journal of Machine Learning Research', 'http://jmlr.org', 'Special Issue on Deep Learning', 'A', '2024-06-01', '5.12', 'MIT Press', '1532-4435', 1200, '2024-06-10', 'admin'),
    ('Neural Networks', 'http://elsevier.com/locate/neunet', 'Special Issue on Reinforcement Learning', 'A', '2024-07-15', '4.73', 'Elsevier', '0893-6080', 800, '2024-06-10', 'admin');


CREATE TABLE follow_journal (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                user_id BIGINT NOT NULL,
                                journal_id BIGINT NOT NULL,
                                FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
                                FOREIGN KEY (journal_id) REFERENCES journal(id) ON DELETE CASCADE
);

INSERT INTO follow_journal (user_id, journal_id) VALUES
                                                     (1, 1),
                                                     (2, 2);

CREATE TABLE follow_conference (
                                   id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                   user_id BIGINT NOT NULL,
                                   conference_id BIGINT NOT NULL,
                                   FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
                                   FOREIGN KEY (conference_id) REFERENCES conference(id) ON DELETE CASCADE
);

INSERT INTO follow_conference (user_id, conference_id) VALUES
                                                           (1, 1),
                                                           (2, 2);


CREATE TABLE participate_conference (
                                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                        user_id BIGINT NOT NULL,
                                        conference_id BIGINT NOT NULL,
                                        FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
                                        FOREIGN KEY (conference_id) REFERENCES conference(id) ON DELETE CASCADE
);

INSERT INTO participate_conference (user_id, conference_id) VALUES
                                                                (1, 1),
                                                                (2, 2);

ALTER TABLE journal ADD COLUMN call_for_papers TEXT;
