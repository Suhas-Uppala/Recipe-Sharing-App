import React, { useState } from 'react';
import "./IngredientSearch.scss";

const IngredientSearch = ({ onIngredientsSubmit }) => {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');

  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim().toLowerCase()]);
      setCurrentIngredient('');
    }
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onIngredientsSubmit(ingredients);
  };

  return (
    <div className='ingredient-search'>
      <h3>Search by Ingredients</h3>
      <div className='ingredient-input'>
        <input
          type="text"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          placeholder="Enter an ingredient"
        />
        <button onClick={handleAddIngredient}>Add</button>
      </div>
      <div className='ingredient-list'>
        {ingredients.map((ingredient, index) => (
          <span key={index} className='ingredient-tag'>
            {ingredient}
            <button onClick={() => handleRemoveIngredient(index)}>×</button>
          </span>
        ))}
      </div>
      <button 
        className='search-button'
        onClick={handleSubmit}
        disabled={ingredients.length === 0}
      >
        Find Recipes
      </button>
    </div>
  );
};

export default IngredientSearch;
