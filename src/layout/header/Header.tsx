import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";
import {BodyWrapper} from "../../components/BodyWrapper";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <BodyWrapper>
            <StyledHeader>
                <Logo/>
                <Menu menuItems={items}/>
                <Social/>
            </StyledHeader>
        </BodyWrapper>
    );
};

const StyledHeader = styled.header`
    font-family: Jost, sans-serif;
    font-weight: normal;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
`