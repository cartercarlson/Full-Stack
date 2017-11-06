import webbrowser


class Movie():
    """ This class provides a way to store movie related information """

    def __init__(self, movie_title, movie_storyline,
                 poster_image, trailer_youtube):
        """ This function takes several arguments to
            construct the movie information"""
        self.title = movie_title
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube
# self is the object being created

    def show_trailer(self):
        """ This function allows the youtube trailer to load
         when you click on the movie picture """
        webbrowser.open(self.trailer_youtube_url)
