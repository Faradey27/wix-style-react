# Heading Migration Guide

## Migration to version 3

Instead of having many appearance H.* indexes, we have a new component `Heading` which also uses the `light` prop which helps us define the desired typography.
We used to have a lot of options. All H0 - H4 values are now relevant only for the Heading component.
We used to have `H0` - `H4`, which got mapped under the hood to html `h1` - `h5` respectively. Instead of doing it, we now support only `H1` - `H4` which will be mapped to `h1` - `h4`.

### Appearances updates
`<Text appearance="H0">` -> DEPRECATED

`<Text appearance="H1">` -> `<Heading appearance="H1">`

`<Text appearance="H1.1">` -> `<Heading appearance="H1" light>`

`<Text appearance="H2">` -> `<Heading appearance="H2">`

`<Text appearance="H2.1">` -> `<Heading appearance="H2" light>`

`<Text appearance="H3">` -> `<Heading appearance="H3">`

`<Text appearance="H4">` -> `<Heading appearance="H4">`

## Migration to version 4

We have extended the appearance values. It can now be one of `H1`, `H2`, `H3`, `H4`, `H5`, `H6`.
Check the storybook documentation to see the typography each appearance provide.
