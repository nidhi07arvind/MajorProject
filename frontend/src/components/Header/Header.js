import React, { Component } from "react";
import cookie from "react-cookies";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();

    //bind
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/logout").then(response => {
      if (response.status === 200) {
        console.log("User logged out!");
      }
    });
  };

  render() {
    let loggedInUserContent = null;
    let ownerTab = null;
    let buyerTab = null;

    
      ownerTab = (
        <span>
          <span>
            <a href="/add-items" className="btn btn-sm lyp-btn">
              Add Items
            </a>
          </span>
          <span>
            <a href="/owner-dashboard" className="btn btn-sm lyp-btn">
              Dashboard
            </a>
          </span>
          <span>
            <a href="/owner-order-details" className="btn btn-sm lyp-btn">
              Orders
            </a>
          </span>

          <span>
            <a
              className="btn btn-sm lyp-btn"
              href="/login"
              onClick={this.handleLogout}
            >
              Logout
            </a>
          </span>
        </span>
      );
    

    let username = cookie.load("cookie");
    if (cookie.load("cookie")) {
      loggedInUserContent = (
        <span className="header-bar-tabs">
          <a className="btn btn-sm lyp-btn" href="/profile-details">
            Profile
          </a>
          {ownerTab}
          {buyerTab}
          <span>
            <a>Welcome! {username}</a>

            <div></div>
          </span>
        </span>
      );
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>

    );
  }
}

export default Header;
