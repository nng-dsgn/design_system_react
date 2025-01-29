import Body from ".";

export default {
    title: "Atoms/Text/Body",
    component: Body,
    args: {
      size: "Body",
      children: "Example Body",
    },
    argTypes: {
      size: {
        control: { type: "select" },
        options: ["No Value", "xs", "md", "lg"], 
        mapping: { ["No Value"]: undefined },
      },
    },
    tags: ["autodocs"],
  };
  
  export const Sizes = {
    args: {},
  };

  export const FigmaDemo = {
    render: () => (
      <>
        <Body size="xs">Texto pequeño del cuerpo</Body>
        <Body size="sm">Texto mediano del cuerpo</Body>
        <Body size="lg">Texto grande del cuerpo</Body>
      </>
    ),
  };