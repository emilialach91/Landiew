!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);const o=document.querySelector(".hamburgerMenu"),i=document.querySelector(".navbar"),r=document.querySelector(".navList ul"),a=document.getElementById("navListContainer");r.addEventListener("click",()=>{i.classList.toggle("change"),a.classList.toggle("active")}),o.addEventListener("click",()=>{i.classList.toggle("change"),a.classList.toggle("active")})},function(n,e,t){var o=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);n.exports=i.locals||{}},function(n,e,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],i=0;i<n.length;i++){var r=n[i],c=e.base?r[0]+e.base:r[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var p=s(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:d,updater:g(u,e),references:1}),o.push(d)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,p=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function h(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var x=null,f=0;function g(n,e){var t,o,i;if(e.singleton){var r=f++;t=x||(x=l(e)),o=u.bind(null,t,r,!1),i=u.bind(null,t,r,!0)}else t=l(e),o=h.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=s(t[o]);a[i].references--}for(var r=c(n,e),l=0;l<t.length;l++){var d=s(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=r}}}},function(n,e,t){(e=t(4)(!1)).push([n.i,'* {\n    margin: 0;\n    padding: 0;\n}\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    font-family: \'Roboto\', sans-serif;\n    line-height: 1.3;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container {\n    max-width: 1440px;\n    margin: auto;\n}\n\n/* Header */\n.header {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    background-color: transparent;\n    position: absolute;\n    height: 90px;\n    align-items: center;\n    z-index: 5;\n}\n\n.menu {\n    width: 245px;\n    height: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-left: 10%;\n}\n\n.menu a {\n    text-decoration: none;\n    color:#505F98;\n    font-size: 18px;\n}\n\n.header button {\n    font-size: 12px;\n    color:white;\n    background-color: #111B47;\n    width: 160px;\n    height: 26px;\n    border-radius: 6px;\n    outline-style: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n    margin-right: 10%;\n}\n\n.header button a {\n    text-decoration: none;\n    color: white;\n}\n\n.header p {\n    display: block;\n    color: #37447E;\n    font-size: 26px;\n    font-weight: bold;\n    text-align: center;\n    cursor: pointer;\n}\n\n.hamburgerContainer {\n    display: none;\n}\n\n.navListContainer {\n    display: none;\n    transition: transform 1s;\n    transform: translateY(-100%);\n}\n\n.active {\n    transform: translateY(0%);\n    transition: transform 1s;\n}\n\n@media only screen and (min-width: 1024px){\n    .header button:hover {\n        background-color: transparent;\n        color:#111B47;\n        border: solid 2px #111B47;\n        transition: 0.2s ease-in-out;\n    }\n\n    .header button:hover a {\n        text-decoration: none;\n        color: #111B47;\n    }\n}\n\n@media only screen and (max-width:1024px){\n    .menu {\n        display: none;\n    } \n\n    .header p {\n        width: 120px;\n        text-align: left;\n    }\n\n    .header button {\n        width: 120px;\n        margin-right:10%;\n    }\n\n    .header {\n        background-color: #F5F7FF;\n    }\n\n\n    .hamburgerContainer {\n        display: block;\n        height: 100%;\n        width: 245px;\n        align-items: center;\n    }\n\n    .hamburgerMenu {\n        display: flex;\n        width: 35px;\n        height: 30px;\n        cursor: pointer;\n        flex-direction: column;\n        justify-content: space-around;\n        z-index: 5;\n        position: absolute;\n        margin-left: 10%;\n        padding-top: 30px;\n    }\n\n    .line {\n        width: 100%;\n        height: 5px;\n        background-color: #111B47;\n        transition: 0.7s;\n    }\n\n    .change .line-1 {\n        transform: rotateZ(-45deg) translate(-8px, 6px);\n    }\n\n    .change .line-2 {\n        opacity: 0;\n    }\n\n    .change .line-3 {\n        transform: rotateZ(45deg) translate(-8px, -6px);\n    }\n\n    .navbar {\n        width: 100%;\n        background-color: transparent;\n    }\n\n    .navListContainer {\n        display: flex;\n        width: 100%;\n        background-image: url("/src/images/menu.svg");\n        background-position: right;\n        background-repeat: no-repeat;\n        background-size: cover;\n        position: absolute; \n    }\n    \n    .navList {\n        margin-left: 10%;\n    }\n\n    .navList li {\n        display: block;\n        width: 100%;\n        padding-top: 30px;\n    }\n\n    .navList ul {\n        margin-top: 100px;\n        width: 100%;\n    }\n\n    .navItem a{\n        text-decoration: none;\n        color:#505F98;\n        font-size: 19px;\n        cursor: pointer; \n    }\n\n    .navList button {\n        display: none;\n    }\n}\n\n@media only screen and (max-width: 700px){\n    .header button{\n        display: none;\n    }\n\n    .header p {\n        text-align: right;\n        margin-right: 10%\n    }\n\n    .navList button {\n        display: block;\n        font-size: 12px;\n        color:white;\n        background-color: #111B47;\n        width: 120px;\n        height: 26px;\n        border-radius: 6px;\n        outline-style: none;\n        cursor: pointer;\n        transition: 0.2s ease-in-out;\n        margin-bottom: 40px;\n    }\n\n    .navList button a {\n        text-decoration: none;\n        color: white;\n    }\n}\n\n@media only screen and (max-width: 540px){\n    .navListContainer {\n        display: flex;\n        width: 100%;\n        height: 100vh;\n        background-image: url("/src/images/menuMobile.svg");\n        background-position: bottom;\n        background-repeat: no-repeat;\n        background-size: cover;\n        position: absolute;\n    }\n\n    .navList {\n        width: 100%;\n        margin: 0;\n        padding: 0;\n    }\n\n    .navList  nav{\n        width: 100%;\n        margin:0;\n        text-align: center;\n    }\n\n    .navList ul {\n        margin-top: 140px;\n        width: 100%;\n    }\n\n    #navListContainer button {\n        margin: 0 auto;\n    }\n\n}\n\n@media only screen and (max-width:480px){\n    .header p, .header a {\n        font-size: 20px;\n    }\n}\n\n\n/* Hero Section */\n.hero {\n    display: flex;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n    background-image: url("/src/images/designer_1.png");\n    background-repeat: no-repeat;\n    background-position: right;\n}\n\n.heroContent {\n    width: 540px; \n    text-align: justify;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 0 7%;\n}\n\n.heroContent p {\n    font-size: 18px;\n    color: #505F98;\n    font-weight: lighter;\n}\n\n.heroContent h1 {\n    font-size: 50px;\n    color: #091133; \n    padding: 40px 0 20px 0;\n    text-align: center;\n}\n\n.heroButton {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    margin-top: 50px;\n}\n\n.filled {\n    width: 189px;\n    height: 36px;\n    background-color: #111B47;\n    color: white;\n    font-size: 16px;\n    border-radius: 0.5em;\n    color: white;\n    outline-style: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.unfilled {\n    width: 189px;\n    height: 36px;\n    background-color: transparent;\n    border: solid 2px #091133;\n    font-size: 16px;\n    border-radius: 0.5em;\n    color: #111B47;\n    outline-style: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.unfilled a {\n    text-decoration: none;\n    color:#091133;\n    font-size: 18px;\n}\n\n.filled a {\n    text-decoration: none;\n    color: white;\n    font-size: 18px;\n}\n\n@media only screen and (min-width: 1024px){\n    .unfilled:hover {\n        background-color: #111B47;\n        transition: 0.2s ease-in-out;\n    }\n\n    .filled:hover {\n        background-color: transparent;\n        color:#111B47;\n        border: solid 2px #111B47;\n        transition: 0.2s ease-in-out;\n    }\n\n    .unfilled:hover a {\n        color: white;\n    }\n\n    .filled:hover a {\n        color: #111B47;\n    }\n}\n\n@media only screen and (max-width:1320px){\n    .hero {\n        background-image: url("/src/images/designer_12.png");\n        background-repeat: no-repeat;\n        background-position: right;\n        background-size: inherit;\n    }\n}\n\n@media only screen and (max-width: 1200px){\n    .heroContent h1 {\n        font-size: 40px;\n    }\n\n    .heroContent p {\n        font-size: 16px;\n    }\n\n    .heroContent {\n        height: 350px;\n    }\n}\n\n@media only screen and (max-width: 1150px){\n    .hero {\n        background-image: url("/src/images/screw.png");\n        background-repeat: no-repeat;\n        background-position: right;\n        background-size: inherit;\n        justify-content: center;\n    }\n\n    .heroContent {\n        margin: 0;\n    }\n}\n\n@media only screen and (max-width:1100px) {\n    .hero {\n        background: #F5F7FF;\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .hero h1 {\n        font-size: 35px;\n        margin: 0 15px 0 15px;\n    }\n\n    .hero p {\n        font-size: 16px;\n        margin: 0 15px 0 15px;\n    }\n    .heroButton {\n        flex-flow: wrap;\n        margin-top: 30px;\n    }\n}\n\n@media only screen and (max-width: 439px){\n    .unfilled {\n        margin-top: 15px;\n    }\n}\n\n@media only screen and (max-width:480px){\n    .hero h1 {\n        font-size: 25px;\n    }\n}\n\n\n/* Intro Section */ \n.intro {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 10%;\n    margin-top: 150px;\n}\n\n.introContent {\n    display: flex;\n    flex-direction: column;\n}\n\n.top h2 {\n    color:#091133;\n    font-size: 36px;\n    padding-bottom:  20px;\n}\n\n.top p {\n    color: #6F7CB2;\n    font-size: 16px;\n    text-align: justify;\n}\n\n.bottom {\n    display: flex;\n    justify-content: space-between;\n}\n\n.bottomColumn {\n    text-align: justify;\n    padding-top: 35px;\n    margin-right: 15px;\n}\n\n.bottomColumn h5 {\n    color: #091133;\n    font-weight: bold;\n    padding: 15px 0;\n    font-size: 28px;\n}\n\n.bottomColumn p {\n    color: #5D6970;\n}\n\n.introPhotoMobile {\n    display: none;\n}\n\n\n@media only screen and (max-width:1340px){\n    .introPhoto{\n        display: none;\n    }\n\n    .introPhotoMobile {\n        display: block;    \n    }\n}\n\n@media only screen and (max-width: 1060px){\n    .introPhotoMobile {\n        display: none;\n    }\n\n    .bottom {\n        justify-content: space-around;\n    }\n}\n\n@media only screen and (max-width: 530px){\n    .bottom {\n        display: inline-block;\n    }\n\n    .bottomColumn {\n        flex-direction: row;\n        margin: 0;\n    }\n\n    .top h2 {\n        font-size: 30px;\n    }\n\n    .intro p {\n        font-size: 16px;;\n    }\n\n    .introWrapper {\n        display: flex;\n        align-items: center;\n    }\n\n    .intro h5 {\n        font-size: 22px;\n        padding-left: 20px;\n    }\n\n    .intro h2 {\n        text-align: center;\n    }\n\n    .intro {\n        margin-top: 80px;\n    }\n}\n\n\n/* Main Section */\n.main {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10%; \n    margin-top: 150px;\n}\n\n.mainContent {\n    width: 50%;\n    text-align: justify;\n}\n\n.mainPhoto {\n    width: 50%;\n}\n\n.mainPhoto img {\n    width: 390px;\n}\n\nh3 {\n    font-size: 36px;\n    color: #091133;\n    padding-bottom: 20px;\n    text-align: center;\n}\n\np {\n    color: #6F7CB2;\n    font-size: 16px;\n}\n\n.mainButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 189px;\n    height: 36px;\n    background-color: #111B47;\n    border: solid 2px #111B47;\n    color: white;\n    font-size: 16px;\n    border-radius: 0.5em;\n    margin: 35px auto 100px auto;\n    outline-style: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n.mainButton a {\n    text-decoration: none;\n    color: white;\n    font-size: 18px;\n}\n\n.mainPhotoMobile {\n    display: none;\n}\n\n.mainPhotoXS {\n    display: none;\n}\n\n@media only screen and (min-width: 1024px){\n    .mainButton:hover {\n        background-color: transparent;\n        color:#111B47;\n        border: solid 2px #111B47;\n        transition: all 0.2s ease-in-out;\n    }\n\n    .mainButton:hover a {\n        color: #111B47;\n    }\n}\n\n@media only screen and (max-width: 980px) {\n    .mainPhoto {\n        display: none;\n    }\n\n    .mainPhotoMobile {\n        display: flex;\n        justify-content: center;\n        padding-bottom: 30px;\n    }\n\n    .mainContent{\n        width: 100%;\n    }\n}\n\n@media only screen and (max-width: 650px){\n    .mainPhotoMobile{\n        display: none;\n    }\n\n    .mainPhotoXS {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100px;\n        width: 100%;\n    }\n\n    .mainPhotoXS img {\n        padding-bottom: 20px;\n    }\n}\n\n@media only screen and (max-width: 650px){\n    .main{\n        margin-top: 80px;\n    }\n}\n\n@media only screen and (max-width: 468px){\n    .main h3 {\n        font-size: 30px;\n    }\n}\n\n\n/* Pricing */\n.pricing {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    background-color: #F5F7FF;\n}\n\n.pricingContent {\n    width: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    margin: 80px 10%;\n}\n\n.pricingButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n}\n\n.pricingButton button {\n    width: 189px;\n    height: 36px;\n    background-color: #111B47;\n    color: white;\n    font-size: 16px;\n    border-radius: 0.5em;\n    outline-style: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n.pricing h2 {\n   color: #222F65;\n   font-size: 50px;\n   padding-top: 40px;\n}\n\nh5 {\n    color:#222F65;\n    font-size: 16px;\n    padding-bottom: 40px;\n}\n\n@media only screen and (min-width: 1024px){\n    .pricingButton button:hover {\n        background-color: transparent;\n        color: #111B47;\n        border: solid 2px #111B47;\n        transition: all 0.2s ease-in-out;\n    }\n\n}\n\n@media only screen and (max-width: 468px){\n    .pricingContent {\n        text-align: justify;\n    }\n    .pricing h3 {\n        font-size: 30px;\n    }\n\n    .pricing h2 {\n        font-size: 36px;\n    }\n}\n\n/* Footer */\n.footerContainer {\n    width: 100%;\n    display: flex;\n    background-color: #E7ECFF;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer {\n    width: 1200px;\n    justify-content: space-around;\n    padding: 0 10px;\n}\n\n.footer img {\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n.footer h2 {\n    display: block;\n    width: 160px;\n    text-align: center;\n}\n\n.footer p {\n    display: block;\n    width: 160px;\n    text-align: left;\n}\n\n.footerContent {\n    display: flex;\n    height: 80px;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: solid 1px #CDD1D4;\n\n}\n\n.footerIcon {\n    display: flex;\n    height: 70px;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;  \n}\n\nnav {\n    width: 245px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.footerIcon a {\n    text-decoration: none;\n    color:#505F98;\n}\n\n.footer button {\n    font-size: 12px;\n    color:white;\n    background-color: #111B47;\n    width: 160px;\n    height: 26px;\n    border-radius: 6px;\n    outline-style: none;\n    cursor: pointer;\n    /* transition: all 0.2s ease-in-out; */\n}\n\n.icons {\n    display: flex;\n    width: 245px;\n    justify-content: space-between;\n}\n.footerContentMobile{\n    display: none;\n}\n\n@media only screen and (min-width: 1024px){\n    .footer button:hover {\n        background-color: transparent;\n        color: #111B47;\n        border: solid 2px #111B47;\n        /* transition: all 0.2s ease-in-out; */\n    }\n}\n\n@media only screen and (max-width:600px){\n    .footerContentMobile {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        justify-content: center;\n        align-items: center;\n        border-bottom: solid 1px #CDD1D4;  \n        padding: 20px 0;\n    }\n\n    .footer p {\n        text-align: center;\n    }\n    \n    .footerContent {\n        display: none;\n    }\n\n    .footerIcon {\n        flex-direction: column;\n        justify-content: center;\n        padding: 10px 0;\n    }\n\n    .icons {\n        padding-top: 13px;\n    }\n    .footer button {\n        margin: 10px 0;\n    }\n}\n\n',""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}}]);