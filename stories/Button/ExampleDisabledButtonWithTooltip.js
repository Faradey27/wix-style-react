import React from 'react';
import Button from 'wix-style-react/Button';
import Tooltip from 'wix-style-react/Tooltip';

export default () => (
  <div data-hook="tooltip-e2e-wrapper">
    <Tooltip
      shouldUpdatePosition
      showImmediately
      appendToParent
      content="Some tooltip"
      >
      <Button
        dataHook="disabled-button"
        disabled
        type="button"
        >
        Hover Me
      </Button>
    </Tooltip>
  </div>
);
