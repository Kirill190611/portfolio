import React from 'react';
import {S} from "./Projects_Styles";

type ProjectStackDescriptionPropsType = {
    stack: string
}
export const ProjectStackDescription: React.FC<ProjectStackDescriptionPropsType> = (props: ProjectStackDescriptionPropsType) => {
    return (
        <S.ProjectStackDescription>
            Tech stack : <span>{props.stack}</span>
        </S.ProjectStackDescription>
    );
};
