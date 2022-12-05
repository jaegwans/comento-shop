import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    display: flex;
    justify-content: center;
}
button{
    all:unset;
}
`;

export default GlobalStyle;
