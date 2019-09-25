USE v05o39yxaj6ep7p2;
USE "YOUR LOCAL DB NAME HERE";
DROP TABLE books;
CREATE TABLE books
(
    id INT NOT NULL
    AUTO_INCREMENT,
    title VARCHAR
    (200) NOT NULL,
    name_of_borrower VARCHAR
    (200) NOT NULL,
    date_borrowed DATE NOT NULL,
    due_date DATE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP ON
    UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY
    (id)
);
    INSERT INTO books
        (title,name_of_borrower,date_borrowed,due_date)
    values("To Kill a Mockingbird", "Evan", "2019-09-17", "2019-09-24"),
        ("Catcher in the Rye", "Maha", "2019-09-17", "2019-09-24"),
        ("Last of the Mohicans", "Jenny", "2019-09-17", "2019-09-24"),
        ("Captain Underpants", "Dan", "2019-09-17", "2019-09-24");
    SELECT *
    FROM books;