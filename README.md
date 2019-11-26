# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
website= https://catfact.ninja/facts?limit=1&max_length=140
endpoint=
{
    "current_page": 1,
    "data": [
        {
            "fact": "A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human.",
            "length": 119
        }
    ],
    "first_page_url": "https://catfact.ninja/facts?page=1",
    "from": 1,
    "last_page": 241,
    "last_page_url": "https://catfact.ninja/facts?page=241",
    "next_page_url": "https://catfact.ninja/facts?page=2",
    "path": "https://catfact.ninja/facts",
    "per_page": "1",
    "prev_page_url": null,
    "to": 1,
    "total": 241
}

1. A list of 150 random users in English.
website= https://randomuser.me/api/
endpoint= 
{
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Madison",
                "last": "Ennis"
            },
            "location": {
                "street": {
                    "number": 1544,
                    "name": "Stanley Way"
                },
                "city": "Trenton",
                "state": "British Columbia",
                "country": "Canada",
                "postcode": "Y7W 8N9",
                "coordinates": {
                    "latitude": "-64.3935",
                    "longitude": "80.3501"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "madison.ennis@example.com",
            "login": {
                "uuid": "b4b02de1-a698-4e41-b02b-d1b547a618a5",
                "username": "redsnake178",
                "password": "bogey",
                "salt": "yKF5phBa",
                "md5": "b01862b3facafa302ea9080a8f052cbc",
                "sha1": "ebae60b56ecbf9b51a53a5cc38d6b15912564e22",
                "sha256": "c291253c388639bf037502b3a2f66aa0c97bbcb3956b1bf06979f3d57e8371c4"
            },
            "dob": {
                "date": "1982-04-17T22:39:06.964Z",
                "age": 37
            },
            "registered": {
                "date": "2007-11-23T11:39:48.898Z",
                "age": 12
            },
            "phone": "464-156-3909",
            "cell": "477-636-2654",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/24.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
            },
            "nat": "CA"
        }
    ],
    "info": {
        "seed": "c655927aca095025",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
}

1. All the repos on Github with Pursuit their name
website= https://api.github.com/search/repositories?q=pursuit&order=desc
endpoint=
{
    "total_count": 1552,
    "incomplete_results": false,
    "items": [

1. All the JavaScript repos on Github with Pursuit in their name
website= https://api.github.com/search/repositories?q=pursuit+language:javascript&order=desc
endpoint=
{
    "total_count": 167,
    "incomplete_results": false,
    "items": [
        {
            "id": 29826657,

1. All the Swift repos on Github with Pursuit in their name
website= https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc
endpoint= 
{
    "total_count": 130,
    "incomplete_results": false,
    "items": [
        {
            "id": 99703757,
            "node_id": "MDEwOlJlcG9zaXRvcnk5OTcwMzc1Nw==",

1. A list of all Pokemon
website= https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
endpoint= 
{
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
    "results": [
        {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
        },
        {

1. A list of all items in Fortnite
website= https://fortnite-api.theapinetwork.com/items/list
endpoint= 
{
    "success": false,
    "location": "nyc",
    "error": {
        "code": "xx002",
        "message": "Access denied."
    },
    "data": {}
}

1. A list of all Game of Thrones Episodes.
website= https://api.got.show/api/map/episodes
endpoint= 
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

1. A list of all songs with "Love" in the title.
website= https://itunes.apple.com/search?term=love
endpoint=
{
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music

1. All information about Petyr Baelish from the Game of Thrones books
website= https://anapioficeandfire.com/api/characters/823
endpoint= 
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
website= https://itunes.apple.com/search?term=leonardo+dicaprio
endpoint=
{
 "resultCount":41,
 "results": [
{"wrapperType":"track", "kind":"feature-movie", "trackId":1473165316, "artistName":"Quentin Tarantino", "trackName":"Once Upon a Time...in Hollywood", "trackCensoredName":"Once Upon a Time...in Hollywood", "trackViewUrl":"https://itunes.apple.com/us/movie/once-upon-a-time-in-hollywood/id1473165316?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video113/v4/89/74/d9/8974d974-01b1-bd9b-c7af-16e25b99527f/mzvf_11817609157199251412.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/100x100bb.jpg", "collectionPrice":19.99, "trackPrice":19.99, "coll

# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
1. website=
2. description= Ok
3. resolution=
1. 301
1. website=
2. description= Moved Permanently 
3. resolution=A browser redirects to this page and search engines update their links to the resource
1. 400
1. website=
2. description=Bad Request
3. resolution= fix syntax
1. 401
1. website=
2. description=Unauthorized
3. resolution=
1. 403
1. website=
2. description=Forbidden
3. resolution= create sufficient right to user
1. 404
1. website=
2. description=Not Found
3. resolution=broken or dead links, and can be subject to link rot, add a new link
1. 418
1. website=
2. description=I'm a teapot
3. resolution=This error is a reference to Hyper Text Coffee Pot Control Protocol which was an April Fools' joke in 1998.
1. 500
1. website=
2. description=Internal Server Error
3. resolution=More appropriate timeout or upload limits rules should help.


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



