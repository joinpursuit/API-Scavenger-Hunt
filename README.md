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

https://randomuser.me/api/?results=150&nat=us&inc=name

```
"results": [
    {
      "name": {
        "title": "Mr",
        "first": "Douglas",
        "last": "Taylor"
      }
    },
    {
      "name": {
        "title": "Mr",
        "first": "Ron",
        "last": "Ruiz"
      }
    },
```


- All the repos on Github with Pursuit their name

https://api.github.com/users/joinpursuit/repos

```
{
    "id": 341080793,
    "node_id": "MDEwOlJlcG9zaXRvcnkzNDEwODA3OTM=",
    "name": "-Pursuit-Core-Web-Promises-Fetch-Lab-v2",
    "full_name": "joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2",
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
    "html_url": "https://github.com/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2",
    "description": "Like https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab, but based off the awesome new template!",
    "fork": false,
    "url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2",
    "forks_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/forks",
    "keys_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/teams",
    "hooks_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/hooks",
    "issue_events_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues/events{/number}",
    "events_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/events",
    "assignees_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/assignees{/user}",
    "branches_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/branches{/branch}",
    "tags_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/tags",
    "blobs_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/languages",
    "stargazers_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/stargazers",
    "contributors_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/contributors",
    "subscribers_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/subscribers",
    "subscription_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/subscription",
    "commits_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/contents/{+path}",
    "compare_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/merges",
    "archive_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/downloads",
    "issues_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues{/number}",
    "pulls_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/labels{/name}",
    "releases_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/releases{/id}",
    "deployments_url": "https://api.github.com/repos/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2/deployments",
    "created_at": "2021-02-22T04:35:43Z",
    "updated_at": "2021-02-24T18:09:38Z",
    "pushed_at": "2021-02-24T18:24:25Z",
    "git_url": "git://github.com/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
    "ssh_url": "git@github.com:joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
    "clone_url": "https://github.com/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
    "svn_url": "https://github.com/joinpursuit/-Pursuit-Core-Web-Promises-Fetch-Lab-v2",
    "homepage": null,
    "size": 49,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 2,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 2,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main"
  },

```

- All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=joinpursuit/language:javascript

```
{
  "total_count": 126,
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
      "updated_at": "2021-03-04T14:56:47Z",
      "pushed_at": "2021-03-06T20:27:34Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-Web.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Web.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Web.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Web",
      "homepage": "",
      "size": 67204,
      "stargazers_count": 59,
      "watchers_count": 59,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 181,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 6,
      "license": null,
      "forks": 181,
      "open_issues": 6,
      "watchers": 59,
      "default_branch": "master",
      "score": 1.0
    },
 ```

- All the Swift repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=joinpursuit/language:swift

```
{
  "total_count": 281,
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
```

- A list of all Pokemon

https://pokeapi.co/api/v2/pokemon/

```
{
  "count": 1118,
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
```

- A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list

```
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
```
- A list of all Game of Thrones Episodes.

https://api.got.show/api/map/episodes

```
{
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
    },
```

- A list of all songs with "Love" in the title.

https://itunes.apple.com/search?term=love&entity=musicVideo

```
{
  "resultCount": 50,
  "results": [
    {
      "wrapperType": "track",
      "kind": "music-video",
      "artistId": 1419227,
      "collectionId": 780330041,
      "trackId": 780330736,
      "artistName": "Beyoncé",
      "collectionName": "BEYONCÉ",
      "trackName": "Drunk in Love (feat. Jay Z)",
      "collectionCensoredName": "BEYONCÉ",
      "trackCensoredName": "Drunk in Love (feat. Jay Z)",
      "artistViewUrl": "https://music.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/music-video/drunk-in-love-feat-jay-z/780330736?uo=4",
      "trackViewUrl": "https://music.apple.com/us/music-video/drunk-in-love-feat-jay-z/780330736?uo=4",
      "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video123/v4/74/a4/35/74a43578-d6e4-f66e-e6fb-c3fb68a10fc3/mzvf_168277499154167043.640x480.h264lc.U.p.m4v",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/50/aa/22/50aa22a9-3f97-eb49-19b9-f6929d00d650/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/50/aa/22/50aa22a9-3f97-eb49-19b9-f6929d00d650/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/50/aa/22/50aa22a9-3f97-eb49-19b9-f6929d00d650/source/100x100bb.jpg",
      "collectionPrice": 15.99,
      "trackPrice": 1.99,
      "releaseDate": "2013-12-13T08:00:00Z",
      "collectionExplicitness": "explicit",
      "trackExplicitness": "explicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 33,
      "trackNumber": 18,
      "trackTimeMillis": 381480,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop",
      "contentAdvisoryRating": "Explicit"
    },
```

- All information about Petyr Baelish from the Game of Thrones books

https://www.anapioficeandfire.com/api/characters/823

```
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
```

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
