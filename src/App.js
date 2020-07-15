import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, Page1, Page2 } from "./Pages";

function App() {
  const [showSidebar, setShowSidebar] = useState();
  return (
    <div className='App'>
      <div
        className='Sidebar'
        style={{
          animationName: showSidebar,
        }}
      />
      <Router>
        <nav className='App-nav-container'>
          <svg
            className='App-nav-menu'
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
          <div className='App-nav'>
            <Link to='/' style={{ textDecoration: "none" }}>
              <div className='App-nav--item'>Farhad Khan</div>
            </Link>
            <Link to='/page1' style={{ textDecoration: "none" }}>
              <div className='App-nav--item'>Projects</div>
            </Link>{" "}
            <Link to='/page2' style={{ textDecoration: "none" }}>
              <div className='App-nav--item'>About</div>
            </Link>{" "}
          </div>
        </nav>

        <Switch>
          <Route path='/page1'>
            <Page1 />
          </Route>
          <Route path='/page2'>
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
