const Ingredient = ({ ingredient, onAdd, onRemove, isInStack }) => {
    return (
      <li
        className="ingredient-box"
        style={{
          backgroundColor: ingredient.color, // Dynamic background color
        }}
      >
        {ingredient.name}
        {isInStack ? (
          <button onClick={onRemove}>X</button>
        ) : (
          <button onClick={onAdd}>+</button>
        )}
      </li>
    );
  };
  
  export default Ingredient;