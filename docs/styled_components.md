## Styled components guidelines

We will follow some styling guidelines to make the DX as good as possible as also making
styling components as declarative as possible.

- Every element that wants to be styled **MUST be a styled components**. **_No class names should be used_**.
  If you would like to style a child component: either create a new styled component or use the corresponding
  HTML tag as and a selector.

- Every styled component name **MUST suffix with the word STYLED**. This will be our convention to quickly
  differentiate normal components from styled ones. Ex.: _ButtonStyled_, this component is a styled component _only_
  and not a functional component of our own implementation.

- All custom components (not styled) [**MUST have the prop _className_**](https://styled-components.com/docs/basics#styling-any-component)
  and this one should be attached to their root element (either if is a normal HTML tag or styled component).
  This way we guarantee that every component has their styles extensible.
