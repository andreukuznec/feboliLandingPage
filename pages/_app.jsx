import React from "react";
import "../styles/global.css";
import Layout from "../components/layout/layout";
<link rel="icon" href="../favicon.ico" sizes="any" />;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
