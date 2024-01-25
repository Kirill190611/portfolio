import React from 'react';
import {MainTitle} from "../../../components/titles/mainTitle/MainTitle";
import photo from "../../../assets/images/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Promo_Styles";
import Typewriter from "typewriter-effect";

export const Promo: React.FC = () => {
    return (
        <Container>
            <S.Promo>
                <FlexWrapper justify={"space-around"}
                             align={"center"}
                             height={"60vh"}
                             wrap={"wrap"}
                             margin={"75px 0"}>
                    <S.TextContainer>
                        <S.PromoText>Hi There, <br/> I am <S.AccentText>Kirill Soldatov</S.AccentText></S.PromoText>
                        <MainTitle>
                            <p>A web developer.</p>
                            <Typewriter
                                options={{
                                    strings: ["A Web developer", "A Front Developer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                }}/>
                        </MainTitle>
                    </S.TextContainer>
                    <S.PhotoWrapper>
                        <S.Photo src={photo}
                                 alt={"It's me"}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </S.Promo>
        </Container>
    );
};
