import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundDestkop from "/public/assets/home/background-home-desktop.jpg";
import BackgroundTablet from "/public/assets/home/background-home-tablet.jpg";
import { useMediaQuery } from "react-responsive";
import {
  ButtonAnimation,
  ButtonStatic,
  ButtonText,
  ContainerFooterHome,
  ExploreButtonContainer,
  HomeContainer,
  SpaceTextContainer,
  Text1,
  Text2,
  Text3,
  TextStyle,
} from "./HomePage.style";
import { AnimatePresence, motion } from "framer-motion";
import TextSlide from "../TextSlide";

type Props = {};

export default function HomePage({}: Props) {
  const isLaptop = useMediaQuery({ query: "(min-width: 64em)" });

  const text1 = "SO, YOU WANT TO TRAVEL TO";
  const text2 = "SPACE";
  const text3Description =
    "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";

  const sentencePreTitle = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      },
    },
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const descriptionSentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.02,
      },
    },
  };

  return (
    <>
      {isLaptop ? (
        <Image
          src={BackgroundDestkop}
          layout="fill"
          objectFit="cover"
          alt="Background Destkop"
        />
      ) : (
        <Image
          src={BackgroundTablet}
          layout="fill"
          objectFit="cover"
          alt="Background Tablet"
        />
      )}
      <HomeContainer>
        <ContainerFooterHome>
          <SpaceTextContainer>
            <AnimatePresence>
              <Text1
                as={motion.p}
                key={text1}
                variants={sentencePreTitle}
                initial="hidden"
                animate="visible"
              >
                <TextSlide text={text1} letterConfig={letter} />
              </Text1>

              <Text2
                as={motion.span}
                key={text2}
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                <TextSlide text={text2} letterConfig={letter} />
              </Text2>

              <Text3
                as={motion.p}
                key={text3Description}
                variants={descriptionSentence}
                initial="hidden"
                animate="visible"
              >
                <TextSlide text={text3Description} letterConfig={letter} />
              </Text3>
            </AnimatePresence>
          </SpaceTextContainer>
          <ExploreButtonContainer>
            <Link href="destination">
              <ButtonStatic>
                <ButtonText>
                  <TextStyle role="button">EXPLORE</TextStyle>
                </ButtonText>
                <ButtonAnimation></ButtonAnimation>
              </ButtonStatic>
            </Link>
          </ExploreButtonContainer>
        </ContainerFooterHome>
      </HomeContainer>
    </>
  );
}
