(this["webpackJsonpweko-facet-search"]=this["webpackJsonpweko-facet-search"]||[]).push([[0],{69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(10),r=a.n(s),i=a(36),o=a(37),l=a(13),u=a(42),h=a(41),d=(a(17),a(18),a(28)),b=a(16),f=a(71),p=a(40),j=a(4);var g=function(e){for(var t=e.values,a=e.name,n=e.labels,c=window.location.search.replace(",","%2C")||"?",s=window.location.search.substring(1).split("&"),r=0;r<s.length;r++)s[r]=decodeURIComponent(s[r]);var i=[],o=[];return t&&t.map((function(e,t){var c={label:(n[e.key]||e.key)+"("+e.doc_count+")",value:e.key};o.push(c);var r=a+"="+e.key;-1!=s.indexOf(r)&&i.push(c)})),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"select-container",children:Object(j.jsx)(p.a,{defaultValue:i,isMulti:!0,name:"Facet_Search",onChange:function(e){!function(e){var t="";if(c.indexOf("&")>=0){for(var n=c.split("&"),s=0;s<n.length;s++)n[s].indexOf(encodeURIComponent(a)+"=")<0&&(t+="&"+n[s]);t=t.substring(1)}""!=t&&(c=t),e.map((function(e,t){var n=encodeURIComponent(a)+"="+encodeURIComponent(e.value);c+="&"+n})),c=(c=c.replace("q=0","q=")).replace("search_type=2","search_type=0"),c+="&is_facet_search=true",window.location.href="/search"+c}(e)},options:o,className:"basic-multi-select",classNamePrefix:"select"})})})};a(39);function v(e){return"Temporal"===e}for(var O=function(e){var t=e.item,a=e.nameshow,c=e.name,s=e.key,r=e.labels,i=window.location.search.replace(",","%2C").indexOf(encodeURIComponent(c))>=0,o=Object(n.useState)(i),l=Object(b.a)(o,2),u=l[0],h=l[1];return Object(j.jsxs)("div",{className:"panel panel-default",children:[Object(j.jsxs)("div",{className:"panel-heading clearfix",children:[Object(j.jsx)("h3",{className:"panel-title pull-left",children:a}),Object(j.jsxs)("a",{className:"pull-right",onClick:function(){return h(!u)},children:[!u&&Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"glyphicon glyphicon-chevron-right"})}),u&&Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"glyphicon glyphicon-chevron-down"})})]})]}),Object(j.jsx)(f.a,{isOpen:u,children:Object(j.jsxs)("div",{className:"panel-body index-body",children:[!v(c)&&Object(j.jsx)(g,{values:t.buckets,name:c,labels:r}),v(c)&&!1]})})]},s)},m={},k=document.getElementsByClassName("body-facet-search-label"),y=0;y<k.length;y++)m[k[y].id]=k[y].value;var _=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={is_enable:!0,list_title:{},list_facet:{},list_order:{}},n.getTitleAndOrder=n.getTitleAndOrder.bind(Object(l.a)(n)),n.get_facet_search_list=n.get_facet_search_list.bind(Object(l.a)(n)),n.convertData=n.convertData.bind(Object(l.a)(n)),n.getUrlVars=n.getUrlVars.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"getTitleAndOrder",value:function(){var e=this,t={},a={};Object(d.a)("/facet-search/get-title-and-order",{method:"POST"}).then((function(e){return e.json()})).then((function(n){n.status&&(t=n.data.titles,a=n.data.order),e.setState({list_title:t}),e.setState({list_order:a})}))}},{key:"get_facet_search_list",value:function(){var e=this,t=new URLSearchParams(window.location.search),a="/api/records/",n=this.getUrlVars();n.search_type&&"2"===String(n.search_type)&&(a="/api/index/"),Object(d.a)(a+"?"+t.toString()).then((function(e){return e.json()})).then((function(t){n.search_type&&"2"===String(n.search_type)?function(){var a=t&&t.aggregations&&t.aggregations.path&&t.aggregations.path.buckets&&t.aggregations.path.buckets[0]?t.aggregations.path.buckets[0]:{},n={};console.log("buckets: ",a);for(var c=function(e){0==e&&Object.keys(a[0]).map((function(e,t){"object"==typeof a[0][e]&&(n[e]={buckets:[]})})),Object.keys(a[e]).map((function(t,c){if("object"==typeof a[e][t]&&n[t]){var s=n[t].buckets,r=a[e][t][t]?a[e][t][t].buckets:a[e][t].buckets;r=r||[];for(var i=0;i<r.length;i++){for(var o=!1,l=0;l<s.length;l++)if(s[l].key==r[i].key){s[l].doc_count=s[l].doc_count+r[i].doc_count,o=!o;break}o||s.push({key:r[i].key,doc_count:r[i].doc_count})}}}))},s=0;s<a.length;s++)c(s);e.convertData(n)}():e.convertData(t&&t.aggregations?t.aggregations:{})}))}},{key:"getUrlVars",value:function(){var e={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,a,n){e[a]=n})),e}},{key:"convertData",value:function(e){var t={},a=this.state.list_order;e&&Object.keys(a).map((function(n,c){t[a[n]]={buckets:[]},Object.keys(e).map((function(c,s){if(a[n]==c){var r=e[c][c]?e[c][c]:e[c],i=r.key&&r.key.hasOwnProperty("buckets");(i=r.hasOwnProperty("buckets")||i)&&(t[c]=r[c]?r[c]:r)}}))})),this.setState({list_facet:t})}},{key:"componentDidMount",value:function(){this.getTitleAndOrder(),this.get_facet_search_list()}},{key:"render",value:function(){var e=this.state,t=e.is_enable,a=e.list_title,n=e.list_facet;return console.log("list_facet: ",n),Object(j.jsx)("div",{children:t&&Object(j.jsx)("div",{className:"facet-search break-word",children:Object.keys(n).map((function(e,t){var c=n[e],s=a[e];return Object(j.jsx)(O,{item:c,nameshow:s,name:e,labels:m},t)}))})})}}]),a}(c.a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("app-facet-search"))}},[[69,1,2]]]);
//# sourceMappingURL=main.b488cd80.chunk.js.map