import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <StyledMenuList>
                {props.menuItems.map((item,index)=>{
                    return <li key={index}>
                        <a href={"#"}>{item}</a>
                    </li>
                })}
            </StyledMenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70px;
    font-size: 20px;
`

const StyledMenuList = styled.ul`
    display: flex;
    gap: 20px 40px;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    max-width: 635px;
    
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 95px;
        min-height: 50px;
    }
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-family: inherit;
        text-decoration: none;
        color: inherit;
    }
`
