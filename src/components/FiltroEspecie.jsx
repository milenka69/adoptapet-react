import PropTypes from 'prop-types'

function FiltroEspecie({ especieSeleccionada, onEspecieChange, busqueda, onBusquedaChange }) {
  const opciones = ['Todas', 'Perro', 'Gato', 'Otro']

  return (
    <section className="filtro-especie">
      <div className="filtro-botones">
        {opciones.map((opcion) => (
          <button
            key={opcion}
            type="button"
            className={opcion === especieSeleccionada ? 'activo' : ''}
            onClick={() => onEspecieChange(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>

      <label className="filtro-busqueda">
        Buscar por nombre:
        <input
          type="text"
          value={busqueda}
          onChange={(event) => onBusquedaChange(event.target.value)}
          placeholder="Busca una mascota"
        />
      </label>
    </section>
  )
}

FiltroEspecie.propTypes = {
  especieSeleccionada: PropTypes.string.isRequired,
  onEspecieChange: PropTypes.func.isRequired,
  busqueda: PropTypes.string.isRequired,
  onBusquedaChange: PropTypes.func.isRequired,
}

export default FiltroEspecie
