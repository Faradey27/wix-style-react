import React from 'react';
import {children, optional, once} from '../Composite';
import Label from '../Label';
import {Autocomplete} from '../StylableAutocomplete';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

const AutoCompleteComposite = ({...props, children}) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

AutoCompleteComposite.propTypes = {
  children: children(optional(Label), once(Autocomplete))
};

AutoCompleteComposite.displayName = 'AutoCompleteComposite';

export default AutoCompleteComposite;
