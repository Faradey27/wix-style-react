import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Button from 'wix-style-react/Button';

import ExampleDisabledButtonWithTooltip from './ExampleDisabledButtonWithTooltip';
import ExampleDisabledButtonWithTooltipRaw from '!raw-loader!./ExampleDisabledButtonWithTooltip';

import * as Icons from 'wix-style-react/Icons';

const icons = Object.values(Icons).map(icon => React.createElement(icon));

export default {
  category: '5. Buttons',
  storyName: '5.1 Standard',
  component: Button,
  componentPath: '../../src/Backoffice/Button',

  componentProps: {
    theme: 'fullblue',
    children: 'Click Me',
    dataHook: 'storybook-button'
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    prefixIcon: icons,
    suffixIcon: icons
  },

  examples: (
    <CodeExample title="Disabled button with tooltip" code={ExampleDisabledButtonWithTooltipRaw}>
      <ExampleDisabledButtonWithTooltip/>
    </CodeExample>
  )
};
