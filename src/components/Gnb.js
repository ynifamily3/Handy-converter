import React, { useCallback } from "react";
import styles from "./Gnb.module.scss";
import { LanguageConsumer } from "../contexts/Language";
import { langpack } from "../lang_pack"; // 다국어 지원.
import ls from "local-storage";

const Langs = props => {
  const { langs } = props;
  return langs.map((x, i) => (
    <option key={x} value={x}>
      {langpack.text.lang[i]}
    </option>
  ));
};

const Gnb = () => {
  const { wrapper, logo, functionsList, language, currentFunction } = styles;
  const changeLanguage = useCallback(
    setFn => e => {
      setFn(e.target.value);
      // alert(e.target.value);
      ls.set("language", e.target.value);
    },
    []
  );
  return (
    <LanguageConsumer>
      {value => {
        const { lang } = value;
        // console.log(value);
        return (
          <div className={wrapper}>
            <div className={logo}>
              <img src="/logo.png" alt={lang["logo"]} />
            </div>
            <ul className={functionsList}>
              <li className={currentFunction}>{lang["trans1"]}</li>
              <li>{lang["trans2"]}</li>
            </ul>
            <div className={language} value={lang["language"]}>
              <div>
                <i className="material-icons">arrow_drop_down</i>
              </div>
              <select
                onChange={changeLanguage(value.setLanguage)}
                value={value.language}
              >
                <Langs langs={langpack.langList} />
              </select>
            </div>
          </div>
        );
      }}
    </LanguageConsumer>
  );
};

export default Gnb;
