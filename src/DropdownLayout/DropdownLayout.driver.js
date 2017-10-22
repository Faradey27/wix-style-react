import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import styles from './DropdownLayout.st.css';
import values from 'lodash/values';
import {isClassExists} from '../../test/utils';
import {hasCssState} from '../stylable-has-css-state';

const dropdownLayoutDriverFactory = ({element, wrapper, component}) => {

  const contentContainer = element.childNodes[0];
  const options = element.querySelector('[data-hook=dropdown-layout-options]');
  const optionAt = position => (options.childNodes[position]);
  const optionsLength = () => options.childNodes.length;
  const doIfOptionExists = (position, onSuccess) => {
    if (optionsLength() <= position) {
      throw `index out of bounds, try to get option ${position} while only ${optionsLength()} options exists`;
    }
    return onSuccess();
  };

  return {
    exists: () => !!element,
    isShown: () => hasCssState(contentContainer, styles, {shown: true}),
    isDown: () => hasCssState(contentContainer, styles, {down: true}),
    isUp: () => hasCssState(contentContainer, styles, {up: true}),
    hasTheme: theme => isClassExists(element, `theme-${theme}`),
    tabIndex: () => element.tabIndex,
    optionsLength: () => optionsLength(),
    mouseEnterAtOption: position => doIfOptionExists(position, () => ReactTestUtils.Simulate.mouseEnter(optionAt(position))),
    mouseLeaveAtOption: position => doIfOptionExists(position, () => ReactTestUtils.Simulate.mouseLeave(optionAt(position))),
    mouseClickOutside: () => ReactTestUtils.Simulate.blur(contentContainer),
    isOptionExists: optionText => [].filter.call(options.childNodes, opt => opt.textContent === optionText).length > 0,
    isOptionHovered: position => doIfOptionExists(position, () => hasCssState(optionAt(position), styles, {hovered: true})),
    isOptionSelected: position => doIfOptionExists(position, () => hasCssState(optionAt(position), styles, {selected: true})),
    isOptionHoveredWithGlobalClassName: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'wixstylereactHovered')),
    isOptionSelectedWithGlobalClassName: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'wixstylereactSelected')),
    isOptionHeightSmall: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'smallHeight')),
    isOptionHeightBig: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'bigHeight')),
    isLinkOption: position => optionAt(position).tagName.toLowerCase() === 'a',
    classes: () => options.className,
    pressDownKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'ArrowDown'}),
    pressUpKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'ArrowUp'}),
    pressEnterKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'Enter'}),
    pressTabKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'Tab'}),
    pressEscKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'Escape'}),
    optionContentAt: position => doIfOptionExists(position, () => optionAt(position).textContent),
    clickAtOption: position => doIfOptionExists(position, () => ReactTestUtils.Simulate.click(optionAt(position))),
    clickAtOptionWithValue: value => {
      const option = values(options.childNodes).find(option => option.innerHTML === value);
      option && ReactTestUtils.Simulate.click(option);
    },
    isOptionADivider: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'divider')),
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(element),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    },
    hasTopArrow: () => !!element.querySelector(`.${styles.arrow}`),
    optionByHook: hook => {
      const option = options.querySelector(`[data-hook=${hook}]`);
      if (!option) {
        throw `an option with data-hook ${hook} was not found`;
      }
      return {
        mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(option),
        mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(option),
        isHovered: () => hasCssState(option, styles, {hovered: true}),
        isSelected: () => hasCssState(option, styles, {selected: true}),
        isHoveredWithGlobalClassName: () => isClassExists(option, 'wixstylereactHovered'),
        isSelectedWithGlobalClassName: () => isClassExists(option, 'wixstylereactSelected'),
        content: () => option.textContent,
        click: () => ReactTestUtils.Simulate.click(option),
        isDivider: () => isClassExists(option, 'divider')
      };
    }
  };
};

export default dropdownLayoutDriverFactory;
