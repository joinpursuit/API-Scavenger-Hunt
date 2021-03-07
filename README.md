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
  https://randomuser.me/api

```{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Peter",
        "last": "Gilbert"
      }
```

- All the repos on Github with Pursuit their name
  https://api.github.com/search/repositories?q=pursuit

```
"login": "purescript",
        "id": 6556677,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY1NTY2Nzc=",
        "avatar_url": "https://avatars.githubusercontent.com/u/6556677?v=4"
```

- All the JavaScript repos on Github with Pursuit in their name
  https://api.github.com/search/repositories?q=pursuit-core+language:javascript

```
{
  "total_count": 5,
  "incomplete_results": false,
  "items": [
    {
      "id": 149148208,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNDkxNDgyMDg=",
      "name": "Pursuit-Core-Web",
      "full_name": "joinpursuit/Pursuit-Core-Web",
      "private": false,
```

- All the Swift repos on Github with Pursuit in their name
  https://api.github.com/search/repositories?q=pursuit-core+language:swift

```
"items": [
    {
      "id": 233689493,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMzM2ODk0OTM=",
      "name": "Pursuit-Core-iOS-UserDefaults-Lab",
      "full_name": "maitreebain/Pursuit-Core-iOS-UserDefaults-Lab",
      "private": false,
      "owner": {
        "login": "maitreebain",
```

- A list of all Pokemon
  https://pokeapi.co/api/v2/pokemon

````{
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
      ```
- A list of all items in Fortnite

https://fortnite-api.com/v2/shop/br/combined

````

{
"status": 200,
"data": {
"hash": "74a71d87f7fd6c80c0a09903d173743a01711c47",
"date": "2021-03-07T03:00:00Z",
"featured": {
"name": "FEATURED",
"entries": [

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

```


- A list of all songs with "Love" in the title.
https://itunes.apple.com/search?term=love

```

"resultCount": 2,
"results": [
{
"wrapperType": "audiobook",
"artistId": 326020144,
"collectionId": 315601683,
"amgArtistId": 371195,
"artistName": "Pema Chödrön",
"collectionName": "Getting Unstuck: Breaking Your Habitual Patterns and Encountering Naked Reality",

```

- All information about Petyr Baelish from the Game of Thrones books
https://anapioficeandfire.com/api/characters/823

```

{
"url": "https://www.anapioficeandfire.com/api/characters/823",
"name": "Petyr Baelish",
"gender": "Male",
"culture": "Valemen",
"born": "In 268 AC, at the Fingers",
"died": "",
"titles":

````

- All the movies Leonardo Dicaprio has acted in
https://itunes.apple.com/search?term=leonardo+dicaprio

````
{
  "resultCount": 45,
  "results": [
    {
      "wrapperType": "audiobook",
      "artistId": 524168658,
      "collectionId": 648174732,
      "artistName": "Douglas Wight",
      "collectionName": "Leonardo DiCaprio: The Biography (Unabridged)",
      "collectionCensoredName": "Leonardo DiCaprio: The Biography (Unabridged)", 
````

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
