(this["webpackJsonpgalaxy-movies-client"]=this["webpackJsonpgalaxy-movies-client"]||[]).push([[13],{329:function(e,s,t){"use strict";t(0);var a=t(3);s.a=function(e){return Object(a.jsx)("i",{className:"fas fa-ticket-alt",style:{transform:"rotateZ(-45deg)"}})}},436:function(e,s,t){},452:function(e,s,t){},453:function(e,s,t){},454:function(e,s,t){},470:function(e,s,t){},526:function(e,s,t){"use strict";t.r(s);var a=t(2),i=t(67),n=t(38),c=t(58),r=t(0),o=t.n(r),l=t(117),j=t(278),d=t(299),m=t(340),b=t.n(m),p=t(177),O=t.n(p),h=t(68),x=t(329),u=t(84),g=(t(436),t(3)),v=function(e){Object(r.useEffect)((function(){e.actions.getMoviesByStatus({status:"banner"})}),[]);var s=e.store.HomePage.movieBanner;return Object(g.jsx)(o.a.Fragment,{children:null!==s&&Object(g.jsxs)("div",{className:"wrapper-banner",children:[Object(g.jsx)("div",{className:"wrapper-img",children:Object(g.jsx)("img",{src:s.bigImage,alt:"banner"})}),Object(g.jsxs)("div",{className:"content-banner",children:[Object(g.jsxs)("div",{className:"title-banner",children:[Object(g.jsx)("h1",{children:s.name}),Object(g.jsx)("p",{children:s.description})]}),Object(g.jsxs)("div",{className:"des-banner",children:[Object(g.jsx)("span",{className:"span1",children:O()(s.launchDate).format("YYYY")}),Object(g.jsx)("span",{className:"span2",children:s.genre}),Object(g.jsxs)("span",{children:[Math.floor(parseInt(s.time,10)/60),"hr"," ",parseInt(s.time,10)%60,"mins"]})]}),Object(g.jsxs)("div",{className:"wrapper-button",children:[Object(g.jsx)(h.a,{to:"/details/".concat(s.name),children:Object(g.jsxs)(j.a,{variant:"contained",className:"button-booking",onClick:function(){e.actions.handleCurrentMovie({currentMovie:s})},children:["\u0110\u1eb7t v\xe9",Object(g.jsx)("span",{style:{marginLeft:"14px"},children:Object(g.jsx)(x.a,{})})]})}),Object(g.jsxs)(j.a,{variant:"contained",className:"button-trailer",onClick:function(){return e.actions.toggleModal({type:u.a.TRAILER_MODAL,code:s.trailer})},children:["Trailer",Object(g.jsx)(b.a,{style:{marginLeft:"10px"}})]})]})]}),Object(g.jsx)(d.a,{className:"maturity-rating",children:Object(g.jsxs)(d.a,{className:"maturity-number",children:[s.maturity,"+"]})}),Object(g.jsx)("div",{className:"trailer-vignette"})]})})},f=t(360),N=t.n(f),w=t.p+"static/media/promotion-1.33092146.jpg",y=t.p+"static/media/promotion-2.4f84e192.jpg",T=t.p+"static/media/promotion-3.7eade674.jpg",S=t.p+"static/media/promotion-4.3e368170.jpg",k=(t(452),function(e){return Object(g.jsx)(o.a.Fragment,{children:Object(g.jsxs)("div",{className:"wrapper-discount-promotion",children:[Object(g.jsx)("h1",{className:"discount-header",children:"Khuy\u1ebfn m\xe3i"}),Object(g.jsxs)(N.a,Object(a.a)(Object(a.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]}),{},{children:[Object(g.jsx)("div",{className:"wrapper-image-promotion",children:Object(g.jsx)("img",{src:w,alt:"img-promotion"})}),Object(g.jsx)("div",{className:"wrapper-image-promotion",children:Object(g.jsx)("img",{src:y,alt:"img-promotion"})}),Object(g.jsx)("div",{className:"wrapper-image-promotion",children:Object(g.jsx)("img",{src:T,alt:"img-promotion"})}),Object(g.jsx)("div",{className:"wrapper-image-promotion",children:Object(g.jsx)("img",{src:S,alt:"img-promotion"})})]}))]})})}),M=(t(453),t(456)),A=t.n(M),L=t(455),C=t.n(L),Y=(t(454),function(e){var s=e.store.HomePage,t=s.movieShowing,i=s.movieComingSoon;o.a.useEffect((function(){e.actions.getMoviesByStatus({status:"showing"}),e.actions.getMoviesByStatus({status:"coming-soon"})}),[]);var n={dots:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:3,arrows:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0}},{breakpoint:1e3,settings:{slidesToShow:4,slidesToScroll:2,initialSlide:2}},{breakpoint:780,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(g.jsx)(o.a.Fragment,{children:Object(g.jsxs)("div",{className:"wrapper-slider",children:[Object(g.jsxs)("div",{id:"showing",className:"wrapper-showing",children:[Object(g.jsx)("div",{className:"header-title",children:"Phim \u0111ang chi\u1ebfu"}),Object(g.jsx)(N.a,Object(a.a)(Object(a.a)({},n),{},{children:t.map((function(s,t){return Object(g.jsxs)("div",{className:"wrapper-movies",children:[Object(g.jsxs)("div",{className:"wrapper-poster",children:[Object(g.jsx)("img",{src:s.smallImage,alt:"Movies"}),Object(g.jsxs)("div",{className:"wrapper-button",children:[Object(g.jsx)(h.a,{to:"/details/".concat(s.name),children:Object(g.jsxs)(j.a,{variant:"contained",className:"button-booking",onClick:function(){e.actions.handleCurrentMovie({currentMovie:s})},children:["\u0110\u1eb7t v\xe9",Object(g.jsx)("span",{style:{marginLeft:"10px"},children:Object(g.jsx)(x.a,{})})]})}),Object(g.jsxs)(j.a,{variant:"contained",className:"button-trailer",onClick:function(){return e.actions.toggleModal({type:u.a.TRAILER_MODAL,code:s.trailer})},children:["Trailer",Object(g.jsx)(b.a,{style:{marginLeft:"5px",fontSize:"18px"}})]})]})]}),Object(g.jsxs)("div",{className:"wrapper-description",children:[Object(g.jsxs)("div",{className:"des-k-y-m",children:[Object(g.jsx)("span",{className:"des-year",children:O()(s.launchDate).format("YYYY")}),Object(g.jsx)("span",{className:"des-kind",children:s.genre}),Object(g.jsxs)("span",{className:"des-maturity",children:[s.maturity,"+"]})]}),Object(g.jsx)("h3",{className:"des-name",children:s.name})]})]},t)}))})),Object(g.jsx)("div",{className:"nextArrow",children:Object(g.jsx)(C.a,{})}),Object(g.jsx)("div",{className:"prevArrow",children:Object(g.jsx)(A.a,{})})]}),Object(g.jsxs)("div",{id:"coming-soon",className:"wrapper-showing",children:[Object(g.jsx)("div",{className:"header-title",children:"Phim s\u1eafp chi\u1ebfu"}),Object(g.jsx)(N.a,Object(a.a)(Object(a.a)({},n),{},{children:i.map((function(s,t){return Object(g.jsxs)("div",{className:"wrapper-movies",children:[Object(g.jsxs)("div",{className:"wrapper-poster",children:[Object(g.jsx)("img",{src:s.smallImage,alt:"Movies"}),Object(g.jsxs)("div",{className:"wrapper-button",children:[Object(g.jsx)(h.a,{to:"/details/".concat(s.name),children:Object(g.jsxs)(j.a,{variant:"contained",className:"button-booking",onClick:function(){e.actions.handleCurrentMovie({currentMovie:s})},children:["\u0110\u1eb7t v\xe9",Object(g.jsx)("span",{style:{marginLeft:"10px"},children:Object(g.jsx)(x.a,{})})]})}),Object(g.jsxs)(j.a,{variant:"contained",className:"button-trailer",onClick:function(){return e.actions.toggleModal({type:u.a.TRAILER_MODAL,code:s.trailer})},children:["Trailer",Object(g.jsx)(b.a,{style:{marginLeft:"5px",fontSize:"18px"}})]})]})]}),Object(g.jsxs)("div",{className:"wrapper-description",children:[Object(g.jsxs)("div",{className:"des-k-y-m",children:[Object(g.jsx)("span",{className:"des-year",children:O()(s.launchDate).format("YYYY")}),Object(g.jsx)("span",{className:"des-kind",children:s.genre}),Object(g.jsxs)("span",{className:"des-maturity",children:[s.maturity,"+"]})]}),Object(g.jsx)("h3",{className:"des-name",children:s.name})]})]},t)}))})),Object(g.jsx)("div",{className:"nextArrow",children:Object(g.jsx)(C.a,{})}),Object(g.jsx)("div",{className:"prevArrow",children:Object(g.jsx)(A.a,{})})]})]})})}),I=t(286),P=t(240),R=t(302),D=t(362),B=(t(470),function(e){var s=e.store.HomePage,t=s.isShowTrailerModal,a=s.codeTrailer;return Object(g.jsx)(R.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"trailer-modal",open:t,onClose:function(){return e.actions.toggleModal({type:u.a.TRAILER_MODAL})},closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500},children:Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(P.a,{in:t,children:Object(g.jsx)(D.a,{className:"youtube-iframe",videoId:a,opts:{playerVars:{autoplay:1}}})})})})}),E=function(e){var s=e.store.HomePage.isProcessing;return Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)(l.b,{spinning:s,opacity:1}),Object(g.jsx)(v,Object(a.a)({},e)),Object(g.jsx)("div",{className:"w-100",children:Object(g.jsx)(B,Object(a.a)({},e))}),Object(g.jsx)(Y,Object(a.a)({},e)),Object(g.jsx)(k,Object(a.a)({},e))]})},F=t(22);s.default=Object(F.i)(Object(c.c)((function(e){return{store:e}}),(function(e){var s=Object(a.a)({},i);return{actions:Object(n.bindActionCreators)(s,e)}}))(E))}}]);
//# sourceMappingURL=13.ed19d929.chunk.js.map