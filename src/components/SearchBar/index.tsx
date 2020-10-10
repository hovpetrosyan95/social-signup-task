import React from "react";
import Search from '../icons/Search';
import "./style.scss";

const SearchBar = () => {
    return(
    <div className="search-bar">
    <input placeholder="Search..."></input>
    <Search />
    <div className="search-btn">SEARCH</div>
    </div>
    ); 
}

export default SearchBar;