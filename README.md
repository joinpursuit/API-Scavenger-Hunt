# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact

https://catfact.ninja/fact?max_length=140

{
    "fact": "At 4 weeks, it is important to play with kittens so that they do not develope a fear of people.",
    "length": 95
}

1. A list of 150 random users in English.

https://randomuser.me/api/?nat=us,uk&results=150

{
"results": [
       {
           "gender": "male",
           "name": {
               "title": "Mr",
               "first": "Virgulino",
               "last": "Melo"
           },
           "location": {
               "street": {
                   "number": 1931,
                   "name": "Rua Espirito Santo "
               },
               "city": "Aracaju",
               "state": "São Paulo",
               "country": "Brazil",
               "postcode": 38690,
               "coordinates": {
                   "latitude": "-73.6780",
                   "longitude": "-35.4560"
               },
               "timezone": {
                   "offset": "+9:00",
                   "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
               }
           },
           "email": "virgulino.melo@example.com"

1. All the repos on Github with Pursuit their name

https://api.github.com/search/repositories?q=Pursuit

{
"id": 99703757,
"node_id": "MDEwOlJlcG9zaXRvcnk5OTcwMzc1Nw==",
"name": "Pursuit-Core-iOS",
"full_name": "joinpursuit/Pursuit-Core-iOS",
"private": false,

1. All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=Pursuit+language:JavaScript

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
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 122,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 1,
    "license": null,
    "forks": 122,
    "open_issues": 1,
    "watchers": 32,
    "default_branch": "master",
    "score": 85.08835
},

1. All the Swift repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=Pursuit+language:Swift

{
"total_count": 171,
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
            "language": "Swift",
            
1. A list of all Pokemon

https://pokeapi.co/api/v2/pokemon

{
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
    },
    {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },

1. A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/store/get

{
"lastUpdate": 1574813322,
"lanuage": "en",
"data": [
    {
        "itemId": "173de1e-5d4c11c-31c10f9-13bb3a5",
        "lastUpdate": 1554300788,
        "store": {
            "isFeatured": false,
            "isRefundable": false,
            "cost": 2000,
            "occurrences": 0,
            "isNew": false
        },
        "item": {
            "name": "Flytrap",
            "description": "Deviously inescapable.",
            "type": "outfit",
            "rarity": "legendary",
            "costmeticId": "AthenaCharacter:cid_132_athena_commando_m_venus",
            "images": {
                "icon": "https://fortnite-public-files.theapinetwork.com/outfit/620b11a4b910f2d5f10c476e5f435d6a.png",
                "featured": "https://fortnite-public-files.theapinetwork.com/featured/173de1e-5d4c11c-31c10f9-13bb3a5.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/173de1e-5d4c11c-31c10f9-13bb3a5.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/173de1e-5d4c11c-31c10f9-13bb3a5/item.png"
            },
            "backpack": {},
            "obtained_type": "vbucks",
            "ratings": {
                "avgStars": 3.13,
                "totalPoints": 2175,
                "numberVotes": 696
            }
        }
    },
    
1. A list of all Game of Thrones Episodes.

https://api.got.show/api/show/episodes

[
{
    "written_by": [
        "David Benioff",
        "D.B. Weiss"
    ],
    "characters": [
        "Will",
        "Waymar Royce",
        "Gared",
        "Wildling girl",
        "White Walker 1",
        "White Walker 2",
        "Bran Stark",
        "Jon Snow",
        "Robb Stark",
        "Catelyn Stark",
        "Eddard Stark",
        "Rickon Stark",
        "Sansa Stark",
        "Mordane",
        "Arya Stark",
        "Jeyne Poole",
        "Rodrik Cassel",
        "Jory Cassel",
        "Theon Greyjoy",
        "Lady",
        "Grey Wind",
        "Shaggydog",
        "Summer",
        "Nymeria",
        "Ghost",
        "Jaime Lannister",
        "Cersei Lannister",
        "Maester",
        "Tommy",
        "Joffrey Baratheon",
        "Sandor Clegane",
        "Preston Greenfield",
        "Hodor",
        "Mikken",
        "Robert Baratheon",
        "Tommen Baratheon",
        "Myrcella Baratheon",
        "Tyrion Lannister",
        "Ros",
        "Daenerys Targaryen",
        "Viserys Targaryen",
        "Pentoshi servant",
        "Illyrio Mopatis",
        "Khal",
        "Qotho",
        "Cohollo",
        "Haggo",
        "Benjen Stark",
        "Jorah Mormont",
        "Mago"
    ],
    "deaths": [
        "Waymar Royce",
        "Gared",
        "Will",
        "Jon Arryn",
        "Dothraki"
    ],
    "places": [
        "Beyond the Wall",
        "In Pentos",
        "In King's Landing",
        "In the North",
        "First",
        "Deaths",
        "Cast notes"
    ],
    "_id": "5cc074bf04e71a0010b85a1a",
    "title": "Winter Is Coming",
    "season": 1,
    "episode": 1,
    "runtime": 62,
    "directed_by": "Tim Van Patten",
    "createdAt": "2019-04-24T14:37:51.759Z",
    "updatedAt": "2019-04-24T14:37:51.759Z",
    "__v": 0
},

1. A list of all songs with "Love" in the title.

https://itunes.apple.com/search?term=love

{
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true}, 

1. All information about Petyr Baelish from the Game of Thrones books

https://www.anapioficeandfire.com/api/characters/823

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
    "aliases": [
        "Littlefinger"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/688",
    "allegiances": [
        "https://anapioficeandfire.com/api/houses/10",
        "https://anapioficeandfire.com/api/houses/11"
    ],
    "books": [
        "https://anapioficeandfire.com/api/books/1",
        "https://anapioficeandfire.com/api/books/2",
        "https://anapioficeandfire.com/api/books/3",
        "https://anapioficeandfire.com/api/books/5",
        "https://anapioficeandfire.com/api/books/8"
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

1. All the movies Leonardo Dicaprio has acted in

Could not find a working database. 


# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200

Request Succeeded.

Nothing needs to be done.

1. 301

Moved Permanently. 

Nothing needs to be done assuming there is an automatic redirect. 

1. 400

Bad request.

Find the source of the problem and fix it. Whether that is incorrect spelling, or something else. 

1. 401

Unauthorized.

I would obtain authorization if possible. 

1. 403

Forbidden.

I would obtain authorization if possible.

1. 404

Not Found

I would use a different site as a source. 

1. 418

I'm a teapot.

It is a joke. No action required. 

1. 500

Internal Server Error.

No action required. 

For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



