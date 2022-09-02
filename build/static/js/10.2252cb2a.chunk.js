(this["webpackJsonpouterbridge-ui"]=this["webpackJsonpouterbridge-ui"]||[]).push([[10],{209:function(e,t,r){"use strict";var c=r(7),a=r(210),n=r(0),o=r(26),i=r(678),s=r(679),d=r(104),l=r(188),j=r(680),b=r(1),h=["border","boxShadow","children","content","contentClass","contentSX","darkTitle","secondary","shadow","sx","title"],u={"& .MuiCardHeader-action":{mr:0}},x=Object(n.forwardRef)((function(e,t){var r=e.border,n=void 0===r||r,x=e.boxShadow,f=e.children,O=e.content,w=void 0===O||O,p=e.contentClass,g=void 0===p?"":p,v=e.contentSX,m=void 0===v?{}:v,k=e.darkTitle,y=e.secondary,S=e.shadow,C=e.sx,W=void 0===C?{}:C,D=e.title,I=Object(a.a)(e,h),E=Object(o.a)();return Object(b.jsxs)(i.a,Object(c.a)(Object(c.a)({ref:t},I),{},{sx:Object(c.a)({border:n?"1px solid":"none",borderColor:E.palette.primary[200]+75,":hover":{boxShadow:x?S||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"}},W),children:[!k&&D&&Object(b.jsx)(s.a,{sx:u,title:D,action:y}),k&&D&&Object(b.jsx)(s.a,{sx:u,title:Object(b.jsx)(d.a,{variant:"h3",children:D}),action:y}),D&&Object(b.jsx)(l.a,{}),w&&Object(b.jsx)(j.a,{sx:m,className:g,children:f}),!w&&f]}))}));t.a=x},214:function(e,t,r){"use strict";var c=r(240),a=r.n(c),n=r(34),o=a.a.create({baseURL:"".concat(n.a,"/api/v1"),headers:{"Content-type":"application/json"}});t.a=o},215:function(e,t,r){"use strict";var c=r(203),a=r(218),n=r(15),o=r(0);t.a=function(e){var t=Object(o.useState)(null),r=Object(n.a)(t,2),i=r[0],s=r[1],d=Object(o.useState)(null),l=Object(n.a)(d,2),j=l[0],b=l[1],h=Object(o.useState)(!1),u=Object(n.a)(h,2),x=u[0],f=u[1],O=function(){var t=Object(a.a)(Object(c.a)().mark((function t(){var r,a=arguments;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,e.apply(void 0,a);case 4:r=t.sent,s(r.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),b(t.t0||"Unexpected Error!");case 11:return t.prev=11,f(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return{data:i,error:j,loading:x,request:O}}},239:function(e,t,r){"use strict";var c=r(214);t.a={getAllWorkflows:function(){return c.a.get("/workflows")},getSpecificWorkflow:function(e){return c.a.get("/workflows/".concat(e))},createNewWorkflow:function(e){return c.a.post("/workflows",e)},updateWorkflow:function(e,t){return c.a.put("/workflows/".concat(e),t)},deployWorkflow:function(e,t){return c.a.post("/workflows/deploy/".concat(e),t||{})},deleteWorkflow:function(e){return c.a.delete("/workflows/".concat(e))},testWorkflow:function(e,t){return c.a.post("/workflows/test/".concat(e),t)}}},251:function(e,t,r){"use strict";var c=r(7),a=r(9),n=r(26),o=r(186),i=r(672),s=r(104),d=r(151),l=r(209),j=r(678),b=r(680),h=r(673),u=r(1),x=function(){return Object(u.jsx)(j.a,{children:Object(u.jsx)(b.a,{children:Object(u.jsxs)(i.a,{container:!0,direction:"column",children:[Object(u.jsx)(i.a,{item:!0,children:Object(u.jsxs)(i.a,{container:!0,justifyContent:"space-between",children:[Object(u.jsx)(i.a,{item:!0,children:Object(u.jsx)(h.a,{variant:"rectangular",width:44,height:44})}),Object(u.jsx)(i.a,{item:!0,children:Object(u.jsx)(h.a,{variant:"rectangular",width:34,height:34})})]})}),Object(u.jsx)(i.a,{item:!0,children:Object(u.jsx)(h.a,{variant:"rectangular",sx:{my:2},height:40})}),Object(u.jsx)(i.a,{item:!0,children:Object(u.jsx)(h.a,{variant:"rectangular",height:30})})]})})})},f=r(34),O=r(282),w=r.n(O),p=Object(a.a)(l.a)((function(e){return{backgroundColor:"#ffffff",color:e.theme.darkTextPrimary,overflow:"hidden",position:"relative",boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)",cursor:"pointer","&:hover":{boxShadow:"0 2px 14px 0 rgb(32 40 45 / 20%)"}}}));t.a=function(e){var t=e.isLoading,r=e.data,a=e.images,l=e.onClick,j=Object(n.a)(),b={height:24,padding:"0 6px"},h=Object(c.a)(Object(c.a)({},b),{},{color:j.palette.success.dark,backgroundColor:j.palette.success.light}),g=function(e){return f.f.find((function(t){return t.name===e}))};return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)(x,{}):Object(u.jsx)(p,{border:!1,content:!1,onClick:l,children:Object(u.jsx)(o.a,{sx:{p:2.25},children:Object(u.jsxs)(i.a,{container:!0,direction:"column",children:[Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[r.address&&Object(u.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",backgroundColor:"white",marginRight:10},children:Object(u.jsx)(w.a,{diameter:40,seed:Object(O.jsNumberForAddress)(r.address)})}),Object(u.jsx)(s.a,{sx:{fontSize:"1.5rem",fontWeight:500},children:r.name})]}),Object(u.jsxs)(i.a,{sx:{mt:1,mb:1},container:!0,direction:"row",children:[Object(u.jsxs)(i.a,{item:!0,sx:{flexGrow:1},children:[r.address&&Object(u.jsx)(s.a,{sx:{fontSize:"1rem",fontWeight:500,color:j.palette.secondary[200],overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:250},children:"".concat(r.address.substring(0,8),"...").concat(r.address.slice(-4))}),r.flowData&&Object(u.jsxs)(s.a,{sx:{fontSize:"1rem",fontWeight:500,color:j.palette.secondary[200]},children:["Total Executions: ",r.executionCount||"0"]})]}),r.deployed&&Object(u.jsx)(i.a,{item:!0,children:Object(u.jsx)(d.a,{label:"Deployed",sx:h})})]}),r.network&&Object(u.jsx)(i.a,{item:!0,children:Object(u.jsx)(d.a,{label:g(r.network).label,sx:Object(c.a)(Object(c.a)({},b),{},{backgroundColor:g(r.network).color,color:"white"})})}),a&&Object(u.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:a.map((function(e){return Object(u.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",backgroundColor:"white"},children:Object(u.jsx)("img",{style:{width:"100%",height:"100%",padding:5,objectFit:"contain"},alt:"",src:e})},e)}))})]})})})})}},677:function(e,t,r){"use strict";r.r(t);var c=r(15),a=r(0),n=r(14),o=r(654),i=r(672),s=r(186),d=r(674),l=r(209),j=r(251),b=r(34),h=r.p+"static/media/workflow_empty.55ef149b.svg",u=r(239),x=r(215),f=r(1);t.default=function(){var e=Object(n.f)(),t=Object(a.useState)(!0),r=Object(c.a)(t,2),O=r[0],w=r[1],p=Object(a.useState)({}),g=Object(c.a)(p,2),v=g[0],m=g[1],k=Object(x.a)(u.a.getAllWorkflows);return Object(a.useEffect)((function(){k.request()}),[]),Object(a.useEffect)((function(){w(k.loading)}),[k.loading]),Object(a.useEffect)((function(){if(k.data)try{for(var e=k.data,t={},r=0;r<e.length;r+=1){var c=e[r].flowData,a=JSON.parse(c).nodes||[];t[e[r].shortId]=[];for(var n=0;n<a.length;n+=1){var o="".concat(b.a,"/api/v1/node-icon/").concat(a[n].data.name);t[e[r].shortId].includes(o)||t[e[r].shortId].push(o)}}m(t)}catch(i){console.error(i)}}),[k.data]),Object(f.jsxs)(l.a,{children:[Object(f.jsxs)(o.a,{flexDirection:"row",children:[Object(f.jsx)("h1",{children:"Workflows"}),Object(f.jsxs)(i.a,{sx:{mb:1.25},container:!0,direction:"row",children:[Object(f.jsx)(s.a,{sx:{flexGrow:1}}),Object(f.jsx)(i.a,{item:!0,children:Object(f.jsx)(d.a,{variant:"contained",sx:{color:"white"},onClick:function(){e("/canvas")},children:"Add New"})})]})]}),Object(f.jsx)(i.a,{container:!0,spacing:b.d,children:!O&&k.data&&k.data.map((function(t,r){return Object(f.jsx)(i.a,{item:!0,lg:4,md:6,sm:6,xs:12,children:Object(f.jsx)(j.a,{onClick:function(){e("/canvas/".concat(t.shortId))},data:t,images:v[t.shortId]})},r)}))}),!O&&(!k.data||0===k.data.length)&&Object(f.jsxs)(o.a,{sx:{alignItems:"center",justifyContent:"center"},flexDirection:"column",children:[Object(f.jsx)(s.a,{sx:{p:2,height:"auto"},children:Object(f.jsx)("img",{style:{objectFit:"cover",height:"30vh",width:"auto"},src:h,alt:"WorkflowEmptySVG"})}),Object(f.jsx)("div",{children:"No Workflows Yet"})]})]})}}}]);
//# sourceMappingURL=10.2252cb2a.chunk.js.map