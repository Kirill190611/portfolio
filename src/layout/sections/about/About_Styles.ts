import styled from "styled-components";
import {font} from "../../../styles/Common";

const StyledAbout = styled.section`

`

const StyledAboutDescription = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 400, Fmax: 18, Fmin: 16})}
`

export const S = {
    StyledAboutDescription,
    StyledAbout,
}