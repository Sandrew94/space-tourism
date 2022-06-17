import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  DescriptionCrew,
  ImageContainer,
  LineDividerCrew,
  NameCrew,
  RoleCrew,
  TextContainer,
  Wrapper,
} from "./CrewSlider.style";
import defaultCrew from "/public/assets/crew/image-douglas-hurley.png";

type Props = {
  role: string;
  name: string;
  bio: string;
  image: StaticImageData | string;
  loading: boolean;
};

export default function CrewSlider({
  role,
  name,
  bio,
  image = defaultCrew,
  loading,
}: Props) {
  return (
    <Wrapper>
      {!loading && (
        <>
          <TextContainer>
            <RoleCrew>{role}</RoleCrew>
            <NameCrew>{name}</NameCrew>
            <DescriptionCrew>{bio}</DescriptionCrew>
          </TextContainer>
          <ImageContainer>
            <Image src={image} width={568} height={712} alt={role} />
            <LineDividerCrew />
          </ImageContainer>
        </>
      )}
    </Wrapper>
  );
}
