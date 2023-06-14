/* eslint-disable no-fallthrough */
import { createSlice } from "@reduxjs/toolkit";
const initial_State={
    FavoriteMovieCounter:0,
    FavoriteMovieArray:[],
    isClicked:false,
    value:0,
}
const FavoriteMovie=createSlice({
name:"FavoriteMovie",
initialState:initial_State,
reducers:{
    incearmentFavoriteMovie:(state,action)=>{
        state.FavoriteMovieCounter=state.FavoriteMovieCounter+1
        state.isClicked=true;
        state.value=action.payload;
    }
}
})
export const{incearmentFavoriteMovie}=FavoriteMovie.actions;
export default FavoriteMovie.reducer;
