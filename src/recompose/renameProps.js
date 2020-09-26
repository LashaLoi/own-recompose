import { createElement } from "react";

export const renameProps = (
  oldPropName,
  newPropName
) => BaseComponent => props => {
  const newProps = Object.keys(props).reduce((acc, curr) => {
    if (curr === oldPropName) {
      return {
        ...acc,
        [newPropName]: props[oldPropName]
      };
    }

    return {
      ...acc,
      [curr]: props[curr]
    };
  }, {});

  return createElement(BaseComponent, newProps);
};
