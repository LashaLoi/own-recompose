import React, { useState, Component } from "react";

export const withState = (
  getterName,
  setterName,
  defaultState
) => BaseComponent => props => {
  const [state, setState] = useState(defaultState);

  const enhanceProps = {
    [getterName]: state,
    [setterName]: setState
  };

  return <BaseComponent {...props} {...enhanceProps} />;
};

export const withClassState = (
  getterName,
  setterName,
  defaultState
) => BaseComponent =>
  class extends Component {
    state = {
      [getterName]: defaultState
    };

    handleState = value =>
      this.setState({
        [getterName]: value
      });

    render() {
      const enhanceProps = {
        [getterName]: this.state[getterName],
        [setterName]: this.handleState
      };

      return <BaseComponent {...this.props} {...enhanceProps} />;
    }
  };
