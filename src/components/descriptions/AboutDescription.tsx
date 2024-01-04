import React from 'react';
import styled from "styled-components";

type AboutDescriptionPropsType = {
    content: string
}
export const AboutDescription = (props: AboutDescriptionPropsType) => {
    return (
        <StyledAboutDescription>{props.content}</StyledAboutDescription>
    );
};

const StyledAboutDescription = styled.p`
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
`