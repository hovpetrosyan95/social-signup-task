import React from "react";
import { connect } from "react-redux";
import SearchBar from "../../components/SearchBar";
import Slider from "../../components/Slider";
import Heart from "../../components/icons/Heart";
import Button from "../../components/Button";
import Seller from "../../components/Seller";
import { getData } from "../../actions";

import "./style.scss";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="header">
        <div className="empty-div" />
        <SearchBar />
        <Button text="SIGN UP" className="invert-colors"/>
      </div>
      <div className="content">
        <Slider />
        <div className="description">
          <div className="date">2 hours ago</div>
          <div className="product-info-1">
            <div className="product-name">Off White x Nike Dunk Low</div>
            <div className="product-price">US 10.5</div>
          </div>
          <div className="product-info-2">
            Nike Dunk Low x Off-White Pine Green <br />
            Size: US 9.5 / EU 42-43 <br />
            Color: Green <br />
            Condition: New
          </div>
          <div className="product-info-3">
            <div className="shipping-info">
              <div className="price">$ 1600</div>
              <div className="destination">
                +20$ Shipping to:
                <select>
                  <option value="us">US</option>
                  <option value="arm">ARM</option>
                </select>{" "}
              </div>
            </div>
            <div className="like">
              <Heart />
            </div>
          </div>
          <div className="buttons">
            <div>
              <Button text={"Buy Now"} className="large-btn invert-colors" />
            </div>
            <div>
              <Button text={"Make Offer"} className="large-btn" />
            </div>
            <div>
              <Button
                text={"Pivot"}
                className="large-btn"
                icon={<div className="question-icon">?</div>}
              />
            </div>
          </div>
          <div className="shipping-description">
            <div className="title">Description</div>
            <div>
              Condition 8/10. <br />
              Delivery time is 7-10 days. <br /> 
              Serious offers or inquires only please. <br /> 
              Located in NY
            </div>
          </div>
          <Seller />
        </div>
      </div>
    </div>
  );
};

// needs to be fixed
const mapStateToProps = (state: any) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getData: dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
