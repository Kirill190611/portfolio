import React from "react";
import {S} from "./Contact_Styles";

type ContactDescriptionPropsType = {
    content: string
}
export const ContactDescription: React.FC<ContactDescriptionPropsType> = (props: ContactDescriptionPropsType) => {
    return (
        <S.ContactDescription>{props.content}</S.ContactDescription>
    );
};

