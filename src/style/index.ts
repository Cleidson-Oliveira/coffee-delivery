import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body, html {
        height: 100%;
        background-color: ${({theme}) => theme.colors.base.background};
    }
    body, html, input, button {
        font-family: "Roboto";
    }
`;