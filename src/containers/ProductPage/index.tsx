import React from "react";
import { connect } from "react-redux";
import SearchBar from "../../components/SearchBar";
import {getData} from "../../actions";

const ProductPage = () => {
    return <div>Product Page
        <SearchBar />
    </div>
}

// needs to be fixed
const mapStateToProps = (state: any) => ({
    data: state.data
});


const mapDispatchToProps = (dispatch: Function) => ({
    getData: dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);