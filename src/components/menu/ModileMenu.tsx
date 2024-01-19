import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.styled";

export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <StyledMenuList>
                    {props.menuItems.map((item,index)=>{
                        return <MenuItem key={index}>
                            <MenuLink href={"#"}>{item}</MenuLink>
                        </MenuItem>
                    })}
                </StyledMenuList>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${Theme.media.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60px;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.lightTheme.textColors.primary};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.lightTheme.textColors.primary};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }
        
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.lightTheme.textColors.primary};
            position: absolute;
            left: 12px;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                width: 36px;
                left: 0;
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`

const StyledMenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    max-width: 635px;
`

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 95px;
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
