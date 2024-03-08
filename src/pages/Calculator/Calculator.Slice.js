import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calcuator",
  initialState: {
    result: 10,
  },
  reducers: {
    add: (state, action) => {
      console.log("Add", { state, action });
      state.result = state.result + action.payload;
    },
    subtract: (state, action) => {
      console.log("subtract", { state, action });
      state.result = state.result - action.payload;
    },
    multiply: (state, action) => {
      console.log("multiply", { state, action });
      state.result = state.result * action.payload;
    },
    divide: (state, action) => {
      console.log("divide", { state, action });
      state.result = state.result / action.payload;
    },
  },
});

console.log("Slice: ", calculatorSlice);
export const { add, subtract, multiply, divide } = calculatorSlice.actions;
export default calculatorSlice.reducer;
