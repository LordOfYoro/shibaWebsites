import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

import {
  IconButton,
  Divider,
  Box,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PetsIcon from "@mui/icons-material/Pets";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationDrawer: React.FC = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const topLinks: LinkRepresentation[] = [
    { url: "/", name: "Accueil", icon: <HomeIcon /> },
    { url: "/shiba-story", name: "Histoire du shiba", icon: <MenuBookIcon /> },
    { url: "/our-shiba", name: "Nos Shibas", icon: <PetsIcon /> },
    { url: "/hints", name: "Conseils", icon: <MenuBookIcon /> },
    {
      url: "/reservation",
      name: "Disponibilité / réservation",
      icon: <PetsIcon />,
    },
  ];

  const bottomLinks: LinkRepresentation[] = [
    { url: "/FAQ", name: "FAQ", icon: <LiveHelpIcon /> },
    { url: "/Contact", name: "Contact", icon: <MailIcon /> },
  ];

  type Anchor = "top" | "left" | "bottom" | "right";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {topLinks.map((linkRepresentation) => (
          <Link key={linkRepresentation.name} to={linkRepresentation.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{linkRepresentation.icon}</ListItemIcon>
                <ListItemText primary={linkRepresentation.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {bottomLinks.map((linkRepresentation) => (
          <Link key={linkRepresentation.name} to={linkRepresentation.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{linkRepresentation.icon}</ListItemIcon>
                <ListItemText primary={linkRepresentation.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton
              size="large"
              edge="start"
              color={themeMode === "light" ? "default" : "secondary"}
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationDrawer;
