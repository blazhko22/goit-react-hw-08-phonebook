"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[389],{3389:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var a=t(2791),r=t(8687),c=t(5036),s="ContactsItem_item__pedOi",i="ContactsItem_button__uPo7U",o=t(184),u=function(n){var e=n.name,t=n.number,a=n.phone,r=n.onClick;return(0,o.jsxs)("li",{className:s,children:[(0,o.jsxs)("p",{children:[e,": \xa0",t||a]}),(0,o.jsx)("button",{type:"button",className:i,onClick:r,children:"Remove"})]})},l="ContactList_list__csErn",m=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))},_=(0,r.$j)((function(n){var e=n.contacts,t=e.items,a=e.filter,r=e.loading;return{contacts:m(t,a),isLoading:r}}),(function(n){return{onDeleteContact:function(e){return n((0,c.GK)(e))}}}))((function(n){var e=n.contacts,t=n.onDeleteContact,s=n.isLoading,i=(0,r.I0)();return(0,a.useEffect)((function(){return i((0,c.yF)())}),[i]),(0,o.jsx)(o.Fragment,{children:s?(0,o.jsx)("h1",{style:{textAlign:"center",marginTop:20},children:"Loading..."}):(0,o.jsx)("ul",{className:l,children:e.map((function(n){var e=n.id,a=n.name,r=n.number,c=n.phone;return(0,o.jsx)(u,{name:a,number:r||c,onClick:function(){return t(e)}},e)}))})})})),f=t(885),d=function(n){return n.contacts.items},h="ContactForm_form__dhl+T",x="ContactForm_input__Bl93P",j="ContactForm_button__eSwX9";var b=(0,r.$j)(null,(function(n){return{onSubmit:function(e){return n((0,c.uK)(e))}}}))((function(n){var e=n.onSubmit,t=(0,r.v9)(d),c=(0,a.useState)(""),s=(0,f.Z)(c,2),i=s[0],u=s[1],l=(0,a.useState)(""),m=(0,f.Z)(l,2),_=m[0],b=m[1],C=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":u(a);break;case"number":b(a);break;default:return}},p=function(){u(""),b("")};return(0,o.jsxs)("form",{className:h,onSubmit:function(n){if(n.preventDefault(),t.some((function(n){return n.name===i})))return alert("".concat(i," is already in contacts!"));e({name:i,number:_}),p()},children:[(0,o.jsxs)("label",{children:["Name",(0,o.jsx)("input",{type:"text",name:"name",className:x,required:!0,value:i,onChange:C})]}),(0,o.jsxs)("label",{children:["Number",(0,o.jsx)("input",{type:"tel",name:"number",className:x,required:!0,value:_,onChange:C})]}),(0,o.jsx)("button",{type:"submit",className:j,children:"Add contact"})]})})),C=t(4443),p="Filter_label__vEd1E",v="Filter_title__pSkfx",g="Filter_input__N7T3z";var k=(0,r.$j)((function(n){return{value:n.contacts.filter}}),(function(n){return{onChange:function(e){return n(C.M(e.target.value))}}}))((function(n){var e=n.value,t=n.onChange;return(0,o.jsxs)("label",{className:p,children:[(0,o.jsx)("span",{className:v,children:"Find contacts by name"}),(0,o.jsx)("input",{type:"text",className:g,value:e,onChange:t})]})})),N="ContactsView_container__Ijx1k",w="ContactsView_titleFhonebook__kSCLR",F="ContactsView_titleContacts__grg3p";function y(){return(0,o.jsxs)("div",{className:N,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:w,children:"Phonebook"}),(0,o.jsx)(b,{})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:F,children:"Contacts"}),(0,o.jsx)(k,{}),(0,o.jsx)(_,{})]})]})}}}]);
//# sourceMappingURL=389.e32729c8.chunk.js.map