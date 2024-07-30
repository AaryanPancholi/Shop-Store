
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:[]
}
const GenralSlice=createSlice({
    name:"Genral",
    initialState,
    reducers:{
        setGenral:(state,action)=>{
            state.value=action.payload

        }
    }

})
export const {setGenral}=GenralSlice.actions
export default GenralSlice.reducer