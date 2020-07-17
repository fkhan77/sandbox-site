import React from "react";
import bastion from "../../assets/images/bastion.png";
import Upgrade from "./Upgrade";
import "./Page2.css";
import { useState } from "react";
import AnimatedNumber from "react-animated-number";

function Page2() {
  const [coins, setCoins] = useState(2000);
  const [coinsPerClick, setCoinsPerClick] = useState(10);
  const [upgrades, setUpgrades] = useState([]);
  const [area, setArea] = useState("WORK");
  const upgradeList = [
    {
      cpcNeededToShow: 0,
      cost: 300,
      cpcUpgrade: 10,
      name: "BIGGER HAMMER",
    },
    {
      cpcNeededToShow: 20,
      cost: 1000,
      cpcUpgrade: 30,
      name: "STRONG HAMMER",
    },
    {
      cpcNeededToShow: 50,
      cost: 2000,
      cpcUpgrade: 50,
      name: "SHINY HAMMER",
    },
    {
      cpcNeededToShow: 50,
      cost: 3000,
      cpcUpgrade: 80,
      name: "STEROIDS",
    },
    {
      cpcNeededToShow: 100,
      cost: 5000,
      cpcUpgrade: 100,
      name: "STRONG WORK ETHIC",
    },
    {
      cpcNeededToShow: 180,
      cost: 10000,
      cpcUpgrade: 150,
      name: "COFFEE",
    },
  ];
  return (
    <div>
      <div>
        {/* <div>yo</div> */}
        <div>
          <img
            src={bastion}
            className='bastion'
            alt='bastion'
            style={{
              filter: `brightness(${0.5 + 0.1 * upgrades.length})`,
              height: "540px",
            }}
          />
        </div>
        {/* <div>yo</div> */}
      </div>
      <div>
        <button
          class='button'
          onClick={() => {
            setCoins(coins + coinsPerClick);
            setArea("WORK");
          }}
          style={{ userSelect: "none" }}
        >
          WORK
        </button>
        <button
          class='button'
          onClick={() => {
            setArea("SHOP");
          }}
          style={{ userSelect: "none", marginLeft: "1rem" }}
        >
          SHOP
        </button>
        <button
          class='button'
          onClick={() => {
            setArea("DUNGEON");
          }}
          style={{ userSelect: "none", marginLeft: "1rem" }}
        >
          FIGHT
        </button>
        <button
          class='button'
          onClick={() => {
            setArea("TREASURE");
          }}
          style={{ userSelect: "none", marginLeft: "1rem" }}
        >
          LOOT
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "45%",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <AnimatedNumber
          component='text'
          value={coins}
          style={{
            transition: "0.8s ease-out",
            fontSize: 48,
            transitionProperty: "background-color, color, opacity",
            borderRadius: "5px",
          }}
          duration={300}
          stepPrecision={0}
          formatValue={(n) => `COINS: ${n}`}
        />
        <AnimatedNumber
          component='text'
          value={coinsPerClick}
          style={{
            transition: "0.8s ease-out",
            fontSize: 36,
            transitionProperty: "background-color, color, opacity",
            borderRadius: "5px",
          }}
          duration={300}
          stepPrecision={0}
          formatValue={(n) => `COINS PER CLICK: ${n}`}
        />
      </div>
      {area === "SHOP" && (
        <div>
          {upgradeList.map(({ cpcNeededToShow, cost, cpcUpgrade, name }) => {
            return (
              <Upgrade
                cpcNeededToShow={cpcNeededToShow}
                cost={cost}
                cpcUpgrade={cpcUpgrade}
                name={name}
                coins={coins}
                setCoins={setCoins}
                coinsPerClick={coinsPerClick}
                setCoinsPerClick={setCoinsPerClick}
                upgrades={upgrades}
                setUpgrades={setUpgrades}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Page2;
