# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
  * https://www.google.com
  * The request has succeeded and returned with a response dependent on the method.
  * Nothing needs to be done because the request was met.

1. 301
  * https://www.timewarnercable.com
  * The requested resource has been permanently redirected to another URI.
  * I would include the URI that the resource has been moved to.

1. 400
  *
  * The request could not be understood by the server because of incorrect syntax.
  * I would include a popup that informs the user that the syntax that was included has an error.

1. 401
  * https://canvas.instructure.com
  * The request requires user authentication.
  * When the error appears, include a message that reminds user to input credentials that would give them access to the domain.

1. 403
  *
  * The request is forbidden and the user cannot continue to input the request because it will continue to get the same error.
  * Describe the reason for refusal.

1. 404
  * https://twitter.com/therealdonaldtrump
  * The server has not found anything that directs to the requested URI.
  * Present an error message that the page is not found.

1. 418
  *
  * An error message that is a joke sating that it refuses to brew coffee because it is a teapot.
  * Use it to lighten up a page.

1. 500
  *
  * The server encountered an unexpected condition which prevented it it from fulfilling request.
  * I would post an under construction message so no one knows that the server cannot fulfill request.

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
```
endpoint = "https://catfact.ninja/facts?limit=1"
```
1. A list of 150 random users in English.
```
endpoint = "https://randomuser.me/api/?results=150"
```
1. All the repos on Github with Pursuit their name
```
```
1. All the JavaScript repos on Github with Pursuit in their name
```
```
1. All the Swift repos on Github with Pursuit in their name
```
```
1. A list of all Pokemon
```
endpoint = "https://pokeapi.co/api/v2/pokemon/"
```
1. A list of all items in Fortnite
```
endpoint = "https://www.fortnitehut.com/free-api?rarity=epic"
```
1. A list of all Game of Thrones Episodes.
```
endpoint = "https://api.got.show/api/map/episodes"
```
1. A list of all songs with "Love" in the title.
```
```
1. All information about Petyr Baelish from the Game of Thrones books
```
endpoint = "https://www.anapioficeandfire.com/api/characters/823"
```
1. All the movies Leonardo Dicaprio has acted in
