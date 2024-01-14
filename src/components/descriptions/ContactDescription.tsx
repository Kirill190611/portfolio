import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";

type ContactDescriptionPropsType = {
    content: string
}
export const ContactDescription = (props: ContactDescriptionPropsType) => {
    return (
        <StyledContactDescription>{props.content}</StyledContactDescription>
    );
};

const StyledContactDescription = styled.p`
    font-size: ${Theme.lightTheme.titleFontSize.primary};
    align-items: center;
    font-weight: 700;
    color: ${Theme.lightTheme.textColors.secondary};
    margin: 0 0 35px 0;
`