import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

export const ContactMail = () => {
    return (
        <StyledContactMail href={"mailto:k.igorevitch88@yandex.ru"}>k.igorevitch88@yandex.ru</StyledContactMail>
    );
};

const StyledContactMail = styled.a`
    font-size: 58px;
    font-weight: 700;
    align-items: center;
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
`