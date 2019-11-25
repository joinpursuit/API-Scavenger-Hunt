# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
https://catfact.ninja/fact
```
{
"fact": "The silks created by weavers in Baghdad were inspired by the beautiful and varied colors and markings of cat coats. These fabrics were called 'tabby' by European traders.",
"length": 174
}
```
1. A list of 150 random users in English.

https://randomuser.me/api/?results=150
```
{
"results": [
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "آرسین",
            "last": "پارسا"
        },
        "location": {
            "street": {
                "number": 1136,
                "name": "شهید مطهری"
            },
            "city": "یزد",
            "state": "خراسان رضوی",
            "country": "Iran",
            "postcode": 19183,
            "coordinates": {
                "latitude": "29.2172",
                "longi
                }
                }
                }
                ]}
```
1. All the repos on Github with Pursuit their name

https://api.github.com/search/repositories?q={pursuit}{&page,per_page,sort,order}
```
{
"total_count": 824,
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
"forks_count": 63,
"mirror_url": null,
"archived": false,
"disabled": false,
"open_issues_count": 0,
"license": null,
"forks": 63,
"open_issues": 0,
"watchers": 46,
"default_branch": "master",
"score": 100.69971
}
}
```
1. All the JavaScript repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=Pursuit+language:javascript{&page,per_page,sort,order}

1. All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit+language:swift&sort=stars&order=desc

1. A list of all Pokemon
https://pogoapi.net/api/v1/pokemon_names.json
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



