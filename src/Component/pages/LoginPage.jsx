import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { update } from "../Redux/onLogin";

import classes from "./LoginPage.module.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  console.log(JSON.parse(localStorage.getItem("ON_LOGIN")));

  const clickHandler = (event) => {
    event.preventDefault();
    let isValidate = false;
    const parse = JSON.parse(localStorage.getItem("userArr"));

    parse.filter((item) => {
      if (item.email === email && item.password === password) {
        isValidate = true;
        localStorage.setItem("ON_LOGIN", JSON.stringify(true));
      }
      return item;
    });
    if (isValidate) {
      dispatch(update({ successlogin: true }));
      localStorage.setItem(
        "userName",
        JSON.stringify(parse.filter((e) => e.email === email))
      );
      window.location.replace("./");
    } else {
      dispatch(update({ successlogin: false }));
    }
  };

  return (
    <form onSubmit={clickHandler}>
      <div className={classes.loginpage}>
        <div className={classes.loginpages}>
          <div className={classes.loginpage_img}>
            <img src="/image/banner2.jpg" alt="" />
          </div>
          <div className={classes.loginpage_box}>
            <h1>Sign In</h1>

            <p>
              <input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>
            <p>
              <input
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </p>

            <button type="submit">SIGN IN</button>

            <p>
              Create an account ? <Link to="/register"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
