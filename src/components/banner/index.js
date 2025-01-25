import { Carousel } from "react-bootstrap";
import banners from "./../../json/banner.json";
import style from "./banner.module.css";

export function Banner() {
  return (
    <div className={style.container}>
      <Carousel controls={false} indicators={false}>
        {banners.map((banner) => (
          <Carousel.Item className={style.containerBanner}>
            <img
              src={banner?.link}
              alt={banner?.title}
              className={style.containerImg}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
