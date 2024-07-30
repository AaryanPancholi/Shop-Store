import { createSlice } from "@reduxjs/toolkit"
const initialState={
    value:[],
    itemCount:1
}

const cartSlice=createSlice({
    initialState,
    name:'cartSlice',
    reducers:{
        setCartSlice:(state,action)=>{
            state.value=action.payload
        },
        increaseCount:(state,action)=>{  
            const item=state.value.findIndex((item)=>item.name===action.payload) 
            if(item!==-1){    
            state.itemCount+=1}

        },
        decreaseCount:(state)=>{
            const item=state.value.findIndex((item)=>item.name===action.payload)
            if (item!==-1){
                     
            state.itemCount-=1
            }
        },
        addProduct:(state,action)=>{
           
          const existingItem=state.value.find((item)=>item.name===action.payload[0]?.name)
         
            if(!existingItem){
                state.value=[...state.value,...action.payload]}
                else{
                    existingItem.quantity+=1
                }
        
        }
       
}
})
export default cartSlice.reducer;
export const  {setCartSlice,increaseCount,decreaseCount,addProduct}=cartSlice.actions