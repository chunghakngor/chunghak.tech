import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid, AppBar, makeStyles } from "@material-ui/core";

import DisplayMobile from "./DisplayMobile";
import DisplayDesktop from "./DisplayDesktop";

const Layout = ({ children, title, bgImage }) => {
  const [mobileView, setMobileView] = useState(false);
  const checkRes = () => {
    return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
  };

  useEffect(() => {
    checkRes();
    window.addEventListener("resize", () => checkRes());
  }, []);

  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#ffffff",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
  }));

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <Helmet title={`CHUNG | ${title}`} defer="false" />
      <AppBar className={useStyles.header} style={{ backgroundColor: "transparent", boxShadow: "none", paddingTop: "2em" }}>
        {mobileView ? <DisplayMobile title={title} /> : <DisplayDesktop title={title} />}
      </AppBar>

      <Grid item xs={10} style={{ width: "100%" }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
