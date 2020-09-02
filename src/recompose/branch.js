import React from "react";

export const branch = (test, LeftComponent) => BaseComponent => props => {
  if (test) return <LeftComponent {...props} />;

  return <BaseComponent {...props} />;
};
