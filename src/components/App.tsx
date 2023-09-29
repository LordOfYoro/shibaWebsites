import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header/Header.components";
import Footer from "./Footer/Footer.components";

import type { RootState } from "../store/store";
import Home from "../pages/Home/Home.page";

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
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
