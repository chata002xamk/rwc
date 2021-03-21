(this["webpackJsonpsoveltava-harjoitustyo-chata002xamk"]=this["webpackJsonpsoveltava-harjoitustyo-chata002xamk"]||[]).push([[0],{95:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a(13),r=a.n(n),s=a(62),o=a.n(s),c=a(46),l=a(72),m=a(18),d=a(22),p=a(15),h=a(154),j=a(28),u=a(132),x=a(56),b=a(137),f=a(138),g=a(139),O=a(150),v=a(142),N=a(143),y=a(144),T=a(134),w=a(129),I=a(136),S=a(145),C=a(135),F=a(2),L=Object(w.a)({cameraImage:{maxWidth:"120px",maxHeight:"80px",display:"block",marginLeft:"auto",marginRight:"auto"},cameraImgDiv:{width:"150px",position:"absolute",top:"40px"},mainContainer:{height:"180px",maxWidth:"150px",margin:"15px",paddingTop:"5px",paddingLeft:"0",paddingRight:"0",border:"1px solid lightgrey",boxShadow:"3px 3px 3px lightgrey",position:"relative"},stationTitle:{fontSize:"11px",maxWidth:"140px",marginBottom:"5px",maxHeight:"33px",overflow:"hidden"},deleteButton:{marginRight:"52px",position:"absolute",top:"130px",left:"5"},viewButton:{position:"absolute",top:"130px",left:"100px"}});function B(t){var e=L(),a=Object(i.useState)([]),n=Object(m.a)(a,2),r=n[0],s=n[1],o=function(){if(t.loaded){var e=t.cameraData.cameraStations.filter((function(e){return Number(e.nearestWeatherStationId)===Number(t.station.stationId)}));s(e[0].cameraPresets[0].imageUrl)}};return Object(i.useEffect)((function(){o()}),[]),Object(i.useEffect)((function(){o()}),[t.loaded]),Object(F.jsxs)(u.a,{className:e.mainContainer,fixed:!0,children:[Object(F.jsx)(x.a,{className:e.stationTitle,align:"center",children:t.station.stationName}),Object(F.jsx)("div",{className:e.cameraImgDiv,children:Object(F.jsx)("img",{src:r,className:e.cameraImage,alt:"Road"})}),Object(F.jsx)(T.a,{className:e.deleteButton,onClick:function(){t.deleteFavorite(t.station.stationId)},children:Object(F.jsx)(C.a,{color:"primary"})}),Object(F.jsx)(T.a,{className:e.viewButton,component:d.b,to:"/viewimage/".concat(t.station.stationId,"/").concat(t.fromView),children:Object(F.jsx)(I.a,{color:"primary"})})]})}var k=Object(w.a)({mainContainer:{marginLeft:"180px",paddingTop:"30px"},searchContainer:{borderRadius:"5px",border:"1px solid lightgrey",boxShadow:"3px 3px 3px lightgrey",marginTop:"30px",overflow:"auto"},resultContainer:{maxHeight:"500px",overflow:"auto",marginBottom:"10px",position:"relative"},subtitle:{marginTop:"10px"},searchButton:{marginLeft:"30px",width:"100px"},searchHelpText:{marginTop:"10px",marginBottom:"15px"},searchHelpText2:{marginTop:"30px",marginLeft:"25px"},listItem:{border:"1px solid lightgrey",margin:"2px",borderRadius:"3px",width:"450px"},favoritesContainer:{height:"300px",width:"600px",borderRadius:"5px",border:"1px solid lightgrey",boxShadow:"3px 3px 3px lightgrey",marginTop:"30px",marginLeft:"auto",marginRight:"auto"},gridCont:{marginLeft:"auto",marginRight:"auto",height:"212px",overflow:"hidden"},allFavButton:{float:"right"},noFavCont:{height:"212px",paddingTop:"40px"},searchField:{marginLeft:"60px"},progress:{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"40px"},errorText:{marginTop:"20px",color:"red"}});function D(t){var e=k(),a=Object(i.useState)(),n=Object(m.a)(a,2),r=n[0],s=n[1],o=Object(i.useState)([]),c=Object(m.a)(o,2),l=c[0],p=c[1],h=Object(i.useState)(),w=Object(m.a)(h,2),C=w[0],L=w[1],D=Object(i.useState)(""),R=Object(m.a)(D,2),W=R[0],E=R[1],H=function(e){var a=t.stationList.filter((function(e,a){return t.stationList.findIndex((function(t){return t.stationName===e.stationName}))===a})).filter((function(t){return t.stationName.toLowerCase().includes(e.toLowerCase())}));p(a)};return Object(i.useEffect)((function(){t.stationList||t.loadStationDataFromApi()}),[]),Object(i.useEffect)((function(){var e=setTimeout((function(){t.loaded||E("Error fetching data. Please try again later.")}),15e3);clearTimeout(e)}),[]),Object(i.useEffect)((function(){t.latestInput.fromView?(t.latestInput.input&&H(t.latestInput.input),t.setLatestInput(Object(j.a)(Object(j.a)({},t.latestInput),{},{fromView:!1}))):t.setLatestInput(Object(j.a)(Object(j.a)({},t.latestInput),{},{input:""}))}),[]),Object(F.jsxs)(u.a,{maxWidth:"md",className:e.mainContainer,children:[Object(F.jsx)(x.a,{align:"center",variant:"h5",children:"Road Weather Cameras"}),Object(F.jsxs)(u.a,{maxWidth:"sm",className:e.favoritesContainer,children:[Object(F.jsx)(x.a,{className:e.subtitle,variant:"h6",children:"Favorites"}),t.favorites.length>0?t.loaded?Object(F.jsx)(b.a,{container:!0,justify:"center",className:e.gridCont,children:t.favorites.map((function(e){return Object(F.jsx)(B,{cameraData:t.cameraData,deleteFavorite:t.deleteFavorite,station:e,fromView:"1",loaded:t.loaded},e.stationId)}))}):Object(F.jsx)(u.a,{className:e.noFavCont,children:Object(F.jsx)(f.a,{className:e.progress})}):Object(F.jsx)(u.a,{className:e.noFavCont,children:Object(F.jsx)(x.a,{className:e.noFav,align:"center",variant:"h6",children:"No favorites yet"})}),Object(F.jsxs)(g.a,{className:e.allFavButton,component:d.b,to:"/favorites",children:["All favorites",Object(F.jsx)(I.a,{})]})]}),Object(F.jsxs)(u.a,{maxWidth:"sm",className:e.searchContainer,children:[Object(F.jsx)(x.a,{className:e.subtitle,variant:"h6",children:"Search locations"}),Object(F.jsx)(x.a,{className:e.searchHelpText,children:'Search for a location. Location names in finnish, eg. "Tie 7" or "Helsinki"'}),Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r?t.loaded?(L(""),H(String(r)),t.setLatestInput(Object(j.a)(Object(j.a)({},t.latestInput),{},{input:r}))):L("Unable to fetch data. Try again later."):L("Enter search term.")},children:[Object(F.jsx)(O.a,{variant:"outlined",size:"small",onChange:function(t){s(t.target.value)},error:Boolean(C),helperText:C,className:e.searchField}),Object(F.jsx)(g.a,{variant:"contained",color:"primary",type:"submit",className:e.searchButton,children:"Search"})]}),t.latestInput.input?Object(F.jsxs)(x.a,{className:e.searchHelpText2,children:["Search results for: ",t.latestInput.input]}):"",Object(F.jsx)(u.a,{className:e.resultContainer,children:Object(F.jsx)(v.a,{children:l.map((function(a,i){return Object(F.jsxs)(N.a,{className:e.listItem,children:[Object(F.jsx)(y.a,{primary:a.stationName}),Object(F.jsx)(T.a,{component:d.b,to:"/viewimage/".concat(a.stationId,"/1"),children:Object(F.jsx)(I.a,{color:"primary"})}),Object(F.jsx)(T.a,{onClick:function(){t.addFavorite(a.stationId)},children:Object(F.jsx)(S.a,{color:"primary"})})]},i)}))})})]}),W?Object(F.jsx)(x.a,{align:"center",variant:"h6",className:e.errorText,children:W}):""]})}var R=Object(w.a)({mainContainer:{marginLeft:"180px",paddingTop:"30px",paddingRight:"18px"},title:{marginBottom:"30px"},gridCont:{borderRadius:"5px",border:"1px solid lightgrey",boxShadow:"3px 3px 3px lightgrey",marginTop:"30px",overflow:"auto",minHeight:"212px"},noFav:{marginTop:"80px"},noFavCont:{borderRadius:"5px",border:"1px solid lightgrey",boxShadow:"3px 3px 3px lightgrey",marginTop:"30px",height:"212px"},deleteButton:{marginTop:"10px",float:"right"},progress:{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"80px"}});function W(t){var e=R();return Object(i.useEffect)((function(){t.stationList||t.loadStationDataFromApi()}),[]),Object(F.jsxs)(u.a,{maxWidth:"md",className:e.mainContainer,children:[Object(F.jsx)(x.a,{align:"center",variant:"h5",className:e.title,children:"Favorites"}),t.favorites.length>0?t.loaded?Object(F.jsx)(b.a,{container:!0,className:e.gridCont,children:t.favorites.map((function(e){return Object(F.jsx)(B,{cameraData:t.cameraData,deleteFavorite:t.deleteFavorite,station:e,fromView:"2",loaded:t.loaded},e.stationId)}))}):Object(F.jsx)(u.a,{className:e.noFavCont,children:Object(F.jsx)(f.a,{className:e.progress})}):Object(F.jsx)(u.a,{className:e.noFavCont,children:Object(F.jsx)(x.a,{className:e.noFav,align:"center",variant:"h6",children:"No favorites yet"})}),Object(F.jsxs)(g.a,{className:e.deleteButton,color:"primary",onClick:function(){t.deleteFavorite(1)},children:[Object(F.jsx)(C.a,{})," Delete all favorites"]})]})}var E=Object(w.a)({mainContainer:{marginLeft:"180px",paddingTop:"30px"},title:{marginBottom:"30px"},infoText:{marginTop:"20px"}});function H(){var t=E();return Object(F.jsxs)(u.a,{maxWidth:"md",className:t.mainContainer,children:[Object(F.jsx)(x.a,{align:"center",variant:"h5",className:t.title,children:"Welcome to RWC"}),Object(F.jsx)(x.a,{className:t.infoText,children:"This service allows the user to search and view road weather camera images. The search function is a free text search in the name of the locations. You can use, for example, road numbers or city names (or parts of) to search."}),Object(F.jsx)(x.a,{className:t.infoText,children:"Locations can be saved to favorites by clicking the heart icon.  Favorites are stored in the browser's local storage, so they will persist until the browser cache is cleared. Favorites can be removed from the favorites view or from the search view by clicking the trashcan icon."}),Object(F.jsx)(x.a,{className:t.infoText,children:"Please note that city/municipality information in the location search is not exact, because many roads (road numbers) span across multiple municipalities. Also the location of the cameras is defined by the nearest weather station in the data, which is not always the same thing as the actual location of the camera. If you know a camera exists, but cannot find it with a city name, it might be possible to find with a road number."}),Object(F.jsx)(x.a,{className:t.infoText,children:"This service is a study assignment, made using JS / React / Material UI."}),Object(F.jsx)(x.a,{className:t.infoText,children:"Source of data Fintraffic / digitraffic.fi, license CC 4.0 BY"}),Object(F.jsx)(x.a,{className:t.infoText,children:"Hannu T\xe4til\xe4, XAMK 2021"})]})}var A=a(148),V=a(152),P=a(146),U=a(147),J=a(149),z=Object(w.a)({mainContainer:{marginLeft:"180px",paddingTop:"30px"},cameraImage:{maxWidth:"720px",maxHeight:"580px"},backButton:{marginLeft:"15px"},favoriteButton:{marginLeft:"600px"},title:{marginLeft:"30px",marginTop:"20px"},updatedText:{fontSize:"12px",marginBottom:"5px"},picDiv:{maxWidth:"740px"}});function M(t){var e=z(),a=Object(p.e)(),n=Object(p.f)().stationId,r=Object(p.f)().fromView,s=Object(i.useState)([]),o=Object(m.a)(s,2),l=o[0],d=o[1],h=Object(i.useState)(),b=Object(m.a)(h,2),f=b[0],O=b[1];return Object(i.useEffect)((function(){t.stationList.forEach((function(t){t.stationId===Number(n)&&O(t.stationName)})),function(){var e=t.cameraData.cameraStations.filter((function(t){return Number(t.nearestWeatherStationId)===Number(n)})),a=[],i=Object(V.a)(new Date,{months:2});e.forEach((function(t){t.cameraPresets.forEach((function(t){Object(P.a)(Object(U.a)(t.measuredTime),i)&&(a=[].concat(Object(c.a)(a),[{url:t.imageUrl,updated:t.measuredTime}]))}))})),d(a)}()}),[]),Object(F.jsxs)(u.a,{maxWidth:"md",className:e.mainContainer,children:[Object(F.jsxs)(g.a,{onClick:function(){2===Number(r)?a.push("/favorites"):(t.setLatestInput(Object(j.a)(Object(j.a)({},t.latestInput),{},{fromView:!0})),a.push("/search"))},className:e.backButton,children:[Object(F.jsx)(A.a,{color:"primary"}),"Back"]}),2===Number(r)?"":Object(F.jsx)(T.a,{className:e.favoriteButton,onClick:function(){t.addFavorite(n)},children:Object(F.jsx)(S.a,{color:"primary"})}),Object(F.jsx)(x.a,{variant:"h6",className:e.title,children:f}),Object(F.jsx)(v.a,{children:l.map((function(t){return Object(F.jsx)(N.a,{children:Object(F.jsxs)("div",{className:e.picDiv,children:[Object(F.jsx)("img",{className:e.cameraImage,src:t.url,alt:"Road"}),Object(F.jsxs)(x.a,{className:e.updatedText,align:"left",children:["Updated: ",Object(J.a)(Object(U.a)(t.updated),"d.M.yyyy HH.mm")]})]})},t.url)}))})]})}var X=a(153),Y=Object(w.a)({listitem:{marginTop:"10px",color:"white"},list:{paddingTop:"50px"},paper:{backgroundColor:"#2196F3",color:"white",paddingTop:"30px",width:"170px"},title:{marginTop:"0",fontWeight:"bold"},subtitle:{fontSize:"12px"}});function K(t){var e=Y();return Object(F.jsxs)(X.a,{variant:"permanent",open:!0,classes:{paper:e.paper},children:[Object(F.jsx)(x.a,{variant:"h5",align:"center",className:e.title,children:"Road"}),Object(F.jsx)(x.a,{variant:"h5",align:"center",className:e.title,children:"Weather"}),Object(F.jsx)(x.a,{variant:"h5",align:"center",className:e.title,children:"Cameras"}),Object(F.jsx)(x.a,{variant:"body1",align:"center",className:e.subtitle,children:"Hannu T\xe4til\xe4 2021"}),Object(F.jsxs)(v.a,{className:e.list,children:[Object(F.jsx)(N.a,{component:d.b,to:"/",children:Object(F.jsx)(y.a,{primary:"Welcome",primaryTypographyProps:{variant:"button",align:"right"},className:e.listitem})}),Object(F.jsx)(N.a,{component:d.b,to:"/search",children:Object(F.jsx)(y.a,{primary:"Search",primaryTypographyProps:{variant:"button",align:"right"},className:e.listitem})}),Object(F.jsx)(N.a,{component:d.b,to:"/favorites",children:Object(F.jsx)(y.a,{primary:"Favorites",primaryTypographyProps:{variant:"button",align:"right"},className:e.listitem})})]})]})}var q=function(){var t=Object(i.useState)({}),e=Object(m.a)(t,2),a=e[0],n=e[1],r=Object(i.useState)(),s=Object(m.a)(r,2),j=s[0],u=s[1],x=Object(i.useState)({}),b=Object(m.a)(x,2),f=b[0],g=b[1],O=Object(i.useState)([]),v=Object(m.a)(O,2),N=v[0],y=v[1],T=Object(i.useState)(!1),w=Object(m.a)(T,2),I=w[0],S=w[1],C=Object(i.useState)(!1),L=Object(m.a)(C,2),B=L[0],k=L[1],R=Object(i.useRef)();Object(i.useEffect)((function(){localStorage.getItem("favorites")?y(JSON.parse(localStorage.getItem("favorites"))):y([])}),[]),Object(i.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(N))}),[N]);var E=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a,i,r,s,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!1),e={headers:{"Digitraffic-User":"chata002Xamk","User-Agent":"RWC/1.0"}},r=[],t.prev=3,t.next=6,fetch("https://tie.digitraffic.fi/api/v1/data/camera-data",e);case 6:return s=t.sent,t.next=9,s.json();case 9:return a=t.sent,t.next=12,fetch("https://tie.digitraffic.fi/api/v3/metadata/weather-stations",e);case 12:return l=t.sent,t.next=15,l.json();case 15:i=t.sent,n(a),a.cameraStations.forEach((function(t){i.features.forEach((function(e){if(t.nearestWeatherStationId===e.id){var a={stationId:e.id,stationName:e.properties.names.fi,cameraId:t.id};a.stationName||(a.stationName=e.properties.name),r=[].concat(Object(c.a)(r),[a])}}))})),S(!0),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(3),console.log("Error fetching resources: ".concat(t.t0));case 24:u(r);case 25:case"end":return t.stop()}}),t,null,[[3,21]])})));return function(){return t.apply(this,arguments)}}(),A=function(t){var e=Object(c.a)(N),a=j.filter((function(e){return e.stationId===Number(t)}));0===e.filter((function(e){return e.stationId===Number(t)})).length&&(e.push(a[0]),y(e),B||(R.current="Favorite added",k(!0)))},V=function(t){if(1===t)y([]);else{var e=N.filter((function(e){return e.stationId!==t}));y(e),B||(R.current="Favorite removed",k(!0))}};return Object(F.jsxs)(d.a,{children:[Object(F.jsx)(K,{}),Object(F.jsx)(p.a,{path:"/search",children:Object(F.jsx)(D,{stationList:j,latestInput:f,setLatestInput:g,loadStationDataFromApi:E,favorites:N,deleteFavorite:V,addFavorite:A,cameraData:a,loaded:I})}),Object(F.jsx)(p.a,{path:"/favorites",children:Object(F.jsx)(W,{stationList:j,loadStationDataFromApi:E,favorites:N,cameraData:a,deleteFavorite:V,loaded:I})}),Object(F.jsx)(p.a,{path:"/",exact:!0,children:Object(F.jsx)(H,{})}),Object(F.jsx)(p.a,{path:"/viewimage/:stationId/:fromView",children:Object(F.jsx)(M,{cameraData:a,latestInput:f,setLatestInput:g,addFavorite:A,stationList:j})}),Object(F.jsx)(h.a,{open:B,autoHideDuration:Number(2e3),onClose:function(){k(!1)},message:R.current})]})};r.a.render(Object(F.jsx)(q,{}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.a41bff9c.chunk.js.map