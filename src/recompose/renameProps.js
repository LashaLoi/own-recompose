import React from "react";

export const renameProps = (oldPropName, newPropName) => Component => props => {
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

  return <Component {...newProps} />;
};
