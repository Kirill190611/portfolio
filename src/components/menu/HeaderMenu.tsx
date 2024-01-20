import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <StyledHeaderMenuList>
                {props.menuItems.map((item,index)=>{
                    return <HeaderMenuItem key={index}>
                        <HeaderMenuLink href={"#"}>{item}</HeaderMenuLink>
                    </HeaderMenuItem>
                })}
            </StyledHeaderMenuList>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    
    @media ${Theme.media.tablet} {
        display: none;
    }
`

const StyledHeaderMenuList = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    max-width: 635px;
    min-height: 60px;
`

const HeaderMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 95px;
`

const HeaderMenuLink = styled.a`
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