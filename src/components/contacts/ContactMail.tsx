import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type ContactMailPropsType = {
    mail: string
}
export const ContactMail = (props: ContactMailPropsType) => {
    return (
        <StyledContactMail href={"mailto:k.igorevitch88@yandex.ru"}>{props.mail}</StyledContactMail>
    );
};

const StyledContactMail = styled.a`
    font-size: 58px;
    font-weight: 700;
    align-items: center;
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
`