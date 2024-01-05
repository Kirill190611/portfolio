import React from 'react';
import styled from "styled-components";

export const FooterMail = () => {
    return (
        <StyledFooterMail href={"mailto:k.igorevitch88@yandex.ru"}>k.igorevitch88@yandex.ru</StyledFooterMail>
    );
};

const StyledFooterMail = styled.a`
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: rgba(66, 68, 110, 1);
`