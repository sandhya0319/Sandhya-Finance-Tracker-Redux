import { createSlice } from "@reduxjs/toolkit";
import { DefaultJSON } from '../../utils/constants';

      
 export const transactionsSlice=createSlice({
  name:"transaction",
  initialState:{value:DefaultJSON},
  reducers:{
    addTransaction:(state,action)=>{
      const settransactions=[action.payload,...state.value];
      state.value=settransactions;
      
    },

  }
 })
export const {addTransaction}=transactionsSlice.actions
export default transactionsSlice.reducer;