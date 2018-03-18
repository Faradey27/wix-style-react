import React from 'react';
import {Autocomplete} from 'wix-style-react/StylableAutocomplete';
import {object, node} from 'prop-types';

const replacer = (key, value) => {
  if (typeof value === 'function') {
    return value.toString();
  } else {
    return value;
  }
};

export const DividerExample = ({value}) =>
  <div className="markdown-body">
    <pre>
      <code className="language-js">
      Autocomplete.createDivider({JSON.stringify(value, replacer)})
      <br/>
      Will generate:
      <br/>
        {JSON.stringify(Autocomplete.createDivider(value), replacer, 2)}
      </code>
    </pre>
  </div>;

DividerExample.propTypes = {
  value: node
};

export const OptionExample = ({option}) =>
  <div className="markdown-body">
    <pre>
      <code className="language-js">
        Autocomplete.createOption({JSON.stringify(option, replacer)})
        <br/>
        Will generate:
        <br/>
        {JSON.stringify(Autocomplete.createOption(option), replacer, 2)}
      </code>
    </pre>
  </div>;

OptionExample.propTypes = {
  option: object
};
