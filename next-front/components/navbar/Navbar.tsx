'use client'
import React, { useState } from "react";
import { AppBar, Box, Drawer, List, Link, ListItem, ListItemButton, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from 'next/link'; // Import Next.js Link
import PostSearch from "../search/PostSearch";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Recipes", Link: "/recipes" },
    { Name: "About Us", Link: "/about-us" },
    { Name: "Subscribe", Link: "/subscribe" },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar color="default" position="sticky" elevation={0}>
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <NextLink href="/" passHref>
              <Link sx={{ textDecoration: "none" }}>
                <Typography
                  variant="h4"
                  color={"tomato"}
                  sx={{
                    fontFamily: "Splash , cursive",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  CodingsTrade
                </Typography>
              </Link>
            </NextLink>
          </Box>
          <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item, index) => (
              <NextLink key={index} href={item.Link} passHref>
                <Link sx={{ textDecoration: "none" }}>
                  <Typography variant="body2">{item.Name}</Typography>
                </Link>
              </NextLink>
            ))}
          </MenuBox>
          <Box flex={1}>
            <PostSearch />
            <MenuIcon
              sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
          <List>
            {MenuItems.map((item, index) => (
              <NextLink key={index} href={item.Link} passHref>
                <ListItemButton component="a">{item.Name}</ListItemButton>
              </NextLink>
            ))}
          </List>
        </Drawer>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: 1,
        }}
      >
        <Typography align="center" variant="h5" mr={{ xs: 0, md: 1 }}>
          Simple Recipes made for Coders!
        </Typography>
        <Typography
          variant="h5"
          color={"tomato"}
          align="center"
          sx={{ fontFamily: "Splash , cursive" }}
        >
          Simple Recipes made for Coders!
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
