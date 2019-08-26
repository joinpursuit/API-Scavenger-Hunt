# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

Status Code Scavenger Hunt!

Use Postman to find each of the following HTTP codes:


1. 200
* https://pokeapi.co/api/v2/pokemon/jolteon/
* the request to get info from this website got through, it was successful
* no issues

1. 301
* the url the client is sending to has moved perminently and info cannot be obtained
* to resolve this issue is to automattically redirect to the proper url when the previous one is called

1. 400
* Bad Request
* It can be caused by incorrect url or incorrect/ outdated cookies. One way to address issue is to move the client to an error page, tell them to refresh page or tell them to delete the cookie

1. 401
* https://canvas.instructure.com/calendar#view_name=month&view_start=2019-08-26
* unauthorized, authorization is needed but not provided so the server couldn't get access to the information
* to resolve, put in needed username and password, or make website got to log in page and tell users to log in again

1. 403
* https://fortnite-api.theapinetwork.com/items/list
* Forbidden error - the resource the client is trying to access is forbidden for some reason, caused mostly by bad security plug-ins
* can be resolved by deactivating said plug-ins

1. 404
* https://www.amiiboapi.com/api/amiibo/?character=lik
* Page Not Found - can be caused if website is down and undergoing maintanence or url is misspelled, 
* can be resolved by having the page tell the user what's going on, maybe refresh page

1. 418
* https://www.google.com/teapot
* I'm a teapot
* Implemented in 1998 to be an April Fool's Joke, when a teapot is requested to brew coffee


1. 500
* Internal Server Error
* is a generic error message, can be caused by requesting to the wrong server
* to resolve issue, change the url of that is called in the code


For each of the questions below, write:

1. The website which generated the HTTP status code
2. A description of what the status code means
3. If an app you were writing encountered this status code, what would you do (if anything) to resolve any issues?


For reference, see:

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes (Links to an external site.)
https://http.cat


# Part Two

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
* https://catfact.ninja/fact
```
{
"fact": "In Holland’s embassy in Moscow, Russia, the staff noticed that the two Siamese cats kept meowing and clawing at the walls of the building. Their owners finally investigated, thinking they would find mice. Instead, they discovered microphones hidden by Russian spies. The cats heard the microphones when they turned on.",
"length": 320
}
```

1. A list of 150 random users in English.
* could only find one random user at a time
* https://randomuser.me/api/
<details>
<summary>Show</summary>
<p>{
"results": [
{
"gender": "female",
"name": {
"title": "ms",
"first": "angelique",
"last": "hansmann"
},
"location": {
"street": "gartenweg 100",
"city": "konstanz",
"state": "thüringen",
"postcode": 50646,
"coordinates": {
"latitude": "-38.6708",
"longitude": "85.9911"
},
"timezone": {
"offset": "-1:00",
"description": "Azores, Cape Verde Islands"
}
},
"email": "angelique.hansmann@example.com",
"login": {
"uuid": "04e6157f-72e4-4206-9162-7310750f4ce6",
"username": "blackladybug278",
"password": "highheel",
"salt": "j6sjdzgd",
"md5": "5b81d2b5526d25d429289e19df1053fa",
"sha1": "c0a5da35b2420796b7109a96ab51d7ad06fae164",
"sha256": "099f7c39ce936783e7565257a240fbf000e96e35ce3283a809495434d74c4669"
},
"dob": {
"date": "1950-01-30T23:00:15Z",
"age": 69
},
"registered": {
"date": "2002-08-09T07:25:15Z",
"age": 17
},
"phone": "0309-2884278",
"cell": "0178-6553280",
"id": {
"name": "",
"value": null
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/42.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
},
"nat": "DE"
}
],
"info": {
"seed": "bddee4c2fdbc24eb",
"results": 1,
"page": 1,
"version": "1.2"
}
}</p>
</details>

