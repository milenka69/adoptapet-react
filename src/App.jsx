import './App.css'
import { mascotas } from './data/mascotas.js'
import MascotasCard from './components/MascotasCard.jsx'

function App() {
  return (
    <main className="App">
      <header>
        <h1>Refugio de Animales</h1>
        <p>Lista de mascotas disponibles para adopción.</p>
      </header>

      <section className="mascotas-list">
        {mascotas.map((mascota) => (
          <MascotasCard
            key={mascota.id}
            nombre={mascota.nombre}
            raza={mascota.raza}
            edad={mascota.edad}
            especie={mascota.especie}
            descripcion={mascota.descripcion}
            caracteristicas={mascota.caracteristicas}
            adopcionUrgente={mascota.adopcionUrgente}
          />
        ))}
      </section>
    </main>
  )
}

export default App
