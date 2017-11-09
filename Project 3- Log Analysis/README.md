### Getting Started
To use this project you need to have python and newsdatadb.sql installed

You also need to install MySQLdb to your computer:
https://stackoverflow.com/questions/372885/how-do-i-connect-to-a-mysql-database-in-python

---

How to run the code
1. Download attached python script
2. Run newsdatadb.py
3. Enjoy!

---

Files included
newsdatadb.py
This code is the python script used to run the SQL queries on the database to
answer the 3 questions provided.

program_output.txt
This text document shows the results from the queries when they were all run
in the Vagrant VM, copied and pasted.

---

Views Created

numerator
This view counts the total number of errors for each day.  I chose denominator
because it's easy to use when it actually is used as a denominator.

denominator
This view counts the total number of status updates.  I think you can guess
why it's named denominator...

Enjoy! :)