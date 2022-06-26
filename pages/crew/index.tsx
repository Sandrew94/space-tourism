import crewImage from "/public/assets/crew/background-crew-desktop.jpg";
import MainPagesComponents from "@/components/MainPagesComponents";
import React from "react";
import { CrewType } from "types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
const { v4: uuidv4 } = require("uuid");
import "swiper/css";
import "swiper/css/pagination";
import CrewSlider from "@/components/CrewSlider";
import Layout from "@/components/Layout";
import { AuthContext } from "context/AuthContext";
import { ContainerSpinner } from "@/components/PlanetsSlider/PlanetsSlider.style";
import ClipLoader from "react-spinners/ClipLoader";
import { usePlanets } from "hooks/usePlanets";

type Props = {
  data: CrewType;
};

export default function CrewPage({}: Props) {
  const { tokenId } = React.useContext(AuthContext);

  const {
    infoPlanet,
    initFetchPlanets,
    isFetchPlanetStatusPending,
    isFetchPlanetStatusError,
    isFetchPlanetStatusSuccess,
  } = usePlanets("crew", tokenId);

  React.useEffect(() => {
    if (!tokenId) return;

    initFetchPlanets();
  }, [tokenId]);

  return (
    <Layout titleMeta="Crew">
      <MainPagesComponents
        backgroundImage={crewImage}
        title={"02 MEET YOUR CREW"}
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
            bulletActiveClass: "crew-active-class",
            bulletClass: "swiper-pagination-crew",
            horizontalClass: "swiper-pagination-position-crew",
            modifierClass: "",
            renderBullet: (_, className) => {
              return `
          <span class='${className}'></span>
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
            infoPlanet.map((crew: CrewType) => {
              const imageRoot = crew.images?.png?.slice(1);
              return (
                <SwiperSlide key={uuidv4()}>
                  <CrewSlider
                    role={crew.role}
                    name={crew.name}
                    bio={crew.bio}
                    image={imageRoot}
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
