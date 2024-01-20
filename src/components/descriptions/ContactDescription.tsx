import styled from "styled-components";
import {Theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

type ContactDescriptionPropsType = {
    content: string
}
export const ContactDescription = (props: ContactDescriptionPropsType) => {
    return (
        <StyledContactDescription>{props.content}</StyledContactDescription>
    );
};

const StyledContactDescription = styled.p`
    ${font({family: "'Jost', sans-serif", weight: 700, Fmax: 58, Fmin: 20})};
    text-align: center;
    color: ${Theme.lightTheme.textColors.secondary};
    margin: 0 0 35px 0;
    padding: 0 5px;
`