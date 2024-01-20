import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

export const FooterDev = () => {
    return (
        <StyledFooterDev>Designed and built by <FooterAccentText>Kirill Soldatov</FooterAccentText></StyledFooterDev>
    );
};

const StyledFooterDev = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})};
    text-align: right;
`

const FooterAccentText = styled.span`
    color: ${Theme.lightTheme.textAccentColors.primaryAccent};
`