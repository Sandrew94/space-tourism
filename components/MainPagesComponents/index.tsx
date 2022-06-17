import React from "react";
import Image, { StaticImageData } from "next/image";
import TitleMain from "../TitleMain";
import { BackgroundContainer, Wrapper } from "./MainPages.style";

type Props = {
  backgroundImage: StaticImageData;
  children: React.ReactNode;
  title: string;
};

export default function MainPagesComponents({
  backgroundImage,
  children,
  title,
}: Props) {
  return (
    <Wrapper>
      <BackgroundContainer>
        <Image
          src={backgroundImage}
          layout="fill"
          placeholder="blur"
          alt="background"
        />
      </BackgroundContainer>
      <TitleMain title={title} />
      {children}
    </Wrapper>
  );
}
