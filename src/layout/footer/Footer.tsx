import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FooterMobail} from "./FooterMobail";
import {FooterMail} from "./FooterMail";
import {FooterDev} from "./FooterDev";
import {Container} from "../../components/Container";
import {FooterSocial} from "./FooterSocial";
import {FooterMenu} from "./FooterMenu";
import {S} from "./Footer_Styles";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Footer: React.FC = () => {
    return (
        <Container>
            <S.Footer>
                <S.FooterContactWrapper>
                    <Logo/>
                    <FooterMobail phone={"+7-920-097-96-31"}
                                  href={"tel:+7 (920) 097 96 31"}/>
                    <FooterMail mail={"k.igorevitch88@yandex.ru"}
                                href={"mailto:k.igorevitch88@yandex.ru"}/>
                    <FooterSocial/>
                </S.FooterContactWrapper>
                <FlexWrapper justify={"space-between"}
                             align={"center"}>
                    <FooterMenu menuItems={items}/>
                    <FooterDev/>
                </FlexWrapper>
            </S.Footer>
        </Container>
    );
};
