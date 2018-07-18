# MessageBox component

> Message box Layouts

## MessageBoxMarketerialLayout Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title	 | Node | - | + | Title for Messag Box |
| content | Node | - | + | Content of the Message Box |
| primaryButtonLabel | string | - | + | Primary Button Label |
| secondaryButtonLabel | string | - | - | Secondary Button Label |
| onPrimaryButtonClick | func | - | - | Primary Button Click callback |
| onSecondaryButtonClick | func | - | - | Secondary Button Click handler |
| imageUrl | string | - | - | Header image url |
| onClose | func | - | + | Close callback |

## MessageBoxFunctionalLayout Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| hideFooter | bool | - | - | Hide or show footer |
| footerBottomChildren | node | - | - | Content to appear at the footer (below the footer's buttons) |
| confirmText | string | - | - | Confirm button Label |
| cancelText | string | - | - | Cancel button Label |
| theme | string | - | - | theme of the message box, (green, blue , red) |
| onOk | func | - | - | Ok callback |
| onCancel | func | - | - | Cancel callback |
| onClose | func | onCancel | - | Close button callback, the default is onCancel callback |
| title | Node | - | - | title of the Message Box |
| children | array | - | - | Message box content |
| maxHeight | string or number | - | - | Message box content max height |
| buttonsHeight | string | small | - | The size of the button, can be small, medium or large |
| closeButton | bool | true | - | Should the x button appear or not |
| disableCancel | bool | false | - | Disable cancel button |
| disableConfirmation | bool| false | - | Disable confirmation button |
| width| string | '600px' | - | Set the message box width |
| noBodyPadding| bool | false | - | Should the body of the layout will have surrounding padding |
