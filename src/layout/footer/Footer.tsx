import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FooterMobail} from "../../components/contacts/FooterMobail";
import {FooterMail} from "../../components/contacts/FooterMail";
import {FooterDev} from "../../components/contacts/FooterDev";
import {Container} from "../../components/Container";
import {FooterSocial} from "../../components/social/FooterSocial";
import {Theme} from "../../styles/Theme.styled";
import {FooterMenu} from "../../components/menu/FooterMenu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Footer = () => {
    return (
        <Container>
            <StyledFooter>
                <FooterContactWrapper>
                    <Logo/>
                    <FooterMobail phone={"+7-920-097-96-31"}/>
                    <FooterMail mail={"k.igorevitch88@yandex.ru"}/>
                    <FooterSocial/>
                </FooterContactWrapper>
                <FlexWrapper justify={"space-between"}
                             align={"center"}>
                    <FooterMenu menuItems={items}/>
                    <FooterDev/>
                </FlexWrapper>
            </StyledFooter>
        </Container>
    );
};

const StyledFooter = styled.footer`
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