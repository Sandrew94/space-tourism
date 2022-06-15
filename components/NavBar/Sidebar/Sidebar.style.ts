import { device } from "@/styles/device";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerSidebar = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuSidebar = styled(motion.div)`
  position: absolute;
  top: -6rem;
  /* right: 0; */
  right: -25rem;
  width: 25.4rem;
  height: 102vh;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  z-index: 99;
  display: flex;
  flex-direction: column;
`;

export const CrossIcon = styled.div`
  margin-left: auto;
  padding: 5rem 3rem 6rem 0;
`;
