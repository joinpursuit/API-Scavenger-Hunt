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
- All the repos on Github with Pursuit their name
- All the JavaScript repos on Github with Pursuit in their name
- All the Swift repos on Github with Pursuit in their name
- A list of all Pokemon
- A list of all items in Fortnite
- A list of all Game of Thrones Episodes.
- A list of all songs with "Love" in the title.
- All information about Petyr Baelish from the Game of Thrones books
- All the movies Leonardo Dicaprio has acted in

*********************************************************************************************************
- A list of 150 random users in English.
https://randomuser.me/api/

```
"results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Melissa",
        "last": "Lee"
      },
      "location": {
        "street": {
          "number": 728,
          "name": "Church Street"
        },
        "city": "Mountmellick",
        "state": "Clare",
        "country": "Ireland",
        "postcode": 26894,
        "coordinates": {
          "latitude": "21.9377",
          "longitude": "0.3723"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "melissa.lee@example.com",
      "login": {
        "uuid": "b89311a1-3b8a-40d1-8bab-a2087e27fc76",
        "username": "sadostrich256",
        "password": "pa55word",
        "salt": "QGPb2hFR",
        "md5": "f00e8b2c7e944107a04ac05ac1f439ab",
        "sha1": "9e1b7fd17ec6c0b102fa7e59220e19e473d74831",
        "sha256": "3a1ed96c1463c680b53a39423ceed29b86214cc9428a9c7618b424490f8c517f"
      },
      "dob": {
        "date": "1944-09-13T03:35:01.896Z",
        "age": 77
      },
      "registered": {
        "date": "2011-11-08T01:57:42.212Z",
        "age": 10
      },
      "phone": "071-149-7431",
      "cell": "081-234-1766",
      "id": {
        "name": "PPS",
        "value": "3311813T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/47.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
      },
      "nat": "IE"
    }
]
```

- All the repos on Github with Pursuit their name
  https://api.github.com/search/repositories?q=pursuit

```
{
  "total_count": 2084,
  "incomplete_results": false,
  "items": [
    {
      "id": 22592439,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMjU5MjQzOQ==",
      "name": "pursuit",
      "full_name": "purescript/pursuit",
      "private": false,
      "owner": {
        "login": "purescript",
        "id": 6556677,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY1NTY2Nzc=",
        "avatar_url": "https://avatars.githubusercontent.com/u/6556677?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/purescript",
        "html_url": "https://github.com/purescript",
        "followers_url": "https://api.github.com/users/purescript/followers",
        "following_url": "https://api.github.com/users/purescript/following{/other_user}",
        "gists_url": "https://api.github.com/users/purescript/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/purescript/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/purescript/subscriptions",
        "organizations_url": "https://api.github.com/users/purescript/orgs",
        "repos_url": "https://api.github.com/users/purescript/repos",
        "events_url": "https://api.github.com/users/purescript/events{/privacy}",
        "received_events_url": "https://api.github.com/users/purescript/received_events",
        "type": "Organization",
        "site_admin": false
      }
  ]
```

- All the JavaScript repos on Github with Pursuit in their name
  https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc

```
  "total_count": 5,
  "incomplete_results": false,
  "items": [
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
      }
```

- All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc

```
  "total_count": 1,
  "incomplete_results": false,
  "items": [
    {
      "id": 233689493,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMzM2ODk0OTM=",
      "name": "Pursuit-Core-iOS-UserDefaults-Lab",
      "full_name": "maitreebain/Pursuit-Core-iOS-UserDefaults-Lab",
      "private": false,
      "owner": {
        "login": "maitreebain",
        "id": 55721710,
        "node_id": "MDQ6VXNlcjU1NzIxNzEw",
        "avatar_url": "https://avatars.githubusercontent.com/u/55721710?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/maitreebain",
        "html_url": "https://github.com/maitreebain",
        "followers_url": "https://api.github.com/users/maitreebain/followers",
        "following_url": "https://api.github.com/users/maitreebain/following{/other_user}",
        "gists_url": "https://api.github.com/users/maitreebain/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/maitreebain/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/maitreebain/subscriptions",
        "organizations_url": "https://api.github.com/users/maitreebain/orgs",
        "repos_url": "https://api.github.com/users/maitreebain/repos",
        "events_url": "https://api.github.com/users/maitreebain/events{/privacy}",
        "received_events_url": "https://api.github.com/users/maitreebain/received_events",
        "type": "User",
        "site_admin": false
      }
```

- A list of all Pokemon
https://pokeapi.co/api/v2/pokemon/

```
{
  "count": 1118,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
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
https://fortnite-api.theapinetwork.com/store/get

```
  "lastUpdate": 0,
  "lanuage": "en",
  "scope": "store",
  "data": [
    {
      "itemId": "2fad344-834e456-dcf643d-91f9712",
      "lastUpdate": 1615102801,
      "store": {
        "isFeatured": false,
        "isRefundable": true,
        "cost": 1500,
        "occurrences": 0,
        "isNew": false
      },
      "item": {
        "name": "Beastmode",
        "description": "Gassed up and ready to roar.",
        "type": "outfit",
        "rarity": "epic",
        "series": null,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/icon.png",
          "featured": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/featured.png",
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/icon.png"
        },
        "backpack": {},
        "obtained_type": "none",
        "ratings": {
          "avgStars": 3.67,
          "totalPoints": 3304,
          "numberVotes": 900
        },
        "costmeticId": "CID_301_Athena_Commando_M_Rhino"
      }
    }
