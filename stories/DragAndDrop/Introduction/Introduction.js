import React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Heading from 'wix-style-react/Heading';
import Badge from 'wix-style-react/Badge';

import Introduction from './Introduction.md';
import IntroductionExample from './IntroductionExample';
import IntroductionExampleRaw from '!raw-loader!./IntroductionExample';
import IntroductionExampleScssRaw from '!raw-loader!./IntroductionExample.scss';

const IntroductionExampleRawCombined = `
//IntroductionExample.js
${IntroductionExampleRaw}

//IntroductionExample.scss
${IntroductionExampleScssRaw}
`;

export default () => (
  <div>
    <Heading>
      Introduction <Badge skin="danger">Under development</Badge>
    </Heading>
    <Markdown source={Introduction}/>
    <CodeExample title="Sortable List - Single Area" code={IntroductionExampleRawCombined}>
      <IntroductionExample/>
    </CodeExample>
  </div>
);
