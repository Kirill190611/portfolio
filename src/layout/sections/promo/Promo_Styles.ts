import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

const PhotoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    background: linear-gradient(#E70FAA, #00C0FD);
    border-radius: 50%;

    @media ${Theme.media.mobile} {
        width: 320px;
        height: 320px;
    }
`

const Photo = styled.img`
    display: block;
    width: 330px;
    height: 330px;
    object-fit: cover;
    border-radius: 50%;
    
    @media ${Theme.media.mobile} {
        width: 300px;
        height: 300px;
    }
`

const PromoText = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 58, Fmin: 36})};
    color: ${Theme.lightTheme.textColors.secondary};
`

const AccentText = styled.span`
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
`

const TextContainer = styled.div`
    max-width: 500px;
`

export const S = {
    PhotoWrapper,
    Photo,
    PromoText,
    AccentText,
    TextContainer,
}