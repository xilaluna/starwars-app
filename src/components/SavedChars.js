import React from "react"
import { useSelector } from "react-redux"

const SavedChars = () => {
  const { savedChars } = useSelector((state) => state.savedChars)
  return (
    <div class="relative overflow-x-auto rounded">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Height
            </th>
            <th scope="col" class="px-6 py-3">
              Mass
            </th>
            <th scope="col" class="px-6 py-3">
              Hair Color
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {savedChars.map((obj) => {
            const { name, height, mass, hair_color } = obj
            return (
              <tr class="bg-white border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  {name}
                </th>
                <td class="px-6 py-4">{height}</td>
                <td class="px-6 py-4">{mass}</td>
                <td class="px-6 py-4">{hair_color}</td>
                <td class="px-6 py-4 text-right">
                  <button
                    href="#"
                    class="font-medium text-blue-600  hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SavedChars
