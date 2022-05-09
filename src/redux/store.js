import { configureStore } from "@reduxjs/toolkit"
import charReducer from "./slices/charSlice"
import savedCharsSlice from "./slices/savedCharsSlice"

export const store = configureStore({
  reducer: { char: charReducer, savedChars: savedCharsSlice },
})
