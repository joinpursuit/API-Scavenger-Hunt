Use Postman to find each of the following HTTP codes:


1. 200
1. 301
1. 400
1. 401
1. 403
1. 404
1. 418
1. 500

endpoint = https://www.twitch.tv/
status meaning = Request was sucessful
what would my app do? = It would continue to work

2. 301

endpoint = https://twitch.tv/
status meaning = Moved permanently
what would my app do? = I would have to update it with the proper webpage

3. 400

endpoint = https://www.apple.com/%
status meaning = Bad Request, bad syntax
what would my app do? = Until the error is fixed it wouldnt work correctly

4. 401

endpoint = https://canvas.instructure.com
status meaning = Authentication is required
what would my app do? = I would need to provide proper authentication

5. 403

endpoint = https://google.docs.com
status meaning = Server is refusing action
what would my app do? = An account may have to be provided to log in

6. 404

endpoint = https://apps.apple.com/app
status meaning = Not found
what would my app do? = YOu would have to provide an alternate request or wait for it to become available again

7. 418

endpoint = https://www.google.com/teapot
status meaning = im a teapot
what would my app do? = It would tell you that it is a teapot.

8. 500

endpoint =
status meaning = Internal server error
what would my app do? = The error most be resolved for the page to work

For each of the questions below, write:

@@ -37,13 +75,272 @@ API Scavenger Hunt!
For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
1. A list of 150 random users in English.
1. All the repos on Github with Pursuit their name
1. All the JavaScript repos on Github with Pursuit in their name
1. All the Swift repos on Github with Pursuit in their name
1. A list of all Pokemon
1. A list of all items in Fortnite
1. A list of all Game of Thrones Episodes.
1. A list of all songs with "Love" in the title.
1. All information about Petyr Baelish from the Game of Thrones books
1. All the movies Leonardo Dicaprio has acted in

https://catfact.ninja/fact
```
{
    "fact": "A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.",
    "length": 116
}
```

2. A list of 150 random users in English.
https://randomuser.me/api/

```
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "امیر",
                "last": "رضایی"
            },
            "location": {
                "street": "6828 میدان امام خمینی",
                "city": "قم",
                "state": "گیلان",
                "postcode": 27329,
                "coordinates": {
                    "latitude": "36.4899",
                    "longitude": "-30.2773"
                },
                "timezone": {
                    "offset": "+8:00",
                    "description": "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            "email": "امیر.رضایی@example.com",
            "login": {
                "uuid": "32daabf3-550e-412f-aea2-0f204241ba28",
                "username": "redcat147",
                "password": "treetop",
                "salt": "xvb5fi07",
                "md5": "3bb97deb8d52ad32c572f50bb44685d2",
                "sha1": "fc1f89048d818164d59c3d838c7bc3aaa681fb98",
                "sha256": "ac548c001b6db5f67df851a4d2cfa82c909dce556de66482bf7d593b614cf7d6"
            },
            "dob": {
                "date": "1996-08-13T19:56:18Z",
                "age": 23
            },
            "registered": {
                "date": "2005-02-15T14:39:57Z",
                "age": 14
            },
            "phone": "021-20761589",
            "cell": "0991-171-5312",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/4.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
            },
            "nat": "IR"
        }
    ],
    "info": {
        "seed": "3b2ba798cafd2787",
        "results": 1,
        "page": 1,
        "version": "1.2"
    }
}
```
3. All the repos on Github with Pursuit their name
https://api.github.com/search/repositories?q=Pursuit

```
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
            "score": 100.613846
        }
```
4. All the JavaScript repos on Github with Pursuit in their name
5. All the Swift repos on Github with Pursuit in their name
6. A list of all Pokemon
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
```

7. A list of all items in Fortnite
8. A list of all Game of Thrones Episodes.
9. A list of all songs with "Love" in the title.
10. All information about Petyr Baelish from the Game of Thrones books
11. All the movies Leonardo Dicaprio has acted in
