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
            <a href={props.href}>
                <SocialIcon iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
            </a>
        </StyledSocialItem>
    );
};

const StyledSocialItem = styled.li`

`
