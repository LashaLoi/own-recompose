import { createElement } from "react";

export const branch = (test, LeftComponent) => BaseComponent => props => {
  if (test) return createElement(LeftComponent, props);

  return createElement(BaseComponent, props);
};
