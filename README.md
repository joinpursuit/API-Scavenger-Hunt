# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
endpoint = "https://http.cat/" 
status meaning =
what would 
1. 301
1. 400
1. 401
1. 403
1. 404
endpoint = https://api.thecatapi.com/v1/images/search//
status meaning = Not Found  because of bad syntax.
what would the app do =  It would give out an error and complain.
1. 418
1. 500


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat


# Part Two

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
```js
endpoint = "https://catfact.ninja/breeds?limit=1"

Response = {
"total": 98,
"per_page": "1",
"current_page": 1,
"last_page": 98,
"next_page_url": "https://catfact.ninja/breeds?page=2",
"prev_page_url": null,
"from": 1,
"to": 1,
"data": [
{
"breed": "Abyssinian",
"country": "Ethiopia",
"origin": "Natural/Standard",
"coat": "Short",
"pattern": "Ticked"
}
]
}


```
1. A list of 150 random users in English.

```js
endpoint = "https://randomuser.me/documentation"
results = "results": [
    {
      "gender": "<span>male</span>",
      "name": {
        "title": "<span>mr</span>",
        "first": "<span>rolf</span>",
        "last": "<span>hegdal</span>"
      },
      "location": {
        "street": "<span>ljan terrasse 346</span>",
        "city": "<span>vear</span>",
        "state": "<span>rogaland</span>",
        "postcode": "<span>3095</span>",
        "coordinates": {
          "latitude": "<span>54.8646</span>",
          "longitude": "<span>-97.3136</span>"
        },
        "timezone": {
          "offset": "<span>-10:00</span>",
          "description": "<span>Hawaii</span>"
        }
      },
      "email": "<span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7705181b11591f121013161b37120f161a071b125914181a">[email&#160;protected]</a></span>",
      "login": {
        "uuid": "<span>c4168eac-84b8-46ea-b735-c9da9bfb97fd</span>",
        "username": "<span>bluefrog786</span>",
        "password": "<span>ingrid</span>",
        "salt": "<span>GtRFz4NE</span>",
        "md5": "<span>5c581c5748fc8c35bd7f16eac9efbb55</span>",
        "sha1": "<span>c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9</span>",
        "sha256": "<span>684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712</span>"
      },
      "dob": {
        "date": "<span>1975-11-12T06:34:44Z</span>",
        "age": <span>42</span>
      },
      "registered": {
        "date": <span>"2015-11-04T22:09:36Z</span>",
        "age": <span>2</span>
      },
      "phone": "<span>66976498</span>",
      "cell": "<span>40652479</span>",
      "id": {
        "name": "<span>FN</span>",
        "value": "<span>12117533881</span>"
      },
      "picture": {
        "large": "<span>https://randomuser.me/api/portraits/men/65.jpg</span>",
        "medium": "<span>https://randomuser.me/api/portraits/med/men/65.jpg</span>",
        "thumbnail": "<span>https://randomuser.me/api/portraits/thumb/men/65.jpg</span>"
      },
      "nat": "<span>NO</span>"
    }
  ],
  "info": {
    "seed": "<span>2da87e9305069f1d</span>",
    "results": <span>1</span>,
    "page": <span>1</span>,
    "version": "<span>1.2</span>"
  }
}

```
1. All the repos on Github with Pursuit their name

```js
endpoint = "https://api.github.com/search/repositories?q=pursuit+user:joinpursuit"

```
1. All the JavaScript repos on Github with Pursuit in their name

