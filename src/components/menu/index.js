import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./menu.module.css";
import { Link } from "react-router-dom";
import ToggleTheme from "components/toggleTheme";

export function Menu({ closeMenu, menuSelected, select }) {
  return (
    <div className={style.containerMenu} onClick={(e) => menuSelected(e)}>
      <Link
        className={`${
          select === "home" ? style.menuItemSelect : style.menuItem
        }`}
        to={"/"}
        id="home"
      >
        <FontAwesomeIcon icon="fa-solid fa-house" />
        Inicio
      </Link>
      <Link
        className={`${
          select === "favorite" ? style.menuItemSelect : style.menuItem
        }`}
        to={"/favorite"}
        id="favorite"
      >
        <FontAwesomeIcon icon="fa-solid fa-heart" />
        Favorito
      </Link>
      <Link className={style.menuItemDesactive} disabled>
        <FontAwesomeIcon icon="fa-solid fa-layer-group" />
        Categoria
      </Link>
      <ToggleTheme />
      <FontAwesomeIcon
        icon="fa-solid fa-xmark"
        className={style.close}
        onClick={closeMenu}
      />
    </div>
  );
}
