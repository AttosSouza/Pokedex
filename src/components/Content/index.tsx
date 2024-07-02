import React from 'react';
import { Dialog, DialogTrigger } from '../ui/dialog';
import pokebola from '/pokemon_icon.svg';
import { useContentViewModel } from './useContentViewModel';
import PokemonCard from '../PokemonCard';
import PokemonModal from '../PokemonModal';
import SearchBar from '../Searchbar';
import LoadMoreButton from '../LoadMoreButton';

const Content = () => {
  const {
    pokemonCount,
    pokemons,
    handleOpenModal,
    selectedPokemon,
    nextPageUrl,
    isLoading,
    loadMorePokemon,
    searchValue,
    handleInputChange,
    isSearching,
  } = useContentViewModel();

  return (
    <section className="container py-16">
      <div className="flex justify-between flex-wrap">
        <div>
          <h2 className="font-roboto text-5xl">
            What pokémon are you
            <br /> looking for?
          </h2>
          {pokemonCount && (
            <span className="mt-10 font-roboto text-xl font-medium flex items-center gap-3">
              <img src={pokebola} alt="pokebola" width={24} height={24} />
              {pokemonCount} Pokémons
            </span>
          )}
        </div>
        <div className="max-md:mt-10">
          <SearchBar value={searchValue} onChange={handleInputChange} />
        </div>
      </div>

      <div className="grid justify-center md:grid-cols-3 gap-10 mt-28">
        {isLoading && isSearching ? (
          <div className="col-span-3 text-center">Searching...</div>
        ) : (
          pokemons.map((pokemon) => (
            <Dialog key={pokemon.id}>
              <DialogTrigger asChild>
                <PokemonCard
                  pokemon={pokemon}
                  onClick={handleOpenModal(pokemon)}
                />
              </DialogTrigger>
              {selectedPokemon && selectedPokemon.id === pokemon.id && (
                <PokemonModal pokemon={selectedPokemon} />
              )}
            </Dialog>
          ))
        )}
      </div>

      {!isSearching && nextPageUrl && (
        <LoadMoreButton isLoading={isLoading} onClick={loadMorePokemon} />
      )}
    </section>
  );
};

export default Content;
