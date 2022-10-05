import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F1F5;

        --cabecalho: #2D4A22;

        --box: #363F5F;

        --titleSaidas: #969CB2;
        --titleExpense: red;

        --backgroundTotal: #49AA26;

    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 728px) {
            font-size: 87.5%;
        }
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

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }
        

`