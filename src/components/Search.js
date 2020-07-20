import React, { useState } from 'react';
import { Recipes } from './Recipes';
import { useRecipes } from '../hooks/useRecipes';

const Search = () => {
  const { recipes, handleSearch, searchTerm, setSearchTerm } = useRecipes();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="search-form">
        <input className="search-bar" type="text" value={searchTerm} onChange={handleChange}/>
        <button className ="search-button" type="submit">Search</button>
      </form>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default Search;
