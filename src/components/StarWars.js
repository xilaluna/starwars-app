import React, { useState } from "react"

import { getChar } from "../redux/slices/charSlice"
import { useDispatch } from "react-redux"

const StarWars = () => {
  const [charNum, setCharNum] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getChar(charNum))
  }
  return (
    <div class="bg-white flex flex-col justify-center items-center col-span-2 p-10 rounded">
      <h1 class="font-bold text-2xl pb-5">Star Wars Character Pick</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mr-4"
          placeholder="Enter Number"
          value={charNum}
          onChange={(e) => {
            setCharNum(e.target.value)
          }}
        />

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default StarWars
