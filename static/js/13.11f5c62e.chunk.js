(this["webpackJsonpgalaxy-movies-client"]=this["webpackJsonpgalaxy-movies-client"]||[]).push([[13],{311:function(e,t){},312:function(e,t,a){"use strict";a(0),a(513),a(512),a(3)},313:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var c="Galaxy Movies",i="AIzaSyDztP6SDtzPiVhZauiUZMWvQWF1ZCclh7w",n="https://antran17520224.github.io/galaxy-movies-uit/"},318:function(e,t,a){"use strict";var c=a(311);a.o(c,"DOMAIN_WEB")&&a.d(t,"DOMAIN_WEB",(function(){return c.DOMAIN_WEB})),a.o(c,"URL_CINEMA")&&a.d(t,"URL_CINEMA",(function(){return c.URL_CINEMA})),a.o(c,"YOUR_KEY_APP")&&a.d(t,"YOUR_KEY_APP",(function(){return c.YOUR_KEY_APP}));a(312);var i=a(313);a.d(t,"DOMAIN_WEB",(function(){return i.a})),a.d(t,"URL_CINEMA",(function(){return i.b})),a.d(t,"YOUR_KEY_APP",(function(){return i.c}));a(116)},327:function(e,t,a){"use strict";a(0);var c=a(3);t.a=function(e){return Object(c.jsx)("i",{className:"fas fa-ticket-alt",style:{transform:"rotateZ(-45deg)"}})}},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(2),i=a(129),n=(a(0),a(299)),s=a(3),r=function(e){var t=e.children,a=e.value,r=e.index,l=e.className,o=Object(i.a)(e,["children","value","index","className"]);return Object(s.jsx)("div",Object(c.a)(Object(c.a)({role:"tabpanel",hidden:a!==r,id:"scrollable-auto-tabpanel-".concat(r),"aria-labelledby":"scrollable-auto-tab-".concat(r)},o),{},{className:l,children:a===r&&Object(s.jsx)(n.a,{children:t})}))}},457:function(e,t,a){},459:function(e,t,a){},461:function(e,t,a){},514:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a(107),n=a(38),s=a(58),r=a(288),l=a(278),o=a(335),d=a.n(o),j=a(177),b=a.n(j),u=a(0),h=a.n(u),m=a(22),O=a(120),x=a(327),p=a(70),f=(a(457),a(286)),g=a(240),v=a(302),N=a(480),y=a(318),_=a(3),M=function(e){var t=e.store.DetailPage,a=t.toggleMapModal,c=t.coordinate,i={lat:c.lng,lng:c.lat};return Object(_.jsx)(v.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"trailer-modal",open:a,onClose:function(){return e.actions.toggleModal({type:p.a.MAP_MODAL})},closeAfterTransition:!0,BackdropComponent:f.a,BackdropProps:{timeout:500},children:Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(g.a,{in:a,children:Object(_.jsx)(N.b,{id:"script-loader",googleMapsApiKey:y.YOUR_KEY_APP,children:Object(_.jsx)(N.a,{center:i,zoom:10,mapContainerStyle:{width:"80%",height:"80%"},children:Object(_.jsx)(N.c,{position:{lat:c.lng,lng:c.lat}})})})})})})},A=a(64),P=a(293),w=a(281),C=a(502),k=a(511),E=a(68),L=a(331),D=(a(459),a(460)),R=a.n(D);var S=Object(w.a)((function(e){return{selected:{color:"#00fbff"},root:{fontSize:"12px",fontWeight:600,minWidth:"130px"},indicator:{backgroundColor:"#00fbff"},flexContainer:{display:"flex",justifyContent:"center"},rootTab:{}}})),I=function(e){var t=S(),a=h.a.useState(0),i=Object(A.a)(a,2),n=i[0],s=i[1],o=e.store.HomePage.currentMovie,d=e.store.DetailPage.sessionRecords,j=h.a.useState([]),u=Object(A.a)(j,2),m=u[0],O=u[1],x=h.a.useState([]),f=Object(A.a)(x,2),g=f[0],v=f[1],N=h.a.useState(!0),y=Object(A.a)(N,2),M=y[0],w=y[1],D=h.a.useState([]),I=Object(A.a)(D,2),T=I[0],B=I[1],U=h.a.useState(!1),Y=Object(A.a)(U,2),W=Y[0],F=Y[1];return h.a.useEffect((function(){if(M){for(var t=0;t<14;t++)m.push(b()().add(t,"days").format("dddd")),g.push(b()().add(t,"days").format("L").slice(0,-5).replace("/","-")),O(m),v(g),13===t&&w(!1);e.actions.getSessionByMovieId({movieId:null===o||void 0===o?void 0:o._id})}d.length>0&&(d.map((function(e){g.map((function(t,a){t===b()(e.date).format("L").slice(0,-5).replace("/","-")&&(T.push(a),B(T))}))})),F(!0))}),[d.length,M,W]),Object(_.jsx)(h.a.Fragment,{children:Object(_.jsxs)("div",{className:"wrapper-booking",children:[Object(_.jsx)("h2",{className:"title-showtimes",children:"L\u1ecbch chi\u1ebfu"}),Object(_.jsx)("div",{className:"wrapper-tabs",children:Object(_.jsxs)(P.a,{position:"static",color:"default",children:[Object(_.jsx)(k.a,{value:n,onChange:function(e,t){s(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",className:"tabs",indicatorColor:"primary",classes:{indicator:t.indicator},children:m.map((function(e,a){return Object(_.jsx)(C.a,Object(c.a)({label:Object(_.jsxs)("div",{className:"date-tab",children:[Object(_.jsx)("p",{children:e}),Object(_.jsx)("p",{children:g[a]})]}),classes:{selected:t.selected,root:t.root}},function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}(a)),a)}))}),T.length>0&&d.map((function(t,a){return Object(_.jsx)(L.a,{value:n,index:T[a],children:Object(_.jsx)("div",{className:"wrapper-list-showtimes",children:Object(_.jsxs)(r.a,{container:!0,className:"wrapper-showtime",children:[Object(_.jsxs)(r.a,{item:!0,lg:3,xs:8,className:"theater",children:[Object(_.jsxs)("div",{className:"text",children:[Object(_.jsx)("h2",{className:"theater-name",children:t.cinema_id.cinema_Name}),Object(_.jsx)("p",{className:"theater-location",children:t.cinema_id.address})]}),Object(_.jsx)("div",{className:"wrapper-button-location",children:Object(_.jsxs)(l.a,{variant:"contained",className:"button-location",onClick:function(){e.actions.toggleModal({type:p.a.MAP_MODAL,coordinate:{lat:t.cinema_id.lat,lng:t.cinema_id.lng}})},children:[Object(_.jsx)(R.a,{})," Xem v\u1ecb tr\xed"]})})]}),Object(_.jsx)(r.a,{item:!0,lg:1,xs:1,className:"class-and-theater",children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("span",{className:"theater-name",children:t.theaters_id.theaters_Name}),Object(_.jsxs)("span",{className:"classify",children:[null===o||void 0===o?void 0:o.maturity,"+"]})]})}),Object(_.jsx)(r.a,{item:!0,lg:6,xs:12,className:"wrapper-time",children:Object(_.jsx)("div",{className:"wrapper-button-time",children:Object(_.jsx)(E.a,{to:"/ticketing/".concat(t.movie_id.name,"/").concat(t.theaters_id.theaters_Name),children:Object(_.jsx)(l.a,{variant:"outlined",className:"button-time",onClick:function(){e.actions.handleCurrentSession({currentSession:t})},children:t.time.slice(0,5)})})})})]})})},a)}))]})})]})})},T=a(353),B=(a(461),function(e){var t=e.store.DetailPage,a=t.isShowTrailer,c=t.codeTrailer;return Object(_.jsx)(v.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"trailer-modal",open:a,onClose:function(){return e.actions.toggleModal({type:p.a.TRAILER_MODAL})},closeAfterTransition:!0,BackdropComponent:f.a,BackdropProps:{timeout:500},children:Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(g.a,{in:a,children:Object(_.jsx)(T.a,{className:"youtube-iframe",videoId:c,opts:{playerVars:{autoplay:1}}})})})})}),U=function(e){var t=Object(u.useRef)(),a=Object(m.g)(),i=e.store.HomePage.currentMovie,n=e.store.DetailPage.isProcessing;return h.a.useEffect((function(){return window.scrollTo(0,0),null===i&&a.push("/"),function(){e.actions.handleClearSessionRecords()}}),[]),Object(_.jsxs)(h.a.Fragment,{children:[Object(_.jsx)(O.b,{spinning:n,opacity:1,text:"Loading"}),i&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"wrapper-details-page",children:Object(_.jsx)("div",{className:"wrapper-details",children:Object(_.jsxs)(r.a,{container:!0,className:"wrapper-grid",children:[Object(_.jsx)(r.a,{item:!0,lg:3,className:"grid-image",children:Object(_.jsx)("div",{className:"wrapper-details-image",children:Object(_.jsx)("img",{src:i.smallImage,alt:"phim"})})}),Object(_.jsx)(r.a,{item:!0,lg:6,className:"grid-description",children:Object(_.jsxs)("div",{className:"wrapper-details-description",children:[Object(_.jsx)("div",{id:"#name-movies"}),Object(_.jsx)("h2",{children:i.name}),Object(_.jsx)("p",{children:i.description}),Object(_.jsx)("div",{className:"film-info",children:Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{className:"classify",children:[Object(_.jsx)("div",{children:"Ph\xe2n lo\u1ea1i"}),Object(_.jsxs)("div",{className:"classify-details",children:["C",i.maturity," - Phim d\xe0nh cho kh\xe1n gi\u1ea3 t\u1eeb ",i.maturity," tu\u1ed5i tr\u1edf l\xean"]})]}),Object(_.jsxs)("li",{className:"director",children:[Object(_.jsx)("div",{children:"\u0110\u1ea1o di\u1ec5n"}),Object(_.jsx)("div",{children:i.directors})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)("div",{children:"Di\u1ec5n vi\xean"}),Object(_.jsxs)("div",{className:"cast",children:[i.cast,",..."]})]}),Object(_.jsxs)("li",{className:"kind",children:[Object(_.jsx)("div",{children:"Th\u1ec3 lo\u1ea1i"}),Object(_.jsx)("div",{children:i.genre})]}),Object(_.jsxs)("li",{className:"launch",children:[Object(_.jsx)("div",{children:"Kh\u1edfi chi\u1ebfu"}),Object(_.jsx)("div",{children:b()(i.launchDate).format("L")})]}),Object(_.jsxs)("li",{className:"time",children:[Object(_.jsx)("div",{children:"Th\u1eddi l\u01b0\u1ee3ng"}),Object(_.jsxs)("div",{children:[i.time," ph\xfat"]})]}),Object(_.jsxs)("li",{className:"language",children:[Object(_.jsx)("div",{children:"Ng\xf4n ng\u1eef"}),Object(_.jsx)("div",{children:"Ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Vi\u1ec7t"})]})]})}),Object(_.jsxs)("div",{className:"wrapper-button",children:[Object(_.jsxs)(l.a,{variant:"contained",className:"button-booking",onClick:function(){return e=t,window.scrollTo({behavior:"smooth",top:e.current.offsetTop,left:0});var e},children:["Mua v\xe9 ngay",Object(_.jsx)("span",{style:{marginLeft:"10px"},children:Object(_.jsx)(x.a,{})})]}),Object(_.jsxs)(l.a,{variant:"contained",className:"button-trailer",onClick:function(){return e.actions.toggleModal({type:p.a.TRAILER_MODAL,codeTrailer:i.trailer})},children:["Trailer",Object(_.jsx)(d.a,{style:{marginLeft:"5px",fontSize:"18px"}})]})]})]})})]})})}),Object(_.jsx)(B,Object(c.a)({},e)),Object(_.jsx)("div",{ref:t}),Object(_.jsx)(I,Object(c.a)({},e)),Object(_.jsx)(M,Object(c.a)({},e))]})]})};t.default=Object(m.i)(Object(s.c)((function(e){return{store:e}}),(function(e){var t=Object(c.a)({},i);return{actions:Object(n.bindActionCreators)(t,e)}}))(U))}}]);
//# sourceMappingURL=13.11f5c62e.chunk.js.map