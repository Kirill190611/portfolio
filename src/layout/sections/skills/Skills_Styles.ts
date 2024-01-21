import styled from "styled-components";

// Skills styles

const StyledSkills = styled.section`

`

const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 120px));
    grid-auto-rows: minmax(120px, 160px);
    gap: 45px 60px;
    width: 100%;
    align-content: center;
    justify-content: center;
`


// Skill styles

const Skill = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120px;
    max-height: 120px;
`

export const S = {
    StyledSkills,
    SkillsContainer,
    Skill,
}