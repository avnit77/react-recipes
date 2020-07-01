import React from 'react';

const Recipe = ({title, diet, image}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{diet}</p>
      <img src={image}/>
    </div>
  );
};

export default Recipe;
