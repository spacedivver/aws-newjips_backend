import{r as _,D as y,o as h,e as f,f as s,S as w,_ as E,T as O,F as x,h as C,t as c,j as I,k,g as B,i as W,p as R,l as Y,m as T}from"./index-1bL1-Tb4.js";/**
 * Sticky Sidebar v2 JavaScript Plugin.
 * @version 1.0.1
 * @author Øystein Blixhavn <oystein@blixhavn.no>
 * @license The MIT License (MIT)
 */const S=(()=>{const l=".stickySidebar",p={topSpacing:0,bottomSpacing:0,containerSelector:!1,scrollContainer:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",minWidth:!1};class o{constructor(t,e={}){if(this.options=o.extend(p,e),this.sidebar=typeof t=="string"?document.querySelector(t):t,typeof this.sidebar>"u")throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(i=>{this[i]=this[i].bind(this)}),this.initialize()}initialize(){if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),this.sidebarInner===null&&(this.sidebarInner=!1)),!this.sidebarInner){let t=document.createElement("div");for(t.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(t);this.sidebar.firstChild!=t;)t.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){let t=document.querySelectorAll(this.options.containerSelector);if(t=Array.prototype.slice.call(t),t.forEach((e,i)=>{e.contains(this.sidebar)&&(this.container=e)}),!t.length)throw new Error("The container does not contains on the sidebar.")}this.scrollContainer=this.options.scrollContainer?document.querySelector(this.options.scrollContainer):void 0,typeof this.options.topSpacing!="function"&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),typeof this.options.bottomSpacing!="function"&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}bindEvents(){if(this.eventTarget=this.scrollContainer?this.scrollContainer:window,this.eventTarget.addEventListener("resize",this,{passive:!0,capture:!1}),this.eventTarget.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+l,this),typeof ResizeObserver<"u"){const t=new ResizeObserver(()=>this.handleEvent());t.observe(this.sidebarInner),t.observe(this.container)}}handleEvent(t){this.updateSticky(t)}calcDimensions(){if(!this._breakpoint){var t=this.dimensions;t.containerTop=o.offsetRelative(this.container).top,t.containerHeight=this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebarInner.offsetWidth,t.viewportHeight=window.innerHeight,t.maxTranslateY=t.containerHeight-t.sidebarHeight,this._calcDimensionsWithScroll()}}_calcDimensionsWithScroll(){var t=this.dimensions;t.sidebarLeft=o.offsetRelative(this.sidebar).left,this.scrollContainer?(t.viewportTop=this.scrollContainer.scrollTop,t.viewportLeft=this.scrollContainer.scrollLeft):(t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft),t.viewportBottom=t.viewportTop+t.viewportHeight,t.topSpacing=this.options.topSpacing,t.bottomSpacing=this.options.bottomSpacing,typeof t.topSpacing=="function"&&(t.topSpacing=parseInt(t.topSpacing(this.sidebar))||0),typeof t.bottomSpacing=="function"&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebar))||0),this.affixedType==="VIEWPORT-TOP"?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):this.affixedType==="VIEWPORT-BOTTOM"&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastBottomSpacing-t.bottomSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}isSidebarFitsViewport(){return this.dimensions.viewportHeight>=this.dimensions.lastBottomSpacing+this.dimensions.lastTopSpacing+this.dimensions.sidebarHeight}observeScrollDir(){var t=this.dimensions;if(t.lastViewportTop!==t.viewportTop){var e=this.direction==="down"?Math.min:Math.max;t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction=this.direction==="down"?"up":"down")}}getAffixType(){this._calcDimensionsWithScroll();var t=this.dimensions,e=t.viewportTop+t.topSpacing,i=this.affixedType;return e<=t.containerTop||t.containerHeight<=t.sidebarHeight?(t.translateY=0,i="STATIC"):i=this.direction==="up"?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown(),t.translateY=Math.max(0,t.translateY),t.translateY=Math.min(t.containerHeight,t.translateY),t.translateY=Math.round(t.translateY),t.lastViewportTop=t.viewportTop,i}_getAffixTypeScrollingDown(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,n=t.viewportBottom-t.bottomSpacing,a=this.affixedType;return this.isSidebarFitsViewport()?t.sidebarHeight+i>=t.containerBottom?(t.translateY=t.containerBottom-e,a="CONTAINER-BOTTOM"):i>=t.containerTop&&(t.translateY=i-t.containerTop,a="VIEWPORT-TOP"):t.containerBottom<=n?(t.translateY=t.containerBottom-e,a="CONTAINER-BOTTOM"):e+t.translateY<=n?(t.translateY=n-e,a="VIEWPORT-BOTTOM"):t.containerTop+t.translateY<=i&&t.translateY!==0&&t.maxTranslateY!==t.translateY&&(a="VIEWPORT-UNBOTTOM"),a}_getAffixTypeScrollingUp(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,n=t.viewportBottom-t.bottomSpacing,a=this.affixedType;return i<=t.translateY+t.containerTop?(t.translateY=i-t.containerTop,a="VIEWPORT-TOP"):t.containerBottom<=n?(t.translateY=t.containerBottom-e,a="CONTAINER-BOTTOM"):this.isSidebarFitsViewport()||t.containerTop<=i&&t.translateY!==0&&t.maxTranslateY!==t.translateY&&(a="VIEWPORT-UNBOTTOM"),a}_getStyle(t){if(!(typeof t>"u")){var e={inner:{},outer:{}},i=this.dimensions;switch(t){case"VIEWPORT-TOP":e.inner={position:"fixed",top:i.topSpacing,left:i.sidebarLeft-i.viewportLeft,width:i.sidebarWidth};break;case"VIEWPORT-BOTTOM":e.inner={position:"fixed",top:"auto",left:i.sidebarLeft,bottom:i.bottomSpacing,width:i.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":let n=this._getTranslate(0,i.translateY+"px");n?e.inner={transform:n}:e.inner={position:"absolute",top:i.translateY,width:i.sidebarWidth};break}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":e.outer={height:i.sidebarHeight,position:"relative"};break}return e.outer=o.extend({height:"",position:""},e.outer),e.inner=o.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:""},e.inner),e}}stickyPosition(t){if(!this._breakpoint){t=this._reStyle||t||!1,this.options.topSpacing,this.options.bottomSpacing;var e=this.getAffixType(),i=this._getStyle(e);if((this.affixedType!=e||t)&&e){let n="affix."+e.toLowerCase().replace("viewport-","")+l;o.eventTrigger(this.sidebar,n),e==="STATIC"?o.removeClass(this.sidebar,this.options.stickyClass):o.addClass(this.sidebar,this.options.stickyClass);for(let d in i.outer){let u=typeof i.outer[d]=="number"?"px":"";this.sidebar.style[d]=i.outer[d]+u}for(let d in i.inner){let u=typeof i.inner[d]=="number"?"px":"";this.sidebarInner.style[d]=i.inner[d]+u}let a="affixed."+e.toLowerCase().replace("viewport-","")+l;o.eventTrigger(this.sidebar,a)}else this._initialized&&(this.sidebarInner.style.left=i.inner.left);this.affixedType=e}}_widthBreakpoint(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),o.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}updateSticky(t={}){this._running||(this._running=!0,(e=>{requestAnimationFrame(()=>{switch(e){case"scroll":this._calcDimensionsWithScroll(),this.observeScrollDir(),this.stickyPosition();break;case"resize":default:this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(!0);break}this._running=!1})})(t.type))}_setSupportFeatures(){var t=this.support;t.transform=o.supportTransform(),t.transform3d=o.supportTransform(!0)}_getTranslate(t=0,e=0,i=0){return this.support.transform3d?"translate3d("+t+", "+e+", "+i+")":this.support.translate?"translate("+t+", "+e+")":!1}destroy(){window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+l,this);var t={inner:{},outer:{}};t.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},t.outer={height:"",position:""};for(let e in t.outer)this.sidebar.style[e]=t.outer[e];for(let e in t.inner)this.sidebarInner.style[e]=t.inner[e];this.options.resizeSensor&&typeof ResizeSensor<"u"&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}static supportTransform(t){var e=!1,i=t?"perspective":"transform",n=i.charAt(0).toUpperCase()+i.slice(1),a=["Webkit","Moz","O","ms"],d=document.createElement("support"),u=d.style;return(i+" "+a.join(n+" ")+n).split(" ").forEach(function(b,Et){if(u[b]!==void 0)return e=b,!1}),e}static eventTrigger(t,e,i){try{var n=new CustomEvent(e,{detail:i})}catch{var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!0,i)}t.dispatchEvent(n)}static extend(t,e){var i={};for(let n in t)typeof e[n]<"u"?i[n]=e[n]:i[n]=t[n];return i}static offsetRelative(t){var e={left:0,top:0};do{let i=t.offsetTop,n=t.offsetLeft;isNaN(i)||(e.top+=i),isNaN(n)||(e.left+=n),t=t.tagName==="BODY"?t.parentElement:t.offsetParent}while(t);return e}static addClass(t,e){o.hasClass(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)}static removeClass(t,e){o.hasClass(t,e)&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static hasClass(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}static get defaults(){return p}}return o})();window.StickySidebar=S;const L={class:"inner-wrapper-sticky"};var g={__name:"vue3-sticky-sidebar",props:{rootClass:{type:String,default:""},topSpacing:{type:[Number,Function],default:0},bottomSpacing:{type:[Number,Function],default:0},containerSelector:{type:[String,Boolean],default:!1},stickyClass:{type:[String,Boolean],default:!1},minWidth:{type:Number,default:0}},setup(l){const p=l,o=_(null);return y(()=>{new S(o.value,{topSpacing:p.topSpacing,bottomSpacing:p.bottomSpacing,containerSelector:p.containerSelector,innerWrapperSelector:p.innerWrapperSelector||".inner-wrapper-sticky",stickyClass:p.stickyClass,minWidth:p.minWidth})}),(m,t)=>(h(),f("div",{ref_key:"stickySidebarRef",ref:o},[s("div",L,[w(m.$slots,"default")])],512))}};const v=function(p){v.installed||(v.installed=!0,p.component("Vue3StickySidebar",g))};g.install=v;const r=l=>(R("data-v-484cf25f"),l=l(),Y(),l),P={class:"estate-detail-page"},N={class:"picArea"},V={key:0,class:"img-container"},A=["src","alt"],H={key:1},z={class:"estate-content clearfix"},M={class:"estate-decription"},D={style:{"font-weight":"600","font-size":"2rem"}},F={style:{display:"flex","font-size":"1.5rem"}},$=r(()=>s("i",{class:"bi bi-geo-alt-fill",style:{color:"#4e65f8"}},null,-1)),U={style:{color:"#4e65f8","font-weight":"bold"}},q={style:{color:"gray"}},j=r(()=>s("hr",null,null,-1)),K=r(()=>s("p",{style:{"font-weight":"600","font-size":"2rem"}},"방 옵션",-1)),G=r(()=>s("div",null,null,-1)),J=r(()=>s("p",{style:{"font-weight":"600","font-size":"2rem"}},"보안 옵션",-1)),Q=r(()=>s("div",null,null,-1)),X=r(()=>s("hr",null,null,-1)),Z=r(()=>s("p",{style:{"font-weight":"600","font-size":"2rem"}},"위치 및 주변시설",-1)),tt={style:{"font-weight":"bold"}},et=r(()=>s("div",{style:{width:"100%",height:"400px","background-color":"black"}},null,-1)),it=r(()=>s("hr",null,null,-1)),st={class:"sticky-bar clearfix"},ot={class:"sidebar__inner"},nt={class:"estate-info"},rt={class:"estate-info-detail"},at=r(()=>s("p",null,"보증금",-1)),lt={class:"p-value"},pt={key:0,class:"estate-info-detail"},ct=r(()=>s("p",null,"월세",-1)),dt={class:"p-value"},ht={class:"estate-info-detail"},ft=r(()=>s("p",null,"관리비",-1)),ut={class:"p-value"},mt=r(()=>s("hr",{class:"divider"},null,-1)),vt={class:"estate-info-detail"},gt=r(()=>s("p",null,"층수",-1)),bt={class:"p-value"},Tt={class:"estate-info-detail"},_t=r(()=>s("p",null,"면적",-1)),yt={class:"p-value"},St=r(()=>s("div",{class:"button-group"},[s("button",{class:"contact-button"},[s("i",{class:"bi bi-telephone-forward-fill",style:{"margin-right":"5px"}}),T("연락하기 ")]),s("button",{class:"wishlist-button"},[s("i",{class:"bi bi-heart-fill"}),T(" 매물 찜하기 ")]),s("button",{class:"report-button"},"신고하기")],-1)),wt={__name:"EstateDetailPage",props:{eno:{type:Number,required:!0}},setup(l){const p=l,o=_({}),m=t=>{const e=Math.floor(t/1e4),i=Math.floor(t%1e4/1e3);let n="";return e>0&&(n+=`${e}억`),i>0&&(n+=` ${i}천`),n.trim()};return y(async()=>{const t=await O.get(`/api/estate/list/${p.eno}`);o.value=t.data}),(t,e)=>(h(),f("div",P,[s("div",N,[o.value.img&&o.value.img.length>0?(h(),f("div",V,[(h(!0),f(x,null,C(o.value.img.slice(0,3),(i,n)=>(h(),f("img",{key:n,src:i,alt:`Property Image ${n+1}`},null,8,A))),128))])):(h(),f("p",H,"No Image Available"))]),s("div",z,[s("div",M,[s("p",D,c(o.value.tradetype==="monthly"?"월세":"전세")+" "+c(o.value.tradetype==="monthly"?`${m(o.value.deposit)} / ${o.value.monthlyPee}`:m(o.value.deposit)),1),s("div",F,[$,s("p",U,c(o.value.address),1)]),s("p",q,c(o.value.housetype==="twoRoom"?"투룸":"원룸"),1),s("p",null,c(o.value.content),1),j,K,G,J,Q,X,Z,s("p",tt,c(o.value.address),1),et,it]),s("div",st,[I(B(g),{class:"sidebar",containerSelector:".estate-content",innerWrapperSelector:".sidebar__inner"},{default:k(()=>[s("div",ot,[s("div",nt,[s("div",rt,[at,s("p",lt,"₩ "+c(o.value.deposit)+" 만원",1)]),o.value.tradetype==="monthly"?(h(),f("div",pt,[ct,s("p",dt,"₩ "+c(o.value.monthlyPee)+" 만원",1)])):W("",!0),s("div",ht,[ft,s("p",ut,c(o.value.managementFee),1)]),mt,s("div",vt,[gt,s("p",bt,c(o.value.floor)+"층",1)]),s("div",Tt,[_t,s("p",yt,c(o.value.roomSize)+"㎡",1)]),St])])]),_:1})])])]))}},xt=E(wt,[["__scopeId","data-v-484cf25f"]]);export{xt as default};