import React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Heading from 'wix-style-react/Heading';
import Badge from 'wix-style-react/Badge';

import Styles from './Styles.md';
import StylesExample from './StylesExample';
import StylesExampleRaw from '!raw-loader!./StylesExample';
import StylesExampleScssRaw from '!raw-loader!./StylesExample.scss';

const StylesExampleRawCombined = `
//StylesExample.js
${StylesExampleRaw}

//StylesExample.scss
${StylesExampleScssRaw}
`;

export default () => (
  <div>
    <Heading>
      Styles <Badge skin="danger">Under development</Badge>
    </Heading>
    <Markdown source={Styles}/>
    <CodeExample title="Sortable List - Single Area" code={StylesExampleRawCombined}>
      <StylesExample/>
    </CodeExample>
  </div>
);
