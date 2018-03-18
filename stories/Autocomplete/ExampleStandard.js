import React from 'react';
import {Autocomplete} from 'wix-style-react/Autocomplete';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

const options =
    Array.from(Array(20))
      .map((x, index) => Autocomplete.createOption({id: index, value: `value${index}`}));

options[2] = Autocomplete.createOption({id: 2, isDisabled: true, value: `Disabled item`});
options[5] = Autocomplete.createDivider();
options[8].value = 'This is a very very very very very long option';
options[12] = Autocomplete.createDivider('Divider');
options[13] = Autocomplete.createOption({id: 13, value: `Custom Item`, render: value => <span style={{color: 'red'}}>{value}</span>});

export default () =>
  <div>
    <div style={style} className="ltr">
      Left to right<Autocomplete data-hook="story-autocomplete" inputProps={{placeholder: 'Start typing'}} options={options}/>
    </div>
    <div style={style} className="rtl">
      Right to left<Autocomplete options={options}/>
    </div>
    <div style={style}>
      Disabled<Autocomplete inputProps={{disabled: true}} options={options}/>
    </div>
    <div style={style} className="ltr">
      Error<AutoComplete error errorMessage="This is an error message" options={rtlOptions}/>
    </div>
  </div>;

