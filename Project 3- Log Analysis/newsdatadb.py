#!/usr/bin/env python
# "Database code" for newsdata.
# Python 2.7.13
import psycopg2

def get_query_results(query):
    DBNAME = "news"
    db = psycopg2.connect(database=DBNAME)
    c = db.cursor()
    c.execute(query)
    result = c.fetchall()
    db.close()
    return result


def print_top_articles():
    """Prints out the top 3 articles of all time."""
    query = """SELECT title, count(*) AS views
    FROM log
    JOIN articles ON log.path = concat('/article/', articles.slug)
    GROUP BY articles.title, status
    ORDER BY views DESC limit 3"""
    results = get_query_results(query)

    print("\nWhat are the top three articles of all time?\n")
    for title, views in results:
        print("  {} -- {} views".format(title, views))


def print_top_authors():
    """Prints a list of authors ranked by article views."""
    query = """
    SELECT authors.name, views
    FROM authors, query2_view
    WHERE authors.id = query2_view.name"""
    results = get_query_results(query)

    print("\nWho are the most popular article authors of all time?\n")
    for author, views in results:
        print("  {} -- {} views".format(author, views))


def print_errors_over_one():
    """Prints out the days where more than 1% of logged access requests were
    errors."""
    query = """SELECT numerator.date_group,
    (ROUND(numerator.count * 100.0 / denominator.count, 2)) AS percent
    FROM numerator, denominator
    WHERE numerator.date_group = denominator.date_group AND
        numerator.count * 100.0 / denominator.count > 1"""
    results = get_query_results(query)

    print(
        "\nWhich day did more than 1 percent of requests lead to errors?\n")
    for day, views in results:
        print("  {} -- {}%".format(day, views))


if __name__ == '__main__':
    print_top_articles()
    print_top_authors()
    print_errors_over_one()
