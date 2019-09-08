# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
* Endpoint= https://github.com
* Status meaning= OK response.
* What would my app do?= Display the information that was retrieved. No issues retrieving the request.
2. 301
* Endpoint= https://www.facebook.com/
* Status meaning= Redirection Moved Permanently.
* What would my app do? The requested source is given a new permanent URI. Therefore, this resource should use one of the returned URIs. For instance facebook after the person logs on they have their own URL.
3. 400
* Endpoint=
* Status meaning= Bad Request
* What would my app do? request will not be understood due to malformed syntax.
4. 401
* Endpoint= https:// canvas.instructure.com
* Status meaning= Unauthorized
* What would my app do? This requires user authentication. If not it will not work.
5. 403
* Endpoint= https://google.docs.com
* Status meaning= Forbidden.
* What would my app do? It will display, you do not have permission to view this directory or page. So the server understood the request but is not going to fulfill it.
6. 404
* Endpoint= https://apps.apple.com/app
* Status meaning= Not Found.
* What would my app do? It doesn't exist. This will display an error, because the server didn't find anything that matches the requested URL.
7. 418
* Endpoint=
* Status meaning=
* What would my app do?
8. 500
* Endpoint=
* Status meaning= Internal Server Error.
* What would my app do? An unexpected condition is preventing the request from being fulfilled.


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

* endpoint= https://catfact.ninja/facts?limit=1&max_length=140
* snippit =  [
       {
           "fact": "A cat has approximately 60 to 80 million olfactory cells (a human has between 5 and 20 million).",
           "length": 96
       }
   ]

2. A list of 150 random users in English.
* endpoint=https://randomuser.me/api/
* snippit: {
   "results": [
       {
           "gender": "male",
           "name": {
               "title": "mr",
               "first": "benjamin",
               "last": "jørgensen"
           },
           "location": {
               "street": "6686 syrenvej",
               "city": "hurup thy",
               "state": "hovedstaden",
               "postcode": 46903,
               "coordinates": {
                   "latitude": "-36.8514",
                   "longitude": "-49.5974"
               },
               "timezone": {
                   "offset": "-12:00",
                   "description": "Eniwetok, Kwajalein"
               }
           },
           "email": "benjamin.jørgensen@example.com",
           "login": {
               "uuid": "250ad536-f8ea-49f1-bf31-eeee590bfb89",
               "username": "browncat889",
               "password": "willis",
               "salt": "0G4NJ0g0",
               "md5": "34e5e194c44fbef618dc1c3dace7d942",
               "sha1": "945a534e092bfdb0e761e8f2ea461c0e1cf1d433",
               "sha256": "e2c1451efd6b47ff89ad640376b150e3ddf5e1427f8f418b53f602b10a1a07ff"
           },
           "dob": {
               "date": "1992-08-29T03:17:41Z",
               "age": 27
           },
           "registered": {
               "date": "2016-11-07T19:19:37Z",
               "age": 2
           },
           "phone": "36079756",
           "cell": "54058973",
           "id": {
               "name": "CPR",
               "value": "772918-7960"
           },
           "picture": {
               "large": "https://randomuser.me/api/portraits/men/89.jpg(6 kB)
https://randomuser.me/api/portraits/men/89.jpg
",
               "medium": "https://randomuser.me/api/portraits/med/men/89.jpg(3 kB)
https://randomuser.me/api/portraits/med/men/89.jpg
",
               "thumbnail": "https://randomuser.me/api/portraits/thumb/men/89.jpg(2 kB)
https://randomuser.me/api/portraits/thumb/men/89.jpg
"
           },
           "nat": "DK"
       }
   ],
   "info": {
       "seed": "5ee619c8ea09b640",
       "results": 1,
       "page": 1,
       "version": "1.2"
   }
}

