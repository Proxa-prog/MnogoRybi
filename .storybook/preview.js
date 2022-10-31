import React from 'react';
import { addDecorator } from '@storybook/react';
import StyleDecorator from '../src/shared/config/storybook/StyleDecorator/StyleDecorator';
// import '../src/global.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator(story => <StyleDecorator>{story()}</StyleDecorator>)

// export const decorators = [
//   (Story) => (
//     <div style={{ margin: '3em' }}>
//       <Story />
//     </div>
//   ),
// ];

