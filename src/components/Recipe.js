import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ title, image, url }) => {
  return (
    <div className="recipe">
      <a href={url}>{title}</a>
      <img src={image}/>
    </div>
  );
};

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
};

export default Recipe;
