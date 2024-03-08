import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "udayTodos",
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("Action:", action);
      state.data.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.data.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.data[index] = updatedTodo;
      }
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    clearAllTodos: (state, action) => {
      state.data = [];
    },
  },
});

export const { addTodo, editTodo, removeTodo, clearAllTodos } =
  todoSlice.actions;

export default todoSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "udayTodos",
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       console.log("Action:", action);
//       state.data.push(action.payload);
//     },
//     editTodo: (state, action) => {
//       state.data = state.data({ currentlyEditingHobby });
//     },
//     removeTodo: (state, action) => {
//       state.data = state.data.filter((item) => item.id !== action.payload);
//     },
//     clearAllTodos: (state, action) => {},
//   },
// });

// export const { addTodo, editTodo, removeTodo, clearAllTodos } =
//   todoSlice.actions;

// export default todoSlice.reducer;
