import React, { useState } from "react";

export const withState = (
  getterName,
  setterName,
  defaultState
) => Component => props => {
  const [state, setState] = useState(defaultState);

  const enhanceProps = {
    [getterName]: state,
    [setterName]: setState
  };

  return <Component {...props} {...enhanceProps} />;
};

export const withClassState = (
  getterName,
  setterName,
  defaultState
) => Component =>
  class extends React.Component {
    state = {
      [getterName]: defaultState
    };

    handleState = cb =>
      this.setState(prevState => ({
        [getterName]: cb(prevState[getterName])
      }));

    render() {
      const enhanceProps = {
        [getterName]: this.state[getterName],
        [setterName]: this.handleState
      };

      return <Component {...this.props} {...enhanceProps} />;
    }
  };
