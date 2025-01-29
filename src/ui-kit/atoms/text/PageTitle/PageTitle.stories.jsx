import PageTitle from ".";

export default {
    title: "Atoms/Text/PageTitle",
    component: PageTitle,
    args: {
      size: "PageTitle",
      children: "Example PageTitle",
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
        <PageTitle size="xs">Título de Página Pequeño</PageTitle>
        <PageTitle size="md">Título de Página Mediano</PageTitle>
        <PageTitle size="lg">Título de Página Grande</PageTitle>
      </>
    ),
  };