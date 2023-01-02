import React from "react";

import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <div>
          <h4>CUSTOMER SERVICES</h4>
          <ul>
            <li>
              <Link to="#">Help & Contact Us</Link>
            </li>
            <li>
              <Link to="#">Returns & Refunds</Link>
            </li>
            <li>
              <Link to="#">Online Stores</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>
              <Link to="#">What We Do</Link>
            </li>
            <li>
              <Link to="#">Available Services</Link>
            </li>
            <li>
              <Link to="#">Lastest Posts</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li>
              <Link to="#">Twitter</Link>
            </li>
            <li>
              <Link to="#">Instagram</Link>
            </li>
            <li>
              <Link to="#">Facebook</Link>
            </li>
            <li>
              <Link to="#">Pinterest</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
