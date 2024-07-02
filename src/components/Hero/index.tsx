import React from 'react';
import pokeball from '/assets/images/pokeball.svg';

const Hero = () => {
  return (
    <section className="container pt-44 flex">
      <div className="flex flex-col justify-center">
        <h1 className="font-roboto text-[3.75rem] font-bold max-md:text-6xl max-md:text-[#f7f7f7]">
          Catch 'Em All Here!
          <br />
          Your Ultimate <span className="text-[#eb3850]">Pokémon</span> <br />
          Resource
        </h1>
        <p className="font-roboto mt-9 max-md:text-[#f7f7f7]">
          The Ultimate Pokemon Guide - Discover the different types of Pokemon,
          <br />
          their abilities, and how to build your dream team.
        </p>
      </div>
      <div className="relative top-0 left-24 max-md:hidden">
        <img src={pokeball} alt="pokeball" width={600} height={150} />
      </div>
    </section>
  );
};

export default Hero;
