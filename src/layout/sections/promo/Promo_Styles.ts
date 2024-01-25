import styled from "styled-components";
import {Theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Promo = styled.section`    
    @media ${Theme.media.mobile} {
        ${FlexWrapper} {
            height: 40vh;
        }
    }
`

const PhotoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 350px;
    width: 350px;
    height: 350px;
    background: linear-gradient(#E70FAA, #00C0FD);
    border-radius: 50%;

    @media ${Theme.media.mobile} {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`

const Photo = styled.img`
    display: block;
    min-width: 330px;
    width: 330px;
    height: 330px;
    object-fit: cover;
    border-radius: 50%;
    
    @media ${Theme.media.mobile} {
        min-width: 280px;
        width: 280px;
        height: 280px;
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
    max-width: 600px;
    text-align: left;
`

export const S = {
    Promo,
    PhotoWrapper,
    Photo,
    PromoText,
    AccentText,
    TextContainer,
}