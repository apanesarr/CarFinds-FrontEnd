(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{167:function(e,t,a){e.exports=a(320)},172:function(e,t,a){},173:function(e,t,a){},302:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),i=a.n(c),o=(a(172),a(22)),l=a(23),s=a(24),u=a(25),d=a(26),h=a(21),m=(a(173),a(330)),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSearchChange=function(e,t){var n=t.value;a.setState({isLoading:!0,value:n}),setTimeout((function(){a.state.value.length<1&&a.setState({isLoading:!1}),a.setState({isLoading:!1}),a.handleSubmit()}),500)},a.state={isLoading:!1,value:""},a.handleSearchChange=a.handleSearchChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(){this.props.callbackFromParent(this.state.value)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.value;return r.a.createElement("div",{className:"searchbar"},r.a.createElement("h1",{className:"logo"},"CarFinds"),r.a.createElement("div",{className:"searchbar-left"},r.a.createElement(m.a,{loading:t,showNoResults:!1,onSearchChange:this.handleSearchChange,value:a})))}}]),t}(n.Component),p=a(331),b=a(159),f=a(333),v=a(329);a(302);var E=function(e){return r.a.createElement(p.a.Group,{centered:!0},e.isLoaded?e.cars.map((function(e){return r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"center-cropped",src:e.img}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Header,{className:"txt"},e.name),r.a.createElement(p.a.Description,null,r.a.createElement("b",null,"Price: ")," ",e.price,r.a.createElement("br",null),r.a.createElement("b",null,"Mileage: "),e.mileage)),r.a.createElement("a",{href:e.link},r.a.createElement(p.a.Content,{className:"card-footer",extra:!0},r.a.createElement("font",{color:"Kijiji"===e.site?"blue":"red"}," ",e.site))))})):r.a.createElement(f.a,{active:!0,inverted:!0},r.a.createElement(v.a,{inverted:!0},"Loading")))},y=a(336),w=a(332);var j=function(e){return e.count>1&&console.log("Greater then 1"),r.a.createElement("div",null,r.a.createElement(y.a,{maxWidth:560},e.count>1?r.a.createElement(w.a,{boundaryRange:0,onPageChange:function(t,a){var n=a.activePage;return e.callbackFromParent(n)},defaultActivePage:e.page,ellipsisItem:null,firstItem:null,lastItem:null,siblingRange:1,totalPages:e.count}):null),r.a.createElement(y.a,{minWidth:561},e.count>1?r.a.createElement(w.a,{boundaryRange:0,onPageChange:function(t,a){var n=a.activePage;return e.callbackFromParent(n)},defaultActivePage:e.page,totalPages:e.count,ellipsisItem:null}):null))},k="https://carfinds.pythonanywhere.com/api/v1/cars/?page=",O="Token 282bc98780517b27f0154742eddb58ae47c9dbd4",S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).pageUpdate=function(e){a.setState({newpage:e})},a.state={cars:[],isLoaded:!1,count:0,page:1,newpage:1},a.getData=a.getData.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.state.newpage,this.props.query)}},{key:"componentDidUpdate",value:function(e,t){this.state.query!==this.props.query&&(this.setState({query:this.props.query,newpage:1}),this.getData(this.state.page,this.props.query)),this.state.newpage!==this.state.page&&(this.getData(this.state.newpage,this.state.query),window.scrollTo(0,0))}},{key:"getData",value:function(e,t){var a=this;fetch(k+e+"&search="+t,{headers:{authorization:O}}).then((function(e){return e.json()})).then((function(t){a.setState({isLoaded:!0,cars:t.results,page:e,count:t.count})}),(function(e){a.setState({isLoaded:!1,error:e})}))}},{key:"render",value:function(){var e,t=this.state,a=t.cars,n=t.isLoaded,c=t.count,i=t.page;return c>0&&n||!n?e=r.a.createElement(E,{col:!0,isLoaded:n,cars:a}):0===c&&(e=r.a.createElement("h4",null,"No Results Found. ")),r.a.createElement("div",null,r.a.createElement("div",{style:{paddingTop:10}},e),r.a.createElement("footer",{style:{padding:30}},r.a.createElement(j,{callbackFromParent:this.pageUpdate,page:i,count:Math.round(c/24)})))}}]),t}(n.Component),P=(a(319),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).searchUpdate=function(e){a.setState({query:e})},a.state={query:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{callbackFromParent:this.searchUpdate}),r.a.createElement(S,{query:e}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[167,1,2]]]);
//# sourceMappingURL=main.b6db9d09.chunk.js.map