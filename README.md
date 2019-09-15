# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
website: https://http.cat
meaning: OK
would do: nothing
1. 301
website: https://http.cat
meaning: moved permanently
would do: change url
1. 400
website: https://http.cat
meaning: bad request
would do: check syntax
1. 401
website: https://http.cat
meaning: unauthorized
would do: check login issues
1. 403
website: https://http.cat
meaning: forbidden
would do: fix server access rules
1. 404
website: https://http.cat
meaning: not found
would do: upload content
1. 418
website: https://http.cat
meaning: I'm a teapot
would do: ?
1. 500
website: https://http.cat
meaning: internal server error
would do: fix server issues

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
url: https://catfact.ninja/fact
JSON: {
    "fact": "A kitten will typically weigh about 3 ounces at birth.  The typical male housecat will weigh between  7 and 9 pounds, slightly less for female housecats.",
    "length": 153
}
1. A list of 150 random users in English.
url: https://randomuser.me/api/?results=150
JSON: {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "edward",
                "last": "alexander"
            },
            "location": {
                "street": "7801 stevens creek blvd",
                "city": "mackay",
                "state": "new south wales",
                "postcode": 1224,
                "coordinates": {
                    "latitude": "-81.9599",
                    "longitude": "-58.6360"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "edward.alexander@example.com",
            "login": {
                "uuid": "40a7c836-1e82-44f9-a7c4-3a14cdf152ed",
                "username": "silverfish297",
                "password": "impala",
                "salt": "g4Ikp7J3",
                "md5": "9a07fa8a21762dab6479c8a6837e2763",
                "sha1": "1de4e445fa74d959f9e2cef8edbd16177536dcd7",
                "sha256": "e4dbc59ab8ad8ed310e67bcfb337b574c8c7e4f8f36484f0fe3597c0e080147b"
            },
            "dob": {
                "date": "1978-08-30T16:40:41Z",
                "age": 41
            },
            "registered": {
                "date": "2003-04-03T20:32:52Z",
                "age": 16
            },
            "phone": "07-8903-1985",
            "cell": "0456-864-951",
            "id": {
                "name": "TFN",
                "value": "558015653"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/26.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "anthony",
                "last": "knight"
1. All the repos on Github with Pursuit their name
url: https://api.github.com/search/repositories?q=pursuit+in:name
JSON: {
    "total_count": 796,
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
1. All the JavaScript repos on Github with Pursuit in their name
url: https://api.github.com/search/repositories?q=pursuit+language:javascript
JSON: {
    "total_count": 145,
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
            "html_url": "https://github.com/albertosantini/argo",
            "description": "Quest in pursuit of the Golden Fleece in Forex chaos",
            "fork": false,
            "url": "https://api.github.com/repos/albertosantini/argo",
            "forks_url": "https://api.github.com/repos/albertosantini/argo/forks",
            "keys_url": "https://api.github.com/repos/albertosantini/argo/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/albertosantini/argo/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/albertosantini/argo/teams",
            "hooks_url": "https://api.github.com/repos/albertosantini/argo/hooks",
            "issue_events_url": "https://api.github.com/repos/albertosantini/argo/issues/events{/number}",
            "events_url": "https://api.github.com/repos/albertosantini/argo/events",
            "assignees_url": "https://api.github.com/repos/albertosantini/argo/assignees{/user}",
            "branches_url": "https://api.github.com/repos/albertosantini/argo/branches{/branch}",
            "tags_url": "https://api.github.com/repos/albertosantini/argo/tags",
            "blobs_url": "https://api.github.com/repos/albertosantini/argo/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/albertosantini/argo/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/albertosantini/argo/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/albertosantini/argo/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/albertosantini/argo/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/albertosantini/argo/languages",
            "stargazers_url": "https://api.github.com/repos/albertosantini/argo/stargazers",
            "contributors_url": "https://api.github.com/repos/albertosantini/argo/contributors",
            "subscribers_url": "https://api.github.com/repos/albertosantini/argo/subscribers",
            "subscription_url": "https://api.github.com/repos/albertosantini/argo/subscription",
            "commits_url": "https://api.github.com/repos/albertosantini/argo/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/albertosantini/argo/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/albertosantini/argo/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/albertosantini/argo/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/albertosantini/argo/contents/{+path}",
            "compare_url": "https://api.github.com/repos/albertosantini/argo/compare/{base}...{head}",
1. All the Swift repos on Github with Pursuit in their name
url: https://api.github.com/search/repositories?q=pursuit+language:swift
JSON {
    "total_count": 80,
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
            "html_url": "https://github.com/joinpursuit/Pursuit-Core-iOS",
            "description": "Home of the Pursuit iOS course with resource material and unit lessons",
            "fork": false,
            "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS",
            "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/forks",
            "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/teams",
            "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/hooks",
            "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/issues/events{/number}",
            "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/events",
            "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/assignees{/user}",
            "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/branches{/branch}",
            "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/tags",
            "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/languages",
            "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/stargazers",
            "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/contributors",
            "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/subscribers",
            "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/subscription",
            "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/contents/{+path}",
            "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/compare/{base}...{head}",
1. A list of all Pokemon
url: http://pokeapi.co/api/v2/pokemon?offset=0&limit=807
JSON: {
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=807&limit=157",
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
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
1. A list of all items in Fortnite
url: https://www.fortnitehut.com/free-api?rarity=epic&rarity=common&rarity=legendary&rarity=uncommon&rarity=rare
JSON: {
    "results": [
        {
            "rarityid": {
                "name": "rare",
                "date": "September 15th 2019"
            }
        }
    ],
    "items": [
        {
            "name": "Clobber Axe",
            "ourid": "gFrdETC"
        },
        {
            "name": "Moxie",
            "ourid": "3w8pM53"
        },
        {
            "name": "Capoeira",
            "ourid": "pIhDbIl"
        },
        {
            "name": "Rainy Days",
            "ourid": "M1o05kB"
        },
        {
            "name": "Turbulent",
            "ourid": "ji5CDM2"
        },
        {
            "name": "Forever Tuesday",
            "ourid": "skumaBb"
        },
        {
            "name": "Forever Tuesday",
            "ourid": "GRByhnS"
        },
        {
            "name": "Taco Time",
            "ourid": "e7TApPJ"
        },
        {
            "name": "Guaco",
            "ourid": "1nkMx1A"
        },
        {
            "name": "Wiggle Wild",
            "ourid": "zfLuXxH"
        },
        {
            "name": "Wedge",
            "ourid": "NLd6fZ8"
        },
        {
            "name": "Toxic Tagger",
            "ourid": "l1uInAz"
        },
        {
            "name": "Taco Time",
1. A list of all Game of Thrones Episodes.
url: https://api.got.show/api/map/episodes
JSON: {
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
1. A list of all songs with "Love" in the title.
url: https://api.discogs.com//database/search?q=query&track=love
JSON: {
    "message": "You must authenticate to access this resource."
}
1. All information about Petyr Baelish from the Game of Thrones books
url: https://www.anapioficeandfire.com/api/characters/823
JSON: {
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
1. All the movies Leonardo Dicaprio has acted in
url: https://api.themoviedb.org/3/discover/movie?with_people=287
JSON: {
    "status_code": 7,
    "status_message": "Invalid API key: You must be granted a valid key.",
    "success": false
}
