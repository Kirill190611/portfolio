import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ThirdTitle} from "../../../components/titles/ThirdTitle";
import {EducationUniversity} from "./EducationUniversity";
import {EducationPlace} from "./EducationPlace";
import {EducationLevel} from "./EducationLevel";
import {EducationPeriod} from "./EducationPeriod";

type EducationItemPropsType = {
    title: string
    university: string
    place: string
    level: string
    period: string
}
export const EducationItem = (props: EducationItemPropsType) => {
    return (
        <StyledEducationItem>
            <FlexWrapper justify={"space-between"} direction={"column"}>
                <ThirdTitle title={props.title}/>
                <FlexWrapper justify={"space-between"}>
                    <EducationUniversity university={props.university}/>
                    <EducationPlace place={props.place}/>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} align={"start"} direction={"column"}>
                <EducationLevel level={props.level}/>
                <EducationPeriod period={props.period}/>
            </FlexWrapper>
        </StyledEducationItem>
    );
};

const StyledEducationItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`