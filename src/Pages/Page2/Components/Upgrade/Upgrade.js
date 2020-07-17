import React from "react";
import "./Upgrade.css";

function Upgrade({
  cpcNeededToShow,
  cost,
  cpcUpgrade,
  name,
  coins,
  setCoins,
  coinsPerClick,
  setCoinsPerClick,
  upgrades,
  setUpgrades,
}) {
  return (
    coinsPerClick >= cpcNeededToShow &&
    !upgrades.includes(name) && (
      <div style={{ width: "50%", height: "100%" }}>
        <button
          class='upgrade-button'
          onClick={() => {
            if (coins >= cost) {
              setCoins(coins - cost);
              setCoinsPerClick(coinsPerClick + cpcUpgrade);
              setUpgrades([...upgrades, name]);
            }
          }}
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          {name} (+{cpcUpgrade} SHARDS PER CLICK): {cost.toLocaleString()}
        </button>
      </div>
    )
  );
}

export default Upgrade;
