import { device } from "@/styles/device";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  flex-direction: column;

  //
  position: absolute;
  top: 2rem;
  left: 25%;

  @media ${device.tablet} {
    flex-direction: row;
    position: relative;
    top: 0;
    left: 0;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 35rem;

  //
  position: absolute;
  @media ${device.tablet} {
    display: inline-block;
    width: 50%;
    position: relative;
    padding-left: 5%;
    top: 0;
  }
`;

////////////////////////////////

export const RoleCrew = styled.h1`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  @media ${device.tablet} {
    font-size: 3.2rem;
    line-height: 3.7rem;
    margin-top: 0.77em;
    margin-bottom: 0.77em;
  }
`;

export const NameCrew = styled.h1`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-transform: uppercase;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 5.6rem;
    line-height: 6.4rem;
  }
`;

export const DescriptionCrew = styled.h2`
  width: 75%;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: #d0d6f9;
  @media ${device.tablet} {
    font-size: 1.8rem;
    line-height: 3.2rem;
    width: 65%;
    text-align: justify;
  }
`;

////////////////////////////////

export const LineDividerCrew = styled.div`
  width: 100%;
  height: 1px;
  background-color: #383b4b;
  position: relative;
  @media ${device.tablet} {
    display: none;
  }
`;
