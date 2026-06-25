import './App.css'
import { useState } from 'react'
import { mascotas } from './data/mascotas.js'
import ListaMascotas from './components/ListaMascotas.jsx'
import FiltroEspecie from './components/FiltroEspecie.jsx'

function App() {
  const [especieSeleccionada, setEspecieSeleccionada] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const filtroNormalizado = busqueda.trim().toLowerCase()

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      especieSeleccionada === 'Todas' || mascota.especie.toLowerCase() === especieSeleccionada.toLowerCase()

    const nombreNormalizado = mascota.nombre.trim().toLowerCase()
    const coincideBusqueda = nombreNormalizado.includes(filtroNormalizado)

    return coincideEspecie && coincideBusqueda
  })

  return (
    <main className="App">
      <header>
        <h1>Refugio de Animales</h1>
        <p>Lista de mascotas disponibles para adopción.</p>
      </header>

      <FiltroEspecie
        especieSeleccionada={especieSeleccionada}
        onEspecieChange={setEspecieSeleccionada}
        busqueda={busqueda}
        onBusquedaChange={setBusqueda}
      />

      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <div className="sin-resultados">No hay mascotas que coincidan</div>
      )}
    </main>
  )
}

export default App
