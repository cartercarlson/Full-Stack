# Use the SimpleCookie class

from http.cookies import SimpleCookie, CookieError

out_cookie = SimpleCookie()
out_cookie["bearname"] = "Smokey Bear"
out_cookie["bearname"]["max-age"] = 600
out_cookie["bearname"]["httponly"] = True

# Then you can send the cookie as a header from the request handler:
self.send_header("Set-Cookie", out_cookie["bearname"].OutputString())

#To read incoming cookies, create a SimpleCookie from the Cookie header:
in_cookie = SimpleCookie(self.headers["Cookie"])
in_data = in_cookie["bearname"].value

# Be aware that a request might not have a cookie on it, in which case 
# accessing the Cookie header will raise a KeyError exception; or the cookie might 
# not be valid, in which case the SimpleCookie constructor will raise http.cookies.CookieError.