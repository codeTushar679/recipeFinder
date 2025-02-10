import { configureStore } from '@reduxjs/toolkit'
import  savedRecipesReducer  from './slice.js'

export const store = configureStore({
  reducer: {
    savedRecipes : savedRecipesReducer,
  },
})