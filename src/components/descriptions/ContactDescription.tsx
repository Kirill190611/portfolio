import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

export const ContactDescription = () => {
    return (
        <StyledContactDescription>For any questions please mail me:</StyledContactDescription>
    );
};

const StyledContactDescription = styled.p`
    font-size: 58px;
    align-items: center;
    font-weight: 700;
    color: ${Theme.lightTheme.textColors.secondary};
    margin: 0 0 35px 0;
`