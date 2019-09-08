# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200

endpoint = "https://www.google.com"
status meaning = "Status Ok, successful"
what would my app do? = "Load the page normally."

2. 301


endpoint = "https://www.abcfamily.com"
status meaning = "Url has been moved permanently"
what would my app do? = "redirect the user to the new page"

3. 400


endpoint =
status meaning = "Bad Request: The server cannot or will not process the request due to client error."
what would my app do? =


4. 401


endpoint =
status meaning = "Unauthorized: The user does not have valid authentication credentials."
what would my app do? =


5. 403

endpoint =
status meaning = "Forbidden: request was valid but server is refusing action either because user doesn't have permission or an account."
what would my app do? =


6. 404

endpoint = "https://twitter.com/therealdonaldtrump"
status meaning = "Not Found: Resource could not be found but may be available in the future."
what would my app do? = "Alert the user that the page doesn't exist."

7. 418


endpoint = "https://www.google.com/teapot"
status meaning = "I'm a teapot: Returned by teapots requested to brew coffee."
what would my app do? = "alert the user that it's a teapot"


8. 500


endpoint =
status meaning = "Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable"
what would my app do? =



For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat


# Part Two

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact


endpoint = "https://catfact.ninja/facts?limit=1"
"data": [
   {
     "fact": "Baking chocolate is the most dangerous chocolate to your cat.",
     "length": 61
   }

2. A list of 150 random users in English.


endpoint = "https://randomuser.me/api/?results=150"
data = {

}

3. All the repos on Github with Pursuit their name


endpoint = "https://api.github.com/search/repositories?q=pursuit+user:joinpursuit"
data = {

}

4. All the JavaScript repos on Github with Pursuit in their name


endpoint = "https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc"
data = {

}

5. All the Swift repos on Github with Pursuit in their name


endpoint = "https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc"
data = {

}

6. A list of all Pokemon


endpoint = "https://pokeapi.co/api/v2/pokemon"
"data": [
       {
           "name": "bulbasaur",
           "url": "https://pokeapi.co/api/v2/pokemon/1/"
       },
       {
           "name": "ivysaur",
           "url": "https://pokeapi.co/api/v2/pokemon/2/"
       },

7. A list of all items in Fortnite


endpoint = "https://www.fortnitehut.com/free-api?rarity=epic"
data = {

}

8. A list of all Game of Thrones Episodes.


endpoint = "https://api.got.show/api/map/episodes"
data = {

}

9. A list of all songs with "Love" in the title.


endpoint = "https://itunes.apple.com/search?term=love"
data = {

}

10. All information about Petyr Baelish from the Game of Thrones books


endpoint = "https://www.anapioficeandfire.com/api/characters/823"
data = {

}

11. All the movies Leonardo Dicaprio has acted in


endpoint = "https://itunes.apple.com/search?term=leonardo+dicaprio"
