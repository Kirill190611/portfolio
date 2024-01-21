import React from 'react';
import {S} from "./Projects_Styles";

type ProjectTitlePropsType = {
    title: string
}
export const ProjectTitle: React.FC<ProjectTitlePropsType> = (props: ProjectTitlePropsType) => {
    return (
        <S.ProjectTile>{props.title}</S.ProjectTile>
    );
};
