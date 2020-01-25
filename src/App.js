import React from "react";
import "./App.scss";

import Gnb from "./components/Gnb";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { TransProvider } from "./contexts/Trans";
import { LanguageProvider } from "./contexts/Language";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <TransProvider>
          <Gnb />
          <Main />
          <Footer />
        </TransProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
