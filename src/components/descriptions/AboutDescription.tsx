import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type AboutDescriptionPropsType = {
    content: string
}
export const AboutDescription = (props: AboutDescriptionPropsType) => {
    return (
        <StyledAboutDescription>{props.content}</StyledAboutDescription>
    );
};

const StyledAboutDescription = styled.p`
    font-size: ${Theme.lightTheme.fontSize.secondary};
    line-height: 26px;
    font-weight: 400;
`