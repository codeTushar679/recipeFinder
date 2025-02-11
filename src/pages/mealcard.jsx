import React from 'react'
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { saveRecipe, removeRecipe } from '../slice';
// import '../pages/mealcard.css'

function Mealcard({detail}) {
    console.log(detail);

    const dispatch = useDispatch();
    const savedRecipes = useSelector(state => state.savedRecipes)

    const isSaved = (idMeal) => {
        return savedRecipes.some(recipe => recipe.idMeal === idMeal)
    }
    
    const handleSave = (recipe) => {
        if (isSaved(recipe.idMeal)) {
            dispatch(removeRecipe(recipe))
        } else {
            dispatch(saveRecipe(recipe))
        }
    }
    
    return (
        <div>

            <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ' >
                { !detail ? '' : detail.map((curItem) => {
                    return (

                        <div className='bg-[#F4F6FF] h-85 w-60 rounded-lg drop-shadow-lg text-center'  >
                            <img className='rounded-t-lg' src={curItem.strMealThumb} alt = {`${curItem.strMeal} image`} />
                            <div className=' '>
                            <h2 className='font-bold mt-3' >{curItem.strMeal}</h2>
                            <div className=' mt-2 gap-3 flex justify-center' >
                                <NavLink to={`/${curItem.idMeal}`}>
                            <button className='bg-[#F3C623] h-8 w-13 rounded-lg ' >Recipe</button>
                                </NavLink>
                            <button className='bg-[#F3C623] h-8 w-13 rounded-lg ' onClick={ () => handleSave(curItem)} >{ isSaved(curItem.idMeal) ? 'Saved' : 'Save' }</button>
                            </div>

                            </div>


                        </div>

                    )
                }) }
            </div>

        </div>
    )
}

export default Mealcard
