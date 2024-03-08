import { configureStore } from "@reduxjs/toolkit";
import sumitCounter from "../pages/Calculator/Calculator.Slice";
import raviTodos from "../pages/Todos/todos.slice";

const store = configureStore({
  reducer: {
    calculator: sumitCounter,
    raviTodos,
  },
});

export default store;
