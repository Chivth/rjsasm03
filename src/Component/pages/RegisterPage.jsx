import React, { useState } from "react";

import { Link } from "react-router-dom";
import classes from "./RegisterPage.module.css";
import { useDispatch } from "react-redux";
import { update } from "../Redux/use_reducer";

const RegisterPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  let isValidate = true;
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const updates = {
      name: fullname,
      mail: email,
      pass: password,
      phones: phone,
    };
    dispatch(update(updates));
    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];

    if (userArr.some((user) => user.email === email)) {
      alert("Please enter valid information!");
      isValidate = false;
    }
    if (password.length < 8) {
      alert("password must be more than 8 characters");
      isValidate = false;
    }
    if (isNaN(phone) || !phone) {
      alert("Phone is number and no empty");
      isValidate = false;
    }
    if (isValidate) {
      userArr.push({ fullname, email, password, phone });
      localStorage.setItem("userArr", JSON.stringify(userArr));
      window.location.replace("./login");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.registerpage}>
        <div className={classes.registerpages}>
          <div className={classes.registerpage_img}>
            <img src="/image/banner2.jpg" alt="" />
          </div>
          <div className={classes.registerpage_box}>
            <h1>Sign Up</h1>
            <p>
              <input
                placeholder="Full Name"
                onChange={(event) => setFullname(event.target.value)}
              />
            </p>
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
            <p>
              <input
                placeholder="Phone"
                onChange={(event) => setPhone(event.target.value)}
              />
            </p>

            <button type="submit">SIGN UP</button>
            <p>
              Login ? <Link to="/login"> Click</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
