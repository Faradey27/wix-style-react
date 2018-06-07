import React from 'react';
import Button from '../../Button';
import X from '../../../new-icons/X';

const CloseButton = () => (
  <Button height="medium" theme="close-transparent" onClick={e => e.preventDefault()} aria-label="close button">
    <X/>
  </Button>
);

CloseButton.displayName = 'Notification.CloseButton';

export default CloseButton;
