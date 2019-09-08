# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
   * endpoint = "https://www.BigMacKrell.com"
   * status meaning = OK. The request has succeeded.
   * What should my app do? = retrieve the requested information and display it (homepage of website)
1. 301
   * endpoint = "http://www.fbi.gov"
   * status meaning = Moved permanantly (because https:// should have been used)
   * What should my app do? = Redirect to a new URL/URI (specifically the updated https://)
1. 400
   * endpoint = "url"
   * status meaning = Bad request
   * What should my app do? = Display an error to the user letting them know the request they made is invalid
1. 401
   * endpoint = "url"
   * status meaning = Unauthorized
   * What should my app do? = decline access to information request, display an error message to the user
1. 403
   * endpoint = "url"
   * status meaning = Forbidden
   * What should my app do? = Do not dipsplay the requested information to the user. Display an error message. Probably call the cops.
1. 404
   * endpoint = "https://www.amazon.com/help"
   * status meaning = Not found
   * What should my app do? = After failing to find what the user was looking for, the app should display an error page informing the user.
1. 418
   * endpoint = "url"
   * status meaning = I'm a teapot
   * What should my app do? = Since this is an infrequently used HTTP status, this can be used for internal use for site specfic instances - however, these should not be shown directly to the user.
1. 500
   * endpoint = "url"
   * status meaning = Internal server error
   * What should my app do? = Computer over. Errors = Very Yes


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
   endpoint = "https://catfact.ninja/fact"
   data = {
    "fact": "Approximately 1/3 of cat owners think their pets are able to read their minds.",
    "length": 78
}
```

1. A list of 150 random users in English.
```js
   endpoint = "https://randomuser.me/api/?results=150"
   data = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "emídio",
                "last": "novaes"
            },
            "location": {
                "street": "8292 rua tiradentes ",
                "city": "caxias",
                "state": "amapá",
                "postcode": 72112,
                "coordinates": {
                    "latitude": "-74.1315",
                    "longitude": "-21.9285"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "emídio.novaes@example.com",
            "login": {
                "uuid": "5b5dd31b-ef84-449b-84a8-fdf1634cfc59",
                "username": "redleopard978",
                "password": "dddddd",
                "salt": "58FssLSX",
                "md5": "95bfecd00132483e36122243bb56e77f",
                "sha1": "29f526044e9041e7ea667504e9b1201caf52a791",
                "sha256": "4f9a4e10dacbc6a8492720747f66b61ee9d9fceb9e98d67bc59356bb4fa14855"
            },
            "dob": {
                "date": "1989-01-23T10:04:55Z",
                "age": 30
            },
            "registered": {
                "date": "2018-05-17T09:59:13Z",
                "age": 1
            },
            "phone": "(41) 2797-3637",
            "cell": "(29) 4817-0895",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/11.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
            },
            "nat": "BR"
        }, ...
   }
```

1. All the repos on Github with Pursuit their name
```js
   endpoint = "url"
   data = 
```

1. All the JavaScript repos on Github with Pursuit in their name
```js
   endpoint = "url"
   data = 
```

1. All the Swift repos on Github with Pursuit in their name
```js
   endpoint = "url"
   data = 
```

1. A list of all Pokemon
```js
   endpoint = "url"
   data = 
```

1. A list of all items in Fortnite
```js
   endpoint = "url"
   data = 
```

1. A list of all Game of Thrones Episodes.
```js
   endpoint = "url"
   data = 
```

1. A list of all songs with "Love" in the title.
```js
   endpoint = "url"
   data = 
```

1. All information about Petyr Baelish from the Game of Thrones books
```js
   endpoint = "url"
   data = 
```

1. All the movies Leonardo Dicaprio has acted in
```js
   endpoint = "url"
   data = 
```
