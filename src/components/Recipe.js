import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css'

const Recipe = ({ title, image, url }) => {
  return (
    <div className={styles.recipe}>
      <a href={url}>{title}
      <img width= '300px' src={image}/>
      </a>
    </div>
  );
};

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
};

export default Recipe;
