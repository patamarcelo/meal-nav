import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import favoritesReducer from "./favorites";

const reducer = combineReducers({
	favoriteMeals: favoritesReducer
});
export const store = configureStore({
	reducer
});
