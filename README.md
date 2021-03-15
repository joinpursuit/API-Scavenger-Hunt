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

``` 
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Ceyhan",
        "last": "Nebioğlu"
      },
      "location": {
        "street": {
          "number": 742,
          "name": "Abanoz Sk"
        },
        "city": "Isparta",
        "state": "Kastamonu",
        "country": "Turkey",
        "postcode": 46250,
        "coordinates": {
          "latitude": "76.0203",
          "longitude": "36.5557"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "ceyhan.nebioglu@example.com",
      "login": {
        "uuid": "3a721667-6511-4045-acf8-b97ba26599d0",
        "username": "orangepeacock635",
        "password": "zhan",
        "salt": "wgeasuOY",
        "md5": "90c36917c944a7f232e3620b2063f6f6",
        "sha1": "eebe1cb788b9aa220458034acfd058d55ad9e0db",
        "sha256": "8e126ed8d9f15677f62b6420e01e6388e547484cc391a6c2c052a16deb9511aa"
      },
      "dob": {
        "date": "1971-01-21T13:21:58.112Z",
        "age": 50
      },
      "registered": {
        "date": "2014-12-30T14:58:10.628Z",
        "age": 7
      },
      "phone": "(143)-668-0254",
      "cell": "(117)-082-5613",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/62.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Marilou",
        "last": "Thompson"
      },
      "location": {
        "street": {
          "number": 7791,
          "name": "Victoria Ave"
        },
        "city": "Deer Lake",
        "state": "Nova Scotia",
        "country": "Canada",
        "postcode": "M5D 8R9",
        "coordinates": {
          "latitude": "-50.9574",
          "longitude": "1.7136"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "marilou.thompson@example.com",
      "login": {
        "uuid": "732b1d48-a251-4ace-8fce-37aac6bb34f7",
        "username": "heavyladybug325",
        "password": "horndog",
        "salt": "PWyTSmt8",
        "md5": "9bee55d3555f7d345f29d30d59ad6204",
        "sha1": "9b53112211209ce8cc9859272e6ccdabf4c9e838",
        "sha256": "b715917cae6b6b1fb864741d344eee36e36e86718d07df69f3cee7a7a21c3763"
      },
      "dob": {
        "date": "1995-10-10T10:20:16.637Z",
        "age": 26
      },
      "registered": {
        "date": "2007-05-30T17:40:23.409Z",
        "age": 14
      },
      "phone": "898-710-7949",
      "cell": "324-632-7036",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Cindy",
        "last": "Brummer"
      },
      "location": {
        "street": {
          "number": 1882,
          "name": "Schützenstraße"
        },
        "city": "Creglingen",
        "state": "Brandenburg",
        "country": "Germany",
        "postcode": 35177,
        "coordinates": {
          "latitude": "-7.6890",
          "longitude": "-3.3668"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "cindy.brummer@example.com",
      "login": {
        "uuid": "4f43dfec-31bf-47f5-b7a5-3c16a782dbe4",
        "username": "goldenostrich992",
        "password": "kenny",
        "salt": "LzfObfIP",
        "md5": "9093fc38644698204d8714e6d5407d1c",
        "sha1": "03536a16d9c4233043f641b292bf40710b741381",
        "sha256": "f0e196036998bf9690ccb41a507397601ca4881222355935d3eb29e4d73e7d22"
      },
      "dob": {
        "date": "1948-05-11T08:11:37.993Z",
        "age": 73
      },
      "registered": {
        "date": "2003-09-04T02:05:04.105Z",
        "age": 18
      },
      "phone": "0101-9409614",
      "cell": "0171-4962450",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/80.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Sienna",
        "last": "Wiggen"
      },
      "location": {
        "street": {
          "number": 9530,
          "name": "Kvernveien"
        },
        "city": "Trofors",
        "state": "Bergen",
        "country": "Norway",
        "postcode": "9670",
        "coordinates": {
          "latitude": "16.7924",
          "longitude": "-114.6588"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "sienna.wiggen@example.com",
      "login": {
        "uuid": "15a3e234-961a-4019-a85a-f11d202e71ea",
        "username": "happyelephant512",
        "password": "media",
        "salt": "hjV9M6zy",
        "md5": "0cdfe0155f372281a0e4aec5240129a2",
        "sha1": "7d730115d14a91b923b2d1d8bda14067466e3096",
        "sha256": "f9da4d434c73cc6e4b0d1d4ff7d59e7cca40b2b2ef4d8325545182b97922e104"
      },
      "dob": {
        "date": "1992-07-13T19:46:12.422Z",
        "age": 29
      },
      "registered": {
        "date": "2002-11-26T02:45:56.251Z",
        "age": 19
      },
      "phone": "79801176",
      "cell": "44511374",
      "id": {
        "name": "FN",
        "value": "13079245628"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/38.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Lester",
        "last": "Chambers"
      },
      "location": {
        "street": {
          "number": 5069,
          "name": "E Little York Rd"
        },
        "city": "Orange",
        "state": "Australian Capital Territory",
        "country": "Australia",
        "postcode": 3920,
        "coordinates": {
          "latitude": "-60.2012",
          "longitude": "-21.0809"
        },
        "timezone": {
          "offset": "+4:30",
          "description": "Kabul"
        }
      },
      "email": "lester.chambers@example.com",
      "login": {
        "uuid": "26fa4790-cfdf-4d0f-bd18-22cf9e669647",
        "username": "sadswan697",
        "password": "ccccc",
        "salt": "ph95Mrso",
        "md5": "ff56f3cb4f2a13635fc6a523c442a43d",
        "sha1": "3734527a765922d1d6924457b5bfc1489bf1a0aa",
        "sha256": "3e7db28f7b2e8fa67fa8a1f0a37e25ed23cc9df2632d334eb4a65a5fdcaf9384"
      },
      "dob": {
        "date": "1953-03-20T18:36:50.032Z",
        "age": 68
      },
      "registered": {
        "date": "2009-09-19T19:54:24.831Z",
        "age": 12
      },
      "phone": "01-8837-7595",
      "cell": "0434-652-012",
      "id": {
        "name": "TFN",
        "value": "031247571"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/45.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/45.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Alexis",
        "last": "Harcourt"
      },
      "location": {
        "street": {
          "number": 1451,
          "name": "36th Ave"
        },
        "city": "Sherbrooke",
        "state": "Prince Edward Island",
        "country": "Canada",
        "postcode": "Z3J 3X4",
        "coordinates": {
          "latitude": "69.3201",
          "longitude": "-165.9388"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "alexis.harcourt@example.com",
      "login": {
        "uuid": "6ced122b-a668-4135-b71f-0592a83a1c31",
        "username": "happysnake874",
        "password": "mmmm",
        "salt": "DZ0UHCrf",
        "md5": "97fb0b1ed562368086fa345c53803072",
        "sha1": "20e43284ab901130020ed75e1806d7e792145c62",
        "sha256": "29b694b6c94cf79d66cc70d11a55c608e4f875124fc44b366bd9c70fef041c35"
      },
      "dob": {
        "date": "1970-06-14T18:30:05.837Z",
        "age": 51
      },
      "registered": {
        "date": "2007-10-11T04:48:48.989Z",
        "age": 14
      },
      "phone": "993-477-1454",
      "cell": "598-111-1547",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Clifton",
        "last": "Kuhn"
      },
      "location": {
        "street": {
          "number": 9186,
          "name": "N Stelling Rd"
        },
        "city": "Bernalillo",
        "state": "South Carolina",
        "country": "United States",
        "postcode": 92744,
        "coordinates": {
          "latitude": "85.0518",
          "longitude": "146.7227"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "clifton.kuhn@example.com",
      "login": {
        "uuid": "94433bda-2672-4dd5-bc9f-857a84123053",
        "username": "heavypanda240",
        "password": "truck1",
        "salt": "vRarsNym",
        "md5": "a30adbad633f03857a47994d0e854349",
        "sha1": "67c903b7c96e2cb77a54d4e1c62e560c2cca614e",
        "sha256": "450ec65e8b67a327edb4957d3b5187cdf4dd44455c9e105473468934f36943bb"
      },
      "dob": {
        "date": "1971-08-30T06:10:47.861Z",
        "age": 50
      },
      "registered": {
        "date": "2011-06-11T02:03:29.173Z",
        "age": 10
      },
      "phone": "(839)-102-1881",
      "cell": "(431)-659-4661",
      "id": {
        "name": "SSN",
        "value": "210-49-5364"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/9.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Laureen",
        "last": "Wekema"
      },
      "location": {
        "street": {
          "number": 6938,
          "name": "Hilversumsestraat"
        },
        "city": "Velpt",
        "state": "Limburg",
        "country": "Netherlands",
        "postcode": 15004,
        "coordinates": {
          "latitude": "-37.2470",
          "longitude": "-6.4540"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "laureen.wekema@example.com",
      "login": {
        "uuid": "b8c26101-6f21-4cbf-bdfb-874196dd759f",
        "username": "lazybear627",
        "password": "unreal",
        "salt": "7Is7lqoW",
        "md5": "787bf5ee3b0a5212d25035a34a191233",
        "sha1": "1bec150ccfd0759714fe5a9ba70b3ae0bb2e87ef",
        "sha256": "7c160315a7b650d844272cf6e5f2dd2133b79ed8c47e859aeecbfcb9763ffb8a"
      },
      "dob": {
        "date": "1980-07-12T15:36:43.067Z",
        "age": 41
      },
      "registered": {
        "date": "2005-06-13T20:30:03.537Z",
        "age": 16
      },
      "phone": "(515)-253-4361",
      "cell": "(965)-703-8200",
      "id": {
        "name": "BSN",
        "value": "29924956"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/24.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Jade",
        "last": "Patel"
      },
      "location": {
        "street": {
          "number": 1420,
          "name": "15th St"
        },
        "city": "Odessa",
        "state": "Manitoba",
        "country": "Canada",
        "postcode": "S1G 9F4",
        "coordinates": {
          "latitude": "82.8922",
          "longitude": "-68.0521"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "jade.patel@example.com",
      "login": {
        "uuid": "6cb36878-ee12-4228-bcf6-65e7f728de81",
        "username": "greenbutterfly673",
        "password": "xavier",
        "salt": "oHlFsiDX",
        "md5": "fad92842ab11a3d189b8d5cae82ead34",
        "sha1": "41a93082def2a439e1cafa26f4201c9a6f9797a1",
        "sha256": "0e4f0ab86d0ab3c39c0cdd95c14f3d78870c0da3bc3647d71c736d0b2c3fd901"
      },
      "dob": {
        "date": "1962-09-22T16:32:37.561Z",
        "age": 59
      },
      "registered": {
        "date": "2017-03-14T00:28:23.886Z",
        "age": 4
      },
      "phone": "617-956-7748",
      "cell": "249-492-3203",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/26.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Sophia",
        "last": "Singh"
      },
      "location": {
        "street": {
          "number": 8457,
          "name": "Balmoral St"
        },
        "city": "Killarney",
        "state": "Nova Scotia",
        "country": "Canada",
        "postcode": "J4H 5Y6",
        "coordinates": {
          "latitude": "53.6644",
          "longitude": "150.9770"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "sophia.singh@example.com",
      "login": {
        "uuid": "5b044a63-e7b2-4781-a5f3-142ed3652a8e",
        "username": "sadbear958",
        "password": "raiders1",
        "salt": "Z9sOsY0o",
        "md5": "8ae7970feaa40b4ea7279f54edf6d0f2",
        "sha1": "73372f29a68cbd4c885074f6e3066cc8164588d5",
        "sha256": "937cb09d9614bcd3764aa1edb4817e9287be9ef7bbfb27d803edd2f99a2ccbeb"
      },
      "dob": {
        "date": "1949-05-24T15:36:54.307Z",
        "age": 72
      },
      "registered": {
        "date": "2006-09-24T19:03:11.300Z",
        "age": 15
      },
      "phone": "223-448-7247",
      "cell": "058-932-3397",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/72.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Cooper"
      },
      "location": {
        "street": {
          "number": 9685,
          "name": "Brown Terrace"
        },
        "city": "Medford",
        "state": "Minnesota",
        "country": "United States",
        "postcode": 91704,
        "coordinates": {
          "latitude": "-7.9082",
          "longitude": "63.2863"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "jennie.cooper@example.com",
      "login": {
        "uuid": "a24216f8-5a6b-4c8f-8dbb-d70f84f243ce",
        "username": "whitedog337",
        "password": "wolfpack",
        "salt": "DtCGPysC",
        "md5": "d3e2f4a82605fbc16e519f2340a0eafb",
        "sha1": "d3092f691fad419fec0059621687dc1e1941faa1",
        "sha256": "233fb971473c5142a95b41a8f90862d316aece365c393bedd8c49fa97acfe3a9"
      },
      "dob": {
        "date": "1983-12-19T16:37:30.142Z",
        "age": 38
      },
      "registered": {
        "date": "2012-06-01T22:15:33.134Z",
        "age": 9
      },
      "phone": "(396)-802-3279",
      "cell": "(162)-526-4518",
      "id": {
        "name": "SSN",
        "value": "753-83-0039"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/55.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Regine",
        "last": "Buma"
      },
      "location": {
        "street": {
          "number": 7754,
          "name": "Henriettestraat"
        },
        "city": "Heukelom Nb",
        "state": "Gelderland",
        "country": "Netherlands",
        "postcode": 70060,
        "coordinates": {
          "latitude": "-3.3269",
          "longitude": "-174.6275"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "regine.buma@example.com",
      "login": {
        "uuid": "9a248394-8575-4a2f-b8b0-6d4014ef46f8",
        "username": "brownduck111",
        "password": "pokey",
        "salt": "fuakzeIs",
        "md5": "dc5cc4257d2ddcbba8dd88300c0977d2",
        "sha1": "16dfe6af4aab0267134249ccaaba8c6bb8371af0",
        "sha256": "ee92fe2d9b50917e307fbc41abc79827589fef1a359d2479e096cdbaccf95e49"
      },
      "dob": {
        "date": "1995-04-03T20:38:06.706Z",
        "age": 26
      },
      "registered": {
        "date": "2004-09-10T04:05:38.963Z",
        "age": 17
      },
      "phone": "(352)-125-5741",
      "cell": "(262)-790-9326",
      "id": {
        "name": "BSN",
        "value": "02524489"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/85.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/85.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/85.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ewen",
        "last": "Leroy"
      },
      "location": {
        "street": {
          "number": 2776,
          "name": "Place Paul-Duquaire"
        },
        "city": "Villeurbanne",
        "state": "Hautes-Pyrénées",
        "country": "France",
        "postcode": 13669,
        "coordinates": {
          "latitude": "24.5103",
          "longitude": "-131.9534"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "ewen.leroy@example.com",
      "login": {
        "uuid": "d8bfd20a-3538-4284-a7cf-61a5d4a2bf89",
        "username": "brownduck837",
        "password": "recon",
        "salt": "oMGBTz3T",
        "md5": "0ba26acab956fb6a46fdae042ef2a4c4",
        "sha1": "71569f79f046e3059aedd4edbac606376d680763",
        "sha256": "6600e94d93806f50a0277c3fa97032d49ef2ab635687de8747c74d36c6e12db7"
      },
      "dob": {
        "date": "1959-06-22T07:57:12.946Z",
        "age": 62
      },
      "registered": {
        "date": "2003-06-02T16:01:11.086Z",
        "age": 18
      },
      "phone": "05-57-98-40-94",
      "cell": "06-19-30-49-67",
      "id": {
        "name": "INSEE",
        "value": "1NNaN61688122 70"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Zoe",
        "last": "Ma"
      },
      "location": {
        "street": {
          "number": 4920,
          "name": "Duke St"
        },
        "city": "Cartwright",
        "state": "Ontario",
        "country": "Canada",
        "postcode": "Q1T 8K8",
        "coordinates": {
          "latitude": "53.9213",
          "longitude": "102.4331"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "zoe.ma@example.com",
      "login": {
        "uuid": "6d46f7f3-5414-4b33-b372-9ed8ad2773df",
        "username": "whitecat864",
        "password": "hamster",
        "salt": "IzG5s1Zl",
        "md5": "18765f395d061e2332f87b079eb2dd78",
        "sha1": "d1bdec47dc4f9654ce6de8c86d590dd816d8bf2f",
        "sha256": "a4e749d408bc1747556d32261d9bd159dadb7b38d2e2cc7f1841a42916bba13f"
      },
      "dob": {
        "date": "1985-07-25T16:35:11.393Z",
        "age": 36
      },
      "registered": {
        "date": "2018-08-03T13:47:01.349Z",
        "age": 3
      },
      "phone": "044-471-9485",
      "cell": "744-325-9301",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/78.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/78.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/78.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Maxime",
        "last": "Durand"
      },
      "location": {
        "street": {
          "number": 5581,
          "name": "Rue Louis-Blanqui"
        },
        "city": "Aix-En-Provence",
        "state": "Drôme",
        "country": "France",
        "postcode": 45973,
        "coordinates": {
          "latitude": "-37.5547",
          "longitude": "57.8861"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "maxime.durand@example.com",
      "login": {
        "uuid": "4df3bb0f-14b3-4367-bdc4-6b09ee5356fc",
        "username": "angryduck252",
        "password": "rainbow6",
        "salt": "SEKBXH0X",
        "md5": "ee55b7757bcd1bee05b4c94f98037645",
        "sha1": "f3cd6105547ee84b0424aa272d7fa21c653fd021",
        "sha256": "6a1ea17ad5fd063a81751990f41d1b55112d34644fb74f3ef677d603012f62b9"
      },
      "dob": {
        "date": "1984-11-24T02:30:37.101Z",
        "age": 37
      },
      "registered": {
        "date": "2019-03-11T21:05:55.678Z",
        "age": 2
      },
      "phone": "03-18-90-78-30",
      "cell": "06-08-02-00-01",
      "id": {
        "name": "INSEE",
        "value": "1NNaN12513569 62"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mademoiselle",
        "first": "Erna",
        "last": "Boyer"
      },
      "location": {
        "street": {
          "number": 2947,
          "name": "Esplanade du 9 Novembre 1989"
        },
        "city": "Effingen",
        "state": "Schaffhausen",
        "country": "Switzerland",
        "postcode": 7515,
        "coordinates": {
          "latitude": "-25.2838",
          "longitude": "-9.6655"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "erna.boyer@example.com",
      "login": {
        "uuid": "48eafc72-34f0-487e-b578-a647fe24b995",
        "username": "angrypanda725",
        "password": "wasser",
        "salt": "0rdruANC",
        "md5": "19d4ad1f297c16ef79c37bb958d0967f",
        "sha1": "fb3e17be616289745d00d6cdea58dca80b33d3b9",
        "sha256": "4eb4e35d82794208f16a79f968b77ca0dfef56e25ed60bcef44ce58a0612f6a5"
      },
      "dob": {
        "date": "1964-02-12T18:13:54.967Z",
        "age": 57
      },
      "registered": {
        "date": "2012-09-28T21:09:17.592Z",
        "age": 9
      },
      "phone": "075 410 10 00",
      "cell": "076 478 33 06",
      "id": {
        "name": "AVS",
        "value": "756.9858.4824.86"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/11.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Lois",
        "last": "Russell"
      },
      "location": {
        "street": {
          "number": 9090,
          "name": "Prospect Rd"
        },
        "city": "Jacksonville",
        "state": "Georgia",
        "country": "United States",
        "postcode": 95557,
        "coordinates": {
          "latitude": "82.1444",
          "longitude": "44.0888"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "lois.russell@example.com",
      "login": {
        "uuid": "d0343bf1-b494-4a78-adb8-4c5006fbdc16",
        "username": "bluefrog605",
        "password": "98765",
        "salt": "WhO5XGR0",
        "md5": "394d8bd5219810a011f13400b0f27c02",
        "sha1": "7b0322a862ea5cef4186f65b5d550241e8d7a952",
        "sha256": "a1ca6ba0aac5365dd4d8eb194f24b3ef41449ac26a28755f23535b260868624b"
      },
      "dob": {
        "date": "1988-03-16T23:23:34.123Z",
        "age": 33
      },
      "registered": {
        "date": "2015-03-31T00:49:49.128Z",
        "age": 6
      },
      "phone": "(540)-609-4529",
      "cell": "(698)-266-3006",
      "id": {
        "name": "SSN",
        "value": "376-23-9208"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Roselei",
        "last": "Nogueira"
      },
      "location": {
        "street": {
          "number": 6286,
          "name": "Rua Bela Vista "
        },
        "city": "Fortaleza",
        "state": "Acre",
        "country": "Brazil",
        "postcode": 83239,
        "coordinates": {
          "latitude": "36.2845",
          "longitude": "99.1536"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "roselei.nogueira@example.com",
      "login": {
        "uuid": "b54a1502-6184-4b33-8e2e-5932498c634a",
        "username": "blacktiger249",
        "password": "estelle",
        "salt": "1EwBvsJB",
        "md5": "ffb17c3e47d819520fef6f02ba249634",
        "sha1": "fcb15e97b6e76518f7db39c116d169922d9ce95c",
        "sha256": "0176f6b70d73bde80c4990a02609a99e9acc5c9e1ae31cd8b198910ab887fa32"
      },
      "dob": {
        "date": "1969-04-23T20:27:58.477Z",
        "age": 52
      },
      "registered": {
        "date": "2018-11-17T10:58:26.740Z",
        "age": 3
      },
      "phone": "(43) 4363-3031",
      "cell": "(60) 4065-7159",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/4.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Emmi",
        "last": "Heikkila"
      },
      "location": {
        "street": {
          "number": 5575,
          "name": "Rautatienkatu"
        },
        "city": "Toholampi",
        "state": "South Karelia",
        "country": "Finland",
        "postcode": 51316,
        "coordinates": {
          "latitude": "-46.5353",
          "longitude": "74.8387"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "emmi.heikkila@example.com",
      "login": {
        "uuid": "e0e63904-8476-4de7-8493-44f703a87b6e",
        "username": "whitepeacock677",
        "password": "lotus",
        "salt": "kSmkmBh9",
        "md5": "7bf52724757e36185f73a6dbd1d006f7",
        "sha1": "2a6a8f51c4edd4cc54ec3d00c5ebc33d07edefb8",
        "sha256": "0394473b10ef855bc9904819b4f21772f336122374c4bfbd8ed83743f4609325"
      },
      "dob": {
        "date": "1968-12-29T13:42:59.338Z",
        "age": 53
      },
      "registered": {
        "date": "2015-04-02T12:06:29.055Z",
        "age": 6
      },
      "phone": "03-706-656",
      "cell": "044-555-42-49",
      "id": {
        "name": "HETU",
        "value": "NaNNA922undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Noélie",
        "last": "Faure"
      },
      "location": {
        "street": {
          "number": 9157,
          "name": "Rue Jean-Baldassini"
        },
        "city": "Marseille",
        "state": "Indre",
        "country": "France",
        "postcode": 52934,
        "coordinates": {
          "latitude": "43.0719",
          "longitude": "87.0415"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "noelie.faure@example.com",
      "login": {
        "uuid": "33d414d8-bee7-40f7-af41-7f9ca29dc333",
        "username": "beautifultiger745",
        "password": "hola",
        "salt": "74D5Hl26",
        "md5": "a9d74248557b227f53dbfd0626878e2e",
        "sha1": "9ca7312ab6af31091a9f513f707b516930b8a39a",
        "sha256": "b594653946374426311b1cbd9e281d22611c5c67264c937723076a2b1d77e824"
      },
      "dob": {
        "date": "1976-10-04T13:07:17.010Z",
        "age": 45
      },
      "registered": {
        "date": "2011-08-03T06:23:29.328Z",
        "age": 10
      },
      "phone": "03-24-86-61-77",
      "cell": "06-09-05-77-80",
      "id": {
        "name": "INSEE",
        "value": "2NNaN94974389 55"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Carter",
        "last": "Johnson"
      },
      "location": {
        "street": {
          "number": 5644,
          "name": "Ravensbourne Road"
        },
        "city": "Taupo",
        "state": "Canterbury",
        "country": "New Zealand",
        "postcode": 72133,
        "coordinates": {
          "latitude": "36.5812",
          "longitude": "-144.0228"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "carter.johnson@example.com",
      "login": {
        "uuid": "2ff98976-2a78-468e-8dd2-6e2dcec0667b",
        "username": "goldentiger743",
        "password": "tinker",
        "salt": "8ef9gQJH",
        "md5": "ed84e6c6a4193d2a0d06ceb170dfa19c",
        "sha1": "a2542ed923e3b0976eda905e4ad36d8b75cb2439",
        "sha256": "f7971a2f83bdcb163f23066d1e942f628fd491a4c6f684dcd999eb36f2c3f4b1"
      },
      "dob": {
        "date": "1980-09-12T16:38:28.495Z",
        "age": 41
      },
      "registered": {
        "date": "2013-07-17T00:01:27.866Z",
        "age": 8
      },
      "phone": "(334)-507-8558",
      "cell": "(070)-774-5471",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/22.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jilke",
        "last": "Hulshoff"
      },
      "location": {
        "street": {
          "number": 7685,
          "name": "Blokzijlerdijk"
        },
        "city": "Keijenborg",
        "state": "Limburg",
        "country": "Netherlands",
        "postcode": 17053,
        "coordinates": {
          "latitude": "-63.4539",
          "longitude": "171.7265"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jilke.hulshoff@example.com",
      "login": {
        "uuid": "7e9b6643-9f50-4292-8d6d-71a4e8e046b7",
        "username": "crazyswan367",
        "password": "winter",
        "salt": "icHKaTfA",
        "md5": "7a1095287a1a7bf0cc85be232d00d8da",
        "sha1": "f6a44aa8b4d69afccda1164c709e70aba6e4ce50",
        "sha256": "c1c233c1708867ba9dfe125847e307643d66e60278c4b90e053a383cf0426375"
      },
      "dob": {
        "date": "1988-11-23T19:54:47.337Z",
        "age": 33
      },
      "registered": {
        "date": "2016-06-27T17:30:40.190Z",
        "age": 5
      },
      "phone": "(499)-728-9088",
      "cell": "(807)-585-9772",
      "id": {
        "name": "BSN",
        "value": "34620388"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/92.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Noelia",
        "last": "Moksnes"
      },
      "location": {
        "street": {
          "number": 1981,
          "name": "Vestlisvingen"
        },
        "city": "Brunstad",
        "state": "Vestfold",
        "country": "Norway",
        "postcode": "6019",
        "coordinates": {
          "latitude": "17.1691",
          "longitude": "-22.5280"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "noelia.moksnes@example.com",
      "login": {
        "uuid": "c8fcb032-bff6-41ef-8bd5-01d140011239",
        "username": "heavymouse706",
        "password": "adam12",
        "salt": "VN4y3HWP",
        "md5": "4bceb15b252fda9e05af7e9bff165d0f",
        "sha1": "fabd4515e3ed7961472b0a0f3ac7bcfed6747fef",
        "sha256": "ba797b89514b20d7388df6067689f6ee7c9b5f7c0a6334e9ab575f1b4e4c0c5c"
      },
      "dob": {
        "date": "1981-08-22T05:32:54.719Z",
        "age": 40
      },
      "registered": {
        "date": "2009-05-08T23:28:33.932Z",
        "age": 12
      },
      "phone": "58411841",
      "cell": "93376939",
      "id": {
        "name": "FN",
        "value": "22088119472"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/38.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Walburga",
        "last": "Geier"
      },
      "location": {
        "street": {
          "number": 1906,
          "name": "Amselweg"
        },
        "city": "Schleiz",
        "state": "Bayern",
        "country": "Germany",
        "postcode": 74631,
        "coordinates": {
          "latitude": "-68.0584",
          "longitude": "-66.8281"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "walburga.geier@example.com",
      "login": {
        "uuid": "8aeb53e4-10e4-4249-af41-456a7f0bb591",
        "username": "smallzebra209",
        "password": "bruce",
        "salt": "URHOytTy",
        "md5": "8ec7412a46b6a47200b7a4fd7baec353",
        "sha1": "8b05a42ddfc9e06e6f98fa7d541ebfad01e4807e",
        "sha256": "560b586169868ea9c9590a6cf584f6a3fc7f6a71584c53fd3098465ad7c4b18f"
      },
      "dob": {
        "date": "1973-11-09T15:37:54.049Z",
        "age": 48
      },
      "registered": {
        "date": "2005-08-31T09:56:40.324Z",
        "age": 16
      },
      "phone": "0257-8735719",
      "cell": "0178-2546347",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/81.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Samuel",
        "last": "Vidal"
      },
      "location": {
        "street": {
          "number": 4007,
          "name": "Calle de Alberto Aguilera"
        },
        "city": "Jerez de la Frontera",
        "state": "Galicia",
        "country": "Spain",
        "postcode": 53514,
        "coordinates": {
          "latitude": "-54.5243",
          "longitude": "80.6377"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "samuel.vidal@example.com",
      "login": {
        "uuid": "07103010-37bc-4561-afd8-d7d37dbfd9c3",
        "username": "ticklishmouse571",
        "password": "951753",
        "salt": "N8Uqz8ib",
        "md5": "8d397e9ce3f8eabc3f00c0427ee3d2d1",
        "sha1": "821e3da0035d522588671cfe7c1600a9578dfa43",
        "sha256": "fe4ad8183b4777108642425bbb7a83a7a2f05cf8d6896b4a340e3e6a7f208508"
      },
      "dob": {
        "date": "1951-03-20T00:25:36.861Z",
        "age": 70
      },
      "registered": {
        "date": "2010-06-02T03:59:36.263Z",
        "age": 11
      },
      "phone": "975-967-313",
      "cell": "627-424-348",
      "id": {
        "name": "DNI",
        "value": "81383360-M"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/35.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Hazel",
        "last": "Green"
      },
      "location": {
        "street": {
          "number": 6795,
          "name": "Harewood Road"
        },
        "city": "Hastings",
        "state": "Marlborough",
        "country": "New Zealand",
        "postcode": 68385,
        "coordinates": {
          "latitude": "39.9980",
          "longitude": "147.2493"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "hazel.green@example.com",
      "login": {
        "uuid": "a72fc1ae-c8bf-4035-8cb3-970b1e783faf",
        "username": "sadostrich285",
        "password": "pounded",
        "salt": "lYmOOF0D",
        "md5": "824693ff95a702834dc90bbd01f1e218",
        "sha1": "31ae78fa812dc26963c0e1e4d7d5f38281a8132a",
        "sha256": "646228e0ee0c36c002d220144adcb0da98860ce16eebd76451cd788a310a2c50"
      },
      "dob": {
        "date": "1960-07-08T01:53:07.680Z",
        "age": 61
      },
      "registered": {
        "date": "2010-12-19T23:36:43.501Z",
        "age": 11
      },
      "phone": "(021)-722-9077",
      "cell": "(896)-516-7326",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/29.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Gottlieb",
        "last": "Zorn"
      },
      "location": {
        "street": {
          "number": 4651,
          "name": "Rosenstraße"
        },
        "city": "Remscheid",
        "state": "Berlin",
        "country": "Germany",
        "postcode": 68549,
        "coordinates": {
          "latitude": "67.4813",
          "longitude": "-82.0489"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "gottlieb.zorn@example.com",
      "login": {
        "uuid": "aa600a5b-a36f-440d-9ada-39a150dd7565",
        "username": "orangecat353",
        "password": "freeway",
        "salt": "8CxsNwoM",
        "md5": "ead0957e81cba08ce3bc1c6d494c8f8c",
        "sha1": "da964661dc7667739b3fd2213c20a3507e0fa9f8",
        "sha256": "40b92974084671f797a1590126bbbbd40a4e876135a78924e648248d6fd8d6f9"
      },
      "dob": {
        "date": "1979-04-02T21:32:14.494Z",
        "age": 42
      },
      "registered": {
        "date": "2015-11-05T09:00:49.477Z",
        "age": 6
      },
      "phone": "0766-3194281",
      "cell": "0178-4671109",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/38.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Damian",
        "last": "Wunsch"
      },
      "location": {
        "street": {
          "number": 1709,
          "name": "Kirchweg"
        },
        "city": "Markdorf",
        "state": "Nordrhein-Westfalen",
        "country": "Germany",
        "postcode": 92206,
        "coordinates": {
          "latitude": "-36.9051",
          "longitude": "23.3757"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "damian.wunsch@example.com",
      "login": {
        "uuid": "752e27f0-6575-4966-952b-071a8b28e7e4",
        "username": "biglion733",
        "password": "yankees1",
        "salt": "HW8BnAOK",
        "md5": "553c180e5c093a872b5b777b8eb6f130",
        "sha1": "148438037ebf4c4f6465ae744370b26794776755",
        "sha256": "f7b5fa056a3a52d6e68af4953c43d505d89b41a10dffda503db39a254de43613"
      },
      "dob": {
        "date": "1992-11-24T20:31:59.059Z",
        "age": 29
      },
      "registered": {
        "date": "2013-06-03T09:16:11.166Z",
        "age": 8
      },
      "phone": "0258-7504777",
      "cell": "0172-2612347",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/52.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Giovana",
        "last": "Monteiro"
      },
      "location": {
        "street": {
          "number": 940,
          "name": "Rua São João "
        },
        "city": "Timon",
        "state": "Rio Grande do Sul",
        "country": "Brazil",
        "postcode": 30568,
        "coordinates": {
          "latitude": "-65.5217",
          "longitude": "-9.8997"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "giovana.monteiro@example.com",
      "login": {
        "uuid": "c8aeb72b-3237-41f8-bba7-b73c1ba99799",
        "username": "angrybutterfly607",
        "password": "dudley",
        "salt": "ByigWIr4",
        "md5": "4a45bd73ae973d037690f51ece3dde30",
        "sha1": "95119a0bb5ab3b2725f4724b81e431896f74eb0f",
        "sha256": "b5368cea7c000ff372ebf5dd3b696dbd59bcceefff58771c6067392fc20b4336"
      },
      "dob": {
        "date": "1956-05-12T15:59:35.988Z",
        "age": 65
      },
      "registered": {
        "date": "2008-01-27T19:08:38.613Z",
        "age": 13
      },
      "phone": "(15) 3534-9168",
      "cell": "(15) 6287-0876",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/55.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Amalie",
        "last": "Jensen"
      },
      "location": {
        "street": {
          "number": 859,
          "name": "Lyngbyvej"
        },
        "city": "Nimtofte",
        "state": "Hovedstaden",
        "country": "Denmark",
        "postcode": 35648,
        "coordinates": {
          "latitude": "11.9766",
          "longitude": "-26.9947"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "amalie.jensen@example.com",
      "login": {
        "uuid": "47ff3488-d4dc-4ee7-b7fe-7e82de70eb98",
        "username": "goldencat873",
        "password": "titleist",
        "salt": "NUoLQgCv",
        "md5": "edb77ad6ba6fcce3f3d095083085fc38",
        "sha1": "e649cc6586f37861f64e63307f500f304c921219",
        "sha256": "e8ad8ad6369e62c63172b99f85ffb6da4500d7a085ffa22b1403568bb0560cd9"
      },
      "dob": {
        "date": "1970-03-03T23:45:57.842Z",
        "age": 51
      },
      "registered": {
        "date": "2016-10-03T01:39:36.063Z",
        "age": 5
      },
      "phone": "88480578",
      "cell": "31069081",
      "id": {
        "name": "CPR",
        "value": "030370-0481"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/39.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Markus",
        "last": "Fritsche"
      },
      "location": {
        "street": {
          "number": 7389,
          "name": "Goethestraße"
        },
        "city": "Bad Breisig",
        "state": "Sachsen",
        "country": "Germany",
        "postcode": 23176,
        "coordinates": {
          "latitude": "-14.1790",
          "longitude": "-19.5557"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "markus.fritsche@example.com",
      "login": {
        "uuid": "36dba1bb-1f08-4bbe-9f7f-b65cf9bd7356",
        "username": "crazyostrich313",
        "password": "leon",
        "salt": "CZaf18pG",
        "md5": "5660fda47f39355a571c06bc1ccd227d",
        "sha1": "1845080f2bc16bcfb6eb7fb67edbcd3ae68e7d29",
        "sha256": "761262cd7f83a0504ed794162db591833013a06cc3192669007bb0b331353449"
      },
      "dob": {
        "date": "1978-10-02T15:43:35.981Z",
        "age": 43
      },
      "registered": {
        "date": "2013-06-25T03:14:04.527Z",
        "age": 8
      },
      "phone": "0490-0814611",
      "cell": "0176-1085363",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Etienne",
        "last": "Young"
      },
      "location": {
        "street": {
          "number": 6287,
          "name": "Argyle St"
        },
        "city": "Charlottetown",
        "state": "Québec",
        "country": "Canada",
        "postcode": "R6U 7S8",
        "coordinates": {
          "latitude": "11.6006",
          "longitude": "87.2387"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "etienne.young@example.com",
      "login": {
        "uuid": "b2bf11f1-b98e-45eb-aa35-5680bd88d0c0",
        "username": "goldenelephant118",
        "password": "karen1",
        "salt": "0QrPT2oz",
        "md5": "a9d11d261301b9ca3d3e20316960b776",
        "sha1": "86548b3e02f6db8ef9ce9b9527f2a58aa78de049",
        "sha256": "a97163798259e657563eb59c88dbd2ad358b345f178be4d88a58c1f4595cadc2"
      },
      "dob": {
        "date": "1975-03-11T08:55:35.754Z",
        "age": 46
      },
      "registered": {
        "date": "2011-01-22T13:40:08.950Z",
        "age": 10
      },
      "phone": "875-305-3735",
      "cell": "355-191-6002",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Timmothy",
        "last": "Cole"
      },
      "location": {
        "street": {
          "number": 193,
          "name": "Rookery Road"
        },
        "city": "Bandon",
        "state": "Cork",
        "country": "Ireland",
        "postcode": 61516,
        "coordinates": {
          "latitude": "53.2871",
          "longitude": "72.5275"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "timmothy.cole@example.com",
      "login": {
        "uuid": "796b2b57-5ec2-4661-a089-0b16f4d4dde7",
        "username": "tinylion997",
        "password": "lawyer",
        "salt": "Xx8RsZep",
        "md5": "3618b1a2de9a6c0559a4247e0ca78be1",
        "sha1": "be263ab32126ed3d3fdb58d868b7617f3f284ee6",
        "sha256": "50d24e5d0efb253bced972c4dbbe99357acc157652d0e3dadb805eb151182385"
      },
      "dob": {
        "date": "1952-06-10T08:45:47.198Z",
        "age": 69
      },
      "registered": {
        "date": "2012-07-30T13:53:17.469Z",
        "age": 9
      },
      "phone": "051-799-8299",
      "cell": "081-371-1433",
      "id": {
        "name": "PPS",
        "value": "0029096T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/81.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Pamela",
        "last": "Jensen"
      },
      "location": {
        "street": {
          "number": 4598,
          "name": "Meisenweg"
        },
        "city": "Wachenheim an der Weinstraße",
        "state": "Brandenburg",
        "country": "Germany",
        "postcode": 84858,
        "coordinates": {
          "latitude": "85.6043",
          "longitude": "167.3843"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "pamela.jensen@example.com",
      "login": {
        "uuid": "b4df1dde-1c8d-48eb-8466-a306ddceb87f",
        "username": "smallbear233",
        "password": "tina",
        "salt": "q5FaYb0w",
        "md5": "1487b054b7705441fdf359b914cdf1c0",
        "sha1": "4b8cd89537cb537dd64dd26d7dabbdc1059e3ba2",
        "sha256": "9ed6dc93833bf9eecef0923f894a1c0320c8f644b5fdb6a37694c8cb4d8d154f"
      },
      "dob": {
        "date": "1990-10-28T11:19:19.956Z",
        "age": 31
      },
      "registered": {
        "date": "2017-01-22T13:02:17.053Z",
        "age": 4
      },
      "phone": "0567-2179767",
      "cell": "0173-9406040",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/94.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Loiraci",
        "last": "da Cunha"
      },
      "location": {
        "street": {
          "number": 4497,
          "name": "Beco dos Namorados"
        },
        "city": "Itaboraí",
        "state": "Santa Catarina",
        "country": "Brazil",
        "postcode": 48709,
        "coordinates": {
          "latitude": "-54.3445",
          "longitude": "158.5135"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "loiraci.dacunha@example.com",
      "login": {
        "uuid": "1facae6e-8ca1-479a-a665-e622d62e55ca",
        "username": "ticklishbutterfly618",
        "password": "eskimo",
        "salt": "1T0PGGME",
        "md5": "6566a6b38a05373db87c1d69c55ccd9f",
        "sha1": "449a99269622e781741a6c6b067feefd26fb65dd",
        "sha256": "51728398f04dc79aef225976c0acb28cea28fe15592771256e8de3e9c68e2757"
      },
      "dob": {
        "date": "1948-10-13T01:20:23.530Z",
        "age": 73
      },
      "registered": {
        "date": "2013-02-19T18:59:54.764Z",
        "age": 8
      },
      "phone": "(94) 0385-2040",
      "cell": "(41) 7194-9125",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "ایلیا",
        "last": "پارسا"
      },
      "location": {
        "street": {
          "number": 5141,
          "name": "میدان ولیعصر (عج)"
        },
        "city": "بیرجند",
        "state": "اردبیل",
        "country": "Iran",
        "postcode": 50374,
        "coordinates": {
          "latitude": "72.2768",
          "longitude": "-60.2207"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "yly.prs@example.com",
      "login": {
        "uuid": "e9a4cf33-030c-41bb-b8a6-5b62cf183d49",
        "username": "organiczebra425",
        "password": "eric",
        "salt": "jqDT4T4H",
        "md5": "586d741c7f6b86535d1c2d513476722b",
        "sha1": "ed10b90afd97900c30bc284758dc0996d7c18931",
        "sha256": "a4ebfdfb8a1a296a07bb35c96f4f34fb1a88da45aa2c420be997a4e78252aae8"
      },
      "dob": {
        "date": "1952-03-26T04:08:39.777Z",
        "age": 69
      },
      "registered": {
        "date": "2012-06-27T16:28:37.944Z",
        "age": 9
      },
      "phone": "009-74647902",
      "cell": "0934-475-6977",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/90.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Harley",
        "last": "Williams"
      },
      "location": {
        "street": {
          "number": 4553,
          "name": "Hereford Street"
        },
        "city": "Wellington",
        "state": "Bay of Plenty",
        "country": "New Zealand",
        "postcode": 38329,
        "coordinates": {
          "latitude": "50.9126",
          "longitude": "120.4967"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "harley.williams@example.com",
      "login": {
        "uuid": "c49b3fd3-87b5-46b6-befa-636a7afc46f2",
        "username": "lazywolf478",
        "password": "tttttttt",
        "salt": "2zgSrJWp",
        "md5": "977972d083d6fa4532a88d0f5ae183aa",
        "sha1": "c412fab979dbdd71d2c19d060d726555938e25ac",
        "sha256": "3a6bb318690094de6b27c9cac88a36e441f6b32009918cdef6745873b7003c11"
      },
      "dob": {
        "date": "1966-01-03T14:40:44.974Z",
        "age": 55
      },
      "registered": {
        "date": "2017-06-18T04:06:05.715Z",
        "age": 4
      },
      "phone": "(735)-299-3764",
      "cell": "(087)-087-6298",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/54.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Consuelo",
        "last": "Jimenez"
      },
      "location": {
        "street": {
          "number": 7403,
          "name": "Calle de Segovia"
        },
        "city": "Torrevieja",
        "state": "País Vasco",
        "country": "Spain",
        "postcode": 22775,
        "coordinates": {
          "latitude": "-84.6929",
          "longitude": "-158.7904"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "consuelo.jimenez@example.com",
      "login": {
        "uuid": "da8175b8-eac5-4254-8737-66de15e55907",
        "username": "beautifulostrich359",
        "password": "supreme",
        "salt": "5tBgBB23",
        "md5": "526a710ac43b844cdfdcf0acd21217db",
        "sha1": "8923fd23ee1067e494fbe95071dadc5a24b831fc",
        "sha256": "dc415dc55978c7652fb80b94d10863d6aa70ca46bd0f8107d73c0fe2d27c2eb9"
      },
      "dob": {
        "date": "1963-05-08T05:52:28.431Z",
        "age": 58
      },
      "registered": {
        "date": "2013-04-12T04:26:01.204Z",
        "age": 8
      },
      "phone": "976-748-841",
      "cell": "637-112-354",
      "id": {
        "name": "DNI",
        "value": "47926535-P"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/25.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Herbert",
        "last": "Hicks"
      },
      "location": {
        "street": {
          "number": 3588,
          "name": "Brown Terrace"
        },
        "city": "Brownsville",
        "state": "South Carolina",
        "country": "United States",
        "postcode": 67304,
        "coordinates": {
          "latitude": "67.6288",
          "longitude": "169.7779"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "herbert.hicks@example.com",
      "login": {
        "uuid": "637ca556-a3d3-4aa8-b7bb-a3474142c33e",
        "username": "happywolf604",
        "password": "sigma",
        "salt": "eXKBpt4E",
        "md5": "89f80ff637c9c824614b74ac6e8875db",
        "sha1": "c8f109f31326f748dede9992cab088c14b334ab8",
        "sha256": "9d5e4540e11d6f1f48aab5c4fc34974618df23ca24079cd954269f4dd32b9cc5"
      },
      "dob": {
        "date": "1983-02-02T01:24:39.853Z",
        "age": 38
      },
      "registered": {
        "date": "2012-03-03T11:27:59.691Z",
        "age": 9
      },
      "phone": "(014)-999-9417",
      "cell": "(185)-020-7554",
      "id": {
        "name": "SSN",
        "value": "829-80-0055"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/15.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Mustafa",
        "last": "Kahveci"
      },
      "location": {
        "street": {
          "number": 2158,
          "name": "Abanoz Sk"
        },
        "city": "Tunceli",
        "state": "Isparta",
        "country": "Turkey",
        "postcode": 68069,
        "coordinates": {
          "latitude": "-84.7526",
          "longitude": "76.5342"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "mustafa.kahveci@example.com",
      "login": {
        "uuid": "cdf9929c-43a4-415f-97cb-2af764a53958",
        "username": "yellowfrog260",
        "password": "dte4uw",
        "salt": "KOGATJFZ",
        "md5": "dae0129d67c6691cfb328b4f898152a6",
        "sha1": "0c22c970bffa9bf8f55e6b63c6e0856b6583d15c",
        "sha256": "ace8e1b7fb8b989702686f932355ff21103b165f292b60fb2bb94491e4a07e6d"
      },
      "dob": {
        "date": "1971-10-19T12:47:37.591Z",
        "age": 50
      },
      "registered": {
        "date": "2002-10-27T14:13:44.655Z",
        "age": 19
      },
      "phone": "(631)-847-7766",
      "cell": "(872)-224-0094",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/62.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/62.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/62.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Rafael",
        "last": "Gonçalves"
      },
      "location": {
        "street": {
          "number": 1658,
          "name": "Travessa dos Açorianos"
        },
        "city": "Suzano",
        "state": "Distrito Federal",
        "country": "Brazil",
        "postcode": 98188,
        "coordinates": {
          "latitude": "-63.8188",
          "longitude": "-78.5196"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "rafael.goncalves@example.com",
      "login": {
        "uuid": "ac6caa51-f74d-41d7-ac22-0f412f62889e",
        "username": "ticklishswan555",
        "password": "unicorn",
        "salt": "5LOL6fO8",
        "md5": "db876fa14434d6a1b8af10f0e30d3dc9",
        "sha1": "c4f7b4f1115c664498a6357bddc36ae2407c9e91",
        "sha256": "774e427af7738c910ac2029dde7d32f8fc2c5e491336f2dc06587ce2df9ecfbb"
      },
      "dob": {
        "date": "1988-03-14T20:31:45.002Z",
        "age": 33
      },
      "registered": {
        "date": "2003-06-15T10:54:07.816Z",
        "age": 18
      },
      "phone": "(88) 1370-5206",
      "cell": "(45) 8092-4211",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Villads",
        "last": "Hansen"
      },
      "location": {
        "street": {
          "number": 3188,
          "name": "Huginsvej"
        },
        "city": "Ulsted, Hals",
        "state": "Sjælland",
        "country": "Denmark",
        "postcode": 69491,
        "coordinates": {
          "latitude": "7.8962",
          "longitude": "100.4715"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "villads.hansen@example.com",
      "login": {
        "uuid": "f736a9f1-9bea-4839-9c80-6bcb34a1457b",
        "username": "blueladybug847",
        "password": "bruce",
        "salt": "iai5ctnP",
        "md5": "17e0b1fa1a810eba3b813fe444098d48",
        "sha1": "1e099c074a622dc28ced73aef06c9df0fd2503f1",
        "sha256": "f3fbb0a48ab8eae06625f3e834e497fe9816335b7004479f2ea2442f5e66347c"
      },
      "dob": {
        "date": "1968-03-20T05:33:05.186Z",
        "age": 53
      },
      "registered": {
        "date": "2014-10-31T11:03:27.684Z",
        "age": 7
      },
      "phone": "42814869",
      "cell": "44391912",
      "id": {
        "name": "CPR",
        "value": "200368-7701"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Judy",
        "last": "Sullivan"
      },
      "location": {
        "street": {
          "number": 423,
          "name": "Park Avenue"
        },
        "city": "Dundee",
        "state": "South Glamorgan",
        "country": "United Kingdom",
        "postcode": "MQ96 4EU",
        "coordinates": {
          "latitude": "-79.3884",
          "longitude": "66.5952"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "judy.sullivan@example.com",
      "login": {
        "uuid": "59cd1cec-3762-41c8-8e50-19359384966e",
        "username": "smallbird585",
        "password": "glasgow",
        "salt": "GsBOzBgl",
        "md5": "5c6e3a5dcb59bbf75431e51de4ce0742",
        "sha1": "f21aa6b330bdfce3932224f93cd1ebc624cb47a6",
        "sha256": "bf51b342d5a17c1bc35346c456c300b25a37ab8c6c5afedc55b16d653d81bef7"
      },
      "dob": {
        "date": "1971-02-21T08:12:44.839Z",
        "age": 50
      },
      "registered": {
        "date": "2009-05-28T00:28:50.290Z",
        "age": 12
      },
      "phone": "016974 90904",
      "cell": "0718-895-513",
      "id": {
        "name": "NINO",
        "value": "CR 65 21 26 D"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/63.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/63.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Marlen",
        "last": "Roßmann"
      },
      "location": {
        "street": {
          "number": 4176,
          "name": "Im Winkel"
        },
        "city": "Linz am Rhein",
        "state": "Niedersachsen",
        "country": "Germany",
        "postcode": 54646,
        "coordinates": {
          "latitude": "-65.9075",
          "longitude": "52.6490"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "marlen.rossmann@example.com",
      "login": {
        "uuid": "d3893dc1-eba5-4803-9517-834ab39a175e",
        "username": "yellowzebra188",
        "password": "ursitesux",
        "salt": "T0BtclBb",
        "md5": "eee6c8fd1e2bf62750de47583687fc4a",
        "sha1": "e4e224228f44fc3a088159b2aada9342b6480860",
        "sha256": "608c6a2512d3027530ae8a2ac55cf2d46a6cc26a60f76bb289d7c34eb511e3a3"
      },
      "dob": {
        "date": "1955-11-29T17:57:42.555Z",
        "age": 66
      },
      "registered": {
        "date": "2002-11-26T07:24:25.847Z",
        "age": 19
      },
      "phone": "0363-8686841",
      "cell": "0171-0149350",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/50.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Gebhard",
        "last": "Grün"
      },
      "location": {
        "street": {
          "number": 1215,
          "name": "Gartenweg"
        },
        "city": "Ballenstedt",
        "state": "Mecklenburg-Vorpommern",
        "country": "Germany",
        "postcode": 48057,
        "coordinates": {
          "latitude": "-29.5929",
          "longitude": "-131.8406"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "gebhard.grun@example.com",
      "login": {
        "uuid": "d7d6ed6d-09bd-4520-9f0d-117d233a31b5",
        "username": "heavypanda743",
        "password": "2525",
        "salt": "ib7xj6U6",
        "md5": "11d965a99f032e324c903e575bacc174",
        "sha1": "d7bad33a39429ed9340a3597f1031ce21c7c192e",
        "sha256": "5884c48290b56a1d83f6c629eb1483f686766a26bc4c5298ec3a6ecb26642578"
      },
      "dob": {
        "date": "1971-10-20T14:06:04.780Z",
        "age": 50
      },
      "registered": {
        "date": "2017-01-11T02:29:31.257Z",
        "age": 4
      },
      "phone": "0597-4316989",
      "cell": "0174-9533662",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ignacio",
        "last": "Gallardo"
      },
      "location": {
        "street": {
          "number": 4206,
          "name": "Calle de La Democracia"
        },
        "city": "Vigo",
        "state": "Andalucía",
        "country": "Spain",
        "postcode": 53371,
        "coordinates": {
          "latitude": "-82.3457",
          "longitude": "110.2508"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "ignacio.gallardo@example.com",
      "login": {
        "uuid": "27d01df3-884b-43aa-87f1-0d26922a20e8",
        "username": "smalltiger401",
        "password": "ventura",
        "salt": "AVt1emyk",
        "md5": "8536c1c914a2953e1c7239f16cab947d",
        "sha1": "fe538feb82a933dda7a32b317142d3740fd5dde9",
        "sha256": "35c8f1e8261c1072abd69a6e6b81816105861c1dce4c555d06fd4f18a167608d"
      },
      "dob": {
        "date": "1973-02-04T11:46:47.820Z",
        "age": 48
      },
      "registered": {
        "date": "2008-11-13T08:11:45.938Z",
        "age": 13
      },
      "phone": "952-747-847",
      "cell": "618-440-333",
      "id": {
        "name": "DNI",
        "value": "54325114-D"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Jacobje",
        "last": "Pijls"
      },
      "location": {
        "street": {
          "number": 1397,
          "name": "Gageldreef"
        },
        "city": "Elsloo Fr",
        "state": "Noord-Brabant",
        "country": "Netherlands",
        "postcode": 52993,
        "coordinates": {
          "latitude": "-20.1697",
          "longitude": "49.2642"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "jacobje.pijls@example.com",
      "login": {
        "uuid": "5225f8a2-2c8f-4b4a-bd36-8440983eb850",
        "username": "smalltiger253",
        "password": "hawk",
        "salt": "O5Z7tPBY",
        "md5": "a97e1d6b91fdc2f19d5bf9f015a86ae5",
        "sha1": "ccd0ca9ea2f5549e520bdb1dfa6aee78573c4987",
        "sha256": "d756dd3545c454465c74b94dc2223874820456e54db6402536e6a8b15dcaa1b2"
      },
      "dob": {
        "date": "1990-06-09T17:31:07.076Z",
        "age": 31
      },
      "registered": {
        "date": "2009-08-28T09:20:59.110Z",
        "age": 12
      },
      "phone": "(475)-518-0140",
      "cell": "(505)-167-3601",
      "id": {
        "name": "BSN",
        "value": "78229274"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/45.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Judd",
        "last": "Murray"
      },
      "location": {
        "street": {
          "number": 5582,
          "name": "E Center St"
        },
        "city": "Sacramento",
        "state": "Montana",
        "country": "United States",
        "postcode": 91262,
        "coordinates": {
          "latitude": "16.9366",
          "longitude": "-42.5240"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "judd.murray@example.com",
      "login": {
        "uuid": "c685993f-1a10-44b9-8bbd-a5e220b119c5",
        "username": "beautifulduck847",
        "password": "vertigo",
        "salt": "cFyXE26b",
        "md5": "cbd1c9c41c82a5919fed134ebbff18f4",
        "sha1": "8b2c18254addc4f63a0e6ce1ac7d0c7020fc49d7",
        "sha256": "240575886fcc897446553facf13d9fe89c6f3bfb7e2d73eff30da003ace6208c"
      },
      "dob": {
        "date": "1991-06-22T19:12:50.909Z",
        "age": 30
      },
      "registered": {
        "date": "2007-05-03T03:33:40.725Z",
        "age": 14
      },
      "phone": "(357)-932-5136",
      "cell": "(656)-860-5224",
      "id": {
        "name": "SSN",
        "value": "195-14-8047"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/32.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Thies",
        "last": "Thiele"
      },
      "location": {
        "street": {
          "number": 5179,
          "name": "Birkenweg"
        },
        "city": "Brück",
        "state": "Berlin",
        "country": "Germany",
        "postcode": 39455,
        "coordinates": {
          "latitude": "81.5322",
          "longitude": "71.5394"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "thies.thiele@example.com",
      "login": {
        "uuid": "4d138e9f-29da-4cee-84ff-5b12655103e1",
        "username": "yellowgorilla506",
        "password": "bert",
        "salt": "ipuSndA3",
        "md5": "161fc6acf9ded48f2d8766a3140c409e",
        "sha1": "00d657e84dab8ec2ab79d8fb688a95b091e27bf2",
        "sha256": "93e3ce359761211e661d23a6e049f1139cea59f2d9eafc20342c665e9e9cbac8"
      },
      "dob": {
        "date": "1977-12-13T17:45:38.748Z",
        "age": 44
      },
      "registered": {
        "date": "2016-03-04T07:20:41.477Z",
        "age": 5
      },
      "phone": "0509-7653015",
      "cell": "0177-5351136",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/34.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Ella",
        "last": "Hall"
      },
      "location": {
        "street": {
          "number": 7514,
          "name": "Sherborne Street"
        },
        "city": "Blenheim",
        "state": "Northland",
        "country": "New Zealand",
        "postcode": 13892,
        "coordinates": {
          "latitude": "72.4558",
          "longitude": "66.2366"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "ella.hall@example.com",
      "login": {
        "uuid": "4dc6097a-e3d4-4e80-90f5-ec02ddf8ab32",
        "username": "orangebird997",
        "password": "lynn",
        "salt": "wbfEzmia",
        "md5": "97fe95aa1b195518159741c92e6e335c",
        "sha1": "0065e3ad607b2d7a39bc07e67d5b8186f303b5ea",
        "sha256": "9eb00fb1c47700d6d4985b623fb8134af8fbb7582c90875158bec79b1dd5e940"
      },
      "dob": {
        "date": "1946-04-01T17:41:26.753Z",
        "age": 75
      },
      "registered": {
        "date": "2015-02-16T09:14:35.752Z",
        "age": 6
      },
      "phone": "(945)-973-2766",
      "cell": "(235)-405-9304",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/64.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Emily",
        "last": "Pedersen"
      },
      "location": {
        "street": {
          "number": 4167,
          "name": "Tinghøjvej"
        },
        "city": "Lemvig",
        "state": "Syddanmark",
        "country": "Denmark",
        "postcode": 45627,
        "coordinates": {
          "latitude": "42.2781",
          "longitude": "171.5047"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "emily.pedersen@example.com",
      "login": {
        "uuid": "c9b5e71b-1701-4994-b971-6e6dbfa88975",
        "username": "blackpeacock165",
        "password": "turner",
        "salt": "f5I8tx9b",
        "md5": "c1f8dfc46c549ad31b7190f843f6f0ad",
        "sha1": "dca1926b346142655f91580928b1c10ae066a1d8",
        "sha256": "85f4012e336472123b61e7f699055ca80ceee4307c6571697ff741c0f4fd7062"
      },
      "dob": {
        "date": "1981-08-31T18:53:25.197Z",
        "age": 40
      },
      "registered": {
        "date": "2002-12-15T18:23:09.807Z",
        "age": 19
      },
      "phone": "93620967",
      "cell": "78248980",
      "id": {
        "name": "CPR",
        "value": "310881-5590"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Gladys",
        "last": "Garcia"
      },
      "location": {
        "street": {
          "number": 3073,
          "name": "E North St"
        },
        "city": "Wollongong",
        "state": "Western Australia",
        "country": "Australia",
        "postcode": 522,
        "coordinates": {
          "latitude": "61.1922",
          "longitude": "-140.3649"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "gladys.garcia@example.com",
      "login": {
        "uuid": "9198e605-d841-4706-ac2f-7f238a24c48c",
        "username": "orangefish346",
        "password": "squirrel",
        "salt": "wh7UnW6l",
        "md5": "110d8a9ef9a2cb0181e0deaf13114dea",
        "sha1": "d70a4655646dcb016a411285fc841c158af9e113",
        "sha256": "b6d343ceeb05b82a6156d86a0d625c89025e10c10e0e24a32e4630db577d32cf"
      },
      "dob": {
        "date": "1949-06-30T00:33:17.805Z",
        "age": 72
      },
      "registered": {
        "date": "2019-02-11T03:30:42.515Z",
        "age": 2
      },
      "phone": "05-5932-9368",
      "cell": "0486-112-530",
      "id": {
        "name": "TFN",
        "value": "205237435"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/16.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Lilly",
        "last": "Böttcher"
      },
      "location": {
        "street": {
          "number": 2347,
          "name": "Ahornweg"
        },
        "city": "Neudenau",
        "state": "Bremen",
        "country": "Germany",
        "postcode": 38765,
        "coordinates": {
          "latitude": "-38.1312",
          "longitude": "-150.4407"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "lilly.bottcher@example.com",
      "login": {
        "uuid": "7247bebe-859f-4529-a0ec-7a7ce03667c8",
        "username": "beautifulkoala848",
        "password": "insane",
        "salt": "iVAnhoLF",
        "md5": "5dffbf375ddb6aaf5700b201bfd9fb4c",
        "sha1": "fc002e5894f2782d020353fe1c923e84e5e1f2f1",
        "sha256": "13f1c025860ca1edfe5c2d6aeac0d6e45e65b57a165d81c3aecda8e3d0e3f414"
      },
      "dob": {
        "date": "1970-12-09T10:46:52.924Z",
        "age": 51
      },
      "registered": {
        "date": "2009-11-24T02:57:54.473Z",
        "age": 12
      },
      "phone": "0972-5592385",
      "cell": "0173-1009610",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ümit",
        "last": "Doğan"
      },
      "location": {
        "street": {
          "number": 7582,
          "name": "Bağdat Cd"
        },
        "city": "Ağrı",
        "state": "Aydın",
        "country": "Turkey",
        "postcode": 90340,
        "coordinates": {
          "latitude": "27.8003",
          "longitude": "147.5010"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "umit.dogan@example.com",
      "login": {
        "uuid": "ccd76ea7-5e15-4d61-b49c-3e8e66d8c694",
        "username": "brownbutterfly102",
        "password": "young1",
        "salt": "FNvMhMXl",
        "md5": "49987c5b173f3475ad63ecc26ca7fe34",
        "sha1": "de3cffcd8b01f3f078895ff4c2401607840961df",
        "sha256": "b7473b50716da6920f1c7013cdaef7ef86e29c22c84da5431ad8fd13d7dbe40e"
      },
      "dob": {
        "date": "1990-02-22T11:41:59.542Z",
        "age": 31
      },
      "registered": {
        "date": "2009-06-12T00:53:13.633Z",
        "age": 12
      },
      "phone": "(427)-328-2908",
      "cell": "(437)-508-6159",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/47.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Brooke",
        "last": "Walker"
      },
      "location": {
        "street": {
          "number": 3652,
          "name": "King Street"
        },
        "city": "Bradford",
        "state": "Highlands and Islands",
        "country": "United Kingdom",
        "postcode": "U3X 7UD",
        "coordinates": {
          "latitude": "74.2535",
          "longitude": "166.3078"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "brooke.walker@example.com",
      "login": {
        "uuid": "5ba60dc0-dc94-4fd5-a477-8b9ee2e47167",
        "username": "heavybird451",
        "password": "peterbil",
        "salt": "WwxsQaav",
        "md5": "67856b36cc296d6939d7151316dc9712",
        "sha1": "9bea82a9663eb23f745c04c7d668de0c115cb867",
        "sha256": "39a6152508698285f36f468b22e4a86fa00c4a554f6f0619b3153fd2b66caa06"
      },
      "dob": {
        "date": "1985-11-08T03:42:19.594Z",
        "age": 36
      },
      "registered": {
        "date": "2006-03-16T04:58:38.690Z",
        "age": 15
      },
      "phone": "013873 96412",
      "cell": "0730-934-574",
      "id": {
        "name": "NINO",
        "value": "PA 34 93 95 Z"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/22.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jacqueline",
        "last": "Rice"
      },
      "location": {
        "street": {
          "number": 8398,
          "name": "W Belt Line Rd"
        },
        "city": "Charlotte",
        "state": "Montana",
        "country": "United States",
        "postcode": 70163,
        "coordinates": {
          "latitude": "66.2923",
          "longitude": "137.1891"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "jacqueline.rice@example.com",
      "login": {
        "uuid": "d0a45a4b-ab7d-4d72-ab22-35876ce49858",
        "username": "beautifulpanda679",
        "password": "oxygen",
        "salt": "konOy3e3",
        "md5": "3d1f215c16e7005bce250c13c2a90f2e",
        "sha1": "e09378b5e85661866518a730dc77611d186464eb",
        "sha256": "4129461945aeeadf734d6f85c291d88d90a1b78797373b35a711374a7736021e"
      },
      "dob": {
        "date": "1970-07-03T03:33:12.898Z",
        "age": 51
      },
      "registered": {
        "date": "2014-07-13T13:50:07.752Z",
        "age": 7
      },
      "phone": "(917)-800-1883",
      "cell": "(020)-186-1685",
      "id": {
        "name": "SSN",
        "value": "526-51-3818"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/16.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Thomas",
        "last": "Morin"
      },
      "location": {
        "street": {
          "number": 7616,
          "name": "Boulevard de la Duchère"
        },
        "city": "Besançon",
        "state": "Aude",
        "country": "France",
        "postcode": 71286,
        "coordinates": {
          "latitude": "15.7347",
          "longitude": "161.7617"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "thomas.morin@example.com",
      "login": {
        "uuid": "7664501c-a1c9-4745-a7c6-f8b92026eeff",
        "username": "goldentiger689",
        "password": "hotties",
        "salt": "rZdx5clA",
        "md5": "51d4dc0c6227d7c94efe57031633a306",
        "sha1": "b0fbf8ec3f9bb9d975b1786f0ce465180833fb1f",
        "sha256": "0fe640c15003a7dbee5b64f0c3f86a78bdb69606d8f0aeafb1f4067c18d7c92f"
      },
      "dob": {
        "date": "1987-04-09T05:38:00.483Z",
        "age": 34
      },
      "registered": {
        "date": "2003-06-02T02:51:31.451Z",
        "age": 18
      },
      "phone": "03-82-63-53-14",
      "cell": "06-26-70-83-57",
      "id": {
        "name": "INSEE",
        "value": "1NNaN06164376 33"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/38.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Darryl",
        "last": "Webb"
      },
      "location": {
        "street": {
          "number": 7357,
          "name": "Patrick Street"
        },
        "city": "Kilcock",
        "state": "Wicklow",
        "country": "Ireland",
        "postcode": 87131,
        "coordinates": {
          "latitude": "-9.6571",
          "longitude": "-138.7335"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "darryl.webb@example.com",
      "login": {
        "uuid": "c2d8040b-887e-43fd-8108-9e7b7d36c6a9",
        "username": "goldenostrich429",
        "password": "jeter2",
        "salt": "cCwJsdKR",
        "md5": "d3e8d894c7c2d6dfef09709b5b261776",
        "sha1": "1180e164f0657156e2b13479a5946d330d989d26",
        "sha256": "b84d4d0c5d338e6113a73509c1e73555fed9ae4c84b8d605e99762897371f838"
      },
      "dob": {
        "date": "1971-11-07T21:14:02.722Z",
        "age": 50
      },
      "registered": {
        "date": "2011-11-07T06:55:06.458Z",
        "age": 10
      },
      "phone": "011-522-4459",
      "cell": "081-078-3898",
      "id": {
        "name": "PPS",
        "value": "4182299T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/91.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Célia",
        "last": "Gaillard"
      },
      "location": {
        "street": {
          "number": 2119,
          "name": "Place de L'Abbé-Basset"
        },
        "city": "Argenteuil",
        "state": "Pas-de-Calais",
        "country": "France",
        "postcode": 78214,
        "coordinates": {
          "latitude": "27.2364",
          "longitude": "6.1325"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "celia.gaillard@example.com",
      "login": {
        "uuid": "6b98d5f5-2809-4a52-87cc-cbadc334600e",
        "username": "bigostrich666",
        "password": "jarrett",
        "salt": "hHxqUcGX",
        "md5": "fb6548f6ace74cf3939612ad43db616f",
        "sha1": "30e95f50d47b7614c4e1ee317eeb4db7cc500d6c",
        "sha256": "e7cd3802277be6bab114937dd7e63794f83cbc9b473ef1e347d833bb243cf88a"
      },
      "dob": {
        "date": "1970-01-04T05:13:37.937Z",
        "age": 51
      },
      "registered": {
        "date": "2011-06-27T00:14:11.789Z",
        "age": 10
      },
      "phone": "05-80-07-26-54",
      "cell": "06-64-62-78-94",
      "id": {
        "name": "INSEE",
        "value": "2NNaN25536939 05"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/11.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Justin",
        "last": "Young"
      },
      "location": {
        "street": {
          "number": 55,
          "name": "Park Rd"
        },
        "city": "Delisle",
        "state": "British Columbia",
        "country": "Canada",
        "postcode": "I9Z 3T6",
        "coordinates": {
          "latitude": "-12.6623",
          "longitude": "-138.5748"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "justin.young@example.com",
      "login": {
        "uuid": "2c772fd4-fe9a-49e1-afed-d8c1edd25c08",
        "username": "purplelion796",
        "password": "chrissy",
        "salt": "pS92jffx",
        "md5": "94a9e3eff607e402a37a2065d6e70879",
        "sha1": "6e6cf1eb7f5be3163f5a916e66a1303000ad4c8b",
        "sha256": "3ea6ae2f6b7dc2fbcf891a0ffdd7c8334f8e7cd7bf4158f8d18420ac79ee8f13"
      },
      "dob": {
        "date": "1986-01-02T19:54:31.410Z",
        "age": 35
      },
      "registered": {
        "date": "2006-03-24T06:01:39.885Z",
        "age": 15
      },
      "phone": "471-733-0870",
      "cell": "160-440-7541",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "محمدپارسا",
        "last": "کوتی"
      },
      "location": {
        "street": {
          "number": 4537,
          "name": "پارک طالقانی"
        },
        "city": "اراک",
        "state": "فارس",
        "country": "Iran",
        "postcode": 46532,
        "coordinates": {
          "latitude": "-38.3458",
          "longitude": "-164.0424"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "mhmdprs.khwty@example.com",
      "login": {
        "uuid": "b79c1f46-4315-43f2-b55e-ca202e043a23",
        "username": "crazymeercat275",
        "password": "kane",
        "salt": "gn0xRnXH",
        "md5": "51c45327a79a6645755caef1f7064735",
        "sha1": "a9a737aff7f785aea6ce5e0ae2cce87f02abbf95",
        "sha256": "10b388bbd08df1571e9f4a62a67387413654eb2ba427a7247edd3274ac900018"
      },
      "dob": {
        "date": "1949-11-03T07:20:23.386Z",
        "age": 72
      },
      "registered": {
        "date": "2008-01-15T07:04:39.637Z",
        "age": 13
      },
      "phone": "002-48908988",
      "cell": "0989-650-4574",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/76.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Andrea",
        "last": "Christiansen"
      },
      "location": {
        "street": {
          "number": 1323,
          "name": "Rosengade"
        },
        "city": "Assens",
        "state": "Sjælland",
        "country": "Denmark",
        "postcode": 19312,
        "coordinates": {
          "latitude": "-4.6592",
          "longitude": "118.9188"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "andrea.christiansen@example.com",
      "login": {
        "uuid": "6bf63e27-eaf7-475f-9e34-cc028d7e3b09",
        "username": "organictiger800",
        "password": "anderson",
        "salt": "j7j9JZix",
        "md5": "d6efffaaea82dd9c758cc92687499cd9",
        "sha1": "56decef16a4c2e56b6fb0e0eb49026f08e345b0e",
        "sha256": "eee496ec53e2002f382da67b7b13859f6efc5f2ca498459418a04afcf9591504"
      },
      "dob": {
        "date": "1996-09-19T12:27:08.808Z",
        "age": 25
      },
      "registered": {
        "date": "2003-09-12T18:15:31.449Z",
        "age": 18
      },
      "phone": "94386709",
      "cell": "63209172",
      "id": {
        "name": "CPR",
        "value": "190996-6730"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/34.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Naja",
        "last": "Poulsen"
      },
      "location": {
        "street": {
          "number": 6451,
          "name": "Blåmejsevej"
        },
        "city": "Fredeikssund",
        "state": "Syddanmark",
        "country": "Denmark",
        "postcode": 87979,
        "coordinates": {
          "latitude": "-39.5293",
          "longitude": "107.2983"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "naja.poulsen@example.com",
      "login": {
        "uuid": "2847a671-26d0-4876-a3f0-4715f1757038",
        "username": "whitegoose830",
        "password": "cashmone",
        "salt": "BEIggwTj",
        "md5": "1631d70b391f968f556015f4960f1171",
        "sha1": "3f6faa30ffa074029f81319b39d8992c380fcafa",
        "sha256": "da38364d75cee0a96f825ef0e239d8c2ca2a7d7d4129d5a3a0a74686f69b8085"
      },
      "dob": {
        "date": "1950-01-05T09:52:54.931Z",
        "age": 71
      },
      "registered": {
        "date": "2017-11-05T09:52:11.493Z",
        "age": 4
      },
      "phone": "54000681",
      "cell": "72149449",
      "id": {
        "name": "CPR",
        "value": "050150-1269"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/61.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/61.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/61.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Riley",
        "last": "Mckinney"
      },
      "location": {
        "street": {
          "number": 6224,
          "name": "Marsh Ln"
        },
        "city": "Moscow",
        "state": "Connecticut",
        "country": "United States",
        "postcode": 47737,
        "coordinates": {
          "latitude": "35.9744",
          "longitude": "108.9569"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "riley.mckinney@example.com",
      "login": {
        "uuid": "cf7bea45-0d10-4b64-99b8-1022078982c8",
        "username": "bluegorilla227",
        "password": "ride",
        "salt": "UQwRDr7R",
        "md5": "edcdd28f17cce32a793dfe32ffed4d3b",
        "sha1": "5590a7987536eee8fc1e36061b93af5fdbb8e770",
        "sha256": "e95ebac29b4ee5436dea2040b467b5611b5c9bfe29236d52f6703d51a7d80227"
      },
      "dob": {
        "date": "1946-04-26T05:12:05.943Z",
        "age": 75
      },
      "registered": {
        "date": "2016-07-26T01:08:56.999Z",
        "age": 5
      },
      "phone": "(508)-504-9188",
      "cell": "(661)-918-2734",
      "id": {
        "name": "SSN",
        "value": "372-39-8933"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/15.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/15.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/15.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Milton",
        "last": "Burns"
      },
      "location": {
        "street": {
          "number": 8874,
          "name": "South Street"
        },
        "city": "Bandon",
        "state": "Longford",
        "country": "Ireland",
        "postcode": 89162,
        "coordinates": {
          "latitude": "19.5900",
          "longitude": "-48.5928"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "milton.burns@example.com",
      "login": {
        "uuid": "f73d7f9d-1e14-408f-9f0f-078e4dc04de6",
        "username": "silvermouse881",
        "password": "trunks",
        "salt": "i14uK8iA",
        "md5": "db4775a5bf42a85d384b81e3c48af3b3",
        "sha1": "671fdfae9ad5a9bad8d69999642409a79ac22c3d",
        "sha256": "a2c4b692e649542d1bb09629ece39ea1416640c23b04893d1d754289ea4fcd65"
      },
      "dob": {
        "date": "1951-04-07T13:42:32.838Z",
        "age": 70
      },
      "registered": {
        "date": "2011-01-20T01:24:11.249Z",
        "age": 10
      },
      "phone": "071-686-2453",
      "cell": "081-438-6351",
      "id": {
        "name": "PPS",
        "value": "6565180T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Nilzete",
        "last": "Freitas"
      },
      "location": {
        "street": {
          "number": 4726,
          "name": "Rua Santa Rita "
        },
        "city": "Barra Mansa",
        "state": "Rondônia",
        "country": "Brazil",
        "postcode": 96255,
        "coordinates": {
          "latitude": "49.9777",
          "longitude": "68.1852"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "nilzete.freitas@example.com",
      "login": {
        "uuid": "c15677f6-5ff6-4e9d-bd52-e1dee6092def",
        "username": "yellowdog409",
        "password": "qing",
        "salt": "Bss32zrx",
        "md5": "3df863507fa280d9baea70d77f56fa07",
        "sha1": "b077325093b0a947518fa503fc168e99e5577960",
        "sha256": "ad6c1d61464043fddd63e928f9e2b36dcb3f5aff1e66011e16657107aae05a0f"
      },
      "dob": {
        "date": "1994-01-21T17:41:10.197Z",
        "age": 27
      },
      "registered": {
        "date": "2011-06-18T15:51:49.293Z",
        "age": 10
      },
      "phone": "(23) 6269-7522",
      "cell": "(15) 6408-6851",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Mouad",
        "last": "Eggen"
      },
      "location": {
        "street": {
          "number": 3823,
          "name": "Centraalspoor"
        },
        "city": "Langelo",
        "state": "Limburg",
        "country": "Netherlands",
        "postcode": 94599,
        "coordinates": {
          "latitude": "8.4895",
          "longitude": "13.7310"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "mouad.eggen@example.com",
      "login": {
        "uuid": "258b6d97-fa06-45f7-9c08-7ae962c62627",
        "username": "organicbutterfly920",
        "password": "999999",
        "salt": "iQIHd46f",
        "md5": "271880633adad430b33bfa816f68839f",
        "sha1": "462e19564e7aaedc7dd51fe2d18fa3859bdfecf7",
        "sha256": "cfe7235fbc6aa0c2d13ea895a35eb8ec9f5472a74174bbd5153b9e5fbe7e86c5"
      },
      "dob": {
        "date": "1975-03-04T11:30:51.810Z",
        "age": 46
      },
      "registered": {
        "date": "2016-04-16T09:12:43.738Z",
        "age": 5
      },
      "phone": "(171)-834-0813",
      "cell": "(188)-499-5632",
      "id": {
        "name": "BSN",
        "value": "34604366"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/58.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Layla",
        "last": "Hall"
      },
      "location": {
        "street": {
          "number": 1313,
          "name": "Devon Street"
        },
        "city": "Hamilton",
        "state": "Otago",
        "country": "New Zealand",
        "postcode": 96362,
        "coordinates": {
          "latitude": "-51.9467",
          "longitude": "117.3251"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "layla.hall@example.com",
      "login": {
        "uuid": "b4ef9392-aa84-424a-a3db-bc966887bf74",
        "username": "greentiger385",
        "password": "ssss",
        "salt": "Ph9ZiIov",
        "md5": "83e936b3a7a694dd6d1d11996c932e9e",
        "sha1": "45a3def3a14bce43a131d090a5317fddf8090e0b",
        "sha256": "b383c3fabc4e63d1e262a539b9de3b2f9d46c82e4577aca2e9d68ef9229b12ac"
      },
      "dob": {
        "date": "1967-04-28T02:43:48.588Z",
        "age": 54
      },
      "registered": {
        "date": "2002-10-19T14:20:11.915Z",
        "age": 19
      },
      "phone": "(012)-735-8757",
      "cell": "(266)-544-2085",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/94.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jansénio",
        "last": "Pires"
      },
      "location": {
        "street": {
          "number": 2547,
          "name": "Rua Minas Gerais "
        },
        "city": "Americana",
        "state": "Mato Grosso do Sul",
        "country": "Brazil",
        "postcode": 50628,
        "coordinates": {
          "latitude": "-84.1699",
          "longitude": "-111.1845"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "jansenio.pires@example.com",
      "login": {
        "uuid": "70eff130-8495-4dad-ad72-2026e6804144",
        "username": "organicswan721",
        "password": "monroe",
        "salt": "9FOQWkxq",
        "md5": "d85f04d82756c027094fc5d2bda65279",
        "sha1": "ab47970cc1bd3129d6e468294b8bd9101f2a1158",
        "sha256": "6db1410cd3ca2611226d26d59b9a16a46bc5f58a13776a574f5d4befc4129f82"
      },
      "dob": {
        "date": "1980-01-06T23:27:04.579Z",
        "age": 41
      },
      "registered": {
        "date": "2003-02-14T15:39:07.703Z",
        "age": 18
      },
      "phone": "(86) 2356-4792",
      "cell": "(31) 5101-0679",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/39.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Nikolaj",
        "last": "Jørgensen"
      },
      "location": {
        "street": {
          "number": 6486,
          "name": "Præstegårdsvej"
        },
        "city": "Allinge",
        "state": "Sjælland",
        "country": "Denmark",
        "postcode": 25225,
        "coordinates": {
          "latitude": "-84.7013",
          "longitude": "-136.2700"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "nikolaj.jorgensen@example.com",
      "login": {
        "uuid": "517620f6-2ebe-407b-b8dc-8ec642afde7e",
        "username": "redduck734",
        "password": "defender",
        "salt": "OTkP1LZh",
        "md5": "10305535e901d8d11eb9063d64c4c15c",
        "sha1": "85c777c30bc5ca8954bdf43848088f59c606cbf8",
        "sha256": "bce5dac0ff2ae08bf7798b894abd6830fbd573bc87684c4cee70a1ff8a18a8fb"
      },
      "dob": {
        "date": "1969-07-10T13:06:59.403Z",
        "age": 52
      },
      "registered": {
        "date": "2016-10-16T10:17:40.607Z",
        "age": 5
      },
      "phone": "44452969",
      "cell": "23254062",
      "id": {
        "name": "CPR",
        "value": "100769-2988"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/42.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Elias",
        "last": "Jutila"
      },
      "location": {
        "street": {
          "number": 9041,
          "name": "Suvantokatu"
        },
        "city": "Kyyjärvi",
        "state": "Central Ostrobothnia",
        "country": "Finland",
        "postcode": 33534,
        "coordinates": {
          "latitude": "0.2975",
          "longitude": "-68.8709"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "elias.jutila@example.com",
      "login": {
        "uuid": "59a35174-d68f-4076-85d1-362fce586983",
        "username": "silverswan817",
        "password": "smile1",
        "salt": "rBhrpEPD",
        "md5": "1f87049f21caa9cd544679a349816506",
        "sha1": "cc513b6e81c0319929aab0d93dc1b72ff55d7194",
        "sha256": "7f5b5afb094c5f407bdf5b040c1ac1d6d860d6521222b5cf356f7b780cdbf07c"
      },
      "dob": {
        "date": "1958-09-14T09:22:34.620Z",
        "age": 63
      },
      "registered": {
        "date": "2003-09-19T01:57:52.731Z",
        "age": 18
      },
      "phone": "08-295-896",
      "cell": "041-794-30-88",
      "id": {
        "name": "HETU",
        "value": "NaNNA711undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/11.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mademoiselle",
        "first": "Beatriz",
        "last": "Pierre"
      },
      "location": {
        "street": {
          "number": 7470,
          "name": "Rue Denfert-Rochereau"
        },
        "city": "Murgenthal",
        "state": "Valais",
        "country": "Switzerland",
        "postcode": 3544,
        "coordinates": {
          "latitude": "36.5269",
          "longitude": "-21.6891"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "beatriz.pierre@example.com",
      "login": {
        "uuid": "ce7c1d76-0445-4975-8922-61b968892938",
        "username": "organicpanda859",
        "password": "steven1",
        "salt": "kR1ClanK",
        "md5": "8aa2a8ebca29f0d36c78170333c4bcb3",
        "sha1": "68cf0bd7830001e538524c158c31cff3e8898ece",
        "sha256": "214aa92b3735780bfbd53f60e6539173dff1896c461e0e3a581ecab794a73b4e"
      },
      "dob": {
        "date": "1965-08-08T09:51:23.448Z",
        "age": 56
      },
      "registered": {
        "date": "2007-10-05T22:45:12.880Z",
        "age": 14
      },
      "phone": "077 255 19 22",
      "cell": "077 401 06 40",
      "id": {
        "name": "AVS",
        "value": "756.8602.3297.31"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Alison",
        "last": "James"
      },
      "location": {
        "street": {
          "number": 5745,
          "name": "Springfield Road"
        },
        "city": "Nottingham",
        "state": "Merseyside",
        "country": "United Kingdom",
        "postcode": "B5Y 4XS",
        "coordinates": {
          "latitude": "-4.0134",
          "longitude": "53.1693"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "alison.james@example.com",
      "login": {
        "uuid": "edf4a6d6-ce2d-4677-8881-d127190919c5",
        "username": "sadmouse520",
        "password": "xing",
        "salt": "E4LvMbhR",
        "md5": "6b36021e667af9d4097b7c5038a35b0e",
        "sha1": "bd7fced6a88a15b2c6fecdc0d1978667f5d23f6e",
        "sha256": "09524f32ddd7e95040b35e15082fea8e45ff001fbb227135a2fdb9c05be6368f"
      },
      "dob": {
        "date": "1985-10-05T04:48:34.587Z",
        "age": 36
      },
      "registered": {
        "date": "2016-06-28T14:48:13.472Z",
        "age": 5
      },
      "phone": "016977 0250",
      "cell": "0742-766-489",
      "id": {
        "name": "NINO",
        "value": "OM 36 78 80 Z"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/75.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Arlene",
        "last": "da Mota"
      },
      "location": {
        "street": {
          "number": 7554,
          "name": "Rua Principal"
        },
        "city": "Mossoró",
        "state": "Minas Gerais",
        "country": "Brazil",
        "postcode": 62101,
        "coordinates": {
          "latitude": "19.1833",
          "longitude": "-159.0018"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "arlene.damota@example.com",
      "login": {
        "uuid": "2bd43e3b-6f28-4ae8-bc8e-086c7de0f13d",
        "username": "crazyzebra649",
        "password": "lipstick",
        "salt": "YVFuHdJk",
        "md5": "bdcf33597019d1146f6f848571fbada8",
        "sha1": "3607a54f10d4c593f4092727d9b09c215a4e5a3d",
        "sha256": "0e1b37ea37fcb29b97f2d0ebc0a995aa082e1ae19fa057b666b0082f7d1b3ff2"
      },
      "dob": {
        "date": "1963-09-09T08:40:09.332Z",
        "age": 58
      },
      "registered": {
        "date": "2015-10-25T01:30:38.728Z",
        "age": 6
      },
      "phone": "(03) 3914-6129",
      "cell": "(36) 2628-0391",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/12.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Alex",
        "last": "Delgado"
      },
      "location": {
        "street": {
          "number": 7084,
          "name": "Calle de Arganzuela"
        },
        "city": "Zaragoza",
        "state": "Castilla la Mancha",
        "country": "Spain",
        "postcode": 96771,
        "coordinates": {
          "latitude": "65.7945",
          "longitude": "-74.8354"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "alex.delgado@example.com",
      "login": {
        "uuid": "559bf538-25a9-48ae-9084-462e827d07b3",
        "username": "redcat796",
        "password": "555666",
        "salt": "hUns6sO2",
        "md5": "521e3b6a19c8808bec8e6e652b1dce58",
        "sha1": "1ea4ae6177a550f405dfdb3a872550a732a93159",
        "sha256": "464843afebe21dc59dded0b4137b88373d743b3821cb950378ab07c69bf4632d"
      },
      "dob": {
        "date": "1948-12-15T16:37:52.893Z",
        "age": 73
      },
      "registered": {
        "date": "2004-02-23T20:02:06.353Z",
        "age": 17
      },
      "phone": "988-227-573",
      "cell": "645-731-700",
      "id": {
        "name": "DNI",
        "value": "27959573-I"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/48.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Dylan",
        "last": "Kumar"
      },
      "location": {
        "street": {
          "number": 1559,
          "name": "North Street"
        },
        "city": "Greymouth",
        "state": "West Coast",
        "country": "New Zealand",
        "postcode": 38940,
        "coordinates": {
          "latitude": "-23.5444",
          "longitude": "144.9743"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "dylan.kumar@example.com",
      "login": {
        "uuid": "ee822252-45b3-406d-af67-9c581eba8512",
        "username": "smallladybug844",
        "password": "andrea",
        "salt": "7Kh5F1Wz",
        "md5": "958a717b6decf71248ab0a2bedba5d19",
        "sha1": "165e6fd22411cbae4cb03a3908a66c4e2289a2af",
        "sha256": "dd47823d422ac47a1532e3bdb28530d65879054c2c4292773b1a70bdd12184d3"
      },
      "dob": {
        "date": "1961-03-18T03:17:38.982Z",
        "age": 60
      },
      "registered": {
        "date": "2010-05-09T19:13:59.278Z",
        "age": 11
      },
      "phone": "(857)-298-3446",
      "cell": "(879)-608-2750",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/77.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Javier",
        "last": "Hernandez"
      },
      "location": {
        "street": {
          "number": 5525,
          "name": "Richmond Road"
        },
        "city": "Bath",
        "state": "East Sussex",
        "country": "United Kingdom",
        "postcode": "AH18 4NF",
        "coordinates": {
          "latitude": "16.8820",
          "longitude": "76.5353"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "javier.hernandez@example.com",
      "login": {
        "uuid": "848224ad-e336-4fcc-8805-0176320880f0",
        "username": "beautifulgorilla437",
        "password": "piao",
        "salt": "f4km0VHe",
        "md5": "9349d8da2fc10fa5c3f01ba74bb723d1",
        "sha1": "c1e93801fdc3cec813e87200af77533871d94031",
        "sha256": "b6df2e80c704a65a44d11c1f095f4690ef24dd8131ed6a447d5c0d80e89de42c"
      },
      "dob": {
        "date": "1996-12-29T12:18:37.119Z",
        "age": 25
      },
      "registered": {
        "date": "2005-03-11T16:10:02.012Z",
        "age": 16
      },
      "phone": "017684 22567",
      "cell": "0757-120-488",
      "id": {
        "name": "NINO",
        "value": "TJ 31 46 86 M"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/19.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Esat",
        "last": "Babaoğlu"
      },
      "location": {
        "street": {
          "number": 4406,
          "name": "Vatan Cd"
        },
        "city": "Nevşehir",
        "state": "Karaman",
        "country": "Turkey",
        "postcode": 26946,
        "coordinates": {
          "latitude": "42.6616",
          "longitude": "59.4159"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "esat.babaoglu@example.com",
      "login": {
        "uuid": "e79fc64b-aa36-4970-9f50-65b4bb66d7e6",
        "username": "sadelephant166",
        "password": "garion",
        "salt": "PGauUISW",
        "md5": "bb4796ea2cdd18d5e7992a53918c71e5",
        "sha1": "4fa52cf6660d28d85db597ddee32f6bc5bd20706",
        "sha256": "77f236e33e86a55f2892c708929c252671c3d3bc65e935a1f8b796ea73e2de11"
      },
      "dob": {
        "date": "1958-01-22T18:29:01.055Z",
        "age": 63
      },
      "registered": {
        "date": "2012-04-22T08:22:29.145Z",
        "age": 9
      },
      "phone": "(610)-078-7126",
      "cell": "(083)-272-3802",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/1.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Evelyn",
        "last": "Wallace"
      },
      "location": {
        "street": {
          "number": 5698,
          "name": "Ranchview Dr"
        },
        "city": "Port Macquarie",
        "state": "Australian Capital Territory",
        "country": "Australia",
        "postcode": 7861,
        "coordinates": {
          "latitude": "-73.3222",
          "longitude": "146.4763"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "evelyn.wallace@example.com",
      "login": {
        "uuid": "8f56f0e2-c1a0-48e5-a31f-abce47dfc088",
        "username": "crazyostrich516",
        "password": "southpar",
        "salt": "nB4kNemg",
        "md5": "32d727535bb66e6ec862328bf8a6cc8d",
        "sha1": "e0811f77560895b36e23a25843a5b6395de78b23",
        "sha256": "4ca4a40aa0613c06536af1c0e245be020ded3bb946c02c6824012448c1da4bed"
      },
      "dob": {
        "date": "1975-11-03T13:12:13.779Z",
        "age": 46
      },
      "registered": {
        "date": "2003-06-06T07:42:48.868Z",
        "age": 18
      },
      "phone": "04-9509-5818",
      "cell": "0435-358-422",
      "id": {
        "name": "TFN",
        "value": "313082393"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/12.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "محمدپارسا",
        "last": "نكو نظر"
      },
      "location": {
        "street": {
          "number": 4853,
          "name": "جلال آل احمد"
        },
        "city": "ساری",
        "state": "هرمزگان",
        "country": "Iran",
        "postcode": 70479,
        "coordinates": {
          "latitude": "83.4242",
          "longitude": "-158.7153"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "mhmdprs.nkwnzr@example.com",
      "login": {
        "uuid": "08544243-fe65-41fb-bce3-d9441f289f54",
        "username": "heavyelephant741",
        "password": "enrique",
        "salt": "xEXA9Rgk",
        "md5": "93e17d131e9c328d4651961817b35d01",
        "sha1": "2d5ed45f7d0016cce63525f45c1d5cfd370dd6bb",
        "sha256": "723491ca918f6307f43afc22ce09d42046f490fee672d01d20731a4f7aecb107"
      },
      "dob": {
        "date": "1982-03-23T17:49:54.143Z",
        "age": 39
      },
      "registered": {
        "date": "2011-09-13T01:31:05.969Z",
        "age": 10
      },
      "phone": "046-16119228",
      "cell": "0968-586-2510",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Juan",
        "last": "Banks"
      },
      "location": {
        "street": {
          "number": 1016,
          "name": "Valley View Ln"
        },
        "city": "Hobart",
        "state": "Northern Territory",
        "country": "Australia",
        "postcode": 7950,
        "coordinates": {
          "latitude": "74.5906",
          "longitude": "-52.7813"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "juan.banks@example.com",
      "login": {
        "uuid": "9ecb2348-5031-4836-8759-039918d30945",
        "username": "crazylion364",
        "password": "stallion",
        "salt": "k1Rmj2zy",
        "md5": "db2dd4614d939c7d20f2e289c0be67e4",
        "sha1": "e1f06a8b4add66e54e7f061fc4cc45fdc8a6be6e",
        "sha256": "0ca7911aa1c9654a1c4421c212783708551127fd613f85edbb62561048d508c0"
      },
      "dob": {
        "date": "1967-11-14T22:59:05.436Z",
        "age": 54
      },
      "registered": {
        "date": "2014-04-14T19:49:11.146Z",
        "age": 7
      },
      "phone": "06-3051-2889",
      "cell": "0491-673-104",
      "id": {
        "name": "TFN",
        "value": "750548830"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/26.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Alice",
        "last": "Taylor"
      },
      "location": {
        "street": {
          "number": 951,
          "name": "Lichfield Street"
        },
        "city": "Hastings",
        "state": "Auckland",
        "country": "New Zealand",
        "postcode": 58021,
        "coordinates": {
          "latitude": "-66.5854",
          "longitude": "97.1558"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "alice.taylor@example.com",
      "login": {
        "uuid": "63139870-6d77-4afb-889e-35d96210ea10",
        "username": "ticklishelephant500",
        "password": "direct",
        "salt": "FXCpeCvd",
        "md5": "4d9859c17a14e47a16e5a8511cdf9be9",
        "sha1": "6a2af970d38a572a780f8ffe14ef3a45310585f2",
        "sha256": "c710dcdc35958d200453f46a4c112327163f6f981575a575b5093a82334f06fd"
      },
      "dob": {
        "date": "1975-08-01T11:17:15.760Z",
        "age": 46
      },
      "registered": {
        "date": "2016-06-16T19:32:29.918Z",
        "age": 5
      },
      "phone": "(059)-647-1771",
      "cell": "(811)-367-6326",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/25.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Susan",
        "last": "Grant"
      },
      "location": {
        "street": {
          "number": 7836,
          "name": "Ormond Quay"
        },
        "city": "Dungarvan",
        "state": "Galway City",
        "country": "Ireland",
        "postcode": 36008,
        "coordinates": {
          "latitude": "71.6847",
          "longitude": "-75.0208"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "susan.grant@example.com",
      "login": {
        "uuid": "f4dcd01e-8a59-419c-af31-0d6773b54d3e",
        "username": "bluekoala215",
        "password": "michigan",
        "salt": "rZmPSVYh",
        "md5": "9daa68678beb0967406b77f081cd1f0a",
        "sha1": "71e0b1f3dc793328142bae6073fdd2067030028d",
        "sha256": "5924601d2257cf4c58e99f8967ccaca2a884b5f04059baac19594482e64ccfdb"
      },
      "dob": {
        "date": "1952-01-07T17:43:12.197Z",
        "age": 69
      },
      "registered": {
        "date": "2007-07-23T15:02:46.601Z",
        "age": 14
      },
      "phone": "041-570-4982",
      "cell": "081-735-8438",
      "id": {
        "name": "PPS",
        "value": "2300431T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/7.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Iris",
        "last": "Nervik"
      },
      "location": {
        "street": {
          "number": 1732,
          "name": "Frimanns gate"
        },
        "city": "Røra Stasjon",
        "state": "Trøndelag",
        "country": "Norway",
        "postcode": "4013",
        "coordinates": {
          "latitude": "-82.2296",
          "longitude": "113.0694"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "iris.nervik@example.com",
      "login": {
        "uuid": "66c80e92-9f8c-42e2-a541-86c564a005a6",
        "username": "angrydog713",
        "password": "bigboy",
        "salt": "VNbpHmNF",
        "md5": "72d5ed00cc7cdad4eab5f698aaa81c9e",
        "sha1": "fa510add8b738757beddfea3bc45c626ea29e472",
        "sha256": "59ca099314a1e3dd188faeb7d7dc523f0a3a57b0f73088fc2e49e728fe79c84a"
      },
      "dob": {
        "date": "1990-02-12T07:29:19.496Z",
        "age": 31
      },
      "registered": {
        "date": "2010-02-13T10:15:02.382Z",
        "age": 11
      },
      "phone": "24665079",
      "cell": "49210699",
      "id": {
        "name": "FN",
        "value": "12029013436"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/33.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "سام",
        "last": "گلشن"
      },
      "location": {
        "street": {
          "number": 8187,
          "name": "پارک 17 شهریور"
        },
        "city": "خرم‌آباد",
        "state": "مازندران",
        "country": "Iran",
        "postcode": 21339,
        "coordinates": {
          "latitude": "-81.1195",
          "longitude": "-39.5716"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "sm.glshn@example.com",
      "login": {
        "uuid": "c33a7279-b8b6-41f7-a6d4-d99cac5a65ea",
        "username": "saddog811",
        "password": "miriam",
        "salt": "TpRzvjIp",
        "md5": "e8a946a6534424895549e3c5acb0819a",
        "sha1": "336763273ad2ed9ae599db950e85eff8f99de424",
        "sha256": "1b5f1cce906317fbfd7f23cfa93dcadd2c3d86dbce0fb05e19b8545c30f09a40"
      },
      "dob": {
        "date": "1948-08-01T00:43:48.909Z",
        "age": 73
      },
      "registered": {
        "date": "2011-06-23T05:58:11.361Z",
        "age": 10
      },
      "phone": "083-02201683",
      "cell": "0995-940-4850",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/23.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Ida",
        "last": "Olsen"
      },
      "location": {
        "street": {
          "number": 3557,
          "name": "Bytoften"
        },
        "city": "København V",
        "state": "Midtjylland",
        "country": "Denmark",
        "postcode": 91784,
        "coordinates": {
          "latitude": "67.9976",
          "longitude": "-110.9287"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "ida.olsen@example.com",
      "login": {
        "uuid": "b41d44fa-7246-4ed1-8c59-76a89cc3f698",
        "username": "blackbutterfly143",
        "password": "chris1",
        "salt": "BsP78wKL",
        "md5": "83e07bf0584bbadd1d71fa95c8805418",
        "sha1": "de6762fa42d2d9e640ce36ac24f88fc8799da2d9",
        "sha256": "12193d0d462a013a3dc4e68ace79fb207504e848f18217ba4b677c41d5698032"
      },
      "dob": {
        "date": "1958-10-27T16:10:47.387Z",
        "age": 63
      },
      "registered": {
        "date": "2003-05-23T08:05:14.106Z",
        "age": 18
      },
      "phone": "73494562",
      "cell": "61101995",
      "id": {
        "name": "CPR",
        "value": "271058-4430"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Geziena",
        "last": "Verlinden"
      },
      "location": {
        "street": {
          "number": 4912,
          "name": "Hullekesbergseweg"
        },
        "city": "Britswert",
        "state": "Friesland",
        "country": "Netherlands",
        "postcode": 93633,
        "coordinates": {
          "latitude": "-57.5473",
          "longitude": "156.6604"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "geziena.verlinden@example.com",
      "login": {
        "uuid": "06c474ae-33fc-4303-84c9-832eb78967cb",
        "username": "whiteostrich406",
        "password": "superb",
        "salt": "1RvzLuT2",
        "md5": "1b756f23041fe0ca41524fa905c5aa01",
        "sha1": "3d62a568e4856555ecd8b0d83567914714bf6945",
        "sha256": "fd6906826de7fb2a92bb436ddccfb656363d04e4712004d392a6615aeac9ac6e"
      },
      "dob": {
        "date": "1982-03-06T05:56:52.485Z",
        "age": 39
      },
      "registered": {
        "date": "2019-06-06T05:10:52.656Z",
        "age": 2
      },
      "phone": "(437)-730-2150",
      "cell": "(347)-039-7734",
      "id": {
        "name": "BSN",
        "value": "06646218"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Sara",
        "last": "Ramos"
      },
      "location": {
        "street": {
          "number": 6718,
          "name": "Avenida de Castilla"
        },
        "city": "Madrid",
        "state": "Comunidad Valenciana",
        "country": "Spain",
        "postcode": 52120,
        "coordinates": {
          "latitude": "27.3401",
          "longitude": "-129.4455"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "sara.ramos@example.com",
      "login": {
        "uuid": "9716a571-1d7f-4936-9e56-8c6d2e09c9f8",
        "username": "tinylion944",
        "password": "jeffery",
        "salt": "F7DmpD36",
        "md5": "0338d591b69de06777aba44a6cac9ed4",
        "sha1": "f0749e57800d826b7f65c5a83e71f0b30b87b967",
        "sha256": "9b1573d84b407d1808fae6c400903c6a10b9fc6009a08b8429110a175d3253a3"
      },
      "dob": {
        "date": "1945-06-24T09:57:28.810Z",
        "age": 76
      },
      "registered": {
        "date": "2012-04-24T05:41:20.644Z",
        "age": 9
      },
      "phone": "942-919-037",
      "cell": "606-307-861",
      "id": {
        "name": "DNI",
        "value": "77082455-A"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/76.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Bryan",
        "last": "Burke"
      },
      "location": {
        "street": {
          "number": 9601,
          "name": "Victoria Street"
        },
        "city": "Manchester",
        "state": "Powys",
        "country": "United Kingdom",
        "postcode": "T6 2WT",
        "coordinates": {
          "latitude": "54.0095",
          "longitude": "-115.9025"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "bryan.burke@example.com",
      "login": {
        "uuid": "3d42b911-4fb3-4caa-b2aa-9c5ebc2e9067",
        "username": "yellowleopard536",
        "password": "westham",
        "salt": "dJWC74ms",
        "md5": "70426314d8c03ed04541b972c30594a4",
        "sha1": "a26e1d7ace7499ae4610de235e6bf6deb6bd3b89",
        "sha256": "42cc8ed99d13c0257c3b19e249e18c8af9d0a74a9860277ea9173910b0c4ad35"
      },
      "dob": {
        "date": "1966-09-23T22:53:27.726Z",
        "age": 55
      },
      "registered": {
        "date": "2009-09-29T17:21:49.453Z",
        "age": 12
      },
      "phone": "016977 76225",
      "cell": "0728-124-153",
      "id": {
        "name": "NINO",
        "value": "SG 80 51 42 N"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Sadraque",
        "last": "Costa"
      },
      "location": {
        "street": {
          "number": 397,
          "name": "Rua São José "
        },
        "city": "Franca",
        "state": "Paraná",
        "country": "Brazil",
        "postcode": 70610,
        "coordinates": {
          "latitude": "85.0466",
          "longitude": "-56.0641"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "sadraque.costa@example.com",
      "login": {
        "uuid": "e8ffb6c2-fde2-48a2-b3a6-e1ea1ba7b2e2",
        "username": "purplegorilla283",
        "password": "helloo",
        "salt": "JftEg3Zy",
        "md5": "287e0bff762cf4dd964425026e3ae577",
        "sha1": "78b677c85a8eaea42de6693744b9ffe1d78bb08b",
        "sha256": "169a5e5de83e74bb943cb8b4415feaaaf8b67447eebac27fac8f50522c865864"
      },
      "dob": {
        "date": "1979-12-13T19:01:05.097Z",
        "age": 42
      },
      "registered": {
        "date": "2005-07-08T18:36:28.719Z",
        "age": 16
      },
      "phone": "(35) 5618-3339",
      "cell": "(17) 5395-4596",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Katrine",
        "last": "Pedersen"
      },
      "location": {
        "street": {
          "number": 6754,
          "name": "Musvågevej"
        },
        "city": "København N",
        "state": "Syddanmark",
        "country": "Denmark",
        "postcode": 75300,
        "coordinates": {
          "latitude": "36.5037",
          "longitude": "119.0516"
        },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "katrine.pedersen@example.com",
      "login": {
        "uuid": "002dd514-02db-43ad-984b-815d2d74ebec",
        "username": "ticklishelephant835",
        "password": "zzzzz",
        "salt": "Z8jhui6H",
        "md5": "d8c0818063918de3993e77694fec6fad",
        "sha1": "b0209ed6d6bb213e9055b6a16d5d2b3bc3980e37",
        "sha256": "55b07a4ffb49b9ed92a17f65d6fe4261a2e0111ed43e4f17827ec00c8bda023c"
      },
      "dob": {
        "date": "1950-05-23T23:16:42.221Z",
        "age": 71
      },
      "registered": {
        "date": "2006-01-27T17:47:50.675Z",
        "age": 15
      },
      "phone": "38323149",
      "cell": "46689243",
      "id": {
        "name": "CPR",
        "value": "230550-5920"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/7.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Tracy",
        "last": "Kuhn"
      },
      "location": {
        "street": {
          "number": 9161,
          "name": "Depaul Dr"
        },
        "city": "Wagga Wagga",
        "state": "Queensland",
        "country": "Australia",
        "postcode": 522,
        "coordinates": {
          "latitude": "-64.2893",
          "longitude": "-125.1768"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "tracy.kuhn@example.com",
      "login": {
        "uuid": "1a4d06e0-2675-4eac-967d-4b594273ac0d",
        "username": "silvergorilla648",
        "password": "check",
        "salt": "bAPeYmUv",
        "md5": "aeb1abdac01f81d3927130adc518a684",
        "sha1": "4e1c513f4342c1c76310b8399fa242852c6d1b6a",
        "sha256": "f560cae62ba60090ae02e880fcacc3c9b7033d482bb8e4eab2a14169064bf9e5"
      },
      "dob": {
        "date": "1984-12-22T12:04:08.917Z",
        "age": 37
      },
      "registered": {
        "date": "2007-07-15T21:57:25.671Z",
        "age": 14
      },
      "phone": "06-3413-7512",
      "cell": "0471-531-666",
      "id": {
        "name": "TFN",
        "value": "151966898"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Krystian",
        "last": "Cameron"
      },
      "location": {
        "street": {
          "number": 9796,
          "name": "Kalkhofseweg"
        },
        "city": "Kuinre",
        "state": "Noord-Brabant",
        "country": "Netherlands",
        "postcode": 61565,
        "coordinates": {
          "latitude": "-29.3880",
          "longitude": "35.9181"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "krystian.cameron@example.com",
      "login": {
        "uuid": "b0a1a75b-b469-453f-9ba7-fd0759409b75",
        "username": "yellowlion498",
        "password": "oscar",
        "salt": "2aBGRfvd",
        "md5": "0879c183ab3174c9c80636cddd7c58ad",
        "sha1": "6f61cb1186851371eb94f7c506d5429d6e86a6f0",
        "sha256": "e9e49b5bfb5d897de43c490af84949467093946689ef6f8e1a3c33f20522fb12"
      },
      "dob": {
        "date": "1949-08-07T01:28:52.793Z",
        "age": 72
      },
      "registered": {
        "date": "2007-05-28T16:31:08.147Z",
        "age": 14
      },
      "phone": "(147)-991-7358",
      "cell": "(246)-351-9762",
      "id": {
        "name": "BSN",
        "value": "25007010"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/42.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Lina",
        "last": "Fernandez"
      },
      "location": {
        "street": {
          "number": 5623,
          "name": "Rue Paul Bert"
        },
        "city": "Angers",
        "state": "Alpes-de-Haute-Provence",
        "country": "France",
        "postcode": 60824,
        "coordinates": {
          "latitude": "32.9092",
          "longitude": "-48.3265"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "lina.fernandez@example.com",
      "login": {
        "uuid": "88e18347-79f1-4cd5-9ed7-2e43ef7e353b",
        "username": "redkoala338",
        "password": "apollo13",
        "salt": "cRVYrzRX",
        "md5": "e687324465c055455294caba3a0c76a5",
        "sha1": "61dba937f6148b81fe5f6405a4e6bea46d0f01ec",
        "sha256": "999298a8404a371766eb1202c2557cfef39349a6b16a09d9fdeaf22f5a9a85b8"
      },
      "dob": {
        "date": "1955-03-17T23:18:14.601Z",
        "age": 66
      },
      "registered": {
        "date": "2007-03-13T17:27:13.927Z",
        "age": 14
      },
      "phone": "04-63-29-07-95",
      "cell": "06-70-15-00-70",
      "id": {
        "name": "INSEE",
        "value": "2NNaN20475317 06"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/80.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Lukas",
        "last": "Lenaerts"
      },
      "location": {
        "street": {
          "number": 9649,
          "name": "Kleinebuulsdijk"
        },
        "city": "Marrum",
        "state": "Noord-Holland",
        "country": "Netherlands",
        "postcode": 66103,
        "coordinates": {
          "latitude": "-51.8664",
          "longitude": "-106.1822"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "lukas.lenaerts@example.com",
      "login": {
        "uuid": "0cc1864b-08c7-41aa-b81d-d10c3b87a793",
        "username": "happykoala598",
        "password": "madison",
        "salt": "rBabmQfC",
        "md5": "530b30e0d016476902db12d697e55a95",
        "sha1": "4023f54e2e42e8b780e76ab73a9a17903745cf26",
        "sha256": "9d0d6fc7c0ae0683e5111c285ad8dbb833451a0a160a203be7de72dcc4c5a75d"
      },
      "dob": {
        "date": "1950-06-21T15:37:18.815Z",
        "age": 71
      },
      "registered": {
        "date": "2012-04-15T05:16:00.736Z",
        "age": 9
      },
      "phone": "(588)-427-6060",
      "cell": "(330)-739-1410",
      "id": {
        "name": "BSN",
        "value": "53513683"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Viola",
        "last": "Ewers"
      },
      "location": {
        "street": {
          "number": 4062,
          "name": "Birkenstraße"
        },
        "city": "Velburg",
        "state": "Schleswig-Holstein",
        "country": "Germany",
        "postcode": 12014,
        "coordinates": {
          "latitude": "40.8125",
          "longitude": "124.1218"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "viola.ewers@example.com",
      "login": {
        "uuid": "f749859f-5f1a-4228-bd0a-4154bfd21163",
        "username": "sadrabbit125",
        "password": "goirish",
        "salt": "oZINAAmW",
        "md5": "c3e09183251a2fb2654311c9d10d04e5",
        "sha1": "f4d99e6bd230d7d93f4ab120ea5e810df1da8633",
        "sha256": "ae3decc11788ab098e625fcc0126224b26b99a388e9ade7d415ee061a0745429"
      },
      "dob": {
        "date": "1988-01-02T02:31:45.937Z",
        "age": 33
      },
      "registered": {
        "date": "2013-10-26T05:21:29.666Z",
        "age": 8
      },
      "phone": "0394-1655932",
      "cell": "0172-5548741",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Zoe",
        "last": "Ginnish"
      },
      "location": {
        "street": {
          "number": 3894,
          "name": "Regent Ave"
        },
        "city": "Sherbrooke",
        "state": "Alberta",
        "country": "Canada",
        "postcode": "T6U 2H0",
        "coordinates": {
          "latitude": "21.5807",
          "longitude": "16.6809"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "zoe.ginnish@example.com",
      "login": {
        "uuid": "cc3d6b3c-550d-4c01-a077-1c8635ff6baa",
        "username": "brownmeercat835",
        "password": "blazer",
        "salt": "yHtQmIGp",
        "md5": "b56a241d87e752e1ae23d601e68b6cca",
        "sha1": "79605711f9bc8f0dbe33b47076ec4c6d6fb498f4",
        "sha256": "05a371b0575c36850d5e71c85a9242d1747322999c91192f6aeb587ae4b6c06a"
      },
      "dob": {
        "date": "1979-09-02T20:30:53.405Z",
        "age": 42
      },
      "registered": {
        "date": "2011-12-21T13:30:01.730Z",
        "age": 10
      },
      "phone": "746-834-4351",
      "cell": "424-510-2621",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/61.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/61.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/61.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Theo",
        "last": "Martin"
      },
      "location": {
        "street": {
          "number": 8345,
          "name": "Collingwood Street"
        },
        "city": "Rotorua",
        "state": "Manawatu-Wanganui",
        "country": "New Zealand",
        "postcode": 92023,
        "coordinates": {
          "latitude": "-46.7165",
          "longitude": "118.3245"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "theo.martin@example.com",
      "login": {
        "uuid": "ec7e0761-3f5b-43c8-8493-15c147ef0dee",
        "username": "ticklishladybug906",
        "password": "june",
        "salt": "mqiQrjlO",
        "md5": "8df9daea3be9832cf688e86ffa66f8f0",
        "sha1": "14e8eb422f27849c29ef1183d121c20535c76922",
        "sha256": "4758a469abb0b1564708d50cb5a218c285f0e07dd242fd20422708d7f4269fc6"
      },
      "dob": {
        "date": "1947-05-21T23:08:01.614Z",
        "age": 74
      },
      "registered": {
        "date": "2008-07-17T14:26:02.370Z",
        "age": 13
      },
      "phone": "(157)-417-9992",
      "cell": "(466)-076-2999",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/33.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "رونیکا",
        "last": "سالاری"
      },
      "location": {
        "street": {
          "number": 6763,
          "name": "دکتر مفتح"
        },
        "city": "کرمان",
        "state": "تهران",
        "country": "Iran",
        "postcode": 31051,
        "coordinates": {
          "latitude": "56.6812",
          "longitude": "138.9392"
        },
        "timezone": {
          "offset": "+4:30",
          "description": "Kabul"
        }
      },
      "email": "rwnykh.slry@example.com",
      "login": {
        "uuid": "fa9078b7-4811-4c32-a1b1-2f2f9d2519ec",
        "username": "silverlion579",
        "password": "8inches",
        "salt": "YHxXWYwW",
        "md5": "1b6929e7e651f2ad83ea6c08bc8bb47a",
        "sha1": "f1d28a8a09c252fd64e3e4d91be2dbb7354ee5bd",
        "sha256": "e6470532d5048628b2d04d859716d2a3dc7639bb5ba7846ee28a6a761c375e3e"
      },
      "dob": {
        "date": "1949-04-29T03:29:36.469Z",
        "age": 72
      },
      "registered": {
        "date": "2019-01-08T19:56:19.973Z",
        "age": 2
      },
      "phone": "074-32171426",
      "cell": "0906-960-8018",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/78.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/78.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/78.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Johnni",
        "last": "Carroll"
      },
      "location": {
        "street": {
          "number": 7694,
          "name": "York Road"
        },
        "city": "Newry",
        "state": "Suffolk",
        "country": "United Kingdom",
        "postcode": "IO9 7RD",
        "coordinates": {
          "latitude": "83.2461",
          "longitude": "-149.5841"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "johnni.carroll@example.com",
      "login": {
        "uuid": "5e75eab0-ea63-41f1-b3ac-504bbdf7a13f",
        "username": "whitelion527",
        "password": "swinger",
        "salt": "oJi88DuQ",
        "md5": "9ad30bcf92ebf231250fd96936d0c171",
        "sha1": "1314f75b266c4f6dcd917e9893f413555a80b52a",
        "sha256": "6026fad8d36d168e3fb7a3d2935478ec16289dbc0d3ca1d9f0a1e5a400965795"
      },
      "dob": {
        "date": "1992-12-15T19:03:36.916Z",
        "age": 29
      },
      "registered": {
        "date": "2013-11-28T09:00:02.577Z",
        "age": 8
      },
      "phone": "015395 28329",
      "cell": "0707-612-300",
      "id": {
        "name": "NINO",
        "value": "OP 98 64 86 N"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Jenny",
        "last": "Chavez"
      },
      "location": {
        "street": {
          "number": 249,
          "name": "Plum St"
        },
        "city": "Wollongong",
        "state": "South Australia",
        "country": "Australia",
        "postcode": 3784,
        "coordinates": {
          "latitude": "65.9593",
          "longitude": "-17.7505"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "jenny.chavez@example.com",
      "login": {
        "uuid": "78115b23-e5c1-4ea9-a000-9d2b317f76f1",
        "username": "goldentiger662",
        "password": "moritz",
        "salt": "NSM7VCaH",
        "md5": "19393caba3feafc9de792dc4b162544f",
        "sha1": "9872d243acf3d7c175d53f28eb552aff3a3844eb",
        "sha256": "8a7b005232df6978a414008faa2d8ed25dffc915283b5287192791b9502d455e"
      },
      "dob": {
        "date": "1951-11-21T00:55:42.565Z",
        "age": 70
      },
      "registered": {
        "date": "2003-05-30T10:53:39.122Z",
        "age": 18
      },
      "phone": "00-3860-5040",
      "cell": "0440-003-345",
      "id": {
        "name": "TFN",
        "value": "109595360"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/24.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Nathanaël",
        "last": "Robin"
      },
      "location": {
        "street": {
          "number": 257,
          "name": "Rue de Gerland"
        },
        "city": "Villeurbanne",
        "state": "Gard",
        "country": "France",
        "postcode": 10559,
        "coordinates": {
          "latitude": "-50.9800",
          "longitude": "55.9870"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "nathanael.robin@example.com",
      "login": {
        "uuid": "ffac99b9-7926-4ca5-b74f-bc3620d281e8",
        "username": "smallfish800",
        "password": "denise",
        "salt": "YUB5BtiN",
        "md5": "36d8ca27a7838f123b5d7e3dfa26d24f",
        "sha1": "8c06b72f2b63fa1584b86299a904945ff13ba377",
        "sha256": "ba3d05211a9f5017a4297bdc00dd272dde5c6d7428fc3afae50b07b240f046d8"
      },
      "dob": {
        "date": "1954-06-25T18:16:02.880Z",
        "age": 67
      },
      "registered": {
        "date": "2018-06-10T09:25:27.661Z",
        "age": 3
      },
      "phone": "01-06-60-44-91",
      "cell": "06-69-00-64-01",
      "id": {
        "name": "INSEE",
        "value": "1NNaN01060228 14"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Alfredo",
        "last": "Esteban"
      },
      "location": {
        "street": {
          "number": 6224,
          "name": "Calle de Argumosa"
        },
        "city": "Torrejón de Ardoz",
        "state": "Aragón",
        "country": "Spain",
        "postcode": 52710,
        "coordinates": {
          "latitude": "-73.6417",
          "longitude": "-18.9216"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "alfredo.esteban@example.com",
      "login": {
        "uuid": "f1deba2e-3d3c-4565-845e-de6597b18ec1",
        "username": "purplebutterfly718",
        "password": "enters",
        "salt": "Y3huJRPv",
        "md5": "fd3d30fd41b6a75fabe9f250889f5264",
        "sha1": "29d95616cdb0596ff43fc32a7037e7f7f177bd8d",
        "sha256": "d5e203ea244efac086891f2b8ee1cffd36c0243a4f6a45bcc330f7f863e34a55"
      },
      "dob": {
        "date": "1992-09-28T10:00:06.646Z",
        "age": 29
      },
      "registered": {
        "date": "2005-06-03T04:05:54.382Z",
        "age": 16
      },
      "phone": "909-993-872",
      "cell": "686-043-021",
      "id": {
        "name": "DNI",
        "value": "91032123-D"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Karla",
        "last": "Pedersen"
      },
      "location": {
        "street": {
          "number": 8262,
          "name": "Holbergsvej"
        },
        "city": "Nykøbing Sj.",
        "state": "Hovedstaden",
        "country": "Denmark",
        "postcode": 16055,
        "coordinates": {
          "latitude": "11.3793",
          "longitude": "136.6513"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "karla.pedersen@example.com",
      "login": {
        "uuid": "2de59f26-ecad-4182-aae9-369575d9591a",
        "username": "smallkoala119",
        "password": "whitney",
        "salt": "RV5qDDTJ",
        "md5": "a3d828b1cf47dc182055cd874cb2969e",
        "sha1": "e20e24f22e52dd5e0073f0589e1f5b549a50b846",
        "sha256": "ec8a85faaad13dd539893f8a0f6bfda6fdc59fd0a554748f80a70f8b28269e67"
      },
      "dob": {
        "date": "1978-10-15T19:41:41.603Z",
        "age": 43
      },
      "registered": {
        "date": "2006-10-17T01:14:05.465Z",
        "age": 15
      },
      "phone": "75995695",
      "cell": "37025864",
      "id": {
        "name": "CPR",
        "value": "151078-8406"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Marilou",
        "last": "Mitchell"
      },
      "location": {
        "street": {
          "number": 7965,
          "name": "Oak St"
        },
        "city": "Princeton",
        "state": "New Brunswick",
        "country": "Canada",
        "postcode": "N4F 5L7",
        "coordinates": {
          "latitude": "14.5035",
          "longitude": "70.9953"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "marilou.mitchell@example.com",
      "login": {
        "uuid": "82d11cb7-617a-41cf-b44e-d646bf35e863",
        "username": "greenfish537",
        "password": "marius",
        "salt": "Vk5PnJvR",
        "md5": "289a9dc7994d9af014dd9a5a6dbab76a",
        "sha1": "14238f8bb97e8c1559e5d52ca795c453fccafcf4",
        "sha256": "f6408aec5f706dcef0d93f43cef1a931a1e1fd05ba21cfb308a182c6a5677a5d"
      },
      "dob": {
        "date": "1955-01-14T18:20:43.010Z",
        "age": 66
      },
      "registered": {
        "date": "2018-11-16T20:08:11.990Z",
        "age": 3
      },
      "phone": "760-934-9760",
      "cell": "119-609-8928",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Monsieur",
        "first": "Bekim",
        "last": "Bertrand"
      },
      "location": {
        "street": {
          "number": 8699,
          "name": "Rue du Château"
        },
        "city": "Hornussen",
        "state": "Fribourg",
        "country": "Switzerland",
        "postcode": 1798,
        "coordinates": {
          "latitude": "-19.0974",
          "longitude": "41.4649"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "bekim.bertrand@example.com",
      "login": {
        "uuid": "3bfb9342-8961-4dad-91b1-a386476f2b88",
        "username": "angrycat887",
        "password": "papito",
        "salt": "dSZdxNMB",
        "md5": "379e513f6b0c26ed9dc9a7f83e8a9dc1",
        "sha1": "2faed712d98dfdb76e32a0754f0a6438c307b384",
        "sha256": "16f6d70aadb248fbf09cfe9dea03a317ad7d46e359ee8145b530b2b9cdbdec66"
      },
      "dob": {
        "date": "1989-12-08T19:19:40.977Z",
        "age": 32
      },
      "registered": {
        "date": "2015-11-03T16:15:09.429Z",
        "age": 6
      },
      "phone": "077 895 52 47",
      "cell": "077 117 25 61",
      "id": {
        "name": "AVS",
        "value": "756.2087.5819.87"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "شایان",
        "last": "کوتی"
      },
      "location": {
        "street": {
          "number": 1786,
          "name": "هویزه"
        },
        "city": "قرچک",
        "state": "آذربایجان شرقی",
        "country": "Iran",
        "postcode": 68786,
        "coordinates": {
          "latitude": "-80.3027",
          "longitude": "140.7017"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "shyn.khwty@example.com",
      "login": {
        "uuid": "e1091e9c-91c2-4d57-9d26-1dc6fe895457",
        "username": "blackdog713",
        "password": "adam25",
        "salt": "GXSDTnyt",
        "md5": "37d2212570d88ddc3a763fab201b69fa",
        "sha1": "3b23ac371ad0a343def823128d616ec001cf79b5",
        "sha256": "62b50647a63ec46ddfe1cf634a7c922c4db1de2745dba13f68ebf07303d0f8d8"
      },
      "dob": {
        "date": "1987-07-22T15:48:54.667Z",
        "age": 34
      },
      "registered": {
        "date": "2017-12-29T01:11:12.700Z",
        "age": 4
      },
      "phone": "086-80540972",
      "cell": "0962-779-9289",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Magnus",
        "last": "Poulsen"
      },
      "location": {
        "street": {
          "number": 9913,
          "name": "Teglværksvej"
        },
        "city": "København S",
        "state": "Syddanmark",
        "country": "Denmark",
        "postcode": 96095,
        "coordinates": {
          "latitude": "26.3486",
          "longitude": "-155.2334"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "magnus.poulsen@example.com",
      "login": {
        "uuid": "659bdb83-8423-449f-a1fd-2835d6e560f1",
        "username": "greenbutterfly474",
        "password": "railroad",
        "salt": "3kHk9qnf",
        "md5": "733e48663911fa2efcbfb0535ca44102",
        "sha1": "32323cfd0c3b849555fa5bbb52a105aeaeae9687",
        "sha256": "98524714f182b02380360107540d16a55ea036d72a4313527f77e2ae469a4d72"
      },
      "dob": {
        "date": "1947-04-09T12:54:32.465Z",
        "age": 74
      },
      "registered": {
        "date": "2003-06-09T14:09:45.681Z",
        "age": 18
      },
      "phone": "53687689",
      "cell": "16606136",
      "id": {
        "name": "CPR",
        "value": "090447-6035"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/50.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Konsta",
        "last": "Karvonen"
      },
      "location": {
        "street": {
          "number": 3403,
          "name": "Hämeenkatu"
        },
        "city": "Haapavesi",
        "state": "Päijät-Häme",
        "country": "Finland",
        "postcode": 22309,
        "coordinates": {
          "latitude": "-57.9574",
          "longitude": "-107.4168"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "konsta.karvonen@example.com",
      "login": {
        "uuid": "b59db9b3-aa87-4740-9810-8c346067f8aa",
        "username": "purpleelephant425",
        "password": "sparky1",
        "salt": "knYbVrMr",
        "md5": "b0c5b68bec9653b9a70db97ea58f389f",
        "sha1": "953b55e3d43c67a1462e96087d433568d2a623c8",
        "sha256": "1b9172aa5f61e9367ac56c69cfa4a9feaaa5fc2271b5ec9b087269deb47afc83"
      },
      "dob": {
        "date": "1983-03-27T21:30:33.122Z",
        "age": 38
      },
      "registered": {
        "date": "2017-06-20T07:06:06.515Z",
        "age": 4
      },
      "phone": "03-408-314",
      "cell": "048-913-82-21",
      "id": {
        "name": "HETU",
        "value": "NaNNA479undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/34.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Stephen",
        "last": "Rhodes"
      },
      "location": {
        "street": {
          "number": 1634,
          "name": "Dane St"
        },
        "city": "Shepparton",
        "state": "Tasmania",
        "country": "Australia",
        "postcode": 7915,
        "coordinates": {
          "latitude": "49.3564",
          "longitude": "-117.7453"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "stephen.rhodes@example.com",
      "login": {
        "uuid": "5499dba0-6da3-468b-abf3-5382120acf43",
        "username": "greenmouse803",
        "password": "silver",
        "salt": "VrF4aS7b",
        "md5": "f93457fa72bd2ca5a47ecc4a3246766e",
        "sha1": "b00532a7f98cfc8de2eff8b626c67529acda9ecd",
        "sha256": "6c851b85e3fd79f0b0ac1c011ea51d41423fb420f4478ebd59d51e7538809691"
      },
      "dob": {
        "date": "1972-02-02T04:25:10.017Z",
        "age": 49
      },
      "registered": {
        "date": "2003-03-14T13:03:30.659Z",
        "age": 18
      },
      "phone": "06-2191-7354",
      "cell": "0409-526-167",
      "id": {
        "name": "TFN",
        "value": "783795176"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/46.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/46.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/46.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Phil",
        "last": "Ellis"
      },
      "location": {
        "street": {
          "number": 9264,
          "name": "Victoria Road"
        },
        "city": "Newbridge",
        "state": "Cavan",
        "country": "Ireland",
        "postcode": 36133,
        "coordinates": {
          "latitude": "31.7958",
          "longitude": "-67.3502"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "phil.ellis@example.com",
      "login": {
        "uuid": "7aa1b2ab-2ad9-4d14-a3b7-d676793f9f36",
        "username": "goldenduck231",
        "password": "nipper",
        "salt": "Ak9fp3oG",
        "md5": "1cc067ec980c2d5491ab7deb35efc1b2",
        "sha1": "773a10574feafec9af79d52fcb25f81930caf0dc",
        "sha256": "86565923735b41a87128ef4de22accad939952561945b4fbf7195f3ec146d4bb"
      },
      "dob": {
        "date": "1965-09-12T14:27:23.574Z",
        "age": 56
      },
      "registered": {
        "date": "2004-01-03T03:13:53.877Z",
        "age": 17
      },
      "phone": "031-901-6457",
      "cell": "081-750-4003",
      "id": {
        "name": "PPS",
        "value": "6536839T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Eino",
        "last": "Lakso"
      },
      "location": {
        "street": {
          "number": 8430,
          "name": "Mannerheimintie"
        },
        "city": "Vehmaa",
        "state": "Central Finland",
        "country": "Finland",
        "postcode": 89265,
        "coordinates": {
          "latitude": "-44.6625",
          "longitude": "15.0868"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "eino.lakso@example.com",
      "login": {
        "uuid": "70a34fde-7443-4fed-a144-71437a7dcdc4",
        "username": "bigladybug450",
        "password": "daman",
        "salt": "KgIfZTop",
        "md5": "7d79064e91831166d3ccb8d64f37b954",
        "sha1": "a562d741401f5b265e8acc9e9074eef946acc99e",
        "sha256": "80dd6b7afa12a2f2bb660e219996cbb7a75e24cf9760e45e3636335558f551ce"
      },
      "dob": {
        "date": "1964-10-24T06:27:01.980Z",
        "age": 57
      },
      "registered": {
        "date": "2019-03-11T01:52:54.057Z",
        "age": 2
      },
      "phone": "07-141-110",
      "cell": "040-277-21-15",
      "id": {
        "name": "HETU",
        "value": "NaNNA609undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Klaus-Michael",
        "last": "Lehnen"
      },
      "location": {
        "street": {
          "number": 3338,
          "name": "Erlenweg"
        },
        "city": "Quedlinburg",
        "state": "Nordrhein-Westfalen",
        "country": "Germany",
        "postcode": 84275,
        "coordinates": {
          "latitude": "-74.6142",
          "longitude": "-139.7867"
        },
        "timezone": {
          "offset": "+4:30",
          "description": "Kabul"
        }
      },
      "email": "klaus-michael.lehnen@example.com",
      "login": {
        "uuid": "c3e8dfa1-bf64-41dd-b213-e2d97ba9e72b",
        "username": "tinyzebra695",
        "password": "loveme",
        "salt": "0NsrksI8",
        "md5": "c56b37e5b59ce60c4ce0ad6ba7392391",
        "sha1": "3ac59004ee845999c0800bac469234e3b71a391f",
        "sha256": "8f25c14b59f8d77f09487dbeb9a3839da1ae8dd427a1b3db8c7b117b9e2a0db2"
      },
      "dob": {
        "date": "1981-10-09T00:47:55.193Z",
        "age": 40
      },
      "registered": {
        "date": "2008-03-15T01:13:00.975Z",
        "age": 13
      },
      "phone": "0642-7916362",
      "cell": "0170-1934335",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "تارا",
        "last": "علیزاده"
      },
      "location": {
        "street": {
          "number": 9969,
          "name": "میدان شمشیری"
        },
        "city": "آمل",
        "state": "خوزستان",
        "country": "Iran",
        "postcode": 90370,
        "coordinates": {
          "latitude": "62.6648",
          "longitude": "-17.0469"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "tr.aalyzdh@example.com",
      "login": {
        "uuid": "2039d9bd-6531-4473-983e-4377011a61d9",
        "username": "blackgorilla689",
        "password": "zhua",
        "salt": "zjYHISf5",
        "md5": "1aa2109b702b9fb0c03325028275177f",
        "sha1": "3ec32d79b177d158943759ca5e629682176625fc",
        "sha256": "bf9ea033d9aa3a32e92c0d2646f75734297b9303581db5a14f2b0fdc9bafeba5"
      },
      "dob": {
        "date": "1983-08-14T01:36:22.221Z",
        "age": 38
      },
      "registered": {
        "date": "2014-06-19T09:57:52.414Z",
        "age": 7
      },
      "phone": "003-38243741",
      "cell": "0911-627-8915",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Viljami",
        "last": "Kyllo"
      },
      "location": {
        "street": {
          "number": 9310,
          "name": "Esplanadi"
        },
        "city": "Helsinki",
        "state": "Satakunta",
        "country": "Finland",
        "postcode": 49504,
        "coordinates": {
          "latitude": "-79.4255",
          "longitude": "-106.7298"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "viljami.kyllo@example.com",
      "login": {
        "uuid": "44ec629b-07ce-49c9-957e-95901bfba7cd",
        "username": "redkoala962",
        "password": "1passwor",
        "salt": "EIfTwAq9",
        "md5": "092db26a9e14a878d184da0e25aad1ec",
        "sha1": "a4e77cbf968aac2a708f849666ae47ffdad350c9",
        "sha256": "25f6c1f6e86be8a047d8412bceffc7bcb6ce0b714ab79b2c898bff291cab23fd"
      },
      "dob": {
        "date": "1995-11-22T18:29:09.205Z",
        "age": 26
      },
      "registered": {
        "date": "2006-05-08T21:08:10.131Z",
        "age": 15
      },
      "phone": "03-665-161",
      "cell": "043-721-77-36",
      "id": {
        "name": "HETU",
        "value": "NaNNA991undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/16.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Ava",
        "last": "Schrøder"
      },
      "location": {
        "street": {
          "number": 6834,
          "name": "Lauvlundveien"
        },
        "city": "Glærem",
        "state": "Oppland",
        "country": "Norway",
        "postcode": "6015",
        "coordinates": {
          "latitude": "49.6007",
          "longitude": "-51.6304"
        },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "ava.schroder@example.com",
      "login": {
        "uuid": "1ba90a01-3935-4aab-9685-7ccdfdf2d509",
        "username": "sadgorilla540",
        "password": "webster",
        "salt": "jIN9mkTU",
        "md5": "13fdff9101fa3f014dcd0bf460a11711",
        "sha1": "39dd4830dd0e5024439fa87679c2ade296819079",
        "sha256": "87901b3a3f1021638a0ac9e870a8481a1f8412ffdd734a9d8b60eea3a65c5716"
      },
      "dob": {
        "date": "1951-10-22T19:31:29.227Z",
        "age": 70
      },
      "registered": {
        "date": "2010-05-18T07:50:48.519Z",
        "age": 11
      },
      "phone": "81910909",
      "cell": "47583000",
      "id": {
        "name": "FN",
        "value": "22105110417"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Damla",
        "last": "Van Oosterom"
      },
      "location": {
        "street": {
          "number": 1565,
          "name": "A.G. Noijweg"
        },
        "city": "Brummen",
        "state": "Limburg",
        "country": "Netherlands",
        "postcode": 70872,
        "coordinates": {
          "latitude": "-77.4601",
          "longitude": "156.0309"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "damla.vanoosterom@example.com",
      "login": {
        "uuid": "03e2fedd-6fc6-437a-b8ce-232cbb6c5f23",
        "username": "tinyladybug531",
        "password": "vanilla",
        "salt": "QJlEr641",
        "md5": "8c4fea83839461cdd653f812c3008fab",
        "sha1": "9e0e9ebc073c2d402ac3d0bc4ca2aa3da72e39b8",
        "sha256": "4fdb44093a70314e55f5de45b62f52e065e960899152f817e6bc27691515ebab"
      },
      "dob": {
        "date": "1992-09-21T04:27:16.261Z",
        "age": 29
      },
      "registered": {
        "date": "2012-06-11T16:05:22.458Z",
        "age": 9
      },
      "phone": "(403)-235-1741",
      "cell": "(487)-970-3144",
      "id": {
        "name": "BSN",
        "value": "28219391"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/45.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Pierre",
        "last": "Menard"
      },
      "location": {
        "street": {
          "number": 2068,
          "name": "Place de L'Abbé-Georges-Hénocque"
        },
        "city": "Roubaix",
        "state": "Eure",
        "country": "France",
        "postcode": 56886,
        "coordinates": {
          "latitude": "75.1104",
          "longitude": "3.5058"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "pierre.menard@example.com",
      "login": {
        "uuid": "3caf1381-190a-4be7-ae5f-5a32fd5c0211",
        "username": "tinyostrich792",
        "password": "reckless",
        "salt": "XwBzvQEy",
        "md5": "c2f15388dbbb76f7088b7655651a67cf",
        "sha1": "5f686147742e365eb45a4cc35cdc9d4c7d6dde29",
        "sha256": "795e68f4ca1479cb7aeea417cbefc82ee07cd7cf26939520aeea1e11ccd5391a"
      },
      "dob": {
        "date": "1950-08-19T10:16:05.872Z",
        "age": 71
      },
      "registered": {
        "date": "2016-02-24T12:06:48.636Z",
        "age": 5
      },
      "phone": "01-02-67-02-87",
      "cell": "06-43-85-41-49",
      "id": {
        "name": "INSEE",
        "value": "1NNaN80195611 87"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/48.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Bridget",
        "last": "Campos"
      },
      "location": {
        "street": {
          "number": 728,
          "name": "Rua Rio de Janeiro "
        },
        "city": "Cametá",
        "state": "Roraima",
        "country": "Brazil",
        "postcode": 48259,
        "coordinates": {
          "latitude": "58.0265",
          "longitude": "170.5463"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "bridget.campos@example.com",
      "login": {
        "uuid": "48c215ac-ca64-4bba-bdfd-783921078049",
        "username": "crazylion869",
        "password": "eastern",
        "salt": "AKfZi4wS",
        "md5": "373ebb33cb4bc07b2c143a5d67897985",
        "sha1": "caa3ef4cf22f1a569bd98a7d2b6434a44b576ee4",
        "sha256": "952ee8e306b85ce8ce747f1243033f560904f2ec200ace43ad27e900fb155264"
      },
      "dob": {
        "date": "1962-11-04T08:11:32.064Z",
        "age": 59
      },
      "registered": {
        "date": "2011-01-23T11:40:41.503Z",
        "age": 10
      },
      "phone": "(46) 5529-8615",
      "cell": "(35) 0051-5316",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/68.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Gloria",
        "last": "Vega"
      },
      "location": {
        "street": {
          "number": 2395,
          "name": "Calle de Tetuán"
        },
        "city": "Cartagena",
        "state": "Cataluña",
        "country": "Spain",
        "postcode": 13817,
        "coordinates": {
          "latitude": "-81.8736",
          "longitude": "-76.4048"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "gloria.vega@example.com",
      "login": {
        "uuid": "6404564e-39ab-4016-919f-7eaf8849bdd1",
        "username": "beautifulpanda645",
        "password": "safari",
        "salt": "2PHOIxBV",
        "md5": "4a7acf8ae764621f83b29bcb374de8ce",
        "sha1": "e55e4b639e60da1da9bdf5956085382365064449",
        "sha256": "535da0ed6585a493758825ab118e673b8d0ba9d48fc358108c0f5cfb505c03e4"
      },
      "dob": {
        "date": "1977-01-13T12:57:44.108Z",
        "age": 44
      },
      "registered": {
        "date": "2005-06-01T05:11:30.213Z",
        "age": 16
      },
      "phone": "974-758-823",
      "cell": "608-271-479",
      "id": {
        "name": "DNI",
        "value": "13602675-G"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Karla",
        "last": "Møller"
      },
      "location": {
        "street": {
          "number": 6415,
          "name": "Slåenvej"
        },
        "city": "Pandrup",
        "state": "Sjælland",
        "country": "Denmark",
        "postcode": 99510,
        "coordinates": {
          "latitude": "88.7531",
          "longitude": "-152.1971"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "karla.moller@example.com",
      "login": {
        "uuid": "b1466c89-79cc-4858-8928-4f95c2065f37",
        "username": "purplekoala560",
        "password": "cyrus",
        "salt": "aLbAClbd",
        "md5": "8b6bc8b91a1ded78aa222c0302320a88",
        "sha1": "590a60eb728831d80cd73630a52dd020ebf9b1a4",
        "sha256": "410dd76f717512f9cb36b82d7dcb2217d5f856375e893c7bcafa039cec0a9ca6"
      },
      "dob": {
        "date": "1970-02-24T16:05:31.858Z",
        "age": 51
      },
      "registered": {
        "date": "2006-08-15T22:14:32.871Z",
        "age": 15
      },
      "phone": "94435426",
      "cell": "28555349",
      "id": {
        "name": "CPR",
        "value": "240270-8494"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/73.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Charlie",
        "last": "Martin"
      },
      "location": {
        "street": {
          "number": 1090,
          "name": "Grand Marais Ave"
        },
        "city": "Georgetown",
        "state": "Nunavut",
        "country": "Canada",
        "postcode": "S3F 7N9",
        "coordinates": {
          "latitude": "35.0712",
          "longitude": "-132.7610"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "charlie.martin@example.com",
      "login": {
        "uuid": "4e5a4a4d-06e1-4511-b6b5-f4f1b34e4ad0",
        "username": "lazysnake739",
        "password": "cccccc",
        "salt": "dbkPAJ9r",
        "md5": "642ca2ff73f96862ff1c949c6f4b5286",
        "sha1": "caba5f40c8d9cd6c9f11a82a6295ab81cd6ac244",
        "sha256": "cee43000f6f719d6ef7e18d57848cb407904efeb17aebc8b1e9c6376440995ee"
      },
      "dob": {
        "date": "1967-03-13T23:09:52.624Z",
        "age": 54
      },
      "registered": {
        "date": "2010-01-14T06:09:57.229Z",
        "age": 11
      },
      "phone": "272-568-1569",
      "cell": "533-515-6249",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Eivind",
        "last": "Tsegay"
      },
      "location": {
        "street": {
          "number": 8177,
          "name": "Tyristubbveien"
        },
        "city": "Hellvik",
        "state": "Trøndelag",
        "country": "Norway",
        "postcode": "5780",
        "coordinates": {
          "latitude": "33.4375",
          "longitude": "-130.3272"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "eivind.tsegay@example.com",
      "login": {
        "uuid": "c117ed33-b8b5-469c-92c0-13bf8e9b55d0",
        "username": "bigsnake468",
        "password": "smile",
        "salt": "ii50A3SE",
        "md5": "9a42464d08a6f8df10af04611bd5d9f7",
        "sha1": "75a73880f10e064654377ab1b57300160dca2b84",
        "sha256": "614c0859b750a92ef72c2e5495deb4a29ef267826921f62851cb85790fe3bcaa"
      },
      "dob": {
        "date": "1963-08-06T14:29:56.767Z",
        "age": 58
      },
      "registered": {
        "date": "2005-06-19T05:55:04.419Z",
        "age": 16
      },
      "phone": "36554356",
      "cell": "97131018",
      "id": {
        "name": "FN",
        "value": "06086310544"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/26.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Kristen",
        "last": "Kuhn"
      },
      "location": {
        "street": {
          "number": 7331,
          "name": "Fairview St"
        },
        "city": "Tweed",
        "state": "Australian Capital Territory",
        "country": "Australia",
        "postcode": 7003,
        "coordinates": {
          "latitude": "-38.1623",
          "longitude": "-31.6372"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "kristen.kuhn@example.com",
      "login": {
        "uuid": "7293f5f9-1e8d-4c61-97d4-7ce9c4fd5779",
        "username": "whiterabbit655",
        "password": "laetitia",
        "salt": "VKj6aOK2",
        "md5": "89c5cbcd11cc65ba25215efd8899ddc2",
        "sha1": "51e048c8ada66c5fa36a0da69b77384739404ddc",
        "sha256": "5927e1b3de133a8fcf8137dc11c982dbf81c9edb163e1443ecc66a9cb0455b8b"
      },
      "dob": {
        "date": "1955-06-07T14:57:54.638Z",
        "age": 66
      },
      "registered": {
        "date": "2012-03-23T22:18:01.998Z",
        "age": 9
      },
      "phone": "09-8724-9720",
      "cell": "0421-172-755",
      "id": {
        "name": "TFN",
        "value": "073681989"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/87.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Leo",
        "last": "Hakola"
      },
      "location": {
        "street": {
          "number": 2461,
          "name": "Rotuaari"
        },
        "city": "Finström",
        "state": "Kainuu",
        "country": "Finland",
        "postcode": 94217,
        "coordinates": {
          "latitude": "61.2132",
          "longitude": "99.4271"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "leo.hakola@example.com",
      "login": {
        "uuid": "fb1c3b90-8676-4d8a-8591-e23fc81b166f",
        "username": "silversnake269",
        "password": "pepito",
        "salt": "Ye68nfyi",
        "md5": "5a79dc24c4e7d5b0b6ccf4f33ed5bb98",
        "sha1": "ef7fc37d3ff405f1b894c7678659367b18491f96",
        "sha256": "bd9eb5979db2901cc8dd56c5975ad51cdf510ad53130ec37acb26ce1dac7f766"
      },
      "dob": {
        "date": "1990-03-08T01:45:48.190Z",
        "age": 31
      },
      "registered": {
        "date": "2011-07-04T04:53:50.398Z",
        "age": 10
      },
      "phone": "05-077-690",
      "cell": "041-749-67-63",
      "id": {
        "name": "HETU",
        "value": "NaNNA513undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Svenja",
        "last": "Rohmann"
      },
      "location": {
        "street": {
          "number": 3097,
          "name": "Drosselweg"
        },
        "city": "Fröndenberg/Ruhr",
        "state": "Rheinland-Pfalz",
        "country": "Germany",
        "postcode": 94014,
        "coordinates": {
          "latitude": "-59.4327",
          "longitude": "-110.5692"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "svenja.rohmann@example.com",
      "login": {
        "uuid": "883a5ee2-3823-4b41-aa61-51aca087c1cb",
        "username": "angrygorilla465",
        "password": "quant4307s",
        "salt": "7mmzxmUX",
        "md5": "515041cefc7ff6419455dfa6d4ba9dae",
        "sha1": "b0f648a7ea85defc0e54d552e8a2bcfef9b8c847",
        "sha256": "fe1fa2c36e0cf1332d4df92e954f31d82dfba675fcb18494286ceaac9ec77bb9"
      },
      "dob": {
        "date": "1991-12-12T01:28:52.740Z",
        "age": 30
      },
      "registered": {
        "date": "2016-07-12T02:09:22.024Z",
        "age": 5
      },
      "phone": "0511-4278204",
      "cell": "0179-0680652",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Stacey",
        "last": "Shelton"
      },
      "location": {
        "street": {
          "number": 1670,
          "name": "Harrison Ct"
        },
        "city": "Perth",
        "state": "Tasmania",
        "country": "Australia",
        "postcode": 5499,
        "coordinates": {
          "latitude": "54.8101",
          "longitude": "24.3306"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "stacey.shelton@example.com",
      "login": {
        "uuid": "d66d8a02-a179-4ad1-b7d7-2802a0cd2d0a",
        "username": "bluelion171",
        "password": "absolutely",
        "salt": "tnrXUBj0",
        "md5": "e1b71e7b7e4da414bd980f980b00dadf",
        "sha1": "b9a7fdda7c842c910edc45e9ad6e02c040dfd7cf",
        "sha256": "daad767339b3eef73b429c4157dc95460aec8d6e9064d00a879be358112bb207"
      },
      "dob": {
        "date": "1954-05-23T05:23:05.567Z",
        "age": 67
      },
      "registered": {
        "date": "2005-02-03T03:14:23.184Z",
        "age": 16
      },
      "phone": "05-9184-6945",
      "cell": "0405-579-398",
      "id": {
        "name": "TFN",
        "value": "393877767"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Luisa",
        "last": "Vidal"
      },
      "location": {
        "street": {
          "number": 6760,
          "name": "Calle del Pez"
        },
        "city": "Torrente",
        "state": "Andalucía",
        "country": "Spain",
        "postcode": 78291,
        "coordinates": {
          "latitude": "7.8319",
          "longitude": "-46.9985"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "luisa.vidal@example.com",
      "login": {
        "uuid": "82c21062-6564-4f76-b390-448ab6184bef",
        "username": "redmouse474",
        "password": "benny",
        "salt": "vMNQ1urN",
        "md5": "39d0caed7af53d50f1f4a86bc2445089",
        "sha1": "2d2bc18a2b559615b76ed456c2dea6b2fae120da",
        "sha256": "59e8e74cd0ab7750ff5c5fd759602b44dfd0ed4d30208a5bf20e6a1353178399"
      },
      "dob": {
        "date": "1944-09-05T00:36:08.164Z",
        "age": 77
      },
      "registered": {
        "date": "2019-08-28T21:44:19.282Z",
        "age": 2
      },
      "phone": "915-152-609",
      "cell": "689-883-856",
      "id": {
        "name": "DNI",
        "value": "04273221-J"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/72.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Katie",
        "last": "Brown"
      },
      "location": {
        "street": {
          "number": 2196,
          "name": "Pah Road"
        },
        "city": "Greymouth",
        "state": "Bay of Plenty",
        "country": "New Zealand",
        "postcode": 46672,
        "coordinates": {
          "latitude": "36.0895",
          "longitude": "169.1801"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "katie.brown@example.com",
      "login": {
        "uuid": "39aae515-30c9-4c24-87ed-b5ad98068235",
        "username": "silverelephant318",
        "password": "dusty",
        "salt": "m21c9T0h",
        "md5": "cb4991952574bce33084c591bd3e21fd",
        "sha1": "6436912c0260c9cf30a08afe19920716e532701b",
        "sha256": "78032a3406653bfd653acbe7dc1b4cfa3a72700da644d5332ae902a8fe05579c"
      },
      "dob": {
        "date": "1972-04-12T10:05:01.146Z",
        "age": 49
      },
      "registered": {
        "date": "2017-08-24T09:24:07.128Z",
        "age": 4
      },
      "phone": "(801)-294-9731",
      "cell": "(956)-179-0914",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "سهیل",
        "last": "کوتی"
      },
      "location": {
        "street": {
          "number": 5382,
          "name": "پارک دانشجو"
        },
        "city": "ساوه",
        "state": "کهگیلویه و بویراحمد",
        "country": "Iran",
        "postcode": 93680,
        "coordinates": {
          "latitude": "-25.5467",
          "longitude": "-44.0183"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "shyl.khwty@example.com",
      "login": {
        "uuid": "930042d7-733a-4ca4-b956-ab3c9c5527ae",
        "username": "heavybutterfly237",
        "password": "illusion",
        "salt": "C7RAwus4",
        "md5": "5c69c12051bee77f45d108e71961b786",
        "sha1": "8fca941118d498aab89fc3bf8cc8981ebf93a2a3",
        "sha256": "edcb1877bcdea717b439805f283dd05526f697acaed699cb91029ee8455e3bbd"
      },
      "dob": {
        "date": "1972-10-31T10:43:08.040Z",
        "age": 49
      },
      "registered": {
        "date": "2009-08-29T05:32:40.668Z",
        "age": 12
      },
      "phone": "058-04072184",
      "cell": "0985-796-6562",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/47.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Olivia",
        "last": "Ranta"
      },
      "location": {
        "street": {
          "number": 6906,
          "name": "Hämeenkatu"
        },
        "city": "Karijoki",
        "state": "Northern Savonia",
        "country": "Finland",
        "postcode": 40008,
        "coordinates": {
          "latitude": "35.5241",
          "longitude": "-11.2392"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "olivia.ranta@example.com",
      "login": {
        "uuid": "e46227f9-d3a8-405b-8bc6-b313909101cd",
        "username": "whitewolf511",
        "password": "clapton",
        "salt": "eNYke4LZ",
        "md5": "e1c583bcf4ca98c246a69037996382c1",
        "sha1": "e772b3e5cdb84a3ba9886fe58bcdd79ebaa21444",
        "sha256": "494cdb573bceb776692e4052b3e54610206561b1e4fd1d5da8811b996d559ccc"
      },
      "dob": {
        "date": "1960-08-02T13:30:30.865Z",
        "age": 61
      },
      "registered": {
        "date": "2017-01-29T23:47:42.564Z",
        "age": 4
      },
      "phone": "06-694-587",
      "cell": "048-016-66-20",
      "id": {
        "name": "HETU",
        "value": "NaNNA498undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Herman",
        "last": "Day"
      },
      "location": {
        "street": {
          "number": 3765,
          "name": "Railroad St"
        },
        "city": "Traralgon",
        "state": "Tasmania",
        "country": "Australia",
        "postcode": 6912,
        "coordinates": {
          "latitude": "43.5015",
          "longitude": "-135.0546"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "herman.day@example.com",
      "login": {
        "uuid": "4a0c53b3-5d03-40a5-a569-bb1637e2a131",
        "username": "silverpanda107",
        "password": "trucker",
        "salt": "KjHxVDoK",
        "md5": "363e63681bb8aed3861afef4968f3156",
        "sha1": "677741432abb6a183d4c5b6ca798cd0218bfe32d",
        "sha256": "82808fedd14b0bf74d0f03a1ea1def4abde1292f49fb428c715b86899cf346c0"
      },
      "dob": {
        "date": "1960-05-27T15:00:13.234Z",
        "age": 61
      },
      "registered": {
        "date": "2006-12-12T05:16:02.644Z",
        "age": 15
      },
      "phone": "05-4843-7927",
      "cell": "0418-503-062",
      "id": {
        "name": "TFN",
        "value": "920334022"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/22.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Carolyn",
        "last": "Henry"
      },
      "location": {
        "street": {
          "number": 5161,
          "name": "Church Road"
        },
        "city": "Leixlip",
        "state": "Galway City",
        "country": "Ireland",
        "postcode": 86287,
        "coordinates": {
          "latitude": "60.5874",
          "longitude": "-79.4115"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "carolyn.henry@example.com",
      "login": {
        "uuid": "a79116f8-1f8d-42e5-858d-7436150d36f5",
        "username": "angrylion939",
        "password": "1024",
        "salt": "DWkvcx22",
        "md5": "a6055c90a8de063086aa68386f672596",
        "sha1": "ad2e19e7d017ca85259532131017230301bd9215",
        "sha256": "af283c3aa7242e7c569544fc8d06a87f11e0e2fcf334e863525c054e23852822"
      },
      "dob": {
        "date": "1975-12-27T04:22:50.657Z",
        "age": 46
      },
      "registered": {
        "date": "2009-05-27T08:06:52.985Z",
        "age": 12
      },
      "phone": "031-452-8801",
      "cell": "081-869-5832",
      "id": {
        "name": "PPS",
        "value": "6875590T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/77.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Asta",
        "last": "Madsen"
      },
      "location": {
        "street": {
          "number": 746,
          "name": "Islandsvej"
        },
        "city": "Nørre Sundby",
        "state": "Hovedstaden",
        "country": "Denmark",
        "postcode": 59758,
        "coordinates": {
          "latitude": "50.7242",
          "longitude": "60.0634"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "asta.madsen@example.com",
      "login": {
        "uuid": "6db6727a-a67c-46fb-9257-3bb8e7a2a32f",
        "username": "tinytiger976",
        "password": "beach",
        "salt": "qCpQSPmY",
        "md5": "aeb2a49e27d66adde3fc11394ead4513",
        "sha1": "8820a72877df248f0772b21b9171b2801d44b576",
        "sha256": "dba0ef41d734f3cd67c6c99ff1920a78e7e8d0fc3ac023a23b55114fe572ac2a"
      },
      "dob": {
        "date": "1983-11-04T17:50:40.468Z",
        "age": 38
      },
      "registered": {
        "date": "2004-12-25T17:49:39.881Z",
        "age": 17
      },
      "phone": "48746821",
      "cell": "39406124",
      "id": {
        "name": "CPR",
        "value": "041183-4475"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/46.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Gordon",
        "last": "Mitchelle"
      },
      "location": {
        "street": {
          "number": 7260,
          "name": "Ash Dr"
        },
        "city": "Wagga Wagga",
        "state": "Tasmania",
        "country": "Australia",
        "postcode": 4360,
        "coordinates": {
          "latitude": "-44.1185",
          "longitude": "-96.9033"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "gordon.mitchelle@example.com",
      "login": {
        "uuid": "dad8da39-3003-4807-9d74-82db32d66d49",
        "username": "goldenbear270",
        "password": "spurs",
        "salt": "e2gZQnGB",
        "md5": "6c811ca21241770b9a1cef1b01f6c7b5",
        "sha1": "65223d84d3fab5867dc51431ad3ed4837fee892c",
        "sha256": "9dac047a2f272fe9474ea8009ba818923035faf935c247e52a3f38c69d7327ca"
      },
      "dob": {
        "date": "1962-04-30T20:29:30.856Z",
        "age": 59
      },
      "registered": {
        "date": "2006-05-21T19:06:30.377Z",
        "age": 15
      },
      "phone": "03-5719-7010",
      "cell": "0424-085-390",
      "id": {
        "name": "TFN",
        "value": "529444642"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Mary",
        "last": "Rice"
      },
      "location": {
        "street": {
          "number": 1131,
          "name": "Tara Street"
        },
        "city": "Ballinasloe",
        "state": "Dún Laoghaire–Rathdown",
        "country": "Ireland",
        "postcode": 61812,
        "coordinates": {
          "latitude": "-37.1133",
          "longitude": "-25.4775"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "mary.rice@example.com",
      "login": {
        "uuid": "b4a41833-cdfe-42ac-8217-c8097de51cdb",
        "username": "bluerabbit813",
        "password": "hummer",
        "salt": "eCwJSd9k",
        "md5": "f6adefc1fd3b29230dddbec70a89b425",
        "sha1": "7cc609bcbffdc16eac3ce4bd595549e970952ded",
        "sha256": "445dfc85e294fc9893385e37c3ee28f6daa383f7797bea44f6e8b7c76301f911"
      },
      "dob": {
        "date": "1977-04-01T09:48:43.848Z",
        "age": 44
      },
      "registered": {
        "date": "2015-10-15T06:08:20.387Z",
        "age": 6
      },
      "phone": "041-748-1914",
      "cell": "081-726-1429",
      "id": {
        "name": "PPS",
        "value": "7296272T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Axel",
        "last": "Guerin"
      },
      "location": {
        "street": {
          "number": 4764,
          "name": "Rue Abel-Hovelacque"
        },
        "city": "Amiens",
        "state": "Cher",
        "country": "France",
        "postcode": 72523,
        "coordinates": {
          "latitude": "-79.6212",
          "longitude": "73.2481"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "axel.guerin@example.com",
      "login": {
        "uuid": "f8175088-c731-4750-8d37-9d409eb7c1cc",
        "username": "blackpanda684",
        "password": "building",
        "salt": "Yz089Kcd",
        "md5": "c3c723d6dd3842455edbe71daba1c763",
        "sha1": "c4c16d2cb3a568c4e0be118ea26e00efb0223d1d",
        "sha256": "224edaf3fd8c740a9e2517fcc85c21f4b8c83af3eb1602238e85a41420c6ff07"
      },
      "dob": {
        "date": "1959-01-02T01:46:02.224Z",
        "age": 62
      },
      "registered": {
        "date": "2011-08-05T05:25:08.502Z",
        "age": 10
      },
      "phone": "02-94-93-45-98",
      "cell": "06-08-76-84-80",
      "id": {
        "name": "INSEE",
        "value": "1NNaN09764070 91"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Hanna",
        "last": "Newman"
      },
      "location": {
        "street": {
          "number": 7922,
          "name": "The Grove"
        },
        "city": "Wolverhampton",
        "state": "Dorset",
        "country": "United Kingdom",
        "postcode": "R20 9DX",
        "coordinates": {
          "latitude": "-59.6484",
          "longitude": "129.2811"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "hanna.newman@example.com",
      "login": {
        "uuid": "336aba53-999e-459d-8955-44d3abcd2927",
        "username": "bigkoala737",
        "password": "clown",
        "salt": "B4zwHe67",
        "md5": "eab243f53865cfdf0bbc9ea1ddf48309",
        "sha1": "34df0349e154e9488172411d6a2d52db26cb1cce",
        "sha256": "1cae52f456629e78db9d9650c4213f303c306b63e96f4702575ab5cecdd5244a"
      },
      "dob": {
        "date": "1956-10-23T06:05:07.576Z",
        "age": 65
      },
      "registered": {
        "date": "2013-09-03T21:44:14.897Z",
        "age": 8
      },
      "phone": "015395 99516",
      "cell": "0796-263-457",
      "id": {
        "name": "NINO",
        "value": "PE 63 09 67 V"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/33.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Megan",
        "last": "Olson"
      },
      "location": {
        "street": {
          "number": 2717,
          "name": "North Road"
        },
        "city": "Liverpool",
        "state": "Tayside",
        "country": "United Kingdom",
        "postcode": "ZR78 7GP",
        "coordinates": {
          "latitude": "-66.9514",
          "longitude": "-130.9717"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "megan.olson@example.com",
      "login": {
        "uuid": "4188c16e-e4b6-48e7-ae35-00761ce69992",
        "username": "sadtiger225",
        "password": "magpie",
        "salt": "a1RcO96w",
        "md5": "38b022eff04cd6b2416e04df1d20e021",
        "sha1": "b81c05e8212eb605a49d9726c5a4f3ab72f1b332",
        "sha256": "095f2f9be4c82054682d09f3413f0d76756f25aba69a39b2a30d6615b9eb5625"
      },
      "dob": {
        "date": "1971-09-26T03:31:04.481Z",
        "age": 50
      },
      "registered": {
        "date": "2006-07-13T05:48:03.023Z",
        "age": 15
      },
      "phone": "0151 467 5333",
      "cell": "0785-724-004",
      "id": {
        "name": "NINO",
        "value": "HT 69 93 18 Q"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Lawrence",
        "last": "Snyder"
      },
      "location": {
        "street": {
          "number": 7806,
          "name": "Station Road"
        },
        "city": "Sunderland",
        "state": "Mid Glamorgan",
        "country": "United Kingdom",
        "postcode": "WR1A 4BR",
        "coordinates": {
          "latitude": "-49.2481",
          "longitude": "55.5712"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "lawrence.snyder@example.com",
      "login": {
        "uuid": "ddca0383-a820-43ad-b516-aa80be3e4219",
        "username": "angryleopard942",
        "password": "babies",
        "salt": "jd1gltgz",
        "md5": "b65e7b881e7b14251b2b8c51aa9889a4",
        "sha1": "8c1d60b7ebafcd1634851ca7e47eb4f8e816eaa3",
        "sha256": "5e25ce070ede9af831bb34c8c638afe31ee7b7b255f3be00337828b05c25e45f"
      },
      "dob": {
        "date": "1964-10-10T17:50:34.992Z",
        "age": 57
      },
      "registered": {
        "date": "2007-12-04T07:43:09.489Z",
        "age": 14
      },
      "phone": "016973 81937",
      "cell": "0745-779-545",
      "id": {
        "name": "NINO",
        "value": "GN 65 11 40 L"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Aiza",
        "last": "Petterson"
      },
      "location": {
        "street": {
          "number": 7198,
          "name": "Heggelibakken"
        },
        "city": "Blaker",
        "state": "Nord-Trøndelag",
        "country": "Norway",
        "postcode": "5542",
        "coordinates": {
          "latitude": "76.2922",
          "longitude": "164.2625"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "aiza.petterson@example.com",
      "login": {
        "uuid": "b6b76fed-e592-4b4b-a529-49b2c183e504",
        "username": "tinyfish185",
        "password": "aliens",
        "salt": "g5rkBjcy",
        "md5": "e3f64f7e90b419a3bf01a1d5228326f0",
        "sha1": "56975399209085f542a67a720718baf85c85a2a5",
        "sha256": "f51e352b63427bfe843c9b81e89d267be77a12dab0356ac8736ddfe6a781f126"
      },
      "dob": {
        "date": "1991-10-04T18:18:41.775Z",
        "age": 30
      },
      "registered": {
        "date": "2008-10-26T09:46:57.444Z",
        "age": 13
      },
      "phone": "20843401",
      "cell": "42180305",
      "id": {
        "name": "FN",
        "value": "04109125062"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/75.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Santelmo",
        "last": "Porto"
      },
      "location": {
        "street": {
          "number": 5701,
          "name": "Rua Vinte de Setembro"
        },
        "city": "Santa Luzia",
        "state": "Sergipe",
        "country": "Brazil",
        "postcode": 68307,
        "coordinates": {
          "latitude": "-49.6269",
          "longitude": "-151.4069"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "santelmo.porto@example.com",
      "login": {
        "uuid": "2be5f8f7-07d8-4059-9a94-5175e74aff59",
        "username": "orangepeacock806",
        "password": "queenie",
        "salt": "U25Qnppl",
        "md5": "c723b3669012589c07c703ef6772dc60",
        "sha1": "0bf112850218ca562ac1453a877fe1df95d09223",
        "sha256": "ace93950a57ca1418e1becda898199f6d8db45a83a0dcc33a5b3b515cdc539b9"
      },
      "dob": {
        "date": "1994-07-01T17:06:47.669Z",
        "age": 27
      },
      "registered": {
        "date": "2010-10-07T15:18:34.468Z",
        "age": 11
      },
      "phone": "(10) 3242-3012",
      "cell": "(95) 4796-3658",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/95.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Aileen",
        "last": "Mager"
      },
      "location": {
        "street": {
          "number": 6527,
          "name": "Ekkermanstraat"
        },
        "city": "Diessen",
        "state": "Friesland",
        "country": "Netherlands",
        "postcode": 31677,
        "coordinates": {
          "latitude": "19.0511",
          "longitude": "-97.4834"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "aileen.mager@example.com",
      "login": {
        "uuid": "210416c5-7f68-494a-a112-fe87750cf5e6",
        "username": "ticklishgorilla337",
        "password": "stranger",
        "salt": "v3xvgUeL",
        "md5": "9d0727f58997e7f1bb3f3c3a36e6cd17",
        "sha1": "faaeaf3c49e0a897b079798e2bf4626ffcb6e2af",
        "sha256": "6333fd7fc2dc0fad9675417aff5fda824be8b5a98031ad1c37df04c7b6255702"
      },
      "dob": {
        "date": "1985-05-18T05:14:06.802Z",
        "age": 36
      },
      "registered": {
        "date": "2002-08-06T09:14:20.329Z",
        "age": 19
      },
      "phone": "(925)-984-5866",
      "cell": "(541)-754-6457",
      "id": {
        "name": "BSN",
        "value": "04471913"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/94.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Alexandra",
        "last": "Lefevre"
      },
      "location": {
        "street": {
          "number": 8635,
          "name": "Rue de L'Abbé-Groult"
        },
        "city": "Créteil",
        "state": "Alpes-Maritimes",
        "country": "France",
        "postcode": 87836,
        "coordinates": {
          "latitude": "-40.0696",
          "longitude": "-3.1858"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "alexandra.lefevre@example.com",
      "login": {
        "uuid": "c13edb56-95bd-4dea-9bf9-75bb41339147",
        "username": "orangeswan263",
        "password": "almond",
        "salt": "WLstSS0g",
        "md5": "1deca86b40a63dcd4298ed61ef97fcce",
        "sha1": "65fb8ecd856f7acadb39d6771ccc02412cc51d1f",
        "sha256": "9eafb7cb9f995bf061face20024cc32e24c757ae7204875ca9af8e9cf091b439"
      },
      "dob": {
        "date": "1993-08-18T02:42:33.789Z",
        "age": 28
      },
      "registered": {
        "date": "2008-03-10T01:44:52.328Z",
        "age": 13
      },
      "phone": "04-24-32-66-50",
      "cell": "06-01-57-41-25",
      "id": {
        "name": "INSEE",
        "value": "2NNaN32338683 83"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jacob",
        "last": "Thomas"
      },
      "location": {
        "street": {
          "number": 8359,
          "name": "E North St"
        },
        "city": "Geelong",
        "state": "Australian Capital Territory",
        "country": "Australia",
        "postcode": 8169,
        "coordinates": {
          "latitude": "50.4281",
          "longitude": "-144.7463"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "jacob.thomas@example.com",
      "login": {
        "uuid": "4ecb570a-a793-41d6-9dc6-ca18878f7337",
        "username": "happyelephant417",
        "password": "medicine",
        "salt": "gJYMaT9n",
        "md5": "13fa6efbc0ec8b7dde6c67ae7ed688d5",
        "sha1": "c6ff83af08cc6f90b39f8fb96ac4f120f60c4b5c",
        "sha256": "a04e68a1ddf1e84127a6ad917c71081ce99d9b2698d09337030dc2706a0567b7"
      },
      "dob": {
        "date": "1994-11-06T19:11:37.423Z",
        "age": 27
      },
      "registered": {
        "date": "2010-09-22T21:46:30.039Z",
        "age": 11
      },
      "phone": "04-5450-2269",
      "cell": "0494-922-232",
      "id": {
        "name": "TFN",
        "value": "822779093"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/2.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Gary",
        "last": "Gardner"
      },
      "location": {
        "street": {
          "number": 9558,
          "name": "Northaven Rd"
        },
        "city": "Pasadena",
        "state": "Tennessee",
        "country": "United States",
        "postcode": 80471,
        "coordinates": {
          "latitude": "69.1608",
          "longitude": "155.6297"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "gary.gardner@example.com",
      "login": {
        "uuid": "7e8f09c7-3f3e-414b-8a41-bda1cb1e4798",
        "username": "beautifulkoala898",
        "password": "1204",
        "salt": "E5xMqOcO",
        "md5": "b736f95bdab5428f36de480d0b7a86bf",
        "sha1": "33b737003c268756818cbb42c298d8a5f8cc9dc4",
        "sha256": "82a1407f63da55c1fc9dbc595600a87805b350463c96abcad1fab4906714866d"
      },
      "dob": {
        "date": "1992-04-19T04:53:44.284Z",
        "age": 29
      },
      "registered": {
        "date": "2006-04-26T09:47:21.237Z",
        "age": 15
      },
      "phone": "(081)-657-8039",
      "cell": "(753)-940-6442",
      "id": {
        "name": "SSN",
        "value": "003-77-1135"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/87.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Alfred",
        "last": "Løvås"
      },
      "location": {
        "street": {
          "number": 3686,
          "name": "Nordmørgata"
        },
        "city": "Tveit",
        "state": "Nordland",
        "country": "Norway",
        "postcode": "1692",
        "coordinates": {
          "latitude": "-83.4504",
          "longitude": "13.1455"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "alfred.lovas@example.com",
      "login": {
        "uuid": "011bff8b-709c-47fe-b4ff-8766099d5fdc",
        "username": "ticklishlion690",
        "password": "thompson",
        "salt": "ocCF6xrF",
        "md5": "2f4b8542a39b6c77903bc360943c4dbd",
        "sha1": "74ff7a0b3714456e6fefde6ebadc797af49af0aa",
        "sha256": "9c7a9817a3d43e21d71191b75a199cdd25f554d4c1b77a0d6495e2509d33f92d"
      },
      "dob": {
        "date": "1972-11-13T17:38:14.513Z",
        "age": 49
      },
      "registered": {
        "date": "2012-09-27T13:31:47.524Z",
        "age": 9
      },
      "phone": "81387334",
      "cell": "40779686",
      "id": {
        "name": "FN",
        "value": "13117243154"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/90.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Franjo",
        "last": "Piller"
      },
      "location": {
        "street": {
          "number": 51,
          "name": "Kastanienweg"
        },
        "city": "Attendorn",
        "state": "Thüringen",
        "country": "Germany",
        "postcode": 65309,
        "coordinates": {
          "latitude": "14.6077",
          "longitude": "70.8218"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "franjo.piller@example.com",
      "login": {
        "uuid": "fc6a88b0-a44f-4025-8ba5-908fb1bba899",
        "username": "happyduck973",
        "password": "wearing",
        "salt": "C0w4zDQX",
        "md5": "7fad58bb36ea824e4d311f14c579421c",
        "sha1": "c05828db257fead921b09e4a4d2ae210797e2819",
        "sha256": "951c3742de134e07effaddde7e8ed7af125f84940a329fefcce4ac1862e0319f"
      },
      "dob": {
        "date": "1994-12-14T01:20:07.955Z",
        "age": 27
      },
      "registered": {
        "date": "2019-03-12T07:28:46.209Z",
        "age": 2
      },
      "phone": "0802-1624029",
      "cell": "0178-9600141",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/99.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Carl",
        "last": "Thomsen"
      },
      "location": {
        "street": {
          "number": 8328,
          "name": "Toftevangen"
        },
        "city": "Nr Åby",
        "state": "Syddanmark",
        "country": "Denmark",
        "postcode": 13127,
        "coordinates": {
          "latitude": "1.0472",
          "longitude": "-22.8669"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "carl.thomsen@example.com",
      "login": {
        "uuid": "18eada2e-2f48-40f8-a212-f9e9d3c4e71b",
        "username": "crazyzebra382",
        "password": "pervert",
        "salt": "Q0CXdbFI",
        "md5": "61a0a30be856642aa6777ac5116e5f95",
        "sha1": "c67cdf5392a047312bc043c836a029375f52b336",
        "sha256": "dce142bcfc0e2695f697ee28e808dc8c0d616d22e36d8882094b455d3ac7655b"
      },
      "dob": {
        "date": "1955-06-13T07:36:40.114Z",
        "age": 66
      },
      "registered": {
        "date": "2015-03-07T22:31:06.094Z",
        "age": 6
      },
      "phone": "10711488",
      "cell": "64856121",
      "id": {
        "name": "CPR",
        "value": "130655-0573"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/35.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "محمدپارسا",
        "last": "مرادی"
      },
      "location": {
        "street": {
          "number": 9162,
          "name": "پارک لاله"
        },
        "city": "خوی",
        "state": "اردبیل",
        "country": "Iran",
        "postcode": 75074,
        "coordinates": {
          "latitude": "33.5040",
          "longitude": "-16.7214"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "mhmdprs.mrdy@example.com",
      "login": {
        "uuid": "ba338dbc-3551-4f49-b827-57b94971925b",
        "username": "goldenduck309",
        "password": "curious",
        "salt": "EZtHzWXR",
        "md5": "b7ef7c178b0079ecc28ba68fa980b83a",
        "sha1": "6d11709f49055cfd535ee5078ec97d825158d847",
        "sha256": "9d32eaeaae073e8b420a0460347df18daa4b5f6af3e2260c955098b014f5f4d0"
      },
      "dob": {
        "date": "1986-05-17T10:00:08.633Z",
        "age": 35
      },
      "registered": {
        "date": "2016-01-02T01:55:55.013Z",
        "age": 5
      },
      "phone": "047-71317549",
      "cell": "0963-389-0385",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
      },
      "nat": "IR"
    }
  ],
  "info": {
    "seed": "9be938ac2c990f37",
    "results": 150,
    "page": 1,
    "version": "1.3"
  }
}
```

