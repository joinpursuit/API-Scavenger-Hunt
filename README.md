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

<!-- this is json below -->

```json
{
  "fact": "The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\".",
  "length": 89
}
```

---

Here are all the APIs to find!

- A list of 150 random users in English.
https://randomuser.me/api/?results=150
```json
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Malik",
        "last": "Miller"
      },
      "location": {
        "street": {
          "number": 4994,
          "name": "St. Lawrence Ave"
        },
        "city": "Cartwright",
        "state": "Nova Scotia",
        "country": "Canada",
        "postcode": "V3Y 4G1",
        "coordinates": {
          "latitude": "-59.1450",
          "longitude": "-5.9225"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "malik.miller@example.com",
      "login": {
        "uuid": "9a27d273-e2ea-450d-a612-99538457568c",
        "username": "bigdog635",
        "password": "hamlet",
        "salt": "6k6Ptb3P",
        "md5": "5b1a25c4a6ae7b897b2987b779bc3e73",
        "sha1": "eaed761ac7704b3a420fc4d828c2b61ca7f8a424",
        "sha256": "83867f3f479b9b407efe2f8ab402e12fce3123f394d4b72f2abf920dccf3f658"
      },
      "dob": {
        "date": "1976-07-13T07:15:59.083Z",
        "age": 45
      },
      "registered": {
        "date": "2008-01-12T01:40:23.687Z",
        "age": 13
      },
      "phone": "523-434-5734",
      "cell": "919-965-8093",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
      },
      "nat": "CA"
    }
  ],
  "info": {
    "seed": "6c57735064488634",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
``` 

