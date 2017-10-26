import media
import fresh_tomatoes

# Rambo movie: movie title, storyline, poster image and movie trailer
rambo = media.Movie(
    "Rambo",
    "A movie of Sylvester Stallone kicking ass",
    "https://images-na.ssl-images-amazon.com/images/I/51VCKIqNU2L.jpg",
    "https://www.youtube.com/watch?v=J5SdTeijDhY")

# Finding Nemo movie: movie title, storyline, poster image and movie trailer
nemo = media.Movie(
    "Finding Nemo",
    "Little Nemo gets lost in the big blue ocean",
    "https://larryfire.files.wordpress.com/2011/10/pva6ds.jpg",
    "https://www.youtube.com/watch?v=ndq9-vmD058")

# Finding Dory movie: movie title, storyline, poster image and movie trailer
dory = media.Movie(
    "Finding Dory",
    "The knockoff of Finding Nemo",
    "https://storemedia.cineplex.com/store/promo/posters/SuperTicket_Poster_800x1200_FindingDoryfinal.jpg",  # NOQA
    "https://www.youtube.com/watch?v=3JNLwlcPBPI")

# Set the movies that will go to the media file
movies = [rambo, nemo, dory]

# Open the HTML file in a webbrowser using fresh_tomatoes.py
fresh_tomatoes.open_movies_page(movies)
