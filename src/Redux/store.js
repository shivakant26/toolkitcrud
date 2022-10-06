import { configureStore } from "@reduxjs/toolkit";
import crudReducer from './userSlice';

const store = configureStore({
    reducer:{
        user : crudReducer
    }
})

export default store;