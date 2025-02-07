import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";

const FeatureAreaOne = () => {
  return (
    <div className="feature-area-1">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4">
            <div className="single-feature-wrap">
              <div className="thumb">
                <CiShoppingCart size={60} color="white" />
              </div>
              <div className="media-body">
                <h4>Free Delivery</h4>
                <p>Home delivery, free shipping!</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="single-feature-wrap">
              <div className="thumb">
                <CiMoneyBill size={60} color="white" />
              </div>
              <div className="media-body">
                <h4>Moneyback Guarantee</h4>
                <p>Always make sure your money!</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="single-feature-wrap">
              <div className="thumb">
                <BiSupport size={60} color="white" />
              </div>
              <div className="media-body">
                <h4>24/7 Online Support</h4>
                <p>We always listen your questions!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAreaOne;
