import React from "react";

import { Grid } from "@material-ui/core";
import { Link } from "gatsby";

const DisplayDesktop = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={6}>
      <Grid item xs={6}>
        <Link to="/" style={{ color: "white", fontSize: "1.25em", letterSpacing: "0.2em" }}>
          CHUNGHAK.TECH
        </Link>
      </Grid>
      <Grid item style={{ padding: "2em" }}>
        <Link to="/about" style={{ color: "black", fontSize: "1.25em" }}>
          About
        </Link>
      </Grid>
      <Grid item style={{ padding: "2em" }}>
        <Link to="/project" style={{ color: "black", fontSize: "1.25em" }}>
          Project
        </Link>
      </Grid>
      <Grid item style={{ padding: "2em" }}>
        <Link to="/contact" style={{ color: "black", fontSize: "1.25em" }}>
          Contact
        </Link>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default DisplayDesktop;
