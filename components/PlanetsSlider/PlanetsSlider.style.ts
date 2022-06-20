import { device } from "@/styles/device";
import styled from "styled-components";

export const PlanetsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
  z-index: 9999;
  position: relative;
  width: 100%;
  height: 100vh;

  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }

  @media ${device.laptop} {
    flex-direction: row;
    height: 60vh;
  }
`;

export const SliderWrapper = styled.div`
  color: #fff;
  width: 40%;
  height: 75vh;
  @media ${device.mobileS} {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.laptop} {
    width: 40%;
    display: inline-block;
    padding-top: 10%;
  }
`;

export const PlanetTitle = styled.h1`
  padding: 2rem 0 2rem 0;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 5.6rem;
  line-height: 6.4rem;
  color: #ffffff;
  margin: 5rem 0 3rem 0;
  @media ${device.tablet} {
    font-size: 10rem;
    line-height: 11.5rem;
  }
`;

export const PlanetDescription = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #d0d6f9;
  text-align: justify;
  margin-top: -5rem;
  text-align: center;
  width: 100%;

  @media ${device.tablet} {
    font-size: 1.8rem;
    line-height: 3.2rem;
    text-align: center;
    width: 80%;
    padding-bottom: 5rem;
  }

  @media ${device.laptop} {
    text-align: justify;
  }
`;

export const DistanceTimeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media ${device.laptop} {
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -5rem;
`;

export const TitleStyle = styled.h3`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 0.23625rem;
  text-transform: uppercase;
  color: #d0d6f9;
  margin: 4rem 0 -3rem 0;
`;

export const DescriptionInfo = styled.h4`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3.2rem;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #383b4b;
  @media ${device.tablet} {
    width: 80%;
  }
`;

////////////////////////////////

export const ContainerSpinner = styled.div`
  z-index: 999999;
  position: absolute;
  top: 20%;
  left: 25vw;

  @media ${device.tablet} {
    left: 40vw;
    top: 30%;
  }
`;
