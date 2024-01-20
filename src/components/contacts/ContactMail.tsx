import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type ContactMailPropsType = {
    mail: string
}
export const ContactMail = (props: ContactMailPropsType) => {
    return (
        <StyledContactMail href={"mailto:k.igorevitch88@yandex.ru"}>{props.mail}</StyledContactMail>
    );
};

const StyledContactMail = styled.a`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 58, Fmin: 20})};
    text-align: center;
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
    padding: 0 5px;
`