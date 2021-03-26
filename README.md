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
https://randomuser.me/api?results=150&nat=US

```json 
{
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Eric",
        "last": "Carpenter"
      },
      "location": {
        "street": {
          "number": 5623,
          "name": "Valwood Pkwy"
        },
        "city": "Saint Paul",
        "state": "Missouri",
        "country": "United States",
        "postcode": 58931,
        "coordinates": {
          "latitude": "41.8652",
          "longitude": "0.7224"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "eric.carpenter@example.com",
      "login": {
        "uuid": "a2b72766-dcfe-43d4-8e08-15a65879671c",
        "username": "greenfrog882",
        "password": "maryjane",
        "salt": "YVZfJSZ0",
        "md5": "81836a0bd0685642dc3fea052f10d702",
        "sha1": "aaa951f9532bedf2b0b3870faa509ad23cb3a992",
        "sha256": "7e9b8266aff8e987638be55bd1abdee279d78969e9ed6221d2eced16132bb4ff"
      },
      "dob": {
        "date": "1985-05-11T11:27:14.216Z",
        "age": 36
      },
      "registered": {
        "date": "2013-10-30T05:10:58.006Z",
        "age": 8
      },
      "phone": "(544)-375-7099",
      "cell": "(873)-180-9175",
      "id": {
        "name": "SSN",
        "value": "166-72-5269"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "389eeb32b8e600b8",
    "results": 150,
    "page": 1,
    "version": "1.3"
  }
```

- All the repos on Github with Pursuit their name
- All the JavaScript repos on Github with Pursuit in their name
- All the Swift repos on Github with Pursuit in their name


- A list of all Pokemon
https://pokeapi.co/api/v2/pokemon

```json

{
  "count": 1118,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
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
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/"
    }
  ]
}
```


- A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list

```json
{
      "itemId": "c4ce9db-b8a72a1-a3a8d78-ea263bb",
      "lastUpdate": 1614201127,
      "item": {
        "name": "Dance Moves",
        "description": "Express yourself on the battlefield.",
        "type": "emote",
        "rarity": "common",
        "series": null,
        "cost": 0,
        "upcoming": false,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_dancemoves/icon.png",
          "featured": null,
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_dancemoves/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_dancemoves/icon.png"
        },
        "backpack": {},
        "obtained": "",
        "obtained_type": "none",
        "ratings": {
          "avgStars": 4.02,
          "totalPoints": 2741,
          "numberVotes": 682
        },
        "costmeticId": "EID_DanceMoves",
        "obtainedValue": "none",
        "obtainedFromBattlepass": "none"
      }
    },
```

- A list of all Game of Thrones Episodes.

https://api.got.show/api/show/episodes

```json
  {
    "written_by": [
      "David Benioff",
      "D.B. Weiss"
    ],
    "characters": [
      "Rhaegar Targaryen",
      "High Septon (Robert's Rebellion)"
    ],
    "deaths": [
      "Petyr Baelish",
      "Captured wight",
      "Black Brothers",
      "Wildlings"
    ],
    "places": [
      "In King's Landing",
      "At Winterfell",
      "In the Narrow Sea",
      "At the Wall",
      "First",
      "Deaths",
      "Cast",
      "Cast notes",
      "General",
      "In King's Landing",
      "At Winterfell",
      "In the Narrow Sea",
      "Rhaegar/Lyanna, Jon/Daenerys",
      "Jon Snow's real name",
      "At the Wall"
    ],
    "_id": "5cc074bf04e71a0010b85a5c",
    "title": "The Dragon and the Wolf",
    "season": 7,
    "episode": 7,
    "runtime": 80,
    "directed_by": "Jeremy Podeswa",
    "createdAt": "2019-04-24T14:37:51.793Z",
    "updatedAt": "2019-04-24T14:37:51.793Z",
    "__v": 0
  }
```


- A list of all songs with "Love" in the title.

- All information about Petyr Baelish from the Game of Thrones books

https://www.anapioficeandfire.com/api/characters/823

```json
{
  "url": "https://www.anapioficeandfire.com/api/characters/823",
  "name": "Petyr Baelish",
  "gender": "Male",
  "culture": "Valemen",
  "born": "In 268 AC, at the Fingers",
  "died": "",
  "titles": [
    "Master of coin (formerly)",
    "Lord Paramount of the Trident",
    "Lord of Harrenhal",
    "Lord Protector of the Vale"
  ],
  "aliases": [
    "Littlefinger"
  ],
  "father": "",
  "mother": "",
  "spouse": "https://www.anapioficeandfire.com/api/characters/688",
  "allegiances": [
    "https://www.anapioficeandfire.com/api/houses/10",
    "https://www.anapioficeandfire.com/api/houses/11"
  ],
  "books": [
    "https://www.anapioficeandfire.com/api/books/1",
    "https://www.anapioficeandfire.com/api/books/2",
    "https://www.anapioficeandfire.com/api/books/3",
    "https://www.anapioficeandfire.com/api/books/5",
    "https://www.anapioficeandfire.com/api/books/8"
  ],
  "povBooks": [],
  "tvSeries": [
    "Season 1",
    "Season 2",
    "Season 3",
    "Season 4",
    "Season 5",
    "Season 6"
  ],
  "playedBy": [
    "Aidan Gillen"
  ]
}
```

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
