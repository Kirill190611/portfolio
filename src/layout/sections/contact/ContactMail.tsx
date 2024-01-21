import React from 'react';
import {S} from "./Contact_Styles";

type ContactMailPropsType = {
    mail: string
}
export const ContactMail: React.FC<ContactMailPropsType> = (props: ContactMailPropsType) => {
    return (
        <S.ContactMail href={"mailto:k.igorevitch88@yandex.ru"}>{props.mail}</S.ContactMail>
    );
};

