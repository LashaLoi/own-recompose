import React, { useReducer } from "react";

export const withReducer = (
  getterName,
  setterName,
  reducer,
  defaultState
) => Component => props => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const enhanceProps = {
    [getterName]: state,
    [setterName]: dispatch
  };

  return <Component {...props} {...enhanceProps} />;
};

export const withClassReducer = (
  getterName,
  setterName,
  reducer,
  defaultState
) => Component =>
  class extends React.Component {
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

      return <Component {...this.props} {...enhanceProps} />;
    }
  };
