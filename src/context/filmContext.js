import React, { createContext, useEffect, useState } from "react";
export const FilmContext = createContext();

export function FilmProvide({ children }) {
  const [listLike, setListLike] = useState();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Natanna99/cinetag-api/videos")
      .then((res) => res.json())
      .then((data) => {
        setListLike(data);
      });
  }, []);

  return (
    <FilmContext.Provider value={{ listLike, setListLike }}>
      {children}
    </FilmContext.Provider>
  );
}
