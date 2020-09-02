import React from "react";

export const branch = (test, LeftComponent) => Component => props => {
  if (test) return <LeftComponent {...props} />;

  return <Component {...props} />;
};