3. All the repos on Github with Pursuit their name
* endpoint = https://api.github.com/search/repositories?q=pursuit&order=desc
* snippit = {
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
            "html_url": "https://github.com/purescript/pursuit",
            "description": "Website for hosting and searching PureScript API documentation",
            "fork": false,
            "url": "https://api.github.com/repos/purescript/pursuit",
            "forks_url": "https://api.github.com/repos/purescript/pursuit/forks",
            "keys_url": "https://api.github.com/repos/purescript/pursuit/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/purescript/pursuit/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/purescript/pursuit/teams",
            "hooks_url": "https://api.github.com/repos/purescript/pursuit/hooks",
            "issue_events_url": "https://api.github.com/repos/purescript/pursuit/issues/events{/number}",
            "events_url": "https://api.github.com/repos/purescript/pursuit/events",
            "assignees_url": "https://api.github.com/repos/purescript/pursuit/assignees{/user}",
            "branches_url": "https://api.github.com/repos/purescript/pursuit/branches{/branch}",
            "tags_url": "https://api.github.com/repos/purescript/pursuit/tags",
            "blobs_url": "https://api.github.com/repos/purescript/pursuit/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/purescript/pursuit/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/purescript/pursuit/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/purescript/pursuit/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/purescript/pursuit/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/purescript/pursuit/languages",
            "stargazers_url": "https://api.github.com/repos/purescript/pursuit/stargazers",
            "contributors_url": "https://api.github.com/repos/purescript/pursuit/contributors",
            "subscribers_url": "https://api.github.com/repos/purescript/pursuit/subscribers",
            "subscription_url": "https://api.github.com/repos/purescript/pursuit/subscription",
            "commits_url": "https://api.github.com/repos/purescript/pursuit/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/purescript/pursuit/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/purescript/pursuit/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/purescript/pursuit/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/purescript/pursuit/contents/{+path}",
            "compare_url": "https://api.github.com/repos/purescript/pursuit/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/purescript/pursuit/merges",
            "archive_url": "https://api.github.com/repos/purescript/pursuit/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/purescript/pursuit/downloads",
            "issues_url": "https://api.github.com/repos/purescript/pursuit/issues{/number}",
            "pulls_url": "https://api.github.com/repos/purescript/pursuit/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/purescript/pursuit/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/purescript/pursuit/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/purescript/pursuit/labels{/name}",
            "releases_url": "https://api.github.com/repos/purescript/pursuit/releases{/id}",
            "deployments_url": "https://api.github.com/repos/purescript/pursuit/deployments",
            "created_at": "2014-08-04T04:57:54Z",
            "updated_at": "2019-08-13T20:44:13Z",
            "pushed_at": "2019-07-15T17:44:14Z",
            "git_url": "git://github.com/purescript/pursuit.git",
            "ssh_url": "git@github.com:purescript/pursuit.git",
            "clone_url": "https://github.com/purescript/pursuit.git",
            "svn_url": "https://github.com/purescript/pursuit",
            "homepage": "https://pursuit.purescript.org/",
            "size": 1252,
            "stargazers_count": 109,
            "watchers_count": 109,
            "language": "Haskell",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 42,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 53,
            "license": {
                "key": "other",
                "name": "Other",
                "spdx_id": "NOASSERTION",
                "url": null,
                "node_id": "MDc6TGljZW5zZTA="
            },
            "forks": 42,
            "open_issues": 53,
            "watchers": 109,
            "default_branch": "master",
            "score": 107.71261
        },

