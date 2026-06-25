function MascotasCard({ nombre, raza, edad, especie, descripcion, caracteristicas, adopcionUrgente }) {
  const especieClass = `especie-${especie.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <article className={`mascota-card ${especieClass}`}>
      <header className="mascota-header">
        <div>
          <h2>{nombre}</h2>
          <span className="especie-label">{especie}</span>
        </div>
        {adopcionUrgente && <span className="urgente-badge">Adopción urgente</span>}
      </header>

      <div className="mascota-meta">
        <span><strong>Raza:</strong> {raza}</span>
        <span><strong>Edad:</strong> {edad} año{edad === 1 ? '' : 's'}</span>
      </div>

      <p className="mascota-descripcion">{descripcion}</p>

      <ul className="mascota-caracteristicas">
        {caracteristicas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default MascotasCard
