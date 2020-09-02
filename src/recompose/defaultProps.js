import React from "react";

const defaultPropsHOC = defaultProps => BaseComponent => props => {
  const newProps = Object.keys(props).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: props[curr] ?? defaultProps[curr]
    }),
    {}
  );

  return <BaseComponent {...newProps} />;
};

export { defaultPropsHOC as defaultProps };
