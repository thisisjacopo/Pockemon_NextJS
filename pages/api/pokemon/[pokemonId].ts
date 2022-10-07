import type { NextApiRequest, NextApiResponse } from "next";

import Pokemons from "../data/pokemon.json";



export default function handler(req : any, res: any) {
    const { pokemonId } = req.query
    const pokemon = Pokemons.find(poke => poke.id === parseInt(pokemonId))
    res.status(200).json(pokemon)
  }