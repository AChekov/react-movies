"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[407],{4672:function(A,n,e){e.d(n,{Z:function(){return l}});var t,r,a=e(6871),i=e(168),o=e(6444),u=e(3504),c=o.ZP.ul(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 10px 10px;\n"]))),s=(0,o.ZP)(u.rU)(r||(r=(0,i.Z)(["\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-basis: calc(100% / 5 - 15px);\n  padding: 5px;\n  color: black;\n  background: rgba(0, 0, 255, 0.1);\n  font-size: 18px;\n  border-radius: 5px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n  }\n  & img {\n    width: 100%;\n  }\n"]))),g=e(184),l=function(A){var n=A.movies,e=(0,a.TH)();return(0,g.jsx)(c,{children:n&&n.map((function(A){var n=A.id,t=A.title,r=A.img;return(0,g.jsxs)(s,{to:"/movies/".concat(n),state:{from:e},children:[(0,g.jsx)("img",{src:r,alt:t}),(0,g.jsx)("h3",{children:t})]},n)}))})}},3024:function(A,n,e){e.d(n,{aE:function(){return i},Lu:function(){return u},pI:function(){return c}});var t={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},r=e(7421),a=function(A){return A.map((function(A){return A.name})).join(", ")},i=function(A){return A?"https://image.tmdb.org/t/p/w500/".concat(A):"".concat(r)},o=function(A){return A?A.slice(0,4):A},u=function(A){return A.map((function(A){var n,e=A.genres,r=void 0===e?null:e,u=A.genre_ids,c=void 0===u?null:u,s=A.id,g=A.original_title,l=A.name,p=A.overview,f=A.popularity,d=A.poster_path,v=A.release_date,m=A.vote_average,E=A.vote_count;return{genre:c?(n=c,n.map((function(A){return t["".concat(A)]})).join(", ")):a(r),id:s,title:g||l,about:p,popularity:f,img:i(d),releaseDate:v?o(v):"",vote:m,votes:E}}))},c=function(A){var n=A.poster_path,e=A.title,t=A.original_title,r=A.vote_average,u=A.overview,c=A.genres,s=A.release_date;return{genre:a(c),title:t||e,about:u,img:i(n),releaseDate:s?o(s):"",vote:r}}},9407:function(A,n,e){e.r(n),e.d(n,{default:function(){return B}});var t,r,a,i=e(885),o=e(168),u=e(6444),c=u.ZP.form(t||(t=(0,o.Z)(["\n  display: flex;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  align-items: center;\n  justify-content: center;\n"]))),s=u.ZP.input(r||(r=(0,o.Z)(["\n  margin: 0;\n  padding: 5px;\n  min-width: 300px;\n  height: 40px;\n  outline: none;\n  height: 30px;\n  border: 0;\n  background-color: aliceblue;\n  border-radius: 5px;\n"]))),g=u.ZP.button(a||(a=(0,o.Z)(["\n  width: 48px;\n  height: 48px;\n  background-size: 40%;\n  background-position: center;\n  opacity: 0.6;\n  margin-right: 5px; \n  border-radius: 50% ;  \n  outline: none;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  \n  &:hover {\n  opacity: 1;\n  "]))),l=e(4672),p=e(2791),f=e(9e3),d=e(7421),v=e(6066),m=e(6611),E=e(184),h=[{id:987,img:d,title:"movie_title"}],B=function(){var A=(0,p.useState)(""),n=(0,i.Z)(A,2),e=n[0],t=n[1],r=(0,p.useState)(h),a=(0,i.Z)(r,1)[0],o=function(A){var n=(0,p.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1];return(0,p.useEffect)((function(){""!==A&&(0,m.FE)(A).then(r)}),[A]),t}(e);return(0,E.jsxs)("main",{children:[(0,E.jsx)(v.Ix,{theme:"colored",position:"top-right",autoClose:2e3}),(0,E.jsxs)(c,{onSubmit:function(A){if(A.preventDefault(),t(A.currentTarget.elements.searchQuery.value.toLowerCase().trim()),console.log(t),""===e.trim())return console.log("Enter a search term"),void v.Am.error("Enter a search term");t("")},children:[(0,E.jsx)(g,{type:"submit",children:(0,E.jsx)(f.Vph,{size:"30"})}),(0,E.jsx)(s,{name:"searchQuery",type:"text",placeholder:"Search movies..."})]}),0!==o.length?(0,E.jsx)(l.Z,{movies:o}):(0,E.jsx)(l.Z,{movies:a})]})}},6611:function(A,n,e){e.d(n,{BG:function(){return s},FE:function(){return g},SU:function(){return c},kK:function(){return l},sv:function(){return p}});var t=e(5861),r=e(7757),a=e.n(r),i=e(4569),o=e.n(i),u=e(3024);o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"32e5de1f8d1f8b349737f2ff256fe882",include_adult:!1,language:"en-US"};var c=function(){var A=(0,t.Z)(a().mark((function A(){var n,e,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o().get("/trending/all/day?");case 2:return n=A.sent,e=n.data,t=(0,u.Lu)(e.results),A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),s=function(){var A=(0,t.Z)(a().mark((function A(n){var e,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o().get("/movie/".concat(n,"?"));case 2:return e=A.sent,t=e.data,r=(0,u.pI)(t),A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),g=function(){var A=(0,t.Z)(a().mark((function A(n){var e,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o().get("/search/movie?query=".concat(n,"&page=1"));case 2:return e=A.sent,t=e.data,r=(0,u.Lu)(t.results),A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),l=function(){var A=(0,t.Z)(a().mark((function A(n){var e,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o().get("/movie/".concat(n,"/credits?"));case 2:return e=A.sent,t=e.data,A.abrupt("return",t.cast);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),p=function(){var A=(0,t.Z)(a().mark((function A(n){var e,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o().get("/movie/".concat(n,"/reviews?"));case 2:return e=A.sent,t=e.data,A.abrupt("return",t.results);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()},7421:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=407.46a3fc83.chunk.js.map