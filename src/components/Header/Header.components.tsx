import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../store/theme/themeSlice";

import {
  AppBar,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

import NavigationDrawer from "../NavigationDrawer/NavigationDrawer.components";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (themeMode === "dark") {
      document.documentElement.classList.remove("dark");
    }
    if (themeMode === "light") {
      document.documentElement.classList.add("dark");
    }

    dispatch(toggleTheme());
  };

  return (
    <header>
      <AppBar position="static" className="bg-sky-700 dark:bg-slate-900">
        <Toolbar>
          <NavigationDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Les shibas d'Inari
          </Typography>
          <FormControlLabel
            sx={{ m: 2 }}
            control={
              <Switch
                color={themeMode === "light" ? "primary" : "secondary"}
                checked={themeMode === "dark"}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={themeMode === "light" ? "Light Mode" : "Dark Mode"}
          />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
