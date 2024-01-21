import styled from "styled-components";
import {font} from "../../styles/Common";
import {Theme} from "../../styles/Theme.styled";

const StyledMainDescription = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 32, Fmin: 24})};
    color: ${Theme.lightTheme.textColors.primary};
    margin-bottom: 25px;
    text-align: center;
    padding: 0 10px;
    
    @media ${Theme.media.tablet} {
        margin-bottom: 20px;
    }

    @media ${Theme.media.mobile} {
        margin-bottom: 15px;
    }
`

export const S = {
    StyledMainDescription,
}