```

- A list of all Game of Thrones Episodes.
api.got.show/api/show/episodes

```
{
    "written_by": [
      "David Benioff",
      "D.B. Weiss"
    ],
    "characters": [
      "Will",
      "Waymar Royce",
      "Gared",
      "Wildling girl",
      "White Walker 1",
      "White Walker 2",
      "Bran Stark",
      "Jon Snow",
      "Robb Stark",
      "Catelyn Stark",
      "Eddard Stark",
      "Rickon Stark",
      "Sansa Stark",
      "Mordane",
      "Arya Stark",
      "Jeyne Poole",
      "Rodrik Cassel",
      "Jory Cassel",
      "Theon Greyjoy",
      "Lady",
      "Grey Wind",
      "Shaggydog",
      "Summer",
      "Nymeria",
      "Ghost",
      "Jaime Lannister",
      "Cersei Lannister",
      "Maester",
      "Tommy",
      "Joffrey Baratheon",
      "Sandor Clegane",
      "Preston Greenfield",
      "Hodor",
      "Mikken",
      "Robert Baratheon",
      "Tommen Baratheon",
      "Myrcella Baratheon",
      "Tyrion Lannister",
      "Ros",
      "Daenerys Targaryen",
      "Viserys Targaryen",
      "Pentoshi servant",
      "Illyrio Mopatis",
      "Khal",
      "Qotho",
      "Cohollo",
      "Haggo",
      "Benjen Stark",
      "Jorah Mormont",
      "Mago"
    ],
    "deaths": [
      "Waymar Royce",
      "Gared",
      "Will",
      "Jon Arryn",
      "Dothraki"
    ],
    "places": [
      "Beyond the Wall",
      "In Pentos",
      "In King's Landing",
      "In the North",
      "First",
      "Deaths",
      "Cast notes"
    ],
    "_id": "5cc074bf04e71a0010b85a1a",
    "title": "Winter Is Coming",
    "season": 1,
    "episode": 1,
    "runtime": 62,
    "directed_by": "Tim Van Patten",
    "createdAt": "2019-04-24T14:37:51.759Z",
    "updatedAt": "2019-04-24T14:37:51.759Z",
    "__v": 0
  }
```

- A list of all songs with "Love" in the title.
https://itunes.apple.com/search?term=love&attribute=songTerm&media=music

```
  "resultCount": 50,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 368183298,
      "collectionId": 1440881047,
      "trackId": 1440881708,
      "artistName": "Kendrick Lamar",
      "collectionName": "DAMN.",
      "trackName": "LOVE. (FEAT. ZACARI.)",
      "collectionCensoredName": "DAMN.",
      "trackCensoredName": "LOVE. (FEAT. ZACARI.)",
      "artistViewUrl": "https://music.apple.com/us/artist/kendrick-lamar/368183298?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/28/40/40/28404037-5570-0709-5601-7eff314e45eb/mzaf_6754627230951906996.plus.aac.p.m4a",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/84/06/77/840677aa-6372-eeb0-afc7-5fe3a4586056/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/84/06/77/840677aa-6372-eeb0-afc7-5fe3a4586056/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/84/06/77/840677aa-6372-eeb0-afc7-5fe3a4586056/source/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "2017-04-14T12:00:00Z",
      "collectionExplicitness": "explicit",
      "trackExplicitness": "explicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 14,
      "trackNumber": 10,
      "trackTimeMillis": 213400,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Hip-Hop/Rap",
      "contentAdvisoryRating": "Explicit",
      "isStreamable": true
    },
```

- All information about Petyr Baelish from the Game of Thrones books
api.got.show/api/book/characters/bySlug/Petyr_Baelish

```
{
  "titles": [
    "Master of coin (formerly)",
    "Lord Paramount of the Trident",
    "Lord of Harrenhal",
    "Lord Protector of the Eyrie and the Vale of Arryn"
  ],
  "spouse": [
    "Lady Lysa Arryn"
  ],
  "children": [],
  "allegiance": [
    "House Baelish of the Fingers",
    "House Baelish of Harrenhal"
  ],
  "books": [
    "A Game of Thrones",
    "A Clash of Kings",
    "A Storm of Swords",
    "A Feast for Crows",
    "A Dance with Dragons"
  ],
```

- All the movies Leonardo Dicaprio has acted in
https://imdb-api.com/en/API/SearchName/k_12345678/leonardo-dicaprio

```
{
  "searchType": "Name",
  "expression": "leonardo-dicaprio",
  "results": null,
  "errorMessage": "Invalid API Key"
}
```
*********************************************************************************************************

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
