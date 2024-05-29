CREATE DATABASE myhuiban;
USE myhuiban;

CREATE TABLE user (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      uniqueId VARCHAR(255) NOT NULL UNIQUE,
                      userName VARCHAR(255) NOT NULL,
                      email VARCHAR(255) NOT NULL UNIQUE,
                      password VARCHAR(255) NOT NULL,
                      institution VARCHAR(255),
                      registrationTime TIMESTAMP
);

INSERT INTO user (uniqueId, userName, email, password, institution, registrationTime) VALUES
                                                                                          ('uniqueId1', 'user1', 'user1@example.com', '$2a$10$7Q7rOd/oPSK.s4xPSzX5M.3Ow5nxjG5B27I7jN5XBItuMwBsSlD6a', 'Institution1', '2023-05-29 10:00:00'),
                                                                                          ('uniqueId2', 'user2', 'user2@example.com', '$2a$10$6V3BnA9L1QfJujVuA5vX8O5G74PIROdBdS1Q/.IRrfD.ZMt5F7O0C', 'Institution2', '2023-05-29 11:00:00');

CREATE TABLE user_role (
                           id BIGINT AUTO_INCREMENT PRIMARY KEY,
                           uniqueId VARCHAR(255) NOT NULL UNIQUE,
                           name VARCHAR(255) NOT NULL
);

INSERT INTO user_role (uniqueId, name) VALUES
                                           ('role1', 'ROLE_USER'),
                                           ('role2', 'ROLE_ADMIN');


CREATE TABLE role (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      uniqueId VARCHAR(255) NOT NULL UNIQUE,
                      role VARCHAR(255) NOT NULL
);

INSERT INTO role (uniqueId, role) VALUES
                                      ('uniqueRoleId1', 'ROLE_USER'),
                                      ('uniqueRoleId2', 'ROLE_ADMIN');

CREATE TABLE conference (
                            id BIGINT AUTO_INCREMENT PRIMARY KEY,
                            uniqueId VARCHAR(255) NOT NULL UNIQUE,
                            name VARCHAR(255) NOT NULL,
                            abbreviation VARCHAR(255),
                            CCF VARCHAR(255),
                            CORE VARCHAR(255),
                            QUALIS VARCHAR(255),
                            submissionDeadline DATE,
                            notificationDate DATE,
                            conferenceDate DATE,
                            location VARCHAR(255),
                            frequency INT
);

INSERT INTO conference (uniqueId, name, abbreviation, CCF, CORE, QUALIS, submissionDeadline, notificationDate, conferenceDate, location, frequency) VALUES
                                                                                                                                                        ('conf1', 'Conference 1', 'Conf1', 'A', 'B', 'C', '2024-06-01', '2024-07-01', '2024-08-01', 'Location 1', 10),
                                                                                                                                                        ('conf2', 'Conference 2', 'Conf2', 'A', 'B', 'C', '2024-06-02', '2024-07-02', '2024-08-02', 'Location 2', 11);
CREATE TABLE journal (
                         id BIGINT AUTO_INCREMENT PRIMARY KEY,
                         uniqueId VARCHAR(255) NOT NULL UNIQUE,
                         name VARCHAR(255) NOT NULL,
                         specialIssue VARCHAR(255),
                         CCF VARCHAR(255),
                         submissionDeadline DATE,
                         impactFactor VARCHAR(255),
                         publisher VARCHAR(255)
);

INSERT INTO journal (uniqueId, name, specialIssue, CCF, submissionDeadline, impactFactor, publisher) VALUES
                                                                                                         ('journal1', 'Journal 1', 'Special Issue 1', 'A', '2024-06-01', '5.0', 'Publisher 1'),
                                                                                                         ('journal2', 'Journal 2', 'Special Issue 2', 'A', '2024-06-02', '6.0', 'Publisher 2');

CREATE TABLE follow_journal (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                userId BIGINT NOT NULL,
                                journalId BIGINT NOT NULL,
                                FOREIGN KEY (userId) REFERENCES user(id),
                                FOREIGN KEY (journalId) REFERENCES journal(id)
);

INSERT INTO follow_journal (userId, journalId) VALUES
                                                   (1, 1),
                                                   (2, 2);


CREATE TABLE follow_conference (
                                   id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                   userId BIGINT NOT NULL,
                                   conferenceId BIGINT NOT NULL,
                                   FOREIGN KEY (userId) REFERENCES user(id),
                                   FOREIGN KEY (conferenceId) REFERENCES conference(id)
);

INSERT INTO follow_conference (userId, conferenceId) VALUES
                                                         (1, 1),
                                                         (2, 2);

CREATE TABLE browse (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        userId BIGINT NOT NULL,
                        browseCount INT NOT NULL,
                        FOREIGN KEY (userId) REFERENCES user(id)
);

INSERT INTO browse (userId, browseCount) VALUES
                                             (1, 5),
                                             (2, 10);

CREATE TABLE participate_conference (
                                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                        userId BIGINT NOT NULL,
                                        conferenceId BIGINT NOT NULL,
                                        FOREIGN KEY (userId) REFERENCES user(id),
                                        FOREIGN KEY (conferenceId) REFERENCES conference(id)
);

INSERT INTO participate_conference (userId, conferenceId) VALUES
                                                              (1, 1),
                                                              (2, 2);
