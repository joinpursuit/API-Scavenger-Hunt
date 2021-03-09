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

https://randomuser.me/api/?results=150

```json
 {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jille",
        "last": "Aarnink"
      },
      "location": {
        "street": {
          "number": 3517,
          "name": "Graswijk"
        }
```
- All the repos on Github with Pursuit in their name.

https://api.github.com/search/repositories?q=pursuit

```json
{
  "total_count": 2087,
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

https://api.github.com/search/repositories?q=pursuit+language:javascript

```json
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
      }
```

- All the Swift repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=pursuit+language:swift

```json
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
      }
```

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
    }
```

- A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list

```json
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
        }
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

https://itunes.apple.com/search?term=love&entity=song&attribute=songTerm

```json
{
  "resultCount": 50,
  "results": [
 {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 13332559,
      "collectionId": 1444077144,
      "trackId": 1444077479,
      "artistName": "Ashlee Simpson",
      "collectionName": "I Am Me",
      "trackName": "L.O.V.E.",
      "collectionCensoredName": "I Am Me",
      "trackCensoredName": "L.O.V.E.",
      "artistViewUrl": "https://music.apple.com/us/artist/ashlee-simpson/13332559?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/l-o-v-e/1444077144?i=1444077479&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/l-o-v-e/1444077144?i=1444077479&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/ca/1e/d1/ca1ed15c-63a3-48fb-a5c4-68f9c0c47078/mzaf_42412691420865872.plus.aac.p.m4a",
      "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/02/d7/3502d789-5d56-3406-d2a2-df325a5fe279/source/30x30bb.jpg",
      "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/02/d7/3502d789-5d56-3406-d2a2-df325a5fe279/source/60x60bb.jpg",
      "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/02/d7/3502d789-5d56-3406-d2a2-df325a5fe279/source/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "2005-10-17T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 11,
      "trackNumber": 4,
      "trackTimeMillis": 153053,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop",
      "isStreamable": true
    }
```

- All information about Petyr Baelish from the Game of Thrones books

https://api.got.show/api/book/characters/Petyr Baelish 

```json
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

https://itunes.apple.com/search?term=leonardo+dicaprio&entity=movie

```json
{
  "resultCount": 38,
  "results": [
        {
      "wrapperType": "track",
      "kind": "feature-movie",
      "collectionId": 1491226465,
      "trackId": 774084884,
      "artistName": "Martin Scorsese",
      "collectionName": "Leonardo DiCaprio 4-Movie Collection",
      "trackName": "The Wolf of Wall Street",
      "collectionCensoredName": "Leonardo DiCaprio 4-Movie Collection",
      "trackCensoredName": "The Wolf of Wall Street",
      "collectionArtistId": 1008915738,
      "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4",
      "trackViewUrl": "https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4",
      "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/ff/b7/77/ffb777a8-04c0-56fe-2237-64c09352891e/mzvf_3469655200525770514.640x354.h264lc.U.p.m4v",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/100x100bb.jpg",
      "collectionPrice": 39.99,
      "trackPrice": 12.99,
      "trackRentalPrice": 3.99000,
      "collectionHdPrice": 49.99000,
      "trackHdPrice": 14.99000,
      "trackHdRentalPrice": 3.99000,
      "releaseDate": "2013-12-25T08:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 4,
      "trackNumber": 1,
      "trackTimeMillis": 10806388,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Drama",
      "contentAdvisoryRating": "R",
      "shortDescription": "Revered filmmaker Martin Scorsese directs the story of New York stockbroker Jordan Belfort (Leonardo",
      "longDescription": "Sex. Money. Power. Drugs. Brace yourself for an outrageous true story from legendary filmmaker Martin Scorsese that critics are calling \"a masterpiece for a new generation.” Leonardo DiCaprio delivers the best performance of his career as a young stockbroker hungry for a life of non-stop thrills, where corruption was king and more was never enough. His rise to power earned him the title The Wolf of Wall Street. Together, Scorsese and DiCaprio deliver a story of American excess that is an absolute blast from start to finish.",
      "hasITunesExtras": true
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
