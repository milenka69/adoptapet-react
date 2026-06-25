import PropTypes from 'prop-types'
import MascotasCard from './MascotasCard.jsx'

function ListaMascotas({ mascotas }) {
  return (
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
  )
}

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      especie: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      caracteristicas: PropTypes.arrayOf(PropTypes.string),
      adopcionUrgente: PropTypes.bool,
    })
  ).isRequired,
}

ListaMascotas.defaultProps = {
  mascotas: [],
}

export default ListaMascotas
