(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121],{1987:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),d=t(16),i=t(15),r=t(0),o=t.n(r),c=t(890),l=t(180),p=t(1295),h=t(1296),u=t(1297),k=(t(1298),window.matchMedia("(min-width: 992px)")),b=function(e){Object(d.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,d=new Array(s),i=0;i<s;i++)d[i]=arguments[i];return(e=a.call.apply(a,[this].concat(d))).state={addTask:!1,sidebarDocked:k.matches,sidebarOpen:!1,taskToUpdate:null,prevState:null},e.onSetSidebarOpen=function(a){e.setState({sidebarOpen:a})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:k.matches,sidebarOpen:!1})},e.handleAddTask=function(a){"open"===a?e.setState({addTask:!0}):e.setState({addTask:!1,taskToUpdate:null})},e.handleUpdateTask=function(a){void 0!==a?e.setState({addTask:!0,taskToUpdate:a}):e.setState({taskToUpdate:null})},e.handleUndoChanges=function(a){e.setState({prevState:a})},e}return Object(s.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){k.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){k.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-application position-relative"},o.a.createElement("div",{className:"app-content-overlay ".concat(this.state.addTask||this.state.sidebarOpen?"show":""),onClick:function(){e.handleAddTask("close"),e.onSetSidebarOpen(!1)}}),o.a.createElement(l.a.Consumer,null,(function(a){return o.a.createElement(c.a,{sidebar:o.a.createElement(p.a,{routerProps:e.props,addTask:e.handleAddTask,mainSidebar:e.onSetSidebarOpen}),docked:e.state.sidebarDocked,open:e.state.sidebarOpen,sidebarClassName:"sidebar-content todo-sidebar d-flex",touch:!1,contentClassName:"sidebar-children d-none",pullRight:"rtl"===a.state.direction},'""')})),o.a.createElement(h.a,{routerProps:this.props,handleUpdateTask:this.handleUpdateTask,mainSidebar:this.onSetSidebarOpen,prevState:this.state.prevState}),o.a.createElement(u.a,{addTask:this.handleAddTask,addTaskState:this.state.addTask,taskToUpdate:this.state.taskToUpdate,newTask:this.state.newTask,mainSidebar:this.onSetSidebarOpen,handleUndoChanges:this.handleUndoChanges}))}}]),t}(o.a.Component);a.default=b}}]);
//# sourceMappingURL=121.a014afcb.chunk.js.map