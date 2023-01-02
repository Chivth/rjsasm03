import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";
import { update } from "../Redux/onLogout";

const NavBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const onLogin = useSelector((state) => state.onlogin.ON_LOGIN);
  const checkLogin = JSON.parse(localStorage.getItem("ON_LOGIN"));
  const userArray = JSON.parse(localStorage.getItem("userName"));
  const userArr = userArray.map((e) => e.fullname);

  const handleLogout = () => {
    localStorage.removeItem("ON_LOGIN");
    window.location.replace("./login");
    dispatch(update({ successlogout: true }));
  };

  return (
    <div className={classes.nav_bar}>
      <div className={classes.nav_bar_content}>
        <div className={classes.nav_bar_btn}>
          <button
            className={classes.nav_bar_color}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button onClick={() => navigate("/shop")}>Shop</button>
        </div>
        <div className={classes.nav_bar_title}>
          <p>BOUTIQUE</p>
        </div>
        <div className={classes.nav_bar_btn}>
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            <i className="fa-solid fa-cart-flatbed"></i> Card
          </button>

          {checkLogin ? (
            <div>
              <button>
                <i className="fa-solid fa-user"></i> {userArr}
                <i className="fa-solid fa-caret-down"></i>
              </button>
              <button onClick={handleLogout}>(Logout)</button>
            </div>
          ) : (
            <button onClick={() => navigate("/login")}>
              <i className="fa-solid fa-user"></i> Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
