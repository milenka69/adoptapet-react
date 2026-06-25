import { mascotas } from './data/mascotas.js'

function App() {
  return (
    <main className="App">
      <header>
        <h1>Refugio de Animales</h1>
        <p>Lista de mascotas disponibles para adopción.</p>
      </header>

      <section className="mascotas-list">
        {mascotas.map((mascota) => (
          <article
            key={mascota.id}
            className={`mascota-card ${mascota.adopcionUrgente ? 'urgente' : ''}`}
          >
            <h2>{mascota.nombre}</h2>
            <p><strong>Especie:</strong> {mascota.especie}</p>
            <p><strong>Raza:</strong> {mascota.raza}</p>
            <p><strong>Edad:</strong> {mascota.edad} año{mascota.edad === 1 ? '' : 's'}</p>
            <p>{mascota.descripcion}</p>
            {mascota.adopcionUrgente && (
              <span className="urgente-badge">Adopción urgente</span>
            )}
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
