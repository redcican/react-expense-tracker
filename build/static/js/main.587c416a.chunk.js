(this.webpackJsonpexpense_tracker=this.webpackJsonpexpense_tracker||[]).push([[0],{329:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(21),i=a(377),u=a(83),m=a(48),s=a(371),p=a(373),d=a(374),f=a(39),E=a(154),b=a(368),y=Object(b.a)((function(){return{income:{borderBottom:"10px solid rgba(0,255,0,0.5)"},expense:{borderBottom:"10px solid rgba(255,0,0,0.5)"}}})),g=a(49),O=function(e,t){var a;return"DELETE_TRANSACTION"===t.type?(a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a):"ADD_TRANSACTION"===t.type?(a=[t.payload].concat(Object(g.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a):e},v=JSON.parse(localStorage.getItem("transactions"))||[],j=Object(n.createContext)(v),h=function(e){var t=e.children,a=Object(n.useReducer)(O,v),c=Object(m.a)(a,2),o=c[0],l=c[1],i=o.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return r.a.createElement(j.Provider,{value:{deleteTransaction:function(e){l({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){l({type:"ADD_TRANSACTION",payload:e})},transactions:o,balance:i}},t)},x=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],C=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],T=[{type:"Business",amount:0,color:x[0]},{type:"Investments",amount:0,color:x[1]},{type:"Extra income",amount:0,color:x[2]},{type:"Deposits",amount:0,color:x[3]},{type:"Lottery",amount:0,color:x[4]},{type:"Gifts",amount:0,color:x[5]},{type:"Salary",amount:0,color:x[6]},{type:"Savings",amount:0,color:x[7]},{type:"Rental income",amount:0,color:x[8]}],N=[{type:"Bills",amount:0,color:C[0]},{type:"Car",amount:0,color:C[1]},{type:"Clothes",amount:0,color:C[2]},{type:"Travel",amount:0,color:C[3]},{type:"Food",amount:0,color:C[4]},{type:"Shopping",amount:0,color:C[5]},{type:"House",amount:0,color:C[6]},{type:"Entertainment",amount:0,color:C[7]},{type:"Phone",amount:0,color:C[8]},{type:"Pets",amount:0,color:C[9]},{type:"Other",amount:0,color:C[10]}],I=function(e){T.forEach((function(e){return e.amount=0})),N.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(j).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),r="Income"===e?T:N;console.log({transactionsPerType:t,total:a,categories:r}),t.forEach((function(e){var t=r.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var c=r.filter((function(e){return e.amount>0}));return[a,{datasets:[{data:c.map((function(e){return e.amount})),backgroundColor:c.map((function(e){return e.color}))}],labels:c.map((function(e){return e.type}))}]},k=function(e){var t=e.title,a=y(),n=I(t),c=Object(m.a)(n,2),o=c[0],l=c[1];return r.a.createElement(s.a,{className:"Income"===t?a.income:a.expense},r.a.createElement(p.a,{title:t}),r.a.createElement(d.a,null,r.a.createElement(f.a,{variant:"h5"},"$",o),r.a.createElement(E.Doughnut,{data:l})))},S=a(390),w=Object(b.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"20px 0"}}})),A=a(10),B=a(378),D=a(394),_=a(391),P=a(382),R=a(396),F=a(383),H=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),r=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[r,a,n].join("-")},J=Object(b.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"}}})),L=a(129),W=a(393),$=a(392),M=Object(b.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),G=function(e){var t=e.open,a=e.setOpen,n=M(),c=function(e,t){"clickaway"!==t&&a(!1)};return r.a.createElement("div",{className:n.root},r.a.createElement(W.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:3e3,onClose:c},r.a.createElement($.a,{onClose:c,severity:"success",elevation:6,variant:"filled"},"Transaction successfully created.")))},z={amount:"",category:"",type:"Income",date:H(new Date)},U=function(){var e=J(),t=Object(n.useState)(z),a=Object(m.a)(t,2),c=a[0],o=a[1],u=Object(n.useContext)(j).addTransaction,s=Object(l.useSpeechContext)().segment,p=Object(n.useState)(!1),d=Object(m.a)(p,2),E=d[0],b=d[1],y=function(){if(!Number.isNaN(Number(c.amount))&&c.date.includes("-")){var e=Object(A.a)(Object(A.a)({},c),{},{amount:Number(c.amount),id:Object(L.a)()});e.amount&&e.category&&(b(!0),u(e)),o(z)}};Object(n.useEffect)((function(){if(s){if("add_expense"===s.intent.intent)o(Object(A.a)(Object(A.a)({},c),{},{type:"expense"}));else if("add_incomes"===s.intent.intent)o(Object(A.a)(Object(A.a)({},c),{},{type:"Income"}));else{if(s.isFinal&&"create_transaction"===s.intent.intent)return y();if(s.isFinal&&"cancel_transaction"===s.intent.intent)return o(z)}s.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":o(Object(A.a)(Object(A.a)({},c),{},{amount:e.value}));break;case"category":T.map((function(e){return e.type})).includes(t)?o(Object(A.a)(Object(A.a)({},c),{},{type:"Income",category:t})):N.map((function(e){return e.type})).includes(t)&&o(Object(A.a)(Object(A.a)({},c),{},{type:"Expense",category:t}));break;case"date":o(Object(A.a)(Object(A.a)({},c),{},{date:e.value}))}})),s.isFinal&&c.amount&&c.category&&c.type&&c.date&&y()}}),[s]);var g="Income"===c.type?T:N;return r.a.createElement(i.a,{container:!0,spacing:2},r.a.createElement(G,{open:E,setOpen:b}),r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(f.a,{align:"center",variant:"subtitle2"},s&&s.words.map((function(e){return e.value})).join(" "))),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0},r.a.createElement(D.a,null,"Type"),r.a.createElement(_.a,{value:c.type,onChange:function(e){return o(Object(A.a)(Object(A.a)({},c),{},{type:e.target.value}))}},r.a.createElement(P.a,{value:"Income"},"Income"),r.a.createElement(P.a,{value:"Expense"},"Expense")))),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0},r.a.createElement(D.a,null,"Category"),r.a.createElement(_.a,{value:c.category,onChange:function(e){return o(Object(A.a)(Object(A.a)({},c),{},{category:e.target.value}))}},g.map((function(e){return r.a.createElement(P.a,{key:e.type,value:e.type},e.type)}))))),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement(R.a,{type:"number",label:"Amount",fullWidth:!0,value:c.amount,onChange:function(e){return o(Object(A.a)(Object(A.a)({},c),{},{amount:e.target.value}))}})),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement(R.a,{type:"date",label:"Date",fullWidth:!0,value:c.date,onChange:function(e){return o(Object(A.a)(Object(A.a)({},c),{},{date:H(e.target.value)}))}})),r.a.createElement(F.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:y},"Create"))},V=a(381),Y=a(384),q=a(333),K=a(385),Q=a(397),X=a(387),Z=a(388),ee=a(376),te=a(386),ae=a(389),ne=a(85),re=a(84),ce=Object(b.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:ne.a[500]},avatarExpense:{color:e.palette.getContrastText(re.a[500]),backgroundColor:re.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),oe=function(){var e=ce(),t=Object(n.useContext)(j),a=t.deleteTransaction,c=t.transactions;return r.a.createElement(V.a,{dense:!1,className:e.list},c.map((function(t){return r.a.createElement(Y.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,key:t.id},r.a.createElement(q.a,null,r.a.createElement(K.a,null,r.a.createElement(Q.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense},r.a.createElement(te.a,null))),r.a.createElement(X.a,{primary:t.category,secondary:"$".concat(t.amount," - ").concat(t.date)}),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{edge:"end","arial-label":"delete",onClick:function(){return a(t.id)}},r.a.createElement(ae.a,null)))))})))},le=Math.round(Math.random()),ie=function(){return r.a.createElement("div",{style:{textAlign:"center",padding:"0 10%"}},"Try saying: ",r.a.createElement("br",null),"Add ",le?"Income ":"Expense ","for ",le?"$100 ":"$50 ","in Category ",le?"Business ":"House ","for ",le?"Monday ":"Tuesday ")},ue=function(){var e=w(),t=Object(n.useContext)(j).balance;return r.a.createElement(s.a,{className:e.root},r.a.createElement(p.a,{title:"Expense Tracker",subheader:"Powered by Speechly"}),r.a.createElement(d.a,null,r.a.createElement(f.a,{align:"center",variant:"h5"},"Total Balance $",t),r.a.createElement(f.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"}},r.a.createElement(ie,null)),r.a.createElement(S.a,{className:e.divider}),r.a.createElement(U,null),r.a.createElement(d.a,{className:e.cartContent},r.a.createElement(i.a,{container:!0,spacing:2},r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(oe,null))))))},me=a(20),se=Object(b.a)((function(e){return{desktop:Object(me.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(me.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(me.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(me.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),pe=function(){var e=se(),t=Object(l.useSpeechContext)().speechState,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t===l.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),r.a.createElement("div",null,r.a.createElement(i.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"}},r.a.createElement(i.a,{item:!0,xs:12,sm:4,className:e.mobile},r.a.createElement(k,{title:"Income"})),r.a.createElement(i.a,{ref:a,item:!0,xs:12,sm:3,className:e.main},r.a.createElement(ue,null)),r.a.createElement(i.a,{item:!0,xs:12,sm:4,className:e.desktop},r.a.createElement(k,{title:"Income"})),r.a.createElement(i.a,{item:!0,xs:12,sm:4,className:e.last},r.a.createElement(k,{title:"Expense"})),r.a.createElement(u.PushToTalkButtonContainer,null,r.a.createElement(u.PushToTalkButton,null),r.a.createElement(u.ErrorPanel,null))))};a(329);o.a.render(r.a.createElement(l.SpeechProvider,{appId:"1ae648ff-5927-45fc-8458-7c7e2c1fe6b7",language:"en-US"},r.a.createElement(h,null,r.a.createElement(pe,null))),document.getElementById("root"))}},[[330,1,2]]]);
//# sourceMappingURL=main.587c416a.chunk.js.map