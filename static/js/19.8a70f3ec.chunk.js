(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{100:function(t,n,r){"use strict";t.exports=function t(n,r){if(n===r)return!0;if(n&&r&&"object"==typeof n&&"object"==typeof r){if(n.constructor!==r.constructor)return!1;var e,i,a;if(Array.isArray(n)){if((e=n.length)!=r.length)return!1;for(i=e;0!==i--;)if(!t(n[i],r[i]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if((e=(a=Object.keys(n)).length)!==Object.keys(r).length)return!1;for(i=e;0!==i--;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=e;0!==i--;){var o=a[i];if(!t(n[o],r[o]))return!1}return!0}return n!==n&&r!==r}},120:function(t,n,r){"use strict";var e=r(2),i=r(101),a=i.a?e.useLayoutEffect:e.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(e.useState)(null),n=t[0],r=t[1],i=Object(e.useState)(o),c=i[0],u=i[1],l=Object(e.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,r=n.x,e=n.y,i=n.width,a=n.height,o=n.top,c=n.left,l=n.bottom,s=n.right;u({x:r,y:e,width:i,height:a,top:o,left:c,bottom:l,right:s})}}))}),[]);return a((function(){if(n)return l.observe(n),function(){l.disconnect()}}),[n]),[r,c]}:function(){return[i.b,o]}},153:function(t,n,r){"use strict";r.d(n,"b",(function(){return f})),r.d(n,"a",(function(){return d}));var e=function(t){return t},i=1e-6;function a(t){return"translate("+t+",0)"}function o(t){return"translate(0,"+t+")"}function c(t){return function(n){return+t(n)}}function u(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(r){return+t(r)+n}}function l(){return!this.__axis}function s(t,n){var r=[],s=null,f=null,d=6,h=6,v=3,b="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,g=1===t||4===t?-1:1,m=4===t||2===t?"x":"y",p=1===t||3===t?a:o;function O(a){var o=null==s?n.ticks?n.ticks.apply(n,r):n.domain():s,O=null==f?n.tickFormat?n.tickFormat.apply(n,r):e:f,j=Math.max(d,0)+v,y=n.range(),x=+y[0]+b,M=+y[y.length-1]+b,k=(n.bandwidth?u:c)(n.copy(),b),w=a.selection?a.selection():a,A=w.selectAll(".domain").data([null]),S=w.selectAll(".tick").data(o,n).order(),R=S.exit(),z=S.enter().append("g").attr("class","tick"),F=S.select("line"),_=S.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(z),F=F.merge(z.append("line").attr("stroke","currentColor").attr(m+"2",g*d)),_=_.merge(z.append("text").attr("fill","currentColor").attr(m,g*j).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==w&&(A=A.transition(a),S=S.transition(a),F=F.transition(a),_=_.transition(a),R=R.transition(a).attr("opacity",i).attr("transform",(function(t){return isFinite(t=k(t))?p(t+b):this.getAttribute("transform")})),z.attr("opacity",i).attr("transform",(function(t){var n=this.parentNode.__axis;return p((n&&isFinite(n=n(t))?n:k(t))+b)}))),R.remove(),A.attr("d",4===t||2===t?h?"M"+g*h+","+x+"H"+b+"V"+M+"H"+g*h:"M"+b+","+x+"V"+M:h?"M"+x+","+g*h+"V"+b+"H"+M+"V"+g*h:"M"+x+","+b+"H"+M),S.attr("opacity",1).attr("transform",(function(t){return p(k(t)+b)})),F.attr(m+"2",g*d),_.attr(m,g*j).text(O),w.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each((function(){this.__axis=k}))}return O.scale=function(t){return arguments.length?(n=t,O):n},O.ticks=function(){return r=Array.from(arguments),O},O.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),O):r.slice()},O.tickValues=function(t){return arguments.length?(s=null==t?null:Array.from(t),O):s&&s.slice()},O.tickFormat=function(t){return arguments.length?(f=t,O):f},O.tickSize=function(t){return arguments.length?(d=h=+t,O):d},O.tickSizeInner=function(t){return arguments.length?(d=+t,O):d},O.tickSizeOuter=function(t){return arguments.length?(h=+t,O):h},O.tickPadding=function(t){return arguments.length?(v=+t,O):v},O.offset=function(t){return arguments.length?(b=+t,O):b},O}function f(t){return s(2,t)}function d(t){return s(3,t)}},176:function(t,n,r){"use strict";var e=r(26);n.a=function(t,n){var r,i;if(void 0===n){var a,o=Object(e.a)(t);try{for(o.s();!(a=o.n()).done;){var c=a.value;null!=c&&(void 0===r?c>=c&&(r=i=c):(r>c&&(r=c),i<c&&(i=c)))}}catch(d){o.e(d)}finally{o.f()}}else{var u,l=-1,s=Object(e.a)(t);try{for(s.s();!(u=s.n()).done;){var f=u.value;null!=(f=n(f,++l,t))&&(void 0===r?f>=f&&(r=i=f):(r>f&&(r=f),i<f&&(i=f)))}}catch(d){s.e(d)}finally{s.f()}}return[r,i]}},219:function(t,n,r){"use strict";r.r(n);var e=r(51),i=r(10),a=r(25),o=r(176),c=r(153),u=r(220),l=r(151),s=r(261),f=(r(115),r(100)),d=r.n(f),h=r(2),v=r(120),b=r(20),g=function(t,n){return Object(a.h)(t,"delta",n)},m=50,p=0,O=50,j=0;function y(t){var n=t.timeseries,r=t.statistic,f=t.lookback,d=Object(h.useRef)(),y=Object(v.a)(),x=Object(e.a)(y,2),k=x[0],w=x[1],A=w.width,S=w.height,R=Object.keys(n||{}).filter((function(t){return t<=Object(a.g)()})).slice(-f);return Object(h.useEffect)((function(){if(A){var t=Object(s.a)(d.current),f=A-p,h=S-O,v=Object(u.a)().domain(R).range([j,f]).paddingInner(A/1e3),b=Object(o.a)(R,(function(t){return g(null===n||void 0===n?void 0:n[t],r)})),y=Object(e.a)(b,2),x=y[0],k=y[1],w=Object(l.a)().domain([Math.min(0,x||0),Math.max(1,k||0)]).range([h,m]),z=Object(c.a)(v).tickSize(0).tickFormat((function(t){return Object(a.c)(t,"dd MMM")})),F=t.transition().duration(i.c),_=i.w[r];t.select(".x-axis").transition(F).style("transform","translate3d(0, ".concat(w(0),"px, 0)")).call(z).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,e){return g(null===n||void 0===n?void 0:n[t],r)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",_.color),t.selectAll(".bar").data(R).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return M(v(t),w(0),v.bandwidth(),0,5)}))})).transition(F).attr("d",(function(t){return M(v(t),w(0),v.bandwidth(),w(0)-w(g(null===n||void 0===n?void 0:n[t],r)),5)})).attr("fill",(function(t,n){return n<R.length-1?_.color+"90":_.color}));var C=t.selectAll(".label").data(R).join("text").attr("class","label").attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t){return Object(a.e)(g(null===n||void 0===n?void 0:n[t],r),_.format)}));C.transition(F).attr("fill",_.color).attr("y",(function(t){var e=g(null===n||void 0===n?void 0:n[t],r);return w(e)+(e<0?15:-6)})),C.append("tspan").attr("dy",(function(t){return"".concat(g(null===n||void 0===n?void 0:n[t],r)<0?1.2:-1.2,"em")})).attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t,e){if(0===e)return"";var i=g(null===n||void 0===n?void 0:n[R[e-1]],r);if(!i)return"";var o=g(null===n||void 0===n?void 0:n[t],r)-i;return"".concat(o>0?"+":"").concat(Object(a.e)(100*o/Math.abs(i),"%"))})).transition(F).attr("fill",_.color+"90")}}),[R,S,r,n,A]),Object(b.jsx)("div",{className:"DeltaBarGraph",ref:k,children:Object(b.jsxs)("svg",{ref:d,width:A,height:250,viewBox:"0 0 ".concat(A," ").concat(S),preserveAspectRatio:"xMidYMid meet",children:[Object(b.jsx)("g",{className:"x-axis"}),Object(b.jsx)("g",{className:"y-axis"})]})})}var x=function(t,n){return!n.forceRender&&(!(n.timeseries||!t.timeseries)||!(n.timeseries&&!t.timeseries)&&(!!d()(t.stateCode,n.stateCode)&&(!!d()(t.lookback,n.lookback)&&!!d()(t.statistic,n.statistic))))};function M(t,n,r,e,i){return i=Math.sign(e)*Math.min(Math.abs(e),i),["M ".concat(t," ").concat(n),"v ".concat(-e+i),"q 0 ".concat(-i," ").concat(Math.abs(i)," ").concat(-i),"h ".concat(r-2*Math.abs(i)),"q ".concat(Math.abs(i)," 0 ").concat(Math.abs(i)," ").concat(i),"v ".concat(e-i),"Z"].join(" ")}n.default=Object(h.memo)(y,x)},220:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var e=r(51),i=r(221),a=r(53),o=r(78);function c(){var t,n,r=Object(o.a)().unknown(void 0),u=r.domain,l=r.range,s=0,f=1,d=!1,h=0,v=0,b=.5;function g(){var r=u().length,e=f<s,a=e?f:s,o=e?s:f;t=(o-a)/Math.max(1,r-h+2*v),d&&(t=Math.floor(t)),a+=(o-a-t*(r-h))*b,n=t*(1-h),d&&(a=Math.round(a),n=Math.round(n));var c=Object(i.a)(r).map((function(n){return a+t*n}));return l(e?c.reverse():c)}return delete r.unknown,r.domain=function(t){return arguments.length?(u(t),g()):u()},r.range=function(t){var n,r;return arguments.length?(n=t,r=Object(e.a)(n,2),s=r[0],f=r[1],s=+s,f=+f,g()):[s,f]},r.rangeRound=function(t){var n,r;return n=t,r=Object(e.a)(n,2),s=r[0],f=r[1],s=+s,f=+f,d=!0,g()},r.bandwidth=function(){return n},r.step=function(){return t},r.round=function(t){return arguments.length?(d=!!t,g()):d},r.padding=function(t){return arguments.length?(h=Math.min(1,v=+t),g()):h},r.paddingInner=function(t){return arguments.length?(h=Math.min(1,t),g()):h},r.paddingOuter=function(t){return arguments.length?(v=+t,g()):v},r.align=function(t){return arguments.length?(b=Math.max(0,Math.min(1,t)),g()):b},r.copy=function(){return c(u(),[s,f]).round(d).paddingInner(h).paddingOuter(v).align(b)},a.b.apply(g(),arguments)}},221:function(t,n,r){"use strict";n.a=function(t,n,r){t=+t,n=+n,r=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+r;for(var e=-1,i=0|Math.max(0,Math.ceil((n-t)/r)),a=new Array(i);++e<i;)a[e]=t+e*r;return a}}}]);
//# sourceMappingURL=19.8a70f3ec.chunk.js.map