(this.webpackJsonpapp_films=this.webpackJsonpapp_films||[]).push([[4],{274:function(e,t,a){"use strict";a.r(t);var n=a(66),r=a(0),c=a.n(r),i=a(80),o=a(21),s=a(168),l=a(259),j=a(3),d=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"center","& > * + *":{marginLeft:e.spacing(2)}}}}));function b(){var e=d();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(l.a,{})})}var u,x=a(29),O=a(276),p=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),h=function(e){return Object(j.jsx)(O.a,Object(x.a)({elevation:6,variant:"filled"},e))},m=function(){p();return Object(j.jsx)(h,{severity:"error",children:"An error occurred, reload the page!"})},g=a(216),f=a(275),v=a(217),y=Object(s.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(1)}}}})),C=v.a.div(u||(u=Object(g.a)(["\n  display: flex;\n  justify-content: center; \n"])));function S(e){var t=e.page,a=e.setPage,n=e.maxPage,r=y();return Object(j.jsx)(C,{className:r.root,children:Object(j.jsx)(f.a,{count:n,page:t,onChange:function(e,t){a(t)},color:"primary"})})}var k=a(180),T=Object(s.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper}}}));function w(e){var t=T();return Object(j.jsx)(k.a,{className:t.root,children:e.children})}var N=a(171),A=a(179),F=a(174),P=a(265),E=a(277),B=a(60),D=a(25),M=a(6),V=a(260),I=a(261),W=a(262),H=a(263),J=a(264),L=a(178),R=a(59),_=a(222),G=a.n(_),X=a(223),Y=a.n(X),q=a(224),z=a.n(q),K=Object(s.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:R.a[500]}}}));function Q(e){var t=e.imgSrc,a=e.imgAlt,r=e.title,i=e.subTitle,o=e.date,s=e.text1,l=e.text2,d=e.text3,b=e.text4,u=e.handleClose,x=K(),O=c.a.useState(!1),p=Object(n.a)(O,2),h=p[0],m=p[1],g=new Date(o),f="".concat(g.getDate(),",").concat(g.getMonth()+1,",").concat(g.getFullYear());return Object(j.jsxs)(V.a,{className:x.root,children:[Object(j.jsx)(I.a,{avatar:Object(j.jsx)(E.a,{alt:a,src:t}),action:Object(j.jsx)(L.a,{"aria-label":"settings",onClick:u,children:"X"}),title:r,subheader:"".concat(i," - ").concat(f)}),Object(j.jsxs)(W.a,{children:[Object(j.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:["The species of the character: ",s]}),Object(j.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:["The gender of the character: ",l]}),Object(j.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:["Name and link to the character's origin location: ",d]})]}),Object(j.jsxs)(H.a,{disableSpacing:!0,children:[Object(j.jsx)(L.a,{"aria-label":"add to favorites",children:Object(j.jsx)(G.a,{})}),Object(j.jsx)(L.a,{"aria-label":"share",children:Object(j.jsx)(Y.a,{})}),Object(j.jsx)(L.a,{className:Object(M.a)(x.expand,Object(D.a)({},x.expandOpen,h)),onClick:function(){m(!h)},"aria-expanded":h,"aria-label":"show more",children:Object(j.jsx)(z.a,{})})]}),Object(j.jsx)(J.a,{in:h,timeout:"auto",unmountOnExit:!0,children:Object(j.jsxs)(W.a,{children:[Object(j.jsxs)(B.a,{paragraph:!0,children:[r,":"]}),Object(j.jsxs)(B.a,{paragraph:!0,children:["Name and link to the character's last known location endpoint: ",b]})]})})]})}var U=a(232),Z=a(182),$=a(184),ee=a(195),te=a(229),ae=Object(s.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),ne=c.a.forwardRef((function(e,t){var a=e.in,n=e.children,r=e.onEnter,c=e.onExited,i=(e.onClose,e.openModal,Object(U.a)(e,["in","children","onEnter","onExited","onClose","openModal"])),o=Object(ee.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&r&&r()},onRest:function(){!a&&c&&c()}});return Object(j.jsx)(te.animated.div,Object(x.a)(Object(x.a)({ref:t,style:o},i),{},{children:n}))}));function re(e){var t=e.children,a=e.open,n=e.handleClose,r=ae();return Object(j.jsx)("div",{children:Object(j.jsx)(Z.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:r.modal,open:a,onClose:n,closeAfterTransition:!0,BackdropComponent:$.a,BackdropProps:{timeout:500},children:Object(j.jsx)(ne,{in:a,children:Object(j.jsx)("div",{className:r.paper,children:t})})})})}var ce=Object(s.a)((function(e){return{inline:{display:"inline"}}}));function ie(e){var t=ce(),a=e.imgSrc,r=e.imgAlt,i=e.title,o=e.textBold,s=e.text,l=e.subTitle,d=e.date,b=e.text1,u=e.text2,x=e.text3,O=e.text4,p=(e.ell,c.a.useState(!1)),h=Object(n.a)(p,2),m=h[0],g=h[1],f=function(){g(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(N.a,{alignItems:"flex-start",onClick:function(){g(!0)},children:[Object(j.jsx)(P.a,{children:Object(j.jsx)(E.a,{alt:r,src:a})}),Object(j.jsx)(F.a,{primary:i,secondary:Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(B.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary",children:o})," \u2014 ".concat(s)]})})]}),Object(j.jsx)(A.a,{variant:"inset",component:"li"}),Object(j.jsx)(re,{open:m,handleClose:f,children:Object(j.jsx)(Q,{imgSrc:a,imgAlt:r,title:i,subTitle:l,date:d,text1:b,text2:u,text3:x,text4:O,handleClose:f})})]})}var oe=a(278),se=a(268),le=a(266),je=a(273),de=a(267),be=Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}}));function ue(e){var t=e.arr,a=e.title,n=e.subTitle,r=e.value,c=e.setValue,i=be();return Object(j.jsx)("div",{children:Object(j.jsxs)(le.a,{className:i.formControl,children:[Object(j.jsx)(oe.a,{id:a,children:a}),Object(j.jsx)(je.a,{labelId:a,id:a+1,value:r,onChange:function(e){c(e.target.value)},children:t.map((function(e){return Object(j.jsx)(de.a,{value:e,children:e},e)}))}),Object(j.jsx)(se.a,{children:n})]})})}t.default=function(){var e=Object(r.useState)(1),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(r.useState)(""),d=Object(n.a)(l,2),u=d[0],x=d[1],O=Object(r.useState)(""),p=Object(n.a)(O,2),h=p[0],g=p[1],f=Object(r.useState)(""),v=Object(n.a)(f,2),y=v[0],C=v[1],k=Object(i.b)(),T=Object(i.c)((function(e){return e.character.pending})),N=Object(i.c)((function(e){return e.character.error})),A=Object(i.c)((function(e){return e.character.pages})),F=(Object(i.c)((function(e){return e.character.count})),Object(i.c)((function(e){return e.character.results})));Object(r.useEffect)((function(){k({type:o.a,page:a,species:u,status:h,gender:y})}),[a,u,h,y]);return Object(j.jsx)("div",{children:T?Object(j.jsx)(b,{}):N?Object(j.jsx)(m,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ue,{arr:["Human","Humanoid","Alien","Poopybutthole","Animal","Cronenberg","Disease","unknown"],title:"Species",subTitle:"Filter by species",setValue:x,value:u}),Object(j.jsx)(ue,{arr:["Alive","Dead","unknown"],title:"Status",subTitle:"Filter by status",setValue:g,value:h}),Object(j.jsx)(ue,{arr:["Female","Male","Genderless","unknown"],title:"Sender",subTitle:"Filter by gender",setValue:C,value:y}),Object(j.jsx)(w,{children:F.map((function(e){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)(ie,{imgSrc:e.image,imgAlt:e.name,title:e.name,textBold:e.species,text:e.location.name,subTitle:e.status,date:e.created,text1:e.species,text2:e.gender,text3:e.origin.name,text4:e.location.name,ell:e})},e.id)}))}),Object(j.jsx)(S,{page:a,setPage:s,maxPage:A})]})})}}}]);
//# sourceMappingURL=4.e0e8a4ea.chunk.js.map