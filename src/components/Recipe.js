import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ title, diet, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{diet}</p>
      <img src={image}/>
    </div>
  );
};

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Recipe;
