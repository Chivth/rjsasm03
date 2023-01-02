import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import accounting from "accounting";
import classes from "../pages/HomePage.module.css";
import Popup from "./Popup";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../Redux/reducer";

const ListProduct = () => {
  const [data, setData] = useState([]);
  const [dataPopup, setDataPopup] = useState([]);

  const dispatch = useDispatch();
  // const popups = useSelector((state) => state.popups);

  useEffect(() => {
    async function getAPI() {
      const api = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const apiJSON = await api.json();
      setData(apiJSON);
    }
    getAPI();
  }, []);
  //create event click
  const handleClick = (event) => {
    const updates = { show: true, hide: false };
    dispatch(update(updates));
    //find the index of data
    const index = data.findIndex((item) => item.name === event.target.id);
    setDataPopup(data[index]);
  };
  return (
    <div>
      <div className={classes.homepage_product}>
        <div className={classes.homepage_product_text}>
          <p>MADE THE HARD WAY</p>
          <span>TOP TRENDING PRODUCTS</span>
        </div>
        <div className={classes.homepage_product_info}>
          <div className={classes.homepage_product_infos}>
            {data.map((e, i) => {
              return (
                <div key={i} className={classes.homepage_product_info_block}>
                  <Link to="#">
                    <div onClick={handleClick}>
                      <img
                        id={e.name}
                        className={classes.homepage_product_info_block_img}
                        key={i}
                        src={e.img1}
                        alt=""
                      />
                    </div>
                  </Link>
                  <div>
                    <span>{e.name}</span>
                    <p>
                      {/* Change number to price */}
                      {accounting.formatMoney(e.price, {
                        symbol: "VND",
                        thousand: ".",
                        precision: "",
                        format: "%v %s",
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Popup datas={dataPopup} />
    </div>
  );
};

export default ListProduct;
