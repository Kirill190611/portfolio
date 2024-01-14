import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FooterMobail} from "../../components/contacts/FooterMobail";
import {FooterMail} from "../../components/contacts/FooterMail";
import {Social} from "../../components/social/Social";
import {Menu} from "../../components/menu/Menu";
import {FooterDev} from "../../components/contacts/FooterDev";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContactWrapper>
                <Logo/>
                <FooterMobail phone={"+7-920-097-96-31"}/>
                <FooterMail mail={"k.igorevitch88@yandex.ru"}/>
                <Social/>
            </FooterContactWrapper>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Menu menuItems={items}/>
                <FooterDev/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 176px;
`

const FooterContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    &::after {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 4px;
        background-color: #666;
        bottom: -19px;
    }
`