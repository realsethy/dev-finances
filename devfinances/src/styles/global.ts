import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root{
        --background: #F0F1F5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: let(--background);
        -webkit-font-smoothing: antialiased;
    }
        

`