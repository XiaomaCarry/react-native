(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1015:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),d=a,m=l["".concat(c,".").concat(d)]||l[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},423:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(1015)),c={id:"inputaccessoryview",title:"InputAccessoryView"},i={unversionedId:"inputaccessoryview",id:"version-0.61/inputaccessoryview",isDocsHomePage:!1,title:"InputAccessoryView",description:"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.",source:"@site/versioned_docs/version-0.61/inputaccessoryview.md",slug:"/inputaccessoryview",permalink:"/docs/0.61/inputaccessoryview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/inputaccessoryview.md",version:"0.61",lastUpdatedAt:1604577351,sidebar:"version-0.61/components",previous:{title:"ImageBackground",permalink:"/docs/0.61/imagebackground"},next:{title:"KeyboardAvoidingView",permalink:"/docs/0.61/keyboardavoidingview"}},s=[{value:"Props",id:"props",children:[{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>nativeID</code>",id:"nativeid",children:[]},{value:"<code>style</code>",id:"style",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a ",Object(o.b)("inlineCode",{parentName:"p"},"TextInput")," has focus. This component can be used to create custom toolbars."),Object(o.b)("p",null,"To use this component wrap your custom toolbar with the InputAccessoryView component, and set a ",Object(o.b)("inlineCode",{parentName:"p"},"nativeID"),". Then, pass that ",Object(o.b)("inlineCode",{parentName:"p"},"nativeID")," as the ",Object(o.b)("inlineCode",{parentName:"p"},"inputAccessoryViewID")," of whatever ",Object(o.b)("inlineCode",{parentName:"p"},"TextInput")," you desire. A basic example:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"InputAccessoryView","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20TextInput%2C%20InputAccessoryView%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20UselessTextInput%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7Btext%3A%20'Placeholder%20Text'%7D%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20inputAccessoryViewID%20%3D%20%22uniqueID%22%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CScrollView%20keyboardDismissMode%3D%22interactive%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20paddingTop%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20inputAccessoryViewID%3D%7BinputAccessoryViewID%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20this.setState(%7Btext%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.text%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%20%20%3CInputAccessoryView%20nativeID%3D%7BinputAccessoryViewID%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20this.setState(%7Btext%3A%20'Placeholder%20Text'%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Reset%20Text%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputAccessoryView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D","data-snack-dependencies":"","data-snack-platform":"ios","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a ",Object(o.b)("inlineCode",{parentName:"p"},"TextInput")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"InputAccessoryView")," component, and don't set a ",Object(o.b)("inlineCode",{parentName:"p"},"nativeID"),". For an example, look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/InputAccessoryView/InputAccessoryViewExample.js"},"InputAccessoryViewExample.js"),"."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"backgroundcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/0.61/colors"},"color")),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"nativeid"},Object(o.b)("inlineCode",{parentName:"h3"},"nativeID")),Object(o.b)("p",null,"An ID which is used to associate this ",Object(o.b)("inlineCode",{parentName:"p"},"InputAccessoryView")," to specified TextInput(s)."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"style"},Object(o.b)("inlineCode",{parentName:"h3"},"style")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/0.61/view-style-props"},"style")),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("h1",{id:"known-issues"},"Known issues"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/18997"},"react-native#18997"),": Doesn't support multiline ",Object(o.b)("inlineCode",{parentName:"li"},"TextInput"),"s"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/20157"},"react-native#20157"),": Can't use with a bottom tab bar")))}b.isMDXComponent=!0}}]);