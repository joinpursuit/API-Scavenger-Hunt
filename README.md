# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
   * endpoint = "https://www.BigMacKrell.com"
   * status meaning = OK. The request has succeeded.
   * What should my app do? = retrieve the requested information and display it (homepage of website)
1. 301
   * endpoint = "http://www.fbi.gov"
   * status meaning = Moved permanantly (because https:// should have been used)
   * What should my app do? = Redirect to a new URL/URI (specifically the updated https://)
1. 400
   * endpoint = "url"
   * status meaning = Bad request
   * What should my app do? = Display an error to the user letting them know the request they made is invalid
1. 401
   * endpoint = "url"
   * status meaning = Unauthorized
   * What should my app do? = decline access to information request, display an error message to the user
1. 403
   * endpoint = "url"
   * status meaning = Forbidden
   * What should my app do? = Do not dipsplay the requested information to the user. Display an error message. Probably call the cops.
1. 404
   * endpoint = "https://www.amazon.com/help"
   * status meaning = Not found
   * What should my app do? = After failing to find what the user was looking for, the app should display an error page informing the user.
1. 418
   * endpoint = "url"
   * status meaning = I'm a teapot
   * What should my app do? = Since this is an infrequently used HTTP status, this can be used for internal use for site specfic instances - however, these should not be shown directly to the user.
1. 500
   * endpoint = "url"
   * status meaning = Internal server error
   * What should my app do? = Computer over. Errors = Very Yes


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
   endpoint = "https://catfact.ninja/fact"
   data = {
    "fact": "Approximately 1/3 of cat owners think their pets are able to read their minds.",
    "length": 78
}
```

1. A list of 150 random users in English.
```js
   endpoint = "https://randomuser.me/api/?results=150"
   data = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "emídio",
                "last": "novaes"
            },
            "location": {
                "street": "8292 rua tiradentes ",
                "city": "caxias",
                "state": "amapá",
                "postcode": 72112,
                "coordinates": {
                    "latitude": "-74.1315",
                    "longitude": "-21.9285"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "emídio.novaes@example.com",
            "login": {
                "uuid": "5b5dd31b-ef84-449b-84a8-fdf1634cfc59",
                "username": "redleopard978",
                "password": "dddddd",
                "salt": "58FssLSX",
                "md5": "95bfecd00132483e36122243bb56e77f",
                "sha1": "29f526044e9041e7ea667504e9b1201caf52a791",
                "sha256": "4f9a4e10dacbc6a8492720747f66b61ee9d9fceb9e98d67bc59356bb4fa14855"
            },
            "dob": {
                "date": "1989-01-23T10:04:55Z",
                "age": 30
            },
            "registered": {
                "date": "2018-05-17T09:59:13Z",
                "age": 1
            },
            "phone": "(41) 2797-3637",
            "cell": "(29) 4817-0895",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/11.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
            },
            "nat": "BR"
        }, ...
   }
```

1. All the repos on Github with Pursuit their name
```js
   endpoint = "https://api.github.com/search/repositories?q=pursuit+user:joinpursuit"
   data = {
    "total_count": 81,
    "incomplete_results": false,
    "items": [
        {
            "id": 63269236,
            "node_id": "MDEwOlJlcG9zaXRvcnk2MzI2OTIzNg==",
            "name": "Pursuit-Core-Android",
            "full_name": "joinpursuit/Pursuit-Core-Android",
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
            }, ...
        }
   }        
```

1. All the JavaScript repos on Github with Pursuit in their name
```js
   endpoint = "https://api.github.com/search/repositories?q=pursuit+user:joinpursuit+language:javascript"
   data = {
    "total_count": 6,
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
            }, ...
        }
   }
```

1. All the Swift repos on Github with Pursuit in their name
```js
   endpoint = "https://api.github.com/search/repositories?q=pursuit+user:joinpursuit+language:swift"
   data = {
    "total_count": 49,
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
            }, ...
        }
   }
```

1. A list of all Pokemon
```js
   endpoint = "https://pokeapi.co/api/v2/pokemon"
   data = {
    "count": 964,
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
        }, ...
   }
