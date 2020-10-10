import React from "react";

import StarFilled from "../../components/icons/StarFilled";
import Star from "../../components/icons/Star";
import Button from "../../components/Button";
import profile from "../../assets/images/profile.png";
import "./style.scss";

const Seller = () => {
  return (
    <div className="seller-container">
      <div className="seller">
        <div>
          <img src={profile} />
        </div>
        <div className="second-row">
          <div className="name margin-bottom">straightkilla187real</div>
          <div className="rating-row">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <Star /> <span className="underline">3 Feedback</span>
          </div>
        </div>
        <div className="last-column">
          <div className="margin-bottom">Member since 12.02.20</div>
          <div className="underline big-font">24 Items For Sale</div>
        </div>
      </div>

      <Button text="MESSAGE" />
    </div>
  );
};

export default Seller;
