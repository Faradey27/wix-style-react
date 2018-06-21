# How to deprecate?

## Deprecating components
1. Move your component to `wix-style-react/src/Deprecated` folder
2. Update all internal imports of your component
3. Check that all tests are passing
4. Use  deprecationLog to warn the user that he using deprecated component and explain him his next steps
Example
```javascript
  ...
  import deprecationLog from '../utils/deprecationLog';

  class SomeDeprecatedComponent extends React.Component {
    constructor(props) {
      super(props);
      deprecationLog('"SomeDeprecatedComponent" was deprecated, please use "AnotherComponent" instead');
    }
    ...
  }
```
5. Do not forgot to add test, that check warn message

## Deprecating props
1. Remove your prop from propTypes definition(to prevent showing it in docs)
2. Make sure that docs do not show your deprecated prop
3. Use  deprecationLog to warn the user that he using deprecated prop and explain him his next steps
Example
```javascript
  ...
  import deprecationLog from '../utils/deprecationLog';

  class SomeComponent extends React.Component {
    ...

    render(props) {
      if (this.props.deprecatedProp !== undefined) {
        deprecationLog('SomeComponent prop "deprecatedProp" is deprecated, use "newProp" instead');
      }
      return <div>...</div>
    }
  }
```

## Deprecating props values/types
1. Update your propType
Example
before:
```javascript
  static propTypes = {
    size: oneOf(['small', 'normal', 'large'])
  }
```
after
before:
```javascript
  static propTypes = {
    size: oneOf(['small', 'medium', 'large'])
  }
```
2. Make sure that docs do not show your deprecated prop value or type
3. Use  deprecationLog to warn the user that he using deprecated prop value and explain him his next steps
Example
```javascript
  ...
  import deprecationLog from '../utils/deprecationLog';

  class SomeComponent extends React.Component {
    ...

    render(props) {
      if (this.props.size !== 'normal') {
        deprecationLog('SomeComponent prop "size" with value "normal" is deprecated and will be removed in next major release, please use "medium" size instead');
      }
      return <div>...</div>
    }
  }
```
