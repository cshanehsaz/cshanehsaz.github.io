(this.webpackJsonpcomcast=this.webpackJsonpcomcast||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},27:function(e){e.exports=JSON.parse('{"base":{"Base":11.4648141},"video":{"None":0,"Basic":17.4724972,"Expanded":7.2906014,"Extra":41.4608409,"High BS":56.6553723,"High digital":71.956462,"Low BS":18.1568905,"Low digital":42.8201379,"Other":5.8734897},"cdv":{"None":0,"Unlimited":16.2778717,"Other":24.5758231},"speedtier":{"Tier 0":0,"Tier 1":9.5720117,"Tier 2":13.8752733,"Tier 3":22.0612104,"Tier 4":29.6222454,"Tier 5":37.530416,"Tier 6":46.861252,"Tier 7":47.1844112,"Tier 8":61.0957438},"xh":{"None":0,"Other":30.3621601},"competitor":{"ATT":0,"CenturyLink":8.0128863,"Frontier":14.3444107,"Verizon":8.6858662},"division":{"Northeast":0,"Central":8.3501859,"West":3.0777658},"promotier":{"None":0,"p1":5.3826947,"p2":25.6950289,"p3":37.2501511}}')},29:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a(0),n=a.n(i),c=a(7),o=a.n(c),s=(a(21),a(14)),d=a(8),l=a(9),u=a(4),h=a(11),p=a(10),j=(a(22),a(6)),b=(a(23),a(15)),f=a.n(b),O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={series:r.props.series,options:{chart:{type:"bar",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},title:{text:"Dollar Value by Product"},xaxis:{categories:["MRC"]},tooltip:{y:{formatter:function(e){return"$"+e}}},fill:{opacity:1},legend:{position:"bottom",horizontalAlign:"center",offsetX:0}}},r}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"mixed-chart",children:Object(r.jsx)(f.a,{options:this.state.options,series:this.state.series,type:"bar",width:"800",height:"200"})})})})}}]),a}(n.a.Component),m=function(e){Object(h.a)(i,e);var t=Object(p.a)(i);function i(e){var r;return Object(d.a)(this,i),(r=t.call(this,e)).state={baseProduct:"Base",videoProduct:"Basic",cdvProduct:"Unlimited",speedtierProduct:"Tier 4",xhProduct:"None",competitorProduct:"Verizon",divisionProduct:"Northeast",promotierProduct:"None",data:a(27),loaded:!1,chartData:[],total:0},r.setProduct=r.setProduct.bind(Object(u.a)(r)),r.findTotal=r.findTotal.bind(Object(u.a)(r)),r.createChartData=r.createChartData.bind(Object(u.a)(r)),r.findProductValue=r.findProductValue.bind(Object(u.a)(r)),r}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"componentDidUpdate",value:function(){this.state.loaded||this.setState({loaded:!0})}},{key:"setProduct",value:function(e){var t;this.setState((t={},Object(s.a)(t,e.target.parentNode.parentNode.id+"Product",e.target.innerHTML),Object(s.a)(t,"loaded",!1),t))}},{key:"mapTypeName",value:function(e){switch(e){case"speedtier":return"Speed Tier";case"cdv":return"CDV";case"xh":return"XH";case"promotier":return"Promo Tier";default:return this.capitalizeWord(e)}}},{key:"capitalizeWord",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"findProductValue",value:function(e){return this.state.data[e][this.state[e+"Product"]]}},{key:"findTotal",value:function(){var e=this,t=this.state.data,a=0;return Object.keys(t).map((function(t){return a+=e.findProductValue(t)})),a}},{key:"createChartData",value:function(){var e=this,t=this.state.data,a=[];return Object.keys(t).map((function(t){return a.push({name:t,data:[e.findProductValue(t).toFixed(2)]})})),a}},{key:"render",value:function(){var e=this,t=this.state,a=t.data;return t.loaded?Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("p",{children:"Comcast Product Value Breakdown"}),Object(r.jsx)("div",{className:"dropdown-container",children:Object.keys(a).map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(j.a,{className:"dropdown",id:t,children:[Object(r.jsx)(j.a.Toggle,{variant:"success",id:"dropdown-basic",style:{backgroundColor:"gainsboro",color:"black",borderColor:"white"},children:e.mapTypeName(t)}),Object(r.jsx)(j.a.Menu,{children:Object.keys(a[t]).map((function(t){return Object(r.jsx)(j.a.Item,{onClick:e.setProduct,children:t},t)}))})]}),Object(r.jsxs)("div",{className:"dropdown-labels",children:[Object(r.jsxs)("p",{style:{margin:0},children:[" ",e.state[t+"Product"]," "]}),Object(r.jsxs)("p",{style:{margin:0},children:[" $",e.findProductValue(t).toFixed(2)]}),Object(r.jsxs)("p",{style:{marginTop:0},children:[" ",(e.findProductValue(t)/e.findTotal()*100).toFixed(0),"% "]})]})]},t)}))}),Object(r.jsx)("div",{style:{borderTop:"solid"},children:Object(r.jsxs)("p",{children:["Expected Price: $",this.findTotal().toFixed(2)]})}),Object(r.jsx)("div",{className:"chart",children:Object(r.jsx)(O,{series:this.createChartData(),total:this.findTotal()})})]})}):Object(r.jsx)("div",{})}}]),i}(n.a.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),i(e),n(e),c(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),x()}},[[29,1,2]]]);
//# sourceMappingURL=main.fe532f54.chunk.js.map