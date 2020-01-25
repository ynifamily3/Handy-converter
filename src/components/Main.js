import React from "react";
import styles from "./Main.module.scss";
import addBoxes from "./AddBox.module.scss";

import Trans1Box from "./Trans1Box";
import { LanguageConsumer } from "../contexts/Language";

import { TransConsumer } from "../contexts/Trans";
import { useCallback } from "react";

function Main({ lang }) {
  const { wrapper } = styles;
  const { addBox, addButton } = addBoxes;
  const handleAddTrans = useCallback(
    (prevState, setFn) => e => {
      setFn(
        prevState.trans.concat({
          from: 10,
          to: 2,
          input: ""
        })
      );
    },
    []
  );
  return (
    <LanguageConsumer>
      {value => {
        const { lang } = value;
        return (
          <div className={wrapper}>
            <h1>{lang["trans1_introduce"]}</h1>
            <TransConsumer>
              {value => {
                return value.state.trans.map((x, i) => {
                  return (
                    <Trans1Box
                      key={"trans1".concat(i.toString())}
                      from={x.from}
                      to={x.to}
                      input={x.input}
                      setTransIth={value.actions.setTransIth(i)}
                    />
                  );
                });
              }}
            </TransConsumer>
            <div className={addBox}>
              <TransConsumer>
                {value => {
                  return (
                    <button
                      className={addButton}
                      onClick={handleAddTrans(
                        value.state,
                        value.actions.setTrans
                      )}
                    >
                      {lang["add"]}
                    </button>
                  );
                }}
              </TransConsumer>
            </div>
          </div>
        );
      }}
    </LanguageConsumer>
  );
}

export default Main;
