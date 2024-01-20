import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

export const StyledButtonsProject = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 16, Fmin: 15})};
    color: ${Theme.lightTheme.buttonsColor.primary};
`

