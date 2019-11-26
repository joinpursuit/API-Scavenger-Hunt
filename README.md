# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
catfact.ninja/

https://catfact.ninja/fact?max_length=140

{
    "fact": "Cats have 30 vertebrae (humans have 33 vertebrae during early development; 26 after the sacral and coccygeal regions fuse)",
    "length": 122
}
1. A list of 150 random users in English.
https://randomuser.me/api/?results=150
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Leroy",
                "last": "Burton"
            }]
        }
1. All the repos on Github with Pursuit their name
https://api.github.com/users/joinpursuit/repos
[
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
1. All the JavaScript repos on Github with Pursuit in their name
1. All the Swift repos on Github with Pursuit in their name
1. A list of all Pokemon
https://pogoapi.net/api/v1/pokemon_names.json
{
    "1": {
        "id": 1,
        "name": "Bulbasaur"
    },
    "2": {
        "id": 2,
        "name": "Ivysaur"
    },
1. A list of all items in Fortnite
1. A list of all Game of Thrones Episodes.
1. A list of all songs with "Love" in the title.
1. All information about Petyr Baelish from the Game of Thrones books
1. All the movies Leonardo Dicaprio has acted in

# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
1. 301
1. 400
1. 401
1. 403
1. 404
1. 418
1. 500


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat



