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
import { fetchServerlessPlanets } from "utils/fetchServerless";
import { ContainerSpinner } from "@/components/PlanetsSlider/PlanetsSlider.style";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  data: CrewType;
};

export default function CrewPage({}: Props) {
  const [crewData, setCrewData] = React.useState<any>([{}]);
  const [color, setColor] = React.useState("#ffffff");
  const { user, loading, setLoading, error } = React.useContext(AuthContext);

  React.useEffect(() => {
    const dataFetching = async () => {
      if (user) {
        const token = await user.getIdToken();

        const data = await fetchServerlessPlanets("crew", token);

        setColor("#70bb24");
        setCrewData(data);
        setLoading(false);
      }
    };

    setLoading(true);
    dataFetching();
  }, [user]);

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
          {error && <p>{error}</p>}

          {loading && (
            <ContainerSpinner>
              <ClipLoader size={200} loading={loading} color={color} />
            </ContainerSpinner>
          )}
          {crewData.map((crew: CrewType) => {
            const imageRoot = crew.images?.png?.slice(1);
            return (
              <SwiperSlide key={uuidv4()}>
                <CrewSlider
                  role={crew.role}
                  name={crew.name}
                  bio={crew.bio}
                  image={imageRoot}
                  loading={loading}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MainPagesComponents>
    </Layout>
  );
}
