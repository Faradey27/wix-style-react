import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {mount} from 'enzyme';

import TestBackend from '../DragDropContextProvider/TestBackend';
import DragDropContextProvider from '../DragDropContextProvider';

import {sortableListTestkitFactory} from '../../testkit';
import {sortableListTestkitFactory as enzymeSortableListTestkitFactory} from '../../testkit/enzyme';

import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import privateSortableListDriver from './SortableList.driver';

import SortableList from './SortableList';

describe('SortableList', () => {
  const createPrivateDriver = createDriverFactory(privateSortableListDriver);

  it('should exists', () => {
    const dataHook = 'sortable-list';
    const items = [{id: '1', text: 'item 1'}, {id: '2', text: 'item 2'}];
    const onDrop = jest.fn();
    const renderItem = ({item}) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <SortableList
          contentClassName="cl"
          dataHook={dataHook}
          containerId="sortable-list"
          items={items}
          renderItem={renderItem}
          onDrop={onDrop}
          />
      </DragDropContextProvider>
    );
    const driver = sortableListTestkitFactory({wrapper, dataHook});
    expect(driver.exists()).toBeTruthy();
  });

  it.skip('should call onDragStart and onDragEnd', () => {

    const dataHook = 'sortable-list';
    const items = [{id: '1', text: 'item 1'}, {id: '2', text: 'item 2'}];
    const onDrop = jest.fn();
    const onDragStart = jest.fn();
    const onDragEnd = jest.fn();
    const renderItem = ({item}) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const privateDriver = createPrivateDriver(
      <DragDropContextProvider backend={TestBackend}>
        <SortableList
          contentClassName="cl"
          dataHook={dataHook}
          containerId="sortable-list"
          items={items}
          renderItem={renderItem}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          />
      </DragDropContextProvider>
    );

    privateDriver.beginDrag('1');
    privateDriver.endDrag();

    expect(onDragStart).toBeCalled();
    expect(onDragEnd).toBeCalled();
    expect(onDrop).not.toBeCalled();
  });

  it('should call onDrop', () => {
    const dataHook = 'sortable-list';
    const items = [{id: '1', text: 'item 1'}, {id: '2', text: 'item 2'}];
    const onDrop = jest.fn();
    const onDragStart = jest.fn();
    const onDragEnd = jest.fn();
    const renderItem = ({item}) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <SortableList
          contentClassName="cl"
          dataHook={dataHook}
          containerId="sortable-list"
          items={items}
          renderItem={renderItem}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          />
      </DragDropContextProvider>
    );
    const driver = sortableListTestkitFactory({wrapper, dataHook});

    driver.reorder({removedId: '1', addedId: '2'});

    expect(onDrop).toBeCalledWith({
      addedIndex: 1,
      addedToContainerId: 'sortable-list',
      payload: {id: '1', text: 'item 1'},
      removedFromContainerId: 'sortable-list',
      removedIndex: 0
    });
  });
});

describe('Enzyme: SortableList', () => {
  it('should call onDrop', () => {
    const dataHook = 'sortable-list';
    const items = [{id: '1', text: 'item 1'}, {id: '2', text: 'item 2'}];
    const onDrop = jest.fn();
    const onDragStart = jest.fn();
    const onDragEnd = jest.fn();
    const renderItem = ({item}) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = mount(
      <DragDropContextProvider backend={TestBackend}>
        <SortableList
          contentClassName="cl"
          dataHook={dataHook}
          containerId="sortable-list"
          items={items}
          renderItem={renderItem}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          />
      </DragDropContextProvider>
    );
    const driver = enzymeSortableListTestkitFactory({wrapper, dataHook});

    driver.reorder({removedId: '1', addedId: '2'});

    expect(onDrop).toBeCalledWith({
      addedIndex: 1,
      addedToContainerId: 'sortable-list',
      payload: {id: '1', text: 'item 1'},
      removedFromContainerId: 'sortable-list',
      removedIndex: 0
    });
  });
});
