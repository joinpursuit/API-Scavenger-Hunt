# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200

   * endpoint = https://en.wikipedia.org/wiki/Rick_and_Morty
   * meaning = The request has succeeded.
   * what does it do = GET an entity corresponding to the requested resource is sent in the response

1. 301

    * endpoint = curl itch.io (postman redirects automatically)
    * meaning = Moved Permanently
    * what it does = The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. 

1. 400

    * endpoint = https://www.fromsoftware.jp/ww/%
    * meaning = Bad Request
    * message = Your browser sent a request that this server could not understand
    * what it does = The request could not be understood by the server due to malformed syntax
    
1. 401

    * endpoint = https://canvas.instructure.com/calendar#view_name=month&view_start=2019-09-08
    * meaning = Unauthorized
    * what it does = The request requires user authentication
    
1. 403

    * endpoint = https://api.github.com/resource?page=2
    * meaning = Forbidden
    * message: "API rate limit exceeded for 69.164.130.248. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
    * what it does = The server understood the request, but is refusing to fulfill it. Im not allowed to enter since I dont have the permissions.
    
1. 404

    * endpoint = https://mysite.atlassian.net/rest/api/2/issue/XYZ-5
    * meaning = Not Found
    * what it does = The server has not found anything matching the Request-URI. 
    
1. 418

    * endpoint = https://www.google.com/teapot
    * meaning = I'm a teapot(RFC 2324) 
    * what it does = So this was an easter egg april fools joke back in 1998. On this link here you can see some people talking about it... https://news.ycombinator.com/item?id=15004907
    
