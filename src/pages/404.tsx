import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
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
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PetsIcon from "@mui/icons-material/Pets";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../components/Footer/Footer.components";
import "../styles/global.css";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const footerStyle = {
  position: "fixed",
  width: "100%",
  bottom: 0,
};

const NotFoundPage: React.FC<PageProps> = () => {
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
    <>
      <header>
        <AppBar position="static" className="bg-sky-700 dark:bg-slate-900">
          <Toolbar>
            <div>
              {(["left"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="default"
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Les shibas d'Inari
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Typography variant="h2" component="h2" mx={20} py={2}>
          Vous êtes perdue ?
        </Typography>
        <Typography variant="body1" component="p" mx={20} pb={2}>
          <br />
          <Link to="/">
            <Button>Cliquez ici pour revenir à la page d'accueil</Button>
          </Link>
        </Typography>
      </main>
      <div style={footerStyle}>
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
