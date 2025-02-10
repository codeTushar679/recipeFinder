import { createSlice } from '@reduxjs/toolkit'


const saveState = (state) => {
  const serializedState = JSON.stringify(state)
  return localStorage.setItem('savedRecipes', serializedState)
}

const loadState = () => {
  const serializedState = localStorage.getItem('savedRecipes');
  return serializedState ? JSON.parse(serializedState) : [];
};



 const savedRecipesSlice = createSlice({
  name: 'savedRecipes',
  initialState : loadState(),
  reducers: {
    saveRecipe : (state, action) => {
      state.push(action.payload)
      saveState(state)
    },
    removeRecipe : (state, action) => {
      const newState = state.filter(recipe => recipe.idMeal !== action.payload.idMeal)
      saveState(newState)
      return newState
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveRecipe, removeRecipe } = savedRecipesSlice.actions

export default savedRecipesSlice.reducer