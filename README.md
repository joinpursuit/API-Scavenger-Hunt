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
  https://randomuser.me/api/?inc=name

```{
  "results": [
    {
      "name": {
        "title": "Mr",
        "first": "Patrick",
        "last": "Mcdonalid"
      }
    }
```

- All the repos on Github with Pursuit their name
  https://api.github.com/orgs/joinpursuit/repos

````
{
    "id": 9226862,
    "node_id": "MDEwOlJlcG9zaXRvcnk5MjI2ODYy",
    "name": "ioscourse-1",
    "full_name": "joinpursuit/ioscourse-1",
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

- All the JavaScript repos on Github with Pursuit in their name
- All the Swift repos on Github with Pursuit in their name
- A list of all Pokemon
https://pokeapi.co/api/v2/pokemon
````

     {

"name": "charmander",
"url": "https://pokeapi.co/api/v2/pokemon/4/"
}

```

- A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/store/get
```

{
"itemId": "90477c1d-cfe0-4c1e-86d2-c558ee7d9578",
"lastUpdate": 1615138800,
"store": {
"isFeatured": false,
"isRefundable": true,
"cost": 1200,
"occurrences": 0,
"isNew": false
},
"item": {
"name": "Penny",
"description": "When trouble knocks, we’ll build our way out.",
"type": "outfit",
"rarity": "rare",
"series": null,
"images": {
"icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_719_athena_commando_f_blonde/icon.png",
"featured": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_719_athena_commando_f_blonde/featured.png",
"background": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_719_athena_commando_f_blonde/icon.png",
"information": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_719_athena_commando_f_blonde/icon.png"
},
"backpack": {},
"obtained_type": "none",
"ratings": {
"avgStars": 3.61,
"totalPoints": 4489,
"numberVotes": 1242
},
"costmeticId": "CID_719_Athena_Commando_F_Blonde"
}
}

````

- A list of all Game of Thrones Episodes.
```
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
- All information about Petyr Baelish from the Game of Thrones books
https://api.got.show/api/book/characters/Petyr Baelish
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
  "plod": 0,
  "longevity": [],
  "plodB": 0.10565567016601562,
  "plodC": 0,
  "longevityB": [
    0.8943443298339844,
    0.8906722068786621,
    0.8847671151161194,
    0.9008587002754211,
    0.8285247087478638,
    0.8089768886566162,
    0.7944252490997314,
    0.7488107085227966,
    0.6933803558349609,
    0.5944227576255798,
    0.5446178913116455,
    0.5648235082626343,
    0.47431549429893494,
    0.4863632321357727,
    0.4892047345638275,
    0.5015890002250671,
    0.4942215383052826,
    0.4417560398578644,
    0.3576783239841461,
    0.3454785943031311,
    0.39603832364082336
  ],
  "longevityC": [],
  "_id": "5cc08e61888dfb00103cdb6c",
  "name": "Petyr Baelish",
  "slug": "Petyr_Baelish",
  "gender": "male",
  "image": "https://awoiaf.westeros.org/thumb.php?f=Knowledge_is_power_by_robotdelespacio.jpg&width=300",
  "culture": "Valemen",
  "house": "House Baelish of the Fingers",
  "placeOfBirth": "the Fingers",
  "birth": 268,
  "alive": true,
  "createdAt": "2019-04-24T16:27:13.582Z",
  "updatedAt": "2019-04-24T16:27:13.582Z",
  "__v": 1,
  "longevityStartB": 300,
  "pagerank": {
    "title": "Petyr_Baelish",
    "rank": 832
  },
  "id": "5cc08e61888dfb00103cdb6c"
}
```
- All the movies Leonardo Dicaprio has acted in
https://imdb8.p.rapidapi.com/actors/get-all-filmography/
```
{
  "id": "/name/nm0000138",
  "base": {
    "@type": "imdb.api.name.base",
    "akas": [
      "Leonardo Di Caprio",
      "Leo DiCaprio"
    ],
    "id": "/name/nm0000138/",
    "image": {
      "height": 400,
      "id": "/name/nm0000138/images/rm487490304",
      "url": "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg",
      "width": 297
    }
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
````

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
