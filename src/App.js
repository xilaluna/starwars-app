import Home from "./components/Home"
import StarWars from "./components/StarWars"
import SavedChars from "./components/SavedChars"
import CharData from "./components/CharData"

function App() {
  return (
    <div className="App" class="container mx-auto">
      <Home />
      <div class="flex flex-row gap-4 justify-center items-start">
        <div class="flex flex-col gap-4 ">
          <StarWars />
          <CharData />
        </div>
        <SavedChars />
      </div>
    </div>
  )
}

export default App
