import { device } from "@/styles/device";
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5%;
  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
    padding: 0;
  }

  @media ${device.desktop} {
    padding: 1% 9% 1% 9%;
  }
`;

export const TitleStyle = styled.h1`
  font-family: "Barlow Condensed";
  font-style: regular;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  /* identical to box height */
  letter-spacing: 2.7px;
  paragraph-spacing: 1px;

  text-transform: uppercase;
  color: #ffffff;
  z-index: 50;

  @media ${device.tablet} {
    font-size: 2.8rem;
    line-height: 3rem;
    letter-spacing: 0.4725rem;
    letter-spacing: 0;
    paragraph-spacing: 0;
  }
`;

export const NumberPageStyle = styled.h1`
  padding: 0 2rem 0 2rem;
  font-family: "Barlow Condensed";
  font-style: bold;
  font-weight: 700;
  font-size: 1.9rem;
  line-height: 1.9rem;
  letter-spacing: 2.7px;
  paragraph-spacing: 1px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;

  @media ${device.tablet} {
    padding: 0 4rem 0 4rem;
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.4rem;
    letter-spacing: 0.4725rem;
  }
`;
