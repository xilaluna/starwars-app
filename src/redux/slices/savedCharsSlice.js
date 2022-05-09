import { createSlice } from "@reduxjs/toolkit"

export const savedCharsSlice = createSlice({
  name: "savedChars",
  initialState: {
    savedChars: [],
  },
  reducers: {
    addChar: (state, action) => {
      state.savedChars.push(action.payload)
    },
  },
})

export const { addChar } = savedCharsSlice.actions

export default savedCharsSlice.reducer
