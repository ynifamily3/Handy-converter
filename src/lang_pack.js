const langpack = {
  langList: ["korean", "english", "japanese"],
  text: {
    lang: ["한국어", "English", "日本語"],
    logo: ["로고", "logo", "ロゴ"],
    trans1: ["진법 변환기", "scale conversion", "進法変換"],
    trans2: [
      "단위 변환기(서비스 준비중)",
      "unit conversion(Preparing service)",
      "単位変換(サービス準備中)"
    ],
    trans1_introduce: [
      "N진법 변환기 - 편리하게 변환하세요!",
      "N-Vibration Transducer - Convenient Conversion!",
      "N進法変換器 - 便利に変換してください!"
    ],
    detect: ["자동감지", "auto configuration", "自動検出"],
    invalid_input: [
      "유효하지 않은 값입니다 !",
      "Invalid value!",
      "無効な値です！"
    ],
    emotion: ["(⋈•̀ ᴗ•́⋈)", "(⋈•̀ ᴗ•́⋈)2", "(⋈•̀ ᴗ•́⋈)3"],
    add: ["추가", "Add", "追加"],
    base_select2: ["2진법", "Binary", "2進法"],
    base_select8: ["8진법", "Octal", "8進法"],
    base_select10: ["10진법", "Decimal", "10進法"],
    base_select16: ["16진법", "Hex", "16進法"]
  }
};

const filtered = langIndex => {
  let obj = {};
  Object.entries(langpack.text).forEach((x, i) => {
    obj[x[0]] = x[1][langIndex];
  });
  return obj;
};

let factory = {}; // saved factory

const filtered_lang = langName => {
  if (langName in factory) {
    return factory[langName];
  }
  const index = langpack.langList.indexOf(langName);
  if (index !== -1) {
    const result = filtered(langpack.langList.indexOf(langName));
    factory[langName] = result;
    return result;
  }
  throw new Error("no lang");
};

// export filtered;
export { langpack, filtered_lang };
export default langpack;
