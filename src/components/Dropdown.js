import React, { useState, useCallback } from "react";
import styles from "./Dropdown.module.scss";
import clsx from "clsx";

let globalSetValue;

const makeClickFn = (value, text) => {
  return e => {
    // console.log(value);
    globalSetValue({ value, text });
  };
};

const Dropdown = ({ children }) => {
  const { wrapper, defaultValue, show, defaultWrapper, activatedBox } = styles;
  const [activated, setActivated] = useState(false);
  const defaultText =
    typeof children !== "undefined"
      ? Array.isArray(children)
        ? {
            value: children[0].props.children,
            text: children[0].props.children
          }
        : { value: children.props.children, text: children.props.children }
      : { value: "", text: "" };
  const [value, setValue] = useState(defaultText);
  globalSetValue = setValue;
  const toggleActivated = useCallback(
    e => {
      // e.stopPropagation();
      setActivated(!activated);
    },
    [activated]
  );

  const releaseActivated = useCallback(e => {
    // setActivated(false);
  }, []);

  return (
    <div
      className={clsx(wrapper, activated && activatedBox)}
      role="button"
      onClick={toggleActivated}
      onBlur={releaseActivated}
      tabIndex="0"
    >
      <div className={defaultWrapper}>
        <div className={defaultValue}>{value.text}</div>
      </div>
      <ul className={clsx(activated && show)}>{children}</ul>
    </div>
  );
};
Dropdown.Item = ({ children, value }) => {
  // console.log(value);
  return (
    <li tabIndex="0" role="button" onClick={makeClickFn(value, children)}>
      {children}
    </li>
  );
};

export default Dropdown;
