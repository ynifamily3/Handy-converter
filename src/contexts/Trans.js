import React, { createContext } from "react";
import { useState } from "react";

const TransContext = createContext({
  state: [
    {
      from: 10, // 10진법에서
      to: 2, // 2진법으로
      input: "" // 초기 인풋은 없음.
    }
  ],
  actions: {
    setTrans: () => {}, // trans들의 배열.
    setTransIth: () => {}
  }
});

const TransProvider = ({ children }) => {
  const [trans, setTrans] = useState([
    {
      from: 10,
      to: 2,
      input: ""
    }
  ]);

  const setTransIth = idx => {
    // immutable하게 trans의 i번째 원소를 수정하는 setTrans를 만들어냄
    // value는 새로 생성된 새로운 포인터(?)여야 함.
    // console.log(idx, "번째");
    return value => {
      const transPrefix = trans.slice(0, idx);
      const transPostfix = trans.slice(idx);
      transPostfix[0] = value;
      setTrans(transPrefix.concat(transPostfix));
    };
  };

  const value = {
    state: { trans },
    actions: { setTrans, setTransIth }
  };
  return (
    <TransContext.Provider value={value}>{children}</TransContext.Provider>
  );
};

const { Consumer: TransConsumer } = TransContext;

export { TransProvider, TransConsumer };

export default TransContext;
