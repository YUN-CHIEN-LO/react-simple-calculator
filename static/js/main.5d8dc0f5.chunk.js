(this["webpackJsonpreact-simple-calculator"]=this["webpackJsonpreact-simple-calculator"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),r=t(4),l=t.n(r),s=(t(13),t(5)),i=t(6),u=t(2),o=t(8),b=t(7),d=(t(14),t(0)),h=["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","*","RESET","="],m=function(e){Object(o.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={text:"",number:0,calState:"",clearFlag:!1},e.doCalculate=function(a){var t=e.state,c=t.number,n=a;switch(t.calState){case"plus":n=c+a;break;case"minus":n=c-a;break;case"time":n=c*a;break;case"divide":n=c/a;break;case"reset":n=0}return n},e.handleClick=function(a){var t=e.state,c=t.text,n=t.number,r=t.calState,l=t.clearFlag,s=Object(u.a)(e).doCalculate,i=c.length>0?parseFloat(c.replace(/^\./,"0.")):0,o=c,b="",d=0,h=l;switch(a){case"+":d=s(i),b="plus",h=!0;break;case"-":d=s(i),b="minus",h=!0;break;case"*":d=s(i),b="time",h=!0;break;case"/":d=s(i),b="divide",h=!0;break;case"DEL":o=c.slice(0,-1).replace(/\.$/,"");break;case"RESET":o="",d=s(0);break;case"=":var m=(d=s(i)).toString();o="NaN"===m?"Error":m.match(/\./)?m.slice(0,9):m.length>8?"Exceed":m,b="equals";break;default:l?(o=a,h=!l):o=1===c.length&&0===c.length[0]&&"0"===a?"":c.length>=8||"."===a&&c.match(/\./)?c:c+a,b="equals"===r?"":r,d="equals"===r?0:n}e.setState({text:o,number:d,calState:b,clearFlag:h})},e.renderBtn=function(){var a=Object(u.a)(e).handleClick;return Object(d.jsx)("div",{className:"calculator__body",children:h.map((function(e){var t=parseInt(e)||0===parseInt(e)||"="===e?"calculator--dark":"",c="RESET"===e||"="===e?"calculator--large":"";return Object(d.jsx)("div",{className:"calculator__btn ".concat(c," ").concat(t),onClick:function(){a(e)},children:e},e)}))})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.text,a=this.renderBtn;return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"calculator",children:[Object(d.jsxs)("div",{className:"calculator__input",children:[" ",e," "]}),a()]})})}}]),t}(c.Component),p=m,j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),c(e),n(e),r(e),l(e)}))};l.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.5d8dc0f5.chunk.js.map