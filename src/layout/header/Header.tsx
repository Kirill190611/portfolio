import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Social} from "../../components/social/Social";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/ModileMenu";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {S} from "./Header_Styles";

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}
                             align={"center"}
                             wrap={"wrap"}>
                    <Logo/>

                    {width <= breakpoint ? <MobileMenu/>
                                         : <DesktopMenu/>}

                    <Social/>
                </FlexWrapper>
            </Container>
        </S.StyledHeader>
    );
};
