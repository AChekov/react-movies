"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[104],{3104:function(A,e,n){n.r(e),n.d(e,{default:function(){return C}});var t,r,a,u,c=n(5861),i=n(8152),o=n(7757),s=n.n(o),g=n(168),p=n(6444),f=p.ZP.div(t||(t=(0,g.Z)(["\n  padding: 15px;\n"]))),l=p.ZP.ul(r||(r=(0,g.Z)(["\n  align-items: center;\n  flex-wrap: wrap;\n"]))),v=p.ZP.li(a||(a=(0,g.Z)(["\n  width: 100%;\n  height: 400px;\n  flex-basis: calc(100% / 4 - 15px);\n  padding: 5px;\n\n  & img {\n    width: 200px;\n    max-height: 300px;\n    object-fit: cover;\n  }\n"]))),E=p.ZP.p(u||(u=(0,g.Z)(["\n  margin-top: 10px;\n  font-size: 14px;\n  font-weight: 600;\n"]))),d=n(2791),B=n(6871),h=n(6611),m=n(3024),w=n(184),C=function(){var A=(0,d.useState)([]),e=(0,i.Z)(A,2),n=e[0],t=e[1],r=(0,B.UO)().movieId;return(0,d.useEffect)((function(){var A=function(){var A=(0,c.Z)(s().mark((function A(){var e;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,h.kK)(Number(r));case 3:e=A.sent,t(e),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}();A()}),[r]),(0,w.jsx)(f,{children:0!==n.length?(0,w.jsx)(l,{children:n&&n.map((function(A){var e=A.id,n=A.name,t=A.profile_path,r=A.character,a=(0,m.aE)(t);return(0,w.jsxs)(v,{children:[(0,w.jsx)("img",{src:a,alt:n}),(0,w.jsx)(E,{children:n}),(0,w.jsxs)(E,{children:["Character: ",r," "]})]},e)}))}):(0,w.jsx)(E,{children:"We have no information about the actors in that movie"})})}},3024:function(A,e,n){n.d(e,{aE:function(){return u},Lu:function(){return i},pI:function(){return o}});var t={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},r=n(7421),a=function(A){return A.map((function(A){return A.name})).join(", ")},u=function(A){return A?"https://image.tmdb.org/t/p/w500/".concat(A):"".concat(r)},c=function(A){return A?A.slice(0,4):A},i=function(A){return A.map((function(A){var e,n=A.genres,r=void 0===n?null:n,i=A.genre_ids,o=void 0===i?null:i,s=A.id,g=A.original_title,p=A.name,f=A.overview,l=A.popularity,v=A.poster_path,E=A.release_date,d=A.vote_average,B=A.vote_count;return{genre:o?(e=o,e.map((function(A){return t["".concat(A)]})).join(", ")):a(r),id:s,title:g||p,about:f,popularity:l,img:u(v),releaseDate:E?c(E):"",vote:d,votes:B}}))},o=function(A){var e=A.poster_path,n=A.title,t=A.original_title,r=A.vote_average,i=A.overview,o=A.genres,s=A.release_date;return{genre:a(o),title:t||n,about:i,img:u(e),releaseDate:s?c(s):"",vote:r}}},6611:function(A,e,n){n.d(e,{BG:function(){return s},FE:function(){return g},SU:function(){return o},kK:function(){return p},sv:function(){return f}});var t=n(5861),r=n(7757),a=n.n(r),u=n(4569),c=n.n(u),i=n(3024);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"32e5de1f8d1f8b349737f2ff256fe882",include_adult:!1,language:"en-US"};var o=function(){var A=(0,t.Z)(a().mark((function A(){var e,n,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/trending/all/day?");case 2:return e=A.sent,n=e.data,t=(0,i.Lu)(n.results),A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),s=function(){var A=(0,t.Z)(a().mark((function A(e){var n,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(e,"?"));case 2:return n=A.sent,t=n.data,r=(0,i.pI)(t),A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),g=function(){var A=(0,t.Z)(a().mark((function A(e){var n,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/search/movie?query=".concat(e,"&page=1"));case 2:return n=A.sent,t=n.data,r=(0,i.Lu)(t.results),A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),p=function(){var A=(0,t.Z)(a().mark((function A(e){var n,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(e,"/credits?"));case 2:return n=A.sent,t=n.data,A.abrupt("return",t.cast);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),f=function(){var A=(0,t.Z)(a().mark((function A(e){var n,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(e,"/reviews?"));case 2:return n=A.sent,t=n.data,A.abrupt("return",t.results);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},7421:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=104.ab2fcac8.chunk.js.map