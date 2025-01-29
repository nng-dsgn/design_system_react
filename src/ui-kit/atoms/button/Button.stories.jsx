import Button from ".";
import { action } from "@storybook/addon-actions";

export default {
    title: "Atoms/Text/Button",
    component: Button,
    args: {
      size: "Button",
      children: "Example Button",
      onClick: action('button-click') 
    },
    argTypes: {
      size: {
        control: { type: "select" },
        options: ["No Value", "xs", "md", "lg"], 
        mapping: { ["No Value"]: undefined },
        backgroundColor: { control: 'color' },
      },
    },
    parameters: {
      layout: 'centered',
    },
    tags: ["autodocs"],
  };


  export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Secondary = {
    args: {
      label: 'Button',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };
  
  export const Story = {
    args:{
      primary:false,
      label:"Button"
    }
  };
  
  export const Sizes = {
    args: {},
  };
  export const MyButton = () => (
    <button onClick={action('button-click')}>Click me</button>
  );

  export const FigmaDemo = {
    render: () => (
      <>
        <Button size="xs">Título de Página Pequeño</Button>
        <Button size="md">Título de Página Mediano</Button>
        <Button size="lg">Título de Página Grande</Button>
      </>
    ),
  };


