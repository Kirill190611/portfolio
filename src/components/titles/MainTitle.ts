import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

export const MainTitle = styled.h1`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 58, Fmin: 36})};
    color: ${Theme.lightTheme.textColors.secondary};
`
