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

https://randomuser.me/api?results=150
 ``` 
 {{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "حامد",
        "last": "احمدی"
      },
      "location": {
        "street": {
          "number": 2475,
          "name": "دکتر لواسانی"
        },
        "city": "ایلام",
        "state": "خوزستان",
        "country": "Iran",
        "postcode": 45479,
        "coordinates": {
          "latitude": "28.5668",
          "longitude": "-177.0740"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "hmd.hmdy@example.com",
      "login": {
        "uuid": "40134256-ee46-4da4-9acb-adab785bc0b7",
        "username": "silverpanda697",
        "password": "papers",
        "salt": "47qA1QrK",
        "md5": "09c8694d931bb7ab3aabe51e4a0a3121",
        "sha1": "1495844bfc94f04dfe45355a681daab636012bf5",
        "sha256": "700d8ebb19b285c70c7903c68d02c6ee1c84b295c1d0e623e08c096c049ef0d5"
      },
      "dob": {
        "date": "1988-08-31T20:12:52.736Z",
        "age": 33
      },
      "registered": {
        "date": "2013-03-17T11:59:37.530Z",
        "age": 8
      },
      "phone": "045-37707487",
      "cell": "0999-981-3026",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/71.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
      },
      "nat": "IR"
    }
  ],
  "info": {
    "seed": "0996608d1f4b2414",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}

 }
 ```

- All the repos on Github with Pursuit their name


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
      "method": <METHOD>,
      "endpoint": /api/something,
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
