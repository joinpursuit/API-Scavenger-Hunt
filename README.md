# API Scavenger Hunt

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON. Once you find the API's site, read the docs and use `Insomnia` or `curl` to find the URL that gives you the JSON response you're looking for.

Paste the URL and a snippet of the JSON below. You will edit this very document as part of the assignment.

Put the json between two sets of three backticks. If you want, put the word json right after the first set of three backticks.

It might help you to look at the below section in the non-rendered README view.

Googling the category + API will generally take you to where you need. e.g. "cat fact api".

Example:

- A random cat fact

https://catfact.ninja/fact

```
{
  "fact": "The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\".",
  "length": 89
}
```

---

Here are all the APIs to find!
- A list of 150 random users in English.
https://randomuser.me/api/?nat=us&results=150
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Alicia",
        "last": "Cook"
      },
      "location": {
        "street": {
          "number": 4593,
          "name": "Woodland St"
        },
        "city": "Cedar Hill",
        "state": "Georgia",
        "country": "United States",
        "postcode": 60008,
        "coordinates": {
          "latitude": "-69.3936",
          "longitude": "127.0729"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "alicia.cook@example.com",
      "login": {
        "uuid": "02e87f23-8da9-47f5-a6e6-9dcc466212db",
        "username": "happymeercat845",
        "password": "trustme",
        "salt": "YOME8wxz",
        "md5": "1aef2845be00fc4758f5df4e803b8bad",
        "sha1": "c2b3dc8fcf753f6ca976cc2be8d28be023f5c762",
        "sha256": "fcad3418dc5f5400b0c5db6f6257bf2b78efed31a62825a91bf1e1cc002dbfe8"
      },
      "dob": {
        "date": "1988-02-02T01:15:43.807Z",
        "age": 33
      },
      "registered": {
        "date": "2015-12-18T03:00:45.449Z",
        "age": 6
      },
      "phone": "(441)-118-7640",
      "cell": "(653)-555-1708",
      "id": {
        "name": "SSN",
        "value": "582-68-6830"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "bd3009b4e99bba15",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}

- All the repos on Github with Pursuit their name
https://api.github.com/search/repositories?q=pursuit
{
  "total_count": 2085,
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
        "avatar_url": "https://avatars.githubusercontent.com/u/6556677?v=4",
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
      "updated_at": "2021-03-05T02:20:12Z",
      "pushed_at": "2021-01-21T00:30:16Z",
      "git_url": "git://github.com/purescript/pursuit.git",
      "ssh_url": "git@github.com:purescript/pursuit.git",
      "clone_url": "https://github.com/purescript/pursuit.git",
      "svn_url": "https://github.com/purescript/pursuit",
      "homepage": "https://pursuit.purescript.org/",
      "size": 1281,
      "stargazers_count": 137,
      "watchers_count": 137,
      "language": "Haskell",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 48,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 69,
      "license": {
        "key": "other",
        "name": "Other",
        "spdx_id": "NOASSERTION",
        "url": null,
        "node_id": "MDc6TGljZW5zZTA="
      },
      "forks": 48,
      "open_issues": 69,
      "watchers": 137,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 296104714,
      "node_id": "MDEwOlJlcG9zaXRvcnkyOTYxMDQ3MTQ=",
      "name": "ThreatPursuit-VM",
      "full_name": "fireeye/ThreatPursuit-VM",
      "private": false,
      "owner": {
        "login": "fireeye",
        "id": 4984788,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ5ODQ3ODg=",
        "avatar_url": "https://avatars.githubusercontent.com/u/4984788?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/fireeye",
        "html_url": "https://github.com/fireeye",
        "followers_url": "https://api.github.com/users/fireeye/followers",
        "following_url": "https://api.github.com/users/fireeye/following{/other_user}",
        "gists_url": "https://api.github.com/users/fireeye/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/fireeye/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/fireeye/subscriptions",
        "organizations_url": "https://api.github.com/users/fireeye/orgs",
        "repos_url": "https://api.github.com/users/fireeye/repos",
        "events_url": "https://api.github.com/users/fireeye/events{/privacy}",
        "received_events_url": "https://api.github.com/users/fireeye/received_events",
        "type": "Organization",
        "site_admin": false
      },

- All the JavaScript repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit+language:javascript
{
  "total_count": 106,
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
        "avatar_url": "https://avatars.githubusercontent.com/u/328179?v=4",
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
      "merges_url": "https://api.github.com/repos/albertosantini/argo/merges",
      "archive_url": "https://api.github.com/repos/albertosantini/argo/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/albertosantini/argo/downloads",
      "issues_url": "https://api.github.com/repos/albertosantini/argo/issues{/number}",
      "pulls_url": "https://api.github.com/repos/albertosantini/argo/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/albertosantini/argo/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/albertosantini/argo/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/albertosantini/argo/labels{/name}",
      "releases_url": "https://api.github.com/repos/albertosantini/argo/releases{/id}",
      "deployments_url": "https://api.github.com/repos/albertosantini/argo/deployments",
      "created_at": "2015-01-25T19:08:54Z",
      "updated_at": "2021-02-14T22:47:15Z",
      "pushed_at": "2021-02-05T07:52:24Z",
      "git_url": "git://github.com/albertosantini/argo.git",
      "ssh_url": "git@github.com:albertosantini/argo.git",
      "clone_url": "https://github.com/albertosantini/argo.git",
      "svn_url": "https://github.com/albertosantini/argo",
      "homepage": "https://argo.js.org",
      "size": 5195,
      "stargazers_count": 259,
      "watchers_count": 259,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": true,
      "forks_count": 101,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 101,
      "open_issues": 0,
      "watchers": 259,
      "default_branch": "master",
      "score": 1.0
    },

- All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit+language:swift
{
  "total_count": 38,
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
        "avatar_url": "https://avatars.githubusercontent.com/u/5825944?v=4",
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
      "updated_at": "2021-02-28T07:43:05Z",
      "pushed_at": "2020-07-23T14:56:20Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS",
      "homepage": "",
      "size": 140354,
      "stargazers_count": 47,
      "watchers_count": 47,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 110,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": null,
      "forks": 110,
      "open_issues": 1,
      "watchers": 47,
      "default_branch": "master",
      "score": 1.0
    },

- A list of all Pokemon
https://pokeapi.co/api/v2/pokemon

  "count": 1118,
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

- A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/items/list
{
  "lastUpdate": 0,
  "lanuage": "en",
  "data": [
    {
      "itemId": "5bac8575-992e-41db-b23c-8d5646d8f586",
      "lastUpdate": 1614475984,
      "item": {
        "name": "Silver Surfer (Bundle)",
        "description": null,
        "type": "bundle",
        "rarity": "epic",
        "series": "marvel",
        "cost": 2200,
        "upcoming": false,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7/icon.png",
          "featured": null,
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7/icon.png"
        },
        "backpack": {},
        "obtained": "2200",
        "obtained_type": "vbucks",
        "ratings": {
          "avgStars": 3.71,
          "totalPoints": 89,
          "numberVotes": 24
        },
        "costmeticId": "5bac8575-992e-41db-b23c-8d5646d8f586_khqd0lc7",
        "obtainedValue": "none",
        "obtainedFromBattlepass": "none"
      }
    },

- A list of all Game of Thrones Episodes.
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

- A list of all songs with "Love" in the title.
https://itunes.apple.com/search?term="love"&attribute=songTerm
{
  "resultCount": 50,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 368183298,
      "collectionId": 1440881047,
      "trackId": 1440881708,
      "artistName": "Kendrick Lamar",
      "collectionName": "DAMN.",
      "trackName": "LOVE. (FEAT. ZACARI.)",
      "collectionCensoredName": "DAMN.",
      "trackCensoredName": "LOVE. (FEAT. ZACARI.)",
      "artistViewUrl": "https://music.apple.com/us/artist/kendrick-lamar/368183298?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/28/40/40/28404037-5570-0709-5601-7eff314e45eb/mzaf_6754627230951906996.plus.aac.p.m4a",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/84/06/77/840677aa-6372-eeb0-afc7-5fe3a4586056/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/84/06/77/840677aa-6372-eeb0-afc7-5fe3a4586056/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/84/06/77/840677aa-6372-eeb0-afc7-5fe3a4586056/source/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "2017-04-14T12:00:00Z",
      "collectionExplicitness": "explicit",
      "trackExplicitness": "explicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 14,
      "trackNumber": 10,
      "trackTimeMillis": 213400,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Hip-Hop/Rap",
      "contentAdvisoryRating": "Explicit",
      "isStreamable": true
    },

- All information about Petyr Baelish from the Game of Thrones books
https://www.anapioficeandfire.com/api/characters/823
{
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


- All the movies Leonardo Dicaprio has acted in
https://api.themoviedb.org/3/search/person?query=leonardodicaprio
{
  "status_code": 7,
  "status_message": "Invalid API key: You must be granted a valid key.",
  "success": false
}


# Part Two

For this exercise use the Todos API.

- Docs: https://github.com/alejo4373/Todos-API
- Root Endpoint: https://alejos-todos-api.herokuapp.com

Try out all requests you can think of in this API, the docs are a good starting point.


1. Create an `answers.json` file in the root of this repo. Copy the json below to your file.
1. For each request add a new object to the `requests` array in your json file, in the same format seen below. Try to keep your json syntax valid.
1. Find **all the 9 possible** status codes this API returns and add them to `statusCodesFound` in your json file. You will have to use different HTTP methods, as well as [query strings](https://en.wikipedia.org/wiki/Query_string)

```json
{
  "requests": [
    {
      "method": <METHOD>,
      "endpoint": /api/something,
      "description": EXPLAIN WHAT THE REQUEST DOES IN YOUR OWN WORDS,
      "responseStatusCode": ###,
      "statusCodeMeaning": WHAT DOES THIS STATUS CODE MEAN
    },
    {
      "method": "GET",
      "endpoint": "/api/todos",
      "description": "Returns a list of all todos",
      "responseStatusCode": 200,
      "statusCodeMeaning": "The request was successful"
    }
  ],
  "statusCodesFound": [200, ...]
}
```

### Hints

- It went just 🆗
- Users cannot have `fullname`
- There's one hint "hidden in plain sight" in the documentation of the API.
- Bad, bad, bad request!
- What does God got to do?
- Can't remove it twice?!?
- There's a lot of methods to try.
- How does this API handle duplicates?
- `200` is different from `201`?

### Bonuses

1. Take a look at the upcoming lessons to learn how to make make network requests with JavaScript (hint: `fetch`).
   Since you previously had build a simple Todos App with HTML and now you know how to manipulate
   the DOM, add some JS to try to connect your Todos app to this API so that todos you enter in the page
   are saved to the API. Marking a todo as complete or uncompleted should work.
2. Find the easter egg hidden in the API. You'll know it when you see a gif appear.

# References

- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
- https://http.cat