- All the repos on Github with Pursuit their name

https://api.github.com/search/repositories?q=user:joinpursuit

```
{
  "total_count": 673,
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
      "updated_at": "2021-03-13T17:49:32Z",
      "pushed_at": "2021-03-12T15:31:45Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-Web.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Web.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Web.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Web",
      "homepage": "",
      "size": 67236,
      "stargazers_count": 60,
      "watchers_count": 60,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 182,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 4,
      "license": null,
      "forks": 182,
      "open_issues": 4,
      "watchers": 60,
      "default_branch": "master",
      "score": 1.0
    },
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
      "forks_count": 111,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": null,
      "forks": 111,
      "open_issues": 1,
      "watchers": 47,
      "default_branch": "master",
      "score": 1.0
    },
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
      "updated_at": "2020-04-22T15:40:02Z",
      "pushed_at": "2020-04-04T19:24:06Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-Android.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Android.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Android.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Android",
      "homepage": "",
      "size": 50595,
      "stargazers_count": 45,
      "watchers_count": 45,
      "language": "Java",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 65,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 65,
      "open_issues": 0,
      "watchers": 45,
      "default_branch": "master",
      "score": 1.0
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
      "updated_at": "2021-01-10T22:04:16Z",
      "pushed_at": "2020-12-23T23:58:39Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-DSA.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-DSA.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-DSA.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-DSA",
      "homepage": "",
      "size": 13558,
      "stargazers_count": 40,
      "watchers_count": 40,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 70,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": null,
      "forks": 70,
      "open_issues": 1,
      "watchers": 40,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 213492442,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMTM0OTI0NDI=",
      "name": "6.4-lecture-notes",
      "full_name": "joinpursuit/6.4-lecture-notes",
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
      "html_url": "https://github.com/joinpursuit/6.4-lecture-notes",
      "description": "All class lecture notes ",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes",
      "forks_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/6.4-lecture-notes/deployments",
      "created_at": "2019-10-07T21:42:54Z",
      "updated_at": "2020-09-27T18:52:37Z",
      "pushed_at": "2021-03-10T00:25:44Z",
      "git_url": "git://github.com/joinpursuit/6.4-lecture-notes.git",
      "ssh_url": "git@github.com:joinpursuit/6.4-lecture-notes.git",
      "clone_url": "https://github.com/joinpursuit/6.4-lecture-notes.git",
      "svn_url": "https://github.com/joinpursuit/6.4-lecture-notes",
      "homepage": "",
      "size": 1665,
      "stargazers_count": 16,
      "watchers_count": 16,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 31,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 12,
      "license": null,
      "forks": 31,
      "open_issues": 12,
      "watchers": 16,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 95805865,
      "node_id": "MDEwOlJlcG9zaXRvcnk5NTgwNTg2NQ==",
      "name": "AC-iOS-Codeable-and-UserDefaults",
      "full_name": "joinpursuit/AC-iOS-Codeable-and-UserDefaults",
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
      "html_url": "https://github.com/joinpursuit/AC-iOS-Codeable-and-UserDefaults",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC-iOS-Codeable-and-UserDefaults/deployments",
      "created_at": "2017-06-29T18:09:28Z",
      "updated_at": "2020-07-19T23:48:40Z",
      "pushed_at": "2018-04-10T17:32:38Z",
      "git_url": "git://github.com/joinpursuit/AC-iOS-Codeable-and-UserDefaults.git",
      "ssh_url": "git@github.com:joinpursuit/AC-iOS-Codeable-and-UserDefaults.git",
      "clone_url": "https://github.com/joinpursuit/AC-iOS-Codeable-and-UserDefaults.git",
      "svn_url": "https://github.com/joinpursuit/AC-iOS-Codeable-and-UserDefaults",
      "homepage": null,
      "size": 745,
      "stargazers_count": 16,
      "watchers_count": 16,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 10,
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
      "forks": 10,
      "open_issues": 0,
      "watchers": 16,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 150997497,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNTA5OTc0OTc=",
      "name": "Pursuit-Core-NW-Web",
      "full_name": "joinpursuit/Pursuit-Core-NW-Web",
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
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-NW-Web",
      "description": "Class lesson breakdowns, etc",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web",
      "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-NW-Web/deployments",
      "created_at": "2018-09-30T19:07:20Z",
      "updated_at": "2019-09-05T01:41:43Z",
      "pushed_at": "2019-03-23T01:44:13Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-NW-Web.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-NW-Web.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-NW-Web.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-NW-Web",
      "homepage": null,
      "size": 297,
      "stargazers_count": 12,
      "watchers_count": 12,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 17,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 17,
      "open_issues": 0,
      "watchers": 12,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 62342120,
      "node_id": "MDEwOlJlcG9zaXRvcnk2MjM0MjEyMA==",
      "name": "AC3.2",
      "full_name": "joinpursuit/AC3.2",
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
      "html_url": "https://github.com/joinpursuit/AC3.2",
      "description": "Access Code 3.2: Mobile Development with iOS",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC3.2",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC3.2/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC3.2/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC3.2/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC3.2/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC3.2/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC3.2/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC3.2/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC3.2/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC3.2/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC3.2/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC3.2/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC3.2/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC3.2/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC3.2/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC3.2/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC3.2/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC3.2/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC3.2/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC3.2/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC3.2/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC3.2/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC3.2/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC3.2/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC3.2/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC3.2/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC3.2/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC3.2/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC3.2/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC3.2/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC3.2/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC3.2/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC3.2/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC3.2/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC3.2/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC3.2/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC3.2/deployments",
      "created_at": "2016-06-30T21:03:04Z",
      "updated_at": "2017-04-11T05:29:35Z",
      "pushed_at": "2017-08-10T03:47:56Z",
      "git_url": "git://github.com/joinpursuit/AC3.2.git",
      "ssh_url": "git@github.com:joinpursuit/AC3.2.git",
      "clone_url": "https://github.com/joinpursuit/AC3.2.git",
      "svn_url": "https://github.com/joinpursuit/AC3.2",
      "homepage": null,
      "size": 7150,
      "stargazers_count": 11,
      "watchers_count": 11,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 41,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 41,
      "open_issues": 0,
      "watchers": 11,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 59524365,
      "node_id": "MDEwOlJlcG9zaXRvcnk1OTUyNDM2NQ==",
      "name": "ac-curriculum-web",
      "full_name": "joinpursuit/ac-curriculum-web",
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
      "html_url": "https://github.com/joinpursuit/ac-curriculum-web",
      "description": "The full-stack web",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web",
      "forks_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/ac-curriculum-web/deployments",
      "created_at": "2016-05-23T23:07:49Z",
      "updated_at": "2019-04-26T08:19:27Z",
      "pushed_at": "2016-06-28T18:15:37Z",
      "git_url": "git://github.com/joinpursuit/ac-curriculum-web.git",
      "ssh_url": "git@github.com:joinpursuit/ac-curriculum-web.git",
      "clone_url": "https://github.com/joinpursuit/ac-curriculum-web.git",
      "svn_url": "https://github.com/joinpursuit/ac-curriculum-web",
      "homepage": null,
      "size": 104,
      "stargazers_count": 10,
      "watchers_count": 10,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 3,
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
      "forks": 3,
      "open_issues": 0,
      "watchers": 10,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 84453653,
      "node_id": "MDEwOlJlcG9zaXRvcnk4NDQ1MzY1Mw==",
      "name": "web-technical-interviewing",
      "full_name": "joinpursuit/web-technical-interviewing",
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
      "html_url": "https://github.com/joinpursuit/web-technical-interviewing",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing",
      "forks_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/web-technical-interviewing/deployments",
      "created_at": "2017-03-09T14:51:50Z",
      "updated_at": "2017-12-18T03:45:09Z",
      "pushed_at": "2017-06-21T16:38:33Z",
      "git_url": "git://github.com/joinpursuit/web-technical-interviewing.git",
      "ssh_url": "git@github.com:joinpursuit/web-technical-interviewing.git",
      "clone_url": "https://github.com/joinpursuit/web-technical-interviewing.git",
      "svn_url": "https://github.com/joinpursuit/web-technical-interviewing",
      "homepage": null,
      "size": 26,
      "stargazers_count": 8,
      "watchers_count": 8,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 8,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 8,
      "open_issues": 0,
      "watchers": 8,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 100051633,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMDAwNTE2MzM=",
      "name": "AC_4_Web",
      "full_name": "joinpursuit/AC_4_Web",
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
      "html_url": "https://github.com/joinpursuit/AC_4_Web",
      "description": "Teaching Materials for Access Code 4 Web",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC_4_Web",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC_4_Web/deployments",
      "created_at": "2017-08-11T16:35:42Z",
      "updated_at": "2020-11-07T19:28:32Z",
      "pushed_at": "2018-10-23T22:48:42Z",
      "git_url": "git://github.com/joinpursuit/AC_4_Web.git",
      "ssh_url": "git@github.com:joinpursuit/AC_4_Web.git",
      "clone_url": "https://github.com/joinpursuit/AC_4_Web.git",
      "svn_url": "https://github.com/joinpursuit/AC_4_Web",
      "homepage": "",
      "size": 16655,
      "stargazers_count": 6,
      "watchers_count": 6,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 24,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 2,
      "license": null,
      "forks": 24,
      "open_issues": 2,
      "watchers": 6,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 174882819,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNzQ4ODI4MTk=",
      "name": "unit-testing-example",
      "full_name": "joinpursuit/unit-testing-example",
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
      "html_url": "https://github.com/joinpursuit/unit-testing-example",
      "description": "example unit testing ",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/unit-testing-example",
      "forks_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/unit-testing-example/deployments",
      "created_at": "2019-03-10T21:24:21Z",
      "updated_at": "2020-06-16T21:04:52Z",
      "pushed_at": "2019-03-12T01:46:28Z",
      "git_url": "git://github.com/joinpursuit/unit-testing-example.git",
      "ssh_url": "git@github.com:joinpursuit/unit-testing-example.git",
      "clone_url": "https://github.com/joinpursuit/unit-testing-example.git",
      "svn_url": "https://github.com/joinpursuit/unit-testing-example",
      "homepage": null,
      "size": 109,
      "stargazers_count": 5,
      "watchers_count": 5,
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
      "watchers": 5,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 91253347,
      "node_id": "MDEwOlJlcG9zaXRvcnk5MTI1MzM0Nw==",
      "name": "AC3.2-Server-Side-Swift-Vapor",
      "full_name": "joinpursuit/AC3.2-Server-Side-Swift-Vapor",
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
      "html_url": "https://github.com/joinpursuit/AC3.2-Server-Side-Swift-Vapor",
      "description": "An intro to Server Side Swift using Vapor",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Server-Side-Swift-Vapor/deployments",
      "created_at": "2017-05-14T15:36:42Z",
      "updated_at": "2019-10-25T10:23:15Z",
      "pushed_at": "2017-05-24T19:34:29Z",
      "git_url": "git://github.com/joinpursuit/AC3.2-Server-Side-Swift-Vapor.git",
      "ssh_url": "git@github.com:joinpursuit/AC3.2-Server-Side-Swift-Vapor.git",
      "clone_url": "https://github.com/joinpursuit/AC3.2-Server-Side-Swift-Vapor.git",
      "svn_url": "https://github.com/joinpursuit/AC3.2-Server-Side-Swift-Vapor",
      "homepage": null,
      "size": 1245,
      "stargazers_count": 5,
      "watchers_count": 5,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 3,
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
      "forks": 3,
      "open_issues": 0,
      "watchers": 5,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 90781270,
      "node_id": "MDEwOlJlcG9zaXRvcnk5MDc4MTI3MA==",
      "name": "web-curriculum",
      "full_name": "joinpursuit/web-curriculum",
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
      "html_url": "https://github.com/joinpursuit/web-curriculum",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/web-curriculum",
      "forks_url": "https://api.github.com/repos/joinpursuit/web-curriculum/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/web-curriculum/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/web-curriculum/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/web-curriculum/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/web-curriculum/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/web-curriculum/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/web-curriculum/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/web-curriculum/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/web-curriculum/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/web-curriculum/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/web-curriculum/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/web-curriculum/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/web-curriculum/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/web-curriculum/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/web-curriculum/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/web-curriculum/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/web-curriculum/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/web-curriculum/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/web-curriculum/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/web-curriculum/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/web-curriculum/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/web-curriculum/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/web-curriculum/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/web-curriculum/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/web-curriculum/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/web-curriculum/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/web-curriculum/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/web-curriculum/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/web-curriculum/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/web-curriculum/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/web-curriculum/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/web-curriculum/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/web-curriculum/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/web-curriculum/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/web-curriculum/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/web-curriculum/deployments",
      "created_at": "2017-05-09T18:54:02Z",
      "updated_at": "2020-06-03T19:23:57Z",
      "pushed_at": "2017-06-22T16:10:18Z",
      "git_url": "git://github.com/joinpursuit/web-curriculum.git",
      "ssh_url": "git@github.com:joinpursuit/web-curriculum.git",
      "clone_url": "https://github.com/joinpursuit/web-curriculum.git",
      "svn_url": "https://github.com/joinpursuit/web-curriculum",
      "homepage": null,
      "size": 2630,
      "stargazers_count": 4,
      "watchers_count": 4,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 3,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 3,
      "open_issues": 0,
      "watchers": 4,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 28756438,
      "node_id": "MDEwOlJlcG9zaXRvcnkyODc1NjQzOA==",
      "name": "ac15-bootcamp",
      "full_name": "joinpursuit/ac15-bootcamp",
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
      "html_url": "https://github.com/joinpursuit/ac15-bootcamp",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp",
      "forks_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/ac15-bootcamp/deployments",
      "created_at": "2015-01-03T22:31:35Z",
      "updated_at": "2015-08-15T04:55:57Z",
      "pushed_at": "2015-05-16T21:31:44Z",
      "git_url": "git://github.com/joinpursuit/ac15-bootcamp.git",
      "ssh_url": "git@github.com:joinpursuit/ac15-bootcamp.git",
      "clone_url": "https://github.com/joinpursuit/ac15-bootcamp.git",
      "svn_url": "https://github.com/joinpursuit/ac15-bootcamp",
      "homepage": null,
      "size": 8088,
      "stargazers_count": 4,
      "watchers_count": 4,
      "language": "HTML",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 0,
      "open_issues": 0,
      "watchers": 4,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 58414282,
      "node_id": "MDEwOlJlcG9zaXRvcnk1ODQxNDI4Mg==",
      "name": "jsworkshop",
      "full_name": "joinpursuit/jsworkshop",
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
      "html_url": "https://github.com/joinpursuit/jsworkshop",
      "description": "Javascript workshop for prospective AccessCode students to learn JS, and help C4Q decide which students will be most likely to succeed in the intensive course",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/jsworkshop",
      "forks_url": "https://api.github.com/repos/joinpursuit/jsworkshop/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/jsworkshop/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/jsworkshop/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/jsworkshop/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/jsworkshop/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/jsworkshop/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/jsworkshop/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/jsworkshop/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/jsworkshop/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/jsworkshop/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/jsworkshop/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/jsworkshop/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/jsworkshop/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/jsworkshop/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/jsworkshop/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/jsworkshop/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/jsworkshop/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/jsworkshop/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/jsworkshop/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/jsworkshop/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/jsworkshop/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/jsworkshop/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/jsworkshop/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/jsworkshop/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/jsworkshop/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/jsworkshop/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/jsworkshop/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/jsworkshop/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/jsworkshop/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/jsworkshop/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/jsworkshop/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/jsworkshop/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/jsworkshop/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/jsworkshop/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/jsworkshop/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/jsworkshop/deployments",
      "created_at": "2016-05-09T23:18:42Z",
      "updated_at": "2019-06-25T19:08:01Z",
      "pushed_at": "2019-06-25T19:07:59Z",
      "git_url": "git://github.com/joinpursuit/jsworkshop.git",
      "ssh_url": "git@github.com:joinpursuit/jsworkshop.git",
      "clone_url": "https://github.com/joinpursuit/jsworkshop.git",
      "svn_url": "https://github.com/joinpursuit/jsworkshop",
      "homepage": null,
      "size": 176,
      "stargazers_count": 3,
      "watchers_count": 3,
      "language": "HTML",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 7,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 7,
      "open_issues": 1,
      "watchers": 3,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 213028412,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMTMwMjg0MTI=",
      "name": "Pursuit-Core-iOS-CustomCells-Lab",
      "full_name": "joinpursuit/Pursuit-Core-iOS-CustomCells-Lab",
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
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab",
      "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab/deployments",
      "created_at": "2019-10-05T16:00:02Z",
      "updated_at": "2020-02-01T02:12:20Z",
      "pushed_at": "2020-02-17T16:22:24Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS-CustomCells-Lab.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-CustomCells-Lab",
      "homepage": null,
      "size": 47,
      "stargazers_count": 3,
      "watchers_count": 3,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 37,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 6,
      "license": null,
      "forks": 37,
      "open_issues": 6,
      "watchers": 3,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 167447948,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNjc0NDc5NDg=",
      "name": "Pursuit-Core-iOS-New-York-Times-Bestsellers",
      "full_name": "joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers",
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
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers",
      "description": "NYT Bestsellers app that displays all book categories and allows the user to favorite books. ",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers",
      "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers/deployments",
      "created_at": "2019-01-24T22:31:26Z",
      "updated_at": "2021-03-06T18:04:24Z",
      "pushed_at": "2020-02-05T21:38:46Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-New-York-Times-Bestsellers",
      "homepage": null,
      "size": 15363,
      "stargazers_count": 3,
      "watchers_count": 3,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 35,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 17,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 35,
      "open_issues": 17,
      "watchers": 3,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 256665869,
      "node_id": "MDEwOlJlcG9zaXRvcnkyNTY2NjU4Njk=",
      "name": "Pursuit-Core-Web-Testing-React-Apps-Starter",
      "full_name": "joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter",
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
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter",
      "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter/deployments",
      "created_at": "2020-04-18T04:02:16Z",
      "updated_at": "2020-10-05T07:15:50Z",
      "pushed_at": "2021-03-10T15:05:54Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Testing-React-Apps-Starter",
      "homepage": null,
      "size": 1350,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 13,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 4,
      "license": null,
      "forks": 13,
      "open_issues": 4,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 119881386,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMTk4ODEzODY=",
      "name": "AC-iOS-JobMarketPlace",
      "full_name": "joinpursuit/AC-iOS-JobMarketPlace",
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
      "html_url": "https://github.com/joinpursuit/AC-iOS-JobMarketPlace",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC-iOS-JobMarketPlace/deployments",
      "created_at": "2018-02-01T19:15:32Z",
      "updated_at": "2018-03-22T16:18:04Z",
      "pushed_at": "2018-02-09T10:27:08Z",
      "git_url": "git://github.com/joinpursuit/AC-iOS-JobMarketPlace.git",
      "ssh_url": "git@github.com:joinpursuit/AC-iOS-JobMarketPlace.git",
      "clone_url": "https://github.com/joinpursuit/AC-iOS-JobMarketPlace.git",
      "svn_url": "https://github.com/joinpursuit/AC-iOS-JobMarketPlace",
      "homepage": null,
      "size": 292,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 6,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 6,
      "open_issues": 0,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 157276043,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNTcyNzYwNDM=",
      "name": "Pursuit-Core-iOS-CardGame",
      "full_name": "joinpursuit/Pursuit-Core-iOS-CardGame",
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
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-CardGame",
      "description": "Card games includes ThreeCardMonte and MatchingGame",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame",
      "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-iOS-CardGame/deployments",
      "created_at": "2018-11-12T20:59:40Z",
      "updated_at": "2020-07-09T04:35:25Z",
      "pushed_at": "2018-11-14T18:12:40Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-iOS-CardGame.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-iOS-CardGame.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-CardGame.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-iOS-CardGame",
      "homepage": null,
      "size": 1155,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 6,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 6,
      "open_issues": 0,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 319149882,
      "node_id": "MDEwOlJlcG9zaXRvcnkzMTkxNDk4ODI=",
      "name": "7-2-lecture-notes",
      "full_name": "joinpursuit/7-2-lecture-notes",
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
      "html_url": "https://github.com/joinpursuit/7-2-lecture-notes",
      "description": "A collection of Pursuit 7.2 class notes! ",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes",
      "forks_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/7-2-lecture-notes/deployments",
      "created_at": "2020-12-06T23:01:03Z",
      "updated_at": "2021-03-13T23:02:52Z",
      "pushed_at": "2021-03-13T23:02:50Z",
      "git_url": "git://github.com/joinpursuit/7-2-lecture-notes.git",
      "ssh_url": "git@github.com:joinpursuit/7-2-lecture-notes.git",
      "clone_url": "https://github.com/joinpursuit/7-2-lecture-notes.git",
      "svn_url": "https://github.com/joinpursuit/7-2-lecture-notes",
      "homepage": "",
      "size": 1019,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "HTML",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 30,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 30,
      "open_issues": 0,
      "watchers": 2,
      "default_branch": "main",
      "score": 1.0
    },
    {
      "id": 73853377,
      "node_id": "MDEwOlJlcG9zaXRvcnk3Mzg1MzM3Nw==",
      "name": "blog-api",
      "full_name": "joinpursuit/blog-api",
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
      "html_url": "https://github.com/joinpursuit/blog-api",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/blog-api",
      "forks_url": "https://api.github.com/repos/joinpursuit/blog-api/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/blog-api/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/blog-api/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/blog-api/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/blog-api/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/blog-api/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/blog-api/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/blog-api/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/blog-api/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/blog-api/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/blog-api/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/blog-api/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/blog-api/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/blog-api/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/blog-api/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/blog-api/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/blog-api/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/blog-api/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/blog-api/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/blog-api/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/blog-api/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/blog-api/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/blog-api/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/blog-api/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/blog-api/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/blog-api/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/blog-api/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/blog-api/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/blog-api/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/blog-api/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/blog-api/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/blog-api/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/blog-api/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/blog-api/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/blog-api/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/blog-api/deployments",
      "created_at": "2016-11-15T20:40:58Z",
      "updated_at": "2017-03-16T16:42:49Z",
      "pushed_at": "2016-11-19T18:44:51Z",
      "git_url": "git://github.com/joinpursuit/blog-api.git",
      "ssh_url": "git@github.com:joinpursuit/blog-api.git",
      "clone_url": "https://github.com/joinpursuit/blog-api.git",
      "svn_url": "https://github.com/joinpursuit/blog-api",
      "homepage": null,
      "size": 6,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 17,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 11,
      "license": null,
      "forks": 17,
      "open_issues": 11,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 83090185,
      "node_id": "MDEwOlJlcG9zaXRvcnk4MzA5MDE4NQ==",
      "name": "AC3.2-Kagami",
      "full_name": "joinpursuit/AC3.2-Kagami",
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
      "html_url": "https://github.com/joinpursuit/AC3.2-Kagami",
      "description": "Smart Mirror + iOS companion app",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Kagami/deployments",
      "created_at": "2017-02-24T23:02:34Z",
      "updated_at": "2021-01-01T09:59:21Z",
      "pushed_at": "2017-07-20T20:32:24Z",
      "git_url": "git://github.com/joinpursuit/AC3.2-Kagami.git",
      "ssh_url": "git@github.com:joinpursuit/AC3.2-Kagami.git",
      "clone_url": "https://github.com/joinpursuit/AC3.2-Kagami.git",
      "svn_url": "https://github.com/joinpursuit/AC3.2-Kagami",
      "homepage": "",
      "size": 36270,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 2,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 2,
      "license": null,
      "forks": 2,
      "open_issues": 2,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 81126363,
      "node_id": "MDEwOlJlcG9zaXRvcnk4MTEyNjM2Mw==",
      "name": "AC3.2-U6-InstaClone",
      "full_name": "joinpursuit/AC3.2-U6-InstaClone",
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
      "html_url": "https://github.com/joinpursuit/AC3.2-U6-InstaClone",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC3.2-U6-InstaClone/deployments",
      "created_at": "2017-02-06T19:57:48Z",
      "updated_at": "2017-03-09T03:32:17Z",
      "pushed_at": "2017-08-13T16:25:54Z",
      "git_url": "git://github.com/joinpursuit/AC3.2-U6-InstaClone.git",
      "ssh_url": "git@github.com:joinpursuit/AC3.2-U6-InstaClone.git",
      "clone_url": "https://github.com/joinpursuit/AC3.2-U6-InstaClone.git",
      "svn_url": "https://github.com/joinpursuit/AC3.2-U6-InstaClone",
      "homepage": null,
      "size": 40199,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 4,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 4,
      "open_issues": 0,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 114408214,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMTQ0MDgyMTQ=",
      "name": "AC-iOS-MovieSearch-CollectionViews-FileManager",
      "full_name": "joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager",
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
      "html_url": "https://github.com/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager/deployments",
      "created_at": "2017-12-15T20:21:07Z",
      "updated_at": "2019-03-01T03:10:29Z",
      "pushed_at": "2017-12-21T21:00:44Z",
      "git_url": "git://github.com/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager.git",
      "ssh_url": "git@github.com:joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager.git",
      "clone_url": "https://github.com/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager.git",
      "svn_url": "https://github.com/joinpursuit/AC-iOS-MovieSearch-CollectionViews-FileManager",
      "homepage": null,
      "size": 25992,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 7,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 7,
      "open_issues": 0,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
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
      "score": 1.0
    },
    {
      "id": 187081200,
      "node_id": "MDEwOlJlcG9zaXRvcnkxODcwODEyMDA=",
      "name": "whiteboarding",
      "full_name": "joinpursuit/whiteboarding",
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
      "html_url": "https://github.com/joinpursuit/whiteboarding",
      "description": "Pair Boarding Mock Interview Questions",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/whiteboarding",
      "forks_url": "https://api.github.com/repos/joinpursuit/whiteboarding/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/whiteboarding/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/whiteboarding/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/whiteboarding/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/whiteboarding/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/whiteboarding/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/whiteboarding/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/whiteboarding/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/whiteboarding/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/whiteboarding/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/whiteboarding/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/whiteboarding/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/whiteboarding/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/whiteboarding/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/whiteboarding/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/whiteboarding/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/whiteboarding/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/whiteboarding/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/whiteboarding/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/whiteboarding/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/whiteboarding/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/whiteboarding/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/whiteboarding/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/whiteboarding/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/whiteboarding/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/whiteboarding/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/whiteboarding/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/whiteboarding/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/whiteboarding/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/whiteboarding/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/whiteboarding/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/whiteboarding/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/whiteboarding/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/whiteboarding/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/whiteboarding/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/whiteboarding/deployments",
      "created_at": "2019-05-16T18:29:25Z",
      "updated_at": "2020-09-06T06:32:49Z",
      "pushed_at": "2020-09-05T19:15:25Z",
      "git_url": "git://github.com/joinpursuit/whiteboarding.git",
      "ssh_url": "git@github.com:joinpursuit/whiteboarding.git",
      "clone_url": "https://github.com/joinpursuit/whiteboarding.git",
      "svn_url": "https://github.com/joinpursuit/whiteboarding",
      "homepage": "",
      "size": 53,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": null,
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
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 73127128,
      "node_id": "MDEwOlJlcG9zaXRvcnk3MzEyNzEyOA==",
      "name": "AC3.2-Journey",
      "full_name": "joinpursuit/AC3.2-Journey",
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
      "html_url": "https://github.com/joinpursuit/AC3.2-Journey",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC3.2-Journey/deployments",
      "created_at": "2016-11-07T22:34:38Z",
      "updated_at": "2017-01-20T20:37:49Z",
      "pushed_at": "2017-01-20T20:59:41Z",
      "git_url": "git://github.com/joinpursuit/AC3.2-Journey.git",
      "ssh_url": "git@github.com:joinpursuit/AC3.2-Journey.git",
      "clone_url": "https://github.com/joinpursuit/AC3.2-Journey.git",
      "svn_url": "https://github.com/joinpursuit/AC3.2-Journey",
      "homepage": null,
      "size": 1391,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 2,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": null,
      "forks": 2,
      "open_issues": 1,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 106093345,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMDYwOTMzNDU=",
      "name": "AC-DSA-JS",
      "full_name": "joinpursuit/AC-DSA-JS",
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
      "html_url": "https://github.com/joinpursuit/AC-DSA-JS",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS",
      "forks_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/AC-DSA-JS/deployments",
      "created_at": "2017-10-07T11:42:06Z",
      "updated_at": "2018-08-13T01:51:33Z",
      "pushed_at": "2018-03-16T19:08:55Z",
      "git_url": "git://github.com/joinpursuit/AC-DSA-JS.git",
      "ssh_url": "git@github.com:joinpursuit/AC-DSA-JS.git",
      "clone_url": "https://github.com/joinpursuit/AC-DSA-JS.git",
      "svn_url": "https://github.com/joinpursuit/AC-DSA-JS",
      "homepage": null,
      "size": 1421,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Swift",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 7,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 7,
      "open_issues": 0,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
    }
  ]
}

```

