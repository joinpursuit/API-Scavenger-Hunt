# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
url: https://catfact.ninja/fact?max_length=140
{
    "fact": "The Egyptian Mau is probably the oldest breed of cat. In fact, the breed is so ancient that its name is the Egyptian word for “cat.”",
    "length": 132
}

1. A list of 150 random users in English.
url: https://randomuser.me/api/?results=150


1. All the repos on Github with Pursuit in their name
url: https://api.github.com/users/pursuit/repos


1. All the JavaScript repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&

1. All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&

1. A list of all Pokemon
https://pokeapi.co/api/v2/pokemon/

1. A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/items/list

1. A list of all Game of Thrones Episodes.
https://api.got.show/api/map/episodes

1. A list of all songs with "Love" in the title.
https://itunes.apple.com/search?term=love

1. All information about Petyr Baelish from the Game of Thrones books
https://www.anapioficeandfire.com/api/characters/823


1. All the movies Leonardo Dicaprio has acted in


# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
Success status response code indicates that the request has succeeded. Depends on the HTTP request method: GET : The resource has been fetched and is transmitted in the message body.
1. 301
Used for permanent URL redirection, meaning current links or records using the URL that the response is received for should be updated. The new URL should be provided in the Location field included with the response.
1. 400
Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error.
1. 401
Authentication Error, lacks valid authentication.
1. 403
403 access to the requested (valid) URL by the client is Forbidden for some reason.  Sever understands request, but will not fulfill due to client
1. 404
Not found. Page not found, server not found. Browser is able to communicate with server, but the server could not find the request.
1. 418
That's a joke....
1. 500
Internal Server Error. Indicates server encountered an unexpected condition that prevented it from fulfilling the request. 


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat





