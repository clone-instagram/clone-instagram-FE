import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* reset */
* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
a {
  color: #000;
  :visited {
  color: #000;
  flex-direction: column;
}
}
button {
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
}
`;
