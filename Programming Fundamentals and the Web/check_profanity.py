import urllib

def read_text():
	quotes = open("C:/Users/Carter Carlson/Documents/Udacity/Full Stack Nanodegree/Programming Fundamentals and the Web/movie_quotes.txt")
	contents_of_file = quotes.read()
	quotes.close()
	check_profanity(contents_of_file)

def check_profanity(text_to_check):
	connection = urllib.urlopen("http://www.wdylike.appspot.com/?q=" + text_to_check)
	output = connection.read()
	print(output)
	connection.close()

read_text()