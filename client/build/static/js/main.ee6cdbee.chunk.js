(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{82:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(27),l=n.n(o),s=n(100),i=n(60),u=n(21),f=n(59),j=n(95),d=n(97),b=n(103),h=n(98),p=n(101),O=n(2),m=Object(j.a)({root:{width:100,display:"flex",flexDirection:"column",alignItems:"center"},cardActionArea:{height:"100%",width:"100%",display:"flex"},paper:{width:50,height:75,display:"flex",justifyContent:"center",alignItems:"center"},counter:{marginTop:10},header:{marginBottom:10}}),y=function(e){var t=e.cardsLeft,n=e.drawCard,a=m();return Object(O.jsxs)(d.a,{item:!0,className:a.root,children:[Object(O.jsx)(b.a,{className:a.header,children:"Talon"}),Object(O.jsx)(h.a,{className:a.paper,children:Object(O.jsx)(p.a,{className:a.cardActionArea,onClick:function(){n(1)},children:Object(O.jsx)(b.a,{variant:"h4",align:"center",children:"\ud83c\udccf"})})}),Object(O.jsxs)(b.a,{className:a.counter,children:["Cards left: ",t]})]})},g=Object(j.a)({root:{width:50,height:75,display:"flex",justifyContent:"center",alignItems:"center"},cardActionArea:{height:"100%",width:"100%",display:"flex"}}),x=function(e){var t=e.type,n=e.value,a=e.clickable,r=e.playCard,c=g(),o={Eichel:"\u2663\ufe0f",Eichel2:"\u2667",Blatt:"\u2660\ufe0f",Blatt2:"\u2664",Herz:"\u2665\ufe0f",Herz2:"\u2661",Schellen:"\u2666\ufe0f",Schellen2:"\u2662"};return Object(O.jsx)(h.a,{className:c.root,style:{border:""===t?"1px dashed lightgrey":""},onClick:function(){a&&"undefined"!==typeof r&&r(t,n)},children:Object(O.jsx)(p.a,{className:c.cardActionArea,style:{pointerEvents:a?"auto":"none"},children:Object(O.jsxs)(s.a,{children:[Object(O.jsxs)(b.a,{align:"center",children:[o[t+"2"],"\xa0\xa0\xa0\xa0\xa0",o[t]]}),Object(O.jsx)(b.a,{align:"center",children:n}),Object(O.jsxs)(b.a,{align:"center",children:[o[t],"\xa0\xa0\xa0\xa0\xa0",o[t+"2"]]})]})})})},v=Object(j.a)({root:{width:100,display:"flex",flexDirection:"column",alignItems:"center"},header:{marginBottom:10},footer:{marginTop:10}}),C=function(e){var t=e.trumpCard,n=v();return Object(O.jsxs)(d.a,{className:n.root,children:[Object(O.jsx)(b.a,{className:n.header,children:"Trump"}),Object(O.jsx)(x,{type:t.type,value:t.value,clickable:!1}),Object(O.jsx)(b.a,{className:n.footer,children:"\u2800"})]})},w=Object(j.a)({root:{marginTop:100},header:{marginBottom:10}}),E=function(e){var t=e.playedCards,n=e.playerCount,a=w(),c=0,o=Object(r.useState)(new Array(n).fill({type:"",value:""})),l=Object(u.a)(o,2),s=l[0],i=l[1];return Object(r.useEffect)((function(){for(var e=t,a=t.length;a<n;a++)e.push({type:"",value:""});i(e)}),[t,n]),Object(O.jsxs)(d.a,{container:!0,justifyContent:"center",className:a.root,children:[Object(O.jsx)(b.a,{className:a.header,children:"Played cards:"}),Object(O.jsx)(d.a,{container:!0,spacing:2,justifyContent:"center",children:s.map((function(e){return c++,Object(O.jsx)(d.a,{item:!0,children:Object(O.jsx)(x,{type:e.type,value:e.value,clickable:!1})},c)}))})]})},S=Object(j.a)({root:{marginTop:100},header:{marginBottom:10}}),N=function(e){var t=e.userCards,n=e.playCard,a=S(),r=0;return Object(O.jsxs)(d.a,{container:!0,className:a.root,justifyContent:"center",children:[Object(O.jsx)(b.a,{className:a.header,children:"Your cards:"}),Object(O.jsx)(d.a,{container:!0,spacing:2,justifyContent:"center",children:t.map((function(e){return r++,Object(O.jsx)(d.a,{item:!0,children:Object(O.jsx)(x,{type:e.type,value:e.value,clickable:!0,playCard:n})},r)}))})]})},A=Object(j.a)({root:{margin:10,marginTop:50}}),k=function(){var e=A(),t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(4),l=Object(u.a)(o,2),s=l[0],j=(l[1],Object(r.useState)(new Array(0).fill({type:"",value:""}))),h=Object(u.a)(j,2),p=h[0],m=h[1],g=Object(r.useState)({type:"",value:""}),x=Object(u.a)(g,2),v=x[0],w=x[1],S=Object(r.useState)([{type:"Herz",value:"U"},{type:"Eichel",value:"7"}]),k=Object(u.a)(S,2),B=k[0],z=k[1],I=Object(r.useState)(new Array(0).fill({type:"",value:""})),M=Object(u.a)(I,2),T=M[0],H=M[1],U=function(e){if(T.length<5&&p.length>0){var t=p.slice(p.length-e);m(p.slice(0,p.length-e));var n=T;t.forEach((function(e){n.push(e)})),n.sort((function(e,t){var n=new Map;return n.set("7",0),n.set("U",2),n.set("O",3),n.set("K",4),n.set("10",10),n.set("A",11),n.get(e.value)<n.get(t.value)?-1:n.get(e.value)>n.get(t.value)?1:0})),n.sort((function(e,t){var n=new Map;return n.set("Eichel",0),n.set("Blatt",1),n.set("Herz",2),n.set("Schellen",3),v.type!==e.type&&v.type!==t.type||n.set(v.type,5),n.get(e.value)<n.get(t.value)?-1:n.get(e.value)>n.get(t.value)?1:0})),H(n)}},L=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}},R=function(){0!==T.length?""!==v.value?3!==T.length||U(2):function(){var e=p[p.length-1];m(p.slice(0,p.length-1)),w(e)}():U(3)};return Object(r.useEffect)((function(){console.log("UseEffect 1 was called"),function(){var e=["7","U","O","K","10","A"],t=[];["Eichel","Blatt","Herz","Schellen"].forEach((function(n){return e.forEach((function(e){t.push({type:n,value:e})}))})),t.push.apply(t,t),L(t),m(t)}(),Object(f.a)("http://127.0.0.1:5000").on("onConnectionMessage",(function(e){c(e)}))}),[]),Object(r.useEffect)((function(){console.log("UseEffect 2 was called"),R()}),[p]),Object(O.jsxs)(d.a,{className:e.root,justifyContent:"center",alignContent:"space-around",container:!0,children:[" ",Object(O.jsxs)(b.a,{children:["|",a,"|"]}),Object(O.jsxs)(d.a,{justifyContent:"center",alignItems:"center",container:!0,children:[Object(O.jsx)(y,{cardsLeft:p.length,drawCard:U}),Object(O.jsx)(C,{trumpCard:v})]}),Object(O.jsx)(E,{playedCards:B,playerCount:s}),Object(O.jsx)(N,{userCards:T,playCard:function(e,t){var n=B.filter((function(e){return""!==e.type&&""!==e.value}));if(n.length<s){var a=T.findIndex((function(n){return n.type===e&&n.value===t}));H(T.filter((function(e,t){return t!==a}))),z((function(){return[].concat(Object(i.a)(n),[{type:e,value:t}])}))}}})]})},B=function(){return Object(O.jsx)(s.a,{children:Object(O.jsx)(k,{})})},z=n(53),I=n(54),M=Object(I.a)(a||(a=Object(z.a)(["\n   /* roboto-300 - latin */\n//   @font-face {\n//     font-family: 'Roboto';\n//     font-style: normal;\n//     font-weight: 300;\n//     src: url('../fonts/roboto-v27-latin-300.eot'); /* IE9 Compat Modes */\n//     src: local(''),\n//          url('../fonts/roboto-v27-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n//          url('../fonts/roboto-v27-latin-300.woff2') format('woff2'), /* Super Modern Browsers */\n//          url('../fonts/roboto-v27-latin-300.woff') format('woff'), /* Modern Browsers */\n//          url('../fonts/roboto-v27-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */\n//          url('../fonts/roboto-v27-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */\n//   }\n\n   *{\n        margin: 0;\n        padding: 0;\n        -moz-box-sizing: border-box;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        font-family: \"Roboto\", sans-serif;\n   }\n\n   /* This is here to make my eyes hurt less at night */\n   body{\n      /* background-color: #292929; */\n   }\n\n   /* html {\n        font-size: 62.5%;\n   } */\n   "]))),T=n(58),H=n(99),U=Object(T.a)({palette:{primary:{main:"#c62828"},secondary:{main:"#ff9800"},background:{default:"#00ff00"}}});l.a.render(Object(O.jsxs)(c.a.StrictMode,{children:[Object(O.jsx)(M,{}),Object(O.jsx)(H.a,{theme:U,children:Object(O.jsx)(B,{})})]}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.ee6cdbee.chunk.js.map