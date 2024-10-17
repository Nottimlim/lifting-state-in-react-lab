// `src/components/BurgerStack.jsx`
import React from 'react';
import Ingredient from './Ingredient';

const BurgerStack = ({ stack, onRemove }) => {
    return (
      <div className="burger-stack">
        <ul>
          {stack.length === 0 ? (
            <p>No Ingredients</p>
          ) : (
            stack.map((ingredient, index) => (
              <Ingredient
                key={index}
                ingredient={ingredient}
                onRemove={() => onRemove(index)}
                isInStack={true}
              />
            ))
          )}
        </ul>
      </div>
    );
  };
  
  export default BurgerStack;