- All the JavaScript repos on Github with Pursuit in their name

https://api.github.com/search/repositories?q=joinpursuit+language:javascript&sort=stars&order=desc

```
{
  "total_count": 2,
  "incomplete_results": false,
  "items": [
    {
      "id": 341080793,
      "node_id": "MDEwOlJlcG9zaXRvcnkzNDEwODA3OTM=",
      "name": "Pursuit-Core-Web-Promises-Fetch-Lab-v2",
      "full_name": "joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
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
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
      "description": "Like https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab, but based off the awesome new template!",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
      "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/deployments",
      "created_at": "2021-02-22T04:35:43Z",
      "updated_at": "2021-03-10T17:16:00Z",
      "pushed_at": "2021-03-15T02:34:52Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
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
      "forks_count": 56,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 26,
      "license": null,
      "forks": 56,
      "open_issues": 26,
      "watchers": 0,
      "default_branch": "main",
      "score": 1.0
    },
    {
      "id": 160419944,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNjA0MTk5NDQ=",
      "name": "lab1",
      "full_name": "ThaiSonP/lab1",
      "private": false,
      "owner": {
        "login": "ThaiSonP",
        "id": 43785390,
        "node_id": "MDQ6VXNlcjQzNzg1Mzkw",
        "avatar_url": "https://avatars.githubusercontent.com/u/43785390?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ThaiSonP",
        "html_url": "https://github.com/ThaiSonP",
        "followers_url": "https://api.github.com/users/ThaiSonP/followers",
        "following_url": "https://api.github.com/users/ThaiSonP/following{/other_user}",
        "gists_url": "https://api.github.com/users/ThaiSonP/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ThaiSonP/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ThaiSonP/subscriptions",
        "organizations_url": "https://api.github.com/users/ThaiSonP/orgs",
        "repos_url": "https://api.github.com/users/ThaiSonP/repos",
        "events_url": "https://api.github.com/users/ThaiSonP/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ThaiSonP/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/ThaiSonP/lab1",
      "description": "https://github.com/joinpursuit/Pursuit-Core-Web/tree/master/node/labs/lab-1",
      "fork": false,
      "url": "https://api.github.com/repos/ThaiSonP/lab1",
      "forks_url": "https://api.github.com/repos/ThaiSonP/lab1/forks",
      "keys_url": "https://api.github.com/repos/ThaiSonP/lab1/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ThaiSonP/lab1/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ThaiSonP/lab1/teams",
      "hooks_url": "https://api.github.com/repos/ThaiSonP/lab1/hooks",
      "issue_events_url": "https://api.github.com/repos/ThaiSonP/lab1/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ThaiSonP/lab1/events",
      "assignees_url": "https://api.github.com/repos/ThaiSonP/lab1/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ThaiSonP/lab1/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ThaiSonP/lab1/tags",
      "blobs_url": "https://api.github.com/repos/ThaiSonP/lab1/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ThaiSonP/lab1/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ThaiSonP/lab1/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ThaiSonP/lab1/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ThaiSonP/lab1/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ThaiSonP/lab1/languages",
      "stargazers_url": "https://api.github.com/repos/ThaiSonP/lab1/stargazers",
      "contributors_url": "https://api.github.com/repos/ThaiSonP/lab1/contributors",
      "subscribers_url": "https://api.github.com/repos/ThaiSonP/lab1/subscribers",
      "subscription_url": "https://api.github.com/repos/ThaiSonP/lab1/subscription",
      "commits_url": "https://api.github.com/repos/ThaiSonP/lab1/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ThaiSonP/lab1/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ThaiSonP/lab1/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ThaiSonP/lab1/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ThaiSonP/lab1/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ThaiSonP/lab1/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ThaiSonP/lab1/merges",
      "archive_url": "https://api.github.com/repos/ThaiSonP/lab1/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ThaiSonP/lab1/downloads",
      "issues_url": "https://api.github.com/repos/ThaiSonP/lab1/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ThaiSonP/lab1/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ThaiSonP/lab1/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ThaiSonP/lab1/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ThaiSonP/lab1/labels{/name}",
      "releases_url": "https://api.github.com/repos/ThaiSonP/lab1/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ThaiSonP/lab1/deployments",
      "created_at": "2018-12-04T21:16:51Z",
      "updated_at": "2018-12-05T18:06:06Z",
      "pushed_at": "2018-12-05T18:06:04Z",
      "git_url": "git://github.com/ThaiSonP/lab1.git",
      "ssh_url": "git@github.com:ThaiSonP/lab1.git",
      "clone_url": "https://github.com/ThaiSonP/lab1.git",
      "svn_url": "https://github.com/ThaiSonP/lab1",
      "homepage": null,
      "size": 1,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master",
      "score": 1.0
    }
  ]
}
```

