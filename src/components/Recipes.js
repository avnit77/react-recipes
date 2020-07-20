import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import styles from  './Recipes.css';

export const Recipes = ({ recipes }) => {
  const recipesElements = recipes.map(recipe => {
    return (
      <li key={recipe.recipe.uri} >
        <Recipe
          url={recipe.recipe.url}
          title={recipe.recipe.label}
          image={recipe.recipe.image} />
      </li>
    );}
  );

  return (
    <ul className={styles.recipeList}>
      <h2>{recipesElements}</h2>
    </ul>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
};
