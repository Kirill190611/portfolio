import React from 'react';
import styled from "styled-components";

export const ContactMail = () => {
    return (
        <StyledContactMail href={"mailto:k.igorevitch88@yandex.ru"}>k.igorevitch88@yandex.ru</StyledContactMail>
    );
};

const StyledContactMail = styled.a`
    font-size: 58px;
    line-height: 70px;
    font-weight: 700;
    align-items: center;
    color: rgba(19, 176, 245, 1);
`