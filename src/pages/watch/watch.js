import { useParams } from "react-router-dom";
import style from "./watch.module.css";
import { Error } from "pages/error/error";
import { useEffect, useState } from "react";

export function Watch() {
  const param = useParams();
  const [movie, setMovie] = useState();
  const [loding, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const videoUrl = `https://my-json-server.typicode.com/Natanna99/cinetag-api/videos/${param?.id}`;

    fetch(videoUrl)
      .then((response) => {
        if (response.status === 404) {
          setMovie(null);
          setLoading(false);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [param?.id]);

  if (loding) {
    return <h3>Carregando...</h3>;
  }

  if (!movie) {
    return <Error />;
  }

  return (
    <div>
      <img
        src={movie?.capa}
        alt={movie?.title}
        className={style.containerImg}
      />
      <div className={style.containerVideo}>
        <video controls className={style.play}>
          <source src={movie?.play} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
