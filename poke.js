let poke = {
"count": 964,
"next": "https://pokeapi.co/api/v2/pokemon/?offset=140&limit=20",
"previous": "https://pokeapi.co/api/v2/pokemon/?offset=100&limit=20",
"results": [
  {
    "name": "starmie",
    "url": "https://pokeapi.co/api/v2/pokemon/121/"
  },
  {
    "name": "mr-mime",
    "url": "https://pokeapi.co/api/v2/pokemon/122/"
  },
  {
    "name": "scyther",
    "url": "https://pokeapi.co/api/v2/pokemon/123/"
  },
  {
    "name": "jynx",
    "url": "https://pokeapi.co/api/v2/pokemon/124/"
  },
  {
    "name": "electabuzz",
    "url": "https://pokeapi.co/api/v2/pokemon/125/"
  },
  {
    "name": "magmar",
    "url": "https://pokeapi.co/api/v2/pokemon/126/"
  },
  {
    "name": "pinsir",
    "url": "https://pokeapi.co/api/v2/pokemon/127/"
  },
  {
    "name": "tauros",
    "url": "https://pokeapi.co/api/v2/pokemon/128/"
  },
  {
    "name": "magikarp",
    "url": "https://pokeapi.co/api/v2/pokemon/129/"
  },
  {
    "name": "gyarados",
    "url": "https://pokeapi.co/api/v2/pokemon/130/"
  },
  {
    "name": "lapras",
    "url": "https://pokeapi.co/api/v2/pokemon/131/"
  },
  {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon/132/"
  },
  {
    "name": "eevee",
    "url": "https://pokeapi.co/api/v2/pokemon/133/"
  },
  {
    "name": "vaporeon",
    "url": "https://pokeapi.co/api/v2/pokemon/134/"
  },
  {
    "name": "jolteon",
    "url": "https://pokeapi.co/api/v2/pokemon/135/"
  },
  {
    "name": "flareon",
    "url": "https://pokeapi.co/api/v2/pokemon/136/"
  },
  {
    "name": "porygon",
    "url": "https://pokeapi.co/api/v2/pokemon/137/"
  },
  {
    "name": "omanyte",
    "url": "https://pokeapi.co/api/v2/pokemon/138/"
  },
  {
    "name": "omastar",
    "url": "https://pokeapi.co/api/v2/pokemon/139/"
  },
  {
    "name": "kabuto",
    "url": "https://pokeapi.co/api/v2/pokemon/140/"
  }
]
}

  let res = [];
  poke.results.forEach(character => {
      res.push(character.name)
  })
  console.log(res);
