import { useState } from 'react';
import { getRecipes } from '../services/edamamApi';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (event) => {
    event.preventDefault();

    getRecipes(searchTerm)
      .then(recipes => {
        setRecipes([]);
        return recipes;
      })
      .then(recipes => {
        console.log('RECIPES', recipes.hits);
        setRecipes(recipes.hits);
        setSearchTerm('');
      });
  };

  return { recipes, handleSearch, searchTerm, setSearchTerm };
};
