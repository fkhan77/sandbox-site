/* eslint-disable no-restricted-globals */
import React from "react";
import bastion from "../../assets/images/bastion.png";
import { Upgrade, Inventory } from "./Components";
import "./Page2.css";
import { useState, useEffect } from "react";
import AnimatedNumber from "react-animated-number";

function Page2() {
  const [coins, setCoins] = useState(0);
  const [coinsPerClick, setCoinsPerClick] = useState(10);
  const [upgrades, setUpgrades] = useState([]);
  const [area, setArea] = useState("");
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
      name: "STRONGER HAMMER",
    },
    {
      cpcNeededToShow: 50,
      cost: 2000,
      cpcUpgrade: 50,
      name: "SHINIER HAMMER",
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
    {
      cpcNeededToShow: 430,
      cost: 15000,
      cpcUpgrade: 220,
      name: "INSOMNIA OF BASSAN",
    },
    {
      cpcNeededToShow: 650,
      cost: 25000,
      cpcUpgrade: 300,
      name: "GAMING SKILLS OF MUSHY PEA",
    },
    {
      cpcNeededToShow: 950,
      cost: 50000,
      cpcUpgrade: 1000,
      name: "NOOR'S ALVARADO",
    },
    {
      cpcNeededToShow: 1950,
      cost: 250000,
      cpcUpgrade: 50,
      name: "A DELICIOUS COOKIE",
    },
  ];

  useEffect(() => {
    let saveData = JSON.parse(sessionStorage.getItem("saveData"));
    if (saveData) {
      setCoins(saveData.coins);
      setCoinsPerClick(saveData.coinsPerClick);
      setUpgrades(saveData.upgrades);
      setArea(saveData.area);
    }
  }, []);

  useEffect(() => {
    let saveData = {
      coins: coins,
      coinsPerClick: coinsPerClick,
      upgrades: upgrades,
      area: area,
    };
    sessionStorage.setItem("saveData", JSON.stringify(saveData));
    JSON.parse(sessionStorage.getItem("saveData"));
  }, [coins, coinsPerClick, upgrades, area]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Inventory upgrades={upgrades} />
        <div style={{ alignSelf: "flex-start", marginTop: "3%" }}>
          <div
            style={{ fontSize: 40, alignSelf: "flex-start", marginTop: "3%" }}
          >
            Stats
          </div>
        </div>

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
      </div>
      <div>
        <button
          class='button'
          onClick={() => {
            setCoins(coins + coinsPerClick);
          }}
          style={{ userSelect: "none" }}
        >
          WORK
        </button>
        {["SHOP", "FIGHT", "WAGER"].map((area) => {
          return (
            <button
              class='button'
              onClick={() => {
                setArea(area);
              }}
              style={{ userSelect: "none", marginLeft: "1rem" }}
            >
              {area}
            </button>
          );
        })}
        <button
          class='button'
          onClick={() => {
            if (confirm("Destroy The Bastion and start all over again?")) {
              setCoins(0);
              setCoinsPerClick(10);
              setUpgrades([]);
              setArea("");
            }
          }}
          style={{ userSelect: "none", marginLeft: "1rem" }}
        >
          CLEAR DATA
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "60%",
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
          formatValue={(n) => `SHARDS: §${n.toLocaleString()}`}
        />
        <AnimatedNumber
          component='text'
          value={coinsPerClick}
          style={{
            transition: "0.8s ease-out",
            fontSize: 48,
            transitionProperty: "background-color, color, opacity",
            borderRadius: "5px",
          }}
          duration={300}
          stepPrecision={0}
          formatValue={(n) => `SHARDS PER CLICK: §${n.toLocaleString()}`}
        />
      </div>
      {area === "SHOP" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

      {area === "WAGER" && <div>WAGER</div>}
    </div>
  );
}

export default Page2;
