import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from './slices/transactionsSilce'

export const store=configureStore({
    reducer:{
        transaction:transactionReducer,
    },
})