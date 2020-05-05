import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Home from "./Home/Home";

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSearch: false,
        searchText: ""
      };
  
      this.handlesearchClick = this.handlesearchClick.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handlesearchClick = () => {
      this.setState({
        isSearch: true
      });
    };
  
    handleInputChange = event => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
  
      this.setState({
        [name]: value
      });
    };
  
    render() {
      return (
        <div>
          {/** Render Different Components based on Route*/}
          <Route
            exact
            render={() => {
              return (
                <Home
                  handleInputChange={this.handleInputChange}
                  searchText={this.state.searchText}
                  isSearch={this.state.isSearch}
                  searchClick={this.handlesearchClick}
                />
              );
            }}
            path="/"
          />
          <Route
            render={() => {
              return (
                <Home
                  handleInputChange={this.handleInputChange}
                  searchText={this.state.searchText}
                  isSearch={this.state.isSearch}
                  searchClick={this.handlesearchClick}
                />
              );
            }}
            path="/home"
          />
          <Route path="/login" component={Login} />
          
          <Route
            // render={() => {
            //   return (
            //     // <DisplayItems
            //     //   handleInputChange={this.handleInputChange}
            //     //   searchText={this.state.searchText}
            //     //   isSearch={this.state.isSearch}
            //     //   searchClick={this.handlesearchClick}
            //     // />
            //   );
            // }}
            path="/display-items"
          />
          
        </div>
      );
    }
  }

  export default Main;