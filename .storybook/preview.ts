import type { Preview } from '@storybook/react';
import { globalDecorator } from './decorator';

const preview: Preview = {
  decorators: globalDecorator,
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  tags: ['autodocs']
};

export default preview;
