# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
url: https://catfact.ninja/fact
let data  = {
    "fact": "Among many other diseases, cats can suffer from anorexia, senility, feline AIDS and acne.",
    "length": 89
}






2. A list of 150 random users in English.

url = https://randomuser.me/api/?nat=eng
let data = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Bertram",
                "last": "Epp"
            },
            "location": {
                "street": {
                    "number": 5151,
                    "name": "Mühlweg"
                },
                "city": "Markgröningen",
                "state": "Sachsen",
                "country": "Germany",
                "postcode": 33309,
                "coordinates": {
                    "latitude": "-46.0234",
                    "longitude": "-99.1236"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "bertram.epp@example.com",
            "login": {
                "uuid": "1258b8c4-48e1-4c1f-8db4-d0c3c6ac5d98",
                "username": "sadelephant853",
                "password": "superman",
                "salt": "pH6gWg0F",
                "md5": "b1838482ead33dd75b7e69770850dfed",
                "sha1": "5ed3cb9ada8fb0ef0e275ae0679955f34a8a40ac",
                "sha256": "4ccadfa11debb183d827abd010f88051d16ac55f4b67eae5c5d0701c887fb28b"
            },
            "dob": {
                "date": "1945-08-29T13:21:38.813Z",
                "age": 74
            },
            "registered": {
                "date": "2015-10-30T22:31:19.367Z",
                "age": 4
            },
            "phone": "0736-7385509",
            "cell": "0170-4519728",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/20.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
            },
            "nat": "DE"
        }
    ],
    "info": {
        "seed": "889f05dc42683bb6",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
}







