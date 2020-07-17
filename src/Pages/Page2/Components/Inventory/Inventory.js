import React from "react";

function Inventory({ upgrades }) {
  return (
    <div style={{ alignSelf: "flex-start", marginTop: "3%" }}>
      <div style={{ fontSize: 40 }}>Inventory</div>
      {upgrades.map((upgrade) => {
        return (
          <div
            style={{ fontSize: 24, color: "green", paddingTop: "0.5rem" }}
            key={upgrade}
          >
            {" "}
            {upgrade}
          </div>
        );
      })}
    </div>
  );
}

export default Inventory;
