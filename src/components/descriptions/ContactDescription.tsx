import styled from "styled-components";

export const ContactDescription = () => {
    return (
        <StyledContactDescription>For any questions please mail me:</StyledContactDescription>
    );
};

const StyledContactDescription = styled.p`
    font-size: 58px;
    line-height: 70px;
    align-items: center;
    font-weight: 700;
    color: rgba(30, 14, 98, 1);
    margin: 0;
`