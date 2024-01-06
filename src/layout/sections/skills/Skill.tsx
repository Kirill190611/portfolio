import React from 'react';
import styled from "styled-components";
import {SkillsIcon} from "./SkillsIcon";

type SkillPropsType = {
    iconId: string
    viewBox?: string
    width?: string
    height?: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillsIcon iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120px;
    max-height: 120px;
`