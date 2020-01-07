# Pursuit-Core-Introduction-To-Networking-and-APIs-Lab

# Part One

API Scavenger Hunt!

For each of the questions below, identify a website and search query that will give you the appropriate JSON.  Paste the url and a snippet of the json below.  Googling the category + API will generally take you to where you need.  Ex. https://lmgtfy.com/?q=cat+fact+api

1. A random cat fact
https://catfact.ninja/fact?max_length=140
{
    "fact": "The life expectancy of cats has nearly doubled over the last fifty years.",
    "length": 73
}
1. A list of 150 random users in English.
https://randomuser.me/api/
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
1. All the repos on Github with Pursuit their name

1. All the JavaScript repos on Github with Pursuit in their name
1. All the Swift repos on Github with Pursuit in their name
1. A list of all Pokemon
https://pokeapi.co/api/v2/pokemon/
[
  'starmie',    'mr-mime',
  'scyther',    'jynx',
  'electabuzz', 'magmar',
  'pinsir',     'tauros',
  'magikarp',   'gyarados',
  'lapras',     'ditto',
  'eevee',      'vaporeon',
  'jolteon',    'flareon',
  'porygon',    'omanyte',
  'omastar',    'kabuto'
]
1. A list of all items in Fortnite
git stat
{
  "results": [
    {
      "rarityid": {
        "name": "epic",
        "date": "November 26th 2019"
      }
    }
  ],
  "items": [
1. A list of all Game of Thrones Episodes.
https://api.got.show//api/map/episodes
{
    "message": "Success",
    "data": [
        {
            "characters": [
                "Viserys Targaryen",
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



