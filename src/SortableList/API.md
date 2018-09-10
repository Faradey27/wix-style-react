### API

| propName         | propType | defaultValue | isRequired | description |
| ---              | ---      | ---          | ---        | ---         |
| items            | array    | -            | true       | array of items, each item should have an id. |
| renderItem       | func     | -            | true       | render function which will be used to render item block inside of sortable list |
| onDrop           | func     | -            | true       | callback for onDrop event |
| containerId      | string   | -            | true       | uniq id of SortableList instance |
| className        | string   | -            | -          | className for root of  SortableList |
| contentClassName | string   | -            | -          | className for items wrapper div |
| groupName        | string   | -            | -          | name of group to which SortableList is related, d&d allowed inside of the same group |
| withHandle       | bool     | false        | -          | should whole item be draggable or just handle on it|

Some details about complex props

##### `items`
Example:
```js
[
  {
    id: 'a',
    text: 'Item 1'
  },
  {
    id: 'b',
    text: 'Item 2'
  },
  {
    id: 'c',
    text: 'Item 3'
  },
  {
    id: 'd',
    text: 'Item 4'
  }
]
```

##### `renderItem`
This function called with such parameters:

- `isPlaceholder` - if item in drag state,
then instead of an item(item previous place)
we want to render placeholder(empty block, or left item as it is), so you able to style your item by cheking isPlaceholder.
- `isPreview` - if item in drag(fly) state,
then instead of an item,
we want to render preview
state(maybe we want to rotate it a little, or hide something),
so you able to style your item by cheking isPreview.
- `id` - an id from item that you render
- `previewStyles` - styles that coming from SotableList, `you always need to apply` them on your root div, inside of renderItem
- `item` - item that you are render

Example without handle:
```js
renderItem = ({isPlaceholder, isPreview, id, previewStyles, item}) => {
    const classes = classNames(
      styles.card,
      {
        [styles.placeholder]: isPlaceholder,
        [styles.preview]: isPreview
      });

    return (
      <div className={classes} style={previewStyles} data-hook={`item-${id}`}>
        {item.text}
      </div>
    );
  }
```

Example with handle:
```js
renderItem = ({isPlaceholder, isPreview, id, connectHandle, previewStyles, item}) => {
    const classes = classNames(
      styles.card,
      {
        [styles.placeholder]: isPlaceholder,
        [styles.preview]: isPreview
      });

    return (
      <div className={classes} style={previewStyles} data-hook={`item-${id}`}>
        {connectHandle(
          <div className={styles.handle} data-hook={`card-${id}-handle`}>
            <DragAndDropLarge/> // an icon
          </div>
        )}
        {item.text}
      </div>
    );
  }
```

##### `onDrop`
This function called with such parameters:

- `removedIndex` - index of an item previous position inside of original items array
- `addedIndex` - index of an item new position inside of new items array
- `removedFromContainerId` - id of the container(SortableList instance) from which item was removed
- `addedToContainerId` - id of the container(SortableList instance) to which item was dropped
- `payload` - original item data

Example of d&d onDrop callback for drag between two columns(two SortableList)

```js
handleDrop = ({removedIndex, addedIndex, removedFromContainerId, addedToContainerId, payload}) => {
  const nextState = copy(this.state);
  nextState[removedFromContainerId].splice(removedIndex, 1);
  nextState[addedToContainerId].splice(addedIndex, 0, payload);

  this.setState({...nextState});
};
```

# FAQ
- How i can create trello like board?
- `Please take a look to such example: Sortable List - Draggable Multi Area`
- Does d&d works on mobile?
- `No, it does not. If you want to have d&d on mobile, you need to override our HTML5Backend which we use for d&d`
- How i can override HTML5Backend with MyBackend?
- `example:`
```js
<DragDropContextProvider backend={MyBackend}>
  <div className={styles.root}>
    <SortableList
      className={classNames(defaultDndStyles.list, styles.list)}
      dataHook="list-multi-area"
      groupName="multi-area"
      containerId="multiArea1"
      items={this.state.multiArea1}
      renderItem={this.renderItem}
      onDrop={this.handleDrop}
      />
    <SortableList
      className={classNames(defaultDndStyles.list, styles.list)}
      dataHook="list-multi-area"
      groupName="multi-area"
      containerId="multiArea2"
      items={this.state.multiArea2}
      renderItem={this.renderItem}
      onDrop={this.handleDrop}
      />
  </div>
</DragDropContextProvider>
```
- Do you provide some default styles?
- `Yes, we do. But you able to override everything.`

