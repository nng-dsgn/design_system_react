import PropTypes from 'prop-types';
import "./style.css";

// Definimos el componente Subtitle con el parámetro `size` con valor por defecto
const Subtitle = ({ children, size = 'lg' }) => {
  if (size === "xs") {
    // Si el subtítulo es pequeño lo definimos como un h4
    return <h4 className="cb-subtitle cb-subtitle--xs">{children}</h4>;
  }

  if (size === "md") {
    // Si el subtítulo es mediano lo definimos como un h3
    return <h3 className="cb-subtitle cb-subtitle--md">{children}</h3>;
  }

  // Por defecto lo tratamos como lg
  return <h2 className="cb-subtitle cb-subtitle--lg">{children}</h2>;
};

// Definimos la estructura que va a tener las props del componente
Subtitle.propTypes = {
    children: PropTypes.node.isRequired, // Acepta cualquier nodo, incluyendo texto
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // No es requerido
  };

export default Subtitle;