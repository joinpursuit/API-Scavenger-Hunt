# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
    * endpoint = www.instagram.com
    * status meaning = The request has succeeded.
    * what would my app do? display the requested page.
1. 301
    * endpoint= https://www.facebook.com/
    * status meaning= Redirection Moved Permanently.
    * what would my app do? The requested source is given a new permanent URI. Therefore, this resource should use one of the returned URIs. For instance facebook after the person logs on they have their own URL.
1. 400
    * endpoint=https://twitter.com/share?lang=en&text=Example%20of%20malformed%%20characters%20in%20URLtext=Example%20of%20malformed%%20characters%20in%20URL
    * status meaning =The request could not be understood by the server due to malformed syntax.
    * what would my app do= display a message"400 - Bad request. The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications."
1. 401
    * endpoint = https:// canvas.instructure.com
    * status meaning = Unauthorized
    * what would my app do? his requires user authentication. If not it will not work.
1. 403
    * endpoint = www.netflix.com/log
    * status meaning = forbidden
    * what would my app do? display a display image that states "FORBIDDEN REQUEST A DIFFERENT WEBSITE"
1. 404
    * endpoint = http://www.karen.com/
    * status meaning = Page not found
    * what would my app do? check the link address for any misspelling , incorrect domain or if file location still exist.
1. 418
    * endpoint =
    * status meaning =
    * what would my app do?
1. 500
    * endpoint =
    * status meaning =
    * what would my app do?


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
    endpoint= https://catfact.ninja/facts?limit=1&max_length=140
    "data": [
       {
           "fact": "A cat has approximately 60 to 80 million olfactory cells (a human has between 5 and 20 million).",
           "length": 96
       }
```
1. A list of 150 random users in English.
```js
    endpoint = https://randomuser.me/api/
    data = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "lærke",
                "last": "johansen"
            },
            "location": {
                "street": "2842 nattergalevej",
                "city": "stokkemarke",
                "state": "nordjylland",
                "postcode": 53275,
                "coordinates": {
                    "latitude": "-27.8263",
                    "longitude": "136.9627"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "lærke.johansen@example.com",
            "login": {
                "uuid": "949448d8-780e-4b34-b4a7-3883f6945585",
                "username": "heavyelephant593",
                "password": "oxford",
                "salt": "Ic4Rlqmt",
                "md5": "38e17da6de6ccdb65eb1ddab1abc020b",
                "sha1": "001589521b7f2c9b1bdd006de59c10f2b4c61307",
                "sha256": "c71421f869c4ad4517a11236a5d4959418df7d4f026025d5b7a105ab2903d54c"
            },
            "dob": {
                "date": "1973-10-18T04:56:12Z",
                "age": 45
            },
            "registered": {
                "date": "2005-07-18T10:01:48Z",
                "age": 14
            },
            "phone": "45333539",
            "cell": "16308734",
            "id": {
                "name": "CPR",
                "value": "750596-8527"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/96.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
            },
            "nat": "DK"
        }
    ],
    "info": {
        "seed": "6e3288d4cb3d5ed5",
        "results": 1,
        "page": 1,
        "version": "1.2"
    }
}
```
1. All the repos on Github with Pursuit their name
```js
    endpoint = https://api.github.com/search/repositories?q=pursuit
    data = {
    "total_count": 1320,
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
                "avatar_url": "https://avatars2.githubusercontent.com/u/6556677?v=4",
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
            },
```
1. All the JavaScript repos on Github with Pursuit in their name
```js
    endpoint = https://api.github.com/search/repositories?q=pursuit-core+language:javascript
    data = {
    "total_count": 10,
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
            },
