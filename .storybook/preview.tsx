import type { Preview } from "@storybook/react-vite";
import "~/index.css";
import "~/App.css";
import i18nInstance from "../src/i18n";
import { WeatherProvider } from "~/contexts/WeatherContext";

const i18n = i18nInstance.cloneInstance({
  react: {
    useSuspense: false,
  },
});

const preview: Preview = {
  parameters: {
    i18n,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <WeatherProvider>
        <Story />
      </WeatherProvider>
    ),
  ],
};

export default preview;
