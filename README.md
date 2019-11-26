# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api


1. A random cat fact
url: https://catfact.ninja/fact?max_length=140

{
    "fact": "Cats respond most readily to names that end in an \\ee\\\" sound.\"\"\"",
    "length": 65
}

2. A list of 150 random users in English.

https://randomuser.me/api/?results=150

3. All the repos on Github with Pursuit their name

https://api.github.com/search/repositories?q=pursuit


4. All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&


5. All the Swift repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&

 
6. A list of all Pokemon

https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokedex=all

7. A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list


8. A list of all Game of Thrones Episodes.

https://api.got.show/api/map/episodes


9. A list of all songs with "Love" in the title.

https://itunes.apple.com/search?term=love


10. All information about Petyr Baelish from the Game of Thrones books

https://anapioficeandfire.com/api/characters?name=Petyr Baelish


11. All the movies Leonardo Dicaprio has acted in



# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200 - OK success status; (https://httpstatuses.com/200); keep coding

1. 301 - permanent URL redirection, best practice for upgrading from HTTP to HTTPS; (https://httpstatuses.com/301); re-link references

1. 400 - bad request response, server can't or won't process request due to percieved error (https://httpstatuses.com/400); start debugging

1. 401 - unauthorized error possibly due to invalid login credentials (https://httpstatuses.com/401); send request with a new header field 

1. 403 - forbidden (https://httpstatuses.com/403); send a request with new or different credentials

1. 404 - not found; (TechTarget); go back and check that files are stored in the correct location

1. 418 - server refuses to brew coffee because it is a teapot; (Mozilla); start debugging

1. 500 - there is an issue with the website's server; no specifics given (Lifewire); dubug debug debug


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



