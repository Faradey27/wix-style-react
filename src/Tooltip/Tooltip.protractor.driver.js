import {mouseEnter} from 'wix-ui-test-utils/protractor';

const tooltipDriverFactory = component => ({
  clickButton: () => component.click(),
  hover: element => mouseEnter(element),
  getTooltipContentElement: datahook => component.$(`[data-hook="${datahook}"]`),
  getTooltipTextContent: datahook => component.$(`[data-hook="${datahook}"]`).getText(),
  tooltipElement: () => $('[data-hook="tooltip-e2e-wrapper"]'),
  tooltipElementText: () => $('[data-hook="tooltip-e2e-wrapper"]').getText(),
  element: () => component
});

export default tooltipDriverFactory;
