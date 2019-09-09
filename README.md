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
```js
*endpoint :curl -I www.amazon.com
*the status code means that  the resource has been moved permanently
status code when there is a permanent redirect set to an original URL to forward the user agent to another URL. As the user can’t see the original URL, search engines will only index the redirected URL
* we should redirect to a new proper URL

1. 400
*https://api.github.com
 while the root-endpoint pusuit's
*"The status code means = bad request"
The most common reason for a 400 Bad Request error is because the URL was typed wrong or the link that was clicked on points to a malformed URL with a specific kind of mistake in it, like a syntax problem."
* "check for extra, typically non-allowed, characters in the URL like a percentage character. While there are perfectly valid uses for something like a % character, you won't often find one in a standard URL."
```
1. 401
```js
*https://wordsapiv1.p.mashape.com/words/example
*The status code means = The request contains bad syntax or cannot be fulfilled. semantically means unauthorised, the user does not have valid authentication credentials for the target resource.
Some sites incorrectly issue HTTP 401 when an IP address is banned from the website. 
*Reload the page. As simple as it might seem, closing down the page and reopening it might be enough to fix the 401 error, but only if it's caused by a misloaded page.
If you're sure the URL is valid, visit the website's main page and look for a link that says Login or Secure Access. Enter your credentials here and then try the page again.
```
1. 403
*curl -I www.amazon.com

*The status code means =
The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort. This code is also typically used if the request provided authentication via the WWW-Authenticate header field, but the server did not accept that authentication.
*to fix the 403 error you should first clear the browser's the caches version of the page  could cause 403 forbidden error
or we ca creat and aditional alet to get an additional acces before viewing the page. 

```
1. 404
*https://api.github.com/search/JavaScript?repositories?q=joinpursuit
* the status code means = The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
*
Retry the web page by pressing F5, clicking/tapping the refresh/reload button, or trying the URL from the address bar again.

1. 418
```js
*endpoit:https://www.google.com/teapot

* status code means = The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
```
1. 500
*The server has encountered a situation it doesn't know how to handle.
* change the url of that is called in the code
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
