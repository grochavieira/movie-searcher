import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 60%;
    }

    html,
    body,
    #root {
    height: 100vh;
    }

    #root {
    display: flex;
    justify-content: center;
    }

    body,
    input, button
    {
        font-family: "Source Sans Pro", Arial, sans-serif;
    }

`;
