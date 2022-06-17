import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  DescriptionInfo,
  DistanceTimeContainer,
  Divider,
  PlanetDescription,
  PlanetsContainer,
  PlanetTitle,
  SliderWrapper,
  TitleStyle,
  Wrapper,
} from "./PlanetsSlider.style";
import { useMediaQuery } from "react-responsive";
import defaultMoon from "/public/assets/destination/image-moon.png";

type Props = {
  planetImage: string | StaticImageData;
  planetTitle: string;
  planetDescription: string;
  distance: string;
  time: string;
  loading: boolean;
};

export default function PlanetSlider({
  planetTitle,
  planetImage = defaultMoon,
  planetDescription,
  distance,
  time,
  loading,
}: Props) {
  const isTablet = useMediaQuery({ query: "(min-width: 31em)" });
  const isMobile = useMediaQuery({ query: "(max-width: 30em)" });
  return (
    <PlanetsContainer>
      {!loading ? (
        <>
          {isTablet && (
            <Image
              src={planetImage}
              layout="fixed"
              width={`${isTablet ? "445px" : "300px"}`}
              height={`${isTablet ? "445px" : "300px"}`}
              alt="tablet Image background"
            />
          )}
          {isMobile && (
            <Image
              src={planetImage}
              layout="fixed"
              width="170px"
              height="170px"
              alt="mobile Image background"
            />
          )}
        </>
      ) : (
        <></>
      )}

      {!loading && (
        <SliderWrapper>
          <PlanetTitle>{planetTitle}</PlanetTitle>
          <PlanetDescription>{planetDescription}</PlanetDescription>
          <Divider></Divider>
          <DistanceTimeContainer>
            <Wrapper>
              <TitleStyle>AVG. DISTANCE </TitleStyle>
              <DescriptionInfo>{distance}</DescriptionInfo>
            </Wrapper>
            <Wrapper>
              <TitleStyle>AVG. DISTANCE </TitleStyle>
              <DescriptionInfo>{time}</DescriptionInfo>
            </Wrapper>
          </DistanceTimeContainer>
        </SliderWrapper>
      )}
    </PlanetsContainer>
  );
}
