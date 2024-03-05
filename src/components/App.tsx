import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Header from "./Header/Header.components";
import Footer from "./Footer/Footer.components";

import type { RootState } from "../store/store";
import Home from "../pages/Home/Home.page";
import ShibaStory from "../pages/ShibaStory/Shiba.page";
import NotFoundPage from "../pages/NotFound.page";

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
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <div className={themeMode === "dark" ? "dark:text-white" : ""}>
      <Router>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shiba-story" element={<ShibaStory />} />
            <Route element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
