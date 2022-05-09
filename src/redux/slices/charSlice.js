import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getChar = createAsyncThunk("char/getChar", async (charNum) => {
  const response = await axios.get(`https://swapi.dev/api/people/${charNum}/`)
  return response.data
})

export const charSlice = createSlice({
  name: "char",
  initialState: {
    char: {},
    status: "pending",
  },
  extraReducers: {
    [getChar.pending]: (state) => {
      state.status = "pending"
    },
    [getChar.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.char = action.payload
    },
    [getChar.rejected]: (state) => {
      state.status = "rejected"
    },
  },
})

export default charSlice.reducer
