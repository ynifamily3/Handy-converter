(this.webpackJsonptranslator=this.webpackJsonptranslator||[]).push([[0],[,function(e,t,a){e.exports={trans1Box:"Trans1Box_trans1Box__3cWDm",translateBoxGrad:"Trans1Box_translateBoxGrad__2fP-h",trans1Box__fixed:"Trans1Box_trans1Box__fixed__2HGTi",trans1Box__inoutBox:"Trans1Box_trans1Box__inoutBox__2tsfe",trans1Box__input:"Trans1Box_trans1Box__input__3Zjw7",trans1Box__output:"Trans1Box_trans1Box__output__159HP",trans1Box__arrow:"Trans1Box_trans1Box__arrow__3hggf",trans1Box__activated:"Trans1Box_trans1Box__activated__2VXs7"}},function(e,t,a){e.exports={wrapper:"Gnb_wrapper__1qt2K",functionsList:"Gnb_functionsList__230C5",logo:"Gnb_logo__1TbIU",language:"Gnb_language__wFAXq",currentFunction:"Gnb_currentFunction__3pqwN"}},,,function(e,t,a){e.exports={addBox:"AddBox_addBox__Pr6D2",addButton:"AddBox_addButton__38KYY"}},,,,,function(e,t,a){e.exports={wrapper:"Main_wrapper__2TkSt"}},function(e,t,a){e.exports={wrapper:"Footer_wrapper__2AMk0"}},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(17),a(2)),s=a.n(c),i=a(4),u={langList:["korean","english","japanese"],text:{lang:["\ud55c\uad6d\uc5b4","English","\u65e5\u672c\u8a9e"],logo:["\ub85c\uace0","logo","\u30ed\u30b4"],trans1:["\uc9c4\ubc95 \ubcc0\ud658\uae30","scale conversion","\u9032\u6cd5\u5909\u63db"],trans2:["\ub2e8\uc704 \ubcc0\ud658\uae30(\uc11c\ube44\uc2a4 \uc900\ube44\uc911)","unit conversion(Preparing service)","\u5358\u4f4d\u5909\u63db(\u30b5\u30fc\u30d3\u30b9\u6e96\u5099\u4e2d)"],trans1_introduce:["N\uc9c4\ubc95 \ubcc0\ud658\uae30 - \ud3b8\ub9ac\ud558\uac8c \ubcc0\ud658\ud558\uc138\uc694!","N-Vibration Transducer - Convenient Conversion!","N\u9032\u6cd5\u5909\u63db\u5668 - \u4fbf\u5229\u306b\u5909\u63db\u3057\u3066\u304f\u3060\u3055\u3044!"],detect:["\uc790\ub3d9\uac10\uc9c0","auto configuration","\u81ea\u52d5\u691c\u51fa"],invalid_input:["\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uac12\uc785\ub2c8\ub2e4 !","Invalid value!","\u7121\u52b9\u306a\u5024\u3067\u3059\uff01"],emotion:["(\u22c8\u2022\u0300 \u1d17\u2022\u0301\u22c8)","(\u22c8\u2022\u0300 \u1d17\u2022\u0301\u22c8)2","(\u22c8\u2022\u0300 \u1d17\u2022\u0301\u22c8)3"],add:["\ucd94\uac00","Add","\u8ffd\u52a0"],base_select2:["2\uc9c4\ubc95","Binary","2\u9032\u6cd5"],base_select8:["8\uc9c4\ubc95","Octal","8\u9032\u6cd5"],base_select10:["10\uc9c4\ubc95","Decimal","10\u9032\u6cd5"],base_select16:["16\uc9c4\ubc95","Hex","16\u9032\u6cd5"]}},_={},m=function(e){if(e in _)return _[e];if(-1!==u.langList.indexOf(e)){var t=function(e){var t={};return Object.entries(u.text).forEach((function(a,n){t[a[0]]=a[1][e]})),t}(u.langList.indexOf(e));return _[e]=t,t}throw new Error("no lang")},d=a(3),f=a.n(d),v=Object(n.createContext)({language:"korean",setLanguage:function(){}}),g=function(e){var t=e.children,a=u.langList,o=f.a.get("language"),l=Object(n.useState)(o||a[0]),c=Object(i.a)(l,2),s=c[0],_=c[1],d=Object(n.useMemo)((function(){return m(s)}),[s]),g={language:s,setLanguage:_,lang:d};return r.a.createElement(v.Provider,{value:g},t)},p=v.Consumer,E=v,x=function(e){return e.langs.map((function(e,t){return r.a.createElement("option",{key:e,value:e},u.text.lang[t])}))},b=function(){var e=s.a.wrapper,t=s.a.logo,a=s.a.functionsList,o=s.a.language,l=s.a.currentFunction,c=Object(n.useCallback)((function(e){return function(t){e(t.target.value),f.a.set("language",t.target.value)}}),[]);return r.a.createElement(p,null,(function(n){var s=n.lang;return r.a.createElement("div",{className:e},r.a.createElement("div",{className:t},r.a.createElement("img",{src:"/logo.png",alt:s.logo})),r.a.createElement("ul",{className:a},r.a.createElement("li",{className:l},s.trans1),r.a.createElement("li",null,s.trans2)),r.a.createElement("div",{className:o,value:s.language},r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons"},"arrow_drop_down")),r.a.createElement("select",{onChange:c(n.setLanguage),value:n.language},r.a.createElement(x,{langs:u.langList}))))}))},B=a(10),N=a.n(B),C=a(5),k=a.n(C),h=a(1),w=a.n(h);var T=function(e,t,a){return parseInt(e,t).toString(a)};function O(e,t,a,n,r){/^[A-Za-z0-9+]*$/.test(n)&&(e.current.value=""!==n?T(n,t,a):"",isNaN(e.current.value)&&(e.current.value=r))}var j=function(e){var t=e.from,a=e.to,o=e.input,l=e.setTransIth,c=Object(n.useRef)(),s=Object(n.useContext)(E).lang,i=w.a.trans1Box,u=w.a.trans1Box__fixed,_=w.a.trans1Box__input,m=w.a.trans1Box__output,d=w.a.trans1Box__arrow,f=w.a.trans1Box__inoutBox,v=w.a.trans1Box__functionFrom,g=w.a.trans1Box__functionTo,p=w.a.trans1Box__activated,x=Object(n.useCallback)((function(e){O(c,t,a,e.target.value,s.invalid_input),l({from:t,to:a,input:e.target.value})}),[t,a,l,s]),b=Object(n.useCallback)((function(e){return function(t){O(c,e,a,o,s.invalid_input),l({from:e,to:a,input:o})}}),[a,o,l,s]),B=Object(n.useCallback)((function(e){return function(a){O(c,t,e,o,s.invalid_input),l({from:t,to:e,input:o})}}),[t,o,l,s]);return r.a.createElement("div",{className:i},r.a.createElement("div",{className:u},s.emotion),r.a.createElement("div",{className:f},r.a.createElement("div",{className:_},r.a.createElement("input",{type:"search",value:o,onChange:x}),r.a.createElement("ul",{className:v},r.a.createElement("li",{className:2===t?p:void 0},r.a.createElement("button",{onClick:b(2)},s.base_select2)),r.a.createElement("li",{className:8===t?p:void 0},r.a.createElement("button",{onClick:b(8)},s.base_select8)),r.a.createElement("li",{className:10===t?p:void 0},r.a.createElement("button",{onClick:b(10)},s.base_select10)),r.a.createElement("li",{className:16===t?p:void 0},r.a.createElement("button",{onClick:b(16)},s.base_select16)))),r.a.createElement("div",{className:d},"=>"),r.a.createElement("div",{className:m},r.a.createElement("input",{type:"search",readOnly:!0,ref:c}),r.a.createElement("ul",{className:g},r.a.createElement("li",{className:2===a?p:void 0},r.a.createElement("button",{onClick:B(2)},s.base_select2)),r.a.createElement("li",{className:8===a?p:void 0},r.a.createElement("button",{onClick:B(8)},s.base_select8)),r.a.createElement("li",{className:10===a?p:void 0},r.a.createElement("button",{onClick:B(10)},s.base_select10)),r.a.createElement("li",{className:16===a?p:void 0},r.a.createElement("button",{onClick:B(16)},s.base_select16))))))},L=Object(n.createContext)({state:[{from:10,to:2,input:""}],actions:{setTrans:function(){},setTransIth:function(){}}}),I=function(e){var t=e.children,a=Object(n.useState)([{from:10,to:2,input:""}]),o=Object(i.a)(a,2),l=o[0],c=o[1],s={state:{trans:l},actions:{setTrans:c,setTransIth:function(e){return function(t){var a=l.slice(0,e),n=l.slice(e);n[0]=t,c(a.concat(n))}}}};return r.a.createElement(L.Provider,{value:s},t)},G=L.Consumer;var y=function(e){e.lang;var t=N.a.wrapper,a=k.a.addBox,o=k.a.addButton,l=Object(n.useCallback)((function(e,t){return function(a){t(e.trans.concat({from:10,to:2,input:""}))}}),[]);return r.a.createElement(p,null,(function(e){var n=e.lang;return r.a.createElement("div",{className:t},r.a.createElement("h1",null,n.trans1_introduce),r.a.createElement(G,null,(function(e){return e.state.trans.map((function(t,a){return r.a.createElement(j,{key:"trans1".concat(a.toString()),from:t.from,to:t.to,input:t.input,setTransIth:e.actions.setTransIth(a)})}))})),r.a.createElement("div",{className:a},r.a.createElement(G,null,(function(e){return r.a.createElement("button",{className:o,onClick:l(e.state,e.actions.setTrans)},n.add)}))))}))},A=a(11),F=a.n(A);var P=function(e){var t=F.a.wrapper;return r.a.createElement("div",{className:t},"\u24d2 Miel.dev Corp.")};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement(I,null,r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(P,null))))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.b21ebf25.chunk.js.map