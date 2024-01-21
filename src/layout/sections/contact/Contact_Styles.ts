import styled from "styled-components";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme.styled";

// Contact styles

const ContactSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
`

// Contact description styles

const ContactDescription = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 58, Fmin: 20})};
    text-align: center;
    color: ${Theme.lightTheme.textColors.secondary};
    margin: 0 0 35px 0;
    padding: 0 5px;
`

// Contact mail styles

const ContactMail = styled.a`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 58, Fmin: 20})};
    text-align: center;
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
    padding: 0 5px;
`

export const S = {
    ContactSection,
    ContactDescription,
    ContactMail,
}