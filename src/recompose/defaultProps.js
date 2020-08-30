import React from "react";

const defaultPropsHoc = defaultProps => Component => props => {
  const newProps = Object.keys(props).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: props[curr] ?? defaultProps[curr]
    }),
    {}
  );

  return <Component {...newProps} />;
};

export { defaultPropsHoc as defaultProps };
