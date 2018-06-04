# Motivation

* current icons do not have standart sizes
* a lot of current icons are broken
* it is tricky to import and to use current icons

# How to use new icons?

Example 1
```
  import Add from 'wix-style-react/icons/Add';

  export default () => (
    <div>
      <Add />
    </div>
  )
```

Example 2
```
  import {Add} from 'wix-style-react/icons';

  export default () => (
    <div>
      <Add size="3em"/>
    </div>
  )
```

# How to migrate to new icons

First of all, some names are changed and some icons are deprecated, so please visit http://electric-process.surge.sh/ and find new icon name, if your icon is deprecated - ask your UX/UI person to provide alternative from available icons.

Now you have two choices:
1) Do migration by hands based on mapping
2) run our migration script
```
  npx wix-style-react --name=migrate-2-new-icons --path=src/
```
such command will migrate all .js files inside src/ folder to new icons

