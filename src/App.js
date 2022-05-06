import Home from "./components/Home"
import StarWars from "./components/StarWars"

function App() {
  return (
    <div className="App" class="container mx-auto max-w-4xl ">
      <Home />
      <div class="grid grid-cols-2 gap-4 place-items-center">
        <StarWars />

        <div class="bg-white rounded">01</div>
        <div class="bg-white rounded">01</div>
      </div>
    </div>
  )
}

export default App
