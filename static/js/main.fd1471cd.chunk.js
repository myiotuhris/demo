(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{14:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(22),a=n.n(r),s=(n(29),n(12)),o=n(2),j=(n(14),n(8)),u=n(9),l=n(11),d=n(10),b=n(0),h=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={current:0,leftDisabled:!0,rightDisabled:!1,limit:10},c}return Object(u.a)(n,[{key:"increment",value:function(){if(!this.state.rightDisabled){var e=this.state.current+1;this.setState({leftDisabled:!1,current:e,rightDisabled:e===this.state.limit})}}},{key:"decrement",value:function(){if(!this.state.leftDisabled){var e=this.state.current-1;this.setState({current:e,leftDisabled:0===e,rightDisabled:!1})}}},{key:"render",value:function(){var e=this,t=this.state.rightDisabled?"is-disabled":"button-operation",n=this.state.leftDisabled?"is-disabled":"button-operation";return Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsx)("button",{className:n,onClick:function(){return e.decrement()},children:"-"}),Object(b.jsx)("h3",{children:this.state.current}),Object(b.jsx)("button",{className:t,onClick:function(){return e.increment()},children:"+"})]})}}]),n}(c.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){x()}},{key:"render",value:function(){return Object(b.jsx)("div",{id:"ct",children:"Current Time:"})}}]),n}(c.Component);function x(){if(null!=document.getElementById("ct")){var e=new Date,t=e.getHours(),n=t%12,c=e.getMinutes(),i=e.getSeconds();c<10&&(c="0"+c),i<10&&(i="0"+i),n<10&&(n="0"+n);var r=n+":"+c+":"+i+" ";r+=t>11?"PM":"AM",document.getElementById("ct").innerHTML=r,setTimeout(x,1e3)}}var f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={data:[],isLoaded:!1},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole").then((function(e){return e.json()})).then((function(t){e.setState({data:t,isLoaded:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=this.state.data;return this.state.isLoaded?(t&&(e=t.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"namecard",children:[e.first," ",e.last]})},t)}))),Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:e})})})):Object(b.jsx)("span",{id:"loader",children:"Loading....."})}}]),n}(c.Component),p=n(18),m=n.n(p),v=n(23),g=n(13);function y(){var e=Object(c.useState)(0),t=Object(g.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)("INR"),a=Object(g.a)(r,2),s=a[0],o=a[1],j=Object(c.useState)("USD"),u=Object(g.a)(j,2),l=u[0],d=u[1],h=Object(c.useState)(["EUR","USD","XCD","GEL","HTG","INR","ILS","KZT","KWD","LSL"]),O=Object(g.a)(h,1)[0],x=Object(c.useState)(0),f=Object(g.a)(x,2),p=f[0],y=f[1],C=Object(c.useMemo)((function(){return O}),[O,l]),k=Object(c.useMemo)((function(){return O}),[O,s]),D=function(){var e=Object(v.a)(m.a.mark((function e(t){var c,i,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),+n>=0&&s&&l){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,fetch("https://free.currconv.com/api/v7/convert?q=".concat(s,"_").concat(l,"&compact=ultra&apiKey=dd8e835c3d0a875afe5e"));case 6:return c=e.sent,e.next=9,c.json();case 9:i=e.sent,r=i["".concat(s,"_").concat(l)],console.log(i),y(n*r);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{style:{marginLeft:"25px"},children:[Object(b.jsxs)("form",{onSubmit:D,children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{style:{paddingRight:"30px"},children:["Enter a value in ",s]}),Object(b.jsx)("input",{style:{paddingLeft:"10px",width:"70px"},value:n,onChange:function(e){return i(e.target.value)}})]}),Object(b.jsxs)("div",{style:{marginTop:"20px"},children:[Object(b.jsx)("label",{style:{paddingRight:"30px"},children:"Convert From "}),Object(b.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:C.map((function(e){return Object(b.jsx)("option",{children:e},e)}))})]}),Object(b.jsxs)("div",{style:{marginTop:"20px"},children:[Object(b.jsx)("label",{style:{paddingRight:"30px"},children:"Convert To "}),Object(b.jsx)("select",{value:l,onChange:function(e){return d(e.target.value)},children:k.map((function(e){return Object(b.jsx)("option",{children:e},e)}))})]}),Object(b.jsx)("button",{style:{marginTop:"20px",alignItems:"center"},type:"submit",children:"Convert"})]}),Object(b.jsxs)("div",{style:{textAlign:"center"},children:[n," ",s," is ",p.toFixed(2)," ",l]})]})}function C(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a,{exact:!0,path:"/demo",children:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/home",children:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/time",children:Object(b.jsx)(P,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/data",children:Object(b.jsx)(S,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/currency",children:Object(b.jsx)(w,{})})]})})}function k(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Welcome to the main page"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/home",children:"Go to Page 1"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/time",children:"Go to Page 2"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/data",children:"Go to Page 3"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/currency",children:"Go to Page 4"})})]})]})}function D(){var e=Object(o.e)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return e.push("/time")},style:{float:"right",width:"100px"},children:"Page 2 "}),Object(b.jsx)("h2",{children:"Page 1: A Simple Counter Counting From 0 to 10"}),Object(b.jsx)(h,{})]})}function P(){var e=Object(o.e)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return e.push("/home")},style:{width:"100px"},children:"Page 1"}),Object(b.jsx)("button",{onClick:function(){return e.push("/data")},style:{float:"right",width:"100px"},children:"Page 3"}),Object(b.jsx)("h2",{children:"Page 2: Current Time"}),Object(b.jsx)(O,{})]})}function S(){var e=Object(o.e)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return e.push("/time")},style:{width:"100px"},children:"Page 2"}),Object(b.jsx)("button",{onClick:function(){return e.push("/currency")},style:{float:"right",width:"100px"},children:"Page 4"}),Object(b.jsx)("h2",{children:"Page 3: Getting a List of Names From an API"}),Object(b.jsx)(f,{})]})}function w(){var e=Object(o.e)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return e.push("/data")},style:{width:"100px"},children:"Page 3"}),Object(b.jsx)("button",{onClick:function(){return e.push("/home")},style:{float:"right",width:"100px"},children:"Page 1"}),Object(b.jsx)("h2",{children:"Page 4: Currency Converter"}),Object(b.jsx)(y,{})]})}var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),L()}},[[37,1,2]]]);
//# sourceMappingURL=main.fd1471cd.chunk.js.map