import React, { useEffect } from "react";
import { connect } from "react-redux";

import SearchBar from "../../components/SearchBar";
import Slider from "../../components/Slider";
import Heart from "../../components/icons/Heart";
import Button from "../../components/Button";
import Seller from "../../components/Seller";
import Modal from "../../components/Modal";
import Profile from "../../components/Profile";
import { getData, changeModalStatus, saveUser, logout } from "../../actions";
import { modalStatusSelector } from "../../selectors/modalStatus";
import { userSelector } from "../../selectors/user";

import "./style.scss";

interface ProductPage {
  user: string;
  isModalOpen: boolean;
  changeStatus: Function;
  registerUser: Function;
  logoutUser: Function;
  fetchData: Function;
}

const ProductPage: React.FC<ProductPage> = ({
  isModalOpen,
  changeStatus,
  registerUser,
  user,
  logoutUser,
  fetchData,
}: ProductPage) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="product-page">
      <Modal
        isModalOpen={isModalOpen}
        changeModalStatus={changeStatus}
        registerUser={registerUser}
      />
      <div className="header">
        <div className="empty-div" />
        <SearchBar />
        {!user ? (
          <Button
            text="SIGN UP"
            className="invert-colors"
            onClick={changeStatus}
          />
        ) : (
          <Profile user={user} logout={logoutUser} />
        )}
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

const mapStateToProps = (state: any) => ({
  data: state.data,
  isModalOpen: modalStatusSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: () => dispatch(getData()),
  changeStatus: () => dispatch(changeModalStatus()),
  registerUser: (user: { name: string; details: Object }) =>
    dispatch(saveUser(user)),
  logoutUser: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
