import MainPagesComponents from "@/components/MainPagesComponents";
import TechnologySlider from "@/components/TechnologySlider";
import React from "react";
import spaceLaunchBackground from "/public/assets/technology/background-technology-desktop.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
const { v4: uuidv4 } = require("uuid");
import "swiper/css";
import "swiper/css/pagination";
import { RocketType } from "types/types";
import Layout from "@/components/Layout";
import { useMediaQuery } from "react-responsive";
import { useIsMounted } from "utils/isMounted";
import { AuthContext } from "context/AuthContext";
import { fetchServerlessPlanets } from "utils/fetchServerless";
import { ContainerSpinner } from "@/components/PlanetsSlider/PlanetsSlider.style";
import { ClipLoader } from "react-spinners";

export default function Technology() {
  const isMobile = useMediaQuery({ query: "(min-width: 10em)" });
  const isTablet = useMediaQuery({ query: "(min-width: 31em)" });
  const [mobileView, setMobileView] = React.useState(false);
  const isMounted = useIsMounted();

  const [technologyData, setTechnologyData] = React.useState<any>([{}]);
  const [color, setColor] = React.useState("#ffffff");
  const { user, loading, setLoading, error } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (isMounted()) {
      setMobileView(isMobile);
    }
  }, [isMounted, isMobile]);

  React.useEffect(() => {
    const dataFetching = async () => {
      if (user) {
        const token = await user.getIdToken();

        const data = await fetchServerlessPlanets("technology", token);

        setColor("#70bb24");
        setTechnologyData(data);
        setLoading(false);
      }
    };

    setLoading(true);
    dataFetching();
  }, [user]);

  return (
    <Layout titleMeta="Technology">
      <MainPagesComponents
        backgroundImage={spaceLaunchBackground}
        title={"03 SPACE LAUNCH 101"}
      >
        <Swiper
          // direction={"vertical"}
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
            bulletActiveClass: "tech-active-class",
            bulletClass: "swiper-tech",
            horizontalClass: "swiper-tech-position-container",
            renderBullet: (index, className) => {
              return `
            <div class='${className}'>${index + 1}</div>
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
          {technologyData.map((rocket: RocketType) => {
            const portraitImage = rocket.images?.portrait?.slice(1);
            const landscapeImage = rocket.images?.landscape?.slice(1);
            const viewImage = {
              width: mobileView ? "375px" : "515px",
              height: mobileView ? "170px" : "527px",
            };

            return (
              <SwiperSlide key={uuidv4()}>
                <TechnologySlider
                  view={viewImage}
                  image={mobileView ? landscapeImage : portraitImage}
                  title={rocket.name?.toUpperCase()}
                  description={rocket.description}
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
