import React from 'react';
import {SecondTitle} from "../../../components/titles/SecondTitle";
import {StyledListItem} from "../../../components/lists/StyledListIem";
import {ThirdTitle} from "../../../components/titles/ThirdTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {WorkCompany} from "../../../components/descriptions/WorkCompany";
import {WorkPlace} from "../../../components/descriptions/WorkPlace";
import {WorkTime} from "../../../components/descriptions/WorkTime";
import {WorkPeriod} from "../../../components/descriptions/WorkPeriod";
import {StyledList} from "../../../components/lists/StyledList";

export const Education = () => {
    return (
        <section>
            <SecondTitle title={"Education"}/>
            <StyledList>
                <StyledListItem>
                    <FlexWrapper justify={"space-between"} direction={"column"}>
                        <ThirdTitle title={"Mechatronics and Robotics"}/>
                        <FlexWrapper justify={"space-between"}>
                            <WorkCompany company={"Bauman Moscow State Technical University"}/>
                            <WorkPlace place={"Kaluga"}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} align={"start"} direction={"column"}>
                        <WorkTime time={"Bachelor degree"}/>
                        <WorkPeriod period={"Sep 2012 - Jun 2016"}/>
                    </FlexWrapper>
                </StyledListItem>
                <StyledListItem>
                    <FlexWrapper justify={"space-between"} direction={"column"}>
                        <ThirdTitle title={"Information Systems and Technologies"}/>
                        <FlexWrapper justify={"space-between"}>
                            <WorkCompany company={"KGU K.E. Tsiolkovskogo"}/>
                            <WorkPlace place={"Kaluga"}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} align={"start"} direction={"column"}>
                        <WorkTime time={"Master degree"}/>
                        <WorkPeriod period={"Sep 2019 - Feb 2021"}/>
                    </FlexWrapper>
                </StyledListItem>
            </StyledList>
        </section>
    );
};
