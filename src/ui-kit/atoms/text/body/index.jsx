import PropTypes from 'prop-types';
import "./style.css";

// Definimos el componente Body con el parámetro `size` con valor por defecto
const Body = ({ children, size = 'md' }) => {
  if (size === "xs") {
    // Si el texto es pequeño lo tratamos como un párrafo de tamaño pequeño
    return <p className="cb-body cb-body--xs">{children}</p>;
  }

  if (size === "sm") {
    // Si el texto es pequeño lo tratamos como un párrafo de tamaño mediano
    return <p className="cb-body cb-body--sm">{children}</p>;
  }

  if (size === "lg") {
    // Si el texto es grande lo tratamos como un párrafo grande
    return <p className="cb-body cb-body--lg">{children}</p>;
  }

  // Por defecto lo tratamos como md
  return <p className="cb-body cb-body--md">{children}</p>;
};

// Definimos la estructura que va a tener las props del componente
Body.propTypes = {
  children: PropTypes.node.isRequired, // Acepta cualquier nodo, incluyendo texto
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // No es requerido
};

export default Body;
