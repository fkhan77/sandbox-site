(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/solaire.435a762b.png"},21:function(e,t,a){e.exports=a.p+"static/media/bastion.037d371b.png"},22:function(e,t,a){e.exports=a.p+"static/media/spelunky.424d0b86.png"},25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),r=a.n(o),i=(a(30),a(5)),s=(a(31),a(10)),l=a(1);a(32);var m=function(){return c.a.createElement("div",{className:"home-page--container"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://psmedia.playstation.com/is/image/psmedia/furi-two-column-01-ps4-eu-26oct15?$TwoColumn_Image$",className:"furi",alt:"furi"})),c.a.createElement("div",{style:{fontSize:"48px",width:"40%",margin:"auto",animationName:"furi-animation"}},"Go take a look around and return later..."))},u=a(20),d=a.n(u);a(33);var p=function(){var e=Object(n.useState)(.2),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(4),s=Object(i.a)(r,2),l=s[0],m=s[1],u=Object(n.useState)("WEAK"),p=Object(i.a)(u,2),E=p[0],S=p[1],g=Object(n.useState)(.05),f=Object(i.a)(g,2),h=f[0],v=f[1];return Object(n.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("saveDataSunBro"));e&&(o(e.brightness),m(e.sunbros),S(e.praiseLevelText),v(e.praiseLevel))}),[]),Object(n.useEffect)((function(){var e={brightness:a,sunbros:l,praiseLevelText:E,praiseLevel:h};sessionStorage.setItem("saveDataSunBro",JSON.stringify(e)),JSON.parse(sessionStorage.getItem("saveDataSunBro"))}),[a,l,E,h]),c.a.createElement("div",null,c.a.createElement("img",{src:d.a,className:"solaire",alt:"solaire",style:{filter:"brightness(".concat(a,")"),animationName:"".concat(a>4?"solaire-animation-out":"solaire-animation-in"),animationFillMode:"forwards"},onClick:function(){o(a+h),a+h>4&&(4===l&&(S("LOW"),v(h+.1)),9===l&&(S("MEDIUM"),v(h+.4)),14===l&&(S("HIGH"),v(h+.8)),29===l&&(S("EXTREME"),v(h+.8)),setTimeout((function(){m(l+1),o(0)}),1e3))}}),c.a.createElement("div",{style:{fontSize:"48px"}},"PRAISE LEVEL: ",E),c.a.createElement("div",null,a<.2?"SUN BROS NEVER DIE!":"",a<.7&&a>=.2?"CLICK TO PRAISE!":"",a<1.1&&a>=.7?"KEEP PRAISING!":"",a<1.5&&a>=1.1?"PRAISE THE SUN!":"",a<1.9&&a>=1.5?"GLORIOUS INCANDESCENCE!":"",a<2.3&&a>=1.9?"STOP!":"",a<2.7&&a>=2.3?"PLEASE!":"",a<3.1&&a>=2.7?"MY EYES!":"",a<3.5&&a>=3.1?"OH GOD, PLEASE NO!":"",a<3.9&&a>=3.5?"...":"",a>=3.9?"YOU MONSTER...":""),c.a.createElement("div",null,l?"SUN BROS INCINERATED BY THE DIVINE LIGHT: ".concat(l):""))},E=a(21),S=a.n(E),g=a(24);a(34);var f=function(e){var t=e.cpcNeededToShow,a=e.cost,n=e.cpcUpgrade,o=e.name,r=e.coins,i=e.setCoins,s=e.coinsPerClick,l=e.setCoinsPerClick,m=e.upgrades,u=e.setUpgrades;return s>=t&&!m.includes(o)&&c.a.createElement("div",{style:{width:"50%",height:"100%"}},c.a.createElement("button",{class:"upgrade-button",onClick:function(){r>=a&&(i(r-a),l(s+n),u([].concat(Object(g.a)(m),[o])))},style:{marginBottom:"1rem",marginTop:"1rem"}},o," (+",n," SHARDS PER CLICK): ",a.toLocaleString()))},h=(a(35),a(13)),v=a.n(h);var b=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(10),s=Object(i.a)(r,2),l=s[0],m=s[1],u=Object(n.useState)([]),d=Object(i.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)(""),h=Object(i.a)(g,2),b=h[0],O=h[1];return Object(n.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("saveData"));e&&(o(e.coins),m(e.coinsPerClick),E(e.upgrades),O(e.area))}),[]),Object(n.useEffect)((function(){var e={coins:a,coinsPerClick:l,upgrades:p,area:b};sessionStorage.setItem("saveData",JSON.stringify(e)),JSON.parse(sessionStorage.getItem("saveData"))}),[a,l,p,b]),c.a.createElement("div",null,c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}},c.a.createElement("div",{style:{alignSelf:"flex-start",marginTop:"3%"}},c.a.createElement("div",{style:{fontSize:40}},"Inventory"),p.map((function(e){return c.a.createElement("div",{style:{fontSize:24,color:"green",paddingTop:"0.5rem"}}," ",e)}))),c.a.createElement("div",{style:{alignSelf:"flex-start",marginTop:"3%"}},c.a.createElement("div",{style:{fontSize:40,alignSelf:"flex-start",marginTop:"3%"}},"Stats")),c.a.createElement("div",null,c.a.createElement("img",{src:S.a,className:"bastion",alt:"bastion",style:{filter:"brightness(".concat(.5+.1*p.length,")"),height:"540px"}}))),c.a.createElement("div",null,c.a.createElement("button",{class:"button",onClick:function(){o(a+l)},style:{userSelect:"none"}},"WORK"),c.a.createElement("button",{class:"button",onClick:function(){O("SHOP")},style:{userSelect:"none",marginLeft:"1rem"}},"SHOP"),c.a.createElement("button",{class:"button",onClick:function(){O("DUNGEON")},style:{userSelect:"none",marginLeft:"1rem"}},"FIGHT"),c.a.createElement("button",{class:"button",onClick:function(){O("TREASURE")},style:{userSelect:"none",marginLeft:"1rem"}},"WAGER"),c.a.createElement("button",{class:"button",onClick:function(){confirm("Destroy The Bastion and start all over again?")&&(o(0),m(10),E([]),O(""))},style:{userSelect:"none",marginLeft:"1rem"}},"CLEAR DATA")),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"60%",margin:"auto",alignItems:"center"}},c.a.createElement(v.a,{component:"text",value:a,style:{transition:"0.8s ease-out",fontSize:48,transitionProperty:"background-color, color, opacity",borderRadius:"5px"},duration:300,stepPrecision:0,formatValue:function(e){return"SHARDS: \xa7".concat(e.toLocaleString())}}),c.a.createElement(v.a,{component:"text",value:l,style:{transition:"0.8s ease-out",fontSize:48,transitionProperty:"background-color, color, opacity",borderRadius:"5px"},duration:300,stepPrecision:0,formatValue:function(e){return"SHARDS PER CLICK: \xa7".concat(e.toLocaleString())}})),"SHOP"===b&&c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},[{cpcNeededToShow:0,cost:300,cpcUpgrade:10,name:"BIGGER HAMMER"},{cpcNeededToShow:20,cost:1e3,cpcUpgrade:30,name:"STRONG HAMMER"},{cpcNeededToShow:50,cost:2e3,cpcUpgrade:50,name:"SHINY HAMMER"},{cpcNeededToShow:50,cost:3e3,cpcUpgrade:80,name:"STEROIDS"},{cpcNeededToShow:100,cost:5e3,cpcUpgrade:100,name:"STRONG WORK ETHIC"},{cpcNeededToShow:180,cost:1e4,cpcUpgrade:150,name:"COFFEE"},{cpcNeededToShow:430,cost:15e3,cpcUpgrade:220,name:"INSOMNIA OF BASSAN"},{cpcNeededToShow:650,cost:25e3,cpcUpgrade:300,name:"GAMING SKILLS OF MUSHY PEA"},{cpcNeededToShow:950,cost:5e4,cpcUpgrade:1e3,name:"NOOR'S ALVARADO"},{cpcNeededToShow:1950,cost:25e4,cpcUpgrade:50,name:"A DELICIOUS COOKIE"}].map((function(e){var t=e.cpcNeededToShow,n=e.cost,r=e.cpcUpgrade,i=e.name;return c.a.createElement(f,{cpcNeededToShow:t,cost:n,cpcUpgrade:r,name:i,coins:a,setCoins:o,coinsPerClick:l,setCoinsPerClick:m,upgrades:p,setUpgrades:E})}))))},O=a(22),N=a.n(O);var y=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],o=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Sidebar",style:{animationName:a}},c.a.createElement("img",{src:N.a,width:"100%",alt:"spelunky"})),c.a.createElement(s.a,null,c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header--background"}),c.a.createElement("svg",{className:"header-menu","z-index":"10",onClick:function(){return o("sidebar-open"===a?"sidebar-close":"sidebar-open")},viewBox:"0 0 100 80",width:"40",height:"40"},c.a.createElement("rect",{width:"100",height:"20",rx:"8"}),c.a.createElement("rect",{y:"30",width:"100",height:"20",rx:"8"}),c.a.createElement("rect",{y:"60",width:"100",height:"20",rx:"8"})),c.a.createElement("div",{className:"header-nav"},c.a.createElement(s.b,{to:"/",style:{textDecoration:"none"}},c.a.createElement("div",{className:"header-nav--item header-nav--item-home"},"Farhad Khan")),c.a.createElement(s.b,{to:"/page1",style:{textDecoration:"none"}},c.a.createElement("div",{className:"header-nav--item header-nav--item-sunbro"},"Sun Bro"))," ",c.a.createElement(s.b,{to:"/page2",style:{textDecoration:"none"}},c.a.createElement("div",{className:"header-nav--item header-nav--item-bastion"},"The Bastion"))," ")),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/page1"},c.a.createElement(p,null)),c.a.createElement(l.a,{path:"/page2"},c.a.createElement(b,null)),c.a.createElement(l.a,{path:"/"},c.a.createElement(m,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c89a71e8.chunk.js.map