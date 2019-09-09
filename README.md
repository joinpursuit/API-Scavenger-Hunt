# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
    * https://developer.mozilla.org/en-US/
    * Standard response for successful HTTP requests.
    * nothing to be done.

1. 301
    * https://facebook.com 
    * This and all future requests should be directed to the given URI.
    * give this message and send user to the new page
1. 400
    * 
    * The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too       large, invalid request message framing, or deceptive request routing).[32]
    * 
1. 401
    * https://canvas.instructure.com
    * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
    *
1. 403
    * https://google.docs.com
    * The request was valid, but the server is refusing action.
    *
1. 404
    * https://apps.apple.com/app 
    * The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
    *
1. 418
    *
    * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. [53] This HTTP status is used as an Easter egg in some websites, including Google.com.
    *
1. 500
    *
    * The server was acting as a gateway or proxy and received an invalid response from the upstream server.xx`x`x``
    *


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
    * endpoint = https://catfact.ninja/fact
    * {
    "fact": "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
    "length": 66
}

2. A list of 150 random users in English.
    * endpoint = https://randomuser.me/api/?
    * {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "isak",
                "last": "stenersen"
            },
            "location": {
                "street": "doktor holms vei 691",
                "city": "åneby",
                "state": "sør-trøndelag",
                "postcode": "2550",
                "coordinates": {
                    "latitude": "51.8758",
                    "longitude": "-80.0238"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "isak.stenersen@example.com",
            "login": {
                "uuid": "6c752fb8-ed66-4f43-a172-7352aee2d5bf",
                "username": "heavycat532",
                "password": "barrett",
                "salt": "6ZyA0qmP",
                "md5": "be0249e8aa6ce95826ec797aeb176207",
                "sha1": "b89066e2d6241c288422cef8f1118d8beb0d9dff",
                "sha256": "dcd516ecd8ef9bf72a72a086b4b978c9b0250198cec95211449284675b125a39"
            },
            "dob": {
                "date": "1956-05-07T17:27:05Z",
                "age": 63
            },
            "registered": {
                "date": "2007-11-21T10:29:55Z",
                "age": 11
            },
            "phone": "69918379",
            "cell": "98982919",
            "id": {
                "name": "FN",
                "value": "07055621041"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/13.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
            },
            "nat": "NO"
        }
    ],
    "info": {
        "seed": "c607b07199fa17b3",
        "results": 1,
        "page": 1,
        "version": "1.2"
    }
}