```js
endpoint = "https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc"
result = "id": 63269236,
            "node_id": "MDEwOlJlcG9zaXRvcnk2MzI2OTIzNg==",
            "name": "Pursuit-Core-Android",
            "full_name": "joinpursuit/Pursuit-Core-Android",
            "private": false,
```
1. All the Swift repos on Github with Pursuit in their name
```js
endpoint ="https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc"
result = {
"total_count": 45,
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
"avatar_url": "https://avatars2.githubusercontent.com/u/5825944?v=4",
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
1. A list of all Pokemon
```js
endpoint = https://pokeapi.co/api/v2/
results = name:"imposter"
url:"https://pokeapi.co/api/v2/ability/150/"
is_hidden:true
slot:3
name:"limber"
url:"https://pokeapi.co/api/v2/ability/7/"
is_hidden:false
slot:1
base_experience:101
name:"ditto"
url:"https://pokeapi.co/api/v2/pokemon-form/132/"
game_index:132
name:"white-2"
url:"https://pokeapi.co/api/v2/version/22/"
game_index:132
name:"black-2"
url:"https://pokeapi.co/api/v2/version/21/"
game_index:132
name:"white"
url:"https://pokeapi.co/api/v2/version/18/"
game_index:132
name:"black"
url:"https://pokeapi.co/api/v2/version/17/"
game_index:132
name:"soulsilver"
url:"https://pokeapi.co/api/v2/version/16/"
game_index:132
name:"heartgold"
url:"https://pokeapi.co/api/v2/version/15/"
game_index:132
name:"platinum"
url:"https://pokeapi.co/api/v2/version/14/"
game_index:132
name:"pearl"
url:"https://pokeapi.co/api/v2/version/13/"
game_index:132
name:"diamond"
url:"https://pokeapi.co/api/v2/version/12/"
game_index:132
name:"leafgreen"
url:"https://pokeapi.co/api/v2/version/11/"
game_index:132
name:"firered"
url:"https://pokeapi.co/api/v2/version/10/"
game_index:132
name:"emerald"
url:"https://pokeapi.co/api/v2/version/9/"
game_index:132
name:"sapphire"
url:"https://pokeapi.co/api/v2/version/8/"
game_index:132
name:"ruby"
url:"https://pokeapi.co/api/v2/version/7/"
game_index:132
name:"crystal"
url:"https://pokeapi.co/api/v2/version/6/"
game_index:132
name:"silver"
url:"https://pokeapi.co/api/v2/version/5/"
game_index:132
name:"gold"
url:"https://pokeapi.co/api/v2/version/4/"
game_index:76
name:"yellow"
url:"https://pokeapi.co/api/v2/version/3/"
game_index:76
name:"blue"
url:"https://pokeapi.co/api/v2/version/2/"
game_index:76
name:"red"
url:"https://pokeapi.co/api/v2/version/1/"
height:3
name:"metal-powder"
url:"https://pokeapi.co/api/v2/item/234/"
name:"quick-powder"
url:"https://pokeapi.co/api/v2/item/251/"
id:132
is_default:true
location_area_encounters:"https://pokeapi.co/api/v2/pokemon/132/encounters"
name:"transform"
url:"https://pokeapi.co/api/v2/move/144/"
name:"ditto"
order:197
name:"ditto"
url:"https://pokeapi.co/api/v2/pokemon-species/132/"
back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
back_female:null
back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png"
back_shiny_female:null
front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
front_female:null
front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
front_shiny_female:null
base_stat:48
effort:0
name:"speed"
url:"https://pokeapi.co/api/v2/stat/6/"
base_stat:48
effort:0
name:"special-defense"
url:"https://pokeapi.co/api/v2/stat/5/"
base_stat:48
effort:0
name:"special-attack"
url:"https://pokeapi.co/api/v2/stat/4/"
base_stat:48
effort:0
name:"defense"
url:"https://pokeapi.co/api/v2/stat/3/"
base_stat:48
effort:0
name:"attack"
url:"https://pokeapi.co/api/v2/stat/2/"
base_stat:48
effort:1
name:"hp"
url:"https://pokeapi.co/api/v2/stat/1/"
slot:1
name:"normal"
url:"https://pokeapi.co/api/v2/type/1/"
weight:40
```
1. A list of all items in Fortnite
```js
endpoint = "https://fortnite-api.theapinetwork.com/items/list"

results = NO AUTHORIZATION


```
1. A list of all Game of Thrones Episodes.
```js
 endpoint = "https://api.got.show/api/map/episodes"
 results ="message": "Success",
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
// too long I only put the first one.
```
1. A list of all songs with "Love" in the title.
```js
endpoint = "https://itunes.apple.com/search?term=love"

result = {
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true}
```

1. All information about Petyr Baelish from the Game of Thrones books
```js
endpoint = "https://www.anapioficeandfire.com/api/characters/823"

result = {
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

```
1. All the movies Leonardo Dicaprio has acted in
```js
endpoint = "https://itunes.apple.com/search?term=leonardo+dicaprio"
result = {
 "resultCount":41,
 "results": [
{"wrapperType":"track", "kind":"feature-movie", "collectionId":1151694663, "trackId":774084884, "artistName":"Martin Scorsese", "collectionName":"10 Years of iTunes Movies - Paramount", "trackName":"The Wolf of Wall Street", "collectionCensoredName":"10 Years of iTunes Movies - Paramount", "trackCensoredName":"The Wolf of Wall Street", "collectionArtistId":1008915738, "collectionArtistViewUrl":"https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", "trackViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/ff/b7/77/ffb777a8-04c0-56fe-2237-64c09352891e/mzvf_3469655200525770514.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/100x100bb.jpg", "collectionPrice":12.99, "trackPrice":12.99, "trackRentalPrice":3.99000, "collectionHdPrice":14.99000, "trackHdPrice":14.99000, "trackHdRentalPrice":3.99000, "releaseDate":"2013-12-25T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":10, "trackNumber":3, "trackTimeMillis":10806388, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", "shortDescription":"Revered filmmaker Martin Scorsese directs the story of New York stockbroker Jordan Belfort (Leonardo"), 
```
