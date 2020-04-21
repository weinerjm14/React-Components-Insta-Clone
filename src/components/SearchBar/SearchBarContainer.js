// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";
// import instaLogo from "./insta-logo.png"

const SearchBar = () => {
  // console.log("search", instaLogo);
  return (
    
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
      </div>
      {/* <div className="search-bar-logo">
      <image src={require('./insta-logo.png')} alt="instagram logo" />
      </div> */}
      <div className="search-form-wrapper">
        <form className="search-form">
          <input
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
