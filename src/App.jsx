import './App.css'
import { mascotas } from './data/mascotas.js'
import ListaMascotas from './components/ListaMascotas.jsx'

function App() {
  return (
    <main className="App">
      <header>
        <h1>Refugio de Animales</h1>
        <p>Lista de mascotas disponibles para adopción.</p>
      </header>

      <ListaMascotas mascotas={mascotas} />
    </main>
  )
}

export default App
