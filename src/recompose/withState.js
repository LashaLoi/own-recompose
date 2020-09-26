import { createElement, useState, Component } from "react";

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

  return createElement(BaseComponent, { ...props, ...enhanceProps });
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

    handleState = (updateFn, callback) =>
      this.setState(
        prevState => ({
          [getterName]:
            typeof updateFn === "function"
              ? updateFn(prevState[getterName])
              : updateFn
        }),
        callback
      );

    render() {
      const enhanceProps = {
        [getterName]: this.state[getterName],
        [setterName]: this.handleState
      };

      return createElement(BaseComponent, { ...this.props, ...enhanceProps });
    }
  };
