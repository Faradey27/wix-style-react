import React from 'react';

import Button from 'wix-style-react/Button';
import Tooltip from 'wix-style-react/Tooltip';

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
    <div>
      {
        // we want to show this just for E2E test
        global.self === global.top ? (
          <div data-hook="tooltip-e2e-wrapper">
            <Tooltip
              shouldUpdatePosition
              showImmediately
              appendToParent
              content="Some tooltip"
              >
              <Button
                dataHook="disabled-button"
                disabled
                type="button"
                >
                Hover Me
              </Button>
            </Tooltip>
          </div>
        ) : null
      }
    </div>
  )
};
