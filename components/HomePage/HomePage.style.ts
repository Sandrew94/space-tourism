import { device } from "@/styles/device";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled.div`
  height: 100%;
  z-index: 2;
  display: flex;
  height: 70vh;
  overflow-y: auto;

  @media ${device.tablet} {
    overflow-y: unset;
  }
`;

export const ContainerBackground = styled.div``;

////////////////////////////////

export const ContainerFooterHome = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media only screen and ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.mobileM} {
    flex-direction: column;
    height: 90vh;
  }

  @media ${device.mobileEx} {
    flex-direction: column;
    height: 80vh;
  }

  @media ${device.laptopL} {
    padding-top: 0rem;
    flex-direction: row;
  }

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const SpaceTextContainer = styled.div`
  width: 90%;
  text-align: center;

  @media ${device.mobileM} {
    margin-bottom: 4rem;
  }

  @media ${device.tablet} {
    width: 65%;
    text-align: center;
    padding-bottom: 4rem;
  }

  @media ${device.laptop} {
    padding-top: 7%;
    width: 45%;
    text-align: center;
  }

  @media ${device.laptopL} {
    padding-top: 0%;
    width: 29%;
    text-align: 0;
  }

  @media ${device.desktop} {
    padding-top: 0%;
    width: 21%;
    text-align: 0;
  }
`;

export const Text1 = styled(motion.p)`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 2.8rem;
  letter-spacing: 0.4725rem;
  color: #d0d6f9;
  padding-bottom: 2rem;
  @media ${device.tablet} {
    font-size: 4rem;
    line-height: 3.4rem;
  }

  @media ${device.desktop} {
    font-size: 4.8rem;
  }
`;

export const Text2 = styled(motion.span)`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 10rem;
  color: #ffffff;
  padding-bottom: 2rem;

  @media ${device.mobileL} {
    font-size: 23rem;
  }
  @media ${device.tablet} {
    font-size: 25rem;
    line-height: 17.2rem;
  }
`;

export const Text3 = styled(motion.p)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  /* or 178% */
  color: #d0d6f9;
  padding-top: 3rem;

  @media ${device.tablet} {
    font-size: 3.4rem;
    line-height: 3.2rem;
  }

  @media ${device.laptop} {
    text-align: center;
    font-size: 3.8rem;
    text-align: justify;
  }
`;

export const ExploreButtonContainer = styled.div`
  position: relative;
  margin-top: -6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonStatic = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  @media ${device.tablet} {
    width: 27.4rem;
    height: 27.4rem;
  }
`;

const exploreAnimFunc = (start: string, end: string) => keyframes`
 0% { height: ${start}; width: ${start};opacity: 0.3
 }
 100% { height: ${end}; width: ${end}; opacity: 0.1; }
`;

export const ButtonAnimation = styled.div`
  position: absolute;
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;

  ${ExploreButtonContainer}:hover & {
    animation-name: ${exploreAnimFunc("20rem", "30rem")};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @media ${device.tablet} {
      animation-name: ${exploreAnimFunc("27.4rem", "40rem")};
    }
  }

  @media ${device.tablet} {
    width: 27.4rem;
    height: 27.4rem;
  }
`;

export const ButtonText = styled.span`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 3.7rem;
  /* identical to box height */
  letter-spacing: 0.2rem;
  color: #0b0d17;
  z-index: 10;
  @media ${device.mobileS} {
    font-size: 2rem;
    line-height: 2.3rem;
  }

  @media ${device.tablet} {
    font-size: 3.2rem;
    line-height: 3.7rem;
  }
`;

export const TextStyle = styled.a`
  font-size: inherit;
`;
