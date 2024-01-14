import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type FooterMobailPropsType = {
    phone: string
}
export const FooterMobail = (props: FooterMobailPropsType) => {
    return (
        <StyledFooterMobail href={"tel:+7 (920) 097 96 31"}>{props.phone}</StyledFooterMobail>
    );
};

const StyledFooterMobail = styled.a`
    font-size: ${Theme.lightTheme.fontSize.secondary};
    font-weight: 400;
    color: ${Theme.lightTheme.textColors.secondary};
`