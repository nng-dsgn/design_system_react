import "./App.css";
import "./ui-kit/atoms/icon/font-icons.css";
import Subtitle from "./ui-kit/atoms/text/subtitle";



// Componente Header
function App() {
  return (
    <>
      <h1>Design System React</h1>
      <Subtitle>¡Bienvenido al Design System React!</Subtitle>
      <i className="cb-icons-checkmark-circle"></i>
      <Subtitle size="xs">Subtítulo pequeño</Subtitle>
      <Subtitle size="md">Subtítulo mediano</Subtitle>
      <Subtitle size="lg">Subtítulo grande</Subtitle>
    </>
  );
}

export default App;
