import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../../components/FlexWrapper";
import {font} from "../../styles/Common";
import {Link} from "react-scroll";

// Footer styles

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 176px;
    padding: 25px 0;
    
    @media ${Theme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
        }
    }
`

const FooterContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media ${Theme.media.tablet} {
        flex-direction: column;
        min-height: 200px;
    }
    
    &::after {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 3px;
        background-color: #666;
        bottom: -5px;

        @media ${Theme.media.tablet} {
            display: none;
        }
    }
`

// Footer mobail styles

const FooterMobail = styled.a`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})}
    color: ${Theme.lightTheme.textColors.secondary};
`

// Footer mail styles

const FooterMail = styled.a`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})}
    color: ${Theme.lightTheme.textColors.secondary};
`

// Footer social styles

const FooterSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
`

const FooterSocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

// Footer menu styles

const FooterMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 20, Fmin: 16})};


    @media ${Theme.media.tablet} {
        display: none;
    }
`

const FooterMenuList = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    max-width: 635px;
    min-height: 60px;
`

const FooterMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 95px;
`

const FooterMenuLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: inherit;
    color: inherit;
    position: relative;
    
    &::after {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        border-bottom: 3px solid ${Theme.lightTheme.textAccentColors.primaryAccent};
        bottom: 0;
        left: 0;
        right: 0;
        transform: scale(0);
    }

    &:hover {
        &::after{
            transform: scale(1);
            transition: ${Theme.animation.transition};
        }
    }
`

// Footer developer styles


const FooterDev = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})};
    text-align: right;
`

const FooterAccentText = styled.span`
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
`

export const S = {
    Footer,
    FooterContactWrapper,
    FooterMobail,
    FooterMail,
    FooterSocial,
    FooterSocialList,
    FooterMenu,
    FooterMenuList,
    FooterMenuItem,
    FooterMenuLink,
    FooterDev,
    FooterAccentText,
}