## Text Migration Guide

A lot have changed with the appearance of the Text component. Instead of having many T.* indexes, we have 2 new props `light` and `bold` which helps us define the desire typography:

#### appearances updates
`T1.2` —> `T1` + light={true}
`T1.3` —> `T1` + render Link component as a children of the Text
`T1.4` —> `T1.1` + light={true}. The color have slightly changed from #c8c8c8 (GR10) to #b6c1cd (D50)

`T2` - `T1` + bold={true}
`T2.1` - `T1.1` + light={true} + bold={true}
`T2.2` —> `T1` + light={true} + bold={true}
`T2.3` —> Bold text link is no longer supported

`T3.2` —> `T3` + light={true}
`T3.3` —> `T3` + render Link component as a children of the Text
`T3.4` —> `T3.1` + light={true}. The color have slightly changed from #c8c8c8 (GR10) to #b6c1cd (D50)

`T4` - `T3` + bold={true}
`T4.1` - `T3.1` + bold={true}
`T4.2` —> `T3` + light={true} + bold={true}
`T4.3` —> Bold text link is no longer supported

 `T5.*` are deprecated. If you use them, you might want to use `<Badge type=“transparent”>`

 ## Heading
A lot have changed with the H.* appearances as well. Instead of having many H.* indexes, we have a new component `Heading` which also uses the `light` prop which helps us define the desired typography.
we used to have a lot of options. All H0 - H4 values are now relevant only for the Heading component.
We used to have `H0` - `H4`, which got mapped under the hood to html `h1` - `h5` respectively. Instead of doing it, we now support only `H1` - `H5`.

Moreover, We had appearances like `H1.1` which changed the color of the text to be light. Instead we will have the boolean `light` prop.
Example: `<Text appearance=“H1.1”>hello</Text> Will become: `<Heading appearance=“H2” light>hello</Heading>`

#### appearances updates 
`H0` --> `H1`
In the rest of the appearances there is no direct mapping.
There are some color, line-height & font-size updates

### Testkit Deprecated methods:
- getClassName is deprecated.
- `getType` is deprecated in favor of `getTagName`


### Best practice to use the colors in wix-style-react:
Today there was no good way to get the colors from wis-style-react to display green or red text for example.
Most of the users simply imported `common.scss` from wix-style-react and gets all the colors.

The new `Text` component tries to solve this bad practice. In order to stop importing this css file, the new `Text` component also supports a new `skin` prop:
`skin=“success”` will give you a green text.
`skin=“error”` will give you a red text.
`skin=“premium”` will give you a purple text.

* Note: The `common.scss` might be deprecated soon. We can’t guarantee it will remain exposed in the future versions.  
