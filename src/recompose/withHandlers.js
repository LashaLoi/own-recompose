import React from "react";

export const withHandlers = handlers => Component => props => {
  const enhanceProps = Object.keys(handlers).reduce(
    (acc, handler) => ({
      ...acc,
      [handler]: event => handlers[handler](props)(event)
    }),
    {}
  );

  return <Component {...props} {...enhanceProps} />;
};
