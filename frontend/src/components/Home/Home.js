import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Header from "../Header/Header";


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  handleToggel1 = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.name);
    // let dropdown = toggle;
    this.setState({ [e.target.id]: e.target.name });
  };

  render() {
    //iterate over books to create a table row
    let details = "inside home birches";
    //if not logged in go to login page
    let redirectVar = null;
   // let button1 = this.state.button1;
   // let button2 = this.state.button2;
    // let button3 = this.state.button3;
    // let button4 = this.state.button4;
    // let button5 = this.state.button5;
    // let button6 = this.state.button6;
    // let button7 = this.state.button7;
    // let button8 = this.state.button8;
    // let button9 = this.state.button9;
    // let button10 = this.state.button10;
    // let button11 = this.state.button11;

    if (!localStorage.getItem("authFlag")) {
      redirectVar = <Redirect to="/login" />;
    }

    return (
      <div className="home-container">
        <Header />
        {redirectVar}
        <div className="content">
          <div className="home-page-content">
            <div className="Hero-Image">
              <div className="jumbotron-content">
              </div>
              <div class="form-group">
                  <label class="control-label col-sm-2">Choose Profile </label>
                  <select
                    class="form-control"
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select">Select</option>
                    <option value="Owner">Owner</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2">Choose Profile </label>
                  <select
                    class="form-control"
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select">Select</option>
                    <option value="Owner">Owner</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2">Choose Profile </label>
                  <select
                    class="form-control"
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select">Select</option>
                    <option value="Owner">Owner</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2">Choose Profile </label>
                  <select
                    class="form-control"
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select">Select</option>
                    <option value="Owner">Owner</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                </div>
              <div className="home-page-list-content hidden-xs"></div>
              <div className="clear"></div>
            </div>
            <div className="recent-activity">
              <div className="jumbotron container recent-activity-content">
                <div className="container mt-3">
                  <div
                    id="myCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ul className="carousel-indicators">
                      <li
                        data-target="#myCarousel"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                      <div className="item active">
                        <img
                          className="carousel-img"
                          src={require("../../Images/dessertback.jpg")}
                          alt="item-1"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="carousel-img"
                          src={require("../../Images/pizza.jpg")}
                          alt="item-2"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="carousel-img"
                          src={require("../../Images/dosa.jpg")}
                          alt="item-3"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#myCarousel"
                      data-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#myCarousel"
                      data-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lyp-container h-100">
              <img
                src={require("../../Images/pancakes.jpg")}
                alt="lyp-image"
              ></img>
            </div>

            <div className="jumbotron footer-container">
              <div className="external-links">
                <h4
                  className="external-links-headline-text"
                  style={{ fontSize: 30, color: "black" }}
                >
                  Meet the Grubhub Family
                </h4>
                <a
                  href="https://www.homeaway.com/"
                  target="_blank"
                  className="btn btn-lg external-link-buttons"
                >
                  Grubhub
                </a>
                <div className="divider" />
                <a
                  href="https://www.vrbo.com/"
                  target="_blank"
                  className="btn btn-lg external-link-buttons"
                >
                  Gift Cards
                </a>
                <div className="divider" />
                <a
                  href="https://www.vacationrentals.com/"
                  target="_blank"
                  className="btn btn-lg external-link-buttons"
                >
                  Browse by cities
                </a>
                <div className="divider" />
                <a
                  href="https://www.homelidays.com/"
                  target="_blank"
                  className="btn btn-lg external-link-buttons"
                >
                  Browse by cuisine
                </a>
                <div className="divider" />
                <a
                  href="http://www.toprural.com/"
                  target="_blank   "
                  className="btn btn-lg external-link-buttons"
                >
                  Browse by restaurants
                </a>
                <div className="divider" />
                <a
                  href="https://www.bookabach.co.nz/"
                  target="_blank"
                  className="btn btn-lg external-link-buttons"
                >
                  Premium Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
