(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),i=n.n(c),d=(n(14),n(4)),l=n(5),r=n(6),s=n(1),u=n(8),h=n(7);function m(e){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),o.a.createElement("p",{style:e.item.completed?{textDecoration:"line-through",color:"#d9d3d2",fontStyle:"italic"}:null},e.item.text))}var p=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Mow lawn",completed:!0},{id:4,text:"Catch up on Micro-economics",completed:!1}],g=[],k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={todos:p,task:""},e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.addTask=e.addTask.bind(Object(s.a)(e)),e.updating=e.updating.bind(Object(s.a)(e)),e}return Object(r.a)(n,[{key:"addTask",value:function(){var e=this;this.setState((function(t){var n={id:g.length+1,text:e.state.task,completed:!1};return n.text.length>0&&p.push(n),{todos:p,task:""}}))}},{key:"updating",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e){console.log("Changed ",e),this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this;return g=this.state.todos.map((function(t){return o.a.createElement(m,{key:t.id,item:t,handleChange:e.handleChange})})),o.a.createElement("div",{className:"todo-list"},o.a.createElement("form",null,o.a.createElement("input",{name:"task",type:"text",placeholder:"Type task name",onChange:this.updating})),o.a.createElement("button",{onClick:this.addTask},"Add Task"),g)}}]),n}(o.a.Component);i.a.render(o.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.29f31ce2.chunk.js.map