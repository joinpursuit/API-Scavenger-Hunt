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

https://randomuser.me/api/

``` json

    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Rose",
        "last": "Moraes"
      },
      "location": {
        "street": {
          "number": 2919,
          "name": "Rua Dezenove de Outubro"
        },
        "city": "Jaraguá do Sul",
        "state": "Roraima",
        "country": "Brazil",
        "postcode": 15218,
        "coordinates": {
          "latitude": "88.2780",
          "longitude": "63.2579"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "rose.moraes@example.com",
      "login": {
        "uuid": "85680b65-d98f-47ec-b07c-82c9b1719438",
        "username": "purplepeacock794",
        "password": "global",
        "salt": "n3RjkJiX",
        "md5": "d67f259660187ee05904c5dd7f15c782",
        "sha1": "a2e2ad9a5b990b8f6e56d7e04ff80d65c153c3a1",
        "sha256": "a5e7e343d1c58575f8c5c21690129987dcb2d5faf9f042d7287f2a936678b815"
      },
      "dob": {
        "date": "1984-10-17T17:38:14.331Z",
        "age": 37
      },
      "registered": {
        "date": "2012-05-12T08:43:06.586Z",
        "age": 9
      },
      "phone": "(35) 0494-5822",
      "cell": "(74) 5816-7085",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/25.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
      },
      "nat": "BR"
    }
  ],
  "info": {
    "seed": "5a9de2b242499b16",
    "results": 150,
    "page": 1,
    "version": "1.3"
  }

```

- All the repos on Github with Pursuit their name

https://api.github.com/orgs/joinpursuit/repos

```json
  {
    "id": 69289081,
    "node_id": "MDEwOlJlcG9zaXRvcnk2OTI4OTA4MQ==",
    "name": "AC3.2-Tableviews_Part_3",
    "full_name": "joinpursuit/AC3.2-Tableviews_Part_3",
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
    "html_url": "https://github.com/joinpursuit/AC3.2-Tableviews_Part_3",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3",
    "forks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/forks",
    "keys_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/teams",
    "hooks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/hooks",
    "issue_events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/issues/events{/number}",
    "events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/events",
    "assignees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/assignees{/user}",
    "branches_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/branches{/branch}",
    "tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/tags",
    "blobs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/languages",
    "stargazers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/stargazers",
    "contributors_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/contributors",
    "subscribers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/subscribers",
    "subscription_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/subscription",
    "commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/contents/{+path}",
    "compare_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/merges",
    "archive_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/downloads",
    "issues_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/issues{/number}",
    "pulls_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/labels{/name}",
    "releases_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/releases{/id}",
    "deployments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Tableviews_Part_3/deployments",
    "created_at": "2016-09-26T20:16:12Z",
    "updated_at": "2017-07-25T17:23:08Z",
    "pushed_at": "2017-07-27T21:28:15Z",
    "git_url": "git://github.com/joinpursuit/AC3.2-Tableviews_Part_3.git",
    "ssh_url": "git@github.com:joinpursuit/AC3.2-Tableviews_Part_3.git",
    "clone_url": "https://github.com/joinpursuit/AC3.2-Tableviews_Part_3.git",
    "svn_url": "https://github.com/joinpursuit/AC3.2-Tableviews_Part_3",
    "homepage": null,
    "size": 5831,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Swift",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 23,
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
```


- All the JavaScript repos on Github with Pursuit in their name
- All the Swift repos on Github with Pursuit in their name
- A list of all Pokemon

https://pokeapi.co/api/v2/pokemon/?limit=1118
```json

    {
      "name": "eternatus-eternamax",
      "url": "https://pokeapi.co/api/v2/pokemon/10217/"
    },

```
- A list of all items in Fortnite

