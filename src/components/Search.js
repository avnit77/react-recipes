import React, { useState } from 'react';
import { Recipes } from './Recipes';
import { useRecipes } from '../hooks/useRecipes';
import styles from  './Search.css';

const Search = () => {
  const { recipes, handleSearch, searchTerm, setSearchTerm } = useRecipes();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input className={styles.input} placeholder="food" type="text" value={searchTerm} onChange={handleChange}/>
        <button type="submit"> Find </button>
      </form>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default Search;
