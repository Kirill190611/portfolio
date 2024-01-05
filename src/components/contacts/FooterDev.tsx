import React from 'react';
import styled from "styled-components";

export const FooterDev = () => {
    return (
        <StyledFooterDev>Designed and built by <span>Kirill Soldatov</span> with <span>Love</span> and <span>Coffee</span></StyledFooterDev>
    );
};

const StyledFooterDev = styled.p`
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    align-items: center;
    color: rgba(102, 102, 102, 1);
    
    span {
        color: rgba(231, 15, 170, 1);
    }
`