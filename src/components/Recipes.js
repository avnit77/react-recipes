import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

export const Recipes = ({ recipes }) => {
  const recipesElements = recipes.map(recipe => {
    return (
      <li key={recipe.recipe.uri} >
        <Recipe
          title={recipe.recipe.label}
          diet={recipe.recipe.dietLabels}
          image={recipe.recipe.image} />
      </li>
    );}
  );

  return (
    <ul>
      <h2>{recipesElements}</h2>
    </ul>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
};
