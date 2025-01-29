import Subtitle from ".";

export default {
    title: "Atoms/Text/Subtitle",
    component: Subtitle,
    args: {
      size: "md",
      children: "Example subtitle",
    },
    argTypes: {
      size: {
        // definimos la estructura del argumento "size"
        control: { type: "select" }, // indicando que su control de SB es un select
        options: ["No Value", "xs", "md", "lg"], // indicando las opciones disponibles, que incluye no meter opción "No Value"
        mapping: { ["No Value"]: undefined }, // Tenemos que decir a Storybook que si seleccionamos "No Value", el valor real en el componente debe ser undefined
      },
    },
    tags: ["autodocs"], // esto leera nuestros controles y los comentarios del archivo del componente y genera una página
  };
  
  export const Sizes = {
    args: {},
  };

  export const FigmaDemo = {
    render: () => (
      // añadimos la propiedad render, que no deja de ser una función que devuelva JSX, como un componente normal de react
      <>
        <Subtitle size="xs">Subtítulo pequeño</Subtitle>
        <Subtitle size="md">Subtítulo mediano</Subtitle>
        <Subtitle size="lg">Subtítulo grande</Subtitle>
      </>
    ),
  };