import React from 'react';
import styled from "styled-components";
import {SkillsIcon} from "./SkillsIcon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillDescription} from "./SkillDescription";

type SkillPropsType = {
    iconId: string
    viewBox?: string
    width?: string
    height?: string
    title: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <FlexWrapper direction={"column"}
                     align={"center"}
                     gap={"10px"}>
            <StyledSkill>
                <SkillsIcon iconId={props.iconId}
                            viewBox={props.viewBox}
                            width={props.width}
                            height={props.height}/>
            </StyledSkill>
            <SkillDescription title={props.title}/>
        </FlexWrapper>

    );
};

const StyledSkill = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120px;
    max-height: 120px;
`