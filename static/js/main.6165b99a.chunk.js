(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a.n(n),r=a(2),s=a(6),i=a(8),p=a(9),o=a(11),l=a(10),u=a(4),m=a(1),d=a.n(m),b=a(3),j=a.n(b),h=(a(16),a(0)),_=[{id:1,name:"Dumplings",price:11},{id:2,name:"Carrot",price:2},{id:3,name:"Eggs",price:7},{id:4,name:"Ice cream",price:4},{id:5,name:"Apple",price:3},{id:6,name:"Bread",price:4},{id:7,name:"Fish",price:4},{id:8,name:"Honey",price:14},{id:9,name:"Jam",price:12},{id:10,name:"Garlic",price:1}],O=Math.max.apply(Math,Object(u.a)(_.map((function(e){return e.price})))),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={goods:_,isStarted:!1,isReversed:!1,sortBy:null,maxPrice:O},e.start=function(){e.setState((function(e){return{isStarted:!e.isStarted}}))},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByName=function(){e.setState({sortBy:"name"})},e.sortByPrice=function(){e.setState({sortBy:"price"})},e.reset=function(){e.setState({isReversed:!1,sortBy:null,maxPrice:20})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.isStarted,n=t.goods,c=t.maxPrice,i=t.isReversed,p=t.sortBy,o=n.filter((function(e){return e.price<=c}));p&&o.sort((function(e,t){switch(p){case"name":return e.name.localeCompare(t.name);case"price":return e.price-t.price;default:return 1}})),i&&o.reverse();var l=n.map((function(e){return e.price}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App__heading",children:"Goods"}),a||Object(h.jsx)("button",{className:"App__button",type:"button",onClick:this.start,children:"start"}),a&&Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"App__buttons",children:[Object(h.jsx)("button",{className:j()("App__button",{"App__button--active":i}),type:"button",onClick:this.reverse,children:"reverse"}),Object(h.jsx)("button",{className:j()("App__button",{"App__button--active":"name"===p}),type:"button",onClick:this.sortByName,children:"sort alphabetically"}),Object(h.jsx)("button",{className:j()("App__button",{"App__button--active":"price"===p}),type:"button",onClick:this.sortByPrice,children:"sort by price"}),Object(h.jsx)("button",{className:"App__button",type:"button",onClick:this.reset,children:"reset"})]}),Object(h.jsxs)("div",{className:"App__price-filter",children:[Object(h.jsx)("input",{className:"App__max-price",type:"range",name:"maxPrice",step:1,min:Math.min.apply(Math,Object(u.a)(l)),max:Math.max.apply(Math,Object(u.a)(l)),value:c,onChange:function(t){var a=t.target,n=a.name,c=a.value;e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},n,c))}))}}),Object(h.jsx)("span",{children:"Max price: ".concat(c)})]}),Object(h.jsx)("ul",{className:"App__list",children:o.map((function(e){return Object(h.jsxs)("li",{className:"App__item",children:[Object(h.jsx)("h2",{className:"App__good-name",children:e.name}),Object(h.jsx)("p",{className:"App__good-price",children:"price: ".concat(e.price)})]},"good.id")}))})]})]})}}]),a}(d.a.Component),x=v;c.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6165b99a.chunk.js.map