- All the repos on Github with Pursuit their name
https://api.github.com/users/joinpursuit/repos
```json
{
    "id": 213441105,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMTM0NDExMDU=",
    "name": "21-web-game",
    "full_name": "joinpursuit/21-web-game",
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
    "html_url": "https://github.com/joinpursuit/21-web-game",
    "description": "Assignment for fellows to build a simple 21 a.k.a Blackjack game in the web with HTML/CSS & JS",
    "fork": false,
    "url": "https://api.github.com/repos/joinpursuit/21-web-game",
    "forks_url": "https://api.github.com/repos/joinpursuit/21-web-game/forks",
    "keys_url": "https://api.github.com/repos/joinpursuit/21-web-game/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/joinpursuit/21-web-game/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/joinpursuit/21-web-game/teams",
    "hooks_url": "https://api.github.com/repos/joinpursuit/21-web-game/hooks",
    "issue_events_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues/events{/number}",
    "events_url": "https://api.github.com/repos/joinpursuit/21-web-game/events",
    "assignees_url": "https://api.github.com/repos/joinpursuit/21-web-game/assignees{/user}",
    "branches_url": "https://api.github.com/repos/joinpursuit/21-web-game/branches{/branch}",
    "tags_url": "https://api.github.com/repos/joinpursuit/21-web-game/tags",
    "blobs_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/joinpursuit/21-web-game/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/joinpursuit/21-web-game/languages",
    "stargazers_url": "https://api.github.com/repos/joinpursuit/21-web-game/stargazers",
    "contributors_url": "https://api.github.com/repos/joinpursuit/21-web-game/contributors",
    "subscribers_url": "https://api.github.com/repos/joinpursuit/21-web-game/subscribers",
    "subscription_url": "https://api.github.com/repos/joinpursuit/21-web-game/subscription",
    "commits_url": "https://api.github.com/repos/joinpursuit/21-web-game/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/joinpursuit/21-web-game/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/joinpursuit/21-web-game/contents/{+path}",
    "compare_url": "https://api.github.com/repos/joinpursuit/21-web-game/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/joinpursuit/21-web-game/merges",
    "archive_url": "https://api.github.com/repos/joinpursuit/21-web-game/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/joinpursuit/21-web-game/downloads",
    "issues_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues{/number}",
    "pulls_url": "https://api.github.com/repos/joinpursuit/21-web-game/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/joinpursuit/21-web-game/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/joinpursuit/21-web-game/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/joinpursuit/21-web-game/labels{/name}",
    "releases_url": "https://api.github.com/repos/joinpursuit/21-web-game/releases{/id}",
    "deployments_url": "https://api.github.com/repos/joinpursuit/21-web-game/deployments",
    "created_at": "2019-10-07T17:08:37Z",
    "updated_at": "2019-12-03T20:41:49Z",
    "pushed_at": "2020-07-30T17:11:45Z",
    "git_url": "git://github.com/joinpursuit/21-web-game.git",
    "ssh_url": "git@github.com:joinpursuit/21-web-game.git",
    "clone_url": "https://github.com/joinpursuit/21-web-game.git",
    "svn_url": "https://github.com/joinpursuit/21-web-game",
    "homepage": null,
    "size": 71836,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 39,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 35,
    "license": null,
    "forks": 39,
    "open_issues": 35,
    "watchers": 0,
    "default_branch": "master"
  },
```
- All the JavaScript repos on Github with Pursuit in their name
https://api.github.com/users/joinpursuit/repos?language=Javascript&language=Javascript
```json
{
    "id": 213441105,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMTM0NDExMDU=",
    "name": "21-web-game",
    "full_name": "joinpursuit/21-web-game",
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
    "html_url": "https://github.com/joinpursuit/21-web-game",
    "description": "Assignment for fellows to build a simple 21 a.k.a Blackjack game in the web with HTML/CSS & JS",
    "fork": false,
    "url": "https://api.github.com/repos/joinpursuit/21-web-game",
    "forks_url": "https://api.github.com/repos/joinpursuit/21-web-game/forks",
    "keys_url": "https://api.github.com/repos/joinpursuit/21-web-game/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/joinpursuit/21-web-game/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/joinpursuit/21-web-game/teams",
    "hooks_url": "https://api.github.com/repos/joinpursuit/21-web-game/hooks",
    "issue_events_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues/events{/number}",
    "events_url": "https://api.github.com/repos/joinpursuit/21-web-game/events",
    "assignees_url": "https://api.github.com/repos/joinpursuit/21-web-game/assignees{/user}",
    "branches_url": "https://api.github.com/repos/joinpursuit/21-web-game/branches{/branch}",
    "tags_url": "https://api.github.com/repos/joinpursuit/21-web-game/tags",
    "blobs_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/joinpursuit/21-web-game/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/joinpursuit/21-web-game/languages",
    "stargazers_url": "https://api.github.com/repos/joinpursuit/21-web-game/stargazers",
    "contributors_url": "https://api.github.com/repos/joinpursuit/21-web-game/contributors",
    "subscribers_url": "https://api.github.com/repos/joinpursuit/21-web-game/subscribers",
    "subscription_url": "https://api.github.com/repos/joinpursuit/21-web-game/subscription",
    "commits_url": "https://api.github.com/repos/joinpursuit/21-web-game/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/joinpursuit/21-web-game/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/joinpursuit/21-web-game/contents/{+path}",
    "compare_url": "https://api.github.com/repos/joinpursuit/21-web-game/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/joinpursuit/21-web-game/merges",
    "archive_url": "https://api.github.com/repos/joinpursuit/21-web-game/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/joinpursuit/21-web-game/downloads",
    "issues_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues{/number}",
    "pulls_url": "https://api.github.com/repos/joinpursuit/21-web-game/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/joinpursuit/21-web-game/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/joinpursuit/21-web-game/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/joinpursuit/21-web-game/labels{/name}",
    "releases_url": "https://api.github.com/repos/joinpursuit/21-web-game/releases{/id}",
    "deployments_url": "https://api.github.com/repos/joinpursuit/21-web-game/deployments",
    "created_at": "2019-10-07T17:08:37Z",
    "updated_at": "2019-12-03T20:41:49Z",
    "pushed_at": "2020-07-30T17:11:45Z",
    "git_url": "git://github.com/joinpursuit/21-web-game.git",
    "ssh_url": "git@github.com:joinpursuit/21-web-game.git",
    "clone_url": "https://github.com/joinpursuit/21-web-game.git",
    "svn_url": "https://github.com/joinpursuit/21-web-game",
    "homepage": null,
    "size": 71836,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 39,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 35,
    "license": null,
    "forks": 39,
    "open_issues": 35,
    "watchers": 0,
    "default_branch": "master"
  },
```
- All the Swift repos on Github with Pursuit in their name
https://api.github.com/users/joinpursuit/repos?language=Swift&language=Swift
```json
{
    "id": 213441105,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMTM0NDExMDU=",
    "name": "21-web-game",
    "full_name": "joinpursuit/21-web-game",
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
    "html_url": "https://github.com/joinpursuit/21-web-game",
    "description": "Assignment for fellows to build a simple 21 a.k.a Blackjack game in the web with HTML/CSS & JS",
    "fork": false,
    "url": "https://api.github.com/repos/joinpursuit/21-web-game",
    "forks_url": "https://api.github.com/repos/joinpursuit/21-web-game/forks",
    "keys_url": "https://api.github.com/repos/joinpursuit/21-web-game/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/joinpursuit/21-web-game/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/joinpursuit/21-web-game/teams",
    "hooks_url": "https://api.github.com/repos/joinpursuit/21-web-game/hooks",
    "issue_events_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues/events{/number}",
    "events_url": "https://api.github.com/repos/joinpursuit/21-web-game/events",
    "assignees_url": "https://api.github.com/repos/joinpursuit/21-web-game/assignees{/user}",
    "branches_url": "https://api.github.com/repos/joinpursuit/21-web-game/branches{/branch}",
    "tags_url": "https://api.github.com/repos/joinpursuit/21-web-game/tags",
    "blobs_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/joinpursuit/21-web-game/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/joinpursuit/21-web-game/languages",
    "stargazers_url": "https://api.github.com/repos/joinpursuit/21-web-game/stargazers",
    "contributors_url": "https://api.github.com/repos/joinpursuit/21-web-game/contributors",
    "subscribers_url": "https://api.github.com/repos/joinpursuit/21-web-game/subscribers",
    "subscription_url": "https://api.github.com/repos/joinpursuit/21-web-game/subscription",
    "commits_url": "https://api.github.com/repos/joinpursuit/21-web-game/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/joinpursuit/21-web-game/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/joinpursuit/21-web-game/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/joinpursuit/21-web-game/contents/{+path}",
    "compare_url": "https://api.github.com/repos/joinpursuit/21-web-game/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/joinpursuit/21-web-game/merges",
    "archive_url": "https://api.github.com/repos/joinpursuit/21-web-game/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/joinpursuit/21-web-game/downloads",
    "issues_url": "https://api.github.com/repos/joinpursuit/21-web-game/issues{/number}",
    "pulls_url": "https://api.github.com/repos/joinpursuit/21-web-game/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/joinpursuit/21-web-game/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/joinpursuit/21-web-game/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/joinpursuit/21-web-game/labels{/name}",
    "releases_url": "https://api.github.com/repos/joinpursuit/21-web-game/releases{/id}",
    "deployments_url": "https://api.github.com/repos/joinpursuit/21-web-game/deployments",
    "created_at": "2019-10-07T17:08:37Z",
    "updated_at": "2019-12-03T20:41:49Z",
    "pushed_at": "2020-07-30T17:11:45Z",
    "git_url": "git://github.com/joinpursuit/21-web-game.git",
    "ssh_url": "git@github.com:joinpursuit/21-web-game.git",
    "clone_url": "https://github.com/joinpursuit/21-web-game.git",
    "svn_url": "https://github.com/joinpursuit/21-web-game",
    "homepage": null,
    "size": 71836,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 39,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 35,
    "license": null,
    "forks": 39,
    "open_issues": 35,
    "watchers": 0,
    "default_branch": "master"
  }
```
- A list of all Pokemon
https://pokeapi.co/api/v2/pokemon-species/
```json
 {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
  }
```
- A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/store/get
```json
 {
      "itemId": "9db70e76-9aae-42cf-81c3-3368876998f7",
      "lastUpdate": 1615785001,
      "store": {
        "isFeatured": false,
        "isRefundable": true,
        "cost": 200,
        "occurrences": 0,
        "isNew": false
      },
      "item": {
        "name": "Toasty",
        "description": "Keep it mallow.",
        "type": "emote",
        "rarity": "uncommon",
        "series": null,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_roastingmarshmallow/icon.png",
          "featured": null,
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_roastingmarshmallow/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_roastingmarshmallow/icon.png"
        },
        "backpack": {},
        "obtained_type": "none",
        "ratings": {
          "avgStars": 3.78,
          "totalPoints": 204,
          "numberVotes": 54
        },
        "costmeticId": "eid_roastingmarshmallow"
      }
    }
```
- A list of all Game of Thrones Episodes.
```json
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
}
```
- A list of all songs with "Love" in the title.
- All information about Petyr Baelish from the Game of Thrones books
- All the movies Leonardo Dicaprio has acted in

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