```
1. All the Swift repos on Github with Pursuit in their name
```js
    endpoint = https://api.github.com/search/repositories?q=pursuit-core+language:swift
    data = {
    "total_count": 55,
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
    endpoint = https://pokeapi.co/api/v2/pokemon
    data = "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
```
1. A list of all items in Fortnite
```js
    endpoint = https://www.fortnitehut.com/free-api?rarity=epic
    data = "results": [
        {
            "rarityid": {
                "name": "epic",
                "date": "September 8th 2019"
            }
        }
    ],
    "items": [
        {
            "name": "Cryo Hops",
            "ourid": "ecivZzK"
        },
```
1. A list of all Game of Thrones Episodes.
```js
    endpoint = https://api.got.show/api/map/episodes
    data = "_id": "5cc0743604e71a0010b85729",
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
1. A list of all songs with "Love" in the title.
```js
    endpoint = https://itunes.apple.com/search?term=love
    data = "results": [
        {
            "wrapperType": "track",
            "kind": "song",
            "artistId": 42616562,
            "collectionId": 715579496,
            "trackId": 715581836,
            "artistName": "Nat \"King\" Cole",
            "collectionName": "Nat King Cole",
            "trackName": "L-O-V-E",
            "collectionCensoredName": "Nat King Cole",
            "trackCensoredName": "L-O-V-E",
            "artistViewUrl": "https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4",
            "trackViewUrl": "https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4",
            "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a",
            "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg",
            "collectionPrice": 39.99,
            "trackPrice": 1.29,
            "releaseDate": "1992-11-02T12:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 4,
            "discNumber": 4,
            "trackCount": 24,
            "trackNumber": 24,
            "trackTimeMillis": 152533,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Jazz",
            "isStreamable": true
        },
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
        },
```
1. All information about Petyr Baelish from the Game of Thrones books
```js
    endpoint = https://www.anapioficeandfire.com/api/characters/823
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
```
1. All the movies Leonardo Dicaprio has acted in
```js
    endpoint = https://itunes.apple.com/search?term=leonardo+dicaprio
    data = {
    "resultCount": 41,
    "results": [
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "collectionId": 1151694663,
            "trackId": 774084884,
            "artistName": "Martin Scorsese",
            "collectionName": "10 Years of iTunes Movies - Paramount",
            "trackName": "The Wolf of Wall Street",
            "collectionCensoredName": "10 Years of iTunes Movies - Paramount",
            "trackCensoredName": "The Wolf of Wall Street",
            "collectionArtistId": 1008915738,
            "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4",
            "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/ff/b7/77/ffb777a8-04c0-56fe-2237-64c09352891e/mzvf_3469655200525770514.640x354.h264lc.U.p.m4v",
            "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/30x30bb.jpg",
            "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/60x60bb.jpg",
            "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/100x100bb.jpg",
            "collectionPrice": 12.99,
            "trackPrice": 12.99,
            "trackRentalPrice": 3.99000,
            "collectionHdPrice": 14.99000,
            "trackHdPrice": 14.99000,
            "trackHdRentalPrice": 3.99000,
            "releaseDate": "2013-12-25T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 10,
            "trackNumber": 3,
            "trackTimeMillis": 10806388,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Drama",
            "contentAdvisoryRating": "R",
            "shortDescription": "Revered filmmaker Martin Scorsese directs the story of New York stockbroker Jordan Belfort (Leonardo",
            "longDescription": "Sex. Money. Power. Drugs. Brace yourself for an outrageous true story from legendary filmmaker Martin Scorsese that critics are calling \"a masterpiece for a new generation.” Leonardo DiCaprio delivers the best performance of his career as a young stockbroker hungry for a life of non-stop thrills, where corruption was king and more was never enough. His rise to power earned him the title The Wolf of Wall Street. Together, Scorsese and DiCaprio deliver a story of American excess that is an absolute blast from start to finish.",
            "hasITunesExtras": true
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 669947696,
            "artistName": "Baz Luhrmann",
            "trackName": "The Great Gatsby (2013)",
            "trackCensoredName": "The Great Gatsby (2013)",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-great-gatsby-2013/id669947696?uo=4",
            "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video117/v4/e6/3e/3a/e63e3a3e-106f-ff56-8608-723a8fcf7f02/mzvf_2203986914500214025.640x354.h264lc.U.p.m4v",
            "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Video5/v4/b8/86/cc/b886cc2a-2f33-a9c7-58a1-33eba1d1f77e/source/30x30bb.jpg",
            "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Video5/v4/b8/86/cc/b886cc2a-2f33-a9c7-58a1-33eba1d1f77e/source/60x60bb.jpg",
            "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Video5/v4/b8/86/cc/b886cc2a-2f33-a9c7-58a1-33eba1d1f77e/source/100x100bb.jpg",
            "collectionPrice": 14.99,
            "trackPrice": 14.99,
            "trackRentalPrice": 3.99000,
            "collectionHdPrice": 14.99000,
            "trackHdPrice": 14.99000,
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
