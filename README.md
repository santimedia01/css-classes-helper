# CSS CLASSES HELPER

## Examples

### With Styled Components

```js
import { pf } from 'css-classes-helper';

const StyledField = styled.div.attrs({ className: 'field' })`
  ${pf`flex flex-row justify-content-end`}

  color: red;
  display: flex;

  & > .pepe {
    ${pf`bg-blue-500`}
    color: green;
  }
`;
```
