# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
    * url = https://www.pursuit.org/
    * status meaning: `OK` The request has succeeded.
    * What to do: Use the expected received data.
1. 301
    * url = 
    * status meaning: `Moved Permanently` The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs
    * What to do: Replace the URI on the request by the new returned URI.
1. 400
    * url = 
    * status meaning: `Bad Request`The request could not be understood by the server due to malformed syntax. The client `SHOULD NOT` repeat the request without modifications.
    * What to do: Ask to double check the request, compare it to the previous and send it only if it's different.
1. 401
    * url = 
    * status meaning: `Unauthorized` The request requires user authentication.
    * What to do: Ask for authentification/login
1. 403
    * url = 
    * status meaning: `Forbidden` The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated.
    * What to do: Don't resent the request, prompt the user for unauthorized request
1. 404
    * url = http://example.com/store/view/product/foo
    * status meaning: `Not Found` The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.
    * What to do: Prompt the user to double check the request or retry later.
1. 418
    * url = 
    * status meaning: `I'm a teapot` It is not expected to be implemented by actual HTTP servers
    * What to do:
1. 500
    * url = 
    * status meaning: `Internal Server Error` The server encountered an unexpected condition which prevented it from fulfilling the request.
    * What to do: Repeat the request later


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
Link = "https://catfact.ninja/fact"
{
    "fact": "The average lifespan of an outdoor-only cat is about 3 to 5 years while an indoor-only cat can live 16 years or much longer.",
    "length": 124
}
```
1. A list of 150 random users in English.
```js
Link = "https://uinames.com/api/?amount=150&region=United States"
[
    {
        "name": "Craig",
        "surname": "Ryan",
        "gender": "male",
        "region": "United States"
    },
   .....
]
```
1. All the repos on Github with Pursuit their name
```js
Link = "https://api.github.com/search/repositories?q=user:joinpursuit"
{
    "total_count": 497,
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
            "score": 1
        },
        ......
    ]
}

```
1. All the JavaScript repos on Github with Pursuit in their name
```js
Link = "https://api.github.com/search/repositories?q=user:joinpursuit+language:js"
{
    "total_count": 68,
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
            "updated_at": "2019-09-02T21:40:13Z",
            "pushed_at": "2019-09-06T16:18:03Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-Web.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Web.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Web.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Web",
            "homepage": "",
            "size": 46655,
            "stargazers_count": 21,
            "watchers_count": 21,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 77,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 1,
            "license": null,
            "forks": 77,
            "open_issues": 1,
            "watchers": 21,
            "default_branch": "master",
            "score": 1
        },
        ......
    ]
}
```
1. All the Swift repos on Github with Pursuit in their name
```js
Link = "https://api.github.com/search/repositories?q=user:joinpursuit+language:swift"
{
    "total_count": 230,
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
            "updated_at": "2019-09-06T21:36:06Z",
            "pushed_at": "2019-09-06T21:36:04Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS",
            "homepage": "",
            "size": 97895,
            "stargazers_count": 31,
            "watchers_count": 31,
            "language": "Swift",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 76,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 76,
            "open_issues": 0,
            "watchers": 31,
            "default_branch": "master",
            "score": 1
        },
        ......
    ]
}
```
1. A list of all Pokemon
```js
Link = "https://pokeapi.co/api/v2/pokemon/"
{
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
        ....
    ]
}

```
1. A list of all items in Fortnite
```js
Link = "https://fortnite-public-api.theapinetwork.com/prod09/store/get"
{
    "vbucks": "https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png",
    "date_layout": "day-month-year",
    "date": "08-09-19",
    "lastupdate": 0,
    "language": "en",
    "rows": 12,
    "items": [
        {
            "itemid": "a7fb65f-9eb9942-3348ab3-c7b5aa8",
            "name": "Evil Eye",
            "cost": "1200",
            "featured": 1,
            "refundable": 1,
            "lastupdate": 1567900863,
            "item": {
                "name": "Evil Eye",
                "description": null,
                "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/653416341a01f8cf0c5c6e836fcc2a47.png",
                "images": {
                    "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/653416341a01f8cf0c5c6e836fcc2a47.png",
                    "background": "https://fortnite-public-files.theapinetwork.com/image/a7fb65f-9eb9942-3348ab3-c7b5aa8.png",
                    "information": "https://fortnite-public-files.theapinetwork.com/image/a7fb65f-9eb9942-3348ab3-c7b5aa8/item.png",
                    "featured": {
                        "transparent": "https://fortnite-public-files.theapinetwork.com/featured/a7fb65f-9eb9942-3348ab3-c7b5aa8.png"
                    }
                },
                "captial": "pickaxe",
                "type": "pickaxe",
                "rarity": "epic",
                "obtained_type": "vbucks"
            },
            "ratings": {
                "avgStars": 4.06,
                "totalPoints": 2320,
                "numberVotes": 571
            }
        },
        ....
    ]
}
```
1. A list of all Game of Thrones Episodes.
```js
Link = "https://www.episodate.com/api/show-details?q=game-of-thrones"
{
"tvShow": {
"id": 23455,
"name": "Game of Thrones",
"permalink": "game-of-thrones",
"url": "https://www.episodate.com/tv-show/game-of-thrones",
"description": "Nine noble families fight for control of the mythical land of Westeros. Political and sexual intrigue is pervasive. Robert Baratheon, King of Westeros, asks his old friend Eddard, Lord Stark, to serve as Hand of the King, or highest official. Secretly warned that the previous Hand was assassinated, Eddard accepts in order to investigate further. Meanwhile the Queen's family, the Lannisters, may be hatching a plot to take power. Across the sea, the last members of the previous and deposed ruling family, the Targaryens, are also scheming to regain the throne. The friction between the houses Stark, Lannister, Baratheon and Targaryen and with the remaining great houses Greyjoy, Tully, Arryn,Tyrell and Martell leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war and political confusion, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
"description_source": "http://www.imdb.com/title/tt0944947/plotsummary",
"start_date": "2011-04-17",
"end_date": null,
"country": "US",
"status": "Ended",
"runtime": 60,
"network": "HBO",
"youtube_link": "MZUG2Miya-0",
"image_path": "https://static.episodate.com/images/tv-show/full/23455.jpg",
"image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg",
"rating": "9.5188",
"rating_count": "692",
"countdown": null,
"genres": [
"Drama",
"Adventure",
"Fantasy"
],
"pictures": [
"https://static.episodate.com/images/episode/23455-225.png",
"https://static.episodate.com/images/episode/23455-861.png",
"https://static.episodate.com/images/episode/23455-218.png",
"https://static.episodate.com/images/episode/23455-432.png",
"https://static.episodate.com/images/episode/23455-577.png",
"https://static.episodate.com/images/episode/23455-491.png",
"https://static.episodate.com/images/episode/23455-167.png"
],
"episodes": [
{
"season": 1,
"episode": 1,
"name": "Winter is Coming",
"air_date": "2011-04-18 01:00:00"
},
{
"season": 1,
"episode": 2,
"name": "The Kingsroad",
"air_date": "2011-04-25 01:00:00"
},
......
]
}
```
1. A list of all songs with "Love" in the title.
```js
Link = ""

```
1. All information about Petyr Baelish from the Game of Thrones books
```js
Link = ""

```
1. All the movies Leonardo Dicaprio has acted in
```js
Link = ""

```