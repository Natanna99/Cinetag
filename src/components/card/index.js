import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./card.module.css";
import { useFilms } from "hook/useFilms";
import { Link } from "react-router-dom";

export function Card({ title, img, id, likeFilm }) {
  const { like } = useFilms();

  const likeItem = (event) => {
    event.stopPropagation();
    like(id);
  };

  return (
    <div className={style.card}>
      <Link to={`/watch/${id}`} className={style.cardLink}>
        <img src={img} alt="placeholder" className={style.cardImg} />
      </Link>

      <div className={style.cardContent}>
        {title}
        <FontAwesomeIcon
          icon={likeFilm ? "fa-solid fa-heart" : "fa-regular fa-heart"}
          onClick={(e) => likeItem(e)}
        />
      </div>
    </div>
  );
}
