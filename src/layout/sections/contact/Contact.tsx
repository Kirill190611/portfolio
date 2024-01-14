import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ContactDescription} from "../../../components/descriptions/ContactDescription";
import {ContactMail} from "../../../components/contacts/ContactMail";
import {SecondTitle} from "../../../components/titles/SecondTitle";
import styled from "styled-components";

export const Contact = () => {
    return (
        <ContactSection>
            <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                <ContactDescription content={"For any questions please mail me:"}/>
                <ContactMail mail={"k.igorevitch88@yandex.ru"}/>
            </FlexWrapper>
        </ContactSection>
    );
};

const ContactSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    margin: 0 0 35px 0;
`