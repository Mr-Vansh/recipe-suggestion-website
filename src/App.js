import './App.css';
import React, { useEffect, useState } from 'react';

import Recipe from './Recipe';

const App = () => {

  // API DETAILS
  const APP_ID = "79b95565";
  const APP_KEY = "6b1adf720ee5e66c47eace813fc5b5e3	";



  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("potato")



  //  RENDERING PAGE ON CERTAIN EVENT
  useEffect(() => {
    // calling fetching function
    getRecipes();
  }, [query]);




  // FUNCTION FOR FETCHING DATA FROM API
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }


  // search function for recipe
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }



  // update search on user's input
  const updateSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    // setSearch("")
  }


  return (
    <div className='App'>
      <form className='search-form' onSubmit={updateSearch}>
        <input className='search-bar' type="text" value={search} onChange={handleSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>

      <hr />

      <div className="recipes-container">
        {/* mapping through EACH recipe that we recieved and then CALLING RECIPE COMPONENT */}
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            cuisineType = {recipe.recipe.cuisineType}
            mealType = {recipe.recipe.mealType}
            calories={recipe.recipe.calories}
            fatLevel = {recipe.recipe.dietLabels} />
        ))}
      </div>
    </div>
  );
}

export default App;
