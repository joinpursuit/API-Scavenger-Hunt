# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:

``` js
1. 200
* endpoint = "https://http.cat"
* The status code means = The request has succeeded. the action was successfully received, understood, and accepted.
*In this case there is no error so the response will contain an entity describing or containing the result of thr action.
```
1. 301

1. 400
*https://api.github.com while the root-endpoint pusuit's
*The status code means = bad request
*The most common reason for a 400 Bad Request error is because the URL was typed wrong or the link that was clicked on points to a malformed URL with a specific kind of mistake in it, like a syntax problem.
1. 401
```js
https://wordsapiv1.p.mashape.com/words/example
```
1. 403
```js
*https://api.github.com/searchpursuit/repositories
```js
*https://api.github.com/search/repositories?q=joinpursuit
*
``
1. 404
*https://api.github.com/search/JavaScript?repositories?q=joinpursuit
1. 418
1. 500

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
*"https://catfact.ninja/breeds?limit=1"
*{
    "total": 98,
    "per_page": "1",
    "current_page": 1,
    "last_page": 98,
    "next_page_url": "https://catfact.ninja/breeds?page=2",
    "prev_page_url": null,
    "from": 1,
    "to": 1,
    "data": [
        {
            "breed": "Abyssinian",
            "country": "Ethiopia",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Ticked"
        }
    ]
}
*

1. A list of 150 random users in English.
```js
*https://randomuser.me/api/?results=5000
```

1. All the repos on Github with Pursuit their name
```js
https://api.github.com/search/repositories?q=joinpursuit
```
1. All the JavaScript repos on Github with Pursuit in their name
```js
https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc
```
1. All the Swift repos on Github with Pursuit in their name
```js
https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc
```
1. A list of all Pokemon
```js
https://pokeapi.co/api/v2/pokemon
```
1. A list of all items in Fortnite
```js
https://www.fortnitehut.com/free-api?item
```
1. A list of all Game of Thrones Episodes.
```js
https://api.got.show/api/map/episodes
```
1. A list of all songs with "Love" in the title.
```js
https://itunes.apple.com/search?term=love
```
1. All information about Petyr Baelish from the Game of Thrones books
```js
https://www.anapioficeandfire.com/api/characters/823
```
1. All the movies Leonardo Dicaprio has acted in
```js
https://itunes.apple.com/search?term=leonardo+dicaprio
```
