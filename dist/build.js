"use strict";(()=>{var Ne=Object.defineProperty;var Oe=Object.getOwnPropertyDescriptor;var T=(o,t,e,i)=>{for(var n=i>1?void 0:i?Oe(t,e):t,r=o.length-1,s;r>=0;r--)(s=o[r])&&(n=(i?s(t,e,n):s(n))||n);return i&&n&&Ne(t,e,n),n};var xt=window,$t=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tt=Symbol(),oe=new WeakMap,ut=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if($t&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=oe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&oe.set(e,t))}return t}toString(){return this.cssText}},ne=o=>new ut(typeof o=="string"?o:o+"",void 0,Tt),m=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,n,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[r+1],o[0]);return new ut(e,o,Tt)},Mt=(o,t)=>{$t?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),n=xt.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},wt=$t?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ne(e)})(o):o;var jt,kt=window,re=kt.trustedTypes,Te=re?re.emptyScript:"",se=kt.reactiveElementPolyfillSupport,zt={toAttribute(o,t){switch(t){case Boolean:o=o?Te:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ae=(o,t)=>t!==o&&(t==t||o==o),Lt={attribute:!0,type:String,converter:zt,reflect:!1,hasChanged:ae},It="finalized",V=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Lt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){let r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Lt}static finalize(){if(this.hasOwnProperty(It))return!1;this[It]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(wt(n))}else t!==void 0&&e.push(wt(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Mt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Lt){var n;let r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){let s=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:zt).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var i;let n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){let s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:zt;this._$El=r,this[r]=a.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ae)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};V[It]=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},se?.({ReactiveElement:V}),((jt=kt.reactiveElementVersions)!==null&&jt!==void 0?jt:kt.reactiveElementVersions=[]).push("1.6.3");var Ht,St=window,it=St.trustedTypes,ce=it?it.createPolicy("lit-html",{createHTML:o=>o}):void 0,Vt="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,ve="?"+q,Me=`<${ve}>`,J=document,vt=()=>J.createComment(""),mt=o=>o===null||typeof o!="object"&&typeof o!="function",me=Array.isArray,je=o=>me(o)||typeof o?.[Symbol.iterator]=="function",Dt=`[ 	
\f\r]`,ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,he=/>/g,G=RegExp(`>|${Dt}(?:([^\\s"'>=/]+)(${Dt}*=${Dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,pe=/"/g,be=/^(?:script|style|textarea|title)$/i,ge=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=ge(1),ri=ge(2),z=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ue=new WeakMap,Z=J.createTreeWalker(J,129,null,!1);function ye(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(t):t}var Le=(o,t)=>{let e=o.length-1,i=[],n,r=t===2?"<svg>":"",s=ft;for(let a=0;a<e;a++){let c=o[a],h,d,v=-1,u=0;for(;u<c.length&&(s.lastIndex=u,d=s.exec(c),d!==null);)u=s.lastIndex,s===ft?d[1]==="!--"?s=le:d[1]!==void 0?s=he:d[2]!==void 0?(be.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=G):d[3]!==void 0&&(s=G):s===G?d[0]===">"?(s=n??ft,v=-1):d[1]===void 0?v=-2:(v=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?G:d[3]==='"'?pe:de):s===pe||s===de?s=G:s===le||s===he?s=ft:(s=G,n=void 0);let x=s===G&&o[a+1].startsWith("/>")?" ":"";r+=s===ft?c+Me:v>=0?(i.push(h),c.slice(0,v)+Vt+c.slice(v)+q+x):c+q+(v===-2?(i.push(void 0),a):x)}return[ye(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]},bt=class o{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,s=0,a=t.length-1,c=this.parts,[h,d]=Le(t,e);if(this.el=o.createElement(h,i),Z.currentNode=this.el.content,e===2){let v=this.el.content,u=v.firstChild;u.remove(),v.append(...u.childNodes)}for(;(n=Z.nextNode())!==null&&c.length<a;){if(n.nodeType===1){if(n.hasAttributes()){let v=[];for(let u of n.getAttributeNames())if(u.endsWith(Vt)||u.startsWith(q)){let x=d[s++];if(v.push(u),x!==void 0){let w=n.getAttribute(x.toLowerCase()+Vt).split(q),X=/([.?@])?(.*)/.exec(x);c.push({type:1,index:r,name:X[2],strings:w,ctor:X[1]==="."?Ut:X[1]==="?"?qt:X[1]==="@"?Ft:nt})}else c.push({type:6,index:r})}for(let u of v)n.removeAttribute(u)}if(be.test(n.tagName)){let v=n.textContent.split(q),u=v.length-1;if(u>0){n.textContent=it?it.emptyScript:"";for(let x=0;x<u;x++)n.append(v[x],vt()),Z.nextNode(),c.push({type:2,index:++r});n.append(v[u],vt())}}}else if(n.nodeType===8)if(n.data===ve)c.push({type:2,index:r});else{let v=-1;for(;(v=n.data.indexOf(q,v+1))!==-1;)c.push({type:7,index:r}),v+=q.length-1}r++}}static createElement(t,e){let i=J.createElement("template");return i.innerHTML=t,i}};function ot(o,t,e=o,i){var n,r,s,a;if(t===z)return t;let c=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl,h=mt(t)?void 0:t._$litDirective$;return c?.constructor!==h&&((r=c?._$AO)===null||r===void 0||r.call(c,!1),h===void 0?c=void 0:(c=new h(o),c._$AT(o,e,i)),i!==void 0?((s=(a=e)._$Co)!==null&&s!==void 0?s:a._$Co=[])[i]=c:e._$Cl=c),c!==void 0&&(t=ot(o,c._$AS(o,t.values),c,i)),t}var Bt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:n}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:J).importNode(i,!0);Z.currentNode=r;let s=Z.nextNode(),a=0,c=0,h=n[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new gt(s,s.nextSibling,this,t):h.type===1?d=new h.ctor(s,h.name,h.strings,this,t):h.type===6&&(d=new Wt(s,this,t)),this._$AV.push(d),h=n[++c]}a!==h?.index&&(s=Z.nextNode(),a++)}return Z.currentNode=J,r}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},gt=class o{constructor(t,e,i,n){var r;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(r=n?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),mt(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):je(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==_&&mt(this._$AH)?this._$AA.nextSibling.data=t:this.$(J.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=bt.createElement(ye(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{let s=new Bt(r,this),a=s.u(this.options);s.v(i),this.$(a),this._$AH=s}}_$AC(t){let e=ue.get(t.strings);return e===void 0&&ue.set(t.strings,e=new bt(t)),e}T(t){me(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let r of t)n===e.length?e.push(i=new o(this.k(vt()),this.k(vt()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},nt=class{constructor(t,e,i,n,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){let r=this.strings,s=!1;if(r===void 0)t=ot(this,t,e,0),s=!mt(t)||t!==this._$AH&&t!==z,s&&(this._$AH=t);else{let a=t,c,h;for(t=r[0],c=0;c<r.length-1;c++)h=ot(this,a[i+c],e,c),h===z&&(h=this._$AH[c]),s||(s=!mt(h)||h!==this._$AH[c]),h===_?t=_:t!==_&&(t+=(h??"")+r[c+1]),this._$AH[c]=h}s&&!n&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ut=class extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},ze=it?it.emptyScript:"",qt=class extends nt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==_?this.element.setAttribute(this.name,ze):this.element.removeAttribute(this.name)}},Ft=class extends nt{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=ot(this,t,e,0))!==null&&i!==void 0?i:_)===z)return;let n=this._$AH,r=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Wt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}};var fe=St.litHtmlPolyfillSupport;fe?.(bt,gt),((Ht=St.litHtmlVersions)!==null&&Ht!==void 0?Ht:St.litHtmlVersions=[]).push("2.8.0");var _e=(o,t,e)=>{var i,n;let r=(i=e?.renderBefore)!==null&&i!==void 0?i:t,s=r._$litPart$;if(s===void 0){let a=(n=e?.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new gt(t.insertBefore(vt(),a),a,void 0,e??{})}return s._$AI(o),s};var Yt,Kt;var F=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_e(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return z}};F.finalized=!0,F._$litElement$=!0,(Yt=globalThis.litElementHydrateSupport)===null||Yt===void 0||Yt.call(globalThis,{LitElement:F});var xe=globalThis.litElementPolyfillSupport;xe?.({LitElement:F});((Kt=globalThis.litElementVersions)!==null&&Kt!==void 0?Kt:globalThis.litElementVersions=[]).push("3.3.3");var Ie=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},He=(o,t,e)=>{t.constructor.createProperty(e,o)};function l(o){return(t,e)=>e!==void 0?He(o,t,e):Ie(o,t)}function g(o){return l({...o,state:!0})}var H=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){let r=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return o!=null&&(s.finisher=function(a){o(a,r)}),s}{let r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(r,i)}};function b(o,t){return H({descriptor:e=>{let i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){let n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r,s;return this[n]===void 0&&(this[n]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&s!==void 0?s:null),this[n]}}return i}})}function $e(o){return H({descriptor:t=>({get(){var e,i;return(i=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(o))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}var Xt,De=((Xt=window.HTMLSlotElement)===null||Xt===void 0?void 0:Xt.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function we(o){let{slot:t,selector:e}=o??{};return H({descriptor:i=>({get(){var n;let r="slot"+(t?`[name=${t}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r),a=s!=null?De(s,o):[];return e?a.filter(c=>c.matches(e)):a},enumerable:!0,configurable:!0})})}function rt(o,t,e){let i,n=o;return typeof o=="object"?(n=o.slot,i=o):i={flatten:t},e?we({slot:n,flatten:t,selector:e}):H({descriptor:r=>({get(){var s,a;let c="slot"+(n?`[name=${n}]`:":not([name])"),h=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(c);return(a=h?.assignedNodes(i))!==null&&a!==void 0?a:[]},enumerable:!0,configurable:!0})})}var Ve=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Be=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},y=o=>t=>{let e=customElements.get(o);return e||(customElements.define(o,t),t)},Gt=class extends Event{constructor(t,e){super(t,{bubbles:!0,composed:!0}),this._detail=e}get detail(){return this._detail}},f=class extends F{constructor(){super(...arguments),this.rtl=!1}connectedCallback(){this.rtl=document.documentElement.dir==="rtl",super.connectedCallback()}fire(t,e){this.dispatchEvent(new Gt(t,e))}};f.styles=m`
    * {box-sizing: border-box;}
    [hidden] {display: none !important;}
    .horiz {display: flex; flex-direction: row;}
    .vert {display: flex; flex-direction: column;}
    .center {align-items: center;}
    .center2 {justify-content: center; align-items: center;}
    .flex {flex: 1;}
    .wrap {flex-wrap: wrap;}
    :host {
      --nv-font-family-default: "SF Pro Display", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
      font-family: var(--nv-font-family, var(--nv-font-family-default));
    }
  `;Ve([l({reflect:!0,type:Boolean}),Be("design:type",Object)],f.prototype,"rtl",void 0);var Zt=class{constructor(t){this.adjacentNodes=new Map;this.f=0;this.g=0;this.h=0;this.point=t}};function At(o,t){return Math.abs(o.x-t.x)+Math.abs(o.y-t.y)}function ke(o,t){return o.x===t.x?o.y<t.y?"S":"N":o.x<t.x?"E":"W"}var Et=class{constructor(){this._nodes=new Map;this._edges=[]}get edges(){return this._edges}addNode(t){let{x:e,y:i}=t;this._nodes.has(e)||this._nodes.set(e,new Map);let n=this._nodes.get(e);n.has(i)||n.set(i,new Zt(t))}connect(t,e){let i=this.get(t),n=this.get(e);if(!i||!n)throw new Error("A point was not found");let r=At(t,e);i.adjacentNodes.set(n,{length:r,direction:ke(t,e)}),n.adjacentNodes.set(i,{length:r,direction:ke(e,t)}),this._edges.push({from:t,to:e})}has(t){let{x:e,y:i}=t;return this._nodes.has(e)&&this._nodes.get(e).has(i)}get(t){let{x:e,y:i}=t;return this._nodes.has(e)&&this._nodes.get(e).get(i)||null}},st=class o{static fromDiagonal(t,e,i,n){return new o(t,e,i-t,n-e)}createPadded(t){return o.fromDiagonal(this.x-t,this.y-t,this.x2+t,this.y2+t)}constructor(t,e,i,n,r){this.x=t,this.y=e,this.width=Math.abs(i),this.height=Math.abs(n),this.color=r}get x2(){return this.x+this.width}get y2(){return this.y+this.height}contains(t){return t.x>=this.x&&t.x<=this.x2&&t.y>=this.y&&t.y<=this.y2}intersects(t){return!(t.x>this.x2||t.x2<this.x||t.y>this.y2||t.y2<this.y)}};var Ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pt=o=>(...t)=>({_$litDirective$:o,values:t}),at=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var O=Pt(class extends at{constructor(o){var t;if(super(o),o.type!==Ct.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!(!((e=this.nt)===null||e===void 0)&&e.has(r))&&this.it.add(r);return this.render(t)}let n=o.element.classList;this.it.forEach(r=>{r in t||(n.remove(r),this.it.delete(r))});for(let r in t){let s=!!t[r];s===this.it.has(r)||!((i=this.nt)===null||i===void 0)&&i.has(r)||(s?(n.add(r),this.it.add(r)):(n.remove(r),this.it.delete(r)))}return z}});var Rt=o=>o??_;var Se="important",Ue=" !"+Se,ct=Pt(class extends at{constructor(o){var t;if(super(o),o.type!==Ct.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let i=o[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ht===void 0){this.ht=new Set;for(let i in t)this.ht.add(i);return this.render(t)}this.ht.forEach(i=>{t[i]==null&&(this.ht.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(let i in t){let n=t[i];if(n!=null){this.ht.add(i);let r=typeof n=="string"&&n.endsWith(Ue);i.includes("-")||r?e.setProperty(i,r?n.slice(0,-11):n,r?Se:""):e[i]=n}}return z}});var j=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},I=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},C=class extends f{constructor(){super(...arguments),this.pin="top-start",this.direction="down",this.animateVertically=!1,this.fullWidth=!1,this.manualClose=!1,this.x=0,this.y=0,this._open=!1,this._closeListener=()=>{this._open&&(this.open=!1)}}render(){let t=[this.direction,...this.pin.split("-")];this._open&&t.push("open"),this.animateVertically&&t.push("animate-vertically"),this.fullWidth&&t.push("full-width");let e="",i=t.indexOf("center")>=0,n=t.indexOf("centered")>=0;i&&n?e=" translate3d(-50%, -50%, 0)":i?e=" translateX(-50%)":n&&(e=" translateY(-50%)");let r=null,s=null,a=null,c=null;if(this.anchor)switch(this.pin){case"top-start":switch(r=`${this.anchor.offsetLeft}px`,a=`${this.anchor.offsetTop}px`,this.direction){case"up":c="initial",e=" translateY(-100%)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`;break}break;case"top-end":switch(a=`${this.anchor.offsetTop}px`,s="initial",r=`${this.anchor.offsetLeft+this.anchor.offsetWidth}px`,e=" translateX(-100%)",this.direction){case"up":c="initial",e=" translate3d(-100%, -100%, 0)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`,e=" translate3d(-100%, -50%, 0)";break}break;case"top-afterend":switch(a=`${this.anchor.offsetTop}px`,r=`${this.anchor.offsetLeft+this.anchor.offsetWidth}px`,this.direction){case"up":c="initial",e=" translateY(-100%)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`;break}break;case"top-beforestart":switch(a=`${this.anchor.offsetTop}px`,s="initial",r=`${this.anchor.offsetLeft}px`,e=" translateX(-100%)",this.direction){case"up":c="initial",e=" translate3d(-100%, -100%, 0)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`,e=" translate3d(-100%, -50%, 0)";break}break;case"top-center":switch(a=`${this.anchor.offsetTop}px`,s="initial",r=`${this.anchor.offsetLeft+this.anchor.offsetWidth/2}px`,this.direction){case"up":c="initial",e=" translate3d(-50%, -100%, 0)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`;break}break;case"bottom-start":switch(r=`${this.anchor.offsetLeft}px`,a=`${this.anchor.offsetTop+this.anchor.offsetHeight}px`,this.direction){case"up":c="initial",e=" translateY(-100%)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`;break}break;case"bottom-end":switch(a=`${this.anchor.offsetTop+this.anchor.offsetHeight}px`,s="initial",r=`${this.anchor.offsetLeft+this.anchor.offsetWidth}px`,e=" translateX(-100%)",this.direction){case"up":c="initial",e=" translate3d(-100%, -100%, 0)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`,e=" translate3d(-100%, -50%, 0)";break}break;case"bottom-beforestart":switch(a=`${this.anchor.offsetTop+this.anchor.offsetHeight}px`,s="initial",r=`${this.anchor.offsetLeft}px`,e=" translateX(-100%)",this.direction){case"up":c="initial",e=" translate3d(-100%, -100%, 0)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`,e=" translate3d(-100%, -50%, 0)";break}break;case"bottom-afterend":switch(a=`${this.anchor.offsetTop+this.anchor.offsetHeight}px`,r=`${this.anchor.offsetLeft+this.anchor.offsetWidth}px`,this.direction){case"up":c="initial",e=" translateY(-100%)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`;break}break;case"bottom-center":switch(a=`${this.anchor.offsetTop+this.anchor.offsetHeight}px`,s="initial",r=`${this.anchor.offsetLeft+this.anchor.offsetWidth/2}px`,this.direction){case"up":c="initial",e="  translate3d(-50%, -100%, 0)";break;case"centered":a=`${this.anchor.offsetTop+this.anchor.offsetHeight/2}px`;break}break}let h={"--nvi-popver-surface-translate":`translate3d(${this.x}px, ${this.y}px, 0)${e}`,left:r,top:a,right:s,bottom:c,"--nvi-popover-content-max-height":this.maxHeight?`${this.maxHeight}px`:null};return p`
    <div id="surface" class="${t.join(" ")}" style="${ct(h)}">
      <div id="container" class="${this.maxHeight?"maxxed":""}" @click="${this._containerClick}">
        <slot></slot>
      </div>
    </div>`}get open(){return this._open}set open(t){this._open!==t&&(this._surface&&(t?(this._surface.style.display="block",this._surface.getBoundingClientRect()):this._surface.style.display=""),this._open=t,t?setTimeout(()=>{this._open&&this._attachCloseListenr()}):this._detachCloseListenr(),t?this.fire("popover-open"):this.fire("popover-close"))}_containerClick(t){t.stopPropagation()}_attachCloseListenr(){this.manualClose||document.addEventListener("click",this._closeListener)}_detachCloseListenr(){document.removeEventListener("click",this._closeListener)}};C.styles=[f.styles,m`
    #surface {
      position: absolute;
      transform: var(--nvi-popver-surface-translate, translate3d(0,0,0)) scale(0);
      opacity: 0;
      pointer-events: none;
      transition: opacity .03s linear, transform 0.12s cubic-bezier(0,0,.2,1);
      display: none;
      z-index: var(--nv-popover-z-index, 8);
    }
    #surface.full-width {
      min-width: 100%;
    }
    #surface.animate-vertically {
      transform: var(--nvi-popver-surface-translate, translate3d(0,0,0)) scaleY(0);
    }
    #container {
      position: relative;
      background: var(--nv-surface, #fff);
      color: var(--nv-on-surface, #000);
      box-shadow: var(--nv-popover-shadow, 0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%));
      border-radius: var(--nv-popover-border-radius, 4px);
      overflow: var(--nv-popover-overflow, hidden);
    }
    #container.maxxed {
      overflow-x: hidden;
      overflow-y: auto;
      max-height: var(--nvi-popover-content-max-height);
    }
  
    #surface.top.down {
      top: 0;
    }
    #surface.top.up {
      bottom: 100%;
    }
    #surface.top.centered {
      top: 50%;
    }
    
    
    #surface.bottom.down {
      top: 100%;
    }
    #surface.bottom.up {
      bottom: 0;
    }
    #surface.bottom.centered {
      top: 50%;
    }

    #surface.start {
      left: 0;
    }
    #surface.end {
      right: 0;
    }
    #surface.center {
      left: 50%;
    }
    #surface.beforestart {
      right: 100%;
    }
    #surface.afterend {
      left: 100%;
    }

    #surface.start.down {
      transform-origin: top left;
    }
    #surface.beforestart.down {
      transform-origin: top right;
    }
    #surface.center.down {
      transform-origin: center top;
    }
    #surface.end.down {
      transform-origin: top right;
    }
    #surface.afterend.down {
      transform-origin: top left;
    }
    #surface.start.up {
      transform-origin: bottom left;
    }
    #surface.beforestart.up {
      transform-origin: bottom right;
    }
    #surface.center.up {
      transform-origin: bottom center;
    }
    #surface.end.up {
      transform-origin: bottom right;
    }
    #surface.afterend.up {
      transform-origin: bottom left;
    }
    #surface.start.centered {
      transform-origin: left center;
    }
    #surface.beforestart.centered {
      transform-origin: right center;
    }
    #surface.center.centered {
      transform-origin: center center;
    }
    #surface.end.centered {
      transform-origin: right center;
    }
    #surface.afterend.centered {
      transform-origin: left center;
    }

    #surface.open {
      transform: var(--nvi-popver-surface-translate, translate3d(0,0,0)) scale(1);
      opacity: 1;
      display: block;
    }
    #surface.open #container {
      pointer-events: auto;
    }
    #surface.open.animate-vertically {
      transform: var(--nvi-popver-surface-translate, translate3d(0,0,0)) scaleY(1);
    }
    `];j([l(),I("design:type",String)],C.prototype,"pin",void 0);j([l(),I("design:type",String)],C.prototype,"direction",void 0);j([l({type:Boolean,attribute:"animate-vertically"}),I("design:type",Object)],C.prototype,"animateVertically",void 0);j([l({type:Boolean,attribute:"full-width"}),I("design:type",Object)],C.prototype,"fullWidth",void 0);j([l({type:Boolean,attribute:"manual-close"}),I("design:type",Object)],C.prototype,"manualClose",void 0);j([l({type:Number}),I("design:type",Object)],C.prototype,"x",void 0);j([l({type:Number}),I("design:type",Object)],C.prototype,"y",void 0);j([l({type:Number,attribute:"max-height"}),I("design:type",Number)],C.prototype,"maxHeight",void 0);j([g(),I("design:type",HTMLElement)],C.prototype,"anchor",void 0);j([g(),I("design:type",Object)],C.prototype,"_open",void 0);j([b("#surface"),I("design:type",HTMLElement)],C.prototype,"_surface",void 0);C=j([y("nv-popover")],C);var Jt=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ee=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},lt=class extends C{constructor(){super(...arguments),this.autofocus=!1,this._connected=!1,this._clickListener=()=>{if(this.open=!this.open,this.open&&this.autofocus){let t=this._slottedList;t&&setTimeout(()=>{this.open&&t.focus()})}},this._selectListener=()=>{this.manualClose||(this.open=!1)}}get _slottedList(){let t=this._slotted.find(e=>e.nodeType===Node.ELEMENT_NODE?e.tagName.toLowerCase()==="nv-list":!1);return t||null}set acnchor(t){super.anchor=t,this._attachToNode(t)}_detachNode(){this._node&&(this._node.removeEventListener("click",this._clickListener),this._node=void 0)}_attachToNode(t){this._connected&&t!==this._node&&(this._detachNode(),t.addEventListener("click",this._clickListener),this._node=t)}connectedCallback(){this._connected=!0,super.connectedCallback();let t=super.anchor;t||(t=this.previousElementSibling||this.nextElementSibling||this.parentElement||void 0),t&&this._attachToNode(t),this.addEventListener("select",this._selectListener)}disconnectedCallback(){this._connected=!1,this._detachNode(),this.removeEventListener("select",this._selectListener),super.disconnectedCallback()}};Jt([l({type:Boolean}),Ee("design:type",Object)],lt.prototype,"autofocus",void 0);Jt([rt(),Ee("design:type",Array)],lt.prototype,"_slotted",void 0);lt=Jt([y("nv-menu")],lt);var Qt=class{constructor(){this._map=new Map}get(t){return this._map.get(t)||null}define(t){for(let e in t)this._map.set(e,t[e])}clear(){this._map.clear()}},Ae=new Qt;var Ce=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},qe=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},Nt=class extends f{render(){if(this.icon){let t=Ae.get(this.icon)||this.icon;return p`
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
          <g>
            <path d=${t}></path>
          </g>
        </svg>
      `}return p`<slot></slot>`}};Nt.styles=[f.styles,m`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentColor;
        stroke: none;
        width: 24px;
        height: 24px;
      }
      svg {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
      }
      ::slotted(svg) {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
        fill: currentColor;
        stroke: none;
      }
    `];Ce([l(),qe("design:type",String)],Nt.prototype,"icon",void 0);Nt=Ce([y("nv-icon")],Nt);var Q=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},W=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},Fe="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",We="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",Ye="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",B=class extends f{constructor(){super(...arguments),this.disabled=!1,this._focused=!1,this._checked=!1,this._indeterminate=!1}get checked(){return this._checked}set checked(t){(this._indeterminate||this._checked!==t)&&(this._checked=t,this._indeterminate=!1,t?this.setAttribute("checked",""):this.removeAttribute("checked"),this.requestUpdate())}get indeterminate(){return this._indeterminate}set indeterminate(t){this._indeterminate!==t&&(t&&(this._checked=!1),this._indeterminate=t,t?this.setAttribute("indeterminate",""):this.removeAttribute("indeterminate"),this.requestUpdate())}render(){let t=this._indeterminate?"indeterminate":this._checked?"checked":"unchecked",e={focused:this._focused,coloredback:this._checked||this._indeterminate};return p`
    <div id="container" class="horiz center ${O(e)}">
      <div id="iconPanel" class="${t}">
        <nv-icon id="uicon" .icon="${We}"></nv-icon>
        <nv-icon id="cicon" .icon="${Fe}"></nv-icon>
        <nv-icon id="iicon" .icon="${Ye}"></nv-icon>
      </div>
      ${this.label?p`<label>${this.label}</label>`:null}
      <input 
        aria-label="${this.label||t}" 
        type="checkbox"
        ?disabled="${this.disabled}"
        ?checked="${this._checked}" 
        @change=${this._onChecked}
        @focus=${this._onFocus}
        @blur=${this._onBlur}>
    </div>
    `}_onFocus(){this._focused=!0}_onBlur(){this._focused=!1}_onChecked(t){let e=t.target;this.checked=e.checked,this.fire(t.type)}focus(){var t;(t=this._i)===null||t===void 0||t.focus()}blur(){var t;(t=this._i)===null||t===void 0||t.blur()}};B.styles=[f.styles,m`
      :host {
        display: inline-block;
        vertical-align: top;
        line-height: 1;
        font-size: 14px;
      }
      #container {
        overflow: hidden;
        padding: var(--nv-checkbox-padding, 12px);
        user-select: none;
        position: relative;
      }
      #container::before {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 40px;
        height: 40px;
        background: var(--nv-unchecked-color, rgba(0, 0, 0, 0.38));
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
      }
      #container.coloredback::before {
        background: var(--nv-primary, #018786);
      }
      nv-icon {
        width: var(--nv-icon-size, 24px);
        height: var(--nv-icon-size, 24px);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        margin: 0;
        cursor: pointer;
      }
      #iconPanel {
        position: relative;
        width: var(--nv-icon-size, 24px);
        height: var(--nv-icon-size, 24px);
      }
      #uicon {
        color: var(--nv-unchecked-color, rgba(0, 0, 0, 0.38));
        transform: rotateZ(90deg);
      }
      #cicon {
        color: var(--nv-primary, #018786);
        transform: rotateZ(-90deg);
      }
      #iicon {
        color: var(--nv-primary, #018786);
        transform: rotateZ(90deg);
      }
      #iconPanel.indeterminate #iicon {
        opacity: 1;
        transform: none;
      }
      #iconPanel.checked #cicon {
        opacity: 1;
        transform: none;
      }
      #iconPanel.unchecked #uicon {
        opacity: 1;
        transform: none;
      }
      label {
        white-space: nowrap;
        padding-left: 8px;
      }
      #container.focused::before {
        opacity: 0.1;
      }

      :host([disabled]) #container {
        opacity: 0.5;
        pointer-events: none;
      }
      :host([disabled]) #cicon {
        color: var(--nv-unchecked-color, rgba(0, 0, 0, 0.38));
      }

      @media (hover: hover) {
        #container:hover::before {
          opacity: 0.05;
        }
        #container.focused:hover::before {
          opacity: 0.1;
        }
      }
    `];Q([l({type:Boolean,reflect:!0}),W("design:type",Object)],B.prototype,"disabled",void 0);Q([l(),W("design:type",String)],B.prototype,"label",void 0);Q([g(),W("design:type",Object)],B.prototype,"_focused",void 0);Q([b("input"),W("design:type",HTMLInputElement)],B.prototype,"_i",void 0);Q([l({type:Boolean}),W("design:type",Boolean),W("design:paramtypes",[Boolean])],B.prototype,"checked",null);Q([l({type:Boolean}),W("design:type",Boolean),W("design:paramtypes",[Boolean])],B.prototype,"indeterminate",null);B=Q([y("nv-checkbox")],B);var tt=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ht=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},U=class extends f{constructor(){super(...arguments),this.disabled=!1,this.checked=!1,this._focused=!1}render(){let t={focused:this._focused};return p`
    <div id="container" class="horiz center ${O(t)}">
      <div id="radioRing">
        <div id="radioDot"></div>
      </div>
      ${this.label?p`<label>${this.label}</label>`:null}
      <input 
        aria-label="${Rt(this.label)}" 
        type="radio"
        name="${this.name||""}"
        value="${this.value||this.name||""}"
        ?disabled="${this.disabled}"
        .checked="${this.checked}" 
        @change=${this._onChecked}
        @focus=${this._onFocus}
        @blur=${this._onBlur}>
    </div>
    `}_onFocus(){this._focused=!0}_onBlur(){this._focused=!1}_onChecked(t){let e=t.target;this.checked=e.checked,this.fire(t.type)}focus(){var t;let e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input");e&&e.focus()}blur(){var t;let e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input");e&&e.blur()}};U.styles=[f.styles,m`
      :host {
        display: inline-block;
        vertical-align: top;
        line-height: 1;
        font-size: 14px;
      }
      #container {
        overflow: hidden;
        padding: var(--nv-radio-padding, 14px);
        user-select: none;
        position: relative;
      }
      #container::before {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 40px;
        height: 40px;
        background: var(--nv-unchecked-color, rgba(0, 0, 0, 0.38));;
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        margin: 0;
        cursor: pointer;
      }
      label {
        white-space: nowrap;
        padding-left: 8px;
      }
      #container.focused::before {
        opacity: 0.1;
      }
      #radioRing {
        width: 20px;
        height: 20px;
        border: 2px solid;
        border-radius: 50%;
        color: var(--nv-unchecked-color, rgba(0, 0, 0, 0.38));
        position: relative;
      }
      #radioDot {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        margin: -5px 0 0 -5px;
        background: var(--nv-primary, #018786);
        transform: scale(0);
        transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      
      :host([checked]) #container::before {
        background: var(--nv-primary, #018786);
      }
      :host([checked]) #radioRing {
        color: var(--nv-primary, #018786);
      }
      :host([checked][disabled]) #radioRing {
        color: var(--nv-unchecked-color, rgba(0, 0, 0, 0.38));
      }
      :host([checked]) #radioDot {
        transform: none;
      }

      :host([disabled]) #container {
        opacity: 0.5;
        pointer-events: none;
      }

      @media (hover: hover) {
        #container:hover::before {
          opacity: 0.05;
        }
        #container.focused:hover::before {
          opacity: 0.1;
        }
      }
    `];tt([l({type:Boolean,reflect:!0}),ht("design:type",Object)],U.prototype,"disabled",void 0);tt([l({type:String,reflect:!0}),ht("design:type",String)],U.prototype,"name",void 0);tt([l({type:Boolean,reflect:!0}),ht("design:type",Object)],U.prototype,"checked",void 0);tt([l(),ht("design:type",String)],U.prototype,"value",void 0);tt([l(),ht("design:type",String)],U.prototype,"label",void 0);tt([g(),ht("design:type",Object)],U.prototype,"_focused",void 0);U=tt([y("nv-radio")],U);var dt=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},yt=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},Y=class extends f{constructor(){super(...arguments),this.disabled=!1,this.checked=!1,this._focused=!1}render(){let t={focused:this._focused};return p`
    <div id="container" class="horiz center ${O(t)}">
      <div id="track"></div>
      ${this.label?p`<label>${this.label}</label>`:null}
      <div id="thumb">
        <div id="knob"></div>
      </div>
      <input 
        type="checkbox"
        ?disabled="${this.disabled}"
        ?checked="${this.checked}" 
        @change=${this._onChecked}
        @focus=${this._onFocus}
        @blur=${this._onBlur}>
    </div>
    `}updated(t){t.has("checked")&&this._i&&(this._i.checked=this.checked)}_onFocus(){this._focused=!0}_onBlur(){this._focused=!1}_onChecked(t){let e=t.target;this.checked=e.checked,this.fire(t.type)}focus(){var t;(t=this._i)===null||t===void 0||t.focus()}blur(){var t;(t=this._i)===null||t===void 0||t.blur()}};Y.styles=[f.styles,m`
      :host {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
      }
      #container {
        overflow: hidden;
        padding: var(--nv-switch-padding, 17px 14px);
        user-select: none;
        position: relative;
      }
      
      #track {
        width: 36px;
        height: 14px;
        background-color: var(--nv-on-surface, #000);
        border-radius: 7px;
        overflow: hidden;
        opacity: 0.38;
        transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 90ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      #thumb {
        position: absolute;
        top: 0;
        left: 0;
        padding: 14px;
        transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      #knob {
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--nv-surface, #fff);
        transition: background-color 90ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
        position: relative;
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        margin: 0;
        cursor: pointer;
      }
      #thumb::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 48px;
        background: currentColor;
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
      }
      #container.focused #thumb::before {
        opacity: 0.1;
      }
      label {
        white-space: nowrap;
        padding-left: 8px;
        line-height: 1;
      }

      :host([checked]) #thumb::before {
        background: var(--nv-primary, #018786);
      }
      :host([checked]) #track {
        background-color: var(--nv-primary, #018786);
        opacity: 0.54;
      }
      :host([checked]) #thumb {
        transform: translateX(16px);
      }
      :host([checked]) #knob {
        background-color: var(--nv-primary, #018786);
      }

      :host([disabled]) #container {
        opacity: 0.5;
        pointer-events: none;
      }

      @media (hover: hover) {
        #container:hover #thumb::before {
          opacity: 0.05;
        }
        #container.focused:hover #thumb::before {
          opacity: 0.1;
        }
      }
    `];dt([l({type:Boolean,reflect:!0}),yt("design:type",Object)],Y.prototype,"disabled",void 0);dt([l({type:Boolean,reflect:!0}),yt("design:type",Object)],Y.prototype,"checked",void 0);dt([l(),yt("design:type",String)],Y.prototype,"label",void 0);dt([g(),yt("design:type",Object)],Y.prototype,"_focused",void 0);dt([b("input"),yt("design:type",HTMLInputElement)],Y.prototype,"_i",void 0);Y=dt([y("nv-switch")],Y);var M=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},L=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},k=class extends f{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this._focusable=!0,this.actionPosition="trailing",this.imageLayout="round"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){var t;let e=!!(this.action&&this.action!=="select"&&this.actionPosition==="trailing"),i=!!(this.action&&this.action!=="select"&&this.actionPosition==="leading"),n=!!(this.icon&&!this.image&&!i),r=!!(this.trailingIcon&&!e),s=((t=this.meta)===null||t===void 0?void 0:t.trim())&&!r&&!e,a={"actionable-control":!!(this.action&&this.action!=="select"),"trailing-control":e,"trailing-icon":r,"leading-control":i,selectable:this.action==="select","has-image":!!this.image,"rect-image":this.imageLayout==="rectangle"};return p`
    <div id="container" class="horiz ${O(a)}" tabindex="${this._focusable?0:-1}" @click="${this.onItemClick}" @keydown="${this.onKeydown}">
      
      ${i?p`
        <span id="leadingAction" 
          @click="${this.onActionControlClick}"
          @change="${this.onActionControlChange}">
          ${this.renderAction()}
        </span>
      `:null}
      ${n?p`<nv-icon id="leadingIcon" .icon="${this.icon}"></nv-icon>`:null}
      
      ${this.image?this.renderImage():null}

      <div id="textPanel" class="flex vert">
        <span id="primaryText"><slot></slot></span>
        <span id="secondaryText"><slot name="secondary"></slot></span>
      </div>

      ${s?p`<div id="meta">${this.meta}</div>`:null}

      ${r?p`<nv-icon id="trailingIcon" .icon="${this.trailingIcon}"></nv-icon>`:null}
      ${e?p`
        <span id="trailingAction" 
          @click="${this.onActionControlClick}"
          @change="${this.onActionControlChange}">
          ${this.renderAction()}
        </span>
      `:null}

    </div>
    `}renderAction(){if(this.action)switch(this.action){case"checkbox":return p`<nv-checkbox tabindex="-1" .checked="${this.checked}"></nv-checkbox>`;case"radio":return p`<nv-radio tabindex="-1" .checked="${this.checked}"></nv-radio>`;case"switch":return p`<nv-switch tabindex="-1" .checked="${this.checked}"></nv-switch>`}return null}renderImage(){return this.image?p`<img src="${this.image}" class="image-${this.imageLayout}">`:null}onActionControlClick(t){t.stopPropagation()}setChecked(t){this.checked!==t&&(this.checked=t,this.fire("change"))}onActionControlChange(t){t.stopPropagation(),this.setChecked(t.target.checked)}onItemClick(){if(this.action)switch(this.action){case"radio":this.setChecked(!0);break;case"select":this.parentElement&&this.parentElement.multiple?this.setChecked(!this.checked):this.setChecked(!0);break;default:this.setChecked(!this.checked);break}else this.fire("select")}onKeydown(t){switch(t.code){case" ":case"Space":case"Spacebar":case"Enter":return t.preventDefault(),t.stopPropagation(),this.onItemClick(),!1}return!0}focus(){this._container&&this._container.focus()}blur(){this._container&&this._container.blur()}};k.styles=[f.styles,m`
    :host {
      display: block;
    }
    #container {
      padding: var(--nv-list-item-padding, 8px 24px 8px 16px);
      min-height: var(--nv-list-item-min-height, 40px);
      position: relative;
      cursor: pointer;
      outline: none;
    }
    #container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      opacity: 0;
      pointer-events: none;
    }
    #container::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentcolor;
      opacity: 0;
      pointer-events: none;
      transform: scale(0.8);
      transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    #container:focus::before {
      opacity: 0.1;
    }
    #container:active::after {
      opacity: 0.1;
      transform: scale(1);
      transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    #textPanel {
      pointer-events: none;
    }
    #primaryText {
      font-size: var(--nv-primary-text-size, 16px);
      white-space: var(--nv-primary-white-space, nowrap);
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5;
    }
    #secondaryText {
      font-size: var(--nv-secondary-text-size, 14px);
      color: var(--nv-secondary-text-color, rgba(0,0,0,0.54));
      line-height: 1.5;
    }
    #meta {
      font-size: 14px;
      color: var(--nv-meta-text-color, rgba(0,0,0,0.54));
      line-height: 1.5;
      padding-left: 28px;
      align-self: var(--nv-meta-self-align, flex-start);
    }
    nv-icon {
      color: var(--nv-icon-color, rgba(0,0,0,.38));
    }
    #leadingIcon {
      margin-right: 16px;
    }
    #trailingIcon {
      margin-left: 16px;
      align-self: center;
    }
    #trailingAction {
      margin-left: 16px;
    }
    #leadingAction {
      margin-right: 20px;
    }
    
    #container.has-image {
      align-items: center;
    }
    #container.has-image.rect-image {
      padding-left: var(--nv-rect-image-left-padding, 0);
      padding-top: 12px;
      padding-bottom: 12px;
    }
    #container.actionable-control {
      align-items: center;
    }
    #container.actionable-control.trailing-control {
      padding-right: 4px;
    }
    #container.actionable-control.leading-control {
      padding-left: 4px;
    }
    #container.actionable-control:active::after {
      opacity: 0;
      transform: scale(0.8);
      transition: none;
    }
    #container.trailing-icon {
      padding-right: 16px;
    }

    img {
      display: block;
      object-fit: cover;
      margin-right: 16px;
    }
    img.image-round {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    img.image-square {
      width: 40px;
      height: 40px;
    }
    img.image-rectangle {
      width: 100px;
      height: 56px;
    }
    
    :host([checked]) #container.selectable {
      color: var(--nv-primary);
    }
    :host([checked]) #container.selectable::before {
      transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
      opacity: 0.1;
    }
    :host([checked]) #container.selectable:focus::before {
      opacity: 0.2;
    }

    :host([disabled]) #container {
      color: var(--nv-disabled-color, rgba(0, 0, 0, 0.38));
      cursor: initial;
      pointer-events: none;
      opacity: 0.7;
    }
    :host([disabled]) #secondaryText {
      color: var(--nv-disabled-color, rgba(0, 0, 0, 0.38));
    }

    @media (hover: hover) {
      #container:hover::before {
        opacity: 0.05;
      }
      #container:focus:hover::before {
        opacity: 0.1;
      }
      :host([checked]) #container.selectable:hover::before {
        opacity: 0.15;
      }
      :host([checked]) #container.selectable:focus:hover::before {
        opacity: 0.2;
      }
    }
    `];M([l({type:Boolean,reflect:!0}),L("design:type",Object)],k.prototype,"checked",void 0);M([l({type:Boolean,reflect:!0}),L("design:type",Object)],k.prototype,"disabled",void 0);M([l({type:Boolean}),L("design:type",Object)],k.prototype,"_focusable",void 0);M([l(),L("design:type",String)],k.prototype,"action",void 0);M([l({attribute:"action-position"}),L("design:type",String)],k.prototype,"actionPosition",void 0);M([l(),L("design:type",String)],k.prototype,"icon",void 0);M([l({attribute:"trailing-icon"}),L("design:type",String)],k.prototype,"trailingIcon",void 0);M([l(),L("design:type",String)],k.prototype,"image",void 0);M([l({attribute:"image-layout"}),L("design:type",String)],k.prototype,"imageLayout",void 0);M([l(),L("design:type",String)],k.prototype,"name",void 0);M([l(),L("design:type",String)],k.prototype,"meta",void 0);M([b("#container"),L("design:type",HTMLElement)],k.prototype,"_container",void 0);k=M([y("nv-list-item")],k);var te=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ee=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},_t=class extends f{get _items(){return this._slotted.filter(t=>t instanceof k)}constructor(){super(),this.multiple=!1,this._focusIn=!1,this.handleFocusin=()=>{this._focusIn||(this._focusIn=!0,this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown))},this.handleFocusout=t=>{let e=t.relatedTarget;e&&this.contains(e)||(this._focusIn=!1,this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout))},this.handleKeydown=t=>{let e=this.getRootNode().activeElement;if(!e)return;let i=this._items.indexOf(e);if(i<0)return;let n=(r,s,a)=>{let c=this._items.length;if(!(a>c)&&c){let h=r<0?c-1:r%c,d=this._items[h];if(d.disabled){n(s?h+1:h-1,s,a+1);return}this._focusItem(d)}};switch(t.code){case"ArrowUp":case"ArrowLeft":n(i-1,!1,0),t.preventDefault();break;case"ArrowRight":case"ArrowDown":n(i+1,!0,1),t.preventDefault();break;case"End":n(this._items.length-1,!1,0),t.preventDefault();break;case"Home":n(0,!0,0),t.preventDefault();break;case"Escape":case"Backspace":this.fire("key-escape"),t.preventDefault();break}},this.addEventListener("focusin",this.handleFocusin)}get selected(){let t=this._items;if(!t||t.length===0)return null;let e=[];for(let i of t)if(i.checked)if(this.multiple)e.push(i);else return i;return e.length?e:null}render(){return p`
    <div id="container" @change="${this._onItemChange}">
      <slot></slot>
    </div>`}firstUpdated(){this._updateFocusStates()}_updateFocusStates(){let t=null;for(let e of this._items)if(!e.disabled&&e.checked){t=e;break}t=t||this._items[0];for(let e of this._items)e===t?e._focusable=!0:e._focusable=!1}_onItemChange(t){let e=t.target;if(e.checked&&(e.action==="radio"||e.action==="select"&&!this.multiple))for(let i of this._items)i!==e&&e.action===i.action&&(i.checked=!1);this._updateFocusStates()}focus(){for(let t=0;t<this._items.length;t++){let e=this._items[t];if(e._focusable){e.focus();return}}}_focusItem(t){if(t){if(!this.multiple)for(let e of this._items)e===t?e._focusable=!0:e._focusable=!1;t.focus()}else if(!this.multiple)for(let e=0;e<this._items.length;e++){let i=this._items[e];e===0?i._focusable=!0:i._focusable=!1}}};_t.styles=[f.styles,m`
    :host {
      display: block;
      padding: 8px 0;
    }
    #container {
      display: flex; flex-direction: column;
    }
    `];te([l({type:Boolean,reflect:!0}),ee("design:type",Object)],_t.prototype,"multiple",void 0);te([rt(),ee("design:type",Array)],_t.prototype,"_slotted",void 0);_t=te([y("nv-list"),ee("design:paramtypes",[])],_t);var E=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},S=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},Ke="M7 10l5 5 5-5z",$=class extends f{constructor(){super(...arguments),this.disabled=!1,this.outlined=!1,this.label="",this.direction="down",this._menuShowing=!1,this._focused=!1,this._selectedText="",this._options=[],this._selectedItem=null}get value(){return this._input?this._input.value:this._pendingValue!==void 0?this._pendingValue:""}set value(t){let e=this._listItems;if(e&&e.length){this._pendingValue=void 0;for(let i=0;i<e.length;i++)if(e[i].name===t){this.setSelected(e[i],!1);return}}else this._pendingValue=t}render(){let t={focused:this._focused||this._menuShowing,nolabel:!this.label,notched:!!(this.label&&(this._focused||this._selectedText)),leadingicon:!!this.icon,trailingicon:!0,hastext:!!this._selectedText,outlined:this.outlined,menushowing:this._menuShowing};return p`
    <label class="horiz center ${O(t)}">
      ${this.label?p`<span id="label" class="textlabel">${this.label}</span>`:null}
      ${this.icon?p`<nv-icon id="leadingIcon" .icon="${this.icon}"></nv-icon>`:null}

      <div id="selectedText">${this._selectedText}</div>

      <input 
        readonly
        name="${Rt(this.name)}"
        ?disabled="${this.disabled}"
        aria-labelledby="label"
        @click="${this._onInputClick}"
        @focus=${this._onFocus}
        @blur=${this._onBlur}
        @keydown="${this._onKeydown}">
      
      ${this.outlined?p`
        <div id="outlineBorder" class="horiz">
          <span id="obleft"></span>
          
          ${this.label?p`
          <div id="obcenter">
            <span id="oblabel" class="textlabel">${this.label}</span>
          </div>
          `:null}
          
          <span id="obright" class="flex"></span>
        </div>
        `:p`<span id="border"></span>`}
      
      <nv-icon id="trailingIcon" .icon="${Ke}"></nv-icon>
    </label>
    <nv-menu 
      pin="bottom-start" 
      full-width 
      animate-vertically 
      .maxHeight="${this.maxPopoverHeight}"
      .direction="${this.direction}"
      @popover-open="${this._popOpen}"
      @popover-close="${this._popClose}"
      @select="${this._onSelect}"
      @key-escape="${this._onEscKey}">
      <nv-list tabindex="-1">
        ${this._options.map(e=>p`<nv-list-item name="${e.value||""}">${(e.textContent||"").trim()}</nv-list-item>`)}
      </nv-list>
    </nv-menu>
    <div style="display: none;"><slot @slotchange="${this._onSlotChange}"></slot></div>
    `}_onSlotChange(){this._options=this._slotted.filter(t=>t instanceof HTMLOptionElement)}updated(){this._pendingValue&&(this.value=this._pendingValue)}_popClose(){this._menuShowing=!1}_popOpen(){this._menuShowing=!0,setTimeout(()=>{if(this._menuShowing){if(this._selectedItem)this._selectedItem.focus();else if(this._listItems){let t=this._listItems[0];t&&t.focus()}}})}focus(){var t;(t=this._input)===null||t===void 0||t.focus()}blur(){var t;(t=this._input)===null||t===void 0||t.focus()}_onFocus(){this._focused=!0}_onBlur(){this._focused=!1}_onInputClick(t){t.stopPropagation()}_onSelect(t){this.setSelected(t.target,!0),t.stopPropagation(),this.focus()}setSelected(t,e){var i,n;this._selectedItem=t,this._selectedText=((i=this._selectedItem.textContent)===null||i===void 0?void 0:i.trim())||"",this._input&&(this._input.value=this._selectedItem.name||((n=this._selectedItem.textContent)===null||n===void 0?void 0:n.trim())||""),e&&this.fire("change")}_onKeydown(t){switch(t.code){case" ":case"Space":case"Spacebar":case"Enter":return this._menu.open=!this._menu.open,t.preventDefault(),t.stopPropagation(),!1;case"ArrowUp":case"ArrowLeft":return this._menu.open=!1,t.preventDefault(),t.stopPropagation(),!1;case"ArrowRight":case"ArrowDown":return this._menu.open=!0,t.preventDefault(),t.stopPropagation(),!1;case"Escape":case"Backspace":case"Delete":return this._onEscKey(),t.preventDefault(),t.stopPropagation(),!1}return!0}_onEscKey(){this._menu.open=!1}};$.styles=[f.styles,m`
      :host {
        display: inline-flex;
        vertical-align: top;
        flex-direction: column;
        width: 280px;
        font-size: 1rem;
        position: relative;
      }
      :host([disabled]) label {
        pointer-events: none;
        opacity: 0.38;
      }

      label {
        display: block;
        width: 100%;
        padding: 20px 16px 8px;
        height: 56px;
        position: relative;
        border-radius: 0;
        border-top-left-radius: var(--nv-select-border-radius, 4px);
        border-top-right-radius: var(--nv-select-border-radius, 4px);
        overflow: hidden;
      }
      label::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--nv-select-background, currentColor);
        opacity: 0.04;
        pointer-events: none;
        transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      label.nolabel {
        padding-top: 0;
        padding-bottom: 0;
      }
      label.leadingicon {
        padding-left: 44px;
      }
      label.leadingicon #label {
        max-width: calc(100% - 44px);
        left: 44px;
      }
      label.trailingicon {
        padding-right: 44px;
      }
      label.focused #border::after {
        opacity: 1;
        transform: scaleX(1);
      }
      label.focused #label {
        color: var(--nv-primary);
        opacity: 1;
      }
      label.focused #trailingIcon {
        color: var(--nv-primary);
      }
      label.menushowing #trailingIcon {
        transform: translateY(-50%) rotate(180deg);
      }
      
      label.notched #label {
        transform: translateY(-106%) scale(0.75);
      }

      #leadingIcon {
        position: absolute;
        left: 12px;
        top: 50%;
        pointer-events: none;
        transform: translateY(-50%);
        color: var(--nv-select-leading-icon-color, rgba(0, 0, 0, 0.54));
      }
      #trailingIcon {
        position: absolute;
        right: 0;
        top: 50%;
        padding: 10px;
        width: 44px;
        height: 44px;
        transform: translateY(-50%);
        color: var(--nv-select-trailing-icon-color, rgba(0, 0, 0, 0.54));
        pointer-events: none;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }

      #selectedText {
        color: inherit;
        display: block;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
        margin: 0;
        padding: 0;
        height: 28px;
        line-height: 28px;
        pointer-events: none;
      }

      input {
        width: 0;
        height: 0;
        position: absolute;
        opacity: 0;
        pointer-events: none;
        overflow: hidden;
        margin: 0;
        padding: 0;
        appearance: none;
        outline: none;
        border: 0;
      }
      #border {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        height: 1px;
        background-color: var(--nv-select-line-color, rgba(0, 0, 0, 0.42));
        pointer-events: none;
      }
      #border::after {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 2px;
        content: "";
        background-color: var(--nv-primary);
        opacity: 0;
        transform: scaleX(0);
        transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1) 0s, opacity 180ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      .textlabel {
        font-family: var(--nv-label-font-family, inherit);
        font-size: var(--nv-label-font-size, inherit);
        font-weight: var(--nv-label-font-weight, inherit);
        letter-spacing: var(--nv-label-letter-spacing, inherit);
        text-transform: var(--nv-label-text-transform, inherit);
        white-space: nowrap;
        line-height: 1.15;
        text-align: left;
      }
      #label {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        pointer-events: none;
        color: inherit;
        opacity: 0.6;
        transform-origin: left top;
        text-overflow: ellipsis;
        cursor: text;
        overflow: hidden;
        will-change: transform;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      nv-menu {
        --nv-select-border-radius: 0 0 4px 4px;
      }

      @media (hover: hover) {
        label:hover::before {
          opacity: 0.08;
        }
        label:hover #border {
          background-color: var(--nv-select-line-color, rgba(0, 0, 0, 0.6));
        }
      }
    `,m`
    label.outlined {
      padding-top: 0;
      padding-bottom: 0;
      border-radius: var(--nv-select-border-radius, 4px);
      overflow: initial;
    }
    label.outlined::before {
      content: none;
    }
    label.notched.outlined #label {
      transform: translateY(-37.25px) scale(0.75);
    }
    label.notched.outlined.leadingicon #label {
      transform: translateY(-37.25px) translateX(-28px) scale(0.75);
    }
    

    label.outlined #label {
      text-overflow: clip;
      transform-origin: left center;
    }

    #outlineBorder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    #obleft {
      width: 12px;
      border-radius: var(--nv-select-border-radius, 4px) 0 0 var(--nv-select-border-radius, 4px);
      border-left: 1px solid;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: var(--nv-select-line-color, rgba(0, 0, 0, 0.42));
    }
    #obright {
      border-radius: 0 var(--nv-select-border-radius, 4px) var(--nv-select-border-radius, 4px) 0;
      border-right: 1px solid;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: var(--nv-select-line-color, rgba(0, 0, 0, 0.42));
    }
    #obcenter {
      padding: 0 4px;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: var(--nv-select-line-color, rgba(0, 0, 0, 0.42));
    }
    #oblabel {
      font-size: 0.75em;
      transform: translateY(-50%);
      display: block;
      opacity: 0;
    }
    label.focused #obleft,
    label.focused #obcenter,
    label.focused #obright {
      border-color: var(--nv-primary);
      border-width: 2px;
    }
    label.notched #obcenter {
      border-top: none;
    }

    @media (hover: hover) {
      label:hover #obright,
      label:hover #obcenter,
      label:hover #obleft {
        border-color: var(--nv-select-line-color, rgba(0, 0, 0, 0.6));
      }
      label.focused:hover #obright,
      label.focused:hover #obcenter,
      label.focused:hover #obleft {
        border-color: var(--nv-primary);
      }
    }
    `];E([l({type:Boolean,reflect:!0}),S("design:type",Object)],$.prototype,"disabled",void 0);E([l({type:Boolean,reflect:!0}),S("design:type",Object)],$.prototype,"outlined",void 0);E([l(),S("design:type",Object)],$.prototype,"label",void 0);E([l(),S("design:type",String)],$.prototype,"name",void 0);E([l(),S("design:type",String)],$.prototype,"icon",void 0);E([l({type:Number,attribute:"max-popover-height"}),S("design:type",Number)],$.prototype,"maxPopoverHeight",void 0);E([l(),S("design:type",String)],$.prototype,"direction",void 0);E([g(),S("design:type",Object)],$.prototype,"_menuShowing",void 0);E([g(),S("design:type",Object)],$.prototype,"_focused",void 0);E([g(),S("design:type",Object)],$.prototype,"_selectedText",void 0);E([g(),S("design:type",Array)],$.prototype,"_options",void 0);E([b("input"),S("design:type",HTMLInputElement)],$.prototype,"_input",void 0);E([b("nv-menu"),S("design:type",lt)],$.prototype,"_menu",void 0);E([$e("nv-list-item"),S("design:type",Object)],$.prototype,"_listItems",void 0);E([rt(),S("design:type",Array)],$.prototype,"_slotted",void 0);E([l(),S("design:type",String),S("design:paramtypes",[String])],$.prototype,"value",null);$=E([y("nv-select")],$);var K=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},et=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},D=class extends f{constructor(){super(...arguments),this.type="text",this.disabled=!1,this.dense=!1,this.rounded=!1,this.trailingIcon=!1}render(){let t={bounded:this.type!=="text",elevated:this.type==="elevated"||this.type==="solid",filled:this.type==="filled"||this.type==="solid",tonal:this.type==="tonal"||this.type==="elevated",icon:!!this.icon,trailingicon:!!(this.icon&&this.trailingIcon)};return p`
    <button ?disabled="${this.disabled}" class="horiz center2 ${O(t)}">
      ${this.icon?p`<nv-icon .icon="${this.icon}"></nv-icon>`:null}
      <slot></slot>
    </button>
    `}focus(){var t;(t=this._b)===null||t===void 0||t.focus()}blur(){var t;(t=this._b)===null||t===void 0||t.blur()}};D.styles=[f.styles,m`
      :host {
        display: inline-block;
        vertical-align: top;
        text-transform: uppercase;
        font-size: 14px;
        min-width: 64px;
        color: var(--nv-primary, #6200ee);
      }
      button {
        cursor: pointer;
        outline: none;
        border-radius: 4px;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
        letter-spacing: var(--nv-button-letter-spacing, 1.25px);
        line-height: 1;
        padding: 0 12px;
        min-height: var(--nv-button-min-height, 40px);
        text-transform: inherit;
        width: 100%;
        background: none;
        border: none;
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
        pointer-events: none;
      }
      button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentcolor;
        opacity: 0;
        pointer-events: none;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:focus::before {
        opacity: 0.1;
      }
      button:active::after {
        opacity: 0.1;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      nv-icon {
        width: var(--nv-button-icon-size, 18px);
        height: var(--nv-button-icon-size, 18px);
        margin-inline-end: var(--nv-button-icon-end-margin, 8px);
        flex-shrink: 0;
      }
      button.icon {
        padding: 0 16px 0 12px;
      }
      button.trailingicon {
        padding: 0 12px 0 16px;
      }
      button.horiz.trailingicon {
        flex-direction: row-reverse;
      }
      button.trailingicon nv-icon {
        margin-inline-end: 0;
        margin-inline-start: 8px;
      }

      :host([rounded]) button {
        border-radius: 40px;
      }
      :host([dense]) button {
        min-height: 32px;
      }
      :host([disabled]) button {
        color: var(--nv-disabled-color, rgba(0, 0, 0, 0.38));
        cursor: initial;
        pointer-events: none;
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
        button:focus:hover::before {
          opacity: 0.1;
        }
      }
    `,m`
    button.bounded {
      padding: 0 24px;
    }
    button.bounded.icon {
      padding-inline-start: 16px;
    }
    button.bounded.icon.trailingicon {
      padding-inline-start: 24px;
      padding-inline-end: 16px;
    }
    button.elevated {
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      transition: box-shadow 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    button.elevated:active {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }

    button.filled {
      background: currentColor;
      border: none;
    }
    button.filled > * {
      color: var(--nv-on-primary, #ffffff)
    }
    button.filled::before {
      background: var(--nv-on-primary, #ffffff);
    }
    button.filled::after {
      background: var(--nv-on-primary, #ffffff);
    }
    button.filled:focus::before {
      opacity: 0.2;
    }
    button.filled:active::after {
      opacity: 0.2;
    }

    button.tonal {
      background: var(--nv-secondary-container, #ffffff);
      border: none;
    }
    button.tonal > * {
      color: var(--nv-on-secondary-container, currentColor);
    }
    button.tonal::before {
      background: var(--nv-on-secondary-container, currentColor);
    }
    button.tonal::after {
      background: var(--nv-on-secondary-container, currentColor);
    }

    :host([disabled]) button.tonal,
    :host([disabled]) button.filled {
      background-color: var(--nv-disabled-color, rgba(0, 0, 0, 0.12));
      box-shadow: none;
    }
    :host([disabled]) button.tonal > *,
    :host([disabled]) button.filled > * {
      color: var(--nv-disabled-text-color, rgba(0, 0, 0, 0.38));
    }

    :host([type="outlined"]) button {
      background: none;
      border: 1px solid;
      border-color: var(--nv-button-outline-color, currentColor);
    }

    @media (hover: hover) {
      button.filled:hover::before {
        opacity: 0.1;
      }
      button.filled:focus:hover::before {
        opacity: 0.2;
      }
    }
    `];K([l({reflect:!0}),et("design:type",String)],D.prototype,"type",void 0);K([l({type:Boolean,reflect:!0}),et("design:type",Object)],D.prototype,"disabled",void 0);K([l({type:Boolean,reflect:!0}),et("design:type",Object)],D.prototype,"dense",void 0);K([l({type:Boolean,reflect:!0}),et("design:type",Object)],D.prototype,"rounded",void 0);K([l(),et("design:type",String)],D.prototype,"icon",void 0);K([l({type:Boolean,attribute:"trailing-icon"}),et("design:type",Object)],D.prototype,"trailingIcon",void 0);K([b("button"),et("design:type",HTMLButtonElement)],D.prototype,"_b",void 0);D=K([y("nv-button")],D);function pt(o){let t=-1;return self.Touch&&o instanceof Touch?t=o.identifier:ie(o)&&(t=o.pointerId),{id:t,nativeEvent:o,clientX:o.clientX,clientY:o.clientY}}var ie=o=>self.PointerEvent&&o instanceof PointerEvent,Ot=class{ael(t,e){this._e.addEventListener(t,e)}rel(t,e){this._e.removeEventListener(t,e)}constructor(t,e){this.startPointers=[],this.currentPointers=[],this.pointerStart=i=>{i.button===0&&this.triggerPointerStart(pt(i),i)&&(ie(i)?((i.target&&"setPointerCapture"in i.target?i.target:this._e).setPointerCapture(i.pointerId),this.ael("pointermove",this.move),this.ael("pointerup",this.pointerEnd),this.ael("pointercancel",this.pointerEnd)):(window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.pointerEnd)))},this.touchStart=i=>{for(let n of Array.from(i.changedTouches))this.triggerPointerStart(pt(n),i)},this.move=i=>{let n="changedTouches"in i?Array.from(i.changedTouches).map(s=>pt(s)):[pt(i)],r=[];for(let s of n){let a=this.currentPointers.findIndex(c=>c.id===s.id);a!==-1&&(r.push(s),this.currentPointers[a]=s)}r.length!==0&&this._h.onTrackMove(r,i)},this._end=(i,n)=>{let r=this.currentPointers.findIndex(s=>s.id===i.id);return r===-1?!1:(this.currentPointers.splice(r,1),this.startPointers.splice(r,1),this._h.onTrackEnd&&this._h.onTrackEnd(i,n,n.type==="touchcancel"||n.type==="pointercancel"),!0)},this.pointerEnd=i=>{if(this._end(pt(i),i))if(ie(i)){if(this.currentPointers.length)return;this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd)}else window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)},this.touchEnd=i=>{for(let n of Array.from(i.changedTouches))this._end(pt(n),i)},this._e=t,this._h=e,self.PointerEvent?this.ael("pointerdown",this.pointerStart):(this.ael("mousedown",this.pointerStart),this.ael("touchstart",this.touchStart),this.ael("touchmove",this.move),this.ael("touchend",this.touchEnd),this.ael("touchcancel",this.touchEnd))}stop(){this.rel("pointerdown",this.pointerStart),this.rel("mousedown",this.pointerStart),this.rel("touchstart",this.touchStart),this.rel("touchmove",this.move),this.rel("touchend",this.touchEnd),this.rel("touchcancel",this.touchEnd),this.rel("pointermove",this.move),this.rel("pointerup",this.pointerEnd),this.rel("pointercancel",this.pointerEnd),window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.pointerEnd)}triggerPointerStart(t,e){return this._h.onTrackStart(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}};var N=function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},R=function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)},A=class extends f{constructor(){super(...arguments),this.min=0,this.max=100,this.step=0,this.disabled=!1,this.markers=!1,this.vertical=!1,this._pct=0,this._tracking=!1,this._focussed=!1,this._marks=[],this._currentValue=0,this._value=0,this.handleKeydown=t=>{switch(t.code){case"ArrowUp":case"ArrowRight":this._increment(1);break;case"ArrowLeft":case"ArrowDown":this._decrement(1);break;case"PageUp":this._increment(3);break;case"PageDown":this._decrement(3);break;case"End":{let e=this.max;e!==this._currentValue&&(this.setCurrentValue(e,!0),this.updateConfirmedValue());break}case"Home":{let e=this.min;e!==this._currentValue&&(this.setCurrentValue(e,!0),this.updateConfirmedValue());break}}}}get value(){return this._value}set value(t){this._value=t,this.setCurrentValue(t,!1)}setCurrentValue(t,e,i=!1){(i||t!==this._currentValue)&&(this._currentValue=t,this._pct=this.max===this.min?0:(t-this.min)/(this.max-this.min)*100,this._pct=Math.max(0,Math.min(100,this._pct)),e&&this.fire("input"))}render(){let t={tracking:this._tracking,focussed:this._focussed,emoji:!!this.emoji},e=`${this._pct}%`,i={width:this.vertical?null:e,height:this.vertical?e:null},n={left:this.vertical?null:e,bottom:this.vertical?e:null};return p`
    <div id="container" class="${O(t)}">
      <div id="basetrack"></div>
      ${this._marks.map(r=>p`<div class="marker" style="${this.vertical?`bottom: ${r}%;`:`left: ${r}%;`}"></div>`)}
      <div id="activetrack" style=${ct(i)}></div>
      <div id="thumb" style=${ct(n)}>
        <input 
          type="range"
          aria-valuemin="${this.min}"
          aria-valuemax="${this.max}"
          aria-valuenow="${this._currentValue}" 
          .min="${`${this.min}`}" 
          .max="${`${this.max}`}" 
          .value="${`${this._currentValue}`}"
          ?disabled="${this.disabled}"
          @focus=${this.onInputFocus}
          @blur=${this.onInputBlur}
          @input=${r=>r.stopPropagation()}
          @change=${r=>r.stopPropagation()}>
        ${this.emoji?p`<span id="emji">${this.emoji}</span>`:null}
      </div>
      ${this.step?p`
        <div id="valueLabel" style=${ct(n)}>${this._currentValue}</div>
      `:null}
    </div>
    `}firstUpdated(){new Ot(this._container,this);let t=Math.max(this.min,Math.min(this.max,this._currentValue));t!==this.value&&(this.value=t,this.requestUpdate())}updated(t){(t.has("min")||t.has("max"))&&this.setCurrentValue(this._currentValue,!1,!0),(t.has("min")||t.has("max")||t.has("step")||t.has("markers"))&&this.recomputeMarkers()}onInputFocus(){this._focussed=!0,this.addEventListener("keydown",this.handleKeydown)}onInputBlur(){this._focussed=!1,this.removeEventListener("keydown",this.handleKeydown)}recomputeMarkers(){if(this._marks=[],this.step&&this.markers&&this.max>this.min){let t=this.min;for(;t<this.max;){let e=(t-this.min)/(this.max-this.min)*100;e>0&&e<100&&this._marks.push(e),t=Math.min(this.max,t+this.step)}}}setValueFromPointer(t){let{left:e,width:i,height:n,bottom:r}=this._container.getBoundingClientRect(),s=0;this.vertical?s=n?(r-t.clientY)/n:0:s=i?(t.clientX-e)/i:0,s=Math.max(0,Math.min(1,s));let a=(this.max-this.min)*s+this.min;if(this.step){let c=Math.round((a-this.min)/this.step);a=Math.min(this.max,c*this.step+this.min)}this.setCurrentValue(a,!0)}onTrackStart(t,e){return this._tracking?!1:(e.preventDefault(),this._tracking=!0,this._input.focus(),this.setValueFromPointer(t),!0)}onTrackMove(t){this._tracking&&this.setValueFromPointer(t[0])}onTrackEnd(){this._tracking&&(this._tracking=!1,this.updateConfirmedValue())}updateConfirmedValue(){this._value!==this._currentValue&&(this.value=this._currentValue,this.fire("change"))}_increment(t){let e=this._currentValue;if(this.step){let i=Math.floor((this._currentValue-this.min)/this.step)+t;e=Math.min(this.max,i*this.step+this.min)}else e=Math.min(this.max,this._currentValue+t/20*(this.max-this.min));e!==this._currentValue&&(this.setCurrentValue(e,!0),this.updateConfirmedValue())}_decrement(t){let e=this._currentValue;if(this.step){let i=Math.ceil((this._currentValue-this.min)/this.step)-t;e=Math.max(this.min,i*this.step+this.min)}else e=Math.max(this.min,this._currentValue-t/20*(this.max-this.min));e!==this._currentValue&&(this.setCurrentValue(e,!0),this.updateConfirmedValue())}focus(){var t;(t=this._input)===null||t===void 0||t.focus()}blur(){var t;(t=this._input)===null||t===void 0||t.blur()}};A.styles=[f.styles,m`
      :host {
        display: block;
        min-width: 120px;
        cursor: pointer;
      }
      #container {
        height: 48px;
        position: relative;
        touch-action: none;
      }
      #basetrack {
        position: absolute;
        height: 4px;
        top: 50%;
        left: 0;
        right: 0;
        margin-top: -2px;
        background-color: var(--nv-primary, #018786);
        opacity: 0.26;
        border-radius: 2px;
      }
      #activetrack {
        position: absolute;
        height: 6px;
        top: 50%;
        left: 0;
        width: 0%;
        margin-top: -3px;
        background-color: var(--nv-primary, #018786);
        border-radius: 3px;
      }
      #thumb {
        position: absolute;
        top: 50%;
        left: 0;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        background-color: var(--nv-primary, #018786);
        border-radius: 10px;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        transform: scale(.571);
        transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #thumb::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        width: 40px;
        height: 40px;
        background-color: var(--nv-primary, #018786);
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        pointer-events: none;
        opacity: 0;
      }
      .marker {
        position: absolute;
        top: 50%;
        width: 4px;
        height: 4px;
        border-radius: 4px;
        transform: translate3d(-50%, -50%, 0);
        background-color: var(--nv-primary, #018786);
      }
      #valueLabel {
        background-color: var(--nv-primary, #018786);
        color: var(--nv-on-primary, #fff);
        padding: 6px 8px;
        position: absolute;
        top: 50%;
        font-size: 14px;
        line-height: 1;
        border-radius: 4px;
        transform:  translate3d(0, 0, 0) translate3d(-50%, -50%, 0px) scale(0);
        transition: transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
        pointer-events: none;
      }
      #valueLabel::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 0px;
        margin-left: -6px;
        height: 0px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid var(--nv-primary, #018786);
      }
      #emji {
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 20px;
        letter-spacing: initial;
        transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      #container.tracking #thumb {
        transform: none;
      }
      #container.focussed #thumb::before,
      #container.tracking #thumb::before {
        opacity: 0.25;
      }
      #container.focussed #valueLabel {
        transform: translate3d(1px, -16px, 0px) translate3d(-50%, -100%, 0px) scale(1);
      }

      #container.emoji #thumb {
        transform: none;
        background-color: transparent;
        box-shadow: none;
      }
      #container.tracking.emoji #emji {
        transform: scale(1.5);
      }
      #container.emoji #thumb::before {
        content: none;
      }

      :host([disabled]) {
        cursor: initial;
        pointer-events: none;
      }
      :host([disabled]) #basetrack {
        background-color: var(--nv-disabled-color, rgb(154, 154, 154));
      }
      :host([disabled]) #activetrack {
        background-color: var(--nv-disabled-color, rgb(154, 154, 154));
      }
      :host([disabled]) #thumb {
        background-color: var(--nv-disabled-color, rgb(154, 154, 154));
      }

      @media (hover: hover) {
        #container:hover #thumb::before {
          opacity: 0.15;
        }
        #container.focussed:hover #thumb::before,
        #container.tracking:hover #thumb::before {
          opacity: 0.25;
        }
        #container:hover #valueLabel,
        #container.focussed:hover #valueLabel {
          transform: translate3d(1px, -16px, 0px) translate3d(-50%, -100%, 0px) scale(1);
        }
      }
    `,m`
    :host([vertical]) {
      display: inline-block;
      height: 240px;
      min-width: initial;
      cursor: pointer;
    }
    :host([vertical]) #container {
      height: 100%;
      width: 48px;
    }
    :host([vertical]) #basetrack {
      left: 50%;
      top: 0;
      bottom: 0;
      right: initial;
      height: auto;
      width: 4px;
      margin: 0 0 0 -2px;
    }
    :host([vertical]) #activetrack {
      left: 50%;
      top: initial;
      bottom: 0;
      right: initial;
      width: 6px;
      margin: 0 0 0 -3px;
      height: auto;
    }
    :host([vertical]) #thumb {
      bottom: 42.83040364583333%;
      left: 50%;
      top: initial;
      margin: 0 0 -10px -10px;
    }
    :host([vertical]) .marker {
      top: initial;
      left: 50%;
    }
    :host([vertical]) #valueLabel {
      right: 50%;
      top: initial;
      transform:  translate3d(0, 0, 0) translate3d(50%, 50%, 0px) scale(0);
    }
    :host([vertical]) #valueLabel::after {
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid var(--nv-primary, #018786);
      border-left: none;
      margin-left: 0;
      left: -5px;
      top: 50%;
      margin-top: -6px;
    }
    :host([vertical]) #container.focussed #valueLabel {
      transform: translate3d(16px, 0px, 0px) translate3d(100%, 50%, 0px) scale(1);
    }
    @media (hover: hover) {
      :host([vertical]) #container:hover #valueLabel,
      :host([vertical]) #container.focussed:hover #valueLabel {
        transform: translate3d(16px, 0px, 0px) translate3d(100%, 50%, 0px) scale(1);
      }
    }
    `];N([l({type:Number}),R("design:type",Object)],A.prototype,"min",void 0);N([l({type:Number}),R("design:type",Object)],A.prototype,"max",void 0);N([l({type:Number}),R("design:type",Object)],A.prototype,"step",void 0);N([l({type:Boolean,reflect:!0}),R("design:type",Object)],A.prototype,"disabled",void 0);N([l({type:Boolean,reflect:!0}),R("design:type",Object)],A.prototype,"markers",void 0);N([l({type:Boolean,reflect:!0}),R("design:type",Object)],A.prototype,"vertical",void 0);N([l(),R("design:type",String)],A.prototype,"emoji",void 0);N([b("#container"),R("design:type",HTMLDivElement)],A.prototype,"_container",void 0);N([b("input"),R("design:type",HTMLInputElement)],A.prototype,"_input",void 0);N([g(),R("design:type",Object)],A.prototype,"_pct",void 0);N([g(),R("design:type",Object)],A.prototype,"_tracking",void 0);N([g(),R("design:type",Object)],A.prototype,"_focussed",void 0);N([g(),R("design:type",Array)],A.prototype,"_marks",void 0);N([l({type:Number}),R("design:type",Number),R("design:paramtypes",[Number])],A.prototype,"value",null);A=N([y("nv-slider")],A);function Xe(o,t){let e=new Set,i=new Set;for(let s of o)e.add(s.x),e.add(s.x2),i.add(s.y),i.add(s.y2);[t.from,t.to].forEach(s=>{let a=Math.max(0,Math.min(1,s.position));s.direction==="E"||s.direction==="W"?i.add(s.rectangle.y+a*s.rectangle.height):e.add(s.rectangle.x+a*s.rectangle.width)});let n=Array.from(e).sort((s,a)=>s-a),r=Array.from(i).sort((s,a)=>s-a);for(let s=0;s<n.length-1;s++){let a=n[s],c=n[s+1];c-a>=4&&e.add((a+c)/2)}for(let s=0;s<r.length-1;s++){let a=r[s],c=r[s+1];c-a>=4&&i.add((a+c)/2)}return{verticals:Array.from(e).sort((s,a)=>s-a),horizontals:Array.from(i).sort((s,a)=>s-a)}}function Ge(o,t,e,i){let n=[],r=new Set,s=d=>{let v=`${d.x},${d.y}`;r.has(v)||(n.push(d),r.add(v))},a=!1;for(let d of o.verticals){for(let v of o.horizontals){a||(s({x:i.x,y:v}),s({x:i.x2,y:v}));let u={x:d,y:v};t.find(w=>w.contains(u))||s(u)}a||(a=!0),s({x:d,y:i.y}),s({x:d,y:i.y2})}s({x:i.x,y:i.y}),s({x:i.x2,y:i.y}),s({x:i.x,y:i.y2}),s({x:i.x2,y:i.y2});let c=null,h=null;return[e.from,e.to].forEach((d,v)=>{let u=d.rectangle,x=Math.max(0,Math.min(1,d.position)),w;switch(d.direction){case"E":w={x:u.x,y:u.y+x*u.height};break;case"W":w={x:u.x2,y:u.y+x*u.height};break;case"S":w={x:u.x+x*u.width,y:u.y};break;case"N":w={x:u.x+x*u.width,y:u.y2};break}w&&(s(w),v===0?c=w:h=w)}),{points:n,connectionStart:c,connectionEnd:h}}function Ze(o){let t=[],e=[],i=new Set,n=new Set,r=new Et;for(let a of o){let{x:c,y:h}=a;i.has(c)||(i.add(c),t.push(c)),n.has(h)||(n.add(h),e.push(h)),r.addNode(a)}t.sort((a,c)=>a-c),e.sort((a,c)=>a-c);let s=a=>r.has(a);for(let a=0;a<e.length;a++)for(let c=0;c<t.length;c++){let h={x:t[c],y:e[a]};if(s(h)){if(c>0){let d={x:t[c-1],y:e[a]};s(d)&&r.connect(d,h)}if(a>0){let d={x:t[c],y:e[a-1]};s(d)&&r.connect(d,h)}}}return r}function Je(o,t,e,i){if(i==="E")switch(e){case"E":return o.x>=t.x?4:o.y===t.y?0:2;case"N":return o.y>t.y&&o.x<t.x?1:3;case"S":return o.y<t.y&&o.x<t.x?1:3;case"W":return o.y===t.y?4:2}else if(i==="W")switch(e){case"E":return o.y===t.y?4:2;case"N":return o.y>t.y&&o.x>t.x?1:3;case"S":return o.y<t.y&&o.x>t.x?1:3;case"W":return o.x<=t.x?4:o.y===t.y?0:2}else if(i==="N")switch(e){case"E":return o.y>t.y&&o.x<t.x?1:3;case"N":return o.y>=t.y?4:o.x===t.x?0:2;case"S":return o.x===t.x?4:2;case"W":return o.y>t.y&&o.x>t.x?1:3}else if(i==="S")switch(e){case"E":return o.y<t.y&&o.x<t.x?1:3;case"N":return o.x===t.x?4:2;case"S":return o.y<=t.y?4:o.x===t.x?0:2;case"W":return o.y<t.y&&o.x>t.x?1:3}return 0}function Qe(o,t,e){let i=[o],n=[],r=At(o.point,t.point);for(;i.length>0;){let s=i.sort((a,c)=>a.f-c.f).shift();if(s===t)return s;n.push(s);for(let a of s.adjacentNodes.keys()){if(n.indexOf(a)>=0)continue;let c=s.adjacentNodes.get(a),h=s.d?s.d!==c.direction:!1,d=s.g+c.length+(h?Math.pow(r,2):0),v=i.indexOf(a)<0;if(v||d<a.g){let u=Je(a.point,t.point,c.direction,e);a.g=d,a.h=At(a.point,t.point)+u*Math.pow(r,2),a.f=a.g+a.h,a.d=c.direction,a.parent=s,v&&i.push(a)}}}return null}function Pe(o,t){let e=o.reduce((i,n)=>({x:Math.min(i.x,n.x),y:Math.min(i.y,n.y),x2:Math.max(i.x2,n.x2),y2:Math.max(i.y2,n.y2)}),{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return st.fromDiagonal(e.x,e.y,e.x2,e.y2).createPadded(t)}function Re(o,t,e){let i=t.filter(w=>w!==o.from.rectangle&&w!==o.to.rectangle),n=[o.from.rectangle,o.to.rectangle],r=Pe(n,e.enclosurePadding);if(e.avoidOtherShapes){let w=!1;for(let X of i)r.intersects(X)&&(n.push(X),w=!0);w&&(r=Pe(n,e.enclosurePadding))}let s=Xe(n,o),{points:a,connectionStart:c,connectionEnd:h}=Ge(s,n,o,r),d=Ze(a),v=d.get(c),u=d.get(h),x=null;return v&&u&&(x=Qe(v,u,o.to.direction)),{graph:d,pathPointer:x}}var P=class extends f{constructor(){super(...arguments);this._enclosurePadding=50;this._startOffset=50;this._endOffset=50;this._rectangles=[];this._activeRectangle=null;this._drawGraph=!1;this._avoidCollisions=!1;this._from="W";this._to="E";this._resizeCanvas=()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}}render(){return p`
    <canvas
      @mousedown="${this._handleMouseDown}"
      @mouseup="${this._handleMouseUp}"
      @mousemove="${this._handleMouseMove}"></canvas>
    <div id="overlay" class="vert" @change="${this._onSettingsChange}">
      <div>
        <label>Connection</label>
        <div class="horiz center" style="gap: 10px;">
          <nv-select id="connectionFrom" value="W" label="From">
            <option value="E">Left</option>
            <option value="W">Right</option>
            <option value="N">Bottom</option>
            <option value="S">Top</option>
          </nv-select>
          <span>⇒</span>
          <nv-select id="connectionTo" value="E" label="To">
            <option value="E">Left</option>
            <option value="W">Right</option>
            <option value="N">Bottom</option>
            <option value="S">Top</option>
          </nv-select>
        </div>
      </div>
      <div>
        <nv-checkbox id="chkShowGraph" label="Draw Graph"></nv-checkbox>
      </div>
      <div>
        <nv-checkbox id="chkAvoid" label="Avoid shape collisions"></nv-checkbox>
      </div>
      <div style="margin-top: 8px;">
        <label>Graph Padding: <span>${this._enclosurePadding}</span></label>
        <div>
          <nv-slider id="paddingSlider" min="0" max="100" step="1" value="50" @input="${this._onSettingsChange}"></nv-slider>
        </div>
      </div>
      <div style="margin-top: 8px;">
        <label>Path Start Edge Offset: <span>${Math.round(this._startOffset)}%</span></label>
        <div>
          <nv-slider id="startOffsetSlider" min="0" max="100" step="1" value="50" @input="${this._onSettingsChange}"></nv-slider>
        </div>
      </div>
      <div style="margin-top: 8px;">
        <label>Path End Edge Offset: <span>${Math.round(this._endOffset)}%</span></label>
        <div>
          <nv-slider id="endOffsetSlider" min="0" max="100" step="1" value="50" @input="${this._onSettingsChange}"></nv-slider>
        </div>
      </div>
      <div>
        <nv-button rounded @click="${this._addRandomShape}">Add random shape</nv-button>
      </div>
      <div>
        <nv-button rounded @click="${this._resetShapes}">Reset shapes</nv-button>
      </div>
    </div>
    `}firstUpdated(){window.addEventListener("resize",this._resizeCanvas),window.addEventListener("mouseup",e=>this._handleMouseUp(e)),this._resizeCanvas(),this._resetShapes()}_resetShapes(){this._rectangles=[],this._addRectangle(150,150,100,100,"blue"),this._addRectangle(700,400,100,200,"blue"),this._draw()}_addRandomShape(){let e=Math.floor(Math.random()*(this.canvas.width-100)),i=Math.floor(Math.random()*(this.canvas.height-100)),n=Math.floor(Math.random()*100)+50,r=Math.floor(Math.random()*100)+50;this._addRectangle(e,i,n,r,"orange"),this._draw()}_addRectangle(e,i,n,r,s){this._rectangles.push(new st(e,i,n,r,s))}_getRectangleAtPosition(e,i){for(let n=this._rectangles.length-1;n>=0;n--){let r=this._rectangles[n];if(e>=r.x&&e<=r.x+r.width&&i>=r.y&&i<=r.y+r.height)return r}return null}_handleMouseDown(e){let i=e.clientX,n=e.clientY;this._activeRectangle=this._getRectangleAtPosition(i,n),this._activeRectangle?this._dragContext={x:i-this._activeRectangle.x,y:n-this._activeRectangle.y}:this._dragContext=void 0}_handleMouseUp(e){e.stopPropagation(),this._activeRectangle=null,this._dragContext=void 0}_handleMouseMove(e){if(this._dragContext&&this._activeRectangle){let i=e.clientX,n=e.clientY;this._activeRectangle.x=i-this._dragContext.x,this._activeRectangle.y=n-this._dragContext.y,this._draw()}}_draw(){let e=this.canvas.getContext("2d");e.clearRect(0,0,this.canvas.width,this.canvas.height);let i={from:{rectangle:this._rectangles[0],position:Math.max(1,Math.min(99,this._startOffset))/100,direction:this._from},to:{rectangle:this._rectangles[1],position:Math.max(1,Math.min(99,this._endOffset))/100,direction:this._to}},{graph:n,pathPointer:r}=Re(i,this._rectangles,{avoidOtherShapes:this._avoidCollisions,enclosurePadding:this._enclosurePadding});if(this._drawGraph){e.save(),e.strokeStyle="rgba(200, 200, 200, 1)",e.lineWidth=1;for(let a of n.edges)e.beginPath(),e.moveTo(a.from.x,a.from.y),e.lineTo(a.to.x,a.to.y),e.stroke()}e.save();for(let a=this._rectangles.length-1;a>=0;a--){let c=this._rectangles[a];e.fillStyle=c.color||"#000",e.fillRect(c.x,c.y,c.width,c.height)}e.restore();let s=r;if(s){for(e.save(),e.strokeStyle="red",e.lineWidth=5,e.beginPath(),e.moveTo(s.point.x,s.point.y);s.parent;)s=s.parent,e.lineTo(s.point.x,s.point.y);e.stroke()}}_onSettingsChange(){this._avoidCollisions=this.chkAvoid.checked,this._drawGraph=this.chkShowGraph.checked,this._from=this.connectionFrom.value,this._to=this.connectionTo.value,this._enclosurePadding=this.paddingSlider._currentValue,this._startOffset=this.startOffsetSlider._currentValue,this._endOffset=this.endOffsetSlider._currentValue,this._draw()}};P.styles=[f.styles,m`
    :host {
      display: block;
      position: relative;
    }
    canvas {
      display: block;
    }
    #overlay {
      position: absolute;
      gap: 12px;
      top: 0;
      right: 0;
      padding: 16px 24px;
      box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
      background: #fafafa;
      border-radius: 4px;
    }
    nv-select {
      width: 115px;
    }
    label {
      color: #666;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      display: block;
    }
    nv-checkbox {
      letter-spacing: 0.5px;
    }
    nv-slider {
      width: 100%;
      min-width: 10px;
      margin-top: -12px;
    }
    `],T([b("canvas")],P.prototype,"canvas",2),T([b("#connectionFrom")],P.prototype,"connectionFrom",2),T([b("#connectionTo")],P.prototype,"connectionTo",2),T([b("#chkShowGraph")],P.prototype,"chkShowGraph",2),T([b("#chkAvoid")],P.prototype,"chkAvoid",2),T([b("#paddingSlider")],P.prototype,"paddingSlider",2),T([b("#startOffsetSlider")],P.prototype,"startOffsetSlider",2),T([b("#endOffsetSlider")],P.prototype,"endOffsetSlider",2),T([g()],P.prototype,"_enclosurePadding",2),T([g()],P.prototype,"_startOffset",2),T([g()],P.prototype,"_endOffset",2),P=T([y("canvas-app")],P);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
