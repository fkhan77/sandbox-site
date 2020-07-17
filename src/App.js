import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, Page1, Page2 } from "./Pages";
import spelunky from "./assets/images/spelunky.png";

function App() {
  const [showSidebar, setShowSidebar] = useState();
  return (
    <div className='App'>
      <div
        className='Sidebar'
        style={{
          animationName: showSidebar,
        }}
      >
        <img src={spelunky} width='100%' alt='spelunky' />
      </div>
      <Router>
        <header className='header'>
          <div className='header--background' />
          <svg
            className='header-menu'
            z-index='10'
            onClick={() =>
              showSidebar === "sidebar-open"
                ? setShowSidebar("sidebar-close")
                : setShowSidebar("sidebar-open")
            }
            viewBox='0 0 100 80'
            width='40'
            height='40'
          >
            <rect width='100' height='20' rx='8'></rect>
            <rect y='30' width='100' height='20' rx='8'></rect>
            <rect y='60' width='100' height='20' rx='8'></rect>
          </svg>
          <div className='header-nav'>
            <Link to='/' style={{ textDecoration: "none" }}>
              <div className='header-nav--item header-nav--item-home'>
                Farhad Khan
              </div>
            </Link>
            <Link to='/sunbro' style={{ textDecoration: "none" }}>
              <div className='header-nav--item header-nav--item-sunbro'>
                Sun Bro
              </div>
            </Link>{" "}
            <Link to='/thebastion' style={{ textDecoration: "none" }}>
              <div className='header-nav--item header-nav--item-bastion'>
                The Bastion
              </div>
            </Link>{" "}
          </div>
        </header>

        <Switch>
          <Route path='/sunbro'>
            <Page1 />
          </Route>
          <Route path='/thebastion'>
            <Page2 />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
