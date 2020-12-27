import * as React from "react";
import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid";

const IndexPage = () => {
  const bgImage = ``;

  return (
    <Layout title="HOME" bgImage={bgImage}>
      <Grid container direction="row">
        <Grid item xs={12} style={{ paddingTop: "20em" }} />
        <Grid item xs={12}>
          <h1 style={{ color: "white", fontSize: "4em" }}>
            Hello, I'm <strong>Chung</strong>
          </h1>
        </Grid>
        <Grid item xs={12}>
          <h3 style={{ color: "orange" }}>
            <strong>Full Stack Software Engineer</strong>
          </h3>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
