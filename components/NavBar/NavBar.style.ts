import { device } from "@/styles/device";
import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 99;
  @media ${device.mobileS} {
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 10;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  width: 50%;
  height: 9.6rem;
  margin-left: -3rem;
  justify-content: left;

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: flex;
    width: 30%;
  }

  @media ${device.laptop} {
    width: 30%;
  }
`;

export const MenuListUl = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const MenuListLi = styled.li`
  padding-left: 5rem;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.27rem;
  color: #ffffff;
  @media ${device.mobileS} {
    margin-right: auto;
    padding-left: 0;
    padding-top: 3.5rem;
    font-size: 1.8rem;
  }
  @media ${device.tablet} {
    margin-right: 0;
    padding-left: 5rem;
    padding-top: 0;
    font-size: 1.6rem;
  }
`;

export const LinkStyle = styled.a`
  font-size: inherit;
  padding-bottom: 3.5rem;

  ${MenuListLi}:hover & {
    border-bottom: 4px solid #fff;
    opacity: 0.5;
    transition: border-bottom 0.6s;
  }
`;
////////////////////////////////////////////////////////////////

export const LineDivider = styled.div`
  display: flex;
  position: relative;
  flex-grow: 3;
  width: 30%;
  height: 0.1rem;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  z-index: 1;

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: flex;
    visibility: hidden;
    width: 10%;
  }

  @media ${device.laptop} {
    visibility: hidden;
    width: 10%;
  }

  @media ${device.laptopL} {
    visibility: unset;
    width: 30;
  }
`;

////////////////////////////////////////////////////////////////

export const Logo = styled.div`
  display: flex;
  flex-grow: 1;
  width: 50%;
  justify-content: flex-start;
  padding-left: 10%;
  @media ${device.tablet} {
    width: 10%;
    justify-content: center;
    padding-left: 0;
  }
`;

//////////////////////////////////
