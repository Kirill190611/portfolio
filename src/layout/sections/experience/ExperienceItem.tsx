import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ThirdTitle} from "../../../components/titles/ThirdTitle";
import {ExperienceCompany} from "./ExperienceCompany";
import {ExperiencePlace} from "./ExperiencePlace";
import {ExperienceTime} from "./ExperienceTime";
import {ExperiencePeriod} from "./ExperiencePeriod";

type ExperienceItemPropsType = {
    title: string
    company: string
    place: string
    time: string
    period: string
}
export const ExperienceItem = (props: ExperienceItemPropsType) => {
    return (
        <StyledExperienceItem>
            <FlexWrapper justify={"space-between"} direction={"column"}>
                <ThirdTitle title={props.title}/>
                <StyledExperienceWrapper>
                    <ExperienceCompany company={props.company}/>
                    <ExperiencePlace place={props.place}/>
                </StyledExperienceWrapper>
            </FlexWrapper>
                <FlexWrapper justify={"space-between"} align={"end"} direction={"column"} gap={"10px"}>
                    <ExperienceTime time={props.time}/>
                    <ExperiencePeriod period={props.period}/>
                </FlexWrapper>
        </StyledExperienceItem>
    );
};


const StyledExperienceItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    
    &:last-child {
        margin-bottom: 0;
    }
`

const StyledExperienceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
`