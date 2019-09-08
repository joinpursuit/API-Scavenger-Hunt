# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
    *endpoint = https://www.restapitutorial.com/httpstatuscodes.html
    *status meaning = OK
    *WWID = Request has succeeded. 
2. 301
    *endpoint = timewarnercable.com
    *status meaning = Moved Permanetly
    *WWID = 
3. 400
    *endpoint = URL 
    *status meaning = Bad request
    *WWID = 
4. 401
    *endpoint = URL 
    *status meaning = Unauthorized 
    *WWID = 
5. 403
    *endpoint = https://www.restapitutorial.com/httpstatuscodes.htm 
    *status meaning = Forbidden
    *WWID = 
6. 404
    *endpoint = https://www.fbi.gov/criminal-records/
    *status meaning = Not found
    *WWID = Nothing matching the requested URI
7. 418
    *endpoint = URL 
    *status meaning = I'm a teapot (RFC 2324)
    *WWID = 
8. 500
    *endpoint = URL 
    *status meaning = Internal Server Error
    *WWID = 

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
    url: https://catfact.ninja/fact
    json: "fact": "Fossil records from two million years ago show evidence of jaguars.",
      "length": 67

2. A list of 150 random users in English.
    url: https://randomuser.me/api/?results=150
    json:     "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "jaime",
                "last": "medina"
            },
3. All the repos on Github with Pursuit their name
    url: https://api.github.com/search/repositories?q=pursuit-core
    json: "items": [
        {
            "id": 63269236,
            "node_id": "MDEwOlJlcG9zaXRvcnk2MzI2OTIzNg==",
            "name": "Pursuit-Core-Android",
            "full_name": "joinpursuit/Pursuit-Core-Android",

4. All the JavaScript repos on Github with Pursuit in their name
    url: https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc
    json:   "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,

5. All the Swift repos on Github with Pursuit in their name
    url: https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc
    json:   "language": "Swift",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,

6. A list of all Pokemon
url: https://pokeapi.co/api/v2/pokemon
json:     "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
7. A list of all items in Fortnite
url: https://www.fortnitehut.com/free-api?rarity=epic
json:           "rarityid": {
                "name": "epic",
                "date": "September 8th 2019"
            }
        }
    ],
8. A list of all Game of Thrones Episodes.
url: https://api.got.show/api/map/episodes
json:     "message": "Success",
    "data": [
        {
            "characters": [
                "Viserys Targaryen",
                "Catelyn Stark",
                "Cersei Lannister",
                "Jaime Lannister",

9. A list of all songs with "Love" in the title.
url: https://itunes.apple.com/search?term=love
json: "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", 
10. All information about Petyr Baelish from the Game of Thrones books
url: https://www.anapioficeandfire.com/api/characters/823
json:    "url": "https://www.anapioficeandfire.com/api/characters/823",
    "name": "Petyr Baelish",
    "gender": "Male",
    "culture": "Valemen",
    "born": "In 268 AC, at the Fingers",
11. All the movies Leonardo Dicaprio has acted in
url:
json: