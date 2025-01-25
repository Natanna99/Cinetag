import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./header.module.css";
import { Input } from "components/input";
import { useState } from "react";
import { Menu } from "components/menu";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [select, setSelect] = useState("home");

  const menuSelected = (e) => {
    switch (e.target.id) {
      case "home":
        setSelect("home");
        break;
      case "favorite":
        setSelect("favorite");
        break;
      default:
        return;
    }
  };

  return (
    <div className={style.containerHeader}>
      <div className={style.containerMenuInput}>
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className={style.iconMenu}
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && (
          <Menu
            closeMenu={() => setOpenMenu(!openMenu)}
            menuSelected={menuSelected}
            select={select}
          />
        )}
        <Input placeholder={"Buscar"} />
      </div>

      <div className={style.containerLogo}>
        <FontAwesomeIcon
          icon="fa-solid fa-clapperboard"
          className={style.iconLogo}
        />
        <h4 className={style.logo}>CineTag</h4>
      </div>
    </div>
  );
}
