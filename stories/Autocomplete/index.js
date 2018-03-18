import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import {OptionExample, DividerExample} from './Options';

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
        <h1>Creating Options</h1>
        <CodeExample title="Empty option">
          <OptionExample/>
        </CodeExample>
        <CodeExample title="Option with Id">
          <OptionExample option={{id: 5}}/>
        </CodeExample>
        <CodeExample title="Option with value">
          <OptionExample option={{value: 'Value1'}}/>
        </CodeExample>
        <CodeExample title="Disabled Option">
          <OptionExample option={{isDisabled: true}}/>
        </CodeExample>
        <CodeExample title="Non Selectable Option">
          <OptionExample option={{isSelectable: false}}/>
        </CodeExample>
        <CodeExample title="Custom option">
          <OptionExample option={{value: 'Value1', render: val => `Custom ${val}`}}/>
        </CodeExample>
        <CodeExample title="Default divider">
          <DividerExample/>
        </CodeExample>
        <CodeExample title="Divider with Value">
          <DividerExample value="Divider"/>
        </CodeExample>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </TabbedView>
  );
