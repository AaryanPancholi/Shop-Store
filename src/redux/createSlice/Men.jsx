import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:[]
}
const MenSlice=createSlice({
    name:"MensCloth",
    initialState,
    reducers:{
        setMenCloth:(state,action)=>{
            state.value=action.payload

        }
    }

})
export const {setMenCloth}=MenSlice.actions
export default MenSlice.reducer