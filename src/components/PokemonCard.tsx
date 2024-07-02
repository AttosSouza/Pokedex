import React, { forwardRef } from 'react';
import { PokeAttributes } from '@/types';

interface PokemonCardProps {
  pokemon: PokeAttributes;
  onClick: (pokemon: PokeAttributes) => void;
}
const PokemonCard = forwardRef<HTMLDivElement, PokemonCardProps>(
  ({ pokemon, onClick }, ref) => (
    <div
      ref={ref}
      key={pokemon.id}
      className="w-full md:w-[400px] h-full shadow-md px-6 py-6 rounded-lg bg-white cursor-pointer hover:shadow-xl"
      onClick={() => onClick(pokemon)}
    >
      <div className="w-36 h-36 mx-auto">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="w-full h-full"
        />
      </div>
      <div className="mt-4">
        <p>#{pokemon.id}</p>
        <h3 className="font-roboto font-bold capitalize mt-2">
          {pokemon.name}
        </h3>
      </div>
    </div>
  ),
);

export default PokemonCard;
