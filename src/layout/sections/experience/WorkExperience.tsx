import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ThirdTitle} from "../../../components/titles/ThirdTitle";
import {WorkCompany} from "../../../components/descriptions/WorkCompany";
import {WorkPlace} from "../../../components/descriptions/WorkPlace";
import {WorkTime} from "../../../components/descriptions/WorkTime";
import {WorkPeriod} from "../../../components/descriptions/WorkPeriod";
import {StyledListItem} from "../../../components/lists/StyledListIem";
import {StyledList} from "../../../components/lists/StyledList";

export const WorkExperience = () => {
    return (
        <section>
            <SecondTitle title={"Work Experience"}/>
            <StyledList>
                <StyledListItem>
                    <FlexWrapper justify={"space-between"} direction={"column"}>
                        <ThirdTitle title={"SQA Engineer"}/>
                        <FlexWrapper justify={"space-between"}>
                            <WorkCompany company={"LG Electronics RUS"}/>
                            <WorkPlace place={"Russia, Moscow Region"}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} align={"start"} direction={"column"}>
                        <WorkTime time={"Full Time"}/>
                        <WorkPeriod period={"Feb 2018 - Dec 2022"}/>
                    </FlexWrapper>
                </StyledListItem>
                <StyledListItem>
                    <FlexWrapper justify={"space-between"} direction={"column"}>
                        <ThirdTitle title={"SQA Leading Engineer"}/>
                        <FlexWrapper justify={"space-between"}>
                            <WorkCompany company={"LG Electronics RUS"}/>
                            <WorkPlace place={"Russia, Moscow Region"}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} align={"start"} direction={"column"}>
                        <WorkTime time={"Full Time"}/>
                        <WorkPeriod period={"May 2022 - Dec 2022"}/>
                    </FlexWrapper>
                </StyledListItem>
                <StyledListItem>
                    <FlexWrapper justify={"space-between"} direction={"column"}>
                        <ThirdTitle title={"Process Engineer"}/>
                        <FlexWrapper justify={"space-between"}>
                            <WorkCompany company={"Sintec"}/>
                            <WorkPlace place={"Russia, Obninsk"}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} align={"start"} direction={"column"}>
                        <WorkTime time={"Full Time"}/>
                        <WorkPeriod period={"Dec 2022 - present time"}/>
                    </FlexWrapper>
                </StyledListItem>
            </StyledList>
        </section>
    );
};

