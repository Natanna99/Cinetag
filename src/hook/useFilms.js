import { FilmContext } from "context/filmContext";
import { useContext } from "react";

export const useFilms = () => {
  const { listLike, setListLike } = useContext(FilmContext);

  const like = (id) => {
    const newLike = listLike.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          like: !item.like,
        };
      }
      return item;
    });

    setListLike(newLike);
  };

  return { like };
};