- All the Swift repos on Github with Pursuit in their name


https://api.github.com/search/repositories?q=joinpursuit&sort=swift

```
{
  "total_count": 2,
  "incomplete_results": false,
  "items": [
    {
      "id": 341080793,
      "node_id": "MDEwOlJlcG9zaXRvcnkzNDEwODA3OTM=",
      "name": "Pursuit-Core-Web-Promises-Fetch-Lab-v2",
      "full_name": "joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
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
      "html_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
      "description": "Like https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab, but based off the awesome new template!",
      "fork": false,
      "url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
      "forks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/forks",
      "keys_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/teams",
      "hooks_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/hooks",
      "issue_events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues/events{/number}",
      "events_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/events",
      "assignees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/assignees{/user}",
      "branches_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/branches{/branch}",
      "tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/tags",
      "blobs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/languages",
      "stargazers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/stargazers",
      "contributors_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/contributors",
      "subscribers_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/subscribers",
      "subscription_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/subscription",
      "commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/contents/{+path}",
      "compare_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/merges",
      "archive_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/downloads",
      "issues_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/issues{/number}",
      "pulls_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/labels{/name}",
      "releases_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/releases{/id}",
      "deployments_url": "https://api.github.com/repos/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2/deployments",
      "created_at": "2021-02-22T04:35:43Z",
      "updated_at": "2021-03-10T17:16:00Z",
      "pushed_at": "2021-03-15T02:34:52Z",
      "git_url": "git://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
      "ssh_url": "git@github.com:joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
      "clone_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2.git",
      "svn_url": "https://github.com/joinpursuit/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
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
      "forks_count": 56,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 26,
      "license": null,
      "forks": 56,
      "open_issues": 26,
      "watchers": 0,
      "default_branch": "main",
      "score": 1.0
    },
    {
      "id": 160419944,
      "node_id": "MDEwOlJlcG9zaXRvcnkxNjA0MTk5NDQ=",
      "name": "lab1",
      "full_name": "ThaiSonP/lab1",
      "private": false,
      "owner": {
        "login": "ThaiSonP",
        "id": 43785390,
        "node_id": "MDQ6VXNlcjQzNzg1Mzkw",
        "avatar_url": "https://avatars.githubusercontent.com/u/43785390?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ThaiSonP",
        "html_url": "https://github.com/ThaiSonP",
        "followers_url": "https://api.github.com/users/ThaiSonP/followers",
        "following_url": "https://api.github.com/users/ThaiSonP/following{/other_user}",
        "gists_url": "https://api.github.com/users/ThaiSonP/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ThaiSonP/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ThaiSonP/subscriptions",
        "organizations_url": "https://api.github.com/users/ThaiSonP/orgs",
        "repos_url": "https://api.github.com/users/ThaiSonP/repos",
        "events_url": "https://api.github.com/users/ThaiSonP/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ThaiSonP/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/ThaiSonP/lab1",
      "description": "https://github.com/joinpursuit/Pursuit-Core-Web/tree/master/node/labs/lab-1",
      "fork": false,
      "url": "https://api.github.com/repos/ThaiSonP/lab1",
      "forks_url": "https://api.github.com/repos/ThaiSonP/lab1/forks",
      "keys_url": "https://api.github.com/repos/ThaiSonP/lab1/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ThaiSonP/lab1/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ThaiSonP/lab1/teams",
      "hooks_url": "https://api.github.com/repos/ThaiSonP/lab1/hooks",
      "issue_events_url": "https://api.github.com/repos/ThaiSonP/lab1/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ThaiSonP/lab1/events",
      "assignees_url": "https://api.github.com/repos/ThaiSonP/lab1/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ThaiSonP/lab1/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ThaiSonP/lab1/tags",
      "blobs_url": "https://api.github.com/repos/ThaiSonP/lab1/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ThaiSonP/lab1/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ThaiSonP/lab1/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ThaiSonP/lab1/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ThaiSonP/lab1/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ThaiSonP/lab1/languages",
      "stargazers_url": "https://api.github.com/repos/ThaiSonP/lab1/stargazers",
      "contributors_url": "https://api.github.com/repos/ThaiSonP/lab1/contributors",
      "subscribers_url": "https://api.github.com/repos/ThaiSonP/lab1/subscribers",
      "subscription_url": "https://api.github.com/repos/ThaiSonP/lab1/subscription",
      "commits_url": "https://api.github.com/repos/ThaiSonP/lab1/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ThaiSonP/lab1/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ThaiSonP/lab1/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ThaiSonP/lab1/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ThaiSonP/lab1/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ThaiSonP/lab1/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ThaiSonP/lab1/merges",
      "archive_url": "https://api.github.com/repos/ThaiSonP/lab1/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ThaiSonP/lab1/downloads",
      "issues_url": "https://api.github.com/repos/ThaiSonP/lab1/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ThaiSonP/lab1/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ThaiSonP/lab1/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ThaiSonP/lab1/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ThaiSonP/lab1/labels{/name}",
      "releases_url": "https://api.github.com/repos/ThaiSonP/lab1/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ThaiSonP/lab1/deployments",
      "created_at": "2018-12-04T21:16:51Z",
      "updated_at": "2018-12-05T18:06:06Z",
      "pushed_at": "2018-12-05T18:06:04Z",
      "git_url": "git://github.com/ThaiSonP/lab1.git",
      "ssh_url": "git@github.com:ThaiSonP/lab1.git",
      "clone_url": "https://github.com/ThaiSonP/lab1.git",
      "svn_url": "https://github.com/ThaiSonP/lab1",
      "homepage": null,
      "size": 1,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master",
      "score": 1.0
    }
  ]
}
```
- A list of all Pokemon

