import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main style={{ color: "#232129", padding: "96px", fontFamily: "-apple-system, Roboto, sans-serif, serif" }}>
      <title>Error 404!</title>
      <h1 style={{ marginTop: 0, marginBottom: 64, maxWidth: 450 }}>Error 404! Page not found</h1>
      <p style={{ marginBottom: 48 }}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <div style={{ padding: "2em" }}></div>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
