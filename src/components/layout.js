import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid, AppBar, makeStyles } from "@material-ui/core";

import DisplayMobile from "./DisplayMobile";
import DisplayDesktop from "./DisplayDesktop";

const useStyles = makeStyles({
  header: {
    backgroundColor: "transparent",
    boxShadow: "none",
    paddingTop: "1em",
    paddingLeft: "4em",
    "@media (max-width: 960px)": {
      paddingLeft: 0,
    },
  },
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "grey",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  childrenContainer: {
    width: "100%",
    height: "90vh",
    paddingLeft: "4em",
  },
});

const Layout = ({ children, title, bgImage }) => {
  const styles = useStyles();
  const [mobileView, setMobileView] = useState(false);
  const checkRes = () => {
    return window.innerWidth < 960 ? setMobileView(true) : setMobileView(false);
  };

  useEffect(() => {
    checkRes();
    window.addEventListener("resize", () => checkRes());
  }, []);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={styles.container}
      // style={{backgroundImage: `url(${bgImage})`,}}
    >
      <Helmet title={`CHUNG | ${title}`} defer="false" />
      <Grid item xs={12} style={{ flexGrow: "0" }}>
        <AppBar className={styles.header}>
          {mobileView ? <DisplayMobile title={title} /> : <DisplayDesktop title={title} />}
        </AppBar>
      </Grid>

      <Grid item xs={12} className={styles.childrenContainer}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