3) All the repos on Github with Pursuit their name
url: https://api.github.com/search/repositories?q=pursuit
let data = {
    "total_count": 1552,
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

1. All the JavaScript repos on Github with Pursuit in their name
url- https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc
let data = {
    let data = {
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
            "html_url": "https://github.com/joinpursuit/Pursuit-Core-Web",
            "description": "The master curriculum for Pursuit Core's web development cohorts.",
            "fork": false,
            "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web",
            "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/forks",
            "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/teams",
            "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/hooks",
            "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/issues/events{/number}",
            "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/events",
            "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/assignees{/user}",
            "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/branches{/branch}",
            "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/tags",
            "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/languages",
            "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/stargazers",
            "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/contributors",
            "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/subscribers",
            "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/subscription",
            "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/contents/{+path}",
            "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/merges",
            "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/downloads",
            "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/issues{/number}",
            "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/labels{/name}",
            "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/releases{/id}",
            "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web/deployments",
            "created_at": "2018-09-17T15:38:43Z",
            "updated_at": "2019-11-26T00:38:44Z",
            "pushed_at": "2019-11-25T23:52:45Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-Web.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Web.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Web.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Web",
            "homepage": "",
            "size": 48171,
            "stargazers_count": 32,
            "watchers_count": 32,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 121,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 1,
            "license": null,
            "forks": 121,
            "open_issues": 1,
            "watchers": 32,
            "default_branch": "master",
            "score": 132.28212
        },

1. All the Swift repos on Github with Pursuit in their name
url: https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc

let data = {
    "total_count": 130,
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
            "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/merges",
            "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/downloads",
            "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/issues{/number}",
            "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/labels{/name}",
            "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/releases{/id}",
            "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS/deployments",
            "created_at": "2017-08-08T14:46:25Z",
            "updated_at": "2019-11-21T23:04:32Z",
            "pushed_at": "2019-11-21T23:04:29Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS",
            "homepage": "",
            "size": 109591,
            "stargazers_count": 33,
            "watchers_count": 33,
            "language": "Swift",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 101,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 1,
            "license": null,
            "forks": 101,
            "open_issues": 1,
            "watchers": 33,
            "default_branch": "master",
            "score": 129.45125
        },


1. A list of all Pokemon
url: https://pokeapi.co/api/v2/pokemon/
let data = {
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
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
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        }
    ]
}
1. A list of all items in Fortnite
url: https://fortnite-api.theapinetwork.com/store/get
let data = {
    "lastUpdate": 1574726400,
    "lanuage": "en",
    "data": [
        {
            "itemId": "e67b4bc-bd9afae-5c95ae3-2ce6ce9",
            "lastUpdate": 1574726400,
            "store": {
                "isFeatured": true,
                "isRefundable": true,
                "cost": 1200,
                "occurrences": 0,
                "isNew": false
            },
            "item": {
                "name": "Split Wing",
                "description": null,
                "type": "glider",
                "rarity": "epic",
                "costmeticId": null,
                "images": {
                    "icon": "https://fortnite-public-files.theapinetwork.com/glider/9ee90191d74b9860da47d3a80e04aad0.png",
                    "featured": "https://fortnite-public-files.theapinetwork.com/featured/e67b4bc-bd9afae-5c95ae3-2ce6ce9.png",
                    "background": "https://fortnite-public-files.theapinetwork.com/image/e67b4bc-bd9afae-5c95ae3-2ce6ce9.png",
                    "information": "https://fortnite-public-files.theapinetwork.com/image/e67b4bc-bd9afae-5c95ae3-2ce6ce9/item.png"
                },
                "backpack": {},
                "obtained_type": "vbucks",
                "ratings": {
                    "avgStars": 3.83,
                    "totalPoints": 670,
                    "numberVotes": 175
                }
            }
        },
        {
1. A list of all Game of Thrones Episodes.
url: api.got.show/api/show/episodes

let data = [
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
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Doreah",
            "Irri",
            "Jhiqui",
            "Rast",
            "Catspaw assassin",
            "Ilyn Payne",
            "Mycah",
            "Lannister guardsman"
        ],
        "deaths": [
            "Catspaw assassin",
            "Mycah",
            "Lady"
        ],
        "places": [
            "In the Dothraki Sea",
            "In the North",
            "At the Wall",
            "At the Inn at the Crossroads",
            "Characters",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a1b",
        "title": "The Kingsroad",
        "season": 1,
        "episode": 2,
        "runtime": 56,
        "directed_by": "Tim Van Patten",
        "createdAt": "2019-04-24T14:37:51.760Z",
        "updatedAt": "2019-04-24T14:37:51.760Z",
        "__v": 0
    },
1. A list of all songs with "Love" in the title.
url = https://itunes.apple.com/search?term=love&media=music

let data = {
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true}, 
{"wrapperType":"track", "kind":"song", "artistId":368183298, "collectionId":1440881047, "trackId":1440881708, "artistName":"Kendrick Lamar", "collectionName":"DAMN.", "trackName":"LOVE. (FEAT. ZACARI.)", "collectionCensoredName":"DAMN.", "trackCensoredName":"LOVE. (FEAT. ZACARI.)", "artistViewUrl":"https://music.apple.com/us/artist/kendrick-lamar/368183298?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4", "trackViewUrl":"https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4", 



1. All information about Petyr Baelish from the Game of Thrones books
url: https://www.anapioficeandfire.com/api/characters/823

let data = {
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
url: https://itunes.apple.com/search?term=leonardo+dicaprio
let data = {
 "resultCount":41,
 "results": [
{"wrapperType":"track", "kind":"feature-movie", "trackId":1473165316, "artistName":"Quentin Tarantino", "trackName":"Once Upon a Time...in Hollywood", "trackCensoredName":"Once Upon a Time...in Hollywood", "trackViewUrl":"https://itunes.apple.com/us/movie/once-upon-a-time-in-hollywood/id1473165316?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video113/v4/89/74/d9/8974d974-01b1-bd9b-c7af-16e25b99527f/mzvf_11817609157199251412.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/100x100bb.jpg", "collectionPrice":19.99, "trackPrice":19.99, "collectionHdPrice":19.99000, "trackHdPrice":19.99000, "releaseDate":"2019-07-26T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "trackTimeMillis":9704568, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", 
"longDescription":"The 9th film from Quentin Tarantino features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood’s golden age.", "hasITunesExtras":true}, 
{"wrapperType":"track", "kind":"feature-movie", "collectionId":1151694663, "trackId":774084884, "artistName":"Martin Scorsese", "collectionName":"10 Years of iTunes Movies - Paramount", "trackName":"The Wolf of Wall Street", "collectionCensoredName":"10 Years of iTunes Movies - Paramount", "trackCensoredName":"The Wolf of Wall Street", "collectionArtistId":1008915738, "collectionArtistViewUrl":"https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", "trackViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/ff/b7/77/ffb777a8-04c0-56fe-2237-64c09352891e/mzvf_3469655200525770514.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/100x100bb.jpg", "collectionPrice":12.99, "trackPrice":12.99, "trackRentalPrice":3.99000, "collectionHdPrice":14.99000, "trackHdPrice":14.99000, "trackHdRentalPrice":3.99000, "releaseDate":"2013-12-25T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":10, "trackNumber":3, "trackTimeMillis":10806388, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", "shortDescription":"Revered filmmaker Martin Scorsese directs the story of New York stockbroker Jordan Belfort (Leonardo", 
"longDescription":"Sex. Money. Power. Drugs. Brace yourself for an outrageous true story from legendary filmmaker Martin Scorsese that critics are calling \"a masterpiece for a new generation.” Leonardo DiCaprio delivers the best performance of his career as a young stockbroker hungry for a life of non-stop thrills, where corruption was king and more was never enough. His rise to power earned him the title The Wolf of Wall Street. Together, Scorsese and DiCaprio deliver a story of American excess that is an absolute blast from start to finish.", "hasITunesExtras":true}, 
{"wrapperType":"track", "kind":"feature-movie", "collectionId":1438927223, "trackId":1067140154, "artistName":"Alejandro González Iñárritu", "collectionName":"Thriller 10 Movies", "trackName":"The Revenant", "collectionCensoredName":"Thriller 10 Movies", "trackCensoredName":"The Revenant", "collectionArtistId":345346894, "collectionArtistViewUrl":"https://itunes.apple.com/us/artist/20th-century-fox-film/345346894?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/movie/the-revenant/id1067140154?uo=4", "trackViewUrl":"https://itunes.apple.com/us/movie/the-revenant/id1067140154?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/39/84/c7/3984c7f2-ca0b-dee0-aa4f-b03e259f029a/mzvf_5795847094338690742.640x356.h264lc.U.p.m4v", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Video49/v4/74/4d/f3/744df33f-2a96-ae33-c367-5eeac7e3805c/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Video49/v4/74/4d/f3/744df33f-2a96-ae33-c367-5eeac7e3805c/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Video49/v4/74/4d/f3/744df33f-2a96-ae33-c367-5eeac7e3805c/source/100x100bb.jpg", "collectionPrice":14.99, "trackPrice":14.99, "trackRentalPrice":3.99000, "collectionHdPrice":14.99000, "trackHdPrice":14.99000, "trackHdRentalPrice":3.99000, "releaseDate":"2015-12-25T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":10, "trackNumber":2, "trackTimeMillis":9410242, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", "shortDescription":"Leonardo DiCaprio stars in this visceral, epic adventure inspired by true events from writer-", 
"longDescription":"Leonardo DiCaprio stars in this visceral, epic adventure inspired by true events from writer-director Alejandro G. Iñárritu. While on a hunting expedition in the uncharted American wilderness, Hugh Glass (DiCaprio) is attacked by a bear and left for dead. Despite unimaginable grief and betrayal by his confidant (Tom Hardy), Glass must navigate a vicious winter in a relentless pursuit to live.", "hasITunesExtras":true}, 

# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200 - Status is successful
1. 301 - status was moved permanently to a new url
1. 400 - Bad request- The request could not be understood by the server. 
1. 401 - Unauthorized. The request requres user authentication or, if the request included authorization credentials, authorization has been refused for those credentials
1. 403 - forbidden- the server understands but refuses to fulfill it
1. 404 - Server not found because of a temporary or permanent condition
1. 418 - I'm a teapot. What????????
1. 500 - Internal Server Error- Coders usually catrch this. 


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



