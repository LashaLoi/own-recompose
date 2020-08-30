import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withState } from "./recompose/withState";
import { withHandlers } from "./recompose/withHandlers";
import { defaultProps } from "./recompose/defaultProps";
import { renameProps } from "./recompose/renameProps";
import { compose } from "./recompose/compose";

const App = ({ handleClick, onChange, val }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div
        style={{ display: "flex", width: 200, justifyContent: "space-between" }}
      >
        <button onClick={handleClick}>{val}</button>
        <input onChange={onChange} placeholder="Type anything..." value={val} />
      </div>
    </header>
  </div>
);

const enhance = compose(
  withState("value", "setValue"),
  defaultProps({
    value: "Alex"
  }),
  renameProps("value", "val"),
  withHandlers({
    handleClick: () => () => console.log(1),
    onChange: props => event => {
      props.setValue(event.target.value);
    }
  })
);

export default enhance(App);
