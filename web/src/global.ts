import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    
    body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
        font-family: 'Roboto', sans-serif;
    }

`;
