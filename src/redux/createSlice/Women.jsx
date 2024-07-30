import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:[]
}
const WomenSlice=createSlice({
    name:"WomensCloth",
    initialState,
    reducers:{
        setWomenCloth:(state,action)=>{
            state.value=action.payload

        }
    }

})
export const {setWomenCloth}=WomenSlice.actions
export default WomenSlice.reducer