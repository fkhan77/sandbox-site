import React from "react";
import solaire from "../../assets/images/solaire.png";
import "./Page1.css";
import { useState, useEffect } from "react";

function Page1() {
  const [brightness, setBrightness] = useState(0.2);
  const [sunbros, setSunbros] = useState(0);
  const [praiseLevelText, setPraiseLevelText] = useState("WEAK");
  const [praiseLevel, setPraiseLevel] = useState(0.15);

  useEffect(() => {
    let saveData = JSON.parse(sessionStorage.getItem("saveDataSunBro"));
    if (saveData) {
      setBrightness(saveData.brightness);
      setSunbros(saveData.sunbros);
      setPraiseLevelText(saveData.praiseLevelText);
      setPraiseLevel(saveData.praiseLevel);
    }
  }, []);

  useEffect(() => {
    let saveData = {
      brightness: brightness,
      sunbros: sunbros,
      praiseLevelText: praiseLevelText,
      praiseLevel: praiseLevel,
    };
    sessionStorage.setItem("saveDataSunBro", JSON.stringify(saveData));
    JSON.parse(sessionStorage.getItem("saveDataSunBro"));
  }, [brightness, sunbros, praiseLevelText, praiseLevel]);
  return (
    <div>
      <img
        src={solaire}
        className='solaire'
        alt='solaire'
        style={{
          filter: `brightness(${brightness})`,
          animationName: `${
            brightness > 4 ? "solaire-animation-out" : "solaire-animation-in"
          }`,
          animationFillMode: "forwards",
        }}
        onClick={() => {
          setBrightness(brightness + praiseLevel);
          if (brightness + praiseLevel > 4) {
            if (sunbros === 4) {
              setPraiseLevelText("LOW");
              setPraiseLevel(praiseLevel + 0.1);
            }
            if (sunbros === 9) {
              setPraiseLevelText("MEDIUM");
              setPraiseLevel(praiseLevel + 0.4);
            }
            if (sunbros === 14) {
              setPraiseLevelText("HIGH");
              setPraiseLevel(praiseLevel + 0.8);
            }
            if (sunbros === 29) {
              setPraiseLevelText("EXTREME");
              setPraiseLevel(praiseLevel + 0.8);
            }
            setTimeout(() => {
              setSunbros(sunbros + 1);
              setBrightness(0);
            }, 1000);
          }
        }}
      />
      <div
        style={{
          fontSize: "48px",
        }}
      >
        PRAISE LEVEL: {praiseLevelText}
      </div>
      <div>
        {brightness < 0.2 ? "SUN BROS NEVER DIE!" : ""}
        {brightness < 0.7 && brightness >= 0.2 ? "CLICK TO PRAISE!" : ""}
        {brightness < 1.1 && brightness >= 0.7 ? "KEEP PRAISING!" : ""}
        {brightness < 1.5 && brightness >= 1.1 ? "PRAISE THE SUN!" : ""}
        {brightness < 1.9 && brightness >= 1.5 ? "GLORIOUS INCANDESCENCE!" : ""}
        {brightness < 2.3 && brightness >= 1.9 ? "STOP!" : ""}
        {brightness < 2.7 && brightness >= 2.3 ? "PLEASE!" : ""}
        {brightness < 3.1 && brightness >= 2.7 ? "MY EYES!" : ""}
        {brightness < 3.5 && brightness >= 3.1 ? "OH GOD, PLEASE NO!" : ""}
        {brightness < 3.9 && brightness >= 3.5 ? "..." : ""}
        {brightness >= 3.9 ? "YOU MONSTER..." : ""}
      </div>
      <div>
        {sunbros ? `SUN BROS INCINERATED BY THE DIVINE LIGHT: ${sunbros}` : ""}
      </div>
    </div>
  );
}

export default Page1;
