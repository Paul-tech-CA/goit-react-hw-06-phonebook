(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{2:function(e,t,n){e.exports={container:"App_container__3Rkav",label:"App_label__2e9iC",input:"App_input__25t8j",inputName:"App_inputName__3BQc_",list:"App_list__2LZNO",contact:"App_contact__3m4Vg",contactName:"App_contactName__3zocG",button:"App_button__nzzcF",buttonAdd:"App_buttonAdd__1ribj App_button__nzzcF"}},31:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n(7),i=n.n(r),o=(n(23),n(8)),s=n(2),l=n.n(s),b=n(6),u=n(5),m=n(15),d=n(16),j=n(18),p=n(17),O=n(1),h={name:"",number:""},f=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(u.a)({},h),e.onHandleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(b.a)({},a,c))},e.onHandleSubmit=function(t){t.preventDefault(),e.props.addContact(e.state),e.setState(Object(u.a)({},h))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(O.jsxs)("form",{className:l.a.contactForm,onSubmit:this.onHandleSubmit,children:[Object(O.jsx)("p",{className:l.a.inputName,children:" Name"}),Object(O.jsx)("label",{className:l.a.label,children:Object(O.jsx)("input",{type:"text",name:"name",className:l.a.input,value:t,onChange:this.onHandleChange})}),Object(O.jsx)("p",{className:l.a.inputName,children:" Number"}),Object(O.jsx)("label",{className:l.a.label,children:Object(O.jsx)("input",{type:"number",name:"number",className:l.a.input,value:n,onChange:this.onHandleChange})}),Object(O.jsx)("button",{className:l.a.buttonAdd,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),N=function(e){var t=e.id,n=e.name,a=e.number,c=e.onHandleRemove;return Object(O.jsxs)("li",{className:l.a.contact,children:[Object(O.jsxs)("p",{className:l.a.contactName,children:["- ",n,":"]}),Object(O.jsx)("p",{children:a}),Object(O.jsx)("button",{className:l.a.button,onClick:function(){return c(t)},children:"Delete"})]})},_=function(e){var t=e.contactList,n=e.onHandleRemove;return Object(O.jsx)("div",{className:l.a.contactsList,children:Object(O.jsx)("ul",{className:l.a.list,children:t.map((function(e){return Object(c.createElement)(N,Object(u.a)(Object(u.a)({},e),{},{key:e.id,onHandleRemove:n}))}))})})},x=function(e){var t=e.filter,n=e.onFilterHandleChange;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Find contacts by name"}),Object(O.jsx)("input",{type:"text",name:"filter",className:l.a.input,onChange:function(e){n(e.target.value)},value:t})]})},v=n(4),y=Object(v.b)("number/addNumber",(function(e){return{payload:Object(u.a)(Object(u.a)({},e),{},{id:Object(v.d)()})}})),C=Object(v.b)("number/deleteNumber"),A=Object(v.b)("number/filteredNumber"),g={deleteNumberByID:C,addNumber:y,filteredNumber:A},H=Object(o.b)((function(e){var t=e.contacts,n=t.number,a=t.filter,c=t.contactList;return{number:n,filter:a,filteredItems:c.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),items:c}}),g)((function(e){var t=e.addNumber,n=e.deleteNumberByID,a=e.filteredItems,c=e.items,r=e.filter,i=e.filteredNumber;return Object(O.jsxs)("div",{className:l.a.container,children:[Object(O.jsx)("h2",{children:" Phonebook "})," ",Object(O.jsx)(f,{addContact:function(e){c.some((function(t){return t.name===e.name}))?alert("This contact is already exist!! Try one more time, please!"):t(e)}}),Object(O.jsx)("h2",{children:" Contacts "}),Object(O.jsx)(x,{filter:r,onFilterHandleChange:i}),Object(O.jsx)(_,{contactList:a,onHandleRemove:n})]})})),k=n(3),L=n(13),w=Object(v.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(b.a)(a,y,(function(e,t){return[].concat(Object(L.a)(e),[t.payload])})),Object(b.a)(a,C,(function(e,t){return Object(L.a)(e.filter((function(e){return e.id!==t.payload})))})),a)),F=Object(v.c)("",Object(b.a)({},A,(function(e,t){return t.payload}))),R=Object(k.c)({contactList:w,filter:F}),S=Object(k.c)({contacts:R}),z=Object(v.a)({reducer:S,devTools:!1});i.a.render(Object(O.jsx)(o.a,{store:z,children:Object(O.jsx)(H,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.708d5f9e.chunk.js.map