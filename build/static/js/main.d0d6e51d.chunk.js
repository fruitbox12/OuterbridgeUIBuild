(this["webpackJsonpouterbridge-ui"]=this["webpackJsonpouterbridge-ui"]||[]).push([[4],{103:function(e,t,i){e.exports={paper:"#fff",primaryLight:"#e3fde7",primary200:"#90caf9",primaryMain:"#21f3a8",primaryDark:"#1e88e5",primary800:"#14ca89",secondaryLight:"#e9f6e7",secondary200:"#b39ddb",secondaryMain:"#00c219",secondaryDark:"#35b14b",secondary800:"#4527a0",successLight:"#cdf5d8",success200:"#69f0ae",successMain:"#00e676",successDark:"#00c853",errorLight:"#f3d2d2",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#59d815",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#fafafa",grey100:"#f5f5f5",grey200:"#eee",grey300:"#e0e0e0",grey500:"#9e9e9e",grey600:"#757575",grey700:"#616161",grey900:"#212121",darkPaper:"#111936",darkBackground:"#1a223f",darkLevel1:"#29314f",darkLevel2:"#212946",darkTextTitle:"#d7dcec",darkTextPrimary:"#bdc8f0",darkTextSecondary:"#8492c4",darkPrimaryLight:"#e3fde7",darkPrimaryMain:"#21f3a8",darkPrimaryDark:"#1e88e5",darkPrimary200:"#90caf9",darkPrimary800:"#14ca89",darkSecondaryLight:"#d1c4e9",darkSecondaryMain:"#7c4dff",darkSecondaryDark:"#651fff",darkSecondary200:"#b39ddb",darkSecondary800:"#6200ea"}},135:function(e,t,i){},136:function(e,t,i){"use strict";i.r(t);var r=i(24),n=i.n(r),o=i(31),a=i(26),c=i(91),d=i(12),l=i(0),s=i(16),u={show:!1,title:"",description:"",confirmButtonName:"OK",cancelButtonName:"Cancel"},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.m:return{show:!0,title:t.payload.title,description:t.payload.description,confirmButtonName:t.payload.confirmButtonName,cancelButtonName:t.payload.cancelButtonName};case s.c:return u;default:return e}},b=i(98),m=i(1),h=function(e){var t=e.children,i=Object(l.useReducer)(p,u),r=Object(d.a)(i,2),n=r[0],o=r[1];return Object(m.jsx)(b.a.Provider,{value:[n,o],children:t})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=i(190),j=i(187),g=i(186),v=i(14),y=i(4),x=i(7),O=i(9),k=i(27),w=i(146),S=i(191),M=i(197),I=i(198),R=i(152),z=i(154),T=i(37),A=i.p+"static/media/outerbridge_brand.4281cfcf.png",C=function(){return Object(m.jsx)("div",{style:{alignItems:"center",display:"flex",flexDirection:"row"},children:Object(m.jsx)("img",{style:{objectFit:"fill",height:"auto",width:"auto"},src:A,alt:"Simplifi"})})},P=function(){return Object(m.jsx)(R.a,{disableRipple:!0,component:o.b,to:T.a.defaultPath,children:Object(m.jsx)(C,{})})},E=i(33),L=function(e){var t=e.handleLeftDrawerToggle,i=Object(k.a)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{sx:Object(y.a)({width:228,display:"flex"},i.breakpoints.down("md"),{width:"auto"}),children:[Object(m.jsx)(S.a,{component:"span",sx:{display:{xs:"none",md:"block"},flexGrow:1},children:Object(m.jsx)(P,{})}),Object(m.jsx)(R.a,{sx:{borderRadius:"12px",overflow:"hidden"},children:Object(m.jsx)(z.a,{variant:"rounded",sx:Object(x.a)(Object(x.a)(Object(x.a)({},i.typography.commonAvatar),i.typography.mediumAvatar),{},{transition:"all .2s ease-in-out",background:i.palette.secondary.light,color:i.palette.secondary.dark,"&:hover":{background:i.palette.secondary.dark,color:i.palette.secondary.light}}),onClick:t,color:"inherit",children:Object(m.jsx)(E.q,{stroke:1.5,size:"1.3rem"})})})]})})},B=i(194),D=i(85),W=i.n(D),F=i(79),N=i(109),_=i(192),K=i(193),H=i(62),U=i(149),G=i(157),V=i(158),Y=i(156),J=i(66),$=i.n(J),q=function e(t){var i,r=t.menu,n=t.level,o=Object(k.a)(),c=Object(a.c)((function(e){return e.customization})),s=Object(l.useState)(!1),u=Object(d.a)(s,2),p=u[0],b=u[1],h=Object(l.useState)(null),f=Object(d.a)(h,2),j=f[0],g=f[1],v=null===(i=r.children)||void 0===i?void 0:i.map((function(t){switch(t.type){case"collapse":return Object(m.jsx)(e,{menu:t,level:n+1},t.id);case"item":return Object(m.jsx)(H.a,{item:t,level:n+1},t.id);default:return Object(m.jsx)(N.a,{variant:"h6",color:"error",align:"center",children:"Menu Items Error"},t.id)}})),y=r.icon,O=r.icon?Object(m.jsx)(y,{strokeWidth:1.5,size:"1.3rem",style:{marginTop:"auto",marginBottom:"auto"}}):Object(m.jsx)($.a,{sx:{width:j===r.id?8:6,height:j===r.id?8:6},fontSize:n>0?"inherit":"medium"});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(U.a,{sx:{borderRadius:"".concat(c.borderRadius,"px"),mb:.5,alignItems:"flex-start",backgroundColor:n>1?"transparent !important":"inherit",py:n>1?1:1.25,pl:"".concat(24*n,"px")},selected:j===r.id,onClick:function(){b(!p),g(j?null:r.id)},children:[Object(m.jsx)(G.a,{sx:{my:"auto",minWidth:r.icon?36:18},children:O}),Object(m.jsx)(V.a,{primary:Object(m.jsx)(N.a,{variant:j===r.id?"h5":"body1",color:"inherit",sx:{my:"auto"},children:r.title}),secondary:r.caption&&Object(m.jsx)(N.a,{variant:"caption",sx:Object(x.a)({},o.typography.subMenuCaption),display:"block",gutterBottom:!0,children:r.caption})}),p?Object(m.jsx)(E.g,{stroke:1.5,size:"1rem",style:{marginTop:"auto",marginBottom:"auto"}}):Object(m.jsx)(E.e,{stroke:1.5,size:"1rem",style:{marginTop:"auto",marginBottom:"auto"}})]}),Object(m.jsx)(Y.a,{in:p,timeout:"auto",unmountOnExit:!0,children:Object(m.jsx)(_.a,{component:"div",disablePadding:!0,sx:{position:"relative","&:after":{content:"''",position:"absolute",left:"32px",top:0,height:"100%",width:"1px",opacity:1,background:o.palette.primary.light}},children:v})})]})},Q=function(e){var t,i=e.item,r=Object(k.a)(),n=null===(t=i.children)||void 0===t?void 0:t.map((function(e){switch(e.type){case"collapse":return Object(m.jsx)(q,{menu:e,level:1},e.id);case"item":return Object(m.jsx)(H.a,{item:e,level:1,navType:"MENU"},e.id);default:return Object(m.jsx)(N.a,{variant:"h6",color:"error",align:"center",children:"Menu Items Error"},e.id)}}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_.a,{subheader:i.title&&Object(m.jsxs)(N.a,{variant:"caption",sx:Object(x.a)({},r.typography.menuCaption),display:"block",gutterBottom:!0,children:[i.title,i.caption&&Object(m.jsx)(N.a,{variant:"caption",sx:Object(x.a)({},r.typography.subMenuCaption),display:"block",gutterBottom:!0,children:i.caption})]}),children:n}),Object(m.jsx)(K.a,{sx:{mt:.25,mb:1.25}})]})},X={IconHierarchy:E.n,IconEditCircle:E.j,IconWallet:E.A},Z={items:[{id:"dashboard",title:"",type:"group",children:[{id:"workflows",title:"Workflows",type:"item",url:"/workflows",icon:X.IconHierarchy,breadcrumbs:!0},{id:"contracts",title:"Contracts",type:"item",url:"/contracts",icon:X.IconEditCircle,breadcrumbs:!0},{id:"wallets",title:"Wallets",type:"item",url:"/wallets",icon:X.IconWallet,breadcrumbs:!0}]}]},ee=function(){var e=Z.items.map((function(e){return"group"===e.type?Object(m.jsx)(Q,{item:e},e.id):Object(m.jsx)(N.a,{variant:"h6",color:"error",align:"center",children:"Menu Items Error"},e.id)}));return Object(m.jsx)(m.Fragment,{children:e})},te=i(34),ie=function(e){var t=e.drawerOpen,i=e.drawerToggle,r=e.window,n=Object(k.a)(),o=Object(w.a)(n.breakpoints.up("md")),a=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S.a,{sx:{display:{xs:"block",md:"none"}},children:Object(m.jsx)(S.a,{sx:{display:"flex",p:2,mx:"auto"},children:Object(m.jsx)(P,{})})}),Object(m.jsx)(F.BrowserView,{children:Object(m.jsx)(W.a,{component:"div",style:{height:o?"calc(100vh - 88px)":"calc(100vh - 56px)",paddingLeft:"16px",paddingRight:"16px"},children:Object(m.jsx)(ee,{})})}),Object(m.jsx)(F.MobileView,{children:Object(m.jsx)(S.a,{sx:{px:2},children:Object(m.jsx)(ee,{})})})]}),c=void 0!==r?function(){return r.document.body}:void 0;return Object(m.jsx)(S.a,{component:"nav",sx:{flexShrink:{md:0},width:o?te.c:"auto"},"aria-label":"mailbox folders",children:Object(m.jsx)(B.a,{container:c,variant:o?"persistent":"temporary",anchor:"left",open:t,onClose:i,sx:{"& .MuiDrawer-paper":Object(y.a)({width:te.c,background:n.palette.background.default,color:n.palette.text.primary,borderRight:"none"},n.breakpoints.up("md"),{top:"66px"})},ModalProps:{keepMounted:!0},color:"inherit",children:a})})},re=Object(O.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t,i,r=e.theme,n=e.open;return Object(x.a)(Object(x.a)(Object(x.a)({},r.typography.mainContent),!n&&(t={borderBottomLeftRadius:0,borderBottomRightRadius:0,transition:r.transitions.create("margin",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen})},Object(y.a)(t,r.breakpoints.up("md"),{marginLeft:-(te.c-20),width:"calc(100% - ".concat(te.c,"px)")}),Object(y.a)(t,r.breakpoints.down("md"),{marginLeft:"20px",width:"calc(100% - ".concat(te.c,"px)"),padding:"16px"}),Object(y.a)(t,r.breakpoints.down("sm"),{marginLeft:"10px",width:"calc(100% - ".concat(te.c,"px)"),padding:"16px",marginRight:"10px"}),t)),n&&(i={transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginLeft:0,borderBottomLeftRadius:0,borderBottomRightRadius:0,width:"calc(100% - ".concat(te.c,"px)")},Object(y.a)(i,r.breakpoints.down("md"),{marginLeft:"20px"}),Object(y.a)(i,r.breakpoints.down("sm"),{marginLeft:"10px"}),i))})),ne=function(){var e=Object(k.a)(),t=Object(w.a)(e.breakpoints.down("lg")),i=Object(a.c)((function(e){return e.customization.opened})),r=Object(a.b)(),n=function(){r({type:s.k,opened:!i})};return Object(l.useEffect)((function(){r({type:s.k,opened:!t})}),[t]),Object(m.jsxs)(S.a,{sx:{display:"flex"},children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(M.a,{enableColorOnDark:!0,position:"fixed",color:"inherit",elevation:0,sx:{bgcolor:e.palette.background.default,transition:i?e.transitions.create("width"):"none"},children:Object(m.jsx)(I.a,{children:Object(m.jsx)(L,{handleLeftDrawerToggle:n})})}),!1,Object(m.jsx)(ie,{drawerOpen:i,drawerToggle:n}),Object(m.jsx)(re,{theme:e,open:i,children:Object(m.jsx)(v.a,{})})]})},oe=i(199),ae=Object(O.a)("div")({position:"fixed",top:0,left:0,zIndex:1301,width:"100%"}),ce=function(){return Object(m.jsx)(ae,{children:Object(m.jsx)(oe.a,{color:"primary"})})},de=function(e){return function(t){return Object(m.jsx)(l.Suspense,{fallback:Object(m.jsx)(ce,{}),children:Object(m.jsx)(e,Object(x.a)({},t))})}},le=de(Object(l.lazy)((function(){return Promise.all([i.e(0),i.e(2),i.e(10)]).then(i.bind(null,709))}))),se=de(Object(l.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(2),i.e(8),i.e(9)]).then(i.bind(null,700))}))),ue=de(Object(l.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(2),i.e(3),i.e(12)]).then(i.bind(null,702))}))),pe={path:"/",element:Object(m.jsx)(ne,{}),children:[{path:"/",element:Object(m.jsx)(le,{})},{path:"/workflows",element:Object(m.jsx)(le,{})},{path:"/contracts",element:Object(m.jsx)(se,{})},{path:"/wallets",element:Object(m.jsx)(ue,{})}]},be=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v.a,{})})},me=de(Object(l.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(7),i.e(3),i.e(11)]).then(i.bind(null,696))}))),he={path:"/",element:Object(m.jsx)(be,{}),children:[{path:"/canvas",element:Object(m.jsx)(me,{})},{path:"/canvas/:id",element:Object(m.jsx)(me,{})}]};function fe(){return Object(v.h)([pe,he],T.a.basename)}var je=i(104),ge=i(103),ve=i.n(ge);function ye(e){var t,i,r,n,o,a,c,d,l,s,u,p,b,m,h,f,j,g,v,y,x,O,k,w,S,M,I,R,z,T,A,C,P,E,L;return{mode:null===e||void 0===e||null===(t=e.customization)||void 0===t?void 0:t.navType,common:{black:null===(i=e.colors)||void 0===i?void 0:i.darkPaper},primary:{light:null===(r=e.colors)||void 0===r?void 0:r.primaryLight,main:null===(n=e.colors)||void 0===n?void 0:n.primaryMain,dark:null===(o=e.colors)||void 0===o?void 0:o.primaryDark,200:null===(a=e.colors)||void 0===a?void 0:a.primary200,800:null===(c=e.colors)||void 0===c?void 0:c.primary800},secondary:{light:null===(d=e.colors)||void 0===d?void 0:d.secondaryLight,main:null===(l=e.colors)||void 0===l?void 0:l.secondaryMain,dark:null===(s=e.colors)||void 0===s?void 0:s.secondaryDark,200:null===(u=e.colors)||void 0===u?void 0:u.secondary200,800:null===(p=e.colors)||void 0===p?void 0:p.secondary800},error:{light:null===(b=e.colors)||void 0===b?void 0:b.errorLight,main:null===(m=e.colors)||void 0===m?void 0:m.errorMain,dark:null===(h=e.colors)||void 0===h?void 0:h.errorDark},orange:{light:null===(f=e.colors)||void 0===f?void 0:f.orangeLight,main:null===(j=e.colors)||void 0===j?void 0:j.orangeMain,dark:null===(g=e.colors)||void 0===g?void 0:g.orangeDark},warning:{light:null===(v=e.colors)||void 0===v?void 0:v.warningLight,main:null===(y=e.colors)||void 0===y?void 0:y.warningMain,dark:null===(x=e.colors)||void 0===x?void 0:x.warningDark},success:{light:null===(O=e.colors)||void 0===O?void 0:O.successLight,200:null===(k=e.colors)||void 0===k?void 0:k.success200,main:null===(w=e.colors)||void 0===w?void 0:w.successMain,dark:null===(S=e.colors)||void 0===S?void 0:S.successDark},grey:{50:null===(M=e.colors)||void 0===M?void 0:M.grey50,100:null===(I=e.colors)||void 0===I?void 0:I.grey100,200:null===(R=e.colors)||void 0===R?void 0:R.grey200,300:null===(z=e.colors)||void 0===z?void 0:z.grey300,500:e.darkTextSecondary,600:e.heading,700:e.darkTextPrimary,900:e.textDark},dark:{light:null===(T=e.colors)||void 0===T?void 0:T.darkTextPrimary,main:null===(A=e.colors)||void 0===A?void 0:A.darkLevel1,dark:null===(C=e.colors)||void 0===C?void 0:C.darkLevel2,800:null===(P=e.colors)||void 0===P?void 0:P.darkBackground,900:null===(E=e.colors)||void 0===E?void 0:E.darkPaper},text:{primary:e.darkTextPrimary,secondary:e.darkTextSecondary,dark:e.textDark,hint:null===(L=e.colors)||void 0===L?void 0:L.grey100},background:{paper:e.paper,default:e.backgroundDefault}}}function xe(e){var t,i;return{fontFamily:null===e||void 0===e||null===(t=e.customization)||void 0===t?void 0:t.fontFamily,h6:{fontWeight:500,color:e.heading,fontSize:"0.75rem"},h5:{fontSize:"0.875rem",color:e.heading,fontWeight:500},h4:{fontSize:"1rem",color:e.heading,fontWeight:600},h3:{fontSize:"1.25rem",color:e.heading,fontWeight:600},h2:{fontSize:"1.5rem",color:e.heading,fontWeight:700},h1:{fontSize:"2.125rem",color:e.heading,fontWeight:700},subtitle1:{fontSize:"0.875rem",fontWeight:500,color:e.textDark},subtitle2:{fontSize:"0.75rem",fontWeight:400,color:e.darkTextSecondary},caption:{fontSize:"0.75rem",color:e.darkTextSecondary,fontWeight:400},body1:{fontSize:"0.875rem",fontWeight:400,lineHeight:"1.334em"},body2:{letterSpacing:"0em",fontWeight:400,lineHeight:"1.5em",color:e.darkTextPrimary},button:{textTransform:"capitalize"},customInput:{marginTop:1,marginBottom:1,"& > label":{top:23,left:0,color:e.grey500,'&[data-shrink="false"]':{top:5}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},mainContent:{backgroundColor:e.background,width:"100%",minHeight:"calc(100vh - 75px)",flexGrow:1,padding:"20px",marginTop:"75px",marginRight:"20px",borderRadius:"".concat(null===e||void 0===e||null===(i=e.customization)||void 0===i?void 0:i.borderRadius,"px")},menuCaption:{fontSize:"0.875rem",fontWeight:500,color:e.heading,padding:"6px",textTransform:"capitalize",marginTop:"10px"},subMenuCaption:{fontSize:"0.6875rem",fontWeight:500,color:e.darkTextSecondary,textTransform:"capitalize"},commonAvatar:{cursor:"pointer",borderRadius:"8px"},smallAvatar:{width:"22px",height:"22px",fontSize:"1rem"},mediumAvatar:{width:"34px",height:"34px",fontSize:"1.2rem"},largeAvatar:{width:"44px",height:"44px",fontSize:"1.5rem"}}}var Oe=function(e){var t=ve.a,i={colors:t,heading:t.grey900,paper:t.paper,backgroundDefault:t.paper,background:t.primaryLight,darkTextPrimary:t.grey700,darkTextSecondary:t.grey500,textDark:t.grey900,menuSelected:t.secondaryDark,menuSelectedBack:t.secondaryLight,divider:t.grey200,customization:e},r={direction:"ltr",palette:ye(i),mixins:{toolbar:{minHeight:"48px",padding:"16px","@media (min-width: 600px)":{minHeight:"48px"}}},typography:xe(i)},n=Object(je.a)(r);return n.components=function(e){var t,i,r,n,o,a,c,d,l,s,u,p,b,m=null===(t=e.colors)||void 0===t?void 0:t.grey50;return{MuiButton:{styleOverrides:{root:{fontWeight:500,borderRadius:"4px"}}},MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"},rounded:{borderRadius:"".concat(null===e||void 0===e||null===(i=e.customization)||void 0===i?void 0:i.borderRadius,"px")}}},MuiCardHeader:{styleOverrides:{root:{color:null===(r=e.colors)||void 0===r?void 0:r.textDark,padding:"24px"},title:{fontSize:"1.125rem"}}},MuiCardContent:{styleOverrides:{root:{padding:"24px"}}},MuiCardActions:{styleOverrides:{root:{padding:"24px"}}},MuiListItemButton:{styleOverrides:{root:{color:e.darkTextPrimary,paddingTop:"10px",paddingBottom:"10px","&.Mui-selected":{color:e.menuSelected,backgroundColor:e.menuSelectedBack,"&:hover":{backgroundColor:e.menuSelectedBack},"& .MuiListItemIcon-root":{color:e.menuSelected}},"&:hover":{backgroundColor:e.menuSelectedBack,color:e.menuSelected,"& .MuiListItemIcon-root":{color:e.menuSelected}}}}},MuiListItemIcon:{styleOverrides:{root:{color:e.darkTextPrimary,minWidth:"36px"}}},MuiListItemText:{styleOverrides:{primary:{color:e.textDark}}},MuiInputBase:{styleOverrides:{input:{color:e.textDark,"&::placeholder":{color:e.darkTextSecondary,fontSize:"0.875rem"}}}},MuiOutlinedInput:{styleOverrides:{root:{background:m,borderRadius:"".concat(null===e||void 0===e||null===(n=e.customization)||void 0===n?void 0:n.borderRadius,"px"),"& .MuiOutlinedInput-notchedOutline":{borderColor:null===(o=e.colors)||void 0===o?void 0:o.grey400},"&:hover $notchedOutline":{borderColor:null===(a=e.colors)||void 0===a?void 0:a.primaryLight},"&.MuiInputBase-multiline":{padding:1}},input:{fontWeight:500,background:m,padding:"15.5px 14px",borderRadius:"".concat(null===e||void 0===e||null===(c=e.customization)||void 0===c?void 0:c.borderRadius,"px"),"&.MuiInputBase-inputSizeSmall":{padding:"10px 14px","&.MuiInputBase-inputAdornedStart":{paddingLeft:0}}},inputAdornedStart:{paddingLeft:4},notchedOutline:{borderRadius:"".concat(null===e||void 0===e||null===(d=e.customization)||void 0===d?void 0:d.borderRadius,"px")}}},MuiSlider:{styleOverrides:{root:{"&.Mui-disabled":{color:null===(l=e.colors)||void 0===l?void 0:l.grey300}},mark:{backgroundColor:e.paper,width:"4px"},valueLabel:{color:null===e||void 0===e||null===(s=e.colors)||void 0===s?void 0:s.primaryLight}}},MuiDivider:{styleOverrides:{root:{borderColor:e.divider,opacity:1}}},MuiAvatar:{styleOverrides:{root:{color:null===(u=e.colors)||void 0===u?void 0:u.primaryDark,background:null===(p=e.colors)||void 0===p?void 0:p.primary200}}},MuiChip:{styleOverrides:{root:{"&.MuiChip-deletable .MuiChip-deleteIcon":{color:"inherit"}}}},MuiTooltip:{styleOverrides:{tooltip:{color:e.paper,background:null===(b=e.colors)||void 0===b?void 0:b.grey700}}}}}(i),n},ke=i(11),we=function(e){var t=e.children,i=Object(v.e)().pathname;return Object(l.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[i]),t||null};we.propTypes={children:i.n(ke).a.node};var Se=we,Me=function(){var e=Object(a.c)((function(e){return e.customization}));return Object(m.jsx)(j.a,{injectFirst:!0,children:Object(m.jsxs)(f.a,{theme:Oe(e),children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(Se,{children:Object(m.jsx)(fe,{})})]})})},Ie=i(67),Re={isOpen:[],fontFamily:T.a.fontFamily,borderRadius:T.a.borderRadius,opened:!0},ze=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case s.d:return e=i.id,Object(x.a)(Object(x.a)({},t),{},{isOpen:[e]});case s.k:return Object(x.a)(Object(x.a)({},t),{},{opened:i.opened});case s.j:return Object(x.a)(Object(x.a)({},t),{},{fontFamily:i.fontFamily});case s.h:return Object(x.a)(Object(x.a)({},t),{},{borderRadius:i.borderRadius});default:return t}},Te={removeEdgeId:"",isDirty:!1,workflow:null},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.f:return Object(x.a)(Object(x.a)({},e),{},{removeEdgeId:t.edgeId});case s.i:return Object(x.a)(Object(x.a)({},e),{},{isDirty:!0});case s.e:return Object(x.a)(Object(x.a)({},e),{},{isDirty:!1});case s.l:return Object(x.a)(Object(x.a)({},e),{},{workflow:t.workflow});default:return e}},Ce=i(20),Pe={notifications:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.b:return Object(x.a)(Object(x.a)({},e),{},{notifications:[].concat(Object(Ce.a)(e.notifications),[Object(x.a)({key:t.key},t.notification)])});case s.a:return Object(x.a)(Object(x.a)({},e),{},{notifications:e.notifications.map((function(e){return t.dismissAll||e.key===t.key?Object(x.a)(Object(x.a)({},e),{},{dismissed:!0}):Object(x.a)({},e)}))});case s.g:return Object(x.a)(Object(x.a)({},e),{},{notifications:e.notifications.filter((function(e){return e.key!==t.key}))});default:return e}},Le=Object(Ie.a)({customization:ze,canvas:Ae,notifier:Ee,dialog:p}),Be=Object(Ie.b)(Le);i(135);n.a.render(Object(m.jsx)(a.a,{store:Be,children:Object(m.jsx)(o.a,{children:Object(m.jsx)(c.a,{children:Object(m.jsx)(h,{children:Object(m.jsx)(Me,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,i){"use strict";i.d(t,"k",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"j",(function(){return a})),i.d(t,"h",(function(){return c})),i.d(t,"f",(function(){return d})),i.d(t,"i",(function(){return l})),i.d(t,"e",(function(){return s})),i.d(t,"l",(function(){return u})),i.d(t,"b",(function(){return p})),i.d(t,"a",(function(){return b})),i.d(t,"g",(function(){return m})),i.d(t,"m",(function(){return h})),i.d(t,"c",(function(){return f})),i.d(t,"o",(function(){return j})),i.d(t,"n",(function(){return g})),i.d(t,"p",(function(){return v}));var r=i(7),n="@customization/SET_MENU",o="@customization/MENU_OPEN",a="@customization/SET_FONT_FAMILY",c="@customization/SET_BORDER_RADIUS",d="@canvas/REMOVE_EDGE",l="@canvas/SET_DIRTY",s="@canvas/REMOVE_DIRTY",u="@canvas/SET_WORKFLOW",p="ENQUEUE_SNACKBAR",b="CLOSE_SNACKBAR",m="REMOVE_SNACKBAR",h="SHOW_CONFIRM",f="HIDE_CONFIRM",j=function(e){var t=e.options&&e.options.key;return{type:p,notification:Object(r.a)(Object(r.a)({},e),{},{key:t||(new Date).getTime()+Math.random()})}},g=function(e){return{type:b,dismissAll:!e,key:e}},v=function(e){return{type:m,key:e}}},34:function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return d})),i.d(t,"b",(function(){return s})),i.d(t,"h",(function(){return u})),i.d(t,"g",(function(){return p}));var r=i(7),n=3,o=260,a=window.location.origin,c={homestead:"https://etherscan.io",rinkeby:"https://rinkeby.etherscan.io",ropsten:"https://ropsten.etherscan.io",kovan:"https://kovan.etherscan.io",goerli:"https://goerli.etherscan.io",matic:"https://polygonscan.com",maticmum:"https://mumbai.polygonscan.com",optimism:"https://optimistic.etherscan.io","optimism-kovan":"https://kovan-optimistic.etherscan.io",arbitrum:"https://arbiscan.io","arbitrum-rinkeby":"https://rinkeby-explorer.arbitrum.io",bsc:"https://bscscan.com","bsc-testnet":"https://testnet.bscscan.com",localhost:""},d=[{label:"Ethereum Mainnet",name:"homestead",uri:"https://api.etherscan.io/api",color:"#3c3c3d"},{label:"Ethereum Rinkeby",name:"rinkeby",uri:"https://api-rinkeby.etherscan.io/api",color:"#ffbe0b"},{label:"Ethereum Kovan",name:"kovan",uri:"https://api-kovan.etherscan.io/api",color:"#8338ec"},{label:"Ethereum Ropsten",name:"ropsten",uri:"https://api-kovan.etherscan.io/api",color:"#ff006e"},{label:"Ethereum Goerli",name:"goerli",uri:"https://api-goerli.etherscan.io/api",color:"#3a86ff"},{label:"Polygon Mainnet",name:"matic",uri:"https://api.polygonscan.com/api",color:"#8247e5"},{label:"Polygon Mumbai",name:"maticmum",uri:"https://api-testnet.polygonscan.com/api",color:"#8247e5"},{label:"Binance Smart Chain Mainnet",name:"bsc",uri:"https://api.bscscan.com/api",color:"#ffbe0b"},{label:"Binance Smart Chain Testnet",name:"bsc-testnet",uri:"https://api-testnet.bscscan.com/api",color:"#ffbe0b"},{label:"Optimism Mainnet",name:"optimism",uri:"https://api-optimistic.etherscan.io/api",color:"#ef233c"},{label:"Optimism Kovan",name:"optimism-kovan",uri:"https://api-kovan-optimistic.etherscan.io/api",color:"#ef233c"},{label:"Arbitrum Mainnet",name:"arbitrum",uri:"https://api.arbiscan.io/api",color:"#023e8a"},{label:"Arbitrum Rinkeby",name:"arbitrum-rinkeby",uri:"https://api-testnet.arbiscan.io/api",color:"#023e8a"}],l={networks:[{label:"Select Network",name:"network",type:"options",options:d,default:"homestead"}],credentials:[{label:"API Key (Optional)",name:"credentialMethod",type:"options",description:"Provide an API key to avoid rate limit",options:[{label:"No Auth",name:"noAuth",description:"Use public endpoint without API key",hideRegisteredCredential:!0},{label:"Etherscan API",name:"etherscanApi",show:{"networks.network":["homestead","rinkeby","kovan","ropsten","goerli"]},description:"Register for a Free API Key from: https://etherscan.io/apis"},{label:"Polygonscan API",name:"polygonscanApi",show:{"networks.network":["matic","maticmum"]},description:"Register for a Free API Key from: https://polygonscan.com/apis"},{label:"Bscscan API",name:"bscscanApi",show:{"networks.network":["bsc","bsc-testnet"]},description:"Register for a Free API Key from: https://bscscan.com/apis"},{label:"Optimism Etherscan API",name:"optimisticEtherscanApi",show:{"networks.network":["optimism","optimism-kovan"]},description:"Register for a Free API Key from: https://optimistic.etherscan.io/apis"},{label:"Arbiscan API",name:"arbiscanApi",show:{"networks.network":["arbitrum","arbitrum-rinkeby"]},description:"Register for a Free API Key from: https://arbiscan.io/apis"}],default:"noAuth"}]},s=Object(r.a)(Object(r.a)({},l),{},{contractInfo:[{label:"Contract Name",name:"name",type:"string",description:"Name the contract to make it easier to identify it in Outerbridge",default:""},{label:"Contract Address",name:"address",type:"string",default:""},{label:"ABI",name:"abi",type:"json",default:"",description:"ABI will be fetched automatically if address is valid"}]}),u=Object(r.a)(Object(r.a)({},l),{},{walletInfo:[{label:"Wallet Name",name:"name",type:"string",description:"Name the wallet to make it easier to identify it in Outerbridge",default:""}]}),p=[{label:"Private Key",name:"privateKey",type:"string",description:"Private key of wallet to be imported",default:""}]},37:function(e,t,i){"use strict";t.a={basename:"",defaultPath:"/workflows",fontFamily:"'Roboto', sans-serif",borderRadius:12}},62:function(e,t,i){"use strict";var r=i(7),n=i(0),o=i(31),a=i(26),c=i(27),d=i(146),l=i(149),s=i(157),u=i(158),p=i(109),b=i(155),m=i(154),h=i(16),f=i(37),j=i(66),g=i.n(j),v=i(1);t.a=function(e){var t=e.item,i=e.level,j=e.navType,y=e.onClick,x=e.onUploadFile,O=Object(c.a)(),k=Object(a.b)(),w=Object(a.c)((function(e){return e.customization})),S=Object(d.a)(O.breakpoints.down("lg")),M=t.icon,I=null!==t&&void 0!==t&&t.icon?Object(v.jsx)(M,{stroke:1.5,size:"1.3rem"}):Object(v.jsx)(g.a,{sx:{width:w.isOpen.findIndex((function(e){return e===(null===t||void 0===t?void 0:t.id)}))>-1?8:6,height:w.isOpen.findIndex((function(e){return e===(null===t||void 0===t?void 0:t.id)}))>-1?8:6},fontSize:i>0?"inherit":"medium"}),R="_self";t.target&&(R="_blank");var z={component:Object(n.forwardRef)((function(e,i){return Object(v.jsx)(o.b,Object(r.a)(Object(r.a)({ref:i},e),{},{to:"".concat(f.a.basename).concat(t.url),target:R}))}))};null!==t&&void 0!==t&&t.external&&(z={component:"a",href:t.url,target:R}),"loadWorkflow"===(null===t||void 0===t?void 0:t.id)&&(z.component="label");var T=function(e){"SETTINGS"===j&&"loadWorkflow"!==e?y(e):(k({type:h.d,id:e}),S&&k({type:h.k,opened:!1}))};return Object(n.useEffect)((function(){"MENU"===j&&(document.location.pathname.toString().split("/").findIndex((function(e){return e===t.id}))>-1&&k({type:h.d,id:t.id}),document.location.pathname.toString().split("/")[1]||T("workflows"))}),[j]),Object(v.jsxs)(l.a,Object(r.a)(Object(r.a)({},z),{},{disabled:t.disabled,sx:{borderRadius:"".concat(w.borderRadius,"px"),mb:.5,alignItems:"flex-start",backgroundColor:i>1?"transparent !important":"inherit",py:i>1?1:1.25,pl:"".concat(24*i,"px")},selected:w.isOpen.findIndex((function(e){return e===t.id}))>-1,onClick:function(){return T(t.id)},children:["loadWorkflow"===t.id&&Object(v.jsx)("input",{type:"file",hidden:!0,accept:".json",onChange:function(e){return function(e){if(e.target.files){var t=e.target.files[0],i=new FileReader;i.onload=function(e){var t;if(null!==e&&void 0!==e&&null!==(t=e.target)&&void 0!==t&&t.result){var i=e.target.result;x(i)}},i.readAsText(t)}}(e)}}),Object(v.jsx)(s.a,{sx:{my:"auto",minWidth:null!==t&&void 0!==t&&t.icon?36:18},children:I}),Object(v.jsx)(u.a,{primary:Object(v.jsx)(p.a,{variant:w.isOpen.findIndex((function(e){return e===t.id}))>-1?"h5":"body1",color:"inherit",children:t.title}),secondary:t.caption&&Object(v.jsx)(p.a,{variant:"caption",sx:Object(r.a)({},O.typography.subMenuCaption),display:"block",gutterBottom:!0,children:t.caption})}),t.chip&&Object(v.jsx)(b.a,{color:t.chip.color,variant:t.chip.variant,size:t.chip.size,label:t.chip.label,avatar:t.chip.avatar&&Object(v.jsx)(m.a,{children:t.chip.avatar})})]}))}},98:function(e,t,i){"use strict";var r=i(0),n=i.n(r).a.createContext();t.a=n}},[[136,5,6]]]);
//# sourceMappingURL=main.d0d6e51d.chunk.js.map
