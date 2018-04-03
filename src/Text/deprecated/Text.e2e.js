import {textTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';
import eyes from 'eyes.it';

describe('Text', () => {
  const storyUrl = getStoryUrl('1. Foundation', '1.2 Text');
  const dataHook = 'storybook-text';

  eyes.it('should render text', () => {
    const driver = textTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Text')
      .then(() => {
        expect(driver.getText()).toBe('Hello, World!');
      });
  });
});

