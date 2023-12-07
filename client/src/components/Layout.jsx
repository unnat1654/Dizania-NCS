import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="demi-body">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />

      <main style={{ minHeight: "90vh", maxWidth: "100vw" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Dizania - Design Mania",
  description: "A platform for designers to share their art.",
  keywords: "Design,art,website, nextjs,react,mongodb,",
  author:
    "Unnat Kumar Agarwal, Rohit Pandey, Priyanshu, Insha Naseem, Krati Bajpai",
};

export default Layout;
