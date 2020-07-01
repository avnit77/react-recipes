export const getRecipes = (ingredient) => {
  return fetch(`http://api.edamam.com/search?q=${ingredient}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
    .then(res => res.json());
};
