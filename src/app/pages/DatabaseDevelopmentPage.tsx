import { ImageWithFallback } from "../components/ImageWithFallback";
import erdImg from "../../imports/image-15.png";
import testPlanImg from "../../imports/image-2.png";

export function DatabaseDevelopmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="mb-12">
        <h1 className="mb-4">Database Development</h1>
        <p className="text-lg max-w-3xl">
          The Database Development Page focuses on how data is organised, stored, and retrieved. The work below is built around my Library Management Database coursework: a relational database that tracks books, students, and book loans. The page begins with my original validation test plan from the course, then extends into the ERD and SQL code that supports the same schema, evidencing not just that I can plan defensively against bad data but also that I understand how the database itself is structured and queried.
        </p>
      </div>

      <section className="mb-12 md:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#E8B923]"></div>
          <h2>Library Database – Validation Test Plan</h2>
        </div>
        <p className="text-lg mb-6 md:mb-8 max-w-3xl">
          A formal validation test plan I produced as part of my database coursework, documenting how the Library Management Database should respond to a wide range of inputs across three tables (Books, Students, Loans). The test plan uses a 6-column format covering test ID, what is being tested, test data, expected result, actual result, and pass/fail status. It tests valid inputs alongside invalid cases — empty fields, wrong data types, and invalid record IDs — to evidence that the system handles user errors correctly.
        </p>
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <ImageWithFallback
              src={testPlanImg}
              alt="Library Database validation test plan"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#FF6B5B]"></div>
          <h2>Entity Relationship Diagram</h2>
        </div>
        <p className="text-lg mb-6 md:mb-8 max-w-3xl">
          An Entity Relationship Diagram for the Library Management Database, showing the three tables, their fields, primary keys, foreign keys, and the relationships between them. The diagram makes the schema readable at a glance without having to inspect any code: a Student can borrow many Books over time through the Loans table, which acts as the linking entity between them.
        </p>
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <ImageWithFallback
              src={erdImg}
              alt="Library Database ERD"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#17B3A6]"></div>
          <h2>SQL Code Examples</h2>
        </div>
        <p className="text-lg mb-6 md:mb-8 max-w-3xl">
          SQL code I have written for the Library Management Database based on the test plan and ERD. The examples below cover the three most common types of database operations: defining the structure (CREATE TABLE), populating it with data (INSERT INTO), and retrieving information from across multiple tables (SELECT with JOIN).
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4 min-w-0">
            <h3>CREATE TABLE Statements</h3>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`-- Create the Books table
CREATE TABLE Books (
    book_id          NUMBER PRIMARY KEY,
    title            VARCHAR2(150) NOT NULL,
    author           VARCHAR2(100) NOT NULL,
    genre            VARCHAR2(50),
    isbn             VARCHAR2(13) UNIQUE NOT NULL,
    copies_available NUMBER DEFAULT 0 NOT NULL
);

-- Create the Students table
CREATE TABLE Students (
    student_id NUMBER PRIMARY KEY,
    first_name VARCHAR2(50) NOT NULL,
    last_name  VARCHAR2(50) NOT NULL,
    year_group NUMBER NOT NULL,
    email      VARCHAR2(100) UNIQUE NOT NULL
);

-- Create the Loans table (links Students to Books)
CREATE TABLE Loans (
    loan_id       NUMBER PRIMARY KEY,
    book_id       NUMBER NOT NULL,
    student_id    NUMBER NOT NULL,
    date_borrowed DATE NOT NULL,
    due_date      DATE NOT NULL,
    date_returned DATE,
    CONSTRAINT fk_loans_book
        FOREIGN KEY (book_id) REFERENCES Books(book_id),
    CONSTRAINT fk_loans_student
        FOREIGN KEY (student_id) REFERENCES Students(student_id)
);`}</code></pre>
            </div>
            <p className="text-sm">
              SQL to create the three tables in the Library Management Database with appropriate data types, primary keys, foreign keys, and constraints.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4 min-w-0">
            <h3>INSERT Statements</h3>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`-- Insert sample books
INSERT INTO Books (book_id, title, author, genre, isbn, copies_available)
VALUES (1, 'Of Mice and Men', 'John Steinbeck', 'Classic', '9780140177398', 5);

INSERT INTO Books (book_id, title, author, genre, isbn, copies_available)
VALUES (2, 'The Hobbit', 'J.R.R. Tolkien', 'Fantasy', '9780261103283', 2);

INSERT INTO Books (book_id, title, author, genre, isbn, copies_available)
VALUES (3, '1984', 'George Orwell', 'Dystopian', '9780451524935', 4);

-- Insert sample students
INSERT INTO Students (student_id, first_name, last_name, year_group, email)
VALUES (1, 'John', 'Smith', 12, 'j.smith@school.ac.uk');

INSERT INTO Students (student_id, first_name, last_name, year_group, email)
VALUES (2, 'Emma', 'Johnson', 13, 'e.johnson@school.ac.uk');

INSERT INTO Students (student_id, first_name, last_name, year_group, email)
VALUES (3, 'Michael', 'Brown', 11, 'm.brown@school.ac.uk');

-- Insert sample loans (one returned, two still active)
INSERT INTO Loans (loan_id, book_id, student_id, date_borrowed, due_date, date_returned)
VALUES (1, 1, 1, DATE '2026-04-01', DATE '2026-04-15', DATE '2026-04-14');

INSERT INTO Loans (loan_id, book_id, student_id, date_borrowed, due_date, date_returned)
VALUES (2, 2, 2, DATE '2026-04-20', DATE '2026-05-04', NULL);

INSERT INTO Loans (loan_id, book_id, student_id, date_borrowed, due_date, date_returned)
VALUES (3, 3, 1, DATE '2026-05-01', DATE '2026-05-15', NULL);`}</code></pre>
            </div>
            <p className="text-sm">
              SQL to populate each table with sample records, demonstrating that the relationships defined in the schema are respected when inserting linked records.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4 min-w-0">
            <h3>SELECT Queries with JOINs</h3>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`-- Query 1: List all currently active loans with student and book details
SELECT
    s.first_name,
    s.last_name,
    b.title       AS book,
    l.date_borrowed,
    l.due_date
FROM Loans l
JOIN Students s ON l.student_id = s.student_id
JOIN Books b    ON l.book_id    = b.book_id
WHERE l.date_returned IS NULL
ORDER BY l.due_date;

-- Query 2: Find overdue books (past due date and not yet returned)
SELECT
    s.first_name || ' ' || s.last_name AS student_name,
    s.email,
    b.title,
    l.due_date
FROM Loans l
JOIN Students s ON l.student_id = s.student_id
JOIN Books b    ON l.book_id    = b.book_id
WHERE l.date_returned IS NULL
  AND l.due_date < SYSDATE;

-- Query 3: Count how many times each book has been borrowed
SELECT
    b.title,
    COUNT(l.loan_id) AS times_borrowed
FROM Books b
LEFT JOIN Loans l ON b.book_id = l.book_id
GROUP BY b.book_id, b.title
ORDER BY times_borrowed DESC;`}</code></pre>
            </div>
            <p className="text-sm">
              SQL queries that retrieve data from multiple tables at once using JOIN, evidencing that I understand how to extract meaningful information from a relational database rather than just storing it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
