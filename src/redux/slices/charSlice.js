import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getChar = createAsyncThunk("char/getChar", async (charNum) => {
  const response = await axios.get(`https://swapi.dev/api/people/${charNum}/`)

  const planetResponse = await axios.get(response.data.homeworld)
  response.data.homeworld = planetResponse.data

  const filmsRes = await Promise.all(
    response.data.films.map((film) => axios.get(film))
  )
  response.data.films = filmsRes

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
