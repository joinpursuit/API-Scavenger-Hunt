# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:

// WWMAD = What would my app do?
1. 200
    endpoint = "https://www.espn.com"
    status meaning = Ok good response
    WWMAD? = show me revelant sport news; including scores to games and breaking sports stories
1. 301
    endpoint = "https://www.twitter.com/owenthefirst93"
    status meaning = Moved permanently; current link using the URL should be updated
    WWMAD? = links to my personal Twitter page but only if Im logged in to Twitter
1. 400
    endpoint = "https://www.ndjj.com"
    status meaning = Bad request error
    WWMAD? = Takes me to a page that says site cannot be reached; server's ip address cannot be found
1. 401
    endpoint= "https://canvas.instructure.com/calendar#view_name=month&view_start=2019-08-26"
    status meaning = Unauthorized 
    WWMAD? = Have to log into with the username and password

1. 403
    endpoint = "https://fortnite-api.theapinetwork.com/items/list"
    status meaning = Access to valid requested URL is forbidden for reason
    WWMAD? = would not be able to access Fortnite item list API
1. 404
    endpoint = "https://en.wikipedia.org/404"
    status meaning = Page not found
    WWMAD? = Takes me to a page on the wikipedia website that can't be found
1. 418
    endpoint ="https://www.google.com/teapot"
    status meaning = April Fools Joke; Teapot Error message
1. 500
    

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
    https://catfact.ninja/fact?max_length=140
    {"fact":"The cat's tail is used to maintain balance.","length":43}

1. A list of 150 random users in English.
    https://randomuser.me/api/
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "jeremy",
                "last": "mason"
            },
            "location": {
                "street": "2014 station road",
                "city": "cobh",
                "state": "kerry",
                "postcode": 18791,
                "coordinates": {
                    "latitude": "21.6441",
                    "longitude": "-144.6820"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "jeremy.mason@example.com",
            "login": {
                "uuid": "79b3c451-674f-4184-b3e9-377bc383a9ae",
                "username": "tinylion278",
                "password": "champion",
                "salt": "yEq8gHrE",
                "md5": "742fa2b6fb7034ad9c14549c4efca448",
                "sha1": "51a0c30efae4c336b7cedd658932c627aea5b433",
                "sha256": "71bc2ff63a6dd949ff88bf8dcd619b14db7c37fabe5acc4e5ea5eb8ab21235fa"
            },
            "dob": {
                "date": "1968-10-13T06:51:58Z",
                "age": 50
            },
            "registered": {
                "date": "2010-03-29T23:32:38Z",
                "age": 9
            },
            "phone": "061-252-6569",
            "cell": "081-322-8908",
            "id": {
                "name": "PPS",
                "value": "8407944T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/69.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
            },
            "nat": "IE"
        }
    ],
    "info": {
        "seed": "9f659376500a8101",
        "results": 1,
        "page": 1,
        "version": "1.2"
    }
}

1. All the repos on Github with Pursuit their name
    https://api.github.com/search/repositories?q=pursuit-core

    {
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

1. All the JavaScript repos on Github with Pursuit in their name
    https://api.github.com/search/repositories?q=pursuit-core+language:javascript&sort=stars&order=desc

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

1. All the Swift repos on Github with Pursuit in their name
    https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc

        {
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

1. A list of all Pokemon
    https://pokeapi.co/api/v2/pokemon/?limit=1000
    {
    "count": 964,
    "next": null,
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
        }]
    }
1. A list of all items in Fortnite
    https://www.fortnitehut.com/free-api?rarity=epic
    {
    "results": [
        {
            "rarityid": {
                "name": "epic",
                "date": "September 8th 2019"
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
        }]
    }
1. A list of all Game of Thrones Episodes.
    https://api.got.show/api/map/episodes

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
        }]
    }

1. A list of all songs with "Love" in the title.
    https://itunes.apple.com/search?term=love&entity=song

   {
 "resultCount":43,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":42616562, "collectionId":715579496, "trackId":715581836, "artistName":"Nat \"King\" Cole", "collectionName":"Nat King Cole", "trackName":"L-O-V-E", "collectionCensoredName":"Nat King Cole", "trackCensoredName":"L-O-V-E", "artistViewUrl":"https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", "trackViewUrl":"https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg", "collectionPrice":39.99, "trackPrice":1.29, "releaseDate":"1992-11-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":4, "discNumber":4, "trackCount":24, "trackNumber":24, "trackTimeMillis":152533, "country":"USA", "currency":"USD", "primaryGenreName":"Jazz", "isStreamable":true},
   }


1. All information about Petyr Baelish from the Game of Thrones books
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

1. All the movies Leonardo Dicaprio has acted in
    https://itunes.apple.com/search?term=leonardo+dicaprio

    {
 "resultCount":41,
 "results": [
{"wrapperType":"track", "kind":"feature-movie", "collectionId":1151694663, "trackId":774084884, "artistName":"Martin Scorsese", "collectionName":"10 Years of iTunes Movies - Paramount", "trackName":"The Wolf of Wall Street", "collectionCensoredName":"10 Years of iTunes Movies - Paramount", "trackCensoredName":"The Wolf of Wall Street", "collectionArtistId":1008915738, "collectionArtistViewUrl":"https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", "trackViewUrl":"https://itunes.apple.com/us/movie/the-wolf-of-wall-street/id774084884?uo=4", 
"previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/ff/b7/77/ffb777a8-04c0-56fe-2237-64c09352891e/mzvf_3469655200525770514.640x354.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/f0/40/fb/f040fbc3-3217-5403-bf75-da0687ef9d8f/source/100x100bb.jpg", "collectionPrice":12.99, "trackPrice":12.99, "trackRentalPrice":3.99000, "collectionHdPrice":14.99000, "trackHdPrice":14.99000, "trackHdRentalPrice":3.99000, "releaseDate":"2013-12-25T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":10, "trackNumber":3, "trackTimeMillis":10806388, "country":"USA", "currency":"USD", "primaryGenreName":"Drama", "contentAdvisoryRating":"R", "shortDescription":"Revered filmmaker Martin Scorsese directs the story of New York stockbroker Jordan Belfort (Leonardo", 
"longDescription":"Sex. Money. Power. Drugs. Brace yourself for an outrageous true story from legendary filmmaker Martin Scorsese that critics are calling \"a masterpiece for a new generation.” Leonardo DiCaprio delivers the best performance of his career as a young stockbroker hungry for a life of non-stop thrills, where corruption was king and more was never enough. His rise to power earned him the title The Wolf of Wall Street. Together, Scorsese and DiCaprio deliver a story of American excess that is an absolute blast from start to finish.", "hasITunesExtras":true}

    }