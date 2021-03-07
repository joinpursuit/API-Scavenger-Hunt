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
https://randomuser.me/api/?results=150&inc=name

```
{
   {
      "name": {
        "title": "Ms",
        "first": "Lucy",
        "last": "Little"
      }
    },

}



- All the repos on Github with Pursuit their name
https://api.github.com/orgs/joinpursuit/repos

   {
    "id": 9226862,
    "node_id": "MDEwOlJlcG9zaXRvcnk5MjI2ODYy",
    "name": "ioscourse-1",
    "full_name": "joinpursuit/ioscourse-1",
    "private": false,
    "owner":


- All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=pursuit/language:javascript

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




- All the Swift repos on Github with Pursuit in their name

- A list of all Pokemon
https://pokeapi.co/api/v2/pokemon?limit=1118

 {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
  }

- A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/store/get

      "itemId": "2fad344-834e456-dcf643d-91f9712",
      "lastUpdate": 1615102801,
      "store": {
        "isFeatured": false,
        "isRefundable": true,
        "cost": 1500,
        "occurrences": 0,
        "isNew": false
      },
      "item": {
        "name": "Beastmode",
        "description": "Gassed up and ready to roar.",
        "type": "outfit",
        "rarity": "epic",
        "series": null,
        "images": {
          "icon": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/icon.png",
          "featured": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/featured.png",
          "background": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/icon.png",
          "information": "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_301_athena_commando_m_rhino/icon.png"
        },
        "backpack": {
          
        },
        "obtained_type": "none",
        "ratings": {
          "avgStars": 3.67,
          "totalPoints": 3304,
          "numberVotes": 900
        },
        "costmeticId": "CID_301_Athena_Commando_M_Rhino"
      }
    },


- A list of all Game of Thrones Episodes.

http://api.tvmaze.com/shows/82/episodes

{
    "id": 4952,
    "url": "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
    "name": "Winter is Coming",
    "season": 1,
    "number": 1,
    "type": "regular",
    "airdate": "2011-04-17",
    "airtime": "21:00",
    "airstamp": "2011-04-18T01:00:00+00:00",
    "runtime": 60,
    "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"
    },
    "summary": "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/episodes/4952"
      }
    }
  },

- A list of all songs with "Love" in the title.

https://itunes.apple.com/search?term=song+love

{
      "wrapperType": "track",
      "kind": "music-video",
      "artistId": 74076479,
      "trackId": 838701256,
      "artistName": "Ai Otsuka",
      "trackName": "Birthday Song(LOVE IS BORN ~10th Anniversary 2013~)",
      "trackCensoredName": "Birthday Song(LOVE IS BORN ~10th Anniversary 2013~)",
      "artistViewUrl": "https://music.apple.com/us/artist/ai-otsuka/74076479?uo=4",
      "trackViewUrl": "https://music.apple.com/us/music-video/birthday-song-love-is-born-10th-anniversary-2013/838701256?uo=4",
      "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Video3/v4/c4/91/54/c49154da-8106-7720-2de0-551911532d28/source/30x30bb.jpg",
      "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Video3/v4/c4/91/54/c49154da-8106-7720-2de0-551911532d28/source/60x60bb.jpg",
      "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Video3/v4/c4/91/54/c49154da-8106-7720-2de0-551911532d28/source/100x100bb.jpg",
      "releaseDate": "2014-03-19T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "J-Pop"
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
  "povBooks": [
    
  ],
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
