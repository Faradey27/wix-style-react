# Migration to the new Autocomplete component

AutoComplete has been renamed to Autocomplete, and the interface is much smaller, and more easy to use.\
The main change is the creation of the Options, which gives you more control of how each Option looks like.

## Deprecated props

`predicate` - Deprecated because all the usages were the same, and there should be a standard implmentation all over the platform. The predicate is containsIgnoreCase.

`autocomplete` - Deprecated because never used.

`inputElement` - Deprecated because the `Input` component cannot be changed, it should be configured using props.

`closeOnSelect` - Deprecated because `Autocomplete` supports only single select.

`onManuallySelect` - Renamed to `onManualInput`.

`valueParser` - Deprecated because the entire `DropdownOption` create has changed, look below for more information.

`dropdownWidth` - Deprecated because styling the component should be done externally.

`dropdownOffsetLeft` - Deprecated because styling the component should be done externally.

`showOptionsIfEmptyInput` - Deprecated because the was not used.

`highlight` - Deprecated because the was always true.

`dropDirectionUp` - Deprecated because the was not used, the new `Autocomplete` component has a new placement mechanism where the content opens to the direction where there's enough room for it to be displayed.

`onClose` - Deprecated because the usage could be achieved by `onSelect`.

`visible` - Deprecated because styling the component should be done externally.

`tabIndex` - Deprecated because should not be used (not best practice).

`theme` - Deprecated because the implementation of the new library `wix-ui-core` requires each theme to be defined in a different library.

`onClickOutside` - Deprecated because was not used.

`maxHeightPixels` - Deprecated because styling the component should be done externally.

`withArrow` - Deprecated because was not used.

`onMouseEnter` - Deprecated because was not used.

`onMouseLeave` - Deprecated because was not used.

`itemHeight` - Deprecated because the entire `DropdownOption` create has changed, look below for more information.

`selectedHighlight` - Deprecated because was not used.

## New props

`options` - Array of the options to display

`onSelect` - Callback to be called when selection changed, with the new selected Option

`initialSelectedId` - An initial selected Id, to render the component with selection. This is only initial and will not be updated when changing after render.

`fixedHeader` - Fixed element to always appear at the top of the options list.

`fixedFooter` - Fixed element to always appear at the bottom of the options list.

`onManualInput` - Callback when the user pressed the Enter key or Tab key after he wrote in the Input field - meaning the user selected something not in the list

`autoFocus` - Should the Autocomplete receive focus when rendered

`disabled` - Disabled state

`onBlur` - A callback for when losing focus

`onChange` - A callback for when the `Autocomplete` inner `Input` component value changes

`onFocus` - A callback for when gaining focus

`placeholder` - Placeholder to displany when the `Input` is empty

`error` - Could be textual or boolean. If textual, the error will be displayed in a tooltip.

`prefix` - Element to appear before the `Autocomplete`

`suffix`  - Element to appear after the `Autocomplete`

## Testkit Deprecations (e2e & unit)

The drivers has changed tremendously.\
Better lookup the exact implementation:

* For UT: [Autocomplete.driver.ts](https://github.com/wix/wix-ui/blob/master/packages/wix-ui-core/src/components/Autocomplete/Autocomplete.driver.ts)
* For E2E: [Autocomplete.protractor.driver.ts](https://github.com/wix/wix-ui/blob/master/packages/wix-ui-core/src/components/Autocomplete/Autocomplete.protractor.driver.ts)

## Option creation

The options needs to implement a certain interface.\
To make it easy to use, 2 static functions were added on the `Autocomplete`:

* `Autocomplete.createOption()` - receives an object with optional properties of: id, value, isDisabled, isSelectable, render
* `Autocomplete.createDivider()` - receives an optional textual value parameter

A more ellaborate documentation can be found in the <a target="_blank" rel="noopener noreferrer" href="https://wix.github.io/wix-ui-backoffice/?selectedKind=Components&selectedStory=Autocomplete">storybook</a>.
