import React from 'react';
import {SkillsIcon} from "./SkillsIcon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillDescription} from "./SkillDescription";
import {S} from "./Skills_Styles";

type SkillPropsType = {
    iconId: string
    viewBox?: string
    width?: string
    height?: string
    title: string
}
export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <FlexWrapper direction={"column"}
                     align={"center"}
                     gap={"10px"}>
            <S.Skill>
                <SkillsIcon iconId={props.iconId}
                            viewBox={props.viewBox}
                            width={props.width}
                            height={props.height}/>
            </S.Skill>
            <SkillDescription title={props.title}/>
        </FlexWrapper>
    );
};
