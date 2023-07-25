import { useState } from "react";
import Headers from "./Components/Headers";

function App() {
  return (
    <main className="container">
      <Headers />
      <Content />
    </main>
  );
}

function Content() {
  const [monthValue, setMonthValue] = useState(16);
  const [pageViews, setPageViews] = useState("100K");
  const [btnActive, setBtnActive] = useState(true);

  function handleMonthValue(value) {
    let newMonthValue;
    let newFollowers;

    if (value === 1) {
      newMonthValue = 8;
      newFollowers = "10K";
    }
    if (value === 2) {
      newMonthValue = 12;
      newFollowers = "50K";
    }
    if (value === 3) {
      newMonthValue = 16;
      newFollowers = "100K";
    }
    if (value === 4) {
      newMonthValue = 24;
      newFollowers = "500K";
    }
    if (value === 5) {
      newMonthValue = 36;
      newFollowers = "1M";
    }

    setMonthValue(newMonthValue);
    setPageViews(newFollowers);
  }

  function handlePercentProgress(monthValue) {
    if (monthValue === 8) return 0;
    if (monthValue === 12) return 25;
    if (monthValue === 16) return 50;
    if (monthValue === 24) return 75;
    if (monthValue === 36) return 100;
  }

  function handleBtnActive() {
    setBtnActive((c) => !c);
  }

  const thumbGradientPosition = `${handlePercentProgress(monthValue)}%`;

  const thumbStyles = {
    background: `linear-gradient(to right, #a5f3eb ${thumbGradientPosition}, #f1f1f1 ${thumbGradientPosition})`,
  };

  return (
    <div className="content">
      <div className="pricing">
        <p>{`${pageViews} PAGEVIEWS`}</p>
        <p className="month-year">
          <span>
            {btnActive
              ? `$${monthValue}.00`
              : `$${monthValue * 12 - (monthValue * 12 * 25) / 100}.00`}
          </span>
          /{btnActive ? `month` : `year`}
        </p>
      </div>

      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="5"
          defaultValue="3"
          className="slider"
          id="myRange"
          style={thumbStyles} // Add the style here
          onChange={(e) => handleMonthValue(+e.target.value)}
        ></input>

        {/* <span class="progress" style="width: 303.75px;"></span> */}
      </div>

      <div className="billing">
        <div className="monthly">
          <p>Monthly Billing</p>
          <label className="switch">
            <input type="checkbox" onChange={() => handleBtnActive()}></input>
            <span className="btntoggle round"></span>
          </label>
        </div>

        <div className="yearly">
          <p>Yearly Billing</p>
          <p>-25% discount</p>
        </div>
      </div>

      <div className="line"> </div>

      <div className="trial">
        <ul className="left-trial">
          <li className="left-trial-flex">
            <img src={require(`./icon-check.svg`).default} alt="pic" />
            <p> Unlimited websites</p>
          </li>
          <li className="left-trial-flex">
            <img src={require(`./icon-check.svg`).default} alt="pic" />
            <p> 100% data ownership</p>
          </li>
          <li className="left-trial-flex">
            <img src={require(`./icon-check.svg`).default} alt="pic" />
            <p> Email reports</p>
          </li>
        </ul>

        <button className="right-trial">Start my trial</button>
      </div>
    </div>
  );
}

export default App;
