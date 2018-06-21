import {mouseEnter} from 'wix-ui-test-utils/protractor';
import {hasAttribute, mergeDrivers} from '../../test-common';
import focusableDriverFactory from '../../common/Focusable/Focusable.protractor.driver';

const buttonDriverFactory = element => {
  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [element]
  });

  const publicDriver = {
    click: () => element.click(),
    hover: element => mouseEnter(element),
    tooltipElement: () => $('[data-hook="tooltip-e2e-wrapper"]'),
    tooltipChildElement: () => $('[data-hook="disabled-button"]'),
    tooltipElementText: () => $('[data-hook="tooltip-e2e-wrapper"]').getText(),
    getButtonTextContent: () => element.getText(),
    isButtonDisabled: () => hasAttribute(element, 'disabled'),
    isPrefixIconExists: () => element.$('[data-hook="btn-prefix"]').isPresent(),
    isSuffixIconExists: () => element.$('[data-hook="btn-suffix"]').isPresent(),
    element: () => element
  };

  return mergeDrivers(publicDriver, focusableDriver);
};

export default buttonDriverFactory;
