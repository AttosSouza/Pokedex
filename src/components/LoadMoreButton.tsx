import React from 'react';

interface LoadMoreButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

const LoadMoreButton = ({ isLoading, onClick }: LoadMoreButtonProps) => (
  <button
    className="mt-14 px-4 py-2 rounded-md bg-[#eb3850] text-white hover:bg-red-500 block mx-auto"
    disabled={isLoading}
    onClick={onClick}
  >
    {isLoading ? 'Loading...' : 'Load more Pokemons'}
  </button>
);

export default LoadMoreButton;
