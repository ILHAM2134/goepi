import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import { useAppContext } from "@store/context";
import { Iprev } from "@store/contextType.ts";

import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contacts",
  },
  {
    id: 4,
    name: "Reseller",
    link: "/resellers",
  },
];

export default function AppNavbar(props: Props) {
  const { window, isDarkMode, setIsDarkMode } = props;
  const [context, setContext] = useAppContext();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/" className="flex">
        <IconButton>
          <EmojiFoodBeverageOutlinedIcon />
        </IconButton>
        <Typography variant="h6" sx={{ my: 2 }}>
          Goepi
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={`${item.link}`} key={item.id}>
            <ListItem key={item.id} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Typography>
                  <ListItemText primary={item.name} />
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              setIsDarkMode((prev: boolean) => !prev);
              setContext((prev: Iprev) => ({
                ...prev,
                darkMode: !prev.darkMode,
              }));
            }}
          >
            {!isDarkMode ? (
              <NightlightOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        m: 0,
        py: 0,
        mb: 1,
      }}
    >
      <AppBar component="nav" className="">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{
              flexGrow: { xs: 1, sm: 0 },
              display: { xs: "flex", sm: "block" },
              fontSize: {
                xs: 14,
                sm: 16,
                md: 18,
              },
            }}
            className={`justify-end`}
            onClick={() => Router.push("/")}
          >
            <EmojiFoodBeverageOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: { xs: 0, sm: 1 },
              display: { xs: "flex", sm: "block" },
              fontSize: {
                xs: 14,
                sm: 16,
                md: 18,
              },
            }}
            className="justify-end"
            onClick={() => Router.push("/")}
          >
            Goepi
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={`${item.link}`} key={item.id}>
                <Button
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: 14,
                      sm: 16,
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <IconButton
              onClick={() => {
                setIsDarkMode((prev: boolean) => !prev);
                setContext((prev: Iprev) => ({
                  ...prev,
                  darkMode: !prev.darkMode,
                }));
              }}
            >
              {!isDarkMode ? (
                <NightlightOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
