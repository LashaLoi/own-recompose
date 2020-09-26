import { createElement } from "react";

const defaultPropsHOC = defaultProps => BaseComponent => props => {
  const newProps = Object.keys(props).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: props[curr] ?? defaultProps[curr]
    }),
    {}
  );

  return createElement(BaseComponent, { ...props, ...newProps });
};

export { defaultPropsHOC as defaultProps };
