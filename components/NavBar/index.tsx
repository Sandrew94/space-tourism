import Image from "next/image";
import { useRouter } from "next/router";
import {
  Container,
  LineDivider,
  LinkStyle,
  Logo,
  MenuContainer,
  MenuListLi,
  MenuListUl,
} from "./NavBar.style";
import LogoImage from "/public/assets/logo/logo.svg";
import NoScrollLink from "../NoScrollLink";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./Sidebar";
const { v4: uuidv4 } = require("uuid");

export default function NavBar() {
  const router = useRouter();

  const isTablet = useMediaQuery({
    query: "(min-width: 77rem)",
  });

  const menuNavBar = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <Container>
      <Logo>
        <Image src={LogoImage} width="48px" height="48px" alt="Logo" />
      </Logo>
      <LineDivider></LineDivider>
      <Sidebar />
      {/* ONLY MOBILE L */}
      <MenuContainer>
        {/* ONLY TABLET OR MORE HUGE DEVICES */}
        <MenuListUl>
          {menuNavBar.map((destinations, idx) => {
            return (
              <MenuListLi key={uuidv4()}>
                <NoScrollLink href={`/${destinations.toLowerCase()}`} passHref>
                  <LinkStyle
                    active={
                      router.pathname === `/${destinations.toLowerCase()}`
                    }
                  >
                    {isTablet ? `0${idx} ${destinations}` : destinations}
                  </LinkStyle>
                </NoScrollLink>
              </MenuListLi>
            );
          })}
        </MenuListUl>
      </MenuContainer>
    </Container>
  );
}
