import React, { useContext } from "react";
import boxes from "./Trans1Box.module.scss";
import { useCallback, useRef } from "react";

import from_N_to_N from "../libs/conv.js";

import LanguageContext from "../contexts/Language";

/*
    from={x.from}
    to={x.to}
    input={x.input}
*/

function injectValue(ref, from, to, value, invalid) {
  // console.log(e.target.value);
  var num_alp_regex = /^[A-Za-z0-9+]*$/;
  if (!num_alp_regex.test(value)) return;
  // console.log(outputReference);
  ref.current.value = value !== "" ? from_N_to_N(value, from, to) : "";
  if (isNaN(ref.current.value)) {
    ref.current.value = invalid;
  }
}

function Trans1Box({ from, to, input, setTransIth }) {
  const outputReference = useRef();
  const { lang } = useContext(LanguageContext);
  const {
    trans1Box,
    trans1Box__fixed,
    trans1Box__input,
    trans1Box__output,
    trans1Box__arrow,
    trans1Box__inoutBox,
    trans1Box__functionFrom,
    trans1Box__functionTo,
    trans1Box__activated
  } = boxes;
  const inputHandle = useCallback(
    e => {
      injectValue(
        outputReference,
        from,
        to,
        e.target.value,
        lang["invalid_input"]
      );
      setTransIth({
        from,
        to,
        input: e.target.value
      });
    },
    [from, to, setTransIth, lang]
  );

  const handleFromSet = useCallback(
    from => e => {
      injectValue(outputReference, from, to, input, lang["invalid_input"]);
      setTransIth({
        from,
        to,
        input
      });
    },
    [to, input, setTransIth, lang]
  );

  const handleToSet = useCallback(
    to => e => {
      injectValue(outputReference, from, to, input, lang["invalid_input"]);
      setTransIth({
        from,
        to,
        input
      });
    },
    [from, input, setTransIth, lang]
  );
  return (
    <div className={trans1Box}>
      <div className={trans1Box__fixed}>{lang["emotion"]}</div>
      <div className={trans1Box__inoutBox}>
        <div className={trans1Box__input}>
          <input type="search" value={input} onChange={inputHandle} />
          <ul className={trans1Box__functionFrom}>
            <li className={from === 2 ? trans1Box__activated : undefined}>
              <button onClick={handleFromSet(2)}>{lang["base_select2"]}</button>
            </li>
            <li className={from === 8 ? trans1Box__activated : undefined}>
              <button onClick={handleFromSet(8)}>{lang["base_select8"]}</button>
            </li>
            <li className={from === 10 ? trans1Box__activated : undefined}>
              <button onClick={handleFromSet(10)}>
                {lang["base_select10"]}
              </button>
            </li>
            <li className={from === 16 ? trans1Box__activated : undefined}>
              <button onClick={handleFromSet(16)}>
                {lang["base_select16"]}
              </button>
            </li>
          </ul>
        </div>
        <div className={trans1Box__arrow}>=></div>
        <div className={trans1Box__output}>
          <input type="search" readOnly ref={outputReference} />
          <ul className={trans1Box__functionTo}>
            <li className={to === 2 ? trans1Box__activated : undefined}>
              <button onClick={handleToSet(2)}>{lang["base_select2"]}</button>
            </li>
            <li className={to === 8 ? trans1Box__activated : undefined}>
              <button onClick={handleToSet(8)}>{lang["base_select8"]}</button>
            </li>
            <li className={to === 10 ? trans1Box__activated : undefined}>
              <button onClick={handleToSet(10)}>{lang["base_select10"]}</button>
            </li>
            <li className={to === 16 ? trans1Box__activated : undefined}>
              <button onClick={handleToSet(16)}>{lang["base_select16"]}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trans1Box;
