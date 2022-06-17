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
import { fetchServerlessPlanets } from "utils/fetchServerless";
import ClipLoader from "react-spinners/ClipLoader";
import { ContainerSpinner } from "@/components/PlanetsSlider/PlanetsSlider.style";

export default function Destination() {
  const [planetData, setPlanetData] = React.useState<any>([{}]);
  const [color, setColor] = React.useState("#ffffff");
  const { user, loading, setLoading, error } = React.useContext(AuthContext);

  React.useEffect(() => {
    const dataFetching = async () => {
      if (user) {
        const token: string = await user.getIdToken();

        const data = await fetchServerlessPlanets("destinations", token);

        setColor("#70bb24");
        setPlanetData(data);
        setLoading(false);
      }
    };

    setLoading(true);
    dataFetching();
  }, [user]);

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
          {error && <p>{error}</p>}

          {loading && (
            <ContainerSpinner>
              <ClipLoader size={200} loading={loading} color={color} />
            </ContainerSpinner>
          )}

          {planetData.map((planet: PlanetInfo) => {
            const imageRoot = planet.images?.png?.slice(1);
            return (
              <SwiperSlide key={uuidv4()}>
                <PlanetSlider
                  planetImage={imageRoot}
                  planetTitle={planet?.name?.toLocaleUpperCase()}
                  planetDescription={planet.description}
                  distance={planet.distance}
                  time={planet.travel}
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
