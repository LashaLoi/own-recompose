import React, { useReducer, Component } from "react";

export const withReducer = (
  getterName,
  setterName,
  reducer,
  defaultState
) => BaseComponent => props => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const enhanceProps = {
    [getterName]: state,
    [setterName]: dispatch
  };

  return <BaseComponent {...props} {...enhanceProps} />;
};

export const withClassReducer = (
  getterName,
  setterName,
  reducer,
  defaultState
) => BaseComponent =>
  class extends Component {
    state = {
      [getterName]: defaultState
    };

    handleState = action =>
      this.setState(prevState => ({
        [getterName]: reducer(prevState[getterName], action)
      }));

    render() {
      const enhanceProps = {
        [getterName]: this.state[getterName],
        [setterName]: this.handleState
      };

      return <BaseComponent {...this.props} {...enhanceProps} />;
    }
  };
