# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:

1. 200
   endpoint= "https://twitter.com"
   status meaning= Success
1. 301
   endpoint=
   status meaning = "moved Permanently"
1. 400
   endpoint= "https://twitter.com/share?lang=en&text=Example%20of%20malformed%%20characters%20in%20URLtext=Example%20of%20malformed%%20characters%20in%20URL"
   status meaning = "Bad Request, link could be incorrect corrupted"
1. 401
   endpoint = ""
   status meaning= "Unauthorized Error, request sent couldn't be authenticated."

1. 403
   endpoint = ""
   status meaning=" link is forbidden by the client"
1. 404
   endpoint="https://github.com/repos/kadijahw/loops_assignment/languages"
   status meaning = "Error on the webpage"
1. 418
   endpoint="https://www.google.com/teapot"
   status meaning = "this error was mean't to be a April fools joke in 1998 "
1. 500
   endpoint = ""
   status meaning = "internal server error, the server can't process the request."

For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?

For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat

# Part Two

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON. Paste the url and a snippet of the json below. Googling the category + API will generally take you to where you need. Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact

```js
endpoint = "https://catfact.ninja/facts"
data = "data": [
        {
            "fact": "A sexually-active feral tom-cat \\owns\\\" an area of about three square miles and \\\"\"sprays\\\"\" to mark his territory with strong smelling urine.\"\"\"",
            "length": 145
        }
    ]
```

1. A list of 150 random users in English.

```js
endpoint = "https://randomuser.me/api/?results=150"
data =  "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "giray",
                "last": "abadan"
            },
            "location": {
                "street": "8767 atatürk sk",
                "city": "adana",
                "state": "karaman",
                "postcode": 40371,
                "coordinates": {
                    "latitude": "76.1239",
                    "longitude": "-55.5433"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "giray.abadan@example.com",
            "login": {
                "uuid": "705e00d5-5560-42b9-982a-39438d7c8293",
                "username": "blueostrich300",
                "password": "luckydog",
                "salt": "wtzckTMf",
                "md5": "850298c1695707b048f006ec27b38f91",
                "sha1": "287cd7056804c8c67c7c9405c46fc06b8c82d28f",
                "sha256": "c4f09dbea177871f87c1a7654f83701463298c7bf2dca995b802b52ae3e51ee5"
            },
            "dob": {
                "date": "1974-06-15T22:19:30Z",
                "age": 45
            },
            "registered": {
                "date": "2006-05-03T20:30:45Z",
                "age": 13
            },
            "phone": "(584)-751-5249",
            "cell": "(604)-523-0298",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/23.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
            },
            "nat": "TR"
        },
        {
            "gender": "female",
            "name": {
                "title": "miss",
                "first": "helene",
                "last": "nix"
            },
            "location": {
                "street": "römerstraße 142",
                "city": "erlensee",
                "state": "bayern",
                "postcode": 74871,
                "coordinates": {
                    "latitude": "-16.6162",
                    "longitude": "169.7306"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "helene.nix@example.com",
            "login": {
                "uuid": "a1784503-ed4a-46a3-92d3-1b33e382df17",
                "username": "lazyladybug177",
                "password": "bearcat",
                "salt": "ml5oIl28",
                "md5": "22d03b8ce13f3f9baa7dc684f0503cd8",
                "sha1": "f5f7ba26980c77df00e05c321475f7c72db2718a",
                "sha256": "2f1c344aecfb65e9aee95098b785aedab15905904fd2801a936e67da1d7a5149"
            },
            "dob": {
                "date": "1970-08-21T14:32:46Z",
                "age": 49
            },
            "registered": {
                "date": "2005-12-07T03:34:06Z",
                "age": 13
            },
            "phone": "0577-6447235",
            "cell": "0170-3968489",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/76.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
            },
            "nat": "DE"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "اميرحسين",
                "last": "حیدری"
            },
            "location": {
                "street": "5131 پاتریس لومومبا",
                "city": "کرمان",
                "state": "ایلام",
                "postcode": 18997,
                "coordinates": {
                    "latitude": "-2.6117",
                    "longitude": "-148.9347"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "اميرحسين.حیدری@example.com",
            "login": {
                "uuid": "73c8ccb7-7c35-4905-bae6-dfba322d8ee2",
                "username": "orangedog301",
                "password": "knicks",
                "salt": "0unBWOAK",
                "md5": "0b19487098ae4e07571ec1fb1c6f572d",
                "sha1": "12cfdef0ff4dc6091934ea22d44d1bb0b08c83d3",
                "sha256": "fa9d465a5634b6edbc6f1eea9fabdbbcb63b6012584d36db0daa949249ac217a"
            },
            "dob": {
                "date": "1992-04-16T20:33:18Z",
                "age": 27
            },
            "registered": {
                "date": "2005-09-15T23:36:50Z",
                "age": 13
            },
            "phone": "030-24069799",
            "cell": "0976-971-4105",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/1.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
            },
            "nat": "IR"
        },
```

