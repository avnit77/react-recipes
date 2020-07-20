export const getRecipes = (ingredient) => {
  return fetch(`http://api.edamam.com/search?q=${ingredient}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`)
    .then(res => res.json());
};
