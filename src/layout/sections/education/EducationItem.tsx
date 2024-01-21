import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ThirdTitle} from "../../../components/titles/thirdTitle/ThirdTitle";
import {EducationUniversity} from "./EducationUniversity";
import {EducationPlace} from "./EducationPlace";
import {EducationLevel} from "./EducationLevel";
import {EducationPeriod} from "./EducationPeriod";
import {Theme} from "../../../styles/Theme.styled";

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
            <FlexWrapper justify={"space-between"}
                         direction={"column"}>
                <ThirdTitle title={props.title}/>
                <StyledEducationWrapper>
                    <EducationUniversity university={props.university}/>
                    <EducationPlace place={props.place}/>
                </StyledEducationWrapper>
            </FlexWrapper>
            <StyledEducationInfo>
                <EducationLevel level={props.level}/>
                <EducationPeriod period={props.period}/>
            </StyledEducationInfo>
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
    
    @media ${Theme.media.mobile} {
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        min-height: 100px;
    }
`

const StyledEducationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    
    @media ${Theme.media.tablet} {
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        min-height: 35px;
    }
`

const StyledEducationInfo = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    
    @media ${Theme.media.mobile} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`