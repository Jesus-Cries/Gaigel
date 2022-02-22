(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a,i=n(0),r=n.n(i),c=n(12),s=n.n(c),o=n(166),l=n(8),d=n(98),b=n(155),j=n(170),u=n(49),h=n(157),f=n(6),p=n(158),g=n(165),O=n(159),m=n(2),x=Object(b.a)((function(e){var t;return Object(j.a)({root:(t={},Object(f.a)(t,e.breakpoints.up("sm"),{marginLeft:120,marginRight:120}),Object(f.a)(t,e.breakpoints.up("md"),{gap:"30px"}),Object(f.a)(t,"display","flex"),Object(f.a)(t,"justifyContent","center"),Object(f.a)(t,"alignContent","center"),Object(f.a)(t,"alignItems","center"),Object(f.a)(t,"gap","20px"),t),logo:Object(f.a)({width:"50px"},e.breakpoints.up("md"),{width:"60px"})})})),y=function(){var e=x(),t=Object(u.a)(),n=Object(h.a)(t.breakpoints.up("md"));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(o.a,{className:e.root,children:[Object(m.jsx)("img",{src:"/Header_symbols.png",className:e.logo}),Object(m.jsx)(p.a,{align:"center",variant:n?"h3":"h4",style:{fontWeight:"lighter"},children:"Gaigel"}),Object(m.jsx)("img",{src:"/Header_symbols_mirror.png",className:e.logo})]}),Object(m.jsx)("hr",{style:{width:"100%"}})]})},k=Object(b.a)((function(e){var t;return Object(j.a)({root:(t={},Object(f.a)(t,e.breakpoints.down("sm"),{maxWidth:"420px"}),Object(f.a)(t,e.breakpoints.up("md"),{maxWidth:"800px"}),Object(f.a)(t,"padding",20),Object(f.a)(t,"borderRadius",10),Object(f.a)(t,"backgroundColor","#ffffff"),Object(f.a)(t,"display","flex"),Object(f.a)(t,"flexDirection","column"),Object(f.a)(t,"justifyContent","center"),Object(f.a)(t,"alignContent","center"),Object(f.a)(t,"alignItems","center"),Object(f.a)(t,"gap","20px"),Object(f.a)(t,"boxShadow","5px 5px 15px black"),t),textField:{width:"100%",backgroundColor:"#ffffff",borderRadius:4}})})),w=function(e){var t=e.login,n=k(),a=Object(u.a)(),r=Object(h.a)(a.breakpoints.up("md")),c=Object(i.useState)(""),s=Object(l.a)(c,2),d=s[0],b=s[1],j=Object(i.useState)(""),f=Object(l.a)(j,2),x=f[0],w=f[1],v=function(){""!==d&&""!==x&&t(d,x)};return Object(i.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||v()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),Object(m.jsxs)(o.a,{className:n.root,children:[Object(m.jsx)(y,{}),Object(m.jsx)(p.a,{align:"center",variant:r?"h5":"h6",style:{maxWidth:"35ch",fontWeight:"lighter"},children:"Entscheide dich f\xfcr einen Nutzernamen und tritt einer Lobby bei!"}),Object(m.jsx)(g.a,{className:n.textField,color:"primary",autoFocus:!0,variant:"outlined",label:"Nutzername",onChange:function(e){b(e.target.value)},inputProps:{maxLength:10}}),Object(m.jsx)(g.a,{className:n.textField,variant:"outlined",label:"Lobbycode",onChange:function(e){w(e.target.value)},inputProps:{maxLength:10},helperText:"Tipp: Bei einem bisher nicht verwendeten Lobbycode wird automatisch eine neue Lobby\r erstellt."}),Object(m.jsx)(O.a,{variant:"contained",onClick:v,style:{width:"100%"},children:"Beitreten"})]})},v=n(160),C=n(125),S=n(161),N=Object(b.a)((function(e){var t;return Object(j.a)({root:{width:100,display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},cardActionArea:{height:"100%",width:"100%",display:"flex"},paper:(t={width:40,height:60},Object(f.a)(t,e.breakpoints.up("md"),{width:50,height:75}),Object(f.a)(t,"display","flex"),Object(f.a)(t,"justifyContent","center"),Object(f.a)(t,"alignItems","center"),Object(f.a)(t,"border","none"),t),counter:{fontWeight:"lighter"},header:{fontWeight:"lighter"}})})),A=function(e){var t=e.cardsLeft,n=e.drawCard,a=N(),i=Object(u.a)(),r=Object(h.a)(i.breakpoints.up("md"));return Object(m.jsxs)(v.a,{item:!0,className:a.root,children:[Object(m.jsx)(p.a,{variant:r?"h6":"body1",className:a.header,children:"Talon"}),Object(m.jsx)(C.a,{className:a.paper,children:Object(m.jsx)(S.a,{className:a.cardActionArea,onClick:function(){n(1)},children:Object(m.jsx)("img",{src:"/cardBacksite_noSpaceAround_n1.png",width:r?"50":"40",height:r?"75":"60",alt:""})})}),Object(m.jsxs)(p.a,{variant:r?"body1":"subtitle2",className:a.counter,children:["Karten: ",t]})]})},I=Object(b.a)((function(e){var t,n;return Object(j.a)({root:(t={width:40,height:60},Object(f.a)(t,e.breakpoints.up("md"),{width:50,height:75}),Object(f.a)(t,"border","1px solid #ddd"),Object(f.a)(t,"display","flex"),Object(f.a)(t,"justifyContent","center"),Object(f.a)(t,"alignItems","center"),t),cardActionArea:{height:"100%",width:"100%",display:"flex"},card:(n={height:"100%"},Object(f.a)(n,e.breakpoints.up("md"),{height:"95%"}),Object(f.a)(n,"width","100%"),Object(f.a)(n,"display","flex"),Object(f.a)(n,"flexDirection","column"),Object(f.a)(n,"justifyContent","space-evenly"),Object(f.a)(n,"alignContent","center"),Object(f.a)(n,"alignItems","center"),n),symbolRow:{width:"85%",display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center"}})})),W=function(e){var t=e.type,n=e.value,a=e.clickable,i=e.playCard,r=e.hidden,c=void 0!==r&&r,s=I(),l=Object(u.a)(),d=Object(h.a)(l.breakpoints.up("md")),b={},j=d?13:10;return b.Eichel="/Eichel.png",b.Blatt="/Blatt.png",b.Herz="/Herz.png",b.Schellen="/Bollen.png",Object(m.jsx)(C.a,{className:s.root,onClick:function(){a&&"undefined"!==typeof i&&i(t,n)},children:Object(m.jsx)(S.a,{className:s.cardActionArea,style:{pointerEvents:a?"auto":"none"},children:c&&""!==n?Object(m.jsx)("img",{src:"/cardBacksite_noSpaceAround_n1.png",width:d?"50":"40",height:d?"75":"60",alt:""}):""!==n&&Object(m.jsxs)(o.a,{className:s.card,children:[Object(m.jsxs)(o.a,{className:s.symbolRow,children:[Object(m.jsx)("img",{src:b[t],width:j,height:j,alt:""}),Object(m.jsx)("img",{src:b[t],width:j,height:j,alt:""})]}),Object(m.jsx)(p.a,{variant:d?"h6":"body1",align:"center",style:{fontWeight:"lighter"},children:n}),Object(m.jsxs)(o.a,{className:s.symbolRow,children:[Object(m.jsx)("img",{src:b[t],width:j,height:j,alt:""}),Object(m.jsx)("img",{src:b[t],width:j,height:j,alt:""})]})]})})})},E=Object(b.a)((function(e){return Object(j.a)({root:{width:100,display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},header:{fontWeight:"lighter"}})})),D=function(e){var t=e.trumpCard,n=E(),a=Object(u.a)(),i=Object(h.a)(a.breakpoints.up("md"));return Object(m.jsxs)(v.a,{className:n.root,children:[Object(m.jsx)(p.a,{variant:i?"h6":"body1",className:n.header,children:"Trumpf"}),Object(m.jsx)(W,{type:t.type,value:t.value,clickable:!1}),Object(m.jsx)(p.a,{variant:i?"body1":"subtitle2",children:"\u2800"})]})},T=Object(b.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},header:{fontWeight:"lighter"}})})),z=function(e){var t=e.playedCards,n=e.playerCount,a=e.opening,r=T(),c=Object(u.a)(),s=Object(h.a)(c.breakpoints.up("md")),d=0,b="AndereAlteHat"===a||"H\xf6herHat"===a,j=Object(i.useState)(new Array(n).fill({type:"",value:""})),f=Object(l.a)(j,2),g=f[0],O=f[1];return Object(i.useEffect)((function(){for(var e=t.slice(),a=t.length;a<n;a++)e.push({type:"",value:""});O(e)}),[t,n]),Object(m.jsxs)(o.a,{className:r.root,children:[Object(m.jsx)(p.a,{variant:s?"h6":"body1",className:r.header,children:"Gespielte Karten"}),Object(m.jsx)(v.a,{container:!0,spacing:1,justifyContent:"center",children:g.map((function(e){return d++,Object(m.jsx)(v.a,{item:!0,children:Object(m.jsx)(W,{type:e.type,value:e.value,clickable:!1,hidden:b})},d)}))})]})},L=Object(b.a)((function(e){return Object(j.a)({root:{borderRadius:20,display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},header:{fontWeight:"lighter"}})})),R=function(e){for(var t=e.userCards,n=e.playCard,a=L(),i=Object(u.a)(),r=Object(h.a)(i.breakpoints.up("md")),c=0,s=t.slice(),l=s.length;l<5;l++)s.splice(s.length,0,{type:"",value:""});return Object(m.jsxs)(o.a,{className:a.root,children:[Object(m.jsx)(p.a,{variant:r?"h6":"body1",className:a.header,children:"Deine Karten"}),Object(m.jsx)(v.a,{container:!0,spacing:1,justifyContent:"center",children:s.map((function(e){c++;var t=""!==e.type;return Object(m.jsx)(v.a,{item:!0,children:Object(m.jsx)(W,{type:e.type,value:e.value,clickable:t,playCard:n})},c)}))})]})},H=n(162),B=n(77),F=n.n(B),P=Object(b.a)((function(e){return Object(j.a)({root:{borderRadius:20,display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignContent:"center",alignItems:"center",flex:"flex-grow",gap:"5px"},header:{textAlign:"center",fontWeight:"lighter"},headerBox:{display:"flex",justifyContent:"center",flexDirection:"row",gap:"10px",alignItems:"center"},instructions:{position:"fixed"},buttonContainer:{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",gap:"5px"},button:Object(f.a)({fontSize:10},e.breakpoints.up("md"),{fontSize:14})})})),K=function(e){var t=e.GeElfen,n=e.AndereAlteHat,a=e.H\u00f6herHat,i=e.AufDissle,r=e.handleClick,c=(e.hover,P()),s=Object(u.a)(),l=Object(h.a)(s.breakpoints.up("md"));return Object(m.jsxs)(o.a,{className:c.root,children:[Object(m.jsxs)(o.a,{className:c.headerBox,children:[Object(m.jsx)(F.a,{style:{opacity:"0",width:"50px"},color:"action"}),Object(m.jsx)(p.a,{variant:l?"h6":"body1",className:c.header,children:"Er\xf6ffnung"}),Object(m.jsx)(H.a,{children:Object(m.jsx)(F.a,{onClick:r,color:"action"})})]}),Object(m.jsxs)(o.a,{className:c.buttonContainer,children:[Object(m.jsx)(O.a,{className:c.button,variant:"contained",size:l?"medium":"small",onClick:function(){n()},children:"Andere Alte"}),Object(m.jsx)(O.a,{className:c.button,variant:"contained",size:l?"medium":"small",onClick:function(){t()},children:"Ge-Elfen"}),Object(m.jsx)(O.a,{className:c.button,variant:"contained",size:l?"medium":"small",onClick:function(){a()},children:"H\xf6her hat"}),Object(m.jsx)(O.a,{className:c.button,variant:"contained",size:l?"medium":"small",onClick:function(){i()},children:"Auf Dissle"})]})]})},G=n(70),M=n.n(G),V=Object(b.a)((function(e){return Object(j.a)({root:{maxWidth:"420px",padding:25,borderRadius:10,backgroundColor:"#ffffff",display:"flex",flexDirection:"column",justifyContent:"center",gap:"20px",boxShadow:"5px 5px 15px black"},control:{display:"flex",justifyContent:"space-between",alignItems:"center"},playerList:Object(f.a)({marginTop:10,marginBottom:10,display:"flex",flexDirection:"column",justifyContent:"center",gap:"10px"},e.breakpoints.up("md"),{gap:"15px"}),playerInformation:{display:"flex",justifyContent:"space-between"},lighterFontWeight:{fontWeight:"lighter"},readyInformation:{display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center"},readyButton:{width:"40%"}})})),_=function(e){var t=e.backToLogin,n=e.lobbycode,a=e.playerInformation,i=e.amountReadyPlayers,r=e.getReady,c=V(),s=Object(u.a)(),l=Object(h.a)(s.breakpoints.up("md"));return Object(m.jsxs)(o.a,{className:c.root,children:[Object(m.jsx)(y,{}),Object(m.jsxs)(o.a,{className:c.control,children:[Object(m.jsx)(H.a,{onClick:t,children:Object(m.jsx)(M.a,{fontSize:l?"large":"medium"})}),Object(m.jsxs)(p.a,{variant:l?"h6":"body1",className:c.lighterFontWeight,children:["Lobbycode: ",n]})]}),Object(m.jsxs)(o.a,{className:c.playerList,children:[Object(m.jsx)(p.a,{align:"center",variant:l?"h5":"h6",style:{fontWeight:"lighter"},children:"Spielerliste"}),a.map((function(e){var t;t=1===e.wins?"Sieg":"Siege";var n=Math.random();return Object(m.jsxs)(o.a,{className:c.playerInformation,children:[Object(m.jsx)(p.a,{variant:l?"h6":"body1",className:c.lighterFontWeight,children:e.username}),Object(m.jsxs)(p.a,{variant:l?"h6":"body1",className:c.lighterFontWeight,style:{marginLeft:10},children:[e.wins," ",t]})]},n)}))]}),Object(m.jsxs)(o.a,{className:c.readyInformation,children:[Object(m.jsxs)(p.a,{variant:l?"h6":"body1",className:c.lighterFontWeight,children:["Bereit: ",i," / ",a.length]}),Object(m.jsx)(O.a,{className:c.readyButton,variant:"contained",onClick:r,children:"Bereit"})]})]})},J=Object(b.a)((function(e){return Object(j.a)({root:{minWidth:"250px",maxWidth:"500px",borderRadius:20,display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"center",alignItems:"center",gap:"5px"},name:{padding:5,paddingTop:2,paddingBottom:2,borderRadius:8,fontWeight:"lighter"}})})),Y=function(e){var t=e.order,n=e.playerWithTurn,a=J(),i=Object(u.a)(),r=Object(h.a)(i.breakpoints.up("md"));return Object(m.jsx)(o.a,{className:a.root,children:t.map((function(e,t){var i=e.socketId===n.socketId;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(p.a,{variant:r?"body1":"body2",className:a.name,style:{border:i?"2px solid #ffe600":"none"},children:[t+1,". ",e.username]},e.socketId)})}))})},U=Object(b.a)((function(e){return Object(j.a)({root:{width:"100%",display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center",gap:"10px"},element:{fontWeight:"lighter",width:"50%"},score:{fontWeight:"lighter"}})})),q=function(e){var t=e.username,n=e.lobbycode,a=e.score,i=U(),r=Object(u.a)(),c=Object(h.a)(r.breakpoints.up("md"));return Object(m.jsxs)(o.a,{className:i.root,children:[Object(m.jsx)(p.a,{variant:c?"h6":"subtitle2",className:i.element,children:t}),Object(m.jsx)(p.a,{variant:c?"h5":"h6",className:i.score,children:a}),Object(m.jsx)(p.a,{variant:c?"h6":"subtitle2",className:i.element,align:"right",children:n})]})},Q=n(169),X=n(167),Z=Object(b.a)((function(e){return Object(j.a)({root:{},alert:Object(f.a)({display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},e.breakpoints.up("md"),{fontSize:"16px"})})})),$=function(e){var t=e.snackbarType,n=e.type,a=e.detail,i=e.reset,r=Z(),c="";switch(n){case"gameOngoing":c="Dieser Lobby kann nicht beigetreten werden, da das Spiel bereits im vollen Gange ist.";break;case"falsePlayercount":c="Mit dieser Anzahl an Spielern l\xe4sst sich kein Spiel starten. F\xfcr ein Spiel werden 2, 3, 4 oder 6 Spieler ben\xf6tigt.";break;case"notYourTurn":c="Sie sind nicht an der Reihe und k\xf6nnen daher jetzt keine Karte spielen.";break;case"noOpeningChosen":c="Sie m\xfcssen eine Er\xf6ffnung ausw\xe4hlen, bevor Sie eine Karte spielen k\xf6nnen.";break;case"noAce":c="Sie haben kein Ass. Sie k\xf6nnen dieses Opening nicht spielen.";break;case"noAceButAceOpening":c="Sie haben eine Er\xf6ffnung gew\xe4hlt, bei welcher als erste Karte ein Ass gespielt werden muss.";break;case"aceOrTrumpInH\xf6herHat":c="Sie haben eine Er\xf6ffnung gew\xe4hlt, bei welcher kein Ass und kein Trumpf als erste Karte gespielt werden darf.";break;case"h\xf6herHatNotPossible":c="Sie k\xf6nnen diese Er\xf6ffnung nicht spielen, da sie keine Karte haben, die weder Trumpf noch ein Ass ist.";break;case"waitForCards":c="Sie m\xfcssen warten, bis neue Karten ausgeteilt wurden.";break;case"lobbyFull":c="Diese Lobby hat bereits die maximale Spieleranzahl von 6 Spielern erreicht.";break;case"somebodyWonTheStich":c="".concat(a," hat den Stich gewonnen.");break;case"somebodyWonTheGame":c="".concat(a," hat das Spiel gewonnen.");break;case"newCards":c="Es wurden neue Karten ausgeteilt.";break;case"playerLeft":c="".concat(a," hat das Spiel verlassen. Die Lobby wird in 5 Sekunden geschlossen.");break;case"meldenNotCurrentlyPlaying":c="Sie k\xf6nnen nur melden, wenn Sie die Runde beginnen.";break;case"hatGemeldet":c="".concat(a," hat gemeldet.");break;case"hasToServe":c="Sie m\xfcssen eine Karte in der selben Farbe spielen."}return Object(m.jsx)(Q.a,{open:""!==n,autoHideDuration:5e4,onClose:i,anchorOrigin:{vertical:"warning"===t?"bottom":"top",horizontal:"center"},transitionDuration:0,children:Object(m.jsx)(X.a,{onClose:i,severity:"warning"===t?"warning":"info",className:r.alert,children:c})})},ee=n(163),te=n(72),ne=n.n(te),ae=n(71),ie=n.n(ae),re=Object(b.a)((function(e){return Object(j.a)({root:{zIndex:50,maxWidth:"450px",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:20,display:"flex",flexDirection:"column",gap:"15px",boxShadow:"5px 5px 15px black"},header:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center",gap:"5px"},logo:Object(f.a)({width:"50px"},e.breakpoints.up("md"),{width:"70px"}),rankingHeaderContainer:{display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center"},rankingHeader:{textAlign:"center",fontWeight:"lighter"},rankingContainer:{display:"flex",flexDirection:"column",gap:"5px"},rankingElement:{display:"flex",justifyContent:"space-between"},rankingElementText:{fontWeight:"lighter"},footer:{marginTop:"10px",display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center",gap:"30px"}})})),ce=function(e){var t=e.endInformation,n=e.backToLobby,a=(e.aufDissle,e.losingPlayer),r=re(),c=Object(u.a)(),s=Object(h.a)(c.breakpoints.up("md")),d=Object(i.useState)(!1),b=Object(l.a)(d,2),j=b[0],f=b[1],g=Object(i.useState)(20),x=Object(l.a)(g,2),y=x[0],k=x[1],w=Object(i.useState)([{username:"",score:0,wins:0}]),v=Object(l.a)(w,2),C=v[0],S=v[1],N=t.slice().sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0})),A=t.slice().sort((function(e,t){return e.wins<t.wins?1:e.wins>t.wins?-1:0})),I=function(){f(!j)},W=function e(t){k(t),t>0&&setTimeout((function(){e(t-1)}),1e3)};return Object(i.useEffect)((function(){S(j?A:N)}),[j]),Object(i.useEffect)((function(){k(20),W(20)}),[t]),Object(m.jsxs)(ee.a,{className:r.root,children:[Object(m.jsxs)(o.a,{className:r.header,children:[Object(m.jsx)("img",{src:"/crown.png",className:r.logo}),Object(m.jsx)(p.a,{align:"center",variant:s?"h4":"h5",children:"Ein ".concat(a," hat auf Dissle verloren!")})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(o.a,{className:r.rankingHeaderContainer,children:[Object(m.jsx)(H.a,{onClick:I,children:Object(m.jsx)(ie.a,{})}),Object(m.jsx)(p.a,{className:r.rankingHeader,variant:s?"h5":"h6",children:j?"Ranking":"Platzierungen"}),Object(m.jsx)(H.a,{onClick:I,children:Object(m.jsx)(ne.a,{})})]}),Object(m.jsx)(o.a,{className:r.rankingContainer,children:C.map((function(e,t){return Object(m.jsxs)(o.a,{className:r.rankingElement,children:[Object(m.jsxs)(p.a,{variant:s?"h6":"body1",className:r.rankingElementText,children:[t+1,". ",e.username]}),Object(m.jsxs)(p.a,{variant:s?"h6":"body1",className:r.rankingElementText,children:[j?e.wins:Math.floor(e.score)," ",j?1===e.wins?"Sieg":"Siege":1===e.score?"Punkt":"Punkte"]})]})}))}),Object(m.jsxs)(o.a,{className:r.footer,children:[Object(m.jsx)(O.a,{startIcon:Object(m.jsx)(M.a,{}),variant:"contained",onClick:n,children:"Lobby"}),Object(m.jsxs)(p.a,{align:"right",noWrap:!0,children:["N\xe4chste Runde in ",Object(m.jsx)("b",{children:y})]})]})]})},se=Object(b.a)((function(e){return Object(j.a)({root:{display:"flex",justifyContent:"space-between",gap:"40px"}})})),oe=function(e){var t=e.canCall,n=e.announcing,a=e.melden,i=e.canSteal,r=e.rauben,c=se(),s=Object(u.a)(),l=Object(h.a)(s.breakpoints.up("md"));return Object(m.jsxs)(o.a,{className:c.root,children:[t&&Object(m.jsx)(O.a,{variant:"contained",size:l?"medium":"small",style:{background:!1===n?"#e0e0e0":"#ffdd1f"},onClick:a,children:"Melden"}),i&&Object(m.jsx)(O.a,{variant:"contained",size:l?"medium":"small",onClick:r,children:"Rauben"})]})},le=Object(b.a)((function(e){return Object(j.a)({root:{zIndex:50,position:"fixed",top:"45%",left:"50%",width:"30%",maxWidth:"500px",minWidth:"300px",transform:"translate(-50%, -50%)",padding:20,display:"flex",flexDirection:"column",gap:"15px",boxShadow:"5px 5px 15px black"},buttons:{display:"flex",justifyContent:"space-between",alignItems:"center"}})})),de=function(){var e=le(),t=Object(u.a)(),n=Object(h.a)(t.breakpoints.up("md")),a=Object(i.useState)(0),r=Object(l.a)(a,2),c=r[0],s=r[1];return Object(m.jsxs)(ee.a,{className:e.root,children:[Object(m.jsxs)(o.a,{className:e.buttons,children:[Object(m.jsx)(H.a,{onClick:function(){s(c-1<0?0:c-1)},children:Object(m.jsx)(ie.a,{})}),Object(m.jsx)(p.a,{variant:n?"h5":"h6",style:{fontWeight:"lighter"},children:["Andere Alte hat","Ge-Elfen","H\xf6her hat","Auf Dissle"][c]}),Object(m.jsx)(H.a,{onClick:function(){s(c+1>3?0:c+1)},children:Object(m.jsx)(ne.a,{})})]}),Object(m.jsx)(p.a,{variant:n?"body1":"caption",children:["Bei dieser Er\xf6ffnungsm\xf6glichkeit wird ein Ass verdeckt durch die Vorhand gespielt. Alle anderen Spieler spielen nun auch verdeckt jeweils eine Karte. Der Stich geh\xf6rt dem Spieler, der das gleiche Ass wie die Vorhand gespielt hat. Ist dies nicht der Fall, geh\xf6rt der Stich der Vorhand.","In dieser Er\xf6ffnungsm\xf6glichkeit wird das Ass von der Vorhand offen ausgespielt. Die anderen Spieler k\xf6nnen nun eine beliebige Karte offen abwerfen. Der Stich geht dann an den Spielbeginner.","Bei H\xf6her hat wird eine Karte verdeckt ausgespielt, welche weder ein Ass, noch ein Trumpf ist. Auch die anderen Spieler spielen jeweils eine verdeckte Karte aus. Der Stich geht an den Spieler, welcher eine Karte mit der gleichen Farbe, aber mit h\xf6herem Wert gelegt hat. Wird keine Karte der gleichen Farbe mit h\xf6herem Wert gelegt, so geht der Stich an die Vorhand.","Eine weitere Er\xf6ffnungsm\xf6glichkeit ist Dissle. Sagt die Vorhand zu Beginn des Spiels, dass auf Dissle gespielt wird, so gewinnt die Vorhand das Spiel, falls sie im Verlauf des Spiels f\xfcnf Siebener gleichzeitig besitzt. Die Gegner k\xf6nnen bereits vorher das regul\xe4re Spielende erreichen. Die Vorhand hat das Spiel verloren, wenn sie einen Stich gewinnt."][c]})]})},be=Object(b.a)((function(e){return Object(j.a)({root:{height:"100vh",padding:10,paddingLeft:20,paddingRight:20,borderRadius:20,display:"flex",flexDirection:"column",justifyContent:"space-around",alignContent:"space-around",alignItems:"center"},openingInstructions:{},talonAndTrump:{width:"100%",display:"flex",justifyContent:"space-evenly",alignContent:"center",alignItems:"center"}})})),je=function(){var e=be(),t=Object(u.a)(),n=(Object(h.a)(t.breakpoints.up("md")),Object(i.useState)(!1)),a=Object(l.a)(n,2),r=a[0],c=a[1],s=Object(i.useState)(!1),b=Object(l.a)(s,2),j=b[0],f=b[1],p=Object(i.useState)(""),g=Object(l.a)(p,2),O=g[0],x=g[1],k=Object(i.useState)(0),v=Object(l.a)(k,2),C=v[0],S=v[1],N=Object(i.useState)({lobbycode:"",amountReadyPlayers:0,playerInformation:[{username:"",wins:0}]}),I=Object(l.a)(N,2),W=I[0],E=I[1],T=Object(i.useState)([]),L=Object(l.a)(T,2),H=L[0],B=L[1],F=Object(i.useState)({username:"",socketId:""}),P=Object(l.a)(F,2),G=P[0],M=P[1],V=Object(i.useState)(!1),J=Object(l.a)(V,2),U=J[0],Q=J[1],X=Object(i.useState)(""),Z=Object(l.a)(X,2),ee=Z[0],te=Z[1],ne=Object(i.useState)(""),ae=Object(l.a)(ne,2),ie=(ae[0],ae[1]),re=Object(i.useState)(null),se=Object(l.a)(re,2),le=se[0],je=se[1],ue=Object(i.useState)(!1),he=Object(l.a)(ue,2),fe=he[0],pe=he[1],ge=Object(i.useState)(!1),Oe=Object(l.a)(ge,2),me=Oe[0],xe=Oe[1],ye=Object(i.useState)(!1),ke=Object(l.a)(ye,2),we=ke[0],ve=ke[1],Ce=Object(i.useState)(!1),Se=Object(l.a)(Ce,2),Ne=Se[0],Ae=Se[1],Ie=Object(i.useState)([{username:"",score:0,wins:0}]),We=Object(l.a)(Ie,2),Ee=We[0],De=We[1],Te=Object(i.useState)(new Array(0).fill({type:"",value:""})),ze=Object(l.a)(Te,2),Le=ze[0],Re=ze[1],He=Object(i.useState)({type:"",value:""}),Be=Object(l.a)(He,2),Fe=Be[0],Pe=Be[1],Ke=Object(i.useState)([]),Ge=Object(l.a)(Ke,2),Me=Ge[0],Ve=Ge[1],_e=Object(i.useState)(new Array(5).fill({type:"",value:""})),Je=Object(l.a)(_e,2),Ye=Je[0],Ue=Je[1],qe=Object(i.useState)({type:"",detail:""}),Qe=Object(l.a)(qe,2),Xe=Qe[0],Ze=Qe[1],$e=Object(i.useState)({type:"",detail:""}),et=Object(l.a)($e,2),tt=et[0],nt=et[1],at=Object(i.useState)(!1),it=Object(l.a)(at,2),rt=it[0],ct=it[1],st=Object(i.useState)(!1),ot=Object(l.a)(st,2),lt=ot[0],dt=ot[1],bt=Object(i.useState)(""),jt=Object(l.a)(bt,2),ut=jt[0],ht=jt[1];return Object(i.useEffect)((function(){console.log("UseEffect 1 was called"),je(le)}),[]),Object(i.useEffect)((function(){var e=Object(d.a)("http://127.0.0.1:5000");return je(e),e.on("onConnect",(function(e){ie(e)})),e.on("setLoggedIn",(function(e){c(e)})),e.on("lobbyInformation",(function(e){E(e)})),e.on("setOrder",(function(e){B(e)})),e.on("setPlayerWithTurn",(function(e){M(e)})),e.on("setInfoType",(function(e){nt(e)})),e.on("setWarningType",(function(e){Ze(e)})),e.on("setScore",(function(e){S(e)})),e.on("setGameStarted",(function(e){f(e),console.log("Game state: "+e)})),e.on("setTalon",(function(e){Re(e)})),e.on("setTrumpCard",(function(e){Pe(e)})),e.on("setYourCards",(function(e){Ue(e)})),e.on("setPlayedCards",(function(e){Ve(e)})),e.on("setOpening",(function(e){Q(e)})),e.on("setCurrentOpening",(function(e){te(e)})),e.on("canCall",(function(e){pe(e)})),e.on("canSteal",(function(e){ve(e)})),e.on("setShowEndPopup",(function(e){Ae(e)})),e.on("setEndInformation",(function(e){De(e)})),e.on("lostAufDissle",(function(e){dt(!0),ht(e)})),function(){return e.close()}}),[je]),Object(m.jsxs)(o.a,{className:e.root,style:{backgroundColor:r&&j?"#ffffff":"none",boxShadow:r&&j?"5px 5px 15px black":"none"},children:[r?j?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(q,{username:O,lobbycode:W.lobbycode,score:C}),Object(m.jsx)(Y,{order:H,playerWithTurn:G}),Object(m.jsx)("hr",{style:{width:"100%"}}),Object(m.jsxs)(o.a,{className:e.talonAndTrump,children:[Object(m.jsx)(A,{cardsLeft:Le.length,drawCard:function(){console.log("Want to draw card")}}),Object(m.jsx)(D,{trumpCard:Fe})]}),Object(m.jsx)(z,{playedCards:Me,playerCount:W.playerInformation.length,opening:ee}),Object(m.jsx)("hr",{style:{width:"100%"}}),rt&&Object(m.jsx)(de,{}),Ne&&Object(m.jsx)(ce,{aufDissle:lt,endInformation:Ee,backToLobby:function(){f(!1),le.emit("backToLobby","")},losingPlayer:ut}),(!fe||we)&&Object(m.jsx)(oe,{canCall:!fe,announcing:me,melden:function(){O===G.username?(le.emit("Melden",!me),xe(!me)):Ze({type:"meldenNotCurrentlyPlaying",detail:""})},canSteal:!we,rauben:function(){le.emit("Rauben")}}),U&&Object(m.jsx)(K,{AndereAlteHat:function(){Ye.filter((function(e){return"A"===e.value})).length>0?le.emit("chooseOpening","AndereAlteHat"):Ze({type:"noAce",detail:""})},GeElfen:function(){Ye.filter((function(e){return"A"===e.value})).length>0?le.emit("chooseOpening","GeElfen"):Ze({type:"noAce",detail:""})},"H\xf6herHat":function(){Ye.filter((function(e){return Fe.type!==e.type&&"A"!==e.value})).length<1?Ze({type:"h\xf6herHatNotPossible",detail:""}):le.emit("chooseOpening","H\xf6herHat")},AufDissle:function(){le.emit("chooseOpening","AufDissle")},handleClick:function(){ct(!rt)},hover:rt}),Object(m.jsx)(R,{userCards:Ye,playCard:function(e,t){if(U)Ze({type:"noOpeningChosen",detail:""});else if(Ye.length<5&&Le.length>0)Ze({type:"waitForCards",detail:""});else{var n={type:e,value:t};le.emit("playCard",n)}}})]}):Object(m.jsx)(_,{backToLogin:function(){c(!1),f(!1),le.emit("backToLogin","")},lobbycode:W.lobbycode,playerInformation:W.playerInformation,amountReadyPlayers:W.amountReadyPlayers,getReady:function(){le.emit("getReady","")}}):Object(m.jsx)(w,{login:function(e,t){x(e),le.emit("joinLobby",{username:e,lobbycode:t})}}),Object(m.jsx)($,{snackbarType:"info",type:tt.type,detail:tt.detail,reset:function(e,t){"clickaway"!==t&&nt({type:"",detail:""})}}),Object(m.jsx)($,{snackbarType:"warning",type:Xe.type,detail:Xe.detail,reset:function(e,t){"clickaway"!==t&&Ze({type:"",detail:""})}})]})},ue=function(){return Object(m.jsx)(o.a,{children:Object(m.jsx)(je,{})})},he=n(92),fe=n(93),pe=Object(fe.a)(a||(a=Object(he.a)(["\n   /* roboto-300 - latin */\n//   @font-face {\n//     font-family: 'Roboto';\n//     font-style: normal;\n//     font-weight: 300;\n//     src: url('../fonts/roboto-v27-latin-300.eot'); /* IE9 Compat Modes */\n//     src: local(''),\n//          url('../fonts/roboto-v27-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n//          url('../fonts/roboto-v27-latin-300.woff2') format('woff2'), /* Super Modern Browsers */\n//          url('../fonts/roboto-v27-latin-300.woff') format('woff'), /* Modern Browsers */\n//          url('../fonts/roboto-v27-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */\n//          url('../fonts/roboto-v27-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */\n//   }\n\n   *{\n        margin: 0;\n        padding: 0;\n        -moz-box-sizing: border-box;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        font-family: \"Roboto\", sans-serif;\n   }\n\n   /* This is here to make my eyes hurt less at night */\n   body {\n      background-color: #313131;\n      display: flex;\n      justify-content: center;\n\n      background-image: url(\"/greenBackground.png\");\n      background-size: cover;\n      background-position: center;\n   }\n\n   html {\n        /* font-size: 62.5%; */\n   }\n   "]))),ge=n(97),Oe=n(164),me=Object(ge.a)({palette:{primary:{main:"#c62828"},secondary:{main:"#ff9800"},background:{default:"#00ff00"}}});s.a.render(Object(m.jsxs)(r.a.StrictMode,{children:[Object(m.jsx)(pe,{}),Object(m.jsx)(Oe.a,{theme:me,children:Object(m.jsx)(ue,{})})]}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.79bf59e2.chunk.js.map