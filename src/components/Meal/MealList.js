import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IngredientSearch from '../IngredientSearch/IngredientSearch';
import "./Meal.scss";

const MealList = ({ meals }) => {
  const [filteredMeals, setFilteredMeals] = useState(meals);

  const handleIngredientsSearch = (ingredients) => {
    if (!ingredients.length) {
      setFilteredMeals(meals);
      return;
    }

    const filtered = meals?.filter(meal => {
      const mealIngredients = [];
      // Get all ingredients from meal object
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
          mealIngredients.push(ingredient.toLowerCase());
        }
      }
      // Check if all searched ingredients are in the meal
      return ingredients.every(ing => 
        mealIngredients.some(mealIng => mealIng.includes(ing))
      );
    });

    setFilteredMeals(filtered);
  };

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <IngredientSearch onIngredientsSubmit={handleIngredientsSearch} />
        <div className='sc-title'>meals</div>
        <section className='sc-meal grid'>
          {
            filteredMeals?.map(mealItem => {
              const {idMeal:id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;

              return (
                <Link to = {`/meal/${id}`} className = "meal-itm align-center justify-center" key = {id}>
                  <div className='meal-itm-img'>
                    <img src = {thumbnail} alt = {meal} />
                    <div className='meal-itm-cat bg-orange text-orange fw-6'>{category}</div>
                  </div>

                  <div className='meal-itm-body'>
                    <div className='meal-itm-body-info flex flex-column'>
                      <div className='area fs-14 ls-1 fw-5'>{area}</div>
                      <div className='meal fw-15 fw-7 op-09'>{meal}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default MealList;