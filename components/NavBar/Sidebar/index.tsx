import React from "react";
import { LinkStyle, MenuListLi, MenuListUl } from "../NavBar.style";
import Image from "next/image";
import openSidebar from "/public/assets/sidebar/sidebar-logo.svg";
import cross from "/public/assets/sidebar/cross-close-sidebar.svg";
import { ContainerSidebar, CrossIcon, MenuSidebar } from "./Sidebar.style";
import NoScrollLink from "@/components/NoScrollLink";
const { v4: uuidv4 } = require("uuid");
import { AnimatePresence, motion } from "framer-motion";
import { bounceEase } from "utils/easingFunction";

export default function Sidebar() {
  const [toggle, setToggle] = React.useState(false);
  const menuNavBar = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  const handlerActiveSidebar = () => {
    setToggle(!toggle);
  };

  const bounce = {
    duration: 1.2,
    ease: bounceEase,
  };

  const sidebarTransition = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      right: 0,
      transition: bounce,
    },
  };

  return (
    <ContainerSidebar>
      <Image
        src={openSidebar}
        onClick={handlerActiveSidebar}
        alt="Open Sidebar"
      />
      {toggle && (
        <AnimatePresence>
          <MenuSidebar
            as={motion.div}
            key={uuidv4()}
            variants={sidebarTransition}
            initial="hidden"
            animate="visible"
          >
            <CrossIcon>
              <Image
                src={cross}
                onClick={handlerActiveSidebar}
                alt="Close Sidebar"
              />
            </CrossIcon>
            <MenuListUl>
              {menuNavBar.map((destinations, idx) => {
                return (
                  <MenuListLi key={uuidv4()}>
                    <NoScrollLink
                      href={`/${destinations.toLowerCase()}`}
                      passHref
                    >
                      <LinkStyle>
                        0{idx} {destinations}
                      </LinkStyle>
                    </NoScrollLink>
                  </MenuListLi>
                );
              })}
            </MenuListUl>
          </MenuSidebar>
        </AnimatePresence>
      )}
    </ContainerSidebar>
  );
}
