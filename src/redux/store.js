import { configureStore } from "@reduxjs/toolkit"
import charReducer from "./slices/charSlice"

export const store = configureStore({
  reducer: { char: charReducer },
})
