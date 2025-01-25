import { Banner } from "components/banner";
import { Card } from "components/card";
import { FilmContext } from "context/filmContext";
import { useContext } from "react";
import style from "./favorite.module.css";

export function Favorite() {
  const { listLike } = useContext(FilmContext);
  const favorite = listLike?.filter((item) => item.like === true);

  return (
    <div>
      <Banner />
      <div className={style.containerFavorite}>
        <h3>Favoritos</h3>
      </div>

      <div className={style.containerFavorite}>
        {favorite?.map((item) => (
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
