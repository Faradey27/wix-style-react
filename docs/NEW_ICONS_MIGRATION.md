# New icons in `wix-style-react`

## How to migrate to the new icons

First of all, some names are changed and some icons are deprecated, so please visit http://electric-process.surge.sh/ and find new icon name, if your icon is deprecated - ask your UX/UI person to provide alternative from available icons.

Now you have two choices:
1) Do the migration manually based on the mapping
2) Run the migration script. (please note, it currently works only for .js files)
```
  npx migrate-to-icons-v2
```
this command will migrate all .js files inside src/ folder to new icons,
if you want to migrate icons in different folder, you can use --path param
```
  npx migrate-to-icons-v2 --path stories/
```

## Why did we create new icons

* the old icons had different sizes.
* some icons were broken
* it is tricky to import and to use current icons

## Using the new icons in your code

```js
  import Add from 'wix-style-react/new-icons/Add';

  export default () => (
    <div>
      <Add />
    </div>
  )
```

Note: Icon accept size prop, which will be used as width and height for Icon.
