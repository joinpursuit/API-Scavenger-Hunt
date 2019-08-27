# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200 
    1) https://wearemitu.com/
    2) Means a succesful request was made 
1. 3) 301
    1) 
    2) The URL you are looking at has permanently moved 
    3) Redirect the page to a working URL
1. 400
    1) http://ws.audioscrobbler.com/2.0/
    2) Serve was not able to understand the request 
1. 401
    1) api.giphy.com/v1/gifs/trending
    2) Cannot be loaded until you provide a valid login . You are not authorized 
    3) I would make sure I login first so I am an authorized user 
1. 403
    1) https://fortnite-api.theapinetwork.com/items/list
    2) You do not have permission 
    3) Would not do anything. Probably blocked for a purpose
1. 404
    1) https://wearemitu.com/f
    2) The request was not found. 
    3) I would check and make sure I wrote everything properly 
1. 418
    2) Online error used as an April Fool's Joke. 
1. 500
    1)
    2) A server error but not specific to what it is 


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?




For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat


# Part Two

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
    1) https://catfact.ninja/fact
    2)
    {
    "fact": "A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime.",
    "length": 114
    }
1. A list of 150 random users in English.
    1) https://randomuser.me/documentation
    2)
    "results": [
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "ceyhun",
    "last": "ertürk"
    },
    "location": {
    "street": "6281 anafartalar cd",
    "city": "van",
    "state": "gümüşhane",
    "postcode": 52558,
    "coordinates": {
    
1. The current stock price of Microsoft. (IEX API)
    1)  https://ws-api.iextrading.com/1.0/tops?symbols=msft
    2) [
    {
    "symbol": "MSFT",
    "sector": "softwareservices",
    "securityType": "commonstock",
    "bidPrice": 0,
    "bidSize": 0,
    "askPrice": 0,
    "askSize": 0,
    "lastUpdated": 1566849600264,
    "lastSalePrice": 135.435,
    "lastSaleSize": 100,
    "lastSaleTime": 1566849594910,
    "volume": 440755,
    "marketPercent": 0.02283
    }
    ]
1. The 5 year history of Apple stock prices (IEX API)

1. All the Swift language repos on Github with Pursuit in their name
    1) https://api.github.com/search/repositories?q=Pursuit+in:name+language:swift
    2) {
    "total_count": 59,
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
    

1. A list of all Pokemon
    1) https://pokeapi.co/api/v2/pokemon?limit=964
    2) {
    "count": 964,
    "next": null,
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
    
1. A list of all items in Fortnite

    1) https://fortnite-public-api.theapinetwork.com/prod09/store/get
    2)   "vbucks": "https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png",
    "date_layout": "day-month-year",
    "date": "26-08-19",
    "lastupdate": 0,
    "language": "en",
    "rows": 15,
    "items": [
    {
    "itemid": "cfb3a09-e66f1e4-1404b45-20c32ac",
    "name": "Spikeclone",
    "cost": "500",
    "featured": 1,
    "refundable": 1,
    "lastupdate": 1566836610,
    
1. A list of all Game of Thrones Episodes.
    1) https://api.got.show/api/map/episodes
    2) {
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
    "Petyr Baelish"
    
1. A list of all songs with "Love" in the title.

1. All information about Petyr Baelish from the Game of Thrones books
    1) https://anapioficeandfire.com/api/characters/823
    2) {
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
