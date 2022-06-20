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
  const isMobile = useMediaQuery({ query: "(max-width: 31em)" });
  const isTablet = useMediaQuery({ query: "(max-width: 52em)" });
  const isDestkop = useMediaQuery({ query: "(min-width: 64em)" });
  return (
    <PlanetsContainer>
      {!loading ? (
        <>
          {isMobile ? (
            <Image
              src={planetImage}
              layout="fixed"
              width="170px"
              height="170px"
              alt="Mobile Image background"
            />
          ) : isTablet ? (
            <Image
              src={planetImage}
              layout="fixed"
              width="300px"
              height="300px"
              alt="Tablet Image background"
            />
          ) : (
            ""
          )}
          {isDestkop && (
            <div
              style={{
                width: "50%",
                height: "60%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={planetImage}
                layout="fixed"
                width="445px"
                height="445px"
                alt="Destkop Image background"
              />
            </div>
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
