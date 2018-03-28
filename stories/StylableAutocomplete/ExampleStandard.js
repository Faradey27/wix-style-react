import React from 'react';
import {Autocomplete} from 'wix-style-react/StylableAutocomplete';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

export default options =>
  <div>
    <div style={style}>
      Left to right<Autocomplete data-hook="story-autocomplete" placeholder="Start typing" options={options}/>
    </div>
    <div style={style} dir="rtl">
      Right to left<Autocomplete options={options}/>
    </div>
    <div style={style}>
      Disabled<Autocomplete disabled options={options}/>
    </div>
    <div style={style} className="ltr">
      Error<AutoComplete error errorMessage="This is an error message" options={rtlOptions}/>
    </div>
  </div>;

