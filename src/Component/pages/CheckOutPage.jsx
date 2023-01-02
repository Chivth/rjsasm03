import React from "react";

// import { UPDATE_CART } from "../Redux/cart";

import { useSelector } from "react-redux";
import accounting from "accounting";
import classes from "./CheckOutPage.module.css";
const CheckOutPage = () => {
  const cart = useSelector((item) => item.cart.cart);
  const price = cart.map((item) => item.price * item.quantity);

  //Calculator price for all products in cart
  let sum = 0;
  const Calprice = price.map((item) => (sum += item));
  const total = Calprice.pop((item) => item);

  const click=()=>{
    alert('Chúc mừng bạn đã đặt hàng thành công. Bạn chờ mọt kiếp hàng không tới đâu!!!')
  }
  return (
    <div className={classes.checkoutpage}>
      <div className={classes.checkoutpage_content}>
        <div className={classes.registerpage_banner}>
          <div className={classes.registerpage_banner_left}>CHECKOUT</div>
          <div className={classes.registerpage_banner_right}>
            HOME/CART/<span>CHECKOUT</span>
          </div>
        </div>
        <div className={classes.checkoutpage_info}>
          <h5>BILLING DETAILS</h5>
          <div className={classes.checkoutpage_infos}>
            <div className={classes.checkoutpage_infos_left}>
              <div>
                <p>FULL NAME:</p>
                <input placeholder="Enter Your Full Name Here!" />
              </div>
              <div>
                <p>EMAIL:</p>
                <input placeholder="Enter Your Email Here!" />
              </div>
              <div>
                <p>PHONE NUMBER:</p>
                <input placeholder="Enter Your Phone Number Here!" />
              </div>
              <div>
                <p>ADDRESS:</p>
                <input placeholder="Enter Your Address Here!" />
              </div>

              <button onClick={click}>Place order</button>
            </div>
            <div className={classes.checkoutpage_infos_rights}>
              <div className={classes.checkoutpage_infos_right}>
                <div className={classes.checkoutpage_infos_right_content}>
                  <h4>YOUR ORDER</h4>
                  <div className={classes.checkoutpage_infos_right_contents}>
                    {cart.map((item) => {
                      return (
                        <div
                          className={
                            classes.checkoutpage_infos_right_content_top
                          }
                        >
                          <h6>{item.name}</h6>
                          <span>
                            {accounting.formatMoney(item.price, {
                              symbol: "VNĐ",
                              thousand: ".",
                              precision: "",
                              format: "%v %s",
                            })}{" "}
                            x {item.quantity}
                          </span>
                        </div>
                      );
                    })}
                    <div
                      className={
                        classes.checkoutpage_infos_right_content_bottom
                      }
                    >
                      <h6>TOTAL</h6>
                      <span>
                        {accounting.formatMoney(total, {
                          symbol: "VNĐ",
                          thousand: ".",
                          precision: "",
                          format: "%v %s",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
