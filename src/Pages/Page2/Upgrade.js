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
      <div>
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
          {name} (+{cpcUpgrade} COINS PER CLICK): {cost}
        </button>
      </div>
    )
  );
}

export default Upgrade;
