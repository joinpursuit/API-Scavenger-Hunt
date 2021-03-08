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
https://randomuser.me/api/?results=150

``` {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Lison",
        "last": "Vidal"
      },
      "location": {
        "street": {
          "number": 5641,
          "name": "Rue Bataille"
        },
        "city": "Nîmes",
        "state": "Charente-Maritime",
        "country": "France",
        "postcode": 92196,
        "coordinates": {
          "latitude": "-0.0383",
          "longitude": "47.2750"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      }, ``` 
- All the repos on Github with Pursuit their name
https://api.github.com/search/repositories?q=pursuit
``` {
  "total_count": 2084,
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
      "commits_url": ```

- All the JavaScript repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit-core+language:javascript
```  {
  "total_count": 5,
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
      "stargazers_url":  ```
- All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit-core+language:swift
{
  "total_count": 1,
  "incomplete_results": false,
  "items": [
    {
      "id": 233689493,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMzM2ODk0OTM=",
      "name": "Pursuit-Core-iOS-UserDefaults-Lab",
      "full_name": "maitreebain/Pursuit-Core-iOS-UserDefaults-Lab",
      "private": false,
      "owner": {
        "login": "maitreebain",
        "id": 55721710,
        "node_id": "MDQ6VXNlcjU1NzIxNzEw",
        "avatar_url": "https://avatars.githubusercontent.com/u/55721710?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/maitreebain",
        "html_url": "https://github.com/maitreebain",
        "followers_url": "https://api.github.com/users/maitreebain/followers",
        "following_url": "https://api.github.com/users/maitreebain/following{/other_user}",
        "gists_url": "https://api.github.com/users/maitreebain/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/maitreebain/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/maitreebain/subscriptions",
        "organizations_url": "https://api.github.com/users/maitreebain/orgs",
        "repos_url": "https://api.github.com/users/maitreebain/repos",
        "events_url": "https://api.github.com/users/maitreebain/events{/privacy}",
        "received_events_url": "https://api.github.com/users/maitreebain/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/maitreebain/Pursuit-Core-iOS-UserDefaults-Lab",
      "description": "Pursuit-Core-iOS-UserDefaults-Lab",
      "fork": false,
      "url": "https://api.github.com/repos/maitreebain/Pursuit-Core-iOS-UserDefaults-Lab",
      "forks_url": "https://api.github.com/repos/maitreebain/Pursuit-Core-iOS-UserDefaults-Lab/forks",
      "keys_url": "https://api.github.co

- A list of all Pokemon
https://pokeapi.co/api/v2/pokemon/
``` {
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
      "url": "https:/ ```
- A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/store/get
``` {
  "lastUpdate": 0,
  "lanuage": "en",
  "scope": "store",
  "data": [
    {
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
        "backpack": {},
        "obtained_type": "none",
        "ratings": {
          "avgStars": 3.67,
          "totalPoints": 3304,
          "numberVotes": 900
        },
        "costmeticId": "CID_301_Athena_Commando_M_Rhino"
      }
    },
    {
      "itemId": "90477c1d-cfe0-4c1e-86d2-c558ee7d9578",
      "lastUpdate": 1615131302,
      "store": {
        "isFeatured": false,
        "isRefundable": true, ```
- A list of all Game of Thrones Episodes.
api.got.show/api/show/episodes/
``` [
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
  {
    "written_by": [
      "David Benioff",
      "D.B. Weiss"
    ],
    "characters": [
      "Royal Steward",
      "Petyr Baelish",
      "Varys",
      "Renly Baratheon",
      "Grand Maester",
      "Old Nan",
      "Gold Cloak #1",
      "Gold Cloak #2",
      "Drunk man",
      "King's Landing whore",
      "Jeor Mormont",
      "Pypar",
      "Alliser Thorne",
      "Grenn",
      "Lancel Lannister",
      "Barristan Selmy",
      "Rakharo",
      "Yoren",
      "Aemon",
      "Syrio Forel"
    ],
    "deaths": [],
    "places": [
      "In King's Landing",
      "At Winterfell",
      "At the Wall",
      "In the Dothraki Sea",
      "Characters",
      "Cast",
      "Cast notes"
    ],
    "_id": "5cc074bf04e71a0010b85a1c",
    "title": "Lord Snow",
    "season": 1,
    "episode": 3,
    "runtime": 58,
    "directed_by": "Brian Kirk",
    "createdAt": "2019-04-24T14:37:51.760Z",
    "updatedAt": "2019-04-24T14:37:51.760Z",
    "__v": 0
  },
  {
    "written_by": [
      "Bryan Cogman"
    ],
    "characters": [
      "Samwell Tarly",
      "Janos Slynt",
      "Hugh",
      "Tobho Mott",
      "Gendry",
      "Gyles Rosby",
      "Gregor Clegane",
      "Marillion",
      "Masha Heddle",
      "Bronn",
      "Willis Wode",
      "Kurleket",
      "Knight of House Frey"
    ],
    "deaths": [
      "Hugh"
    ],
    "places": [
      "In the North",
      "At the Wall",
      "At Vaes Dothrak",
      "In King's Landing",
      "At the Inn at the Crossroads",
      "First",
      "Deaths",
      "Cast notes"
    ],
    "_id": "5cc074bf04e71a0010b85a1d",
    "title": "Cripples, Bastards, and Broken Things",
    "season": 1,
    "episode": 4,
    "runtime": 56,
    "directed_by": "Brian Kirk",
    "createdAt": "2019-04-24T14:37:51.760Z",
    "updatedAt": "2019-04-24T14:37:51.760Z",
    "__v": 0
  },
  {
    "written_by": [
      "David Benioff",
      "D.B. Weiss"
    ],
    "characters": [
      "Loras Tyrell",
      "Joss Stilwood",
      "Vardis Egen",
      "Barra",
      "Mhaegen",
      "Lysa Arryn",
      "Robin Arryn",
      "Wyl",
      "Heward",
      "Mord"
    ],
    "deaths": [
      "Kurleket",
      "Willis Wode",
      "Wyl",
      "Heward",
      "Jory Cassel"
    ],
    "places": [
      "In the Vale",
      "In the North",
      "In King's Landing",
      "First",
      "Deaths",
      "Cast Notes"
    ],
    "_id": "5cc074bf04e71a0010b85a1e",
    "title": "The Wolf and the Lion",
    "season": 1,
    "episode": 5,
    "runtime": 55,
    "directed_by": "Brian Kirk",
    "createdAt": "2019-04-24T14:37:51.761Z",
    "updatedAt": "2019-04-24T14:37:51.761Z",
    "__v": 0
  },
  {
    "written_by": [
      "Jane Espenson, David Benioff",
      "D.B. Weiss"
    ],
    "characters": [
      "Osha",
      "Stiv",
      "Wallen",
      "Dothraki crone",
      "Jon Lynderly",
      "Eon Hunter",
      "Beric Dondarrion",
      "Steffon",
      "Joss"
    ],
    "deaths": [
      "Wallen",
      "Stiv",
      "Vardis Egen",
      "Viserys Targaryen"
    ],
    "places": [
      "In the Crownlands",
      "In the North",
      "At the Eyrie",
      "At Vaes Dothrak",
      "First",
      "Deaths",
      "Cast Notes"
    ],
    "_id": "5cc074bf04e71a0010b85a1f",
    "title": "A Golden Crown",
    "season": 1,
    "episode": 6,
    "runtime": 53,
    "directed_by": "Daniel Minahan",
    "createdAt": "2019-04-24T14:37:51.761Z",
    "updatedAt": "2019-04-24T14:37:51.761Z",
    "__v": 0
  },
  {
    "written_by": [
      "David Benioff",
      "D.B. Weiss"
    ],
    "characters": [
      "Tywin Lannister",
      "Armeca", ```
- A list of all songs with "Love" in the title.
https://itunes.apple.com/search?term="love"&attribute=songTerm
```{
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
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 13332559,
      "collectionId": 1444077144,
      "trackId": 1444077479,
      "artistName": "Ashlee Simpson",
      "collectionName": "I Am Me",
      "trackName": "L.O.V.E.",
      "collectionCensoredName": "I Am Me",
      "trackCensoredName": "L.O.V.E.",
      "artistViewUrl": "https://music.apple.com/us/artist/ashlee-simpson/13332559?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/l-o-v-e/1444077144?i=1444077479&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/l-o-v-e/1444077144?i=1444077479&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/ca/1e/d1/ca1ed15c-63a3-48fb-a5c4-68f9c0c47078/mzaf_42412691420865872.plus.aac.p.m4a",
      "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/02/d7/3502d789-5d56-3406-d2a2-df325a5fe279/source/30x30bb.jpg",
      "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/02/d7/3502d789-5d56-3406-d2a2-df325a5fe279/source/60x60bb.jpg",
      "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/02/d7/3502d789-5d56-3406-d2a2-df325a5fe279/source/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "2005-10-17T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 11,
      "trackNumber": 4,
      "trackTimeMillis": 153053,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop",
      "isStreamable": true
    },
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 13332559,
      "collectionId": 1445137634,
      "trackId": 1445137635,
      "artistName": "Ashlee Simpson",
      "collectionName": "L.O.V.E. (Missy Underground Mix) - Single",
      "trackName": "L.O.V.E. (feat. Missy Elliott)",
      "collectionCensoredName": "L.O.V.E. (Missy Underground Mix) - Single",
      "trackCensoredName": "L.O.V.E. (feat. Missy Elliott) [Missy Underground Mix]",
      "artistViewUrl": "https://music.apple.com/us/artist/ashlee-simpson/13332559?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/l-o-v-e-feat-missy-elliott-missy-underground-mix/1445137634?i=1445137635&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/l-o-v-e-feat-missy-elliott-missy-underground-mix/1445137634?i=1445137635&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/c6/8e/84/c68e8495-d0aa-2c7a-60b2-69c26b63196a/mzaf_1585238399883627955.plus.aac.p.m4a",
      "artworkUrl30": "https://is4- ```
- All information about Petyr Baelish from the Game of Thrones books
https://www.anapioficeandfire.com/api/characters/823/
``` {
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
} ```
- All the movies Leonardo Dicaprio has acted in
https://imdb-api.com/en/API/SearchName/k_12345678/leonardo-dicaprio
``` {"searchType":"Name","expression":"leonardo-dicaprio","results":null,"errorMessage":"Invalid API Key"}```

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