```

1. A list of all items in Fortnite
```js
   endpoint = "https://fortnite-api.theapinetwork.com/items/list"
   data = {
    "data": [
        {
            "itemId": "477f88c-eb310a8-234bcec-ccabb57",
            "lastUpdate": 1557100802,
            "item": {
                "name": "Black Widow Outfit",
                "description": "Whatever it takes.",
                "cost": 1500,
                "type": "outfit",
                "rarity": "marvel",
                "upcoming": false,
                "costmeticId": "AthenaCharacter:cid_399_athena_commando_f_ashtonboardwalk",
                "images": {
                    "icon": "https://fortnite-public-files.theapinetwork.com/outfit/c66dfd9c1fd49c4e28012294eaa1d779.png",
                    "featured": "https://fortnite-public-files.theapinetwork.com/featured/477f88c-eb310a8-234bcec-ccabb57.png",
                    "background": "https://fortnite-public-files.theapinetwork.com/image/477f88c-eb310a8-234bcec-ccabb57.png",
                    "information": "https://fortnite-public-files.theapinetwork.com/image/477f88c-eb310a8-234bcec-ccabb57/item.png"
                },
                "obtained": "1500",
                "obtained_type": "vbucks",
                "ratings": {
                    "avgStars": 4.26,
                    "totalPoints": 6009,
                    "numberVotes": 1412
                }
            }
        },
        {
            "itemId": "d930dba-8e19b63-a6d5d94-6978fe3",
            "lastUpdate": 1557100802,
            "item": {
                "name": "Star-Lord Outfit",
                "description": "Do something good, something bad, a bit of both!",
                "cost": 1500,
                "type": "outfit",
                "rarity": "marvel",
                "upcoming": false,
                "costmeticId": "AthenaCharacter:cid_400_athena_commando_m_ashtonsaltlake",
                "images": {
                    "icon": "https://fortnite-public-files.theapinetwork.com/outfit/a6bac035952059b94ba5e665f6f5a0f0.png",
                    "featured": "https://fortnite-public-files.theapinetwork.com/featured/d930dba-8e19b63-a6d5d94-6978fe3.png",
                    "background": "https://fortnite-public-files.theapinetwork.com/image/d930dba-8e19b63-a6d5d94-6978fe3.png",
                    "information": "https://fortnite-public-files.theapinetwork.com/image/d930dba-8e19b63-a6d5d94-6978fe3/item.png"
                },
                "obtained": "1500",
                "obtained_type": "vbucks",
                "ratings": {
                    "avgStars": 4.11,
                    "totalPoints": 3901,
                    "numberVotes": 950
                }
            }
        }, ...
   }
```

1. A list of all Game of Thrones Episodes.
```js
   endpoint = "https://api.got.show/api/map/episodes"
   data = {
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
        }, ...
   }
```

1. A list of all songs with "Love" in the title.
```js
   endpoint = "https://deezerdevs-deezer.p.rapidapi.com/search?q=title:love"
   data = {
    "data": [
        {
            "id": 707345302,
            "readable": true,
            "title": "Little Light Of Love (End Title)",
            "title_short": "Little Light Of Love",
            "title_version": "(End Title)",
            "link": "https://www.deezer.com/track/707345302",
            "duration": 213,
            "rank": 294845,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-0.dzcdn.net/stream/c-09fc96a9ccba68f86711279b470ba209-4.mp3",
            "artist": {
                "id": 786,
                "name": "Eric Serra",
                "link": "https://www.deezer.com/artist/786",
                "picture": "https://api.deezer.com/artist/786/image",
                "picture_small": "https://cdns-images.dzcdn.net/images/artist/48ad92d3a285d6948731e0ee577b33f1/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://cdns-images.dzcdn.net/images/artist/48ad92d3a285d6948731e0ee577b33f1/250x250-000000-80-0-0.jpg",
                "picture_big": "https://cdns-images.dzcdn.net/images/artist/48ad92d3a285d6948731e0ee577b33f1/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://cdns-images.dzcdn.net/images/artist/48ad92d3a285d6948731e0ee577b33f1/1000x1000-000000-80-0-0.jpg",
                "tracklist": "https://api.deezer.com/artist/786/top?limit=50",
                "type": "artist"
            },
            "album": {
                "id": 102512112,
                "title": "Le cinquième élément (Original Motion Picture Soundtrack)",
                "cover": "https://api.deezer.com/album/102512112/image",
                "cover_small": "https://cdns-images.dzcdn.net/images/cover/529b13cc9d06db4c27affc5b6dc1f0d9/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://cdns-images.dzcdn.net/images/cover/529b13cc9d06db4c27affc5b6dc1f0d9/250x250-000000-80-0-0.jpg",
                "cover_big": "https://cdns-images.dzcdn.net/images/cover/529b13cc9d06db4c27affc5b6dc1f0d9/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://cdns-images.dzcdn.net/images/cover/529b13cc9d06db4c27affc5b6dc1f0d9/1000x1000-000000-80-0-0.jpg",
                "tracklist": "https://api.deezer.com/album/102512112/tracks",
                "type": "album"
            },
            "type": "track"
        }, ...
   }
```

1. All information about Petyr Baelish from the Game of Thrones books
```js
   endpoint = "https://www.anapioficeandfire.com/api/characters/823"
   data = {
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
   endpoint = "url"
   data = 
```
