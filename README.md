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
```
https://randomuser.me/api/?results=150&nat=us

{
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Sonia",
        "last": "Burns"
      },
       {
        "city": "Garden Grove",
        "state": "Vermont",
        "country": "United States",
        "postcode": 11587,
        "coordinates": {
          "latitude": "4.1587",
          "longitude": "59.2836"
        }

 "results": 150,
```

- All the repos on Github with Pursuit their name
```
https://api.github.com/search/repositories?q=pursuit

{
      "id": 22592439,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMjU5MjQzOQ==",
      "name": "pursuit",
      "full_name": "purescript/pursuit",
      "private": false,
      }
{
  "total_count": 2085
}
```


- All the JavaScript repos on Github with Pursuit in their name
```
https://api.github.com/search/repositories?q=pursuitin:name+language:javascript


      "id": 40902807,
      "node_id": "MDEwOlJlcG9zaXRvcnk0MDkwMjgwNw==",
      "name": "ChessPursuit",
      "full_name": "Saturnyn/ChessPursuit",
      "private": false,
      "owner": }

      "language": "JavaScript"
{
  "total_count": 178 
}
```


- All the Swift repos on Github with Pursuit in their name
```
https://api.github.com/search/repositories?q=pursuitin:name+language:swift


      "id": 158296571,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNTgyOTY1NzE=",
      "name": "Pursuit-Core-iOS-Hangman-UIKit-Project",
      "full_name": "joinpursuit/Pursuit-Core-iOS-Hangman-UIKit-Project",
      "private": false,
      "owner": }

      "language": "Swift"


  "total_count": 199
```


- A list of all Pokemon
```
https://pokeapi.co/api/v2/pokemon

{
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }


  "count": 1118
```

- A list of all items in Fortnite
```

https://fortnite-api.theapinetwork.com/items/list


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
        "upcoming": false }
```

- A list of all Game of Thrones Episodes.
```
https://api.got.show/api/map/episodes

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
```

- A list of all songs with "Love" in the title.
```
https://itunes.apple.com/search?term=love&entity=song

{
  "wrapperType": "track",
      "kind": "song",
      "artistId": 543948286,
      "collectionId": 560097651,
      "trackId": 560097759,
      "artistName": "Macklemore & Ryan Lewis",
      "collectionName": "The Heist (Deluxe Edition)",
      "trackName": "Same Love (feat. Mary Lambert)",
}
```


- All information about Petyr Baelish from the Game of Thrones books
```
https://api.got.show/api/book/characters/Petyr%20Baelish

[
  "_id": "5cc08e61888dfb00103cdb6c",
  "name": "Petyr Baelish",
  "slug": "Petyr_Baelish",
  "gender": "male",
]

```


- All the movies Leonardo Dicaprio has acted in
```
https://imdb-api.com/en/API/SearchAll/k_c1zso614/Leonardo%20Dicaprio

 "searchType": "All",
  "expression": "Leonardo Dicaprio",
  "results": [
    {
      "id": "nm0000138",
      "resultType": "Name",
      "image": "https://imdb-api.com/images/original/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
      "title": "Leonardo DiCaprio",
      "description": "(Actor, Inception (2010))"
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
