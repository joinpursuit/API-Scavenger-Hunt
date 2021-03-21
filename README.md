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
``` JSON
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Landon",
        "last": "Baker"
      },
      "location": {
        "street": {
          "number": 9909,
          "name": "The Green"
        },
        "city": "Tuam",
        "state": "Galway City",
        "country": "Ireland",
        "postcode": 95280,
        "coordinates": {
          "latitude": "20.1671",
          "longitude": "-75.2183"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "landon.baker@example.com",
      "login": {
        "uuid": "905fee5f-e5d8-4527-a993-8e3dbe932153",
        "username": "organicduck596",
        "password": "monarch",
        "salt": "5v2IuiD4",
        "md5": "8a4cd2eda5bd94aa11d2210a60961179",
        "sha1": "bb0ca35869d0bab98a3731b5d04027806735c428",
        "sha256": "586f4eaf115aa2e5a5d2705499df7e8861d2133b2f3f025b9e9bd1657ae239f0"
      },
      "dob": {
        "date": "1992-02-26T09:32:50.100Z",
        "age": 29
      },
      "registered": {
        "date": "2005-11-02T21:05:40.999Z",
        "age": 16
      },
      "phone": "051-952-1031",
      "cell": "081-085-9744",
      "id": {
        "name": "PPS",
        "value": "5277639T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
      },
      "nat": "IE"
    }
  ],
  "info": {
    "seed": "e54337d3cf69e889",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}```






- All the repos on Github with Pursuit their name
https://api.github.com/users/joinpursuit/repos
``` JSON

  {
    "id": 341080793,
    "node_id": "MDEwOlJlcG9zaXRvcnkzNDEwODA3OTM=",
    "name": "-Pursuit-Core-Web-Promises-Fetch-Lab-v2",
    "full_name": "joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2",
    "private": false,
    "owner": {
      "login": "joinpursuit",
      "id": 5825944,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjU4MjU5NDQ=",
      "avatar_url": "https://avatars.githubusercontent.com/u/5825944?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/joinpursuit",
      "html_url": "https://github.com/joinpursuit",
      "followers_url":
      ````

  
- All the JavaScript repos on Github with Pursuit in their name

 https://api.github.com/search/repositories?q=pursuit+language:javascript
 ```json
 {
      "id": 149148208,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNDkxNDgyMDg=",
      "name": "Pursuit-Core-Web",
      "full_name": "joinpursuit/Pursuit-Core-Web",
      "private": false,
      "owner": {
        "login": "joinpursuit",
        "id": 5825944,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjU4MjU5NDQ=",
        "avatar_url": "https://avatars.githubusercontent.com/u/5825944?v=4",
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
    },```

- All the Swift repos on Github with Pursuit in their name

https://fortnite-api.theapinetwork.com/items/list
```json
 {
      "id": 99703757,
      "node_id": "MDEwOlJlcG9zaXRvcnk5OTcwMzc1Nw==",
      "name": "Pursuit-Core-iOS",
      "full_name": "joinpursuit/Pursuit-Core-iOS",
      "private": false,
      "owner": {
        "login": "joinpursuit",
      }
      },```


- A list of all Pokemon

https://pokeapi.co/api/v2/pokemon-species/
```json
{
  "count": 898,
  "next": "https://pokeapi.co/api/v2/pokemon-species/?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon-species/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon-species/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon-species/9/"
    },
    {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon-species/10/"
    },
    {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon-species/11/"
    },
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon-species/12/"
    },
    {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon-species/13/"
    },
    {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon-species/14/"
    },
    {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon-species/15/"
    },
    {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon-species/16/"
    },
    {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon-species/17/"
    },
    {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon-species/18/"
    },
    {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon-species/19/"
    },
    {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon-species/20/"
    }
  ]
}```
- A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list
```json
 {
      "itemId": "a40395d3-2c57-4efb-be98-3c13d402da06",
      "lastUpdate": 1615120203,
      "item": {
        "name": "Black Widow (Snow Suit) Bundle",
        "description": null,
        "type": "bundle",
        "rarity": "epic",
        "series": "marvel",
        "cost": 2200,
        "upcoming": false,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/a40395d3-2c57-4efb-be98-3c13d402da06_khmk0vcn/icon.png",
          "featured": null,
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/a40395d3-2c57-4efb-be98-3c13d402da06_khmk0vcn/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/a40395d3-2c57-4efb-be98-3c13d402da06_khmk0vcn/icon.png"
        },
        "backpack": {},
        "obtained": "2200",
        "obtained_type": "vbucks",
        "ratings": {
          "avgStars": 3.52,
          "totalPoints": 116,
          "numberVotes": 33
        },
        "costmeticId": "a40395d3-2c57-4efb-be98-3c13d402da06_khmk0vcn",
        "obtainedValue": "none",
        "obtainedFromBattlepass": "none"
      }
    },```
- A list of all Game of Thrones Episodes.

https://api.got.show/api/show/episodes
```json
{
"_id": "5cc074bf04e71a0010b85a20",
    "title": "You Win or You Die",
    "season": 1,
    "episode": 7,
    "runtime": 58,
    "directed_by": "Daniel Minahan",
    "createdAt": "2019-04-24T14:37:51.761Z",
    "updatedAt": "2019-04-24T14:37:51.761Z",
    "__v": 0
  },```
- A list of all songs with "Love" in the title.



- All information about Petyr Baelish from the Game of Thrones books

https://anapioficeandfire.com/
```json
{
	"url": "https://anapioficeandfire.com/api/characters/583",
	"name": "Jon Snow",
	"gender": "Male",
	"culture": "Northmen",
	"born": "In 283 AC",
	"died": "",
	"titles": [
		"Lord Commander of the Night's Watch"
	],
	"aliases": [
		"Lord Snow",
		"Ned Stark's Bastard",
		"The Snow of Winterfell",
		"The Crow-Come-Over",
		"The 998th Lord Commander of the Night's Watch",
		"The Bastard of Winterfell",
		"The Black Bastard of the Wall",
		"Lord Crow"
	],
	"father": "",
	"mother": "",
	"spouse": "",
	"allegiances": [
		"https://anapioficeandfire.com/api/houses/362"
	],
	"books": [
		"https://anapioficeandfire.com/api/books/5"
	],
	"povBooks": [
		"https://anapioficeandfire.com/api/books/1",
		"https://anapioficeandfire.com/api/books/2",
		"https://anapioficeandfire.com/api/books/3",
		"https://anapioficeandfire.com/api/books/8"
	],
	"tvSeries": [
		"Season 1",
		"Season 2",
		"Season 3",
		"Season 4",
		"Season 5",
		"Season 6"
	],
	"playedBy": [
		"Kit Harington"
	]
}```
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