1. All the repos on Github with Pursuit their name

```js
endpoint = "https://api.github.com/search/repositories?q=pursuit+user:joinpursuit"
data = "total_count": 82,
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
            },
            "html_url": "https://github.com/joinpursuit/Pursuit-Core-Android",
            "description": "Pursuit Core Android",
            "fork": false,
            "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android",
            "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/forks",
            "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/teams",
            "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/hooks",
            "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/issues/events{/number}",
            "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/events",
            "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/assignees{/user}",
            "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/branches{/branch}",
            "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/tags",
            "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/languages",
            "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/stargazers",
            "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/contributors",
            "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/subscribers",
            "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/subscription",
            "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/contents/{+path}",
            "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/merges",
            "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/downloads",
            "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/issues{/number}",
            "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/labels{/name}",
            "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/releases{/id}",
            "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Android/deployments",
            "created_at": "2016-07-13T18:16:19Z",
            "updated_at": "2019-09-02T00:28:22Z",
            "pushed_at": "2019-07-28T20:04:29Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-Android.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Android.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Android.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Android",
            "homepage": "",
            "size": 50662,
            "stargazers_count": 46,
            "watchers_count": 46,
            "language": "Java",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 64,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 64,
            "open_issues": 0,
            "watchers": 46,
            "default_branch": "master",
            "score": 100.637184
        },
```

1. All the JavaScript repos on Github with Pursuit in their name

```js
```

1. All the Swift repos on Github with Pursuit in their name

```js
```

1. A list of all Pokemon

```js
endpoint = "https://pokeapi.co/api/v2/pokemon"
data = " "count": 964,
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
     "
```

1. A list of all items in Fortnite

```js
endpoint = " https://www.fortnitehut.com/free-api?rarity=epic"
data= ""results": [
        {
            "rarityid": {
                "name": "epic",
                "date": "September 9th 2019"
            }
        }
    ],
    "items": [
        {
            "name": "Cryo Hops",
            "ourid": "ecivZzK"
        },
        {
            "name": "Shake It Up",
            "ourid": "PzHJpD2"
    "
```

1. A list of all Game of Thrones Episodes.

```js
endpoint = "https://api.got.show/api/map/episodes"
data = "    "message": "Success",
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
        },"
```

1. All information about Petyr Baelish from the Game of Thrones books

````js
endpoint="https://www.anapioficeandfire.com/api/characters/823"
data = ""url": "https://www.anapioficeandfire.com/api/characters/823",
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
    ],"
    ```
1. All the movies Leonardo Dicaprio has acted in
1. A list of all songs with "Love" in the title.
``` js
endpoint = "https://itunes.apple.com/search?term=love"
Status = "{
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
All information about Petyr Baelish from the Game of Thrones books
https://www.anapioficeandfire.com/api/characters/823
{"
```
````
