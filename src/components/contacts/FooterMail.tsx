import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type FooterMailPropsType = {
    mail: string
}
export const FooterMail = (props: FooterMailPropsType) => {
    return (
        <StyledFooterMail href={"mailto:k.igorevitch88@yandex.ru"}>{props.mail}</StyledFooterMail>
    );
};

const StyledFooterMail = styled.a`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})}
    color: ${Theme.lightTheme.textColors.secondary};
`