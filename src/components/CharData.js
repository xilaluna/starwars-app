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
    <React.Fragment>
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
      <div class="bg-white rounded p-5">
        <h2 class="text-2xl text-center pb-3">Home World</h2>
        <p>name: {char.homeworld.name}</p>
        <p>rotation_period: {char.homeworld.rotation_period}</p>
        <p>orbital_period: {char.homeworld.orbital_period}</p>
        <p>diameter: {char.homeworld.diameter}</p>
        <p>climate: {char.homeworld.climate}</p>
        <p>gravity: {char.homeworld.gravity}</p>
        <p>terrain: {char.homeworld.terrain}</p>
        <p>surface_water: {char.homeworld.surface_water}</p>
        <p>population: {char.homeworld.population}</p>
      </div>
      <div class="bg-white rounded p-5">
        <h2 class="text-2xl text-center pb-1">Films Appeared In</h2>
        {char.films.map(({ data }) => {
          return (
            <div class="border-b py-2">
              <p>title: {data.title}</p>
              <p>episode_id: {data.episode_id}</p>
              <p>director: {data.director}</p>
              <p>producer: {data.producer}</p>
              <p>release_date: {data.release_date}</p>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default CharData
