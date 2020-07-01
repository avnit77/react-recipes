import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { getRecipes } from '../services/edamamApi';

const Search = () =>  {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
  };
  return (
    <div className="search">
      <form onSubmit={getSearch}className="search-form">
        <input className="search-bar" type="text" value={search} onChange={handleChange}/>
        <button className ="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          diet={recipe.recipe.dietLabels}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default Search;