https://fortnite-api.theapinetwork.com/items/list
```json
{
      "itemId": "c4ce9db-b8a72a1-a3a8d78-ea263bb",
      "lastUpdate": 1614201127,
      "item": {
        "name": "Dance Moves",
        "description": "Express yourself on the battlefield.",
        "type": "emote",
        "rarity": "common",
        "series": null,
        "cost": 0,
        "upcoming": false,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_dancemoves/icon.png",
          "featured": null,
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_dancemoves/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_dancemoves/icon.png"
        },
        "backpack": {},
        "obtained": "",
        "obtained_type": "none",
        "ratings": {
          "avgStars": 4.02,
          "totalPoints": 2741,
          "numberVotes": 682
        },
        "costmeticId": "EID_DanceMoves",
        "obtainedValue": "none",
        "obtainedFromBattlepass": "none"
      }
    },
```

- A list of all Game of Thrones Episodes.

https://api.got.show/api/show/episodes
```
  {
    "written_by": [
      "David Benioff",
      "D.B. Weiss"
    ],
    "characters": [
      "Rhaegar Targaryen",
      "High Septon (Robert's Rebellion)"
    ],
    "deaths": [
      "Petyr Baelish",
      "Captured wight",
      "Black Brothers",
      "Wildlings"
    ],
    "places": [
      "In King's Landing",
      "At Winterfell",
      "In the Narrow Sea",
      "At the Wall",
      "First",
      "Deaths",
      "Cast",
      "Cast notes",
      "General",
      "In King's Landing",
      "At Winterfell",
      "In the Narrow Sea",
      "Rhaegar/Lyanna, Jon/Daenerys",
      "Jon Snow's real name",
      "At the Wall"
    ],
    "_id": "5cc074bf04e71a0010b85a5c",
    "title": "The Dragon and the Wolf",
    "season": 7,
    "episode": 7,
    "runtime": 80,
    "directed_by": "Jeremy Podeswa",
    "createdAt": "2019-04-24T14:37:51.793Z",
    "updatedAt": "2019-04-24T14:37:51.793Z",
    "__v": 0
  }
```

- A list of all songs with "Love" in the title.
- All information about Petyr Baelish from the Game of Thrones books
- All the movies Leonardo Dicaprio has acted in

# Part Two

For this exercise use the Todos API.

- Docs: https://github.com/alejo4373/Todos-API  //Read these docs
- Root Endpoint: https://alejos-todos-api.herokuapp.com  //Make requests to this URL, and change it however we need to based on what the documentation says

Try out all requests you can think of in this API, the docs are a good starting point.


1. Create an `answers.json` file in the root of this repo. Copy the json below to your file.
1. For each request add a new object to the `requests` array in your json file, in the same format seen below. Try to keep your json syntax valid.
1. Find **all the 9 possible** status codes this API returns and add them to `statusCodesFound` in your json file. You will have to use different HTTP methods, as well as [query strings](https://en.wikipedia.org/wiki/Query_string)

```json
{
  "requests": [
    {  // this is the template
      "method": <METHOD>,
      "endpoint": /api/something,
      "description": EXPLAIN WHAT THE REQUEST DOES IN YOUR OWN WORDS,
      "responseStatusCode": ###,
      "statusCodeMeaning": WHAT DOES THIS STATUS CODE MEAN
    },
    {  // this is the first object
      "method": "GET",
      "endpoint": "/api/todos",
      "description": "Returns a list of all todos",
      "responseStatusCode": 200,  // this is the status code we add to "statusCodesFound"
      "statusCodeMeaning": "The request was successful"
    },
      {
      "method": "GET",
      "endpoint": "/admin",
      "description": "Attempts to access an endpoint available only to admins",
      "responseStatusCode": 401,
      "statusCodeMeaning": "Unauthorized  -  Authentication is needed to get the requested response. This is similar to a 403, but is different in that authentication is possible"
    },
    {
      "method": "POST",
      "endpoint": "/api/todos",
      "description": "Attempts to POST a todo without expressing anything else (the values that would be posted within the todo object)",
      "responseStatusCode": 400,
      "statusCodeMeaning": "Bad Request  -  This response means that the server could not understand the request due to invalid syntax"
    },
    
  ],
  "statusCodesFound": [200, 401, 400, ...]
}
```

### Hints

- It went just 🆗    //complete - 200
- Users cannot have `fullname`
- There's one hint "hidden in plain sight" in the documentation of the API.   //complete - 401 /admin
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
