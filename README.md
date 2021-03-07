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

  https://randomuser.me/api/?nat=us&results=150

  ```{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Caroline",
        "last": "Frazier"
      },
      "location": {
        "street": {
          "number": 7243,
          "name": "W 6th St"
        },
        "city": "Joliet",
        "state": "North Carolina",
        "country": "United States",
        "postcode": 24857,
        "coordinates": {
          "latitude": "63.3733",
          "longitude": "125.2127"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "caroline.frazier@example.com",
      "login": {
        "uuid": "24c4bd7a-2dea-424c-9982-8f82ccab0027",
        "username": "blueleopard970",
        "password": "kevin1",
        "salt": "23MjrWMK",
        "md5": "d49c137b4a7bc5e27c9ba5af30c5d05a",
        "sha1": "61509a7f4578b63c4315f075c4d5cee91c05b3b0",
        "sha256": "e25e1d656a3494ef0500d74b4ed02c732f4b54e1f6c2889e95a195f9cf67cdd9"
      },
      "dob": {
        "date": "1973-02-05T12:57:18.422Z",
        "age": 48
      },
      "registered": {
        "date": "2004-11-23T17:00:19.413Z",
        "age": 17
      },
      "phone": "(867)-001-4567",
      "cell": "(027)-794-8359",
      "id": {
        "name": "SSN",
        "value": "623-63-5774"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/74.jpg"
      },
      "nat": "US"
    },```


- All the repos on Github with Pursuit their name

  ```https://api.github.com/search/repositories?q=pursuit

  {
  "total_count": 2085,
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
        "following_url":  
        ```


- All the JavaScript repos on Github with Pursuit in their name

```https://api.github.com/search/repositories?q=pursuit+language:javascript

  {
  "total_count": 106,
  "incomplete_results": false,
  "items": [
    {
      "id": 29826657,
      "node_id": "MDEwOlJlcG9zaXRvcnkyOTgyNjY1Nw==",
      "name": "argo",
      "full_name": "albertosantini/argo",
      "private": false,
      "owner": {
        "login": "albertosantini",
        "id": 328179,
        "node_id": "MDQ6VXNlcjMyODE3OQ==",
        "avatar_url": "https://avatars.githubusercontent.com/u/328179?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/albertosantini",
        "html_url": "https://github.com/albertosantini",
        "followers_url": "https://api.github.com/users/albertosantini/followers",
        "following_url": "https://api.github.com/users/albertosantini/following{/other_user}",
        "gists_url": "https://api.github.com/users/albertosantini/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/albertosantini/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/albertosantini/subscriptions",
        "organizations_url": "https://api.github.com/users/albertosantini/orgs",
        "repos_url": "https://api.github.com/users/albertosantini/repos",
        "events_url": "https://api.github.com/users/albertosantini/events{/privacy}",
        "received_events_url": "https://api.github.com/users/albertosantini/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/albertosantini/argo",
      "description": "Quest in pursuit of the Golden Fleece in Forex chaos",
      "fork": false,
      "url": "https://api.github.com/repos/albertosantini/argo",
      "forks_url": "https://api.github.com/repos/albertosantini/argo/forks",
      "keys_url": "https://api.github.com/repos/albertosantini/argo/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/albertosantini/argo/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/albertosantini/argo/teams",
      "hooks_url": "https://api.github.com/repos/albertosantini/argo/hooks",
      "issue_events_url": "https://api.github.com/repos/albertosantini/argo/issues/events{/number}",
      ```


- All the Swift repos on Github with Pursuit in their name
  ```https://api.github.com/search/repositories?q=pursuit+language:swift
      {
  "total_count": 38,
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
      },
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-iOS",
      "description": "Home of the Pursuit iOS course with resource material and unit lessons",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS",

      ```

- A list of all Pokemon
 ``` https://pokeapi.co/api/v2/pokemon

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
    ```

- A list of all items in Fortnite
  ```
  https://fortnite-api.theapinetwork.com/items/list

  {
  "lastUpdate": 0,
  "lanuage": "en",
  "data": [
    {
      "itemId": "5bac8575-992e-41db-b23c-8d5646d8f586",
      "lastUpdate": 1614475984,
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
          "avgStars": 3.71,
          "totalPoints": 89,
          "numberVotes": 24
        }, ```

- A list of all Game of Thrones Episodes.
``` https://api.got.show/api/show/episodes

   [
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

    ``` 

- A list of all songs with "Love" in the title.

```https://itunes.apple.com/search?media=music&term="love"&attribute=songTerm

{
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

      ```


- All information about Petyr Baelish from the Game of Thrones books
  ``` https://www.anapioficeandfire.com/api/characters/823

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

  ```

- All the movies Leonardo Dicaprio has acted in

  
```
ttps://api.themoviedb.org/3/search/person?query=leonardodicaprio
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
