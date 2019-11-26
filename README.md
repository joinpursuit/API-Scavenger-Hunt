# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
https://catfact.ninja/fact?max_length=140

{
    "fact": "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding.",
    "length": 120
}
1. A list of 150 random users in English.
https://randomuser.me/api/?results=150

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Alexis",
        "last": "Bergeron"
      },
      "location": {
        "street": {
          "number": 258,
          "name": "College Ave"
        },
        "city": "New Glasgow",
        "state": "New Brunswick",
        "country": "Canada",
        "postcode": "T0O 6K5",
        "coordinates": {
          "latitude": "-65.0100",
          "longitude": "149.4494"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "alexis.bergeron@example.com",
      "login": {
        "uuid": "01da0493-cf86-4412-a53e-6aa66f5117d4",
        "username": "tinygoose686",
        "password": "caitlin",
        "salt": "9Fzqhizw",
        "md5": "c0bc681dcd87a0fee29195079de22888",
        "sha1": "f6f80301a1ab1317fc8486625676b58ad8077aee",
        "sha256": "b42a077c01676c663ff8b61b69321b0d53b06a024ba1b2a103b5020197dc367f"
      },
      "dob": {
        "date": "1979-01-02T17:54:01.836Z",
        "age": 40
      },
      "registered": {
        "date": "2009-01-23T05:16:32.468Z",
        "age": 10
      },
      "phone": "931-148-2102",
      "cell": "385-548-1951",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/39.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
      },
      "nat": "CA"
    },
}

1. All the repos on Github with Pursuit in their name

1. All the JavaScript repos on Github with Pursuit in their name

1. All the Swift repos on Github with Pursuit in their name
https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc
{
    "total_count": 130,
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
            "updated_at": "2019-11-21T23:04:32Z",
            "pushed_at": "2019-11-21T23:04:29Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS",
            "homepage": "",
            "size": 109591,
            "stargazers_count": 33,
            "watchers_count": 33,
            "language": "Swift",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 101,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 1,
            "license": null,
            "forks": 101,
            "open_issues": 1,
            "watchers": 33,
            "default_branch": "master",
            "score": 129.40881
        },
        {
            "id": 70620245,
            "node_id": "MDEwOlJlcG9zaXRvcnk3MDYyMDI0NQ==",
            "name": "Pursuit-Core-DSA",
            "full_name": "joinpursuit/Pursuit-Core-DSA",
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
            "html_url": "https://github.com/joinpursuit/Pursuit-Core-DSA",
            "description": "Data Structures and Algorithms Curriculum",
            "fork": false,
            "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA",
            "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/forks",
            "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/teams",
            "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/hooks",
            "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/issues/events{/number}",
            "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/events",
            "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/assignees{/user}",
            "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/branches{/branch}",
            "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/tags",
            "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/languages",
            "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/stargazers",
            "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/contributors",
            "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/subscribers",
            "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/subscription",
            "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/contents/{+path}",
            "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/merges",
            "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/downloads",
            "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/issues{/number}",
            "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/labels{/name}",
            "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/releases{/id}",
            "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-DSA/deployments",
            "created_at": "2016-10-11T17:51:54Z",
            "updated_at": "2019-11-20T19:23:38Z",
            "pushed_at": "2019-11-20T19:23:35Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-DSA.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-DSA.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-DSA.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-DSA",
            "homepage": "",
            "size": 5439,
            "stargazers_count": 18,
            "watchers_count": 18,
            "language": "Swift",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 57,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 57,
            "open_issues": 0,
            "watchers": 18,
            "default_branch": "master",
            "score": 114.40703
        },
        {
            "id": 199690543,
            "node_id": "MDEwOlJlcG9zaXRvcnkxOTk2OTA1NDM=",
            "name": "Pursuit-Core-iOS-Whats-New-In-Swift-5",
            "full_name": "joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5",
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
            "html_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5",
            "description": "What's New in Swift 5",
            "fork": false,
            "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5",
            "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/forks",
            "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/teams",
            "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/hooks",
            "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/issues/events{/number}",
            "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/events",
            "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/assignees{/user}",
            "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/branches{/branch}",
            "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/tags",
            "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/languages",
            "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/stargazers",
            "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/contributors",
            "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/subscribers",
            "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/subscription",
            "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/contents/{+path}",
            "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/merges",
            "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/downloads",
            "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/issues{/number}",
            "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/labels{/name}",
            "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/releases{/id}",
            "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5/deployments",
            "created_at": "2019-07-30T16:39:25Z",
            "updated_at": "2019-08-11T19:24:34Z",
            "pushed_at": "2019-08-11T19:24:33Z",
            "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5.git",
            "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5.git",
            "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5.git",
            "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-Whats-New-In-Swift-5",
            "homepage": null,
            "size": 23,
            "stargazers_count": 2,
            "watchers_count": 2,
            "language": "Swift",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
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
            "forks": 1,
            "open_issues": 0,
            "watchers": 2,
            "default_branch": "master",
            "score": 19.14348
        },
}
1. A list of all Pokemon
https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20

