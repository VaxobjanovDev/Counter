import React, { useState } from "react";
import "./Counter.css";
import { Data } from "./Data";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  const [showResult, hideResult] = useState(false);

  return (
    <>
      <div className="counter-section">
        <div className="container">
          <div className="counter">
            <div className="egg">
              <div className="counter-heading">
                <h1>
                  SXH<span>5136</span>
                </h1>
              </div>
              <div className="counter-tablo">
                <form>
                  <input
                    value={showResult ? "" : count}
                    className={click ? "input_active" : "input"}
                  />
                </form>
              </div>
              <div className="buttons">
                <div className="left">
                  <h6>RESET</h6>
                  <button
                    onClick={() => setCount(count - count)}
                    className="button-circle"
                  ></button>
                </div>
                <div className="center">
                  <h6>OFF/ON</h6>
                  <button
                    onClick={() => hideResult(!showResult)}
                    className="button-circle"
                  ></button>
                </div>
                <div className="right">
                  <h6>LED</h6>
                  <button
                    onClick={() => setClick(!click)}
                    className="button-circle"
                  ></button>
                </div>
              </div>
              <div className="big-button">
                <div className="d-flex rotate justify-content-center">
                  {Data.map((item) => {
                    return (
                      <h1 key={item.id} className={item.className}>
                        {item.text}
                      </h1>
                    );
                  })}
                </div>
                <button
                  onClick={() => (showResult ? count : setCount(count + 1))}
                  className="big-circle"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
