import { Banner } from "components/banner";
import style from "./home.module.css";
import { Card } from "components/card";
import { useContext } from "react";
import { FilmContext } from "context/filmContext";

export function Home() {
  const { listLike } = useContext(FilmContext);

  return (
    <div>
      <Banner />
      <div className={style.containerHome}>
        <h3>Videos disponiveis</h3>
      </div>

      <div className={style.containerHome}>
        {listLike?.map((item) => (
          <Card
            key={item.id}
            title={item?.title}
            img={item?.capa}
            id={item?.id}
            likeFilm={item?.like}
          />
        ))}
      </div>
    </div>
  );
}
