import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FooterMobail} from "../../components/contacts/FooterMobail";
import {FooterMail} from "../../components/contacts/FooterMail";
import {Social} from "../../components/social/Social";
import {Menu} from "../../components/menu/Menu";
import {FooterDev} from "../../components/contacts/FooterDev";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <FooterMobail/>
                <FooterMail/>
                <Social/>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Menu/>
                <FooterDev/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
