import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <Social/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    font-weight: normal;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    min-height: 70px;
    margin-bottom: 100px;
`