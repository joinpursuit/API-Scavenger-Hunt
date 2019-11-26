# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact

https://catfact.ninja/fact

```
{
    "fact": "A kitten will typically weigh about 3 ounces at birth.  The typical male housecat will weigh between  7 and 9 pounds, slightly less for female housecats.",
    "length": 153
}
```

1. A list of 150 random users in English.

https://randomuser.me/api/?results=150

```
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Milton",
                "last": "Bonnes"
            },
```

1. All the repos on Github with Pursuit their name

https://api.github.com/users/joinpursuit/repos

```
{
    "message": "API rate limit exceeded for 69.164.130.248. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```

    "total_count": 22,
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

1. All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&

```

    "total_count": 22,
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



1. A list of all Pokemon

https://pokeapi.co/api/v2/pokemon

```
{
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
```

1. A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list

```
{
    "success": false,
    "location": "nyc",
    "error": {
        "code": "xx002",
        "message": "Access denied."
    },
    "data": {}
}
```

1. A list of all Game of Thrones Episodes.



1. A list of all songs with "Love" in the title.

https://itunes.apple.com/search?term=love

{
    "resultCount": 50,
    "results": [
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

1. All information about Petyr Baelish from the Game of Thrones books

https://www.anapioficeandfire.com/api/characters/823

```
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

ttps://itunes.apple.com/search?term=leonardo+decaprio

```
{
    "resultCount": 50,
    "results": [
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 1473165316,
            "artistName": "Quentin Tarantino",
            "trackName": "Once Upon a Time...in Hollywood",
            "trackCensoredName": "Once Upon a Time...in Hollywood",
            "trackViewUrl": "https://itunes.apple.com/us/movie/once-upon-a-time-in-hollywood/id1473165316?uo=4",
            "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video113/v4/89/74/d9/8974d974-01b1-bd9b-c7af-16e25b99527f/mzvf_11817609157199251412.640x354.h264lc.U.p.m4v",
            "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/30x30bb.jpg",
            "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/60x60bb.jpg",
            "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/100x100bb.jpg",
            "collectionPrice": 19.99,
            "trackPrice": 19.99,
            "collectionHdPrice": 19.99000,
            "trackHdPrice": 19.99000,
            "releaseDate": "2019-07-26T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 9704568,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Drama",
            "contentAdvisoryRating": "R",
            "longDescription": "The 9th film from Quentin Tarantino features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood’s golden age.",
            "hasITunesExtras": true
        },
```

# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
200 OK

1. 301
move permanently


1. 400
Bad request

1. 401
Unauthorized

1. 403
Forbidden

1. 404
Not Found

1. 418
I'm a teapot

1. 500
Internal Server Error


For each of the questions below, write:

1. The website which generated the HTTP status code


2. A description of what the status code means

200 - Standard response for successful HTTP requests

301 - Standard response for successful HTTP requests

400 - The server cannot or will not process the request due to an apparent client error

401 - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.

403 - The request contained valid data and was understood by the server, but the server is refusing action

404 - The requested resource could not be found but may be available in the future

418 - April fool's joke

500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable



3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?
In the case of the 301 code, I would send an alert giving the new alert of the link.


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



