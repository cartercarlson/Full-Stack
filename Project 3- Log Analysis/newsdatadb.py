# "Database code" for newsdata.
# Python 2.7.13
import MySQLdb

DBNAME = "newstatadb"
db = MySQLdb.connect(database=DBNAME)
c = db.cursor()
# change spaces to dashes
c.execute("""UPDATE articles
    SET title = REPLACE(title, ' ', '-')
    """)
# remove everything after comma in title
c.execute("""UPDATE articles
    SET title = left(title, strpos(title, ',') -1)
    """)
# remove apostrophe
c.execute("""UPDATE articles
    SET title = REPLACE(title, '''', '')
    """)
# Shorten article.title lengths so they are as short as log.paths.
# I found that if I didn't shorten a few of the article titles, the
# update would skip over the log.path and not change the log.path to
# the correct title
c.execute("""UPDATE articles
    SET title = REPLACE(title,
    'There-are-a-lot-of-bear', 'So-many-bears')
    """)
c.execute("""UPDATE articles
    SET title = REPLACE(title,
    'Goats-eat-Googles-law', 'Goats-eat-Googles')
    """)
c.execute("""UPDATE articles
    SET title = REPLACE(title,
    'Trouble-for-troubled-troublemaker', 'Trouble-for-troubled')
    """)
# Now that all the article.titles work, fix log.path records to the correct
# matching title
c.execute("""UPDATE log
    SET path = articles.title
    FROM articles where log.path ~* articles.title
    """)

# Query for Question 1: What are the most popular 3 articles of all time?
c.execute("""SELECT articles.title AS title, count(log.path) AS views
    FROM articles
    LEFT JOIN log ON title = log.path
    GROUP BY title
    ORDER BY views DESC
    LIMIT 3
    """)
c.fetchall()
db.commit()
db.close()

# Query for Question 2: Who are the most popular article authors of all time?
db = MySQLdb.connect(database=DBNAME)
c = db.cursor()
c.execute("""SELECT authors.name AS name, count(log.path) AS views
    FROM articles
    LEFT JOIN log ON articles.title = log.path
    LEFT JOIN authors ON articles.author = authors.id
    GROUP BY name
    ORDER BY views DESC
    """)
c.fetchall()
db.close()

# Queries for Question 3: On which days did more than 1% of requests lead to
# errors?
db = MySQLdb.connect(database=DBNAME)
c = db.cursor()
# Create view of the count of errors per day
c.execute("""CREATE VIEW numerator AS
    SELECT time::date AS date_group, count(*) AS count
    FROM log
    WHERE status != '200 OK'
    GROUP BY date_group
    """)
# Create view of the count of all status updates
c.execute("""CREATE VIEW denominator AS
    SELECT time::date AS date_group, count(*) AS count
    FROM log
    GROUP BY date_group
    """)
# Actual query
c.execute("""SELECT numerator.date_group,
    (numerator.count * 100.0 / denominator.count) AS percent
    FROM numerator, denominator
    WHERE numerator.date_group = denominator.date_group AND
        numerator.count * 100.0 / denominator.count > 1
    """)
c.fetchall()
db.close()
