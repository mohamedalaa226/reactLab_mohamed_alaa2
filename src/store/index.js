import { configureStore } from "@reduxjs/toolkit";
import FavoriteMovieSlice from "./slices/FavoriteMovieSlice";

export default configureStore({
    reducer:{FavoriteMovieSlice}
})