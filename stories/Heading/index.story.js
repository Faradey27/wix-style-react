import React from 'react';
import Heading from 'wix-style-react/Heading';

import CodeExample from 'wix-storybook-utils/CodeExample';

import EllipsisExample from './ExampleEllipsis';
import EllipsisExampleRaw from '!raw-loader!./ExampleEllipsis';

import TypographyExample from './ExampleTypography';
import TypographyExampleRaw from '!raw-loader!./ExampleTypography';

export default {
  category: '1. Foundation',
  storyName: '1.3 Heading',
  component: Heading,
  componentPath: '../../src/Heading/Heading.js',

  componentProps: {
    children: 'Hey there, good looking',
    light: false,
    dataHook: 'storybook-heading',
    appearance: 'H1',
    ellipsis: false
  },

  examples: (
    <div>
      <CodeExample title="Ellipsis Example" code={EllipsisExampleRaw}>
        <EllipsisExample/>
      </CodeExample>

      <CodeExample title="Typography Example" code={TypographyExampleRaw}>
        <TypographyExample/>
      </CodeExample>
    </div>
  )
};
