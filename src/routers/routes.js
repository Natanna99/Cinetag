import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/home/home";
import { Watch } from "pages/watch/watch";
import { Favorite } from "pages/favorite/favorite";
import { Error } from "pages/error/error";
import { PageBase } from "pages/pageBase";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="watch/:id" element={<Watch />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
