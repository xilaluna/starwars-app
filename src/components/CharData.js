import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addChar } from "../redux/slices/savedCharsSlice"

const CharData = () => {
  const { char } = useSelector((state) => state.char)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addChar(char))
  }
  return (
    <div class="bg-white rounded p-5">
      <h2 class="text-2xl text-center pb-3">Character</h2>
      <p>name: {char.name}</p>
      <p>height: {char.height}</p>
      <p>mass: {char.mass}</p>
      <p>hair_color: {char.hair_color}</p>
      <p>skin_color: {char.skin_color}</p>
      <p>eye_color: {char.eye_color}</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4 block w-full"
        onClick={handleClick}
      >
        Save Character
      </button>
    </div>
  )
}

export default CharData
