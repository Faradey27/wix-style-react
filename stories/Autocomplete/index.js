import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

storiesOf('4. Selection', module)
  .add('4.1 + Autocomplete', () =>
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown/>
        <h1>Usage examples</h1>
        <CodeExample title="Standard" code={ExampleStandardRaw}>
          <ExampleStandard/>
        </CodeExample>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </TabbedView>
  );

