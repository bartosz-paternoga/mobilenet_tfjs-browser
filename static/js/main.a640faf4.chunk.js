(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t){},103:function(e,t){},136:function(e,t){},137:function(e,t){},183:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),c=n(79),i=n.n(c),o=(n(91),n(9)),s=n.n(o),u=n(16),l=n(80),d=n(81),p=n(83),f=n(82),v=n(85),m=(n(95),n(84)),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).main=function(){var e,t=document.getElementById("video"),n=document.getElementById("canvas"),r=document.getElementById("predictions"),a=function(){var e=Object(u.a)(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0});case 2:return n=e.sent,t.srcObject=n,e.next=6,t.play();case 6:setInterval(function(){return c()},1e3);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(u.a)(s.a.mark(function e(){var r,a,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=n.getContext("2d"),a=t.videoWidth,c=t.videoHeight,a&&c&&(n.width=a,n.height=c,r.drawImage(t,0,0,a,c),i());case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),i=function(){var t=Object(u.a)(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.classify(n);case 2:r=t.sent,o(r);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(s.a.mark(function e(t){var n,a,c,i,o,u,l,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n="",c=!0,i=!1,o=void 0,e.prev=4,u=t[Symbol.iterator]();!(c=(l=u.next()).done);c=!0)a=l.value,d=(100*a.probability).toFixed(2),n+="".concat(d,"% | ").concat(a.className,"\n"),console.log(n);e.next=12;break;case 8:e.prev=8,e.t0=e.catch(4),i=!0,o=e.t0;case 12:e.prev=12,e.prev=13,c||null==u.return||u.return();case 15:if(e.prev=15,!i){e.next=18;break}throw o;case 18:return e.finish(15);case 19:return e.finish(12);case 20:r.innerHTML=n;case 21:case"end":return e.stop()}},e,this,[[4,8,12,20],[13,,15,19]])}));return function(t){return e.apply(this,arguments)}}();(function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a();case 2:return e=t.sent,t.next=5,a();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}})()()},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.main()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"This app is using MobileNet model with tfjs to predict objects from vide feed"))),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("div",{id:"x"},a.a.createElement("video",{id:"video"},"Video stream not available."),a.a.createElement("pre",{id:"predictions"}),a.a.createElement("canvas",{id:"canvas"}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,n){e.exports=n(183)},91:function(e,t,n){},95:function(e,t,n){}},[[86,2,1]]]);
//# sourceMappingURL=main.a640faf4.chunk.js.map