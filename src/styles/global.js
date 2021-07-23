import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    :root{
        --white:#fff;
        --vanila:#f1ede0;
        --gray:#666360;
        --black:#0c0d0d;
        --orange:#c85311;
        --red:#c53030;
        --blue:#1380FB;
        --darkblue:#030E3C;
    }

    body{
        background: var(--vanila);
        color: var(--black)
    }

    body,input,button{
        font-family: 'PT Serif', serif;
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto Mono', monospace;
        font-weight:700; 
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;
