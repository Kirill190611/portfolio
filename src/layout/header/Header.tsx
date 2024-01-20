import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Social} from "../../components/social/Social";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "../../components/menu/ModileMenu";
import {Theme} from "../../styles/Theme.styled";
import {HeaderMenu} from "../../components/menu/HeaderMenu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}
                             align={"center"}
                             wrap={"wrap"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                    <Social/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    font-weight: normal;
    font-style: normal;
    min-height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px 0;
    
    @media ${Theme.media.mobile} {
        padding: 10px 0;
    }
`