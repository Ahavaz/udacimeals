const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

export const fetchRecipes = (food = '') =>
  fetch(`https://api.edamam.com/search?q=${food.trim()}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then(res => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))