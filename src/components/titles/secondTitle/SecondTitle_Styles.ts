import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

const StyledSecondTitle = styled.h2`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 42, Fmin: 34})}
    color: ${Theme.lightTheme.titleColors.primary};
    margin: 0 0 40px 0;

    @media ${Theme.media.tablet} {
        margin: 0 0 30px 0;
    }

    @media ${Theme.media.mobile} {
        margin: 0 0 20px 0;
    }
`

export const S = {
    StyledSecondTitle,
}