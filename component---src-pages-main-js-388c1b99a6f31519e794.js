(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"39pD":function(e,t,a){e.exports=a.p+"static/blonde-a4d9bded7d55c1fbc8104e24a1725220.jpg"},"59MO":function(e,t,a){e.exports=a.p+"static/pack-139a48ca8b6c64113c6ff3b248aeb71d.jpg"},"6mcl":function(e,t,a){"use strict";a.r(t);a("SMB2");var n=a("q1tI"),r=a.n(n);a("0mN4");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var o=a("TSYQ"),l=a.n(o);a("bWfx"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("DNiP"),a("xfY5"),a("rE2o"),a("ioFf"),a("Tze0"),a("8+KV"),a("QLaP");function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(a,r){var o,l=a,m=l[c(r)],p=l[r],d=s(l,[c(r),r].map(u)),f=t[r],v=function(e,t,a){var r=Object(n.useRef)(void 0!==e),i=Object(n.useState)(t),s=i[0],o=i[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&s!==t&&o(t),[l?e:s,Object(n.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a&&a.apply(void 0,[e].concat(n)),o(e)}),[a])]}(p,m,e[f]),E=v[0],g=v[1];return i({},d,((o={})[r]=E,o[f]=g,o))}),e)}a("hHhE"),a("f3/d");function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a("94VI");a("pIFo");var d=/-(.)/g;a("QA0p");var f=r.a.createContext({});f.Consumer,f.Provider;function v(e,t){var a=Object(n.useContext)(f);return e||a[t]||t}var E=function(e){return e[0].toUpperCase()+(t=e,t.replace(d,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var g=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,c=s(e,["bsPrefix","className","as"]);a=v(a,"navbar-brand");var u=o||(c.href?"a":"span");return r.a.createElement(u,i({},c,{ref:t,className:l()(n,a)}))}));g.displayName="NavbarBrand";var h=g;function b(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var x=/([A-Z])/g;var N=/^ms-/;function y(e){return function(e){return e.replace(x,"-$1").toLowerCase()}(e).replace(N,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var C=function(e,t){var a="",n="";if("string"==typeof t)return e.style.getPropertyValue(y(t))||function(e,t){return b(e).getComputedStyle(e,t)}(e).getPropertyValue(y(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!w.test(e))}(r)?a+=y(r)+": "+i+";":n+=r+"("+i+") ":e.style.removeProperty(y(r))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a},S=(a("V+eJ"),!("undefined"==typeof window||!window.document||!window.document.createElement)),k=!1,T=!1;try{var O={get passive(){return k=!0},get once(){return T=k=!0}};S&&(window.addEventListener("test",O,O),window.removeEventListener("test",O,!0))}catch(Ye){}var I=function(e,t,a,n){if(n&&"boolean"!=typeof n&&!T){var r=n.once,i=n.capture,s=a;!T&&r&&(s=a.__once||function e(n){this.removeEventListener(t,e,i),a.call(this,n)},a.__once=s),e.addEventListener(t,s,k?n:i)}e.addEventListener(t,a,n)};var P=function(e,t,a,n){var r=n&&"boolean"!=typeof n?n.capture:n;e.removeEventListener(t,a,r),a.__once&&e.removeEventListener(t,a.__once,r)};var D=function(e,t,a,n){return I(e,t,a,n),function(){P(e,t,a,n)}};S&&window;function j(e,t,a){void 0===a&&(a=5);var n=!1,r=setTimeout((function(){n||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+a),i=D(e,"transitionend",(function(){n=!0}),{once:!0});return function(){clearTimeout(r),i()}}var A=function(e,t,a){var n,r;null==a&&(n=C(e,"transitionDuration")||"",r=-1===n.indexOf("ms")?1e3:1,a=parseFloat(n)*r||0);var i=j(e,a),s=D(e,"transitionend",t);return function(){i(),s()}},L=(a("17x9"),a("i8i4")),q=a.n(L),_=!1,V=r.a.createContext(null),M=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var r,i=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?i?(r="exited",n.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",n.state={status:r},n.nextCallback=null,n}p(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?"entering"!==a&&"entered"!==a&&(t="entering"):"entering"!==a&&"entered"!==a||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var a=q.a.findDOMNode(this);"entering"===t?this.performEnter(a,e):this.performExit(a)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},a.performEnter=function(e,t){var a=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.getTimeouts(),s=r?i.appear:i.enter;!t&&!n||_?this.safeSetState({status:"entered"},(function(){a.props.onEntered(e)})):(this.props.onEnter(e,r),this.safeSetState({status:"entering"},(function(){a.props.onEntering(e,r),a.onTransitionEnd(e,s,(function(){a.safeSetState({status:"entered"},(function(){a.props.onEntered(e,r)}))}))})))},a.performExit=function(e){var t=this,a=this.props.exit,n=this.getTimeouts();a&&!_?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t,a){this.setNextCallback(a);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,a=t.children,n=s(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"==typeof a)return r.a.createElement(V.Provider,{value:null},a(e,n));var i=r.a.Children.only(a);return r.a.createElement(V.Provider,{value:null},r.a.cloneElement(i,n))},t}(r.a.Component);function F(){}M.contextType=V,M.propTypes={},M.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:F,onEntering:F,onEntered:F,onExit:F,onExiting:F,onExited:F},M.UNMOUNTED=0,M.EXITED=1,M.ENTERING=2,M.ENTERED=3,M.EXITING=4;var B=M;a("0l/t");var U,R=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function G(e){e.offsetHeight}var W={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var z=((U={}).exited="collapse",U.exiting="collapsing",U.entering="collapsing",U.entered="collapse show",U),X={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=W[e];return a+parseInt(C(t,n[0]),10)+parseInt(C(t,n[1]),10)}},Y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var a=t.getDimension();e.style[a]=t._getScrollDimensionValue(e,a)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var a=t.getDimension();e.style[a]=t.props.getDimensionValue(a,e)+"px",G(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}p(t,e);var a=t.prototype;return a.getDimension=function(){return"function"==typeof this.props.dimension?this.props.dimension():this.props.dimension},a._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},a.render=function(){var e=this,t=this.props,a=t.onEnter,n=t.onEntering,o=t.onEntered,c=t.onExit,u=t.onExiting,m=t.className,p=t.children,d=s(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete d.dimension,delete d.getDimensionValue;var f=R(this.handleEnter,a),v=R(this.handleEntering,n),E=R(this.handleEntered,o),g=R(this.handleExit,c),h=R(this.handleExiting,u);return r.a.createElement(B,i({addEndListener:A},d,{"aria-expanded":d.role?d.in:null,onEnter:f,onEntering:v,onEntered:E,onExit:g,onExiting:h}),(function(t,a){return r.a.cloneElement(p,i({},a,{className:l()(m,p.props.className,z[t],"width"===e.getDimension()&&"width")}))}))},t}(r.a.Component);Y.defaultProps=X;var Z=Y,K=r.a.createContext(null),J=r.a.forwardRef((function(e,t){var a=e.children,n=e.bsPrefix,o=s(e,["children","bsPrefix"]);return n=v(n,"navbar-collapse"),r.a.createElement(K.Consumer,null,(function(e){return r.a.createElement(Z,i({in:!(!e||!e.expanded)},o),r.a.createElement("div",{ref:t,className:n},a))}))}));J.displayName="NavbarCollapse";var Q=J;var H=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};var $=r.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.children,u=e.label,m=e.as,p=void 0===m?"button":m,d=e.onClick,f=s(e,["bsPrefix","className","children","label","as","onClick"]);a=v(a,"navbar-toggler");var E=Object(n.useContext)(K)||{},g=E.onToggle,h=E.expanded,b=function(e){var t=H(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}((function(e){d&&d(e),g&&g()}));return"button"===p&&(f.type="button"),r.a.createElement(p,i({},f,{ref:t,onClick:b,"aria-label":u,className:l()(o,a,!h&&"collapsed")}),c||r.a.createElement("span",{className:a+"-icon"}))}));$.displayName="NavbarToggle",$.defaultProps={label:"Toggle navigation"};var ee,te,ae,ne,re,ie,se,oe,le,ce=$,ue=r.a.createContext(),me=r.a.forwardRef((function(e,t){var a=m(e,{expanded:"onToggle"}),o=a.bsPrefix,c=a.expand,u=a.variant,p=a.bg,d=a.fixed,f=a.sticky,E=a.className,g=a.children,h=a.as,b=void 0===h?"nav":h,x=a.expanded,N=a.onToggle,y=a.onSelect,w=a.collapseOnSelect,C=s(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);o=v(o,"navbar");var S=Object(n.useCallback)((function(){y&&y.apply(void 0,arguments),w&&x&&N(!1)}),[y,w,x,N]);void 0===C.role&&"nav"!==b&&(C.role="navigation");var k=o+"-expand";"string"==typeof c&&(k=k+"-"+c);var T=Object(n.useMemo)((function(){return{onToggle:function(){return N(!x)},bsPrefix:o,expanded:x}}),[o,x,N]);return r.a.createElement(K.Provider,{value:T},r.a.createElement(ue.Provider,{value:S},r.a.createElement(b,i({ref:t},C,{className:l()(E,o,c&&k,u&&o+"-"+u,p&&"bg-"+p,f&&"sticky-"+f,d&&"fixed-"+d)}),g)))}));me.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},me.displayName="Navbar",me.Brand=h,me.Toggle=ce,me.Collapse=Q,me.Text=(ee="navbar-text",ne=(ae=void 0===(te={Component:"span"})?{}:te).displayName,re=void 0===ne?E(ee):ne,ie=ae.Component,se=void 0===ie?"div":ie,oe=ae.defaultProps,(le=r.a.forwardRef((function(e,t){var a=e.className,n=e.bsPrefix,o=e.as,c=void 0===o?se:o,u=s(e,["className","bsPrefix","as"]),m=v(n,ee);return r.a.createElement(c,i({ref:t,className:l()(a,m)},u))}))).defaultProps=oe,le.displayName=re,le);var pe=me,de=a("Wbzz"),fe=a("n/Iv"),ve=a.n(fe),Ee=a("Np68"),ge=a.n(Ee),he=(a("q4sD"),a("iCBQ")),be=a.n(he),xe=function(){return r.a.createElement(pe,{className:be.a.navBar,collapseOnSelect:!0,expand:"lg"},r.a.createElement(de.a,{to:"/main#intro"},r.a.createElement("img",{className:be.a.logo,src:ve.a,alt:"logo"})),r.a.createElement(pe.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(pe.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(de.a,{className:be.a.space+" "+be.a.navLink,to:"/main#varietats"},"Varietats"),r.a.createElement("br",null),r.a.createElement(de.a,{className:be.a.space+" "+be.a.navLink,to:"/main#packs"},"Packs"),r.a.createElement("br",null),r.a.createElement("a",{className:be.a.navLink,href:"https://www.instagram.com/someracervesaartesana/?hl=es"},r.a.createElement("img",{className:be.a.instaLogo,src:ge.a,alt:"insta"}))))},Ne=a("sn//"),ye=a.n(Ne),we=function(e){return r.a.createElement("div",{className:ye.a.wrapperVar},r.a.createElement("div",null,r.a.createElement("img",{className:ye.a.imgVar,src:e.imgSrc,alt:e.alt})),r.a.createElement("div",{className:ye.a.wrapperText},r.a.createElement("div",{className:ye.a.subTitle},e.subTitle),e.text,r.a.createElement("div",{className:ye.a.info},e.info)))},Ce=(a("tUrg"),a("DL4D")),Se=a.n(Ce),ke=function(){return r.a.createElement("div",{className:Se.a.wrapper},r.a.createElement("span",{className:Se.a.text},"No et perdis cap novetat! Totes les notícies i events a Instagram"),r.a.createElement("div",{className:Se.a.contLink},r.a.createElement("a",{className:Se.a.link,href:"https://www.instagram.com/someracervesaartesana/?hl=es"},"Segueix-nos")))},Te=a("Byc7"),Oe=a.n(Te),Ie=function(){var e=Object(n.useState)(),t=e[0],a=e[1],i=Object(n.useState)(),s=i[0],o=i[1],l=Object(n.useState)(),c=l[0],u=l[1];return r.a.createElement("div",{className:Oe.a.formWrapper},r.a.createElement("form",{className:Oe.a.form,onSubmit:function(e){console.log("submit"),e&&e.preventDefault()}},r.a.createElement("label",{htmlFor:"name"},"Nom ",r.a.createElement("span",{className:Oe.a.required},"*")),r.a.createElement("input",{className:t?Oe.a.errorClass:"",type:"text",name:"name",onChange:function(e){e.target.value?a(""):a("Camp obligatori")},required:!0}),r.a.createElement("div",{className:Oe.a.noValid},t),r.a.createElement("label",{htmlFor:"email"},"Mail ",r.a.createElement("span",{className:Oe.a.required},"*")),r.a.createElement("input",{className:s?Oe.a.errorClass:"",type:"email",name:"email",onChange:function(e){e.target.value&&!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?o("Mail no vàlid"):e.target.value?o(""):o("Camp obligatori")},required:!0}),r.a.createElement("div",{className:Oe.a.noValid},s),r.a.createElement("label",{htmlFor:"comment"},"Comentari ",r.a.createElement("span",{className:Oe.a.required},"*")),r.a.createElement("textarea",{className:c?Oe.a.errorClass:Oe.a.textArea,onChange:function(e){e.target.value?u(""):u("Camp obligatori")},name:"comment",rows:"4",cols:"50",required:!0}),r.a.createElement("div",{className:Oe.a.noValid},c),r.a.createElement("div",{className:Oe.a.btnEnviarWrapper},r.a.createElement("button",{className:Oe.a.btnEnviar,type:"submit"},"Enviar"))))},Pe=a("8nKr"),De=a.n(Pe),je=a("9YXZ"),Ae=a.n(je),Le=function(){return r.a.createElement("div",{className:Ae.a.footerWrapper},r.a.createElement("span",{className:Ae.a.text},"Somera – Cervesa Artesana"),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:info.somera@gmail.com"},r.a.createElement("img",{className:Ae.a.mail,src:De.a,alt:"logo mail"})),r.a.createElement("a",{href:"https://www.instagram.com/someracervesaartesana/?hl=es"},r.a.createElement("img",{className:Ae.a.insta,src:ge.a,alt:"logo Instagram"}))),r.a.createElement("span",{className:Ae.a.text},"Santa Margarida de Montbui, Barcelona."),r.a.createElement("span",{className:Ae.a.subText},"Begudes amb contingut alcoholic. Consumir de manera responsable."),r.a.createElement("span",{className:Ae.a.subText},"Icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/chanut",title:"Chanut"},"Chanut")," and ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," ","www.flaticon.com")))},qe=a("sN3D"),_e=a.n(qe),Ve=a("39pD"),Me=a.n(Ve),Fe=a("N96w"),Be=a.n(Fe),Ue=a("e4qD"),Re=a.n(Ue),Ge=a("59MO"),We=a.n(Ge),ze=a("WLfo"),Xe=a.n(ze);t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(xe,null),r.a.createElement("div",{id:"intro",className:Xe.a.intro},r.a.createElement("img",{className:Xe.a.imgIntro,src:_e.a,alt:"Somera cervesa artesana intro"}),r.a.createElement("div",{className:Xe.a.textIntro},r.a.createElement("span",{className:Xe.a.title+" "+Xe.a.second},"La nostra cervesa"),r.a.createElement("p",{className:Xe.a.justify+" "+Xe.a.font},"La nostra visió consisteix en oferir cervesa d’alta qualitat respectant els processos d’elaboració tradicionals."),r.a.createElement("p",{className:Xe.a.justify+" "+Xe.a.font},"Treballem amb entusiasme i de manera artesana, sense pressa. Escollim ingredients de proximitat, aportem a les nostres receptes la paciència que es mereixen, respectant els temps de maduració i aconseguint un resultats de qualitat."))),r.a.createElement("div",{id:"varietats",className:Xe.a.title+" "+Xe.a.center},"Varietats de cerveses"),r.a.createElement("div",{className:Xe.a.varietats},r.a.createElement(we,{imgSrc:Be.a,subTitle:"IPA",info:"Alc: 6,2%, IBU: 50, EBC: 10,4",text:"Cervesa rossa d’alta fermentació i sense filtrar. De gust intens, aromàtic i refrescant. Elaborada amb dues varietats de malta i sis llúpols d’òrigen americà.\r\nSomera IPA està pensada per a tots aquells que gaudeixin d’una cervesa llupolada però sense ser excessivament amarga. S’aprecien notes cítriques i florals, ideals per treu-re la sed."}),r.a.createElement(we,{imgSrc:Me.a,subTitle:"Blonde",text:"Cervesa rossa d’alta fermentació i sense filtrar. De gust lleuger i fresc, molt fàcil de prendre. Elaborada amb tres varietats de malta i tres llúpols d’origen europeu.\r\nSomera Blonde está pensada per a tots aquells que els busquin gaudir d’una cervesa lleugera. Ideal per pendre-la durant el vermut.",info:"Alc: 5,6% IBU: 15 EBC: 8,5"}),r.a.createElement(we,{imgSrc:Re.a,subTitle:"Weisse",text:"Cervesa de blat d’alta fermentació i sense filtrar.\r\nDe textura cremosa i amb gust lleuger a llúpols i aroma afruitada. Conté notes de plàtan i clau. Somera Weisse està elaborada segons la tradició bavaresa i recomanem prende-la de la mateixa manera: ebocant tot el seu contingut en un got alt i deixant pas als sediments naturals.",info:"Alc: 5,5% IBU: 22 EBC: 9,7"})),r.a.createElement("div",null,r.a.createElement(ke,null)),r.a.createElement("div",{id:"packs",className:Xe.a.pack},r.a.createElement("div",{className:Xe.a.textPack},r.a.createElement("span",{className:Xe.a.title+" "+Xe.a.second},"Demana el teu pack"),r.a.createElement("p",{className:Xe.a.justify+" "+Xe.a.font},"Tant si ets d’un únic estil o de tots, tenim el pack ideal! Per compartir, per regalar o per gaudir-los sol."," ",r.a.createElement("span",{className:Xe.a.bold},"Contacta amb nosaltres a través del nostre formulari")," ","i indica’ns la teva preferència."),r.a.createElement("p",{className:Xe.a.imp+" "+Xe.a.font},r.a.createElement("span",null,"Novetat!!")," També tenim pack per als col·leccionistes")),r.a.createElement("img",{className:Xe.a.imgPack,src:We.a,alt:"pack degustacio"})),r.a.createElement("div",{id:"form"},r.a.createElement(Ie,null)),r.a.createElement("div",{id:"footer"},r.a.createElement(Le,null)))}},"8nKr":function(e,t,a){e.exports=a.p+"static/email-851ec66df85f124af0e63963eda623b9.png"},N96w:function(e,t,a){e.exports=a.p+"static/ipa-d44d003145330f21527ff76a69a4c7e8.jpg"},Np68:function(e,t,a){e.exports=a.p+"static/instagram-5da9e81905d258725d908ad93586a964.png"},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},QA0p:function(e,t,a){"use strict";a("91GP"),a("f3/d"),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,i=a.defaultProps,s=a.allowFallback,o=void 0!==s&&s,l=a.displayName,c=void 0===l?e.name||e.displayName:l,u=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!o?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:n,defaultProps:i})};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n}},SMB2:function(e,t,a){"use strict";a("OGtf")("bold",(function(e){return function(){return e(this,"b","","")}}))},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===i)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Wbzz:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("+ZDr"),s=a.n(i);a.d(t,"a",(function(){return s.a}));a("lw3w"),a("emEt").default.enqueue,r.a.createContext({})},e4qD:function(e,t,a){e.exports=a.p+"static/weiss-708d99245915b71ef863c9fa4dca18c3.jpg"},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},"n/Iv":function(e,t,a){e.exports=a.p+"static/lletra-37ef58ca102a435977976732e1ba0cb5.png"},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),i=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},sN3D:function(e,t,a){e.exports=a.p+"static/somera_intro-ea24e70a0d766ece6cb5940dda242695.png"},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),i=a("LZWt"),s=a("Xbzi"),o=a("apmT"),l=a("eeVq"),c=a("kJMx").f,u=a("EemH").f,m=a("hswa").f,p=a("qncB").trim,d=n.Number,f=d,v=d.prototype,E="Number"==i(a("Kuth")(v)),g="trim"in String.prototype,h=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,i=(t=g?t.trim():p(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if((s=l.charCodeAt(c))<48||s>r)return NaN;return parseInt(l,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(E?l((function(){v.valueOf.call(a)})):"Number"!=i(a))?s(new f(h(t)),a,d):h(t)};for(var b,x=a("nh4g")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)r(f,b=x[N])&&!r(d,b)&&m(d,b,u(f,b));d.prototype=v,v.constructor=d,a("KroJ")(n,"Number",d)}}}]);
//# sourceMappingURL=component---src-pages-main-js-388c1b99a6f31519e794.js.map