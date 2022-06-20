import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  ContainerTechImage,
  Text1,
  Text2,
  Text3,
  TextWrapper,
  Wrapper,
} from "./TechnologySlider.style";
import defaultTech from "/public/assets/technology/image-launch-vehicle-portrait.jpg";

type Props = {
  title: string;
  description: string;
  image: string | StaticImageData;
  view: { [key: string]: string };
  loading: boolean;
};

export default function TechnologySlider({
  title,
  description,
  image = defaultTech,
  view,
  loading,
}: Props) {
  return (
    <Wrapper>
      {!loading && (
        <>
          <ContainerTechImage>
            <Image
              src={image}
              width={view.width}
              height={view.height}
              layout="responsive"
              alt="rocket image background"
            />
          </ContainerTechImage>

          <TextWrapper>
            <Text1>THE TERMINOLOGY…</Text1>
            <Text2>{title}</Text2>
            <Text3>{description}</Text3>
          </TextWrapper>
        </>
      )}
    </Wrapper>
  );
}