{
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20",
    "previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
    "results": [
        {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
        },
        {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon/22/"
        },
        {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
        },
        {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
        },
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon/25/"
        },
        {
            "name": "raichu",
            "url": "https://pokeapi.co/api/v2/pokemon/26/"
        },
        {
            "name": "sandshrew",
            "url": "https://pokeapi.co/api/v2/pokemon/27/"
        },
        {
            "name": "sandslash",
            "url": "https://pokeapi.co/api/v2/pokemon/28/"
        },
        {
            "name": "nidoran-f",
            "url": "https://pokeapi.co/api/v2/pokemon/29/"
        },
        {
            "name": "nidorina",
            "url": "https://pokeapi.co/api/v2/pokemon/30/"
        },
        {
            "name": "nidoqueen",
            "url": "https://pokeapi.co/api/v2/pokemon/31/"
        },
        {
            "name": "nidoran-m",
            "url": "https://pokeapi.co/api/v2/pokemon/32/"
        },
        {
            "name": "nidorino",
            "url": "https://pokeapi.co/api/v2/pokemon/33/"
        },
        {
            "name": "nidoking",
            "url": "https://pokeapi.co/api/v2/pokemon/34/"
        },
        {
            "name": "clefairy",
            "url": "https://pokeapi.co/api/v2/pokemon/35/"
        },
        {
            "name": "clefable",
            "url": "https://pokeapi.co/api/v2/pokemon/36/"
        },
        {
            "name": "vulpix",
            "url": "https://pokeapi.co/api/v2/pokemon/37/"
        },
        {
            "name": "ninetales",
            "url": "https://pokeapi.co/api/v2/pokemon/38/"
        },
        {
            "name": "jigglypuff",
            "url": "https://pokeapi.co/api/v2/pokemon/39/"
        },
        {
            "name": "wigglytuff",
            "url": "https://pokeapi.co/api/v2/pokemon/40/"
        }
    ]
}

1. A list of all items in Fortnite
https://fortnite-api.theapinetwork.com/items/list
{
    "success": false,
    "location": "nyc",
    "error": {
        "code": "xx002",
        "message": "Access denied."
    },
    "data": {}
}
1. A list of all Game of Thrones Episodes.
api.got.show/api/show/episodes/:title
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
]


