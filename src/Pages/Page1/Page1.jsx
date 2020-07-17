import React from "react";
import solaire from "../../assets/images/solaire.png";
import "./Page1.css";
import { useState } from "react";

function Page1() {
  const [brightness, setBrightness] = useState(0.2);
  return (
    <div>
      <img
        src={solaire}
        className='solaire'
        alt='solaire'
        style={{
          filter: `brightness(${brightness})`,
          animationName: `${
            brightness > 1.5 ? "solaire-animation-out" : "solaire-animation-in"
          }`,
          animationFillMode: "forwards",
        }}
        onClick={() => {
          setBrightness(brightness + 0.15);
        }}
      />
      {
        <div>
          {brightness > 1.5
            ? "GLORIOUS INCANDESENCE ACHIEVED"
            : "CLICK TO PRAISE"}
        </div>
      }
    </div>
  );
}

export default Page1;
