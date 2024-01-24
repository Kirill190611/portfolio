import styled, {css} from "styled-components";
import {font} from "../../../../styles/Common";
import {Theme} from "../../../../styles/Theme.styled";

// Project menu styles

const TabMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 20, Fmin: 16})};
`

const TabMenuList = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    max-width: 635px;
    min-height: 60px;

    @media ${Theme.media.mobile} {
        min-height: 40px;
        justify-content: center;
        align-items: center;
    }
`

const TabMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 95px;
    
    @media ${Theme.media.mobile} {
        min-width: 60px;
    }
`

const TabMenuLink = styled.button<{active?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: inherit;
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 20, Fmin: 18})};
    color: inherit;
    position: relative;

    ${props => props.active && css<{active?: boolean}>`
        transform: translateY(-4px);
    `}

    &::after {
        position: absolute;
        content: "";
        display: block;
        width: 0;
        border-bottom: 3px solid ${Theme.lightTheme.textAccentColors.primaryAccent};
        bottom: 0;
        left: 0;
        right: 0;

        ${props => props.active && css<{active?: boolean}>`
        width: 100%;
    `}
    }

    &:hover::after {
        width: 100%;
        transition: 0.5s;
    }
`

export const S = {
    TabMenu,
    TabMenuList,
    TabMenuItem,
    TabMenuLink,
}