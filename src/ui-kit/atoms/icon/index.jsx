import PropTypes from 'prop-types';
import "./font-icons.css"; // Asegúrate de que este archivo sea el correcto y esté bien cargado

const Icon = ({ name }) => {
  return <span className={`cb-icons-${name}`} />;  // Cambio a cb-icons- en lugar de cb-icon-
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
