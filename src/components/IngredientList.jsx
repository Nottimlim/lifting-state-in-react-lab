// src/components/IngredientList.jsx
import React from 'react';
import Ingredient from './Ingredient.jsx';

const IngredientList = ({ ingredients, onAdd }) => {
    return (
      <div className="ingredient-list">
        <ul>
          {ingredients.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              onAdd={() => onAdd(ingredient)}
              isInStack={false}
            />
          ))}
        </ul>
      </div>
    );
  };
  export default IngredientList;
