import PropTypes from 'prop-types';
import "./style.css";

// Definimos el componente PageTitle con el parámetro `size` con valor por defecto
const PageTitle = ({ children, size = 'lg' }) => {
  if (size === "xs") {
    // Si el título es pequeño lo tratamos como un h1
    return <h1 className="cb-page-title cb-page-title--xs">{children}</h1>;
  }

  if (size === "md") {
    // Si el título es mediano lo tratamos como un h1
    return <h1 className="cb-page-title cb-page-title--md">{children}</h1>;
  }

  // Por defecto lo tratamos como lg
  return <h1 className="cb-page-title cb-page-title--lg">{children}</h1>;
};

// Definimos la estructura que va a tener las props del componente
PageTitle.propTypes = {
  children: PropTypes.node.isRequired, // Acepta cualquier nodo, incluyendo texto
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // No es requerido
};

export default PageTitle;
