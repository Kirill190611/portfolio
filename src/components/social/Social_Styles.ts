import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

// Social styles

const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    
    @media ${Theme.media.tablet} {
        display: none;
    }
`

const SocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

// Social item styles


const SocialItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: ${Theme.lightTheme.textColors.primary};
    fill: ${Theme.lightTheme.textColors.primary};
    
    &:hover {
        stroke: ${Theme.lightTheme.textAccentColors.primaryAccent};
        fill: ${Theme.lightTheme.textAccentColors.primaryAccent};
    }
`

export const S = {
    Social,
    SocialList,
    SocialItem,
    SocialLink,
}