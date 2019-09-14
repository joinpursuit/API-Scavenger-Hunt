
# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
   * endpoint = https://www.youtube.com/
   * status meaning = OK request was accepted without any issues
   * what I would do = continue using website normally
1. 301  
  * endpoint = https://facebook.com
  * status meaning = Moved Permanently The requested resource has been assigned a new permanent URI
  * what I would do = use one of the returned URIs
1. 400
* endpoint =
* status meaning = Bad Request
* what I would do =
1. 401
* endpoint =
* status meaning = Unauthorized
* what I would do =
1. 403
* endpoint = https://www.restapitutorial.com/httpstatuscodes.htm
* status meaning = Forbidden
* what I would do =
1. 404
* endpoint = https://github.com/404
* status meaning = Not Found The server has not found anything matching the Request-URI.
* what I would do =
1. 418
* endpoint =
* status meaning = I'm a teapot, an April fools joke
* what I would do =
1. 500
* endpoint =
* status meaning = Internal Server Error
* what I would do =


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
```js
 endpoint = https://catfact.ninja/fact
 json = {
    "fact": "A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).",
    "length": 156
}
```
1. A list of 150 random users in English.
```js
 endpoint = https://randomuser.me/api/?results=150
 json =  "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "jaime",
                "last": "medina"
            },
```
1. All the repos on Github with Pursuit their name
```js
 endpoint = https://api.github.com/search/repositories?q=pursuit+user:joinpursuit
 json = {
"total_count": 82,
"incomplete_results": false,
"items": [
{
"id": 63269236,
"node_id": "MDEwOlJlcG9zaXRvcnk2MzI2OTIzNg==",
"name": "Pursuit-Core-Android",
"full_name": "joinpursuit/Pursuit-Core-Android",
"private": false,
"owner": {
"login": "joinpursuit",
"id": 5825944,
"node_id": "MDEyOk9yZ2FuaXphdGlvbjU4MjU5NDQ=",
"avatar_url": "https://avatars2.githubusercontent.com/u/5825944?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/joinpursuit",
"html_url": "https://github.com/joinpursuit",
"followers_url": "https://api.github.com/users/joinpursuit/followers",
"following_url": "https://api.github.com/users/joinpursuit/following{/other_user}",
"gists_url": "https://api.github.com/users/joinpursuit/gists{/gist_id}",
"starred_url": "https://api.github.com/users/joinpursuit/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/joinpursuit/subscriptions",
"organizations_url": "https://api.github.com/users/joinpursuit/orgs",
"repos_url": "https://api.github.com/users/joinpursuit/repos",
"events_url": "https://api.github.com/users/joinpursuit/events{/privacy}",
"received_events_url": "https://api.github.com/users/joinpursuit/received_events",
"type": "Organization",
"site_admin": false
},
```
1. All the JavaScript repos on Github with Pursuit in their name
```js
 endpoint = https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc
 json =  "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
```
1. All the Swift repos on Github with Pursuit in their name
```js
 endpoint = https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc
 json =  "language": "Swift",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
```
1. A list of all Pokemon
```js
 endpoint = https://pokeapi.co/api/v2/pokemon?limit=964
 json = {
"count": 964,
"next": "https://pokeapi.co/api/v2/pokemon?offset=3&limit=3",
"previous": null,
"results": [
{
"name": "bulbasaur",
"url": "https://pokeapi.co/api/v2/pokemon/1/"
},
{
"name": "ivysaur",
"url": "https://pokeapi.co/api/v2/pokemon/2/"
},
{
"name": "venusaur",
"url": "https://pokeapi.co/api/v2/pokemon/3/"
}
]
}
```
1. A list of all items in Fortnite
```js
 endpoint = https://www.fortnitehut.com/free-api?rarity=epic
 json =  "rarityid": {
                "name": "epic",
                "date": "September 8th 2019"
            }
        }
    ],
```
1. A list of all Game of Thrones Episodes.
```js
 endpoint = https://api.got.show/api/map/episodes
 json = {
"message": "Success",
"data": [
{
"characters": [
"Viserys Targaryen",
"Catelyn Stark",
"Cersei Lannister",
"Jaime Lannister",
"Eddard Stark",
"Robert Baratheon",
"Jorah Mormont",
"Daenerys Targaryen",
"Jon Snow",
"Petyr Baelish",
"Arya Stark",
"Sansa Stark",
"Bran Stark",
"Robb Stark",
"Joffrey Baratheon",
"Tyrion Lannister",
"Jeor Mormont",
"Alliser Thorne",
"Jory Cassel",
"Barristan Selmy",
"Rodrik Cassel",
"Benjen Stark",
"Yoren",
"Renly Baratheon",
"Maester Aemon",
"Syrio Forel",
"Grenn",
"Irri",
"Pypar",
"Rakharo",
"Lancel Lannister"
```
1. A list of all songs with "Love" in the title.
```js
 endpoint = https://itunes.apple.com/search?term=love
 json = "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E",
```
1. All information about Petyr Baelish from the Game of Thrones books
```js
 endpoint = https://www.anapioficeandfire.com/api/characters/823
 json = "url": "https://www.anapioficeandfire.com/api/characters/823",
    "name": "Petyr Baelish",
    "gender": "Male",
    "culture": "Valemen",
    "born": "In 268 AC, at the Fingers",
```
1. All the movies Leonardo Dicaprio has acted in
```js
 endpoint =
 json =
```
