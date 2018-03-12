import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/AutoComplete/README.md';
import ReadmeTestKit from '../../src/AutoComplete/README.TESTKIT.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

storiesOf('4. Selection', module)
  .add('4.1 + AutoComplete', () =>
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme}/>
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
      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  );
  