1. 500

    * endpoint = https://community.appian.com/discussions/f/integrations/p/addpost/"https:/cip-dit1.bankofamerica.com/suite/webapi/testRunStatusForId
    * meaning = Internal Server Error
    * what it does = The server encountered an unexpected condition which prevented it from fulfilling the request.
    


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
    website = https://catfact.ninja/facts?limit=1
    snippet =     "data": [
        {
            "fact": "Cats take between 20-40 breaths per minute.",
            "length": 43
        }
```

2. A list of 150 random users in English.
```js
    website = https://randomuser.me/api/
    snippet = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "ms",
                "first": "aubree",
                "last": "mitchell"
            },
            "location": {
                "street": "7289 stanley way",
                "city": "armstrong",
                "state": "yukon",
                "postcode": "M8S 2P1",
                "coordinates": {
                    "latitude": "-64.3816",
                    "longitude": "14.5752"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "aubree.mitchell@example.com",
            "login": {
                "uuid": "2ab9be0f-bc23-4ccc-9fdf-1b0d672e69f2",
                "username": "yellowbutterfly766",
                "password": "spice",
                "salt": "UjnWWXJ8",
                "md5": "fa2bcaca1625caadc8da199437035d3a",
                "sha1": "1914d66137401079cc46bcfcfc90668a58707ddb",
                "sha256": "e187d26a48db4700c3d5ca33d1c810fe1994bc03cc317da52e1b64160d0d3bda"
            },
            "dob": {
                "date": "1946-11-07T19:44:33Z",
                "age": 72
            },
            "registered": {
                "date": "2016-03-07T02:02:39Z",
                "age": 3
            },
            "phone": "418-369-1419",
            "cell": "353-799-1830",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/41.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
            },
            "nat": "CA"
        }
    ],
    "info": {
        "seed": "296a4b9f6a673a26",
        "results": 1,
        "page": 1,
        "version": "1.2"
    }
}
```

3. All the repos on Github with Pursuit their name
```js
    website = https://api.github.com/users/kameronscodespace/repos?q=pursuit
    snippet = {
        "id": 196094791,
        "node_id": "MDEwOlJlcG9zaXRvcnkxOTYwOTQ3OTE=",
        "name": "arrays_assignment",
        "full_name": "KameronsCodeSpace/arrays_assignment",
        "private": false,
        "owner": {
            "login": "KameronsCodeSpace",
            "id": 52139573,
            "node_id": "MDQ6VXNlcjUyMTM5NTcz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/52139573?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/KameronsCodeSpace",
            "html_url": "https://github.com/KameronsCodeSpace",
            "followers_url": "https://api.github.com/users/KameronsCodeSpace/followers",
            "following_url": "https://api.github.com/users/KameronsCodeSpace/following{/other_user}",
            "gists_url": "https://api.github.com/users/KameronsCodeSpace/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/KameronsCodeSpace/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/KameronsCodeSpace/subscriptions",
            "organizations_url": "https://api.github.com/users/KameronsCodeSpace/orgs",
            "repos_url": "https://api.github.com/users/KameronsCodeSpace/repos",
            "events_url": "https://api.github.com/users/KameronsCodeSpace/events{/privacy}",
            "received_events_url": "https://api.github.com/users/KameronsCodeSpace/received_events",
            "type": "User",
            "site_admin": false
        }
```

4. All the JavaScript repos on Github with Pursuit in their name
????
5. All the Swift repos on Github with Pursuit in their name
????
6. A list of all Pokemon
```js
    website = https://pokeapi.co/api/v2/pokemon
    snippet = "results": [
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
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
        }
```
7. A list of all items in Fortnite
```js
    website = https://www.fortnitehut.com/free-api?leaked=yes',
    snippet = "featured_items": [
        {
            "name": "Cryo Hops",
            "ourid": "ecivZzK"
        },
        {
            "name": "The Return",
            "ourid": "2oFsSBC"
        },
        {
            "name": "Aero Axe",
            "ourid": "rd1pgHk"
        },
        {
            "name": "Tsssss",
            "ourid": "FJJ1ntb"
        },
        {
            "name": "Stronghold",
            "ourid": "0frQ37J"
        },
        {
            "name": "Aeronaut",
            "ourid": "pUdNHDr"
        },
        {
            "name": "Rogue Spider Shield",
            "ourid": "ju1LtH8"
        },
        {
            "name": "Rogue Spider Knight",
            "ourid": "7aIY0sz"
        },
        {
            "name": "Rainy Days",
            "ourid": "ISCzi7W"
        },
        {
            "name": "Shifu",
            "ourid": "7GywwE4"
        },
        {
            "name": "Wisdom&#39;s Edge",
            "ourid": "e05jQfU"
        },
        {
            "name": "Flail",
            "ourid": "Jm26HwT"
        },
        {
            "name": "Distracted",
            "ourid": "hSJIPYK"
        }
    ]
```
8. A list of all Game of Thrones Episodes.
```js
    website = https://api.got.show/api/map/episodes
    snippet = "_id": "5cc0743604e71a0010b85729",
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
9. A list of all songs with "Love" in the title.
```js
    website = https://itunes.apple.com/search?term=love&media=music
    snippet =  {
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
            "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/87/a6/e2/87a6e2e3-cdd2-a2fd-2de5-a7d7505b3225/source/30x30bb.jpg",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/87/a6/e2/87a6e2e3-cdd2-a2fd-2de5-a7d7505b3225/source/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/87/a6/e2/87a6e2e3-cdd2-a2fd-2de5-a7d7505b3225/source/100x100bb.jpg",
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
        }
```

10. All information about Petyr Baelish from the Game of Thrones books
```js
    website = https://api.got.show/api/book/characters/:Petyr+Baelish
    snippet = [
    {
        "titles": [
            "Ser"
        ],
        "spouse": [],
        "children": [],
        "allegiance": [
            "House Hightower"
        ],
        "books": [
            "The Hedge Knight"
        ],
        "plod": 0,
        "longevity": [],
        "plodB": 0,
        "plodC": 0,
        "longevityB": [],
        "longevityC": [],
        "_id": "5cc08e61888dfb00103cd5e9",
        "name": "Abelar Hightower",
        "slug": "Abelar_Hightower",
        "gender": "male",
        "culture": "Reach",
        "house": "House Hightower",
        "alive": true,
        "createdAt": "2019-04-24T16:27:13.179Z",
        "updatedAt": "2019-04-24T16:27:13.179Z",
        "__v": 0,
        "pagerank": {
            "title": "Abelar_Hightower",
            "rank": 7
        },
        "id": "5cc08e61888dfb00103cd5e9"
    }
```
11. All the movies Leonardo Dicaprio has acted in
```js
    website = https://www.themoviedb.org/person/6193-leonardo-dicaprio?language=en-US
    snippet = 
```
