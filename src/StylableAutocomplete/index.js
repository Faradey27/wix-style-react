import React from 'react';
import {BOAutocomplete} from 'wix-ui-backoffice/Autocomplete';
import {Autocomplete as OldAutocomplete} from '../DeprecatedAutoComplete';
import {string} from 'prop-types';

export const Autocomplete = props => {
  if (props.theme === 'amaterial') {
    return <OldAutocomplete {...props}/>;
  }

  return <BOAutocomplete {...props}/>;
};

Autocomplete.propTypes = {
  theme: string
};
