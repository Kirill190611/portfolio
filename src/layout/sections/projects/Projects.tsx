import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import {Menu} from "./projectMenu/Menu";
import {Project} from "./Project";
import projectImage1 from "../../../assets/images/project-images/project-1.webp"
import projectImage2 from "../../../assets/images/project-images/project-2.webp"
import projectImage3 from "../../../assets/images/project-images/project-3.webp"
import projectImage4 from "../../../assets/images/project-images/project-4.webp"
import projectImage5 from "../../../assets/images/project-images/project-5.webp"
import projectImage6 from "../../../assets/images/project-images/project-6.webp"
import {Container} from "../../../components/Container";
import {S} from "./Projects_Styles";

const projectsItems = ["All", "Landing page", "React", "SPA"]

const projectsData = [
    {
        title: "Project 1",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage1,
        alt: "Project 1",
    },
    {
        title: "Project 2",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage2,
        alt: "Project 2",
    },
    {
        title: "Project 3",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage3,
        alt: "Project 3",
    },
    {
        title: "Project 4",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage4,
        alt: "Project 4",
    },
    {
        title: "Project 5",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage5,
        alt: "Project 5",
    },
    {
        title: "Project 6",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, TS, React",
        src: projectImage6,
        alt: "Project 6",
    },
]

export const Projects: React.FC = () => {
    return (
        <S.StyledProjects>
            <Container>
                <FlexWrapper direction={"column"}
                             justify={"space-between"}
                             align={"center"}>
                    <SecondTitle title={"Projects"}/>
                    <MainDescription description={"Things I’ve built so far"}/>
                    <Menu menuItems={projectsItems}/>
                    <S.ProjectsContainer>

                        {projectsData.map((p, index) => {
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
