# CSS CLASSES HELPER

## Example usage

```js
import { pf } from './cssClassesHelper';

const StyledField = styled.div.attrs({ className: 'field' })`
  ${pf`flex flex-row justify-content-end`}

  color: red;
  display: flex;
  
  & > .pepe {
    ${pf`flex flex-row justify-content-end`}
    color: green;
  }
`;
```
