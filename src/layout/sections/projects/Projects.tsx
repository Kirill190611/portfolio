import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SecondTitle} from "../../../components/titles/secondTitle/SecondTitle";
import {MainDescription} from "../../../components/descriptions/MainDescription";
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {Project} from "./project/Project";
import projectImage1 from "../../../assets/images/project-images/project-1.webp"
import projectImage2 from "../../../assets/images/project-images/project-2.webp"
import projectImage3 from "../../../assets/images/project-images/project-3.webp"
import projectImage4 from "../../../assets/images/project-images/project-4.webp"
import projectImage5 from "../../../assets/images/project-images/project-5.webp"
import projectImage6 from "../../../assets/images/project-images/project-6.webp"
import {Container} from "../../../components/Container";

const projectsItems = ["All", "Landing page", "React", "SPA"]
export const Projects = () => {
    return (
        <Container>
            <StyledProjects>
                <FlexWrapper direction={"column"}
                             justify={"space-between"}
                             align={"center"}>
                    <SecondTitle title={"Projects"}/>
                    <MainDescription description={"Things I’ve built so far"}/>
                    <Menu menuItems={projectsItems}/>
                    <StyledProjectsContainer>
                        <Project title={"Project 1"}
                                 description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                                 stack={"HTML , JavaScript, TS, React"}
                                 src={projectImage1}
                                 alt={"Project 1"}/>
                        <Project title={"Project 2"}
                                 description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                                 stack={"HTML , JavaScript, TS, React"}
                                 src={projectImage2}
                                 alt={"Project 2"}/>
                        <Project title={"Project 3"}
                                 description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                                 stack={"HTML , JavaScript, TS, React"}
                                 src={projectImage3}
                                 alt={"Project 3"}/>
                        <Project title={"Project 4"}
                                 description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                                 stack={"HTML , JavaScript, TS, React"}
                                 src={projectImage4}
                                 alt={"Project 4"}/>
                        <Project title={"Project 5"}
                                 description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                                 stack={"TS, React"}
                                 src={projectImage5}
                                 alt={"Project 5"}/>
                        <Project title={"Project 6"}
                                 description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                                 stack={"HTML, JavaScript, TS, React, Redux"}
                                 src={projectImage6}
                                 alt={"Project 6"}/>
                    </StyledProjectsContainer>
                </FlexWrapper>
            </StyledProjects>
        </Container>
    );
};

const StyledProjects = styled.section`
    
`

const StyledProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-auto-rows: minmax(480px, 540px);
    gap: 20px 10px;
    width: 100%;
    align-content: center;
    justify-content: center;
`
