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
                <StyledEducationWrapper>
                    <EducationUniversity university={props.university}/>
                    <EducationPlace place={props.place}/>
                </StyledEducationWrapper>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} align={"end"} direction={"column"} gap={"10px"}>
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
    margin-bottom: 30px;
    
    &:last-child {
        margin-bottom: 0;
    }
`

const StyledEducationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`