import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/home/home";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <div
      // style={{
      //   background: "var(--background)",
      //   width: "100%",
      //   height: "100vh",
      // }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
