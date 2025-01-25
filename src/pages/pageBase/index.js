import { Footer } from "components/footer";
import { Header } from "components/header";
import { FilmProvide } from "context/filmContext";
import { Outlet } from "react-router-dom";

export function PageBase() {
  return (
    <div>
      <Header />
      <FilmProvide>
        <Outlet />
      </FilmProvide>
      <Footer />
    </div>
  );
}
