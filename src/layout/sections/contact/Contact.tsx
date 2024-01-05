import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ContactDescription} from "../../../components/descriptions/ContactDescription";
import {ContactMail} from "../../../components/contacts/ContactMail";

export const Contact = () => {
    return (
        <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
            <ContactDescription/>
            <ContactMail/>
        </FlexWrapper>
    );
};
