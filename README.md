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

https://randomuser.me/api/?inc=name&results=150&nat=us
```
{
  "results": [
    {
      "name": {
        "title": "Mr",
        "first": "Jonathan",
        "last": "Simpson"
      }
    },
```

- All the repos on Github with Pursuit their name

https://api.github.com/users/joinpursuit/repos
```
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
```
- All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/users/joinpursuit/repos?q=language:java

```
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
```
- All the Swift repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=pursuit+language:swift

```
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
```
- A list of all Pokemon

https://pokeapi.co/api/v2/pokemon 
```
{
  "count": 1118,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
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
      "lastUpdate": 1615317616,
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
          "totalPoints": 104,
          "numberVotes": 28
        },
        "costmeticId": "5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7",
        "obtainedValue": "none",
        "obtainedFromBattlepass": "none"
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
    },
```
- A list of all songs with "Love" in the title. 

https://itunes.apple.com/search?term=love&entity=song 

```
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

https://itunes.apple.com/search?term=leonardo+dicaprio&entity=movie 
```
{
  "resultCount": 38,
  "results": [
    {
      "wrapperType": "track",
      "kind": "feature-movie",
      "trackId": 669947696,
      "artistName": "Baz Luhrmann",
      "trackName": "The Great Gatsby (2013)",
      "trackCensoredName": "The Great Gatsby (2013)",
      "trackViewUrl": "https://itunes.apple.com/us/movie/the-great-gatsby-2013/id669947696?uo=4",
      "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video117/v4/e6/3e/3a/e63e3a3e-106f-ff56-8608-723a8fcf7f02/mzvf_2203986914500214025.640x354.h264lc.U.p.m4v",
      "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/45/0e/72/450e7206-1100-7f1d-595f-911c72216882/pr_source.lsr/30x30bb.jpg",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/45/0e/72/450e7206-1100-7f1d-595f-911c72216882/pr_source.lsr/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/45/0e/72/450e7206-1100-7f1d-595f-911c72216882/pr_source.lsr/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 9.99,
      "trackRentalPrice": 3.99000,
      "collectionHdPrice": 9.99000,
      "trackHdPrice": 9.99000,
      "trackHdRentalPrice": 3.99000,
      "releaseDate": "2013-05-10T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "trackTimeMillis": 8523935,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Drama",
      "contentAdvisoryRating": "PG-13",
      "shortDescription": "The uniquely imaginative Baz Luhrmann tackles F. Scott Fitzgerald’s landmark novel, The Great Gatsby",
      "longDescription": "The uniquely imaginative Baz Luhrmann (Moulin Rouge!, Australia) tackles F. Scott Fitzgerald's landmark novel, The Great Gatsby, with blockbuster star Leonardo DiCaprio in the title role. Spider-Man's Tobey Maguire stars as the Fitzgerald-like would-be writer Nick Carraway who arrives in New York in 1922, an era of loose morals, glittering jazz and bootleg kings. Chasing his own American Dream, Nick encounters the mysterious millionaire Gatsby and his bewitching cousin Daisy. Soon, Nick is drawn into the captivating world of the super-rich, their illusions, loves and deceits. Bearing witness to this new world, Nick pens a tale of impossible love, incorruptible dreams and unforgettable tragedy -- mirroring our own times and struggles.",
      "hasITunesExtras": true
    },
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
  "statusCodesFond": [200, ...]
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
