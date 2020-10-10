import React from "react";
import { connect } from "react-redux";
import SearchBar from "../../components/SearchBar";
import Slider from "../../components/Slider";
import { getData } from "../../actions";
import "./style.scss";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="header">
        <div className="empty-div" />
        <SearchBar />
      </div>
      <div className="content">
        <Slider />
        <div className="description">
            <div className="date">2 hours ago</div>
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
