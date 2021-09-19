(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),i=a.n(c),o=(a(13),a(2)),d=a(5),r=a(6),l=a(8),j=a(7),u=a(0),h=function(e){var t=e.task,a=t.id,n=t.text,s=t.date,c=t.active,i=t.doneDate;return Object(u.jsxs)("li",{className:"task",children:[Object(u.jsxs)("div",{className:"display",children:[Object(u.jsx)("h2",{children:n}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Started : "}),s]}),!1===c&&Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Done : "}),Object(u.jsx)("em",{children:i})]})]}),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)("div",{className:"delete",onClick:function(){e.delete(a)},children:Object(u.jsx)("i",{className:"fas fa-trash"})}),!0===c?Object(u.jsx)("div",{className:"done",onClick:function(){e.done(a)},children:Object(u.jsx)("i",{className:"fas fa-check"})}):Object(u.jsx)("div",{className:"redo",onClick:function(){e.undo(a)},children:Object(u.jsx)("i",{className:"fas fa-undo"})})]})]},a)},b=function(e){var t=e.task.filter((function(e){return!0===e.active}));t=t.map((function(t){return Object(u.jsx)(h,{task:t,delete:e.delete,done:e.done,doneDate:e.doneDate},t.id)}));var a=e.task.filter((function(e){return!1===e.active}));a=a.map((function(t){return Object(u.jsx)(h,{task:t,delete:e.delete,undo:e.undo,doneDate:e.doneDate},t.id)}));var n={textAlign:"center",fontSize:"30px",fontWeight:"bold"},s=0!==t.length?t:Object(u.jsx)("h1",{children:"No more active tasks"}),c=0!==a.length?a:Object(u.jsx)("h1",{children:"There is no done tasks"});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("ul",{className:"task_list",children:[Object(u.jsx)("h1",{children:"Active Tasks : "}),e.isLoaded?s:Object(u.jsx)("div",{style:n,children:"Loading..."})]}),Object(u.jsxs)("ul",{className:"task_list",children:[Object(u.jsx)("h1",{children:"Done Tasks : "}),e.isLoaded?c:Object(u.jsx)("div",{style:n,children:"Loading..."})]})]})},O=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={task:[{id:0,text:"ZROBI\u0106 CO\u015a",date:"2018-02-15",active:!0,doneDate:""}],isLoaded:!0,tempText:""},e.handleFormSubmit=function(t){t.preventDefault();var a=(new Date).toISOString();a=a.slice(0,10);var n=e.state.task.length,s=0!==n?e.state.task[n-1].id+1:0;if(""!==e.state.tempText){var c={id:s,text:e.state.tempText,date:a,active:!0};e.setState((function(e){return{task:[].concat(Object(o.a)(e.task),[c]),tempText:""}}))}},e.handleText=function(t){e.setState((function(e){return{tempText:t.target.value}}))},e.handleDelete=function(t){var a=Object(o.a)(e.state.task);a=a.filter((function(e){return e.id!==t})),e.setState({task:a})},e.doneTask=function(t){var a=(new Date).toISOString();a=a.slice(0,10),a+=" ",a+=(new Date).toTimeString().slice(0,8),console.log(a);var n=Object(o.a)(e.state.task);n.map((function(e){return e.id===t?e.active=!1:e.active})),n.map((function(e){return e.id===t?e.doneDate=a:e.doneDate})),console.log(n),e.setState({task:n})},e.undoTask=function(t){var a=Object(o.a)(e.state.task);a.map((function(e){return e.id===t?e.active=!0:e.active})),e.setState({task:a})},e.saveLocalToDo=function(){var t=Object(o.a)(e.state.task);localStorage.setItem("todo",JSON.stringify(t))},e.getLocalToDo=function(){if(null===localStorage.getItem("todo"))localStorage.setItem("todo",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todo"));e.setState({task:t})}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getLocalToDo()}},{key:"componentDidUpdate",value:function(){this.saveLocalToDo()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("div",{className:"add_app",children:Object(u.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(u.jsx)("input",{type:"text",placeholder:"Add new task",value:this.state.tempText,onChange:this.handleText}),Object(u.jsx)("button",{className:"add",children:Object(u.jsx)("i",{className:"fas fa-plus"})})]})}),Object(u.jsx)(b,{isLoaded:this.state.isLoaded,task:this.state.task,delete:this.handleDelete,done:this.doneTask,doneDate:this.state.doneDate,undo:this.undoTask})]})}}]),a}(n.Component);i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e7852edc.chunk.js.map