1. The current stock price of Microsoft. (IEX API)
* https://www.nasdaq.com/symbol/msft
```
<!doctype html>
<html lang="en-us" class="wide quotes-responsive quotes-300-right summary-quote no-js" xmlns:og="https://ogp.me/ns#"
xmlns:fb="https://www.facebook.com/2008/fbml">

<head>
<!-- Google Tag Manager -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K2BQVP7');
</script>
<!-- End Google Tag Manager -->
<script>
(function(){
var is_chrome;
```
1. The 5 year history of Apple stock prices (IEX API)
* https://www.nasdaq.com/symbol/aapl/historical
```

if(typeof navigator.vendor!="undefined")
is_chrome = ((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && (navigator.vendor.toLowerCase().indexOf("google") > -1));
else
is_chrome = false;
})();
</script>
<!-- includes\2-column-quotes-300-right.master -->
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1" />
<meta name="viewport" content="width=device-width" />


<!-- START page level head content -->
<title>Apple Inc. Common Stock (AAPL) Historical Prices &amp; Data - NASDAQ.com</title>
<!-- aspx/historical_quotes.aspx -->
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="description"
content="AAPL&#32;historical&#32;prices,&#32;AAPL&#32;historical&#32;data,Apple&#32;Inc.&#32;Common&#32;Stock&#32;historical&#32;prices,&#32;historical&#32;stock&#32;prices,&#32;historical&#32;prices,&#32;historical&#32;data" />

<link rel="canonical" href="https://www.nasdaq.com/symbol/aapl/historical" />

<script type="text/javascript">
myPage = 'historical_quotes';
```
1. All the Swift language repos on Github with Pursuit in their name
* https://api.github.com/search/repositories?q=pursuit-core+language:swift&sort=stars&order=desc
```
{
"total_count": 45,
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
```

1. A list of all Pokemon
* https://pokeapi.co/api/v2/pokemon
```
{
"count": 964,
"next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
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
```

1. A list of all items in Fortnite
* https://fortnite-api.theapinetwork.com/items/list

1. A list of all Game of Thrones Episodes.
* https://api.got.show/api/map/episodes
```
,
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
1. A list of all songs with "Love" in the title.
* https://itunes.apple.com/search?term=love
```
{
"resultCount": 50,
"results": [
{
"wrapperType": "track",
"kind": "song",
"artistId": 42616562,
"collectionId": 715579496,
"trackId": 715581836,
"artistName": "Nat \"King\" Cole",
"collectionName": "Nat King Cole",
"trackName": "L-O-V-E",
"collectionCensoredName": "Nat King Cole",
"trackCensoredName": "L-O-V-E",
"artistViewUrl": "https://music.apple.com/us/artist/nat-king-cole/42616562?uo=4",
"collectionViewUrl": "https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4",
"trackViewUrl": "https://music.apple.com/us/album/l-o-v-e/715579496?i=715581836&uo=4",
"previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/42/6a/a3/426aa324-78dd-8667-2869-dbfbb469e983/mzaf_5521623155491639858.plus.aac.p.m4a",
"artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/30x30bb.jpg",
"artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/60x60bb.jpg",
"artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/50/b7/55/50b755d1-2721-ef0e-6898-c33d16be37f9/source/100x100bb.jpg",
```
1. All information about Petyr Baelish from the Game of Thrones books
* https://www.anapioficeandfire.com/api/characters/823
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
```
1. All the movies Leonardo Dicaprio has acted in
* https://itunes.apple.com/search?term=leonardo+dicaprio
```
"resultCount": 41,
"results": [
{
"wrapperType": "track",
"kind": "feature-movie",
"collectionId": 1151694663,
"trackId": 774084884,
"artistName": "Martin Scorsese",
"collectionName": "10 Years of iTunes Movies - Paramount",
"trackName": "The Wolf of Wall Street",
"collectionCensoredName": "10 Years of iTunes Movies - Paramount",
"trackCensoredName": "The Wolf of Wall Street",
"collectionArtistId": 1008915738,
"collectionArtistViewUrl": "https://itunes.apple.com/us/artist/paramount-home-entertainment-inc/1008915738?uo=4",
```
