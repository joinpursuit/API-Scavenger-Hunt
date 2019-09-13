# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:
```
    endpoint = "https://catfact.ninja/fact"
    data = {
        "fact": "The domestic cat is the only species able to hold its tail vertically while walking. You can also learn about your cat's present state of mind by observing the posture of his tail.",
        "length": 180
    }
```

1. 200
    * endpoint = "https://catfact.ninja/breeds?limit=1" GET
    * status meaning: OK
    * what to do: Nothing 
1. 301 
    * endpoint = 
    * status meaning: Move Permanently
    * what to do: All future requests should be moved to URL
1. 400
    * endpoint = "https://drive.google.com/file/d/1CzCtSeC7G8pUoaT_ldcauA9Mgnzd4aBG/view?usp=sharing" POST
    * status meaning: Bad Request
    * what to do: Fix the client error
1. 401
    * endpoint = 
    * status meaning: Unauthorized
    * what to do: Get autrhoization if you can
1. 403
    * endpoint = 
    * status meaning: Forbidden
    * what to do: Get necessary permission if you can
1. 404
    * endpoint = "https://catfact.ninja/breed"
    * status meaning: Not Found
    * what to do: Make a different request
1. 418
    * endpoint = 
    * status meaning: I'm a Teapot
    * what to do: It's a joke, so you don't have to use this code
1. 500
    * endpoint =
    * status meaning: Internal Server Error
    * what to do: Input a valid input


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
    * "https://catfact.ninja/breeds?limit=1"

1. A list of 150 random users in English.
    * "https://uinames.com/api/?amount=150&region=united states"

1. All the repos on Github with Pursuit their name
    * "https://api.github.com/search/repositories?q=user:joinpursuit"

1. All the Swift repos on Github with Pursuit in their name
    * "https://api.github.com/search/repositories?q=user:joinpursuit+language:swift"

1. A list of all Pokemon
    * "http://pokeapi.co/api/v2/pokemon/?limit=811"

1. A list of all items in Fortnite
    * "https://www.fortnitehut.com/free-api?rarity=epic"

1. A list of all Game of Thrones Episodes.
    * "https://www.episodate.com/api/show-details?q=game-of-thrones"
    
1. A list of all songs with "Love" in the title.
    *

1. All information about Petyr Baelish from the Game of Thrones books

1. All the movies Leonardo Dicaprio has acted in
