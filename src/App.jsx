import "./App.css";
import "./ui-kit/atoms/icon/font-icons.css";
import Subtitle from "./ui-kit/atoms/text/subtitle";
import PageTitle from "./ui-kit/atoms/text/page-title";
import Body from "./ui-kit/atoms/text/body";



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
      <PageTitle size="xs">Título de Página Pequeño</PageTitle>
      <PageTitle size="md">Título de Página Mediano</PageTitle>
      <PageTitle size="lg">Título de Página Grande</PageTitle>

      <Body size="xs">Texto pequeño del cuerpo</Body>
      <Body size="sm">Texto mediano del cuerpo</Body>
      <Body size="lg">Texto grande del cuerpo</Body>
    </>
  );
}

export default App;
