import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {Container} from "../../components/Container";

const StyledHeader = styled.header`
    font-weight: normal;
    font-style: normal;
    min-height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px 0;

    @media ${Theme.media.mobile} {
        padding: 10px 0;
    }
`

export const S = {
    StyledHeader,
}