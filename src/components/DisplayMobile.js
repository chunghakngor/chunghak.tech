import React, { useState } from "react";

import { Link } from "gatsby";
import { Toolbar, IconButton, Drawer, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const linksArray = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/project", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const DisplayMobile = ({ title }) => {
  const [showDrawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!showDrawer);
  };

  return (
    <Toolbar>
      <IconButton edge="start" color="white" aria-label="menu" aria-haspopup="true" onClick={handleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={showDrawer} onClose={handleDrawer}>
        <div>{<DrawerList />}</div>
      </Drawer>
      <div>CHUNG | {title}</div>
    </Toolbar>
  );
};

const DrawerList = () => {
  return (
    <div style={{ paddingTop: "2em" }}>
      {linksArray.map(({ path, label }) => {
        return (
          <div style={{ paddingRight: "2em" }}>
            <Link to={path} style={{ textDecoration: "none" }} key={label} color="inherit">
              <MenuItem>{label}</MenuItem>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayMobile;
