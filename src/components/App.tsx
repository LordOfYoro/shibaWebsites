import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Header from "./Header/Header.components";
import Footer from "./Footer/Footer.components";

import type { RootState } from "../store/store";
import Home from "../pages/Home/Home.page";
import ShibaStory from "../pages/ShibaStory/Shiba.page";

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App: React.FC = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  React.useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    }
    if (themeMode === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shiba-story" element={<ShibaStory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
