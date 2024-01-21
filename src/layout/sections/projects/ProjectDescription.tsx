import React from 'react';
import {S} from "./Projects_Styles";

type ProjectDescriptionPropsType = {
    description: string
}
export const ProjectDescription: React.FC<ProjectDescriptionPropsType> = (props: ProjectDescriptionPropsType) => {
    return (
        <S.ProjectDescription>{props.description}</S.ProjectDescription>
    );
};
