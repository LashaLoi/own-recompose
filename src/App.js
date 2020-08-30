import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withState } from "./recompose/withState";
import { withHandlers } from "./recompose/withHandlers";

const App = ({ handleClick, onChange, value }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div
        style={{ display: "flex", width: 200, justifyContent: "space-between" }}
      >
        <button onClick={handleClick}>{value}</button>
        <input
          onChange={onChange}
          placeholder="Type anything..."
          value={value}
        />
      </div>
    </header>
  </div>
);

const stateEnhance = withState("value", "setValue", "");
const handlerEnhance = withHandlers({
  onChange: props => event => {
    props.setValue(event.target.value);
  },
  handleClick: () => () => console.log(1)
});

export default stateEnhance(handlerEnhance(App));