1. A list of all songs with "Love" in the title.
https://itunes.apple.com/search?term=love
{
 "resultCount":50,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true}, 
{"wrapperType":"track", "kind":"song", "artistId":368183298, "collectionId":1440881047, "trackId":1440881708, "artistName":"Kendrick Lamar", "collectionName":"DAMN.", "trackName":"LOVE. (FEAT. ZACARI.)", "collectionCensoredName":"DAMN.", "trackCensoredName":"LOVE. (FEAT. ZACARI.)", "artistViewUrl":"https://music.apple.com/us/artist/kendrick-lamar/368183298?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4", "trackViewUrl":"https://music.apple.com/us/album/love-feat-zacari/1440881047?i=1440881708&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/28/40/40/28404037-5570-0709-5601-7eff314e45eb/mzaf_6754627230951906996.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/87/a6/e2/87a6e2e3-cdd2-a2fd-2de5-a7d7505b3225/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/87/a6/e2/87a6e2e3-cdd2-a2fd-2de5-a7d7505b3225/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/87/a6/e2/87a6e2e3-cdd2-a2fd-2de5-a7d7505b3225/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2017-04-14T12:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":10, "trackTimeMillis":213400, "country":"USA", "currency":"USD", "primaryGenreName":"Hip-Hop/Rap", "contentAdvisoryRating":"Explicit", "isStreamable":true}, 
{"wrapperType":"track", "kind":"song", "artistId":432307585, "collectionId":268498692, "trackId":268498694, "artistName":"Love", "collectionName":"Love (Bonus Track Version)", "trackName":"My Little Red Book", "collectionCensoredName":"Love (Bonus Track Version)", "trackCensoredName":"My Little Red Book", "artistViewUrl":"https://music.apple.com/us/artist/love/432307585?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/my-little-red-book/268498692?i=268498694&uo=4", "trackViewUrl":"https://music.apple.com/us/album/my-little-red-book/268498692?i=268498694&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview62/v4/3f/b7/d9/3fb7d9d9-7c81-6b4a-5bd5-4ae708ff6290/mzaf_8121938681731602315.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/57/75/8c57759d-ff9e-a734-0036-62f82611c7ea/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/57/75/8c57759d-ff9e-a734-0036-62f82611c7ea/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/57/75/8c57759d-ff9e-a734-0036-62f82611c7ea/source/100x100bb.jpg", "collectionPrice":10.99, "trackPrice":1.29, "releaseDate":"1966-03-01T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":16, "trackNumber":1, "trackTimeMillis":150133, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
{"wrapperType":"track", "kind":"song", "artistId":432307585, "collectionId":838333336, "trackId":838333357, "artistName":"Love", "collectionName":"The Best of Love", "trackName":"Alone Again Or", "collectionCensoredName":"The Best of Love", "trackCensoredName":"Alone Again Or", "artistViewUrl":"https://music.apple.com/us/artist/love/432307585?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/alone-again-or/838333336?i=838333357&uo=4", "trackViewUrl":"https://music.apple.com/us/album/alone-again-or/838333336?i=838333357&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/08/a9/56/08a956a2-b440-675e-c3e1-6fafff610c99/mzaf_2174682827128629950.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/e7/41/8ce74187-b502-62d9-c35c-fc14de979b7d/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/e7/41/8ce74187-b502-62d9-c35c-fc14de979b7d/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/e7/41/8ce74187-b502-62d9-c35c-fc14de979b7d/source/100x100bb.jpg", "collectionPrice":13.99, "trackPrice":1.29, "releaseDate":"1967-11-01T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":22, "trackNumber":12, "trackTimeMillis":193613, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
{"wrapperType":"audiobook", "artistId":326020144, "collectionId":315601683, "amgArtistId":371195, "artistName":"Pema Chödrön", "collectionName":"Getting Unstuck: Breaking Your Habitual Patterns and Encountering Naked Reality", "collectionCensoredName":"Getting Unstuck: Breaking Your Habitual Patterns and Encountering Naked Reality", "artistViewUrl":"https://books.apple.com/us/author/pema-ch%C3%B6dr%C3%B6n/id326020144?uo=4", "collectionViewUrl":"https://books.apple.com/us/audiobook/getting-unstuck-breaking-your-habitual-patterns-encountering/id315601683?uo=4", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Features/e7/4c/3d/dj.lyuhzcpc.jpg/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Features/e7/4c/3d/dj.lyuhzcpc.jpg/100x100bb.jpg", "collectionPrice":8.99, "collectionExplicitness":"notExplicit", "trackCount":1, "copyright":"℗ © 2004 Sounds True", "country":"USA", "currency":"USD", "releaseDate":"2004-11-30T08:00:00Z", "primaryGenreName":"Religion & Spirituality", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/45/f6/fa/45f6faca-c0c4-d05a-4265-715e8ee93f7d/mzaf_156906596969698902.std.aac.p.m4a", 
"description":"Have you ever had an itch, and not scratched it? In the Buddhist tradition, this points to a vast paradox: that by refraining from our urge to \"scratch\", great peace and happiness is available. On <i>Getting Unstuck<\/i>, Pema Chodron introduces a rare Tibetan teaching she received from her teacher, Dzigar Kontrul Rinpoche, and one that has become critical to her practice. Here, she unveils the mystery of an ineffable quality; a \"pre-emotional\" feeling that arises in us, brings us discomfort, and causes us to react by escaping the discomfort, often with harmful habits. With <i>Getting Unstuck<\/i>, she offers us a first look at \"both the itch and the scratch\": what Tibetan Buddhists call shenpa.<br />On this new, full-length recording, Pema Chodron, best-selling author and beloved American Buddhist nun, shows us how to recognize shenpa, catch it as it appears, and develop a playful, lively curiosity toward it. Join Pema Chodron to discover more about:<br /><br /> Critical mind: how to recognize this fundamental shenpa, and approach yourself and others with a sense of humor and loving-kindness Ways to unravel the patterns of self-denigration, and develop the fundamental maitri, loving-kindness, toward yourself How to cultivate acceptance of your irritability, insecurities, and other simply human traits Recognition, Refrain, Relaxing, and Resolve: the four R's of working with shenpa, and more<br />An urge comes up, we succumb to it, and it becomes stronger, teaches Pema Chodron. We reinforce our cravings, habits, and addictions by giving into them repeatedly. On <i>Getting Unstuck<\/i>, Chodron guides us through this \"sticky feeling\", exploring the moments when we get hooked, and offers us tools for learning to stay with our uneasiness, soften our hearts toward ourselves and others, and live a more peaceful life in the fullness of the present moment."}, 
{"wrapperType":"track", "kind":"song", "artistId":432307585, "collectionId":159364442, "trackId":159364474, "artistName":"Love", "collectionName":"Da Capo", "trackName":"7 and 7 Is", "collectionCensoredName":"Da Capo", "trackCensoredName":"7 and 7 Is", "artistViewUrl":"https://music.apple.com/us/artist/love/432307585?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/7-and-7-is/159364442?i=159364474&uo=4", "trackViewUrl":"https://music.apple.com/us/album/7-and-7-is/159364442?i=159364474&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/54/5d/0b/mzm.vgbgeldy.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d1/dd/fd/d1ddfd91-3eab-c082-bad6-3812aebf5d18/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d1/dd/fd/d1ddfd91-3eab-c082-bad6-3812aebf5d18/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d1/dd/fd/d1ddfd91-3eab-c082-bad6-3812aebf5d18/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"1966-07-01T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":7, "trackNumber":4, "trackTimeMillis":135560, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
{"wrapperType":"audiobook", "artistId":364290051, "collectionId":320464373, "amgArtistId":1717668, "artistName":"Don Miguel Ruiz", "collectionName":"The Mastery of Love: A Practical Guide to the Art of Relationship", "collectionCensoredName":"The Mastery of Love: A Practical Guide to the Art of Relationship", "artistViewUrl":"https://books.apple.com/us/author/don-miguel-ruiz/id364290051?uo=4", "collectionViewUrl":"https://books.apple.com/us/audiobook/mastery-love-practical-guide-to-art-relationship/id320464373?uo=4", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Features/ab/b8/47/dj.fdhonbbq.jpg/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Features/ab/b8/47/dj.fdhonbbq.jpg/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":1, "copyright":"℗ © 2002 Amber Allen Publishing Inc.", "country":"USA", "currency":"USD", "releaseDate":"2002-12-01T08:00:00Z", "primaryGenreName":"Self-Development", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/80/07/4c/80074c16-26ef-03d5-c731-95d1a21a5aed/mzaf_274057220542839472.std.aac.p.m4a", 
"description":"In <i>The Mastery of Love<\/i>, don Miguel Ruiz illuminates the fear-based beliefs and assumptions that undermine love and lead to suffering and drama in our relationships. Using insightful stories to bring his message to life, Ruiz shows us how to heal our emotional wounds, recover the freedom and joy that are our birthright, and restore the spirit of playfulness that is vital to loving relationships.<br />In the Toltec tradition, three fundamental masteries guide us to our true nature, which is happiness, freedom, and love.<br /><br />The first is the Mastery of Awareness. This mastery teaches us to be aware of what we really are. It is the first step toward freedom because we cannot be free if we don't know what we are, or what kind of freedom we are looking for. The Toltecs said, \"Let us see ourselves with truth\", and they created a mastery just for awareness.<br /><br />The second is the Mastery of Transformation, which teaches us how to become spiritual warriors and stalk our actions and reactions so we can break free of the knowledge that enslaves us. This mastery shows us how to change the dream of our life by changing our agreements and beliefs.<br /><br />The Mastery of Love is the result of the first two masteries. From the Toltec perspective, everything is made of Love. Love is Life itself. When we master Love, we align with the Spirit of Life passing through us. We are no longer the body, or the mind, or the soul; we are Love. Then every action we take is an expression of Love, and Love in action can only produce happiness.<br /><br />When we master Awareness, Transformation, and Love, we reclaim our divinity and become one with God. This is the goal of the Toltec."}, 
{"wrapperType":"track", "kind":"song", "artistId":16586443, "collectionId":1441844369, "trackId":1441844542, "artistName":"John Legend", "collectionName":"Love in the Future (Expanded Edition)", "trackName":"All of Me", "collectionCensoredName":"Love in the Future (Expanded Edition)", "trackCensoredName":"All of Me", "artistViewUrl":"https://music.apple.com/us/artist/john-legend/16586443?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/all-of-me/1441844369?i=1441844542&uo=4", "trackViewUrl":"https://music.apple.com/us/album/all-of-me/1441844369?i=1441844542&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/b8/9a/76/b89a76fe-250b-d84c-b23e-0ebff8fd8734/mzaf_6064874621354941029.plus.aac.p.m4a", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/45/70/16/45701623-2c34-bb08-75f2-ecff92d3e005/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/45/70/16/45701623-2c34-bb08-75f2-ecff92d3e005/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/45/70/16/45701623-2c34-bb08-75f2-ecff92d3e005/source/100x100bb.jpg", "collectionPrice":13.99, "trackPrice":1.29, "releaseDate":"2013-08-12T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":20, "trackNumber":6, "trackTimeMillis":269557, "country":"USA", "currency":"USD", "primaryGenreName":"R&B/Soul", "isStreamable":true}, ]
}

1. All information about Petyr Baelish from the Game of Thrones books
https://www.anapioficeandfire.com/api/characters/823
{
    "url": "https://anapioficeandfire.com/api/characters/823",
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
    "spouse": "https://anapioficeandfire.com/api/characters/688",
    "allegiances": [
        "https://anapioficeandfire.com/api/houses/10",
        "https://anapioficeandfire.com/api/houses/11"
    ],
    "books": [
        "https://anapioficeandfire.com/api/books/1",
        "https://anapioficeandfire.com/api/books/2",
        "https://anapioficeandfire.com/api/books/3",
        "https://anapioficeandfire.com/api/books/5",
        "https://anapioficeandfire.com/api/books/8"
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
https://itunes.apple.com/search?term=leonardo+dicaprio

{
 "resultCount":41,
 "results": [
{"wrapperType":"track", "kind":"feature-movie", "trackId":1473165316, "artistName":"Quentin Tarantino", "trackName":"Once Upon a Time...in Hollywood", "trackCensoredName":"Once Upon a Time...in Hollywood", "trackViewUrl":"https://itunes.apple.com/us/movie/once-upon-a-time-in-hollywood/id1473165316?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video113/v4/89/74/d9/8974d974-01b1-bd9b-c7af-16e25b99527f/mzvf_11817609157199251412.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/58/cd/27/58cd278f-8501-9240-dab9-893818292b75/pr_source.lsr/100x100bb.jpg", "collectionPrice":19.99, "trackPrice":19.99, "collectionHdPrice":19.99000, "trackHdPrice":19.99000, "releaseDate":"2019-07-26T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "trackTimeMillis":9704568, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", 
"longDescription":"The 9th film from Quentin Tarantino features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood’s golden age.", "hasITunesExtras":true}, 
{"wrapperType":"track", "kind":"feature-movie", "collectionId":1151694663, "trackId":774084884, "artistName":"Martin Scorsese", "collectionName":"10 Years of iTunes Movies - Paramount", "trackName":"The Wolf of Wall Street", "collectionCensoredName":"10 Years of iTunes Movies - Paramount", "trackCensoredName":"The Wolf of Wall Street", "collectionArtistId":1008915738, "collectionArtistViewUrl":"https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", "trackViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/ff/b7/77/ffb777a8-04c0-56fe-2237-64c09352891e/mzvf_3469655200525770514.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/100x100bb.jpg", "collectionPrice":12.99, "trackPrice":12.99, "trackRentalPrice":3.99000, "collectionHdPrice":14.99000, "trackHdPrice":14.99000, "trackHdRentalPrice":3.99000, "releaseDate":"2013-12-25T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":10, "trackNumber":3, "trackTimeMillis":10806388, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", "shortDescription":"Revered filmmaker Martin Scorsese directs the story of New York stockbroker Jordan Belfort (Leonardo", 
"longDescription":"Sex. Money. Power. Drugs. Brace yourself for an outrageous true story from legendary filmmaker Martin Scorsese that critics are calling \"a masterpiece for a new generation.” Leonardo DiCaprio delivers the best performance of his career as a young stockbroker hungry for a life of non-stop thrills, where corruption was king and more was never enough. His rise to power earned him the title The Wolf of Wall Street. Together, Scorsese and DiCaprio deliver a story of American excess that is an absolute blast from start to finish.", "hasITunesExtras":true}, ]
}

# Part Two

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
200 OK - success status response code indicates that the request has succeeded. A 200 response is cacheable by default.
1. 301
301 Moved Permanently redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers
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



