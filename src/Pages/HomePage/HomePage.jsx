import React from "react";
import "./HomePage.css";
function Home() {
  return (
    <div className='home-page--container'>
      <div>
        <img
          src='https://psmedia.playstation.com/is/image/psmedia/furi-two-column-01-ps4-eu-26oct15?$TwoColumn_Image$'
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
