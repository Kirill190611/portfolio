import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.styled";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.lightTheme.textColors.primary};
        background-color: ${Theme.lightTheme.backgroundColors.primary};
        font-size: ${Theme.lightTheme.fontSize.primary};
        line-height: 1.2;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
`