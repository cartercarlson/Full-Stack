import media
import fresh_tomatoes

rambo = media.Movie("Rambo", "A movie of Sylvester Stallone kicking ass",
	"https://images-na.ssl-images-amazon.com/images/I/51VCKIqNU2L.jpg",
	"https://www.youtube.com/watch?v=J5SdTeijDhY")
#print(rambo.storyline)

nemo = media.Movie("Finding Nemo","Little Nemo gets lost in the big blue ocean",
	"https://larryfire.files.wordpress.com/2011/10/pva6ds.jpg",
	"https://www.youtube.com/watch?v=ndq9-vmD058")
#print nemo.storyline
#nemo.show_trailer()

dory = media.Movie("Finding Dory", "The knockoff of Finding Nemo",
	"https://storemedia.cineplex.com/store/promo/posters/SuperTicket_Poster_800x1200_FindingDoryfinal.jpg",
	"https://www.youtube.com/watch?v=3JNLwlcPBPI")

movies = [rambo, nemo, dory]
#fresh_tomatoes.open_movies_page(movies)
#print media.Movie.VALID_RATINGS

print media.Movie.__doc__, media.Movie.__name__, media.Movie.__module__
