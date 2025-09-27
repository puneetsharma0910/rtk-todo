import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
         id: 1,
    msg: "hi there"
    }
  ]
};

const todoSlice = createSlice({
  name: "todos",
   initialState,
  reducers: {
    addTodo: (state, action) => {
   const    todo = {
        id: nanoid(),
        msg: action.payload.text,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
    },
  },
}
)

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
