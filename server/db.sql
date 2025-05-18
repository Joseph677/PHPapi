CREATE DATABASE bookmarking_db;
USE bookmarking_db;
CREATE TABLE bookmarks(
    id SERIAL NOT NULL,
    title VARCHAR(255) NOT NULL, 
    link VARCHAR(255) NOT NULL, 
    date_added TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
    );
INSERT INTO bookmarks(title, link, date_added) VALUES ('React.js', 'https://react.dev', NOW());
INSERT INTO bookmarks(title, link, date_added) VALUES ('Docker', 'https://docker.com', NOW());
INSERT INTO bookmarks(title, link, date_added) VALUES ('GitHub', 'https://github.com', NOW());