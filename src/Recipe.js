import React from 'react'

const Recipe = ({ image, label, calories, cuisineType, fatLevel, mealType }) => {
  return (
    <div className='single-recipe-container'>
      <h1>{label}</h1>
      <hr />
      <img src={image} alt="recipe-img" />
      <hr />
      <div className="recipe-info">
        <p>Cuisine Type : {cuisineType}</p>
        <p>Meal Type : {mealType}</p>
        <p>Calories : {calories}</p>
        <p>Fat Type :{fatLevel}</p>
      </div>
    </div>
  );
}

export default Recipe;