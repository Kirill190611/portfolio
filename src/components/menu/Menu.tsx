import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <StyledMenuList>
                {props.menuItems.map((item,index)=>{
                    return <MenuItem key={index}>
                        <MenuLink href={"#"}>{item}</MenuLink>
                    </MenuItem>
                })}
            </StyledMenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 20, Fmin: 16})};
`

const StyledMenuList = styled.ul`
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

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 95px;
    
    @media ${Theme.media.mobile} {
        min-width: 60px;
    }
`

const MenuLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: inherit;
    color: inherit;
    position: relative;
    
    &:hover:after {
        position: absolute;
        content: "";
        display: block;
        border-bottom: 3px solid ${Theme.lightTheme.textAccentColors.primaryAccent};
        bottom: 0;
        left: 0;
        right: 0;
        transition: 0.2s;
    }
`
