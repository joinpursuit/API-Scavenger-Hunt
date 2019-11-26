# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
https://catfact.ninja/facts
{
  "current_page": 1,
  "data": [
    {
      "fact": "The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
      "length": 84
    }
  ]
1. A list of 150 random users in English.
https://randomuser.me/api/
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Mohamoud",
                "last": "Van 't Slot"
            },
            "location": {
                "street": {
                    "number": 7485,
                    "name": "De Trommelslager"
                }]

1. All the repos on Github with Pursuit their name
https://api.github.com/search/repositories?q=pursuit
{
    "total_count": 1552,
    "incomplete_results": false,
    "items": [
        {
            "id": 22592439,
            "node_id": "MDEwOlJlcG9zaXRvcnkyMjU5MjQzOQ==",
            "name": "pursuit",
            "full_name": "purescript/pursuit",
            "private": false,
1. All the JavaScript repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit+javascript
{
    "total_count": 16,
    "incomplete_results": false,
    "items": [
        {
            "id": 160723388,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNjA3MjMzODg=",
            "name": "Javascript-Trivial-Pursuit-Game",
            "full_name": "mrwishart/Javascript-Trivial-Pursuit-Game",
            "private": false,

1. All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit+swift

{
  "total_count": 5,
  "incomplete_results": false,
  "items": [
    {
      "id": 39978693,
      "node_id": "MDEwOlJlcG9zaXRvcnkzOTk3ODY5Mw==",
      "name": "swift-wisdom",
      "full_name": "IntrepidPursuits/swift-wisdom",
      "private": false,
1. A list of all Pokemon
https://pokeapi.co/api/v2/pokemon/

{
  "count": 964,
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
1. A list of all items in Fortnite
fortnite-api.theapinetwork.com/store/get

{
    "lastUpdate": 1574726400,
    "lanuage": "en",
    "data": [
        {
            "itemId": "e67b4bc-bd9afae-5c95ae3-2ce6ce9",
            "lastUpdate": 1574726400,
            "store": {
                "isFeatured": true,
                "isRefundable": true,
                "cost": 1200,
                "occurrences": 0,
                "isNew": false
            },

1. A list of all Game of Thrones Episodes.
https://api.got.show/api/map/episodes
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
1. A list of all songs with "Love" in the title.
http://api.napster.com/v2.2/search/verbose?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=love
 {
                    "type": "album",
                    "id": "alb.10882884",
                    "upc": "696998524323",
                    "shortcut": "sade/love-deluxe-epic",
                    "href": "https://api.napster.com/v2.2/albums/alb.10882884",
                    "name": "Love Deluxe",
                    "released": "2000-11-21T08:00:00.000Z",
                    "originallyReleased": "1992-10-20T07:00:00.000Z",
                    "label": "Epic",
                    "copyright": "1992 Sony Music Entertainment(UK)Ltd.",
                    "tags": [],
                    "discCount": 1,
                    "trackCount": 9,
                    "isExplicit": false,
                    "isSingle": false,
                    "accountPartner": "Sony",
                    "artistName": "Sade",
                    "isAvailableInHiRes": false,
                    "contributingArtists": {
                        "primaryArtist": "art.2152"
                    },
1. All information about Petyr Baelish from the Game of Thrones books
https://anapioficeandfire.com/api/characters/?name=petyr%20baelish
[
    {
        "url": "https://anapioficeandfire.com/api/characters/823",
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
1. All the movies Leonardo Dicaprio has acted in


# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
1. 301
1. 400
1. 401
1. 403
1. 404
1. 418
1. 500


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



