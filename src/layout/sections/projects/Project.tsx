import React from 'react';
import {ProjectTitle} from "./ProjectTitle";
import {ProjectDescription} from "./ProjectDescription";
import {ProjectStackDescription} from "./ProjectStackDescription";
import {S} from "./Projects_Styles";

type ProjectPropsType = {
    title: string
    description: string
    stack: string
    src: string
    alt: string
}
export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ProjectImage src={props.src}
                          alt={props.alt}/>
            <S.DescriptionWrapper>
                <ProjectTitle title={props.title}/>
                <ProjectDescription description={props.description}/>
                <ProjectStackDescription stack={props.stack}/>
                <S.ButtonsWrapper>
                    <S.ButtonsProject href={"#"}>Live Preview</S.ButtonsProject>
                    <S.ButtonsProject href={"#"}>View Code</S.ButtonsProject>
                </S.ButtonsWrapper>
            </S.DescriptionWrapper>
        </S.Project>
    );
};
