import { device } from "@/styles/device";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const ContainerTechImage = styled.div`
  margin-top: 3rem;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;

  @media ${device.tablet} {
    width: 50%;
    margin-right: 5rem;
    padding-top: 0rem;
  }
  @media ${device.desktop} {
    width: 50%;
    padding-top: 5rem;
  }
`;

////////////////////////////////

export const Text1 = styled.p`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.68rem;
  letter-spacing: 0.236rem;

  color: #d0d6f9;
  margin-bottom: -4rem;
  padding-bottom: 5rem;
  @media ${device.tablet} {
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0.27rem;
  }
`;
export const Text2 = styled.p`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.75rem;
  color: #ffffff;
  padding-bottom: 2rem;

  @media ${device.tablet} {
    font-size: 5.6rem;
    line-height: 6.4rem;
  }
`;
export const Text3 = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  /* or 178% */

  color: #d0d6f9;
  width: 90%;
  text-align: center;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 3.2rem;
  }
`;
