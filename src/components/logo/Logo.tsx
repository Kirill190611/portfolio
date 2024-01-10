import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogoLink href={"#"}>
            <Icon iconId={'logoIcon'}/>
        </StyledLogoLink>
    );
};

const StyledLogoLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`