https://pokeapi.co/api/v2/pokemon/ditto

```
{
  "abilities": [
    {
      "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "base_experience": 101,
  "forms": [
    {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
    }
  ],
  "game_indices": [
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    }
  ],
  "height": 3,
  "held_items": [
    {
      "item": {
        "name": "metal-powder",
        "url": "https://pokeapi.co/api/v2/item/234/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "ruby",
            "url": "https://pokeapi.co/api/v2/version/7/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "sapphire",
            "url": "https://pokeapi.co/api/v2/version/8/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version/9/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "firered",
            "url": "https://pokeapi.co/api/v2/version/10/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "leafgreen",
            "url": "https://pokeapi.co/api/v2/version/11/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "diamond",
            "url": "https://pokeapi.co/api/v2/version/12/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "pearl",
            "url": "https://pokeapi.co/api/v2/version/13/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version/14/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "heartgold",
            "url": "https://pokeapi.co/api/v2/version/15/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "soulsilver",
            "url": "https://pokeapi.co/api/v2/version/16/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "black",
            "url": "https://pokeapi.co/api/v2/version/17/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "white",
            "url": "https://pokeapi.co/api/v2/version/18/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "black-2",
            "url": "https://pokeapi.co/api/v2/version/21/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "white-2",
            "url": "https://pokeapi.co/api/v2/version/22/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "x",
            "url": "https://pokeapi.co/api/v2/version/23/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "omega-ruby",
            "url": "https://pokeapi.co/api/v2/version/25/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version/26/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "sun",
            "url": "https://pokeapi.co/api/v2/version/27/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "moon",
            "url": "https://pokeapi.co/api/v2/version/28/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "ultra-sun",
            "url": "https://pokeapi.co/api/v2/version/29/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "ultra-moon",
            "url": "https://pokeapi.co/api/v2/version/30/"
          }
        }
      ]
    },
    {
      "item": {
        "name": "quick-powder",
        "url": "https://pokeapi.co/api/v2/item/251/"
      },
      "version_details": [
        {
          "rarity": 50,
          "version": {
            "name": "diamond",
            "url": "https://pokeapi.co/api/v2/version/12/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "pearl",
            "url": "https://pokeapi.co/api/v2/version/13/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version/14/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "heartgold",
            "url": "https://pokeapi.co/api/v2/version/15/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "soulsilver",
            "url": "https://pokeapi.co/api/v2/version/16/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "black",
            "url": "https://pokeapi.co/api/v2/version/17/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "white",
            "url": "https://pokeapi.co/api/v2/version/18/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "black-2",
            "url": "https://pokeapi.co/api/v2/version/21/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "white-2",
            "url": "https://pokeapi.co/api/v2/version/22/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "x",
            "url": "https://pokeapi.co/api/v2/version/23/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "omega-ruby",
            "url": "https://pokeapi.co/api/v2/version/25/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version/26/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "sun",
            "url": "https://pokeapi.co/api/v2/version/27/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "moon",
            "url": "https://pokeapi.co/api/v2/version/28/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "ultra-sun",
            "url": "https://pokeapi.co/api/v2/version/29/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "ultra-moon",
            "url": "https://pokeapi.co/api/v2/version/30/"
          }
        }
      ]
    }
  ],
  "id": 132,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
  "moves": [
    {
      "move": {
        "name": "transform",
        "url": "https://pokeapi.co/api/v2/move/144/"
      },
      "version_group_details": [
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    }
  ],
  "name": "ditto",
  "order": 203,
  "past_types": [],
  "species": {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
    "front_shiny_female": null,
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
        "front_female": null
      },
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
      }
    },
    "versions": {
      "generation-i": {
        "red-blue": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png",
          "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png",
          "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png"
        },
        "yellow": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png",
          "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png",
          "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png"
        }
      },
      "generation-ii": {
        "crystal": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/132.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/132.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/132.png"
        },
        "gold": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/132.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/132.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/132.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/132.png"
        },
        "silver": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/132.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/132.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/132.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/132.png"
        }
      },
      "generation-iii": {
        "emerald": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/132.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/132.png"
        },
        "firered-leafgreen": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/132.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/132.png"
        },
        "ruby-sapphire": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/132.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/132.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/132.png"
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/132.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/132.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png",
          "front_shiny_female": null
        },
        "heartgold-soulsilver": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/132.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/132.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/132.png",
          "front_shiny_female": null
        },
        "platinum": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/132.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/132.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png",
          "front_shiny_female": null
        }
      },
      "generation-v": {
        "black-white": {
          "animated": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/132.gif",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif",
            "front_shiny_female": null
          },
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/132.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/132.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/132.png",
          "front_shiny_female": null
        }
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/132.png",
          "front_shiny_female": null
        },
        "x-y": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/132.png",
          "front_shiny_female": null
        }
      },
      "generation-vii": {
        "icons": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png",
          "front_female": null
        },
        "ultra-sun-ultra-moon": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/132.png",
          "front_shiny_female": null
        }
      },
      "generation-viii": {
        "icons": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png",
          "front_female": null
        }
      }
    }
  },
  "stats": [
    {
      "base_stat": 48,
      "effort": 1,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  "weight": 40
}
```
- A list of all items in Fortnite

