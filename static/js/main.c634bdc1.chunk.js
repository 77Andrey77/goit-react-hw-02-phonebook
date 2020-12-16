(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(9),s=n.n(i),o=(n(17),n(11)),u=n(3),l=n(4),b=n(7),m=n(6),h=n(10),d=(n(18),n(5)),j=n.n(d),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form",id:"contact",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"label",htmlFor:this.nameInputId,children:["Name",Object(a.jsx)("input",{className:"input-field",type:"text",name:"name",value:e,onChange:this.handleChange,id:this.nameInputId,placeholder:"John Dows"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{htmlFor:this.numberInputId,children:["Phone number",Object(a.jsx)("input",{className:"input-field",type:"text",name:"number",value:n,onChange:this.handleChange,id:this.numberInputId,placeholder:"459-12-56"})]}),Object(a.jsx)("button",{type:"submit",className:"submit-button",children:"Add contact"})]})})}}]),n}(c.Component);n(27);var p=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:"contactItem",children:[Object(a.jsxs)("p",{className:"item",children:[c," : ",r]}),Object(a.jsx)("button",{className:"button",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};function v(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})}n(28);var O=function(t){var e=t.message;return Object(a.jsx)("p",{className:"message",children:e})},C=(n(29),n(5)),g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})),r=t.state.contacts.find((function(t){return t.number===a}));if(c)alert("".concat(n," is already in contacts"));else if(r)alert("".concat(a," is alread in contacts"));else{var i={id:C.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[i].concat(Object(o.a)(e))}}))}},t.onChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.visibleContacts();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.addContact}),Object(a.jsx)("h2",{className:"title",children:"Contacts"}),t.length>0?Object(a.jsx)(v,{value:this.state.filter,onChange:this.onChangeFilter}):Object(a.jsx)(O,{message:"You have no contacts !!"}),Object(a.jsx)(p,{contacts:this.visibleContacts(),onDeleteContact:this.deleteContact})]})}}]),n}(c.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.c634bdc1.chunk.js.map