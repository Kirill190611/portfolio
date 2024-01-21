import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ContactDescription} from "./ContactDescription";
import {ContactMail} from "./ContactMail";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles";

export const Contact: React.FC = () => {
    return (
        <Container>
            <S.ContactSection>
                <FlexWrapper justify={"center"}
                             align={"center"}
                             direction={"column"}>
                    <ContactDescription content={"For any questions please mail me:"}/>
                    <ContactMail mail={"k.igorevitch88@yandex.ru"}/>
                </FlexWrapper>
            </S.ContactSection>
        </Container>
    );
};
