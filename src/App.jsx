import React, { useState } from "react";

function App() {
  const [take, settke] = useState("");
  const [output, intgive] = useState("");

  return (
    <div className="App">
      <div>
        <h1>{output === "" ? 0 : output}</h1>
        <h3>{take === "" ? 0 : take}</h3>

        <div className="button">
          <div className="firstR">
            <button
              onClick={function () {
                settke(take + "7");
              }}
            >
              7
            </button>
            <button
              onClick={function () {
                settke(take + "8");
              }}
            >
              8
            </button>
            <button
              onClick={function () {
                settke(take + "9");
              }}
            >
              9
            </button>
            <button
              style={{
                backgroundColor: "orange",
              }}
              onClick={function () {
                settke(take + "/");
              }}
            >
              /
            </button>
          </div>
          <div className="secondR">
            <button
              onClick={function () {
                settke(take + "4");
              }}
            >
              4
            </button>
            <button
              onClick={function () {
                settke(take + "5");
              }}
            >
              5
            </button>
            <button
              onClick={function () {
                settke(take + "6");
              }}
            >
              6
            </button>
            <button
              style={{
                backgroundColor: "orange",
              }}
              onClick={function () {
                settke(take + "*");
              }}
            >
              *
            </button>
          </div>
          <div className="thirdR">
            <button
              onClick={function () {
                settke(take + "1");
              }}
            >
              1
            </button>
            <button
              onClick={function () {
                settke(take + "2");
              }}
            >
              2
            </button>
            <button
              onClick={function () {
                settke(take + "3");
              }}
            >
              3
            </button>
            <button
              style={{
                backgroundColor: "orange",
              }}
              onClick={function () {
                settke(take + "-");
              }}
            >
              -
            </button>
          </div>
          <button
            onClick={function () {
              settke(take + ".");
            }}
          >
            .
          </button>

          <button
            onClick={function () {
              settke(take + "0");
            }}
          >
            0
          </button>
          <button
            style={{
              backgroundColor: "cyan",
            }}
            onClick={function () {
              try {
                intgive(eval(take));
              } catch (e) {
                intgive("Error");
              }
            }}
          >
            =
          </button>
          <button
            style={{
              backgroundColor: "orange",
            }}
            onClick={function () {
              settke(take + "+");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            id="clear"
            onClick={function () {
              settke("");
              intgive("");
            }}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
