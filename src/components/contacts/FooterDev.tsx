import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

export const FooterDev = () => {
    return (
        <StyledFooterDev>Designed and built by <FooterAccentText>Kirill Soldatov</FooterAccentText></StyledFooterDev>
    );
};

const StyledFooterDev = styled.p`
    font-size: ${Theme.lightTheme.fontSize.secondary};
    font-weight: 400;
    align-items: center;
`

const FooterAccentText = styled.span`
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
`