import MainPagesComponents from "@/components/MainPagesComponents";
import { PlanetInfo } from "types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
const { v4: uuidv4 } = require("uuid");
import "swiper/css";
import "swiper/css/pagination";
import destinationImage from "/public/assets/destination/background-destination-desktop.jpg";
import PlanetSlider from "@/components/PlanetsSlider";
import Layout from "@/components/Layout";
import React from "react";
import { AuthContext } from "context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import { ContainerSpinner } from "@/components/PlanetsSlider/PlanetsSlider.style";
import { usePlanets } from "hooks/usePlanets";

export default function Destination() {
  const { tokenId } = React.useContext(AuthContext);

  const {
    infoPlanet,
    initFetchPlanets,
    isFetchPlanetStatusPending,
    isFetchPlanetStatusError,
    isFetchPlanetStatusSuccess,
  } = usePlanets("destinations", tokenId);

  React.useEffect(() => {
    if (!tokenId) return;

    initFetchPlanets();
  }, [tokenId]);

  return (
    <Layout titleMeta="Destinations">
      <MainPagesComponents
        backgroundImage={destinationImage}
        title="01 PICK YOUR DESTINATION"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={"auto"}
          centeredSlides={true}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "destination-active-class",
            bulletClass: "swiper-pagination-destination",
            horizontalClass: "swiper-pagination-position-container",
            renderBullet: (index, className) => {
              const planets = ["MOON", "MARS", "EUROPA", "TITAN"];
              return `
                <div class='${className}'>${planets[index]}</div>
          `;
            },
          }}
          className="mySwiper"
        >
          {isFetchPlanetStatusError && (
            <p className="error">
              There was a problem to load the page, try again later
            </p>
          )}

          <ContainerSpinner>
            <ClipLoader
              size={200}
              loading={isFetchPlanetStatusPending}
              color={"#fff"}
            />
          </ContainerSpinner>

          {isFetchPlanetStatusSuccess &&
            infoPlanet?.map((planet: PlanetInfo) => {
              const imageRoot = planet.images?.png?.slice(1);
              return (
                <SwiperSlide key={uuidv4()}>
                  <PlanetSlider
                    planetImage={imageRoot}
                    planetTitle={planet?.name?.toLocaleUpperCase()}
                    planetDescription={planet.description}
                    distance={planet.distance}
                    time={planet.travel}
                    loading={isFetchPlanetStatusPending}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </MainPagesComponents>
    </Layout>
  );
}
