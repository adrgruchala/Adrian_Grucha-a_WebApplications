-- CREATE USER 'root2'@'localhost' IDENTIFIED BY 'root';
-- GRANT ALL PRIVILEGES ON *.* TO 'root2'@'%';


CREATE  TABLE IF NOT EXISTS `books` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `isbn` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
    )

    ENGINE = InnoDB;

INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Dr Nice', 'Jan Kowalski', '123#1231');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Narcos', 'Jan Kowal', '123#123211');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Bombasto', 'Adrian Galus', '12321#1232211');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Celeritas', 'Adrian Galus', '#1232211');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Geniusz', 'Adrian Galus', '#213dsa321');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('IQ200', 'Adrian Galus', '#1231sca31');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('RubberMan', 'Adrian Galus', '#1231sca31');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Dynama', 'Adrian Galus', '#1231sca31');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Dr IQ', 'Adrian Galus', '#1231sca31');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Tornado', 'Adrian Galus', '#1231sca31');
INSERT INTO `books` (`name`, `author`, `isbn`) VALUES ('Magma', 'Adrian Galus', '#1231sca31');
