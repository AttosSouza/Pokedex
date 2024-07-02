import React, { ChangeEvent } from 'react';
import searchIcon from '/search.svg';

interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="relative max-md:mb-10">
    <input
      type="search"
      placeholder="Search for a pokémon"
      value={value}
      onChange={onChange}
      className="w-[28.125rem] h-[3.125rem] shadow-lg py-4 px-14 rounded-lg outline-none max-md:w-full"
    />
    <img
      src={searchIcon}
      alt="Search"
      className="w-4 h-4 absolute top-4 left-6"
    />
  </div>
);

export default SearchBar;
