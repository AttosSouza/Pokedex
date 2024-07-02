import { useState, useEffect } from 'react';
import fetchData from '../../utils/fetchData';
import { PokeAttributes, PokemonResponse } from '@/types';
import useFetch from '@/hooks/useFetch';

export function useContentViewModel() {
  const [pokemonCount, setPokemonCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<PokeAttributes[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokeAttributes | null>(
    null,
  );
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const [allPokemonNames, setAllPokemonNames] = useState<
    { name: string; url: string }[]
  >([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokeAttributes[]>(
    [],
  );
  const [isSearching, setIsSearching] = useState(false);

  const { data: pokemonData } = useFetch<PokemonResponse>(
    'https://pokeapi.co/api/v2/pokemon?limit=6',
  );

  useEffect(() => {
    const getPokemon = async () => {
      if (pokemonData?.results) {
        setIsLoading(true);
        try {
          const fetchedPokemons = await Promise.all(
            pokemonData.results.map((item) =>
              fetchData<PokeAttributes>(item.url),
            ),
          );
          // Filter out null values
          const validPokemons = fetchedPokemons.filter(
            (pokemon): pokemon is PokeAttributes => pokemon !== null,
          );
          setPokemons(validPokemons);
          setNextPageUrl(pokemonData.next);
          setPokemonCount(pokemonData.count);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getPokemon();
  }, [pokemonData]);

  useEffect(() => {
    const fetchAllPokemonNames = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=1000',
        );
        const data = await response.json();
        setAllPokemonNames(data.results);
      } catch (error) {
        console.error('Error fetching all pokemon names:', error);
      }
    };

    fetchAllPokemonNames();
  }, []);

  useEffect(() => {
    const searchPokemons = async () => {
      if (searchValue) {
        setIsSearching(true);
        setIsLoading(true);
        const lowercasedSearch = searchValue.toLowerCase();
        const matchedPokemons = allPokemonNames
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(lowercasedSearch),
          )
          .slice(0, 6); // Limit to 6 results

        try {
          const fetchedPokemons = await Promise.all(
            matchedPokemons.map((pokemon) =>
              fetchData<PokeAttributes>(pokemon.url),
            ),
          );
          const validPokemons = fetchedPokemons.filter(
            (pokemon): pokemon is PokeAttributes => pokemon !== null,
          );
          setFilteredPokemons(validPokemons);
        } catch (error) {
          console.error('Error fetching filtered pokemons:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsSearching(false);
        setFilteredPokemons([]);
      }
    };

    searchPokemons();
  }, [searchValue, allPokemonNames]);

  const handleOpenModal = (pokemon: PokeAttributes) => () => {
    setSelectedPokemon(pokemon);
  };

  const loadMorePokemon = async () => {
    if (!nextPageUrl) return; // Handle no more data scenario
    setIsLoading(true);
    try {
      const data = await fetchData<PokemonResponse>(nextPageUrl);
      const newPokemons: PokeAttributes[] = [];
      if (data) {
        for (const item of data.results) {
          const pokemon = await fetchData<PokeAttributes>(item.url);
          if (pokemon) {
            newPokemons.push(pokemon);
          }
        }
        setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]); // Update state with new data
        setNextPageUrl(data.next); // Update next page URL
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return {
    pokemonCount,
    pokemons: isSearching ? filteredPokemons : pokemons,
    handleOpenModal,
    selectedPokemon,
    nextPageUrl,
    isLoading,
    loadMorePokemon,
    searchValue,
    handleInputChange,
    isSearching,
  };
}
