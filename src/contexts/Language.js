import React, { createContext, useState, useMemo } from "react";
import { langpack, filtered_lang } from "../lang_pack"; // 다국어 지원.
import ls from "local-storage";

const LanguageContext = createContext({
  language: "korean",
  setLanguage: () => {}
});

const LanguageProvider = ({ children }) => {
  const languageList = langpack["langList"];
  const lsget = ls.get("language");
  const [language, setLanguage] = useState(lsget ? lsget : languageList[0]);
  const lang = useMemo(() => filtered_lang(language), [language]);

  const value = {
    language,
    setLanguage,
    lang // 언어팩
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const { Consumer: LanguageConsumer } = LanguageContext;

export { LanguageProvider, LanguageConsumer };

export default LanguageContext;
