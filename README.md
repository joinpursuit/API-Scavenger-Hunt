# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
https://api.thecatapi.com/v1/images/search

  {
    "breeds": [
      
    ],
    "id": "6pk",
    "url": "https://cdn2.thecatapi.com/images/6pk.jpg",
    "width": 500,
    "height": 476
  }
]

1. A list of 150 random users in English.
https://randomuser.me/api/?results=150


  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "نازنین",
        "last": "رضایی"
      },
      "location": {
        "street": {
          "number": 669,
          "name": "شهید اکبر وصالی"
        },

*WE DONT HAVE ACCESS KEEP GETTING THE MESSAGE BELOW*

*"success": false,
  "location": "nyc",
  "error": {
    "code": "xx002",
    "message": "Access denied."
  },
  "data": {
    
  }
}*



1. All the repos on Github with Pursuit their name
https://api.github.com/search/repositories?q=pursuit

1. All the JavaScript repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit+language:javascript

1. All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit+language:swift

1. A list of all Pokemon
https://pokeapi.co/api/v2/pokemon

1. A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/items/list

1. A list of all Game of Thrones Episodes.
https://api.got.show/api/show/episodes

1. A list of all songs with "Love" in the title.
1. All information about Petyr Baelish from the Game of Thrones books
https://www.anapioficeandfire.com/api/characters/823

1. All the movies Leonardo Dicaprio has acted in
https://api.themoviedb.org/3/search/person?query=leonardodicaprio


# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
GOOGLE.COM
Standard response for successful HTTP requests.

1. 301
This and all future requests should be directed to the given url
1. 400
The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).

1. 401
Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.

1. 403
The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed). This code is also typically used if the request provided authentication via the WWW-Authenticate header field, but the server did not accept that authentication. The request should not be repeated

1. 404
The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
1. 418
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee.
http://www.error418.net/
1. 500
A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



