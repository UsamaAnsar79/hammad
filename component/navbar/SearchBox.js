// src/SearchBox.js
import React, { useState } from "react";

const SearchBox = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  const [showUser, setShowUser] = useState(false);

  const toggleUserShow = () => {
    setShowUser(!showUser);
  };

  return (
    <div className="search-container">
      <div className="search">
      <button className="search-toggle" onClick={toggleSearch}>
        <i className="fas fa-search"></i>
      </button>
      <div className={`search-form ${showSearch ? "show" : ""}`}>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      </div>
      <div className="notification">
        <button className="search-toggle" onClick={toggleShow}>
          <i class="bi bi-activity"></i>
        </button>
        <div className={`show-form ${show ? "show" : ""}`}>
          <ul className="list">
            <p> Mike John responded to your email</p>
            <p>You have 5 more tasks</p>
            <p> Your friend Michael is in town</p>
            <p> Another notification</p>
            <p>Another one</p>
          </ul>
        </div>
       
      </div>
      <div className="user">
      <button className="search-toggle" onClick={toggleUserShow}>
      <i class="bi bi-person-lines-fill"></i>
        </button>
        <div className={`user-form ${showUser ? "show" : ""}`}>
          <ul className="list-user">
            <p> Profile</p>
            <p className="border">Setting</p>
            <p> Log out</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
