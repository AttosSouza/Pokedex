import react from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import StatBar from './StatBar';
import { PokeAttributes } from '@/types';

interface PokemonModalProps {
  pokemon: PokeAttributes;
}

const PokemonModal = ({ pokemon }: PokemonModalProps) => (
  <DialogContent className="p-10">
    <div className="w-44 h-44 mx-auto">
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        className="w-full h-full"
      />
    </div>
    <div>
      <DialogHeader>
        <span className="text-base">#{pokemon.id}</span>
        <DialogTitle>
          <span className="block font-roboto capitalize text-4xl mb-5">
            {pokemon.name}
          </span>
        </DialogTitle>
        <DialogDescription>
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="mr-5 py-2 px-5 font-medium capitalize border bg-white shadow-md rounded-md text-[#eb3850]"
            >
              {type.type.name}
            </span>
          ))}
        </DialogDescription>
      </DialogHeader>
      <div className="mt-14 flex gap-5">
        <span className="font-roboto capitalize flex flex-col">
          Height:{' '}
          <span className="font-bold">{(pokemon.height / 10).toFixed(1)}m</span>
        </span>
        <span className="font-roboto capitalize flex flex-col">
          Weight:{' '}
          <span className="font-bold">
            {(pokemon.weight / 10).toFixed(1)}kg
          </span>
        </span>
      </div>
      <p className="mt-10 mb-5 font-roboto font-medium">Stats</p>
      {pokemon.stats.map((stat) => (
        <StatBar
          key={stat.stat.name}
          name={stat.stat.name}
          value={stat.base_stat}
        />
      ))}
    </div>
  </DialogContent>
);

export default PokemonModal;
