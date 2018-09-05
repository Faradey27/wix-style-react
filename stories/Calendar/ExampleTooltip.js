import React from 'react';
import Calendar from '../../src/Calendar';
import Tooltip from '../../src/Tooltip';
import Button from '../../src/Button';
import DateIcon from '../../src/new-icons/Date';

export default () => (
  <Tooltip
    placement="bottom"
    alignment="left"
    showArrow={false}
    hideTrigger="click"
    shouldCloseOnClickOutside
    showTrigger="click"
    maxWidth="300px"
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
