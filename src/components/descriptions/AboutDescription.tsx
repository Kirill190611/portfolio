import React from 'react';
import styled from "styled-components";
import {font} from "../../styles/Common";

type AboutDescriptionPropsType = {
    content: string
}
export const AboutDescription = (props: AboutDescriptionPropsType) => {
    return (
        <StyledAboutDescription>{props.content}</StyledAboutDescription>
    );
};

const StyledAboutDescription = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})}
`