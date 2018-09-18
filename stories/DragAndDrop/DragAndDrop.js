import React from 'react';
import {storiesOf} from '@storybook/react';

import Heading from 'wix-style-react/Heading';
import Badge from 'wix-style-react/Badge';

import SortableListReadme from './../../src/SortableList/README.md';
import SortableListReadmeAPI from './../../src/SortableList/API.md';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import SingleAreaList from './SortableList/SingleAreaList';
import SingleAreaListRaw from '!raw-loader!./SortableList/SingleAreaList';

import MultiAreaList from './SortableList/MultiAreaList';
import MultiAreaListRaw from '!raw-loader!./SortableList/MultiAreaList';

import DraggableMultiAreaList from './SortableList/DraggableMultiAreaList';
import DraggableMultiAreaListRaw from '!raw-loader!./SortableList/DraggableMultiAreaList';

import SingleAreaListScssRaw from '!raw-loader!./SortableList/SingleAreaList.scss';

import MultiAreaListScssRaw from '!raw-loader!./SortableList/MultiAreaList.scss';

import DraggableMultiAreaListScssRaw from '!raw-loader!./SortableList/DraggableMultiAreaList.scss';

import Introduction from './Introduction';
import Styles from './Styles';
import DragDropContextProvider from './DragDropContextProvider';

const SingleAreaListRawCombined = `
//SingleAreaList.js
${SingleAreaListRaw}

//SingleAreaList.scss
${SingleAreaListScssRaw}
`;

const MultiAreaListRawCombined = `
//MultiAreaList.js
${MultiAreaListRaw}

//MultiAreaList.scss
${MultiAreaListScssRaw}
`;

const DraggableMultiAreaListRawCombined = `
//DraggableMultiAreaList.js
${DraggableMultiAreaListRaw}

//DraggableMultiAreaList.scss
${DraggableMultiAreaListScssRaw}
`;

storiesOf('WIP/Drag And Drop', module)
  .add('Introduction', () => <Introduction/>)
  .add('Styles', () => <Styles/>)
  .add('DragDropContextProvider', () => <DragDropContextProvider/>);

storiesOf('WIP/Drag And Drop/SortableList', module)
.add('API', () => (
  <div>
    <Heading>
      SortableList <Badge skin="danger">Under development</Badge>
    </Heading>
    <Markdown source={SortableListReadme}/>
    <CodeExample title="Sortable List - Single Area" code={SingleAreaListRawCombined}>
      <SingleAreaList/>
    </CodeExample>
    <CodeExample title="Sortable List - Multi Area" code={MultiAreaListRawCombined}>
      <MultiAreaList/>
    </CodeExample>
    <CodeExample title="Sortable List - Draggable Multi Area" code={DraggableMultiAreaListRawCombined}>
      <DraggableMultiAreaList/>
    </CodeExample>
    <Markdown source={SortableListReadmeAPI}/>
  </div>
))
.add('Single List', () => (<div/>))
.add('Multi List', () => (<div/>))
.add('Multi List with sortable columns', () => (<div/>));
