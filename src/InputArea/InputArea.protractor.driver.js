
import {isFocused} from '../test-common';

const toggleSwitchDriverFactory = component => ({
  element: () => component,
  textArea: () => component.$('textarea'),
  isFocused: () => isFocused(component.$('textarea')),
  isHovered: () => component.$(':hover').isPresent()
});

export default toggleSwitchDriverFactory;
