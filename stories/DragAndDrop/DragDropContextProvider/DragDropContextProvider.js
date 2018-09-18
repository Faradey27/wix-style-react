import React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Heading from 'wix-style-react/Heading';
import Badge from 'wix-style-react/Badge';

import DragDropContextProvider from './DragDropContextProvider.md';
import DragDropContextProviderExample from './DragDropContextProviderExample';
import DragDropContextProviderExampleRaw from '!raw-loader!./DragDropContextProviderExample';
import DragDropContextProviderExampleScssRaw from '!raw-loader!./DragDropContextProviderExample.scss';

const DragDropContextProviderExampleRawCombined = `
//DragDropContextProviderExample.js
${DragDropContextProviderExampleRaw}

//DragDropContextProviderExample.scss
${DragDropContextProviderExampleScssRaw}
`;

export default () => (
  <div>
    <Heading>
      DragDropContextProvider <Badge skin="danger">Under development</Badge>
    </Heading>
    <Markdown source={DragDropContextProvider}/>
    <CodeExample title="Sortable List - Single Area" code={DragDropContextProviderExampleRawCombined}>
      <DragDropContextProviderExample/>
    </CodeExample>
  </div>
);
