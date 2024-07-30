import {configureStore} from '@reduxjs/toolkit'
import MenReducer from './createSlice/Men'
import WomenReducer from './createSlice/Women'
import GenralReducer from './createSlice/Genral'
import cartSliceReducer from './createSlice/cart.Slice'
const store=configureStore({
    reducer:{
        MensCloth:MenReducer,
        WomensCloth:WomenReducer,
        Genral:GenralReducer,
        cartSlice:cartSliceReducer

    }
})
export default store;