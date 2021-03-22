# API Scavenger Hunt

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON. Once you find the API's site, read the docs and use `Insomnia` or `curl` to find the URL that gives you the JSON response you're looking for.

Paste the URL and a snippet of the JSON below. You will edit this very document as part of the assignment.

Put the json between two sets of three backticks. If you want, put the word json right after the first set of three backticks.

It might help you to look at the below section in the non-rendered README view.

Googling the category + API will generally take you to where you need. e.g. "cat fact api".

Example:

- A random cat fact

https://catfact.ninja/fact

```
{
  "fact": "The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\".",
  "length": 89
}
```

---

Here are all the APIs to find!

- A list of 150 random users in English.
https://randomuser.me/api/

{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Gustavo",
        "last": "Parra"
      },
      "location": {
        "street": {
          "number": 2054,
          "name": "Ronda de Toledo"
        },
        "city": "Barcelona",
        "state": "Comunidad de Madrid",
        "country": "Spain",
        "postcode": 45300,
        "coordinates": {
          "latitude": "-19.2979",
          "longitude": "-118.4946"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "gustavo.parra@example.com",
      "login": {
        "uuid": "7af3f186-516a-4e57-a36a-a2e54c8a348f",
        "username": "happyostrich665",
        "password": "clay",
        "salt": "veAQ6uBj",
        "md5": "3f69b88acd6491eeaccab18e6e6bbd56",
        "sha1": "1f86eb20ce352df9414e53559619fea3dc995af4",
        "sha256": "6211c671c849264b288dbc015c9291b7911325dd8b7ca77cc7868977c67a90a6"
      },
      "dob": {
        "date": "1953-01-30T22:02:18.374Z",
        "age": 68
      },
      "registered": {
        "date": "2018-06-01T18:50:12.268Z",
        "age": 3
      },
      "phone": "937-562-259",
      "cell": "682-646-136",
      "id": {
        "name": "DNI",
        "value": "15859659-K"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
      },
      "nat": "ES"
    }
  ],
  "info": {
    "seed": "c4b9621c475ab536",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
- All the repos on Github with Pursuit their name
https://github.com/joinpursuit


- All the JavaScript repos on Github with Pursuit in their name
- All the Swift repos on Github with Pursuit in their name
- A list of all Pokemon
- A list of all items in Fortnite
- A list of all Game of Thrones Episodes.
- A list of all songs with "Love" in the title.
- All information about Petyr Baelish from the Game of Thrones books
- All the movies Leonardo Dicaprio has acted in

# Part Two

For this exercise use the Todos API.

- Docs: https://github.com/alejo4373/Todos-API
- Root Endpoint: https://alejos-todos-api.herokuapp.com

Try out all requests you can think of in this API, the docs are a good starting point.


1. Create an `answers.json` file in the root of this repo. Copy the json below to your file.
1. For each request add a new object to the `requests` array in your json file, in the same format seen below. Try to keep your json syntax valid.
1. Find **all the 9 possible** status codes this API returns and add them to `statusCodesFound` in your json file. You will have to use different HTTP methods, as well as [query strings](https://en.wikipedia.org/wiki/Query_string)

```json
{
  "requests": [
    {
      "method": "patch",
      "endpoint": "/api/todos/eccefff0",
      "description": EXPLAIN WHAT THE REQUEST DOES IN YOUR OWN WORDS,
      "responseStatusCode": ###,
      "statusCodeMeaning": WHAT DOES THIS STATUS CODE MEAN
    },
    {
      "method": "GET",
      "endpoint": "/api/todos",
      "description": "Returns a list of all todos",
      "responseStatusCode": 200,
      "statusCodeMeaning": "The request was successful"
    }
  ],
  "statusCodesFound": [200, ...]
}
```

### Hints

- It went just 🆗
- Users cannot have `fullname`
- There's one hint "hidden in plain sight" in the documentation of the API.
- Bad, bad, bad request!
- What does God got to do?
- Can't remove it twice?!?
- There's a lot of methods to try.
- How does this API handle duplicates?
- `200` is different from `201`?

### Bonuses

1. Take a look at the upcoming lessons to learn how to make make network requests with JavaScript (hint: `fetch`).
   Since you previously had build a simple Todos App with HTML and now you know how to manipulate
   the DOM, add some JS to try to connect your Todos app to this API so that todos you enter in the page
   are saved to the API. Marking a todo as complete or uncompleted should work.
2. Find the easter egg hidden in the API. You'll know it when you see a gif appear.

# References

- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
- https://http.cat
