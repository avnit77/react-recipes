import { useState, useEffect } from 'react';
import { getRecipes } from '../services/edamamApi';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
//   const [query, setQuery] = useState('');

  useEffect(() => {
    if(searchTerm !== '') {
      getRecipes(searchTerm)
        .then(recipes => {
          setRecipes([]);
          return recipes;
        })
        .then(recipes => {
          setRecipes(recipes.recipes);
        });
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();

    getRecipes(searchTerm)
      .then(recipes => {
        setRecipes([]);
        return recipes;
      })
      .then(recipes => {
        setRecipes(recipes.recipes);
      });
  };

  return { recipes, handleSearch, searchTerm, setSearchTerm };
};
