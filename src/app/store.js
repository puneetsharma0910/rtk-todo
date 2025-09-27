import { configureStore } from '@reduxjs/toolkit'

import todoReducer from "../features/todos/todo"

export  const store = configureStore({
    reducer : {todoReducer}
})