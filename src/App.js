import Home from "./components/Home"
import StarWars from "./components/StarWars"
import SavedChars from "./components/SavedChars"
import CharData from "./components/CharData"

import { useSelector } from "react-redux"

function App() {
  const { status } = useSelector((state) => state.char)
  const { savedChars } = useSelector((state) => state.savedChars)

  return (
    <div className="App" class="container mx-auto">
      <Home />
      <div class="flex flex-row gap-4 justify-center items-start">
        <div class="flex flex-col gap-4 ">
          <StarWars />
          {status !== "pending" && <CharData />}
        </div>
        {savedChars.length > 0 && <SavedChars />}
      </div>
    </div>
  )
}

export default App
