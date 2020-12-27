import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Grid } from "@material-ui/core";
import pageStyles from "./layout.module.css";

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet title={`CHUNG | ${title}`} defer="false" />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item container style={{ padding: "2em" }} direction="row" justify="flex-end" alignItems="center" spacing={6}>
          <Grid item xs={9}>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </Grid>
          <Grid item>
            <Link to="/about">About</Link>
          </Grid>
          <Grid item>
            <Link to="/project">Project</Link>
          </Grid>
          <Grid item>
            <Link to="/contact">Contact</Link>
          </Grid>
        </Grid>
        <Grid item xs={11}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
