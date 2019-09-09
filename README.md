# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
* endpoint= https://www.google.com
* status meaning= OK. The http request response was successful.
* What would my app do= The http request response was successful and the app will work.
1. 301
* endpoint=https://apple.com
* status meaning= Moved Permanently
* What would my app do= Will redirect to the new domain through another URL.
1. 400
* endpoint=
* status meaning= Bad Request.
* What would my app do=The app can't process the request due to an error.
would my app do=
1. 401
* endpoint=https://api.spotify.com/v1/search : if you don't have an account
* status meaning= Unauthorized.
* What would my app do= The user won't have access to the app because they don't have valid authorization to do so.
1. 403
* endpoint= https://githb.com
* status meaning=Forbidden.
* What would my app do=The server request will be valid but refuse the action due to the user being forbidden to have access.
1. 404=
* endpoint=http://google.com/404
* status meaning= Not Found.
* What would my app do= Nothing can be done since the requested resource can't be found.
1. 418
* endpoint= http://error418.net/
* status meaning= I'm a teapot.
* What would my app do= It will not return the actual Http server but the code is specifically told to return by teapots requested to brew coffee.
1. 500
* endpoint=
* status meaning= Internal Server Error.
* What would my app do= A message will display something unexpected was encountered and no more specific message was suitable.


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
endpoint= "https://catfact.ninja/fact"
data={
    "fact": "A cat will tremble or shiver when it is extreme pain.",
    "length": 55
}

```
1. A list of 150 random users in English.
```js
endpoint= "https://randomuser.me/api/"
data={
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "ms",
                "first": "afet",
                "last": "akyüz"
            },
            "location": {
                "street": "3498 bağdat cd",
                "city": "ordu",
                "state": "aksaray",
                "postcode": 55100,
                "coordinates": {
                    "latitude": "71.5394",
                    "longitude": "124.4120"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "afet.akyüz@example.com",
            "login": {
                "uuid": "11cc5dad-808a-41a0-a340-0220e34a265e",
                "username": "beautifulbird213",
                "password": "csfbr5yy",
                "salt": "bFOfMa4n",
                "md5": "180ce42b560977ca14ac7176dea266bb",
                "sha1": "2a6e403cd71e0a4406199d55c50404f88220c324",
                "sha256": "7f00f18b2767b6f3a82c98b4095b5e9e6f03f0306ca67f9eeff12a200410966f"
            },
            "dob": {
                "date": "1952-01-24T03:02:38Z",
                "age": 67
            },
            "registered": {
                "date": "2002-08-16T10:22:19Z",
                "age": 17
            },
            "phone": "(236)-143-9108",
            "cell": "(359)-386-8657",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/88.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
            },
            "nat": "TR"
        }
    ],
    "info": {
        "seed": "c85afaf7df2edebe",
        "results": 1,
        "page": 1,
        "version": "1.2"
    }
}
```
1. All the repos on Github with Pursuit their name
```js
endpoint= "https://api.github.com/search/repositories?q=pursuit-core&sort=stars&order=desc"
data={
    "total_count": 94,
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
            "score": 146.35126
        },


    ]
}
```
1. All the JavaScript repos on Github with Pursuit in their name
```js
endpoint= "https://api.github.com/search/repositories?q=pursuit-core+language:JavaScript&sort=stars&order=desc"
data={
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
            "score": 125.05446
        }

    ]
}
```
1. All the Swift repos on Github with Pursuit in their name
```js
endpoint= "https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc"
data={
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
            "score": 127.12968
        },
      ]
}






```
1. A list of all Pokemon
```js
endpoint= "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964"
data={
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5",
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
        }
    ]
}




```
1. A list of all items in Fortnite
```js
endpoint= "https://www.fortnitehut.com/free-api?rarity=epic"
data={
    "results": [
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
        },
        {
            "name": "Astro Assassin",
            "ourid": "nfYVwot"
        },
        {
            "name": "Jingu Bang",
            "ourid": "KOfIRGJ"
        },
        {
            "name": "Strong Guard",
            "ourid": "9DRFfMr"
        },
        {
            "name": "Spike",
            "ourid": "WtiRmyi"
        },
        {
            "name": "Rush",
            "ourid": "uZzduaZ"
        },
        {
            "name": "Juke",
            "ourid": "IGGq2CQ"
        },
        {
            "name": "Interceptor",
            "ourid": "fwY29oH"
        },
        {
            "name": "Gridiron",
            "ourid": "3cpEHQ8"
        },
        {
            "name": "End Zone",
            "ourid": "RJ6QP1z"
        },
        {
            "name": "Blitz",
            "ourid": "ozNcWdq"
        }
      ]
}
```
1. A list of all Game of Thrones Episodes.
```js
endpoint= https://api.got.show/api/show/episodes/
data=[
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
  ]

}
```
1. A list of all songs with "Love" in the title.
```js
endpoint= "https://itunes.apple.com/search?term=love"
data=
{
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true}
]
}
```
1. All information about Petyr Baelish from the Game of Thrones books

js
endpoint= "https://www.anapioficeandfire.com/api/characters/823"
data={
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
```js
endpoint= "https://itunes.apple.com/search?term=leonardo+dicaprio"
data=


{
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true}
]}
```
