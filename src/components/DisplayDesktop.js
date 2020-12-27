import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

const useStyles = makeStyles({
  navBarLogo: {
    flexGrow: 0,
  },
  navBarContainer: {
    flexGrow: 1,
  },
  navBarFont: {
    color: "black",
    fontSize: "1.25em",
  },
  navBarHeading: {
    color: "white",
    fontSize: "1.25em",
    letterSpacing: "0.2em",
  },
});

const DisplayDesktop = () => {
  const styles = useStyles();
  return (
    <Grid container justify="space-evenly">
      <Grid item xs={6} className={styles.navBarLogo}>
        <Link to="/" className={styles.navBarHeading}>
          CHUNGHAK.TECH
        </Link>
      </Grid>
      <Grid item className={styles.navBarContainer}>
        <Link to="/about" className={styles.navBarFont}>
          About
        </Link>
      </Grid>
      <Grid item className={styles.navBarContainer}>
        <Link to="/project" className={styles.navBarFont}>
          Project
        </Link>
      </Grid>
      <Grid item className={styles.navBarContainer}>
        <Link to="/contact" className={styles.navBarFont}>
          Contact
        </Link>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default DisplayDesktop;
