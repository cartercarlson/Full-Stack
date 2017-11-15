# Log Analysis
## Getting Started
To use this project you need to have python and PostgreSQL installed.
In order for the python code to run, you need a Python interpreter, the
database, and the corresponding Python library containing the APIs to 
interact with the database software.	

---

### Introduction
The purpose of this project was to get practice interacting from a live
database both from the command line and from my code.  I then built and
refined complex queries and used them to draw conclusions.  The database
represents a log of a fictitious newspaper website, and the three questions
From my analysis I answer these questions:
1. What are the top three articles of all time?
2. Who are the most popular article authors of all time?
3. On which days did more than 1 percent of requests lead to errors?
---

### How to run the code
1. Download attached python script and zip file containing the SQL script.
2. If you use the provided Vagrantfile from Udacity, it will create a database
named news.  If you don't use Vagrant, you will need to create the **news**
database.
**3. Use this command to connect to the database: psql -d news -f newsdata.sq
and execute**

---

#### Files included
newsdatadb.py
This code is the python script used to run the SQL queries on the database to
answer the 3 questions provided.

program_output.txt
This text document shows the results from the queries when they were all run
in the Vagrant VM, copied and pasted.

---

#### Views Created

#### query2_view
CREATE VIEW query2_view AS
SELECT articles.author AS name, count(log.path) AS views
FROM articles, log
WHERE articles.slug=substring(path, 10)
GROUP BY articles.author
ORDER BY views DESC;

This view groups together the total count of views for each author.  This 
records articles.author which is the author id number, so from here I 
find the names based on id numbers.

##### numerator

CREATE VIEW numerator AS
SELECT time::date AS date_group, count(*) AS count
FROM log
WHERE status != '200 OK'
GROUP BY date_group;

This view counts the total number of errors for each day.  I chose numerator
because it's easy to use when it actually is used as a numerator.

###### denominator

CREATE VIEW denominator AS
SELECT time::date AS date_group, count(*) AS count
FROM log
GROUP BY date_group;

This view counts the total number of status updates.  I think you can guess
why it's named denominator...
Enjoy! :)