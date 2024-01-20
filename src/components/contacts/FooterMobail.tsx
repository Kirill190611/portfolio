import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type FooterMobailPropsType = {
    phone: string
}
export const FooterMobail = (props: FooterMobailPropsType) => {
    return (
        <StyledFooterMobail href={"tel:+7 (920) 097 96 31"}>{props.phone}</StyledFooterMobail>
    );
};

const StyledFooterMobail = styled.a`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})}
    color: ${Theme.lightTheme.textColors.secondary};
`