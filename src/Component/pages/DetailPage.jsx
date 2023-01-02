import React, { useEffect, useState } from "react";
import classes from "./DetailPage.module.css";
import { useParams } from "react-router-dom";
import accounting from "accounting";
import { ADD_CART } from "../Redux/cart";
import { useDispatch, useSelector } from "react-redux";

const DetailPage = () => {
  //Get id from params
  const { id, filId } = useParams();
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);
  const [related, setRelated] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
      );
      const datas = await data.json();
      setProduct(datas);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const dataRaleted = product.filter((item) => {
      return item.category === filId && item._id.$oid !== id;
    });
    setRelated(dataRaleted);
    const datas = product.filter((item) => {
      return item._id.$oid === id;
    });
    setData(datas);
  }, [product, id, filId]);

  console.log(useSelector((item) => item));

  return (
    <div className={classes.detailpage}>
      {data.map((item, index) => (
        <div key={index}>
          <div className={classes.detailpage_product}>
            <div className={classes.detailpage_product_img}>
              <div className={classes.detailpage_product_img_list}>
                <img src={item.img1} alt="" />
                <img src={item.img2} alt="" />
                <img src={item.img3} alt="" />
                <img src={item.img4} alt="" />
              </div>
              <div className={classes.detailpage_product_img1}>
                <img src={item.img1} alt="" />
              </div>
            </div>
            <div className={classes.detailpage_product_text}>
              <h2>{item.name}</h2>
              <span>
                {accounting.formatMoney(item.price, {
                  symbol: "VNĐ",
                  thousand: ".",
                  precision: "",
                  format: "%v %s",
                })}
              </span>
              <p className={classes.descshort}>{item.short_desc}</p>
              <div className={classes.category}>
                <h6>CATEGORY: </h6>
                <p>{item.category}</p>
              </div>
              <div className={classes.detailpage_inputbutton}>
                <input placeholder=" QUANTITY" />
                <div className={classes.detailpage_num}>
                  <i
                    className="fa-solid fa-caret-left"
                    
                  ></i>{" "}
                  1
                  <i
                    className="fa-solid fa-caret-right"
                    
                  ></i>
                </div>
                <button
                  onClick={() => {
                    dispatch(ADD_CART(item));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* PRODUCT DESCRIPTION */}
          <div className={classes.detailpage_description}>
            <button>Description</button>
            <h5> PRODUCT DESCRIPTION</h5>
            <h6 className={classes.desclong}>{item.long_desc}</h6>
          </div>
          {/* RELATED PRODUCT */}
          <div className={classes.detailpage_related_products}>
            <h5>RELATED PRODUCT</h5>
            <div className={classes.detailpage_related_product}>
              {related.map((item, index) => (
                <div key={index} className={classes.detailpage_related}>
                  <img src={item.img1} alt="" />
                  <p className={classes.name}>{item.name}</p>
                  <p className={classes.price}>
                    {accounting.formatMoney(item.price, {
                      symbol: "VNĐ",
                      thousand: ".",
                      precision: "",
                      format: "%v %s",
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
