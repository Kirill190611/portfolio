import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type FooterMailPropsType = {
    mail: string
}
export const FooterMail = (props: FooterMailPropsType) => {
    return (
        <StyledFooterMail href={"mailto:k.igorevitch88@yandex.ru"}>{props.mail}</StyledFooterMail>
    );
};

const StyledFooterMail = styled.a`
    font-size: ${Theme.lightTheme.fontSize.secondary};
    font-weight: 400;
    color: ${Theme.lightTheme.textColors.secondary};
`