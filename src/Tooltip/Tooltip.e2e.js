import eyes from 'eyes.it';
import {tooltipTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import {SHORT_CONTENT, LONG_CONTENT} from '../../stories/Tooltip/Composite/TooltipForEyesOnly';

describe('Tooltip', () => {
  const storyUrl = getStoryUrl('7. Tooltips', '7.1. Tooltip');
  const dataHook = 'tooltip-e2e-wrapper';
  const tooltipDataHook = 'tooltip-e2e-tooltip';

  beforeEach(() => {
    browser.get(storyUrl);
  });

  eyes.it('should see tooltip centered above element', () => {
    const driver = tooltipTestkitFactory({dataHook});

    waitForVisibilityOf(driver.getTooltipContentElement(tooltipDataHook), 'Cannot find Tooltip content')
      .then(() => {
        expect(driver.getTooltipTextContent(tooltipDataHook)).toBe(SHORT_CONTENT);
      });
  });

  eyes.it('should see tooltip centered above element with longer content', () => {
    const driver = tooltipTestkitFactory({dataHook});

    waitForVisibilityOf(driver.getTooltipContentElement(tooltipDataHook), 'Cannot find Tooltip content')
      .then(() => {
        driver.clickButton();
        waitForVisibilityOf(driver.getTooltipContentElement(tooltipDataHook), 'Cannot find Tooltip content')
          .then(() => {
            expect(driver.getTooltipTextContent(tooltipDataHook)).toBe(LONG_CONTENT);
          });
      });
  });
});
