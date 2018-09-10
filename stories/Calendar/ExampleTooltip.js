import React from 'react';
import Calendar from 'wix-style-react/Calendar';
import Tooltip from 'wix-style-react/Tooltip';
import Button from 'wix-style-react/Button';
import DateIcon from 'wix-style-react/new-icons/Date';

export default () => (
  <Tooltip
    placement="bottom"
    alignment="left"
    showArrow={false}
    hideTrigger="click"
    shouldCloseOnClickOutside
    showTrigger="click"
    maxWidth="300px"
    overflow="hidden"
    padding={0}
    content={(
      <Calendar value={new Date()}/>
    )}
    >
    <Button theme="icon-standard">
      <DateIcon/>
    </Button>
  </Tooltip>
);
