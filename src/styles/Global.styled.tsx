import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.styled";

export const GlobalStyled = createGlobalStyle`

    @font-face {
        font-family: Jost;
        src: local('Jost'),
        url(../assets/fonts/Jost-Medium.eot?) format("eot"),
        url(../assets/fonts/Jost-Medium.woff2) format("woff2"),
        url(../assets/fonts/Jost-Medium.ttf) format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Jost;
        src: local('Jost'),
        url(../assets/fonts/Jost-Bold.eot?) format("eot"),
        url(../assets/fonts/Jost-Bold.woff2) format("woff2"),
        url(../assets/fonts/Jost-Bold.ttf) format("truetype");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Jost;
        src: local('Jost'),
        url(../assets/fonts/Jost-BoldItalic.eot?) format("eot"),
        url(../assets/fonts/Jost-BoldItalic.woff2) format("woff2"),
        url(../assets/fonts/Jost-BoldItalic.ttf) format("truetype");
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: Jost;
        src: local('Jost'),
        url(../assets/fonts/Jost-Italic.eot?) format("eot"),
        url(../assets/fonts/Jost-Italic.woff2) format("woff2"),
        url(../assets/fonts/Jost-Italic.ttf) format("truetype");
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }
    
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
        font-size: 20px;
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