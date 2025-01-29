import "../src/ui-kit/tokens/primitives.css";
import "../src/ui-kit/tokens/my-company-brand.css";
import "../src/index.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
