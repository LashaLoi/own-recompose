import React from "react";

export const withHandlers = handlers => BaseComponent => props => {
  const enhanceProps = Object.keys(handlers).reduce(
    (acc, handler) => ({
      ...acc,
      [handler]: event => handlers[handler](props)(event)
    }),
    {}
  );

  return <BaseComponent {...props} {...enhanceProps} />;
};