4. All the JavaScript repos on Github with Pursuit in their name
* endpoint = https://api.github.com/search/repositories?q=pursuit+language:javascript&order=desc
* snippit = {
    "total_count": 142,
    "incomplete_results": false,
    "items": [
        {
            "id": 29826657,
            "node_id": "MDEwOlJlcG9zaXRvcnkyOTgyNjY1Nw==",
            "name": "argo",
            "full_name": "albertosantini/argo",
            "private": false,
            "owner": {
                "login": "albertosantini",
                "id": 328179,
                "node_id": "MDQ6VXNlcjMyODE3OQ==",
                "avatar_url": "https://avatars2.githubusercontent.com/u/328179?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/albertosantini",
                "html_url": "https://github.com/albertosantini",
                "followers_url": "https://api.github.com/users/albertosantini/followers",
                "following_url": "https://api.github.com/users/albertosantini/following{/other_user}",
                "gists_url": "https://api.github.com/users/albertosantini/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/albertosantini/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/albertosantini/subscriptions",
                "organizations_url": "https://api.github.com/users/albertosantini/orgs",
                "repos_url": "https://api.github.com/users/albertosantini/repos",
                "events_url": "https://api.github.com/users/albertosantini/events{/privacy}",
                "received_events_url": "https://api.github.com/users/albertosantini/received_events",
                "type": "User",
                "site_admin": false
            },


5. All the Swift repos on Github with Pursuit in their name
* endpoint = https://api.github.com/search/repositories?q=pursuit+language:swift&sort=stars&order=desc
* snippit = {
    "total_count": 78,
    "incomplete_results": false,
    "items": [
        {
            "id": 39978693,
            "node_id": "MDEwOlJlcG9zaXRvcnkzOTk3ODY5Mw==",
            "name": "swift-wisdom",
            "full_name": "IntrepidPursuits/swift-wisdom",
            "private": false,
            "owner": {
                "login": "IntrepidPursuits",
                "id": 2151424,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjIxNTE0MjQ=",
                "avatar_url": "https://avatars1.githubusercontent.com/u/2151424?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/IntrepidPursuits",
                "html_url": "https://github.com/IntrepidPursuits",
                "followers_url": "https://api.github.com/users/IntrepidPursuits/followers",
                "following_url": "https://api.github.com/users/IntrepidPursuits/following{/other_user}",
                "gists_url": "https://api.github.com/users/IntrepidPursuits/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/IntrepidPursuits/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/IntrepidPursuits/subscriptions",
                "organizations_url": "https://api.github.com/users/IntrepidPursuits/orgs",
                "repos_url": "https://api.github.com/users/IntrepidPursuits/repos",
                "events_url": "https://api.github.com/users/IntrepidPursuits/events{/privacy}",
                "received_events_url": "https://api.github.com/users/IntrepidPursuits/received_events",
                "type": "Organization",
                "site_admin": false
            },

6. A list of all Pokemon
* endpoint = https://pokeapi.co/api/v2/pokemon
* snippit = "results": [
       {
           "name": "bulbasaur",
           "url": "https://pokeapi.co/api/v2/pokemon/1/"
       },
       {
           "name": "ivysaur",
           "url": "https://pokeapi.co/api/v2/pokemon/2/"
       },

7. A list of all items in Fortnite
* endpoint = https://www.fortnitehut.com/free-api?rarity=epic
* snippit = {
   "results": [
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

8. A list of all Game of Thrones Episodes.
* endpoint = https://api.got.show/api/map/episodes
* snippit = { "_id": "5cc0743604e71a0010b85729",
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

9. A list of all songs with "Love" in the title.
* endpoint = https://itunes.apple.com/search?term=love
* snippit = {
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true}, 

10. All information about Petyr Baelish from the Game of Thrones books
* endpoint = https://www.anapioficeandfire.com/api/characters/823
* snippit =  {
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

11. All the movies Leonardo Dicaprio has acted in
* endpoint = https://itunes.apple.com/search?term=leonardo dicaprio
* snippit = {
 "resultCount":41,
 "results": [
{"wrapperType":"track", "kind":"feature-movie", "collectionId":1151694663, "trackId":774084884, "artistName":"Martin Scorsese", "collectionName":"10 Years of iTunes Movies - Paramount", "trackName":"The Wolf of Wall Street", "collectionCensoredName":"10 Years of iTunes Movies - Paramount", "trackCensoredName":"The Wolf of Wall Street", "collectionArtistId":1008915738, "collectionArtistViewUrl":"https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", "trackViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/ff/b7/77/ffb777a8-04c0-56fe-2237-64c09352891e/mzvf_3469655200525770514.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/100x100bb.jpg", "collectionPrice":12.99, "trackPrice":12.99, "trackRentalPrice":3.99000, "collectionHdPrice":14.99000, "trackHdPrice":14.99000, "trackHdRentalPrice":3.99000, "releaseDate":"2013-12-25T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":10, "trackNumber":3, "trackTimeMillis":10806388, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", "shortDescription":"Revered filmmaker Martin Scorsese directs the story of New York stockbroker Jordan Belfort (Leonardo", 
"longDescription":"Sex. Money. Power. Drugs. Brace yourself for an outrageous true story from legendary filmmaker Martin Scorsese that critics are calling \"a masterpiece for a new generation.” Leonardo DiCaprio delivers the best performance of his career as a young stockbroker hungry for a life of non-stop thrills, where corruption was king and more was never enough. His rise to power earned him the title The Wolf of Wall Street. Together, Scorsese and DiCaprio deliver a story of American excess that is an absolute blast from start to finish.", "hasITunesExtras":true},
