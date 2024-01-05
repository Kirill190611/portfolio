import React from 'react';
import styled from "styled-components";

export const FooterMobail = () => {
    return (
        <StyledFooterMobail href={"tel:+7 (920) 097 96 31"}>+7-920-097-96-31</StyledFooterMobail>
    );
};

const StyledFooterMobail = styled.a`
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: rgba(66, 68, 110, 1);
`