https://fortnite-api.com/v1/map

```
{
  "status": 200,
  "data": {
    "images": {
      "blank": "https://fortnite-api.com/images/map.png",
      "pois": "https://fortnite-api.com/images/map_en.png"
    },
    "pois": [
      {
        "id": "Athena.Location.POI.Carl",
        "name": "CORAL CASTLE",
        "location": {
          "x": 78368,
          "y": -78848,
          "z": -4416
        }
      },
      {
        "id": "Athena.Location.POI.CattyCorner",
        "name": "CATTY CORNER",
        "location": {
          "x": -69331,
          "y": 80376,
          "z": 7272
        }
      },
      {
        "id": "Athena.Location.POI.Coliseum",
        "name": "COLOSSAL COLISEUM",
        "location": {
          "x": 31380,
          "y": 42268,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.POI.BeachyBluffs",
        "name": "CRAGGY CLIFFS",
        "location": {
          "x": 99328,
          "y": 27904,
          "z": -1536
        }
      },
      {
        "id": "Athena.Location.POI.DirtyDocks",
        "name": "DIRTY DOCKS",
        "location": {
          "x": 15744,
          "y": 113920,
          "z": -1024
        }
      },
      {
        "id": "Athena.Location.POI.HollyHedges",
        "name": "HOLLY HEDGES",
        "location": {
          "x": -9856,
          "y": -82432,
          "z": -128
        }
      },
      {
        "id": "Athena.Location.POI.HuntersHaven",
        "name": "HUNTER'S HAVEN",
        "location": {
          "x": -38172,
          "y": 14788,
          "z": 4038
        }
      },
      {
        "id": "Athena.Location.POI.LazyLake",
        "name": "LAZY LAKE",
        "location": {
          "x": -48384,
          "y": 53184,
          "z": 4352
        }
      },
      {
        "id": "Athena.Location.POI.MountainMeadow",
        "name": "MISTY MEADOWS",
        "location": {
          "x": -88320,
          "y": 25856,
          "z": 3584
        }
      },
      {
        "id": "Athena.Location.POI.NightmareJungle",
        "name": "STEALTHY STRONGHOLD",
        "location": {
          "x": 97284,
          "y": -32308,
          "z": -1536
        }
      },
      {
        "id": "Athena.Location.POI.PleasantPark",
        "name": "PLEASANT PARK",
        "location": {
          "x": 65920,
          "y": -16912,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.POI.RetailRow",
        "name": "RETAIL ROW",
        "location": {
          "x": -39040,
          "y": 96064,
          "z": 5376
        }
      },
      {
        "id": "Athena.Location.POI.SaltyTowers",
        "name": "SALTY TOWERS",
        "location": {
          "x": 14464,
          "y": -27648,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.POI.SlurpySwamp",
        "name": "SLURPY SWAMP",
        "location": {
          "x": -65536,
          "y": -47680,
          "z": 0
        }
      },
      {
        "id": "Athena.Location.POI.PowerPlant",
        "name": "STEAMY STACKS",
        "location": {
          "x": 82880,
          "y": 96064,
          "z": -1088
        }
      },
      {
        "id": "Athena.Location.POI.SunnyShores",
        "name": "SWEATY SANDS",
        "location": {
          "x": 35136,
          "y": -76288,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.POI.WeepingWoods",
        "name": "WEEPING WOODS",
        "location": {
          "x": -29696,
          "y": -36096,
          "z": 0
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.AngryApples",
        "name": "The Orchard",
        "location": {
          "x": 61392,
          "y": 51576,
          "z": 176
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BaseCampFoxtrot",
        "name": "Base Camp Foxtrot",
        "location": {
          "x": -106768,
          "y": 45724,
          "z": 5480
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BaseCampGolf",
        "name": "Base Camp Golf",
        "location": {
          "x": -80884,
          "y": 92076,
          "z": 5480
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BaseCampHotel",
        "name": "Base Camp Hotel",
        "location": {
          "x": -65240,
          "y": 110456,
          "z": 5480
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BeachRentals",
        "name": "Rainbow Rentals",
        "location": {
          "x": -37444,
          "y": -101388,
          "z": -1752
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BeachsideMansion",
        "name": "Boost Pad",
        "location": {
          "x": 19712,
          "y": -114496,
          "z": -1408
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BigBridge.Blue",
        "name": "Blue Steel Bridge",
        "location": {
          "x": 67368,
          "y": 13812,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BigBridge.Green",
        "name": "Green Steel Bridge",
        "location": {
          "x": 16752,
          "y": 64308,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BigBridge.Purple",
        "name": "Purple Steel Bridge",
        "location": {
          "x": -48528,
          "y": -40716,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BigBridge.Red",
        "name": "Red Steel Bridge",
        "location": {
          "x": 35904,
          "y": -27648,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BigBridge.Yellow",
        "name": "Yellow Steel Bridge",
        "location": {
          "x": -85328,
          "y": 61108,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BoatLaunch",
        "name": "Boat Launch",
        "location": {
          "x": -112704,
          "y": 3760,
          "z": 5312
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.BoatSales",
        "name": "Drop Shop",
        "location": {
          "x": -18688,
          "y": 24256,
          "z": -832
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BobsBluff",
        "name": "Bob's Bluff",
        "location": {
          "x": 95420,
          "y": 107156,
          "z": -2400
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BonfireCampsite",
        "name": "Timber Tent",
        "location": {
          "x": 11136,
          "y": -72576,
          "z": -1408
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.BushFace",
        "name": "Grumpy Greens",
        "location": {
          "x": 60040,
          "y": 4168,
          "z": 120
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.Tandem.PretzelRestaurant_P",
        "name": null,
        "location": {
          "x": 56852,
          "y": 68964,
          "z": 16
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.ButterBarn",
        "name": "Butter Barn",
        "location": {
          "x": -7982,
          "y": 11250,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.CampCod",
        "name": "Camp Cod",
        "location": {
          "x": -119040,
          "y": 72704,
          "z": -2048
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.CanoeRentals",
        "name": "Lake Canoe",
        "location": {
          "x": -10632,
          "y": 80896,
          "z": 1296
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.CaptainCarpsTruck",
        "name": "Cap'n Carp Delivery Truck",
        "location": {
          "x": 16652,
          "y": 20552,
          "z": -1344
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.Chair",
        "name": "Chair",
        "location": {
          "x": 7956,
          "y": 87152,
          "z": 1944
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.CliffsideRuinedHouses",
        "name": "Pristine Point",
        "location": {
          "x": 108752,
          "y": 76384,
          "z": 224
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.CoralCove",
        "name": "Coral Cove",
        "location": {
          "x": 83904,
          "y": -95808,
          "z": -2631
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.CosmosCrashSite",
        "name": "The Razor Crest",
        "location": {
          "x": 9040,
          "y": 54596,
          "z": -1280
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.CrashedAirplane",
        "name": "Crash Site",
        "location": {
          "x": 73088,
          "y": -62080,
          "z": -320
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.CrashedCargo",
        "name": "Crashed Cargo",
        "location": {
          "x": 31632,
          "y": -115352,
          "z": -1408
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.CrashedHelicopter",
        "name": "Copter Crash",
        "location": {
          "x": 91368,
          "y": -36504,
          "z": -192
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.DurrrBurger",
        "name": "Durrr Burger Food Truck",
        "location": {
          "x": 89664,
          "y": -12120,
          "z": -964
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.PretzelRestaurant_B",
        "name": "The Durrr Burger",
        "location": {
          "x": -38080,
          "y": -69184,
          "z": -2624
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.PretzelWarehouse",
        "name": "Dusted Depot",
        "location": {
          "x": 3440,
          "y": 26064,
          "z": -88
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.FlopperPond",
        "name": "Flopper Pond",
        "location": {
          "x": -668,
          "y": -57484,
          "z": -1408
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.FlushBuilding",
        "name": "Flushed Factory",
        "location": {
          "x": -100371.41,
          "y": -29210.547,
          "z": -2048.0352
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.ForkKnife",
        "name": "Fork Knife Food Truck",
        "location": {
          "x": -17804,
          "y": 56132,
          "z": 3120
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.FortRuin",
        "name": "Fort Crumpet",
        "location": {
          "x": 50368,
          "y": -107840,
          "z": -320
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.Awake.FriendMonument",
        "name": "Friendship Monument",
        "location": {
          "x": 49446,
          "y": -99126,
          "z": -1932
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.GrottoRuins",
        "name": "Brutus' Basin",
        "location": {
          "x": -19414,
          "y": 110456,
          "z": 5480
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.Hatch.A",
        "name": "?",
        "location": {
          "x": 107008,
          "y": 3072,
          "z": -2988
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.Hatch.B",
        "name": "??",
        "location": {
          "x": -46084,
          "y": 122872,
          "z": -1116
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.Hatch.C",
        "name": "???",
        "location": {
          "x": -49152,
          "y": -96252,
          "z": -4800
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.HighHoop",
        "name": "High Hoops",
        "location": {
          "x": 37536,
          "y": -90176,
          "z": -1344
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.HilltopHouse",
        "name": "Hilltop House",
        "location": {
          "x": 83508,
          "y": 84,
          "z": -964
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.HolidayStore",
        "name": "Holiday Helpers",
        "location": {
          "x": -39048,
          "y": 105606,
          "z": 4714
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.LawnmowerRaces",
        "name": "Mowdown",
        "location": {
          "x": 77456,
          "y": 50672,
          "z": 928
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.LazyLakeIsland",
        "name": "Lazy Lake Island",
        "location": {
          "x": -67836,
          "y": 33128,
          "z": -256
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.Lighthouse",
        "name": "Lockie's Lighthouse",
        "location": {
          "x": 117952,
          "y": -54720,
          "z": 320
        }
      },
      {
        "id": "Athena.Location.POI.Tandem.MountainMeadow",
        "name": null,
        "location": {
          "x": -85760,
          "y": 42388,
          "z": 5936
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.LoversLookout",
        "name": "Scenic Spot",
        "location": {
          "x": 50708,
          "y": 30012,
          "z": 116
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.MountainDanceClub",
        "name": "Apres Ski",
        "location": {
          "x": -106304,
          "y": 6512,
          "z": 7664
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.MountainVault",
        "name": "**REDACTED**",
        "location": {
          "x": -74656,
          "y": 89472,
          "z": 5480
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.MountF8",
        "name": "Mount F8",
        "location": {
          "x": -108892,
          "y": 33200,
          "z": 17608
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.MountH7",
        "name": "Mount H7",
        "location": {
          "x": -72424,
          "y": 105352,
          "z": 17608
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.SpyObstacleCourse",
        "name": "GHOST House",
        "location": {
          "x": -30132,
          "y": -5710,
          "z": -1597
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.OvergrownHeads",
        "name": "Greasy Graves",
        "location": {
          "x": -22092,
          "y": -59180,
          "z": -2448
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.PizzaPete",
        "name": "Pizza Pete's Food Truck",
        "location": {
          "x": -100364,
          "y": -18058,
          "z": -900
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.PretzelRestaurant_P",
        "name": "The Pizza Pit",
        "location": {
          "x": 52592,
          "y": 52688,
          "z": -88
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.PowerDam",
        "name": "Hydro 16",
        "location": {
          "x": -69888,
          "y": -7744,
          "z": -256
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.RadioStation",
        "name": "FN Radio",
        "location": {
          "x": 93720,
          "y": 51720,
          "z": 3648
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.RapidsRest",
        "name": "Rapid's Rest",
        "location": {
          "x": -50240,
          "y": 70656,
          "z": 3120
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.RestaurantGas",
        "name": "Gas N' Grub",
        "location": {
          "x": -7296,
          "y": 42752,
          "z": -1344
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.RiskyReels",
        "name": "Risky Reels",
        "location": {
          "x": 31768,
          "y": 10888,
          "z": -832
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.ScrapYard",
        "name": "Compact Cars",
        "location": {
          "x": 25403,
          "y": 85970,
          "z": -344
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.SharkRemains",
        "name": "Sharky Shell",
        "location": {
          "x": 105501,
          "y": -82492,
          "z": -320
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.SheriffOffice",
        "name": "Sheriff's Office",
        "location": {
          "x": 20336,
          "y": 26348,
          "z": -1344
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.ShipwreckCove",
        "name": "Shipwreck Cove",
        "location": {
          "x": -90816,
          "y": 109888,
          "z": -2880
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.SnowCone",
        "name": "Snow Cone Food Truck",
        "location": {
          "x": -82636,
          "y": 88134,
          "z": 7272
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.StackShack",
        "name": "Stack Shack",
        "location": {
          "x": 3376,
          "y": -119208,
          "z": -1408
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.SteelFarm",
        "name": "Steel Farm",
        "location": {
          "x": 41187,
          "y": 67562,
          "z": -344
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.StumpyRidge",
        "name": "Stumpy Ridge",
        "location": {
          "x": -48500,
          "y": 7392,
          "z": -832
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.SurfaceHubIO.D1",
        "name": "Surface Hub IO-D1",
        "location": {
          "x": 96204,
          "y": -30414,
          "z": 2371
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.SurfaceHubIO.E6",
        "name": "Surface Hub IO-E6",
        "location": {
          "x": -40884,
          "y": 6066,
          "z": 5955
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.SurfaceHubIO.F4",
        "name": "Surface Hub IO-F4",
        "location": {
          "x": 28748,
          "y": 41394,
          "z": 579
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.SwampVille",
        "name": "Shanty Town",
        "location": {
          "x": -61376,
          "y": -82304,
          "z": -3776
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.TallestMountain",
        "name": "Mount Kay",
        "location": {
          "x": -93060,
          "y": 85640,
          "z": 17608
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.ToiletTitan",
        "name": "No. 2",
        "location": {
          "x": 10608,
          "y": -117544,
          "z": -1408
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.Trophy",
        "name": null,
        "location": {
          "x": 79888,
          "y": 95264,
          "z": -1856
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.UnremarkableShack",
        "name": "Unremarkable Shack",
        "location": {
          "x": 112928,
          "y": -3044,
          "z": -964
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.VikingShip",
        "name": "Viking Vessel",
        "location": {
          "x": -13378.227,
          "y": -98115.14,
          "z": -478.65918
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.WaterfallGorge",
        "name": "Gorgeous Gorge",
        "location": {
          "x": -25472,
          "y": 27072,
          "z": -832
        }
      },
      {
        "id": "Athena.Location.UnnamedPOI.WeatherStation",
        "name": "Weather Station",
        "location": {
          "x": -94496,
          "y": 77504,
          "z": 7272
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.WoodsmanCabin",
        "name": "Lumber Lodge",
        "location": {
          "x": -118532,
          "y": 10120,
          "z": -424
        }
      },
      {
        "id": "Athena.Location.UnNamedPOI.PrezelCrater",
        "name": "Zero Point",
        "location": {
          "x": 6972,
          "y": 5916,
          "z": 8292
        }
      }
    ]
  }
}
```
- A list of all Game of Thrones Episodes.

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
