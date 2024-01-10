import React from 'react';
import styled from "styled-components";
import {SocialIcon} from "./SocialIcon";

type SocialItemPropsType = {
    iconId: string
    viewBox?: string
    width?: string
    height?: string
    href: string
}
export const SocialItem = (props: SocialItemPropsType) => {
    return (
        <StyledSocialItem>
            <StyledSocialLink href={props.href}>
                <SocialIcon iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
            </StyledSocialLink>
        </StyledSocialItem>
    );
};

const StyledSocialItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
`

const StyledSocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: rgba(102, 102, 102, 1);
    fill: rgba(102, 102, 102, 1);
`