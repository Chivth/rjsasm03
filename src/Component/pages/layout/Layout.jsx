import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import App from "../../../App";
import classes from "./layout.module.css";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className={classes.layout}>
        <NavBar />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
