import React, {useState} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import {Project} from "./Project";
import projectImage1 from "../../../assets/images/project-images/project-1.webp"
import projectImage2 from "../../../assets/images/project-images/project-2.webp"
import projectImage3 from "../../../assets/images/project-images/project-3.webp"
import projectImage4 from "../../../assets/images/project-images/project-4.webp"
import projectImage5 from "../../../assets/images/project-images/project-5.webp"
import projectImage6 from "../../../assets/images/project-images/project-6.webp"
import {Container} from "../../../components/Container";
import {S} from "./Projects_Styles";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";

const tabsItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing Page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "SPA",
        status: "spa",
    },
]

const projectsData = [
    {
        title: "Project 1",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage1,
        alt: "Project 1",
        type: "spa",
    },
    {
        title: "Project 2",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage2,
        alt: "Project 2",
        type: "spa",
    },
    {
        title: "Project 3",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage3,
        alt: "Project 3",
        type: "react",
    },
    {
        title: "Project 4",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage4,
        alt: "Project 4",
        type: "landing",
    },
    {
        title: "Project 5",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage5,
        alt: "Project 5",
        type: "spa",
    },
    {
        title: "Project 6",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage6,
        alt: "Project 6",
        type: "landing",
    },
]

export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProjects = projectsData

    if (currentFilterStatus === "landing") {
        filteredProjects = projectsData.filter(project => project.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredProjects = projectsData.filter(project => project.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredProjects = projectsData.filter(project => project.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.StyledProjects>
            <Container>
                <FlexWrapper direction={"column"}
                             justify={"space-between"}
                             align={"center"}>
                    <SecondTitle title={"Projects"}/>
                    <MainDescription description={"Things I’ve built so far"}/>
                    <TabMenu tabsItems={tabsItems}
                             changeFilterStatus={changeFilterStatus}
                             currentFilterStatus={currentFilterStatus}/>
                    <S.ProjectsContainer>

                        {filteredProjects.map((p, index) => {
                            return <Project title={p.title}
                                            description={p.description}
                                            stack={p.stack}
                                            src={p.src}
                                            alt={p.alt}
                                            key={index}/>
                        })}

                    </S.ProjectsContainer>
                </FlexWrapper>
            </Container>
        </S.StyledProjects>
    );
};
