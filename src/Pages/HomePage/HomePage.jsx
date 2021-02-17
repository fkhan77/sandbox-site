import React from "react";
import furi from "../../assets/images/furi.png";
import "./HomePage.css";
function Home() {
  return (
    <div className='home-page--container'>
      <div>
        <img
          src={furi}
          className='furi'
          alt='furi'
        />
      </div>
      <div
        style={{
          fontSize: "48px",
          width: "40%",
          margin: "auto",
          animationName: "furi-animation",
        }}
      >
        Go take a look around and return later...
      </div>
    </div>
  );
}

export default Home;
