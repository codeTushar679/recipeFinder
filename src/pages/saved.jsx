import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { removeRecipe } from '../slice';

function Saved() {
  const dispatch = useDispatch();
  const savedRecipes = useSelector(state => state.savedRecipes);

  const handleRemove = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className='flex flex-col justify-center items-center' >
      <h1 className='text-5xl font-bold text-gray-700 mt-10 mb-10 text-center' >Saved Recipes</h1>
      <div className='grid grid-cols-4 gap-10 justify-center'>
        {savedRecipes.length === 0 ? (
          <p className='text-2xl font-bold text-gray-700 mt-10 mb-10 text-center' >No saved recipes.</p>
        ) : (
          savedRecipes.map(recipe => (
            <div key={recipe.idMeal} className='bg-[#F4F6FF] h-85 w-60 rounded-lg drop-shadow-lg text-center '>
              <img className='rounded-t-lg' src={recipe.strMealThumb} alt={`${recipe.strMeal} image`} />
              <div className='px-4 pb-2'>
                <h2 className='font-bold mt-3'>{recipe.strMeal}</h2>
                <div className='mt-2 gap-3 flex justify-center'>
                  <NavLink to={`/${recipe.idMeal}`}>
                    <button className='bg-[#F3C623] h-8 w-13 rounded-lg'>Recipe</button>
                  </NavLink>
                  <button
                    className='bg-[#F3C623] h-8 w-15 rounded-lg'
                    onClick={() => handleRemove(recipe)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Saved;