3. All the repos on Github with Pursuit their name
    * https://api.github.com/search/repositories?q=pursuit
    * {
    "total_count": 1319,
    "incomplete_results": false,
    "items": [
        {
1. All the JavaScript repos on Github with Pursuit in their name
1. All the Swift repos on Github with Pursuit in their name
1. A list of all Pokemon
    * https://pokeapi.co/api/v2/pokemon
    * "count": 964,
        "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
        "previous": null,
        "results": [
1. A list of all items in Fortnite
    * https://www.fortnitehut.com/free-api?rarity=epic
    * {
    "results": [
        {
            "rarityid": {
                "name": "epic",
                "date": "September 9th 2019"
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
        },
        {
            "name": "Juke",
            "ourid": "IGGq2CQ"
        },
        {
            "name": "Interceptor",
            "ourid": "fwY29oH"
        },
        {
            "name": "Gridiron",
            "ourid": "3cpEHQ8"
        },
        {
            "name": "End Zone",
            "ourid": "RJ6QP1z"
        },
        {
            "name": "Blitz",
            "ourid": "ozNcWdq"
        },
        {
            "name": "Vulture",
            "ourid": "YDXYMnf"
        },

1. A list of all Game of Thrones Episodes.
    * https://api.got.show//api/show/episodes
    * [
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
            "Armeca",
            "Tomard",
            "Little Bird",
            "Wineseller",
            "Dareon",
            "Allo",
            "Balian",
            "Echiel",
            "Escan",
            "Gordo",
            "Joby",
            "Halder",
            "Luke",
            "Matthar",
            "Mink",
            "Nelugo",
            "Niko",
            "Rancer",
            "Toad",
            "Vorkoy",
            "Jaremy Rykker",
            "Othell Yarwyck",
            "Night's Watch Officer 2",
            "Mandon Moore",
            "Boros Blount",
            "Arys Oakheart",
            "Clydas",
            "Varly"
        ],
        "deaths": [
            "Robert Baratheon",
            "Varly"
        ],
        "places": [
            "At the Lannister Camp",
            "At Winterfell",
            "At the Wall",
            "At Vaes Dothrak",
            "In King's Landing",
            "First",
            "Deaths",
            "Cast Notes"
        ],
        "_id": "5cc074bf04e71a0010b85a20",
        "title": "You Win or You Die",
        "season": 1,
        "episode": 7,
        "runtime": 58,
        "directed_by": "Daniel Minahan",
        "createdAt": "2019-04-24T14:37:51.761Z",
        "updatedAt": "2019-04-24T14:37:51.761Z",
        "__v": 0
    },
    {
        "written_by": [
            "George R.R. Martin"
        ],
        "characters": [
            "Vayon Poole",
            "Meryn Trant",
            "Mirri Maz Duur",
            "Jon Umber",
            "Jafer Flowers",
            "Othor",
            "Shagga",
            "Timett",
            "Chella",
            "Kevan Lannister",
            "Galbart Glover",
            "Maege Mormont",
            "Aron Santagar"
        ],
        "deaths": [
            "Vayon Poole",
            "Mordane",
            "Syrio Forel",
            "Stableboy",
            "Mago",
            "Jafer Flowers",
            "Othor"
        ],
        "places": [
            "At the Wall",
            "At the Eyrie",
            "In the Mountains of the Moon",
            "In the North",
            "At the Lannister Camp",
            "In Lhazar",
            "In King's Landing",
            "First",
            "Deaths",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a21",
        "title": "The Pointy End",
        "season": 1,
        "episode": 8,
        "runtime": 59,
        "directed_by": "Daniel Minahan",
        "createdAt": "2019-04-24T14:37:51.762Z",
        "updatedAt": "2019-04-24T14:37:51.762Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Walder Frey",
            "Leo Lefford",
            "Joyeuse Erenford",
            "Stevron Frey",
            "Ryger Rivers",
            "Arwaya Frey",
            "Shae"
        ],
        "deaths": [
            "Qotho",
            "Eddard Stark"
        ],
        "places": [
            "In the Riverlands",
            "At the Wall",
            "In Lhazar",
            "In King's Landing",
            "First",
            "Deaths",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a22",
        "title": "Baelor",
        "season": 1,
        "episode": 9,
        "runtime": 57,
        "directed_by": "Alan Taylor",
        "createdAt": "2019-04-24T14:37:51.762Z",
        "updatedAt": "2019-04-24T14:37:51.762Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Rickard Karstark",
            "Jonos Bracken",
            "Addam Marbrand",
            "Harys Swyft",
            "Jaqen H'ghar",
            "Rorge",
            "Biter",
            "Hot Pie",
            "Lommy Greenhands",
            "Drogon",
            "Viserion",
            "Rhaegal"
        ],
        "deaths": [
            "Rhaego",
            "Drogo",
            "Mirri Maz Duur"
        ],
        "places": [
            "In King's Landing",
            "In the North",
            "In the Riverlands",
            "At the Wall",
            "In Lhazar",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a23",
        "title": "Fire and Blood",
        "season": 1,
        "episode": 10,
        "runtime": 53,
        "directed_by": "Alan Taylor",
        "createdAt": "2019-04-24T14:37:51.762Z",
        "updatedAt": "2019-04-24T14:37:51.762Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Lothor Brune",
            "Dontos Hollard",
            "Eglantine",
            "Portan",
            "Kovarro",
            "Aggo",
            "Eddison Tollett",
            "Craster",
            "Night's Watch Officer",
            "Gilly",
            "Melisandre",
            "Maester",
            "Davos Seaworth",
            "Matthos Seaworth",
            "Stannis Baratheon",
            "Selyse Baratheon",
            "Alton Lannister",
            "Stark Officer 1",
            "Stark Officer 2",
            "Daisy"
        ],
        "deaths": [
            "Silver",
            "Cressen",
            "Barra",
            "Robert Baratheon"
        ],
        "places": [
            "At Craster's Keep",
            "In King's Landing",
            "At Winterfell",
            "On Dragonstone",
            "In the Riverlands",
            "In the Red Waste",
            "First",
            "Deaths",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a24",
        "title": "The North Remembers",
        "season": 2,
        "episode": 1,
        "runtime": 53,
        "directed_by": "Alan Taylor",
        "createdAt": "2019-04-24T14:37:51.762Z",
        "updatedAt": "2019-04-24T14:37:51.762Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Jaqen H'ghar",
            "Rorge",
            "Biter",
            "Captain's daughter",
            "Podrick Payne",
            "Balon Greyjoy",
            "Yara Greyjoy",
            "Salladhor Saan"
        ],
        "deaths": [
            "Rakharo"
        ],
        "places": [
            "On the Kingsroad",
            "In King's Landing",
            "On Dragonstone",
            "In the Iron Islands",
            "In the Red Waste",
            "At Craster's Keep",
            "First",
            "Deaths",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a25",
        "title": "The Night Lands",
        "season": 2,
        "episode": 2,
        "runtime": 54,
        "directed_by": "Alan Taylor",
        "createdAt": "2019-04-24T14:37:51.763Z",
        "updatedAt": "2019-04-24T14:37:51.763Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Brienne of Tarth",
            "Margaery Tyrell",
            "Colen of Greenpools",
            "Gerald",
            "Amory Lorch",
            "Polliver"
        ],
        "deaths": [
            "Yoren",
            "Lommy Greenhands"
        ],
        "places": [
            "At Craster's Keep",
            "At Winterfell",
            "In the Stormlands",
            "In the Iron Islands",
            "In King's Landing",
            "In the Riverlands",
            "Recap",
            "First",
            "Deaths",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a26",
        "title": "What Is Dead May Never Die",
        "season": 2,
        "episode": 3,
        "runtime": 53,
        "directed_by": "Alik Sakharov",
        "createdAt": "2019-04-24T14:37:51.763Z",
        "updatedAt": "2019-04-24T14:37:51.763Z",
        "__v": 0
    },
    {
        "written_by": [
            "Vanessa Taylor"
        ],
        "characters": [
            "Rennick",
            "Lannister guardsman",
            "Roose Bolton",
            "Talisa Maegyr",
            "The Tickler",
            "Weasel",
            "Tortured prisoner",
            "Spice King",
            "Pyat Pree",
            "Silk King",
            "Xaro Xhoan Daxos",
            "Copper King"
        ],
        "deaths": [
            "Rennick",
            "Lannister guardsman",
            "Tortured prisoner",
            "Stafford Lannister"
        ],
        "places": [
            "At Oxcross",
            "At Harrenhal",
            "In King's Landing",
            "In the Stormlands",
            "In Qarth",
            "First",
            "Deaths",
            "Cast Notes",
            "Video"
        ],
        "_id": "5cc074bf04e71a0010b85a27",
        "title": "Garden of Bones",
        "season": 2,
        "episode": 4,
        "runtime": 51,
        "directed_by": "David Petrarca",
        "createdAt": "2019-04-24T14:37:51.764Z",
        "updatedAt": "2019-04-24T14:37:51.764Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Emmon Cuy",
            "Robar Royce",
            "Reginald Lannister",
            "Hallyne",
            "Lorren",
            "Drennan",
            "Dagmer",
            "Malakho",
            "Quaithe",
            "Qhorin Halfhand",
            "Harker",
            "Stonesnake",
            "Borba"
        ],
        "deaths": [
            "Renly Baratheon",
            "Emmon Cuy",
            "Robar Royce",
            "The Tickler"
        ],
        "places": [
            "In the Stormlands",
            "In King's Landing",
            "At Lordsport",
            "At Winterfell",
            "At Harrenhal",
            "At the Fist of the First Men",
            "In Qarth",
            "First",
            "Deaths",
            "Cast notes",
            "Promotional Videos"
        ],
        "_id": "5cc074bf04e71a0010b85a28",
        "title": "The Ghost of Harrenhal",
        "season": 2,
        "episode": 5,
        "runtime": 55,
        "directed_by": "David Petrarca",
        "createdAt": "2019-04-24T14:37:51.764Z",
        "updatedAt": "2019-04-24T14:37:51.764Z",
        "__v": 0
    },
    {
        "written_by": [
            "Vanessa Taylor"
        ],
        "characters": [
            "Farlen",
            "Palla",
            "High Septon",
            "Ygritte",
            "Jacks",
            "Quent"
        ],
        "deaths": [
            "Rodrik Cassel",
            "High Septon",
            "Aron Santagar",
            "Amory Lorch",
            "Drennan",
            "Irri",
            "Dothraki"
        ],
        "places": [
            "At Winterfell",
            "In the Westerlands",
            "At Harrenhal",
            "In King's Landing",
            "Beyond the Wall",
            "In Qarth",
            "First",
            "Deaths",
            "Cast notes",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a29",
        "title": "The Old Gods and the New",
        "season": 2,
        "episode": 6,
        "runtime": 54,
        "directed_by": "David Nutter",
        "createdAt": "2019-04-24T14:37:51.764Z",
        "updatedAt": "2019-04-24T14:37:51.764Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [],
        "deaths": [
            "Alton Lannister",
            "Torrhen Karstark",
            "the Thirteen",
            "Spice King",
            "Silk King",
            "Copper King",
            "Winterfell Shepherd",
            "Winterfell Shepherd",
            "Billy",
            "Jack"
        ],
        "places": [
            "At Winterfell",
            "At Harrenhal",
            "In King's Landing",
            "In the Westerlands",
            "Beyond the Wall",
            "In Qarth",
            "First Appearances",
            "Deaths",
            "Cast notes",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a2a",
        "title": "A Man Without Honor",
        "season": 2,
        "episode": 7,
        "runtime": 56,
        "directed_by": "David Nutter",
        "createdAt": "2019-04-24T14:37:51.764Z",
        "updatedAt": "2019-04-24T14:37:51.764Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Lord of Bones"
        ],
        "deaths": [
            "Borba",
            "Harker",
            "Stonesnake"
        ],
        "places": [
            "Beyond the Wall",
            "In Qarth",
            "At Winterfell",
            "In the Narrow Sea",
            "In King's Landing",
            "At Harrenhal",
            "In the Westerlands",
            "First",
            "Deaths",
            "Cast notes",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a2b",
        "title": "The Prince of Winterfell",
        "season": 2,
        "episode": 8,
        "runtime": 54,
        "directed_by": "Alan Taylor",
        "createdAt": "2019-04-24T14:37:51.765Z",
        "updatedAt": "2019-04-24T14:37:51.765Z",
        "__v": 0
    },
    {
        "written_by": [
            "George R.R. Martin"
        ],
        "characters": [
            "Boros Blount",
            "Imry Florent",
            "Baratheon Officer"
        ],
        "deaths": [
            "Matthos Seaworth",
            "Baratheon Officer",
            "Mandon Moore"
        ],
        "places": [
            "In King's Landing",
            "First",
            "Deaths",
            "Cast notes",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a2c",
        "title": "Blackwater",
        "season": 2,
        "episode": 9,
        "runtime": 55,
        "directed_by": "Neil Marshall",
        "createdAt": "2019-04-24T14:37:51.767Z",
        "updatedAt": "2019-04-24T14:37:51.767Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Gelmarr",
            "Stygg",
            "Rhaego",
            "Tom"
        ],
        "deaths": [
            "Tom",
            "Maester",
            "Pyat Pree",
            "Qhorin Halfhand",
            "Doreah",
            "Xaro Xhoan Daxos"
        ],
        "places": [
            "In King's Landing",
            "At Dragonstone",
            "In the Westerlands",
            "At Winterfell",
            "In the Riverlands",
            "In Qarth",
            "Beyond the Wall",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a2d",
        "title": "Valar Morghulis",
        "season": 2,
        "episode": 10,
        "runtime": 64,
        "directed_by": "Alan Taylor",
        "createdAt": "2019-04-24T14:37:51.767Z",
        "updatedAt": "2019-04-24T14:37:51.767Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Dongo",
            "Tormund Giantsbane",
            "Mance Rayder",
            "Mirelle",
            "Jaremy Mallister",
            "Qyburn",
            "Boat commander",
            "Margaery's handmaiden",
            "Orphan kid",
            "Kraznys mo Nakloz",
            "Missandei",
            "Unsullied",
            "Unidentified Warlock"
        ],
        "deaths": [
            "Jaremy Mallister"
        ],
        "places": [
            "Beyond the Wall",
            "In King's Landing",
            "At Dragonstone",
            "At Harrenhal",
            "In Slaver's Bay",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a2e",
        "title": "Valar Dohaeris",
        "season": 3,
        "episode": 1,
        "runtime": 55,
        "directed_by": "Daniel Minahan",
        "createdAt": "2019-04-24T14:37:51.767Z",
        "updatedAt": "2019-04-24T14:37:51.767Z",
        "__v": 0
    },
    {
        "written_by": [
            "Vanessa Taylor"
        ],
        "characters": [
            "Jojen Reed",
            "Riverrun traveller",
            "Master Torturer",
            "King's Landing tailor",
            "Olenna Tyrell",
            "Tyrell server",
            "Orell",
            "Meera Reed",
            "Thoros of Myr",
            "Anguy",
            "Brotherhood Member",
            "Ramsay Snow",
            "Locke"
        ],
        "deaths": [
            "Hoster Tully"
        ],
        "places": [
            "Beyond the Wall",
            "In the North",
            "At the Dreadfort",
            "In King's Landing",
            "In the Riverlands",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a2f",
        "title": "Dark Wings, Dark Words",
        "season": 3,
        "episode": 2,
        "runtime": 57,
        "directed_by": "Daniel Minahan",
        "createdAt": "2019-04-24T14:37:51.768Z",
        "updatedAt": "2019-04-24T14:37:51.768Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Hoster Tully",
            "Brynden \"The Blackfish\" Tully",
            "Edmure Tully",
            "Martyn Lannister",
            "Willem Lannister",
            "Karl Tanner",
            "Craster's wife",
            "Gilly's baby",
            "Tortured slave",
            "Greizhen mo Ullhor",
            "Genna",
            "Kayla"
        ],
        "deaths": [
            "Master Torturer"
        ],
        "places": [
            "In Astapor",
            "Beyond the Wall",
            "At Riverrun",
            "In King's Landing",
            "On Dragonstone",
            "In the North",
            "In the Riverlands",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a30",
        "title": "Walk of Punishment",
        "season": 3,
        "episode": 3,
        "runtime": 57,
        "directed_by": "David Benioff & D.B. Weiss",
        "createdAt": "2019-04-24T14:37:51.768Z",
        "updatedAt": "2019-04-24T14:37:51.768Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Sorcerer",
            "Bolton soldier",
            "Tyrell lady"
        ],
        "deaths": [
            "Bannen",
            "Craster",
            "Jeor Mormont",
            "Kraznys mo Nakloz",
            "Greizhen mo Ullhor"
        ],
        "places": [
            "In the Riverlands",
            "In King's Landing",
            "In the North",
            "Beyond the Wall",
            "In Astapor",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a31",
        "title": "And Now His Watch Is Ended",
        "season": 3,
        "episode": 4,
        "runtime": 57,
        "directed_by": "Alex Graves",
        "createdAt": "2019-04-24T14:37:51.768Z",
        "updatedAt": "2019-04-24T14:37:51.768Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Karstark lookout",
            "Petyr Baratheon",
            "Tommard Baratheon",
            "Edric Baratheon",
            "Shireen Baratheon",
            "Grey Worm",
            "Olyvar"
        ],
        "deaths": [
            "Beric Dondarrion",
            "Willem Lannister",
            "Martyn Lannister",
            "Karstark lookout",
            "Rickard Karstark"
        ],
        "places": [
            "Beyond the Wall",
            "In Slaver's Bay",
            "In the Riverlands",
            "At Dragonstone",
            "In King's Landing",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a32",
        "title": "Kissed by Fire",
        "season": 3,
        "episode": 5,
        "runtime": 57,
        "directed_by": "Alex Graves",
        "createdAt": "2019-04-24T14:37:51.769Z",
        "updatedAt": "2019-04-24T14:37:51.769Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Lothar Frey",
            "Black Walder Rivers"
        ],
        "deaths": [
            "Ros"
        ],
        "places": [
            "In King's Landing",
            "In the Riverlands",
            "In the North",
            "Beyond the Wall",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a33",
        "title": "The Climb",
        "season": 3,
        "episode": 6,
        "runtime": 57,
        "directed_by": "Alik Sakharov",
        "createdAt": "2019-04-24T14:37:51.769Z",
        "updatedAt": "2019-04-24T14:37:51.769Z",
        "__v": 0
    },
    {
        "written_by": [
            "George R.R. Martin"
        ],
        "characters": [
            "Razdal mo Eraz",
            "Myranda",
            "Violet",
            "Steelshanks",
            "Balon Swann"
        ],
        "deaths": [],
        "places": [
            "In the North",
            "In Yunkai",
            "On the Narrow Sea",
            "In the Riverlands",
            "In King's Landing",
            "At Harrenhal",
            "First",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a34",
        "title": "The Bear and the Maiden Fair",
        "season": 3,
        "episode": 7,
        "runtime": 57,
        "directed_by": "Michelle MacLaren",
        "createdAt": "2019-04-24T14:37:51.770Z",
        "updatedAt": "2019-04-24T14:37:51.770Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Daario Naharis",
            "Mero",
            "Prendahl na Ghezn",
            "High Septon"
        ],
        "deaths": [
            "Mero",
            "Prendahl na Ghezn",
            "White Walker"
        ],
        "places": [
            "In Yunkai",
            "Beyond the Wall",
            "In the Riverlands",
            "On Dragonstone",
            "In King's Landing",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a35",
        "title": "Second Sons",
        "season": 3,
        "episode": 8,
        "runtime": 57,
        "directed_by": "Michelle MacLaren",
        "createdAt": "2019-04-24T14:37:51.770Z",
        "updatedAt": "2019-04-24T14:37:51.770Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Walda Frey",
            "Arwaya Frey",
            "Derwa Frey",
            "Waldra Frey",
            "Janeya Frey",
            "Neyela Frey",
            "Serra Frey",
            "Sarra Frey",
            "Marianne Frey",
            "Freya Frey",
            "Merry Frey",
            "Shirei Frey",
            "Frey guard",
            "Hog farmer",
            "Old man",
            "Wendel Manderly",
            "Roslin Frey",
            "Drummer"
        ],
        "deaths": [
            "Old man",
            "Orell",
            "Talisa Stark",
            "Wendel Manderly",
            "Grey Wind",
            "Robb Stark",
            "Joyeuse Erenford",
            "Catelyn Stark"
        ],
        "places": [
            "In Yunkai",
            "At the Wall",
            "In the Gift",
            "In the Riverlands",
            "At the Twins",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a36",
        "title": "The Rains of Castamere",
        "season": 3,
        "episode": 9,
        "runtime": 57,
        "directed_by": "David Nutter",
        "createdAt": "2019-04-24T14:37:51.770Z",
        "updatedAt": "2019-04-24T14:37:51.770Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Frey soldier #1",
            "Frey soldier #2",
            "Desmond Crakehall",
            "Eldrick Sarsfield",
            "Night's Watchman",
            "Fruit vendor",
            "Yunkai'i slave #1",
            "Yunkai'i slave #2",
            "Yunkai'i slave #3",
            "Yunkai'i slave #4",
            "Yunkai'i slave #5"
        ],
        "deaths": [],
        "places": [
            "At the Twins",
            "In the North",
            "In the Iron Islands",
            "In the Riverlands",
            "In King's Landing",
            "At Dragonstone",
            "At the Wall",
            "In Yunkai",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a37",
        "title": "Mhysa",
        "season": 3,
        "episode": 10,
        "runtime": 63,
        "directed_by": "David Nutter",
        "createdAt": "2019-04-24T14:37:51.771Z",
        "updatedAt": "2019-04-24T14:37:51.771Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Oberyn Martell",
            "Ellaria Sand",
            "Morgan",
            "Blackmont",
            "Deziel Dalt",
            "Endrew Tarth",
            "Styr",
            "Thenn Warg",
            "Lowell"
        ],
        "deaths": [
            "Lowell",
            "Polliver"
        ],
        "places": [
            "In King's Landing",
            "In the North",
            "At Castle Black",
            "In the Riverlands",
            "In Slaver's Bay",
            "First",
            "Deaths",
            "Cast",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a38",
        "title": "Two Swords",
        "season": 4,
        "episode": 1,
        "runtime": 59,
        "directed_by": "David Benioff & D.B. Weiss",
        "createdAt": "2019-04-24T14:37:51.771Z",
        "updatedAt": "2019-04-24T14:37:51.771Z",
        "__v": 0
    },
    {
        "written_by": [
            "George R.R. Martin"
        ],
        "characters": [
            "Tansy",
            "Axell Florent",
            "Walda Bolton",
            "Mace Tyrell",
            "Dwarf 1",
            "Dwarf 2",
            "Dwarf 3",
            "Dwarf 4",
            "Dwarf 5"
        ],
        "deaths": [
            "Tansy",
            "Axell Florent",
            "Joffrey Baratheon"
        ],
        "places": [
            "At Dragonstone",
            "At the Dreadfort",
            "Beyond the Wall",
            "At King's Landing",
            "First",
            "Deaths",
            "Cast",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a39",
        "title": "The Lion and the Rose",
        "season": 4,
        "episode": 2,
        "runtime": 53,
        "directed_by": "Alex Graves",
        "createdAt": "2019-04-24T14:37:51.771Z",
        "updatedAt": "2019-04-24T14:37:51.771Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Farmer",
            "Sally",
            "Mole's Town whore",
            "Mole's Town madam",
            "Whore",
            "Olly",
            "Guymon",
            "Olly's mother",
            "Oznak zo Pahl",
            "Hizdahr zo Loraq",
            "Hizdahr zo Loraq's manservant",
            "Slave master",
            "Slave master",
            "Slave",
            "Slave master"
        ],
        "deaths": [
            "Dontos Hollard",
            "Guymon",
            "Olly's mother",
            "Oznak zo Pahl"
        ],
        "places": [
            "At King's Landing",
            "In the Riverlands",
            "At Dragonstone",
            "At the Wall and the North",
            "Outside Meereen",
            "First",
            "Deaths",
            "Cast",
            "The Jaime/Cersei sex scene in the Great Sept"
        ],
        "_id": "5cc074bf04e71a0010b85a3a",
        "title": "Breaker of Chains",
        "season": 4,
        "episode": 3,
        "runtime": 57,
        "directed_by": "Alex Graves",
        "createdAt": "2019-04-24T14:37:51.772Z",
        "updatedAt": "2019-04-24T14:37:51.772Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Ser Pounce",
            "Morag",
            "Craster's last son",
            "White Walker",
            "Night King",
            "Mossador",
            "Sissy"
        ],
        "deaths": [],
        "places": [
            "In Meereen",
            "At the Wall",
            "At King's Landing",
            "En route to the Vale",
            "Beyond the Wall",
            "In the Lands of Always Winter",
            "First",
            "Deaths",
            "Cast",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a3b",
        "title": "Oathkeeper",
        "season": 4,
        "episode": 4,
        "runtime": 56,
        "directed_by": "Michelle MacLaren",
        "createdAt": "2019-04-24T14:37:51.772Z",
        "updatedAt": "2019-04-24T14:37:51.772Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Donnel Waynwood"
        ],
        "deaths": [
            "Mutineers",
            "Karl",
            "Rast",
            "Black Brothers",
            "Locke"
        ],
        "places": [
            "In Meereen",
            "At King's Landing",
            "In the Riverlands",
            "In the Vale of Arryn",
            "Beyond the Wall",
            "First",
            "Deaths",
            "Cast",
            "Image Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a3c",
        "title": "First of His Name",
        "season": 4,
        "episode": 5,
        "runtime": 54,
        "directed_by": "Michelle MacLaren",
        "createdAt": "2019-04-24T14:37:51.772Z",
        "updatedAt": "2019-04-24T14:37:51.772Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Tycho Nestoris",
            "Lhara",
            "Goatherd",
            "Goatherd's son"
        ],
        "deaths": [],
        "places": [
            "At the Dreadfort",
            "At King's Landing",
            "In Braavos",
            "In Meereen",
            "First",
            "Deaths",
            "Cast",
            "Image gallery",
            "Video gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a3d",
        "title": "The Laws of Gods and Men",
        "season": 4,
        "episode": 6,
        "runtime": 51,
        "directed_by": "Alik Sakharov",
        "createdAt": "2019-04-24T14:37:51.773Z",
        "updatedAt": "2019-04-24T14:37:51.773Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Dying man"
        ],
        "deaths": [
            "Dying man",
            "Biter",
            "Rorge",
            "Lysa Arryn"
        ],
        "places": [
            "At King's Landing",
            "In Meereen",
            "At Dragonstone",
            "At Castle Black",
            "In the Riverlands",
            "At the Eyrie",
            "First",
            "Deaths",
            "Cast",
            "Image Gallery",
            "Video gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a3e",
        "title": "Mockingbird",
        "season": 4,
        "episode": 7,
        "runtime": 52,
        "directed_by": "Alik Sakharov",
        "createdAt": "2019-04-24T14:37:51.773Z",
        "updatedAt": "2019-04-24T14:37:51.773Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Kegs",
            "Black Jack Bulwer",
            "Mully",
            "Ralf Kenning",
            "Adrack Humble",
            "Yohn Royce",
            "Anya Waynwood",
            "Vance Corbray",
            "Daemon Sand"
        ],
        "deaths": [
            "Kegs",
            "Black Jack Bulwer",
            "Mully",
            "Mole's Town whore",
            "Ralf Kenning",
            "Adrack Humble",
            "Oberyn Martell"
        ],
        "places": [
            "In the North",
            "At the Wall",
            "In Meereen",
            "In the Vale of Arryn",
            "At King's Landing",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a3f",
        "title": "The Mountain and the Viper",
        "season": 4,
        "episode": 8,
        "runtime": 53,
        "directed_by": "Alex Graves",
        "createdAt": "2019-04-24T14:37:51.774Z",
        "updatedAt": "2019-04-24T14:37:51.774Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Mag Mar Tun Doh Weg",
            "Cooper",
            "Donnel Hill",
            "Hobb",
            "Smitty"
        ],
        "deaths": [
            "Dongo",
            "Smitty",
            "Pypar",
            "Thenn Warg",
            "Styr",
            "Ygritte",
            "Mag Mar Tun Doh Weg",
            "Grenn",
            "Cooper",
            "Donnel Hill"
        ],
        "places": [
            "At the Wall",
            "First",
            "Deaths",
            "Cast notes",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a40",
        "title": "The Watchers on the Wall",
        "season": 4,
        "episode": 9,
        "runtime": 51,
        "directed_by": "Neil Marshall",
        "createdAt": "2019-04-24T14:37:51.774Z",
        "updatedAt": "2019-04-24T14:37:51.774Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Kullback",
            "Fennesz",
            "Goatherd",
            "Zalla",
            "Leaf",
            "Three-Eyed Raven",
            "Ternesio Terys",
            "Child of the Forest"
        ],
        "deaths": [
            "Zalla",
            "Jojen Reed",
            "Shae",
            "Tywin Lannister"
        ],
        "places": [
            "At the Wall, and Beyond",
            "In Meereen",
            "In King's Landing",
            "In the Vale of Arryn",
            "First",
            "Deaths",
            "Cast",
            "Tywin and Tyrion's closing scene",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a41",
        "title": "The Children",
        "season": 4,
        "episode": 10,
        "runtime": 66,
        "directed_by": "Alex Graves",
        "createdAt": "2019-04-24T14:37:51.775Z",
        "updatedAt": "2019-04-24T14:37:51.775Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Melara Hetherspoon",
            "Maggy",
            "White Rat",
            "Vala",
            "Bowen Marsh",
            "Samwell Stone"
        ],
        "deaths": [
            "White Rat",
            "Mance Rayder"
        ],
        "places": [
            "Prologue - about 25 years ago, In the Westerlands",
            "In King's Landing",
            "In Pentos",
            "In Meereen",
            "In the Vale",
            "At the Wall",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a42",
        "title": "The Wars To Come",
        "season": 5,
        "episode": 1,
        "runtime": 53,
        "directed_by": "Michael Slovis",
        "createdAt": "2019-04-24T14:37:51.775Z",
        "updatedAt": "2019-04-24T14:37:51.775Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Areo Hotah",
            "Denys Mallister",
            "Doran Martell",
            "Trystane Martell",
            "Lollys Stokeworth"
        ],
        "deaths": [
            "Dwarf",
            "Son of the Harpy",
            "Mossador"
        ],
        "places": [
            "In Braavos",
            "In the Flatlands",
            "In King's Landing and the Crownlands",
            "In Dorne",
            "In the Vale",
            "In Meereen",
            "At the Wall",
            "First",
            "Deaths",
            "Cast",
            "Image Gallery",
            "Video Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a43",
        "title": "The House of Black and White",
        "season": 5,
        "episode": 2,
        "runtime": 56,
        "directed_by": "Michael Slovis",
        "createdAt": "2019-04-24T14:37:51.775Z",
        "updatedAt": "2019-04-24T14:37:51.775Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Medger Cerwyn",
            "Waif",
            "High Sparrow",
            "Red Priestess",
            "Clea"
        ],
        "deaths": [
            "Despondent man",
            "Medger Cerwyn",
            "Janos Slynt"
        ],
        "places": [
            "In King's Landing",
            "In the North",
            "At the Wall",
            "In Braavos",
            "In Volantis",
            "First",
            "Deaths",
            "Cast",
            "Tommen's age in the TV continuity",
            "Sansa Stark's storyline",
            "Image Gallery"
        ],
        "_id": "5cc074bf04e71a0010b85a44",
        "title": "High Sparrow",
        "season": 5,
        "episode": 3,
        "runtime": 60,
        "directed_by": "Mark Mylod",
        "createdAt": "2019-04-24T14:37:51.776Z",
        "updatedAt": "2019-04-24T14:37:51.776Z",
        "__v": 0
    },
    {
        "written_by": [
            "Dave Hill"
        ],
        "characters": [
            "Boake",
            "Merchant captain",
            "Lead Dornish Guard",
            "Obara Sand",
            "Nymeria Sand",
            "Tyene Sand"
        ],
        "deaths": [
            "Lead Dornish Guard",
            "Merchant captain",
            "Barristan Selmy"
        ],
        "places": [
            "In King's Landing",
            "In Dorne",
            "On the Summer Sea",
            "At the Wall",
            "At Winterfell",
            "In Meereen",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a45",
        "title": "Sons of the Harpy",
        "season": 5,
        "episode": 4,
        "runtime": 51,
        "directed_by": "Mark Mylod",
        "createdAt": "2019-04-24T14:37:51.776Z",
        "updatedAt": "2019-04-24T14:37:51.776Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Stone men",
            "Eaton",
            "Elboneno"
        ],
        "deaths": [
            "Eaton"
        ],
        "places": [
            "In Meereen",
            "At the Wall",
            "In the North",
            "Old Valyria",
            "First",
            "Deaths",
            "Cast"
        ],
        "_id": "5cc074bf04e71a0010b85a46",
        "title": "Kill the Boy",
        "season": 5,
        "episode": 5,
        "runtime": 57,
        "directed_by": "Jeremy Podeswa",
        "createdAt": "2019-04-24T14:37:51.777Z",
        "updatedAt": "2019-04-24T14:37:51.777Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Joss",
            "Ghita",
            "Malko"
        ],
        "deaths": [
            "Ghita"
        ],
        "places": [
            "In Braavos",
            "In Slaver's Bay",
            "In Dorne",
            "In King's Landing",
            "In Winterfell",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "The Sand Snakes fight scene",
            "Sansa's wedding night scene with Ramsay"
        ],
        "_id": "5cc074bf04e71a0010b85a47",
        "title": "Unbowed, Unbent, Unbroken",
        "season": 5,
        "episode": 6,
        "runtime": 54,
        "directed_by": "Jeremy Podeswa",
        "createdAt": "2019-04-24T14:37:51.777Z",
        "updatedAt": "2019-04-24T14:37:51.777Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Brant",
            "Derek",
            "Arryk",
            "Erryk",
            "Yezzan zo Qaggaz",
            "Unella",
            "Moelle",
            "Scolera"
        ],
        "deaths": [
            "Aemon",
            "Old woman"
        ],
        "places": [
            "At the Wall",
            "In the North",
            "In Dorne",
            "In King's Landing",
            "In Meereen",
            "First",
            "Deaths",
            "Cast",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a48",
        "title": "The Gift",
        "season": 5,
        "episode": 7,
        "runtime": 59,
        "directed_by": "Miguel Sapochnik",
        "createdAt": "2019-04-24T14:37:51.778Z",
        "updatedAt": "2019-04-24T14:37:51.778Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Thin Man",
            "Karsi",
            "Loboda",
            "Wun Wun",
            "Duncan Liddle",
            "White Walker",
            "Johnna",
            "Willa",
            "Dim Dalba"
        ],
        "deaths": [
            "Lord of Bones",
            "Loboda",
            "White Walker",
            "Karsi"
        ],
        "places": [
            "In Meereen",
            "In Braavos",
            "In King's Landing",
            "In Winterfell",
            "At the Wall",
            "At Hardhome",
            "First",
            "Deaths",
            "Cast",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a49",
        "title": "Hardhome",
        "season": 5,
        "episode": 8,
        "runtime": 60,
        "directed_by": "Miguel Sapochnik",
        "createdAt": "2019-04-24T14:37:51.778Z",
        "updatedAt": "2019-04-24T14:37:51.778Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Brusco",
            "Braavosi madam",
            "Brea",
            "Anara",
            "Aya"
        ],
        "deaths": [
            "Shireen Baratheon",
            "Dothraki pit fighter",
            "Norvoshi pit fighter",
            "Pit fighter",
            "Water Dancer",
            "Meereenese Champion",
            "Hizdahr zo Loraq"
        ],
        "places": [
            "At the Wall",
            "In the North",
            "In Dorne",
            "In Braavos",
            "In Meereen",
            "First",
            "Deaths",
            "Cast",
            "Cast notes"
        ],
        "_id": "5cc074bf04e71a0010b85a4a",
        "title": "The Dance of Dragons",
        "season": 5,
        "episode": 9,
        "runtime": 53,
        "directed_by": "David Nutter",
        "createdAt": "2019-04-24T14:37:51.779Z",
        "updatedAt": "2019-04-24T14:37:51.779Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Gordy",
            "Simpson"
        ],
        "deaths": [
            "Selyse Baratheon",
            "Baratheon General",
            "Gordy",
            "Simpson",
            "Stannis Baratheon",
            "Myranda",
            "Meryn Trant",
            "Myrcella Baratheon",
            "Jon Snow"
        ],
        "places": [
            "In the North",
            "In Braavos",
            "In Meereen",
            "In the Dothraki Sea",
            "In Dorne",
            "In King's Landing",
            "At The Wall",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "Cersei's naked walk of atonement",
            "The Stannis storyline in the North",
            "Jon Snow's fate",
            "Catching up with the books"
        ],
        "_id": "5cc074bf04e71a0010b85a4b",
        "title": "Mother's Mercy",
        "season": 5,
        "episode": 10,
        "runtime": 61,
        "directed_by": "David Nutter",
        "createdAt": "2019-04-24T14:37:51.779Z",
        "updatedAt": "2019-04-24T14:37:51.779Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Maester",
            "Maester",
            "Aggo",
            "Qhono",
            "Khal",
            "Bolton Officer",
            "Khal Moro's 1st wife",
            "Khal Moro's 2nd wife",
            "Zanrush"
        ],
        "deaths": [
            "Bolton Officer",
            "Areo Hotah",
            "Doran Martell",
            "Caleotte",
            "Trystane Martell"
        ],
        "places": [
            "In the North",
            "In Braavos",
            "In Meereen",
            "In the Dothraki Sea",
            "In Dorne",
            "In King's Landing",
            "At the Wall",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "Mutiny at Castle Black - books versus TV series",
            "Dorne",
            "Catching up with the novels in Season 6"
        ],
        "_id": "5cc074bf04e71a0010b85a4c",
        "title": "The Red Woman",
        "season": 6,
        "episode": 1,
        "runtime": 50,
        "directed_by": "Jeremy Podeswa",
        "createdAt": "2019-04-24T14:37:51.780Z",
        "updatedAt": "2019-04-24T14:37:51.780Z",
        "__v": 0
    },
    {
        "written_by": [
            "Dave Hill"
        ],
        "characters": [
            "King's Landing boaster",
            "Lyanna Stark",
            "Harald Karstark",
            "Newborn Bolton",
            "Euron Greyjoy",
            "Aeron Greyjoy"
        ],
        "deaths": [
            "Roose Bolton",
            "Walda Bolton",
            "Newborn Bolton",
            "Balon Greyjoy",
            "King's Landing boaster"
        ],
        "places": [
            "Beyond the Wall",
            "At King's Landing",
            "In Meereen",
            "In Braavos",
            "In the North",
            "In the Iron Islands",
            "At the Wall",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "The Mutiny at Castle Black"
        ],
        "_id": "5cc074bf04e71a0010b85a4d",
        "title": "Home",
        "season": 6,
        "episode": 2,
        "runtime": 54,
        "directed_by": "Jeremy Podeswa",
        "createdAt": "2019-04-24T14:37:51.780Z",
        "updatedAt": "2019-04-24T14:37:51.780Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Arthur Dayne",
            "Gerold Hightower",
            "Howland Reed",
            "Smalljon Umber",
            "High Priestess of the Dosh Khaleen",
            "Ornela"
        ],
        "deaths": [
            "Arthur Dayne",
            "Gerold Hightower",
            "Greatjon Umber",
            "Shaggydog",
            "Bowen Marsh",
            "Othell Yarwyck",
            "Alliser Thorne",
            "Olly"
        ],
        "places": [
            "At the Wall",
            "In the Narrow Sea",
            "Beyond the Wall",
            "At King's Landing",
            "In Meereen",
            "In Vaes Dothrak",
            "In Braavos",
            "At Winterfell",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "Mutiny at Castle Black: Conclusion",
            "Gilly's baby and the TV timeline",
            "Heraldry"
        ],
        "_id": "5cc074bf04e71a0010b85a4e",
        "title": "Oathbreaker",
        "season": 6,
        "episode": 3,
        "runtime": 53,
        "directed_by": "Daniel Sackheim",
        "createdAt": "2019-04-24T14:37:51.781Z",
        "updatedAt": "2019-04-24T14:37:51.781Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Belicho Paenymion",
            "Ash",
            "Kesh",
            "Iggo",
            "Rhalko",
            "Forzho",
            "Brozho",
            "Qorro"
        ],
        "deaths": [
            "Iggo",
            "Akho",
            "Osha",
            "Rhalko",
            "Rhalko",
            "Brozho",
            "Qorro",
            "Forzho",
            "Moro"
        ],
        "places": [
            "In King's Landing",
            "At the Wall",
            "At Runestone",
            "In Winterfell",
            "At Pyke",
            "In Meereen",
            "In Vaes Dothrak",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "The Bastard Letter"
        ],
        "_id": "5cc074bf04e71a0010b85a4f",
        "title": "Book of the Stranger",
        "season": 6,
        "episode": 4,
        "runtime": 59,
        "directed_by": "Daniel Sackheim",
        "createdAt": "2019-04-24T14:37:51.782Z",
        "updatedAt": "2019-04-24T14:37:51.782Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Izembaro",
            "Clarenzo",
            "Lady Crane",
            "Camello",
            "Bobono",
            "Bianca",
            "Kinvara",
            "Rickard Stark"
        ],
        "deaths": [
            "White Walker",
            "Summer",
            "Three-Eyed Raven",
            "Leaf",
            "Hodor"
        ],
        "places": [
            "At the Wall",
            "In Braavos",
            "In Vaes Dothrak",
            "In Meereen",
            "On the Iron Islands",
            "Beyond the Wall",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "Bran Stark's storyline and the White Walkers",
            "Jon, Sansa, and the War for the North",
            "Brynden Tully and the Riverlands",
            "Littlefinger's travels",
            "At Castle Black",
            "The Iron Islands' Kingsmoot",
            "Arya in Braavos, and The Bloody Hand",
            "Daenerys and Meereen"
        ],
        "_id": "5cc074bf04e71a0010b85a50",
        "title": "The Door",
        "season": 6,
        "episode": 5,
        "runtime": 57,
        "directed_by": "Jack Bender",
        "createdAt": "2019-04-24T14:37:51.782Z",
        "updatedAt": "2019-04-24T14:37:51.782Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Aerys II Targaryen",
            "Melessa Tarly",
            "Talla Tarly",
            "Dickon Tarly",
            "Randyll Tarly",
            "Tyrell bannerman",
            "Kitty Frey"
        ],
        "deaths": [
            "Aerys II Targaryen"
        ],
        "places": [
            "Beyond the Wall",
            "At Horn Hill",
            "In King's Landing",
            "In Braavos",
            "At the Twins",
            "In the Dothraki Sea",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "Bran and Benjen Stark",
            "In the Reach",
            "In the Riverlands",
            "In King's Landing",
            "Arya in Braavos",
            "Daenerys and the Dothraki"
        ],
        "_id": "5cc074bf04e71a0010b85a51",
        "title": "Blood of My Blood",
        "season": 6,
        "episode": 6,
        "runtime": 52,
        "directed_by": "Jack Bender",
        "createdAt": "2019-04-24T14:37:51.783Z",
        "updatedAt": "2019-04-24T14:37:51.783Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Ray",
            "Lyanna Mormont",
            "Bear Island maester",
            "Robett Glover",
            "Lem",
            "Morgan",
            "Gatins"
        ],
        "deaths": [
            "Maege Mormont",
            "Ray"
        ],
        "places": [
            "In the Riverlands",
            "In King's Landing",
            "In the North",
            "At Riverrun",
            "In Volantis",
            "In Braavos",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "Sandor Clegane",
            "At Riverrun",
            "In King's Landing",
            "In the North",
            "In the Free Cities",
            "Timeline issues"
        ],
        "_id": "5cc074bf04e71a0010b85a52",
        "title": "The Broken Man",
        "season": 6,
        "episode": 7,
        "runtime": 51,
        "directed_by": "Mark Mylod",
        "createdAt": "2019-04-24T14:37:51.783Z",
        "updatedAt": "2019-04-24T14:37:51.783Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Steve",
            "Riddell",
            "Red Priestess",
            "Lannister soldier",
            "Tully Bannerman"
        ],
        "deaths": [
            "Steve",
            "Riddell",
            "Gatins",
            "Morgan",
            "Brynden Tully",
            "Lem Lemoncloak",
            "Lady Crane",
            "Waif",
            "Faith Militant"
        ],
        "places": [
            "In Braavos",
            "In the Riverlands",
            "In Meereen",
            "In King's Landing",
            "At Riverrun",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "Callbacks",
            "Riverrun",
            "Sandor Clegane",
            "King's Landing",
            "Meereen",
            "Braavos",
            "Timeline issues"
        ],
        "_id": "5cc074bf04e71a0010b85a53",
        "title": "No One",
        "season": 6,
        "episode": 8,
        "runtime": 59,
        "directed_by": "Mark Mylod",
        "createdAt": "2019-04-24T14:37:51.783Z",
        "updatedAt": "2019-04-24T14:37:51.783Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Bolton general",
            "Captain of the Bolton archers"
        ],
        "deaths": [
            "Belicho Paenymion",
            "Razdal mo Eraz",
            "Rickon Stark",
            "Jon Umber",
            "Wun Weg Wun Dar Wun",
            "Ramsay Bolton"
        ],
        "places": [
            "In Meereen",
            "In the North",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "The Lost Original Ending of the Battle of the Bastards",
            "In the North",
            "In Meereen"
        ],
        "_id": "5cc074bf04e71a0010b85a54",
        "title": "Battle of the Bastards",
        "season": 6,
        "episode": 9,
        "runtime": 60,
        "directed_by": "Miguel Sapochnik",
        "createdAt": "2019-04-24T14:37:51.784Z",
        "updatedAt": "2019-04-24T14:37:51.784Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Citadel maester",
            "Cley Cerwyn",
            "Wyman Manderly"
        ],
        "deaths": [
            "Pycelle",
            "Lancel Lannister",
            "High Sparrow",
            "Boake",
            "Loras Tyrell",
            "Margaery Tyrell",
            "Mace Tyrell",
            "Kevan Lannister",
            "Tommen Baratheon",
            "Walder Rivers",
            "Lothar Frey",
            "Walder Frey"
        ],
        "places": [
            "At the Twins",
            "In King's Landing",
            "In Oldtown",
            "Beyond the Wall",
            "At Winterfell",
            "In Dorne",
            "In Meereen",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "Beyond the Wall",
            "In King's Landing",
            "In the North",
            "In the Riverlands",
            "In the Reach",
            "In Dorne",
            "In Meereen"
        ],
        "_id": "5cc074bf04e71a0010b85a55",
        "title": "The Winds of Winter",
        "season": 6,
        "episode": 10,
        "runtime": 68,
        "directed_by": "Miguel Sapochnik",
        "createdAt": "2019-04-24T14:37:51.784Z",
        "updatedAt": "2019-04-24T14:37:51.784Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Ned Umber",
            "Alys Karstark",
            "Archmaester"
        ],
        "deaths": [
            "Harald Karstark",
            "Sally",
            "Sally's father",
            "Frey"
        ],
        "places": [
            "In the Riverlands",
            "At Winterfell",
            "At the Wall",
            "At King's Landing",
            "In Oldtown",
            "On Dragonstone",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "At the Wall",
            "At Winterfell",
            "In King's Landing",
            "In the Riverlands",
            "In Oldtown",
            "At Dragonstone",
            "The Abandonment of Dragonstone"
        ],
        "_id": "5cc074bf04e71a0010b85a56",
        "title": "Dragonstone",
        "season": 7,
        "episode": 1,
        "runtime": 59,
        "directed_by": "Jeremy Podeswa",
        "createdAt": "2019-04-24T14:37:51.785Z",
        "updatedAt": "2019-04-24T14:37:51.785Z",
        "__v": 0
    },
    {
        "written_by": [
            "Bryan Cogman"
        ],
        "characters": [
            "Harrag"
        ],
        "deaths": [
            "Obara Sand",
            "Nymeria Sand",
            "Ironborn"
        ],
        "places": [
            "On Dragonstone",
            "In King's Landing",
            "At Winterfell",
            "In the Riverlands",
            "In Oldtown",
            "On the Narrow Sea",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "At Dragonstone",
            "In King's Landing",
            "In the North",
            "In the Riverlands",
            "At Oldtown",
            "On the Narrow Sea",
            "Missandei/Grey Worm sex scene"
        ],
        "_id": "5cc074bf04e71a0010b85a57",
        "title": "Stormborn",
        "season": 7,
        "episode": 2,
        "runtime": 59,
        "directed_by": "Mark Mylod",
        "createdAt": "2019-04-24T14:37:51.785Z",
        "updatedAt": "2019-04-24T14:37:51.785Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Stark soldier"
        ],
        "deaths": [
            "Tyene Sand",
            "Olenna Tyrell",
            "Unsullied",
            "Lannister",
            "Tyrell"
        ],
        "places": [
            "In King's Landing",
            "At Winterfell",
            "In Oldtown",
            "On Dragonstone",
            "At Casterly Rock",
            "At Highgarden",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "In King's Landing",
            "At Winterfell",
            "At Dragonstone",
            "In the Westerlands",
            "In the Reach"
        ],
        "_id": "5cc074bf04e71a0010b85a58",
        "title": "The Queen's Justice",
        "season": 7,
        "episode": 3,
        "runtime": 63,
        "directed_by": "Mark Mylod",
        "createdAt": "2019-04-24T14:37:51.786Z",
        "updatedAt": "2019-04-24T14:37:51.786Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "Henk",
            "Koner"
        ],
        "deaths": [
            "Lannister",
            "Tarly",
            "Dothraki",
            "Archie",
            "William"
        ],
        "places": [
            "At Winterfell",
            "In King's Landing",
            "On Dragonstone",
            "In the Reach",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "In the North",
            "In King's Landing",
            "At Dragonstone",
            "In the Reach"
        ],
        "_id": "5cc074bf04e71a0010b85a59",
        "title": "The Spoils of War",
        "season": 7,
        "episode": 4,
        "runtime": 50,
        "directed_by": "Matt Shakman",
        "createdAt": "2019-04-24T14:37:51.786Z",
        "updatedAt": "2019-04-24T14:37:51.786Z",
        "__v": 0
    },
    {
        "written_by": [
            "Dave Hill"
        ],
        "characters": [
            "Gold Cloak #1",
            "Gold Cloak #2",
            "Sandhu",
            "Unnamed Archmaester"
        ],
        "deaths": [
            "Randyll Tarly",
            "Dickon Tarly"
        ],
        "places": [
            "In the Reach",
            "At Winterfell",
            "At Oldtown",
            "At Dragonstone",
            "In King's Landing",
            "At Eastwatch-by-the-Sea",
            "First",
            "Deaths",
            "Cast",
            "Cast notes",
            "General",
            "In the Reach",
            "In the North",
            "In Oldtown",
            "At Dragonstone",
            "In King's Landing",
            "At Eastwatch"
        ],
        "_id": "5cc074bf04e71a0010b85a5a",
        "title": "Eastwatch",
        "season": 7,
        "episode": 5,
        "runtime": 59,
        "directed_by": "Matt Shakman",
        "createdAt": "2019-04-24T14:37:51.793Z",
        "updatedAt": "2019-04-24T14:37:51.793Z",
        "__v": 0
    },
    {
        "written_by": [
            "David Benioff",
            "D.B. Weiss"
        ],
        "characters": [
            "White Walker 1 (Beyond the Wall)",
            "Captured wight",
            "White Walker 2 (Beyond the Wall)"
        ],
        "deaths": [
            "Thoros",
            "Viserion",
            "Benjen Stark",
            "White Walker",
            "wildlings",
            "Wights"
        ],
        "places": [
            "At Winterfell",
            "The Wight Hunt",
            "Cast",
            "Cast notes",
            "First",
            "Deaths",
            "General",
            "Dragons traveling to the Wall",
            "On Dragonstone",
            "Winterfell",
            "The Wight Hunt - Jon's group heading north, and back",
            "The Wight Hunt – the battle"
        ],
        "_id": "5cc074bf04e71a0010b85a5b",
        "title": "Beyond the Wall",
        "season": 7,
        "episode": 6,
        "runtime": 70,
        "directed_by": "Alan Taylor",
        "createdAt": "2019-04-24T14:37:51.793Z",
        "updatedAt": "2019-04-24T14:37:51.793Z",
        "__v": 0
    },
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
] 
1. A list of all songs with "Love" in the title.
1. All information about Petyr Baelish from the Game of Thrones books
    * https://api.got.show//api/book/characters/Petyr Baelish
    * {
    "titles": [
        "Master of coin (formerly)",
        "Lord Paramount of the Trident",
        "Lord of Harrenhal",
        "Lord Protector of the Eyrie and the Vale of Arryn"
    ],
    "spouse": [
        "Lady Lysa Arryn"
    ],
    "children": [],
    "allegiance": [
        "House Baelish of the Fingers",
        "House Baelish of Harrenhal"
    ],
    "books": [
        "A Game of Thrones",
        "A Clash of Kings",
        "A Storm of Swords",
        "A Feast for Crows",
        "A Dance with Dragons"
    ],
    "plod": 0,
    "longevity": [],
    "plodB": 0.10565567016601562,
    "plodC": 0,
    "longevityB": [
        0.8943443298339844,
        0.8906722068786621,
        0.8847671151161194,
        0.9008587002754211,
        0.8285247087478638,
        0.8089768886566162,
        0.7944252490997314,
        0.7488107085227966,
        0.6933803558349609,
        0.5944227576255798,
        0.5446178913116455,
        0.5648235082626343,
        0.47431549429893494,
        0.4863632321357727,
        0.4892047345638275,
        0.5015890002250671,
        0.4942215383052826,
        0.4417560398578644,
        0.3576783239841461,
        0.3454785943031311,
        0.39603832364082336
    ],
    "longevityC": [],
    "_id": "5cc08e61888dfb00103cdb6c",
    "name": "Petyr Baelish",
    "slug": "Petyr_Baelish",
    "gender": "male",
    "image": "https://awoiaf.westeros.org/thumb.php?f=Knowledge_is_power_by_robotdelespacio.jpg&width=300",
    "culture": "Valemen",
    "house": "House Baelish of the Fingers",
    "placeOfBirth": "the Fingers",
    "birth": 268,
    "alive": true,
    "createdAt": "2019-04-24T16:27:13.582Z",
    "updatedAt": "2019-04-24T16:27:13.582Z",
    "__v": 1,
    "longevityStartB": 300,
    "pagerank": {
        "title": "Petyr_Baelish",
        "rank": 832
    },
    "id": "5cc08e61888dfb00103cdb6c"
}
1. All the movies Leonardo Dicaprio has acted in
