import ReactTestUtils from 'react-dom/test-utils';

import DragDropContextProvider from '../DragDropContextProvider';
import DraggableSource from '../DragAndDrop/Draggable/components/DraggableSource';
import DraggableTarget from '../DragAndDrop/Draggable/components/DraggableTarget';

export const getInstanceOfDraggableProvider = wrapper => ReactTestUtils.findAllInRenderedTree(wrapper, ins => {
  return ins instanceof DragDropContextProvider;
})[0];

export const getInstanceOfDraggableSource = (wrapper, itemId) => ReactTestUtils.findAllInRenderedTree(wrapper, ins => {
  return ins instanceof DraggableSource && ins.props.id === itemId;
})[0];

export const getInstanceOfDraggableTarget = (wrapper, itemId) => ReactTestUtils.findAllInRenderedTree(wrapper, ins => {
  return ins instanceof DraggableTarget && ins.props.id === itemId;
})[0];
