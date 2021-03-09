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

https://randomuser.me/api/?results=150&nat=US

```
    {
"results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Zachary",
        "last": "Daniels"
      },
      "location": {
        "street": {
          "number": 7088,
          "name": "Washington Ave"
        },
        "city": "Portland",
        "state": "Montana",
        "country": "United States",
        "postcode": 66623,
        "coordinates": {
          "latitude": "-8.3572",
          "longitude": "-107.6217"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      }
    }
```

- All the repos on Github with Pursuit their name

https://api.github.com/search/repositories?q=pursuit

```
{
  "total_count": 2088,
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
```

- All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=pursuit%20in%3Aname%20language%3AJavaScript

```
{
  "total_count": 178,
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

https://api.github.com/search/repositories?q=pursuit%20in%3Aname%20language%3ASwift

```
{
  "total_count": 199,
  "incomplete_results": false,
  "items": [
    {
      "id": 99703757,
      "node_id": "MDEwOlJlcG9zaXRvcnk5OTcwMzc1Nw==",
      "name": "Pursuit-Core-iOS",
      "full_name": "joinpursuit/Pursuit-Core-iOS",
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
    }
```

- A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list

```
{
  "lastUpdate": 0,
  "lanuage": "en",
  "data": [
    {
      "itemId": "5bac8575-992e-41db-b23c-8d5646d8f586",
      "lastUpdate": 1615175701,
      "item": {
        "name": "Silver Surfer (Bundle)",
        "description": null,
        "type": "bundle",
        "rarity": "epic",
        "series": "marvel",
        "cost": 2200,
        "upcoming": false,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7/icon.png",
          "featured": null,
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7/icon.png"
        },
        "backpack": {},
        "obtained": "2200",
        "obtained_type": "vbucks",
        "ratings": {
          "avgStars": 3.67,
          "totalPoints": 99,
          "numberVotes": 27
        },
        "costmeticId": "5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7",
        "obtainedValue": "none",
        "obtainedFromBattlepass": "none"
      }
    }
  ```


- A list of all Game of Thrones Episodes.

https://api.got.show/api/map/episodes

```
{
  "message": "Success",
  "data": [
    {
      "characters": [
        "Viserys Targaryen",
        "Catelyn Stark",
        "Cersei Lannister",
        "Jaime Lannister",
        "Eddard Stark",
        "Robert Baratheon",
        "Jorah Mormont",
        "Daenerys Targaryen",
        "Jon Snow",
        "Petyr Baelish",
        "Arya Stark",
        "Sansa Stark",
        "Bran Stark",
        "Robb Stark",
        "Joffrey Baratheon",
        "Tyrion Lannister",
        "Jeor Mormont",
        "Alliser Thorne",
        "Jory Cassel",
        "Barristan Selmy",
        "Rodrik Cassel",
        "Benjen Stark",
        "Yoren",
        "Renly Baratheon",
        "Maester Aemon",
        "Syrio Forel",
        "Grenn",
        "Irri",
        "Pypar",
        "Rakharo",
        "Lancel Lannister"
      ],
      "_id": "5cc0743604e71a0010b85729",
      "director": "Tim Van Patten",
      "airDate": "2011-04-24T04:00:00.000Z",
      "totalNr": 2,
      "season": 1,
      "nr": 2,
      "name": "The Kingsroad",
      "predecessor": "Winter Is Coming",
      "successor": "Lord Snow",
      "createdAt": "2019-04-24T14:35:34.594Z",
      "updatedAt": "2019-04-24T14:35:34.594Z",
      "__v": 0
    }
  ```
- A list of all songs with "Love" in the title.

```
    Still Looking for an API that doesn't require registration, cliend ID, or token.! Smh.
```


- All information about Petyr Baelish from the Game of Thrones books

https://www.anapioficeandfire.com/api/characters?name=Petyr%20Baelish

```
[
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
]
```



- All the movies Leonardo Dicaprio has acted in

```
  Still reading the documentation for: 
  
    * https://trakt.docs.apiary.io/#introduction/images
    * https://www.themoviedb.org/documentation/api
    * http://www.omdbapi.com/
```

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
