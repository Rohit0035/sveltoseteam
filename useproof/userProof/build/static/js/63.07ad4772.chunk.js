(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[63],{1007:function(e,a,t){},1191:function(e,a,t){},2077:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),c=t(16),r=t(15),m=t(0),o=t.n(m),s=t(1249),i=t(1250),u=t(1251),d=t(1254),E=t(814),p=t(788),b=t(789),h=t(817),f=t(818),v=t(3),g=t.n(v),N=t(462),k=t(341),y=t(414),C=t(871),w=t(861),j=t(862),O=t(830),S=t(810),x=t(821),z=t(805),R=t(183),T=t(869),L=t.n(T),A=(t(1191),t(870)),V=[{value:"Lead",label:"Lead"},{value:"Purchase",label:"Purchase"},{value:"Schedule",label:"Schedule"},{value:"Subscribe",label:"Subscribe"},{value:"Start Trial",label:"Start Trial"},{value:"View Content",label:"View Content"},{value:"Complete Registration",label:"Complete Registration"}],P=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={value:"",activeTab:"1",modal:!1,campaignName:""},e.handleSubmit=function(e){e.preventDefault()},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(s.a,null,o.a.createElement(i.a,{lg:"12",sm:"12"},o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"pt-1"},o.a.createElement(s.a,null,o.a.createElement(i.a,{md:"4"}),o.a.createElement(i.a,{md:"4"},o.a.createElement("div",{className:"mainDiv"},o.a.createElement("h1",{className:" heading"},"Set your goals",o.a.createElement("span",{className:"question"},"?")))),o.a.createElement(i.a,{md:"4"},o.a.createElement("div",{className:" text-right"},o.a.createElement("a",{color:"primary",className:"btn-block",onClick:this.toggleModal},o.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},o.a.createElement(w.a,{className:"bg-primary"},"Create your goal"),o.a.createElement(j.a,{className:"modal-dialog-centered"},o.a.createElement(O.a,{onSubmit:this.handleSubmit},o.a.createElement(s.a,null,o.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"Category"},"Goal Category*"),o.a.createElement(A.a,{className:"React customselect",name:"category",options:V}))),o.a.createElement(i.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"firstName"},"Name your Goal*"),o.a.createElement(z.a,{type:"text",required:!0,placeholder:"Ex:signed up for basic plan",onChange:function(a){return e.setState({campaignName:a.target.value})},value:this.state.campaignName,id:"campaignName",name:"campaignName"}))),o.a.createElement(i.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},o.a.createElement(x.a,{for:"firstName"},"Set conversion value"),o.a.createElement(L.a,{className:"form-control",mask:"$9999",placeholder:"100"})),o.a.createElement(i.a,{md:"12",sm:"12",className:"mb-2"},o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"firstName"},"Set goal completion URL*"),o.a.createElement(z.a,{type:"text",required:!0,placeholder:"URL",onChange:function(a){return e.setState({campaignName:a.target.value})},value:this.state.campaignName,id:"campaignName",name:"campaignName"}))),o.a.createElement(i.a,null,o.a.createElement("div",{className:"add-task"},o.a.createElement(R.a.Ripple,{block:!0,className:"btn-block my-1",color:"primary"},"Add Task"))))))),"Create Goals")))),o.a.createElement("p",{className:"para"},"Track performance for this campaign with goals"),o.a.createElement(s.a,null,o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement("div",{className:"primarygoals"},o.a.createElement("div",null,"Primary Goals"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",null,"abc")),o.a.createElement("li",null,"abc1"),o.a.createElement("li",null,"abc2"),o.a.createElement("li",null,"abc3"),o.a.createElement("li",null,"abc3 dcssfsfffsgfsg")))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement("div",{className:"primarygoals"},o.a.createElement("div",null,"Additional Goals Tracked"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",null,"abc")),o.a.createElement("li",null,"abc1"),o.a.createElement("li",null,"abc2"),o.a.createElement("li",null,"abc3"),o.a.createElement("li",null,o.a.createElement("span",null,"abc3 dcssfsfffsgfsg"))))))))))}}]),t}(o.a.Component),D=t(2),G=t(807),I=t(34),M=t(265),F=t(356),q=t(1200),U=t.n(q),J=t(970),W=t.n(J),H=(t(1032),t(911),[{value:"english",label:"English",color:"#7367f0"},{value:"french",label:"French",color:"#7367f0"},{value:"spanish",label:"Spanish",color:"#7367f0"},{value:"russian",label:"Russian",color:"#7367f0"},{value:"italian",label:"Italian",color:"#7367f0"}]),K={control:function(e){return Object(D.a)(Object(D.a)({},e),{},{backgroundColor:"white"})},option:function(e,a){var t=a.data,l=a.isDisabled,n=a.isFocused,c=a.isSelected,r=t.color?U()(t.color):"#7367f0";return Object(D.a)(Object(D.a)({},e),{},{backgroundColor:l?null:c?t.color:n?r.alpha(.1).css():null,color:l?"#ccc":c?U.a.contrast(r,"white")>2?"white":"black":t.color,cursor:l?"not-allowed":"default",":active":Object(D.a)(Object(D.a)({},e[":active"]),{},{backgroundColor:!l&&(c?t.color:"#7367f0")})})},multiValue:function(e,a){var t=a.data,l=t.color?U()(t.color):"#7367f0";return Object(D.a)(Object(D.a)({},e),{},{backgroundColor:l.alpha(.1).css()})},multiValueLabel:function(e,a){var t=a.data;return Object(D.a)(Object(D.a)({},e),{},{color:t.color?t.color:"#7367f0"})},multiValueRemove:function(e,a){var t=a.data;return Object(D.a)(Object(D.a)({},e),{},{color:t.color,":hover":{backgroundColor:t.color?t.color:"#7367f0",color:"white"}})}},Y=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={dob:new Date("1995-05-22")},e.handledob=function(a){e.setState({dob:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(O.a,{onSubmit:function(e){return e.preventDefault()}},o.a.createElement(s.a,{className:"mt-1"},o.a.createElement(i.a,{className:"mt-1",md:"6",sm:"12"},o.a.createElement("h5",{className:"mb-1"},o.a.createElement(N.a,{className:"mr-50",size:16}),o.a.createElement("span",{className:"align-middle"},"Personal Info")),o.a.createElement(S.a,null,o.a.createElement(x.a,{className:"d-block",for:"dob"},"Date of birth"),o.a.createElement(W.a,{id:"dob",className:"form-control",options:{dateFormat:"Y-m-d"},value:this.state.dob,onChange:function(a){return e.handledob(a)}})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"contactnumber"},"Contact Number"),o.a.createElement(z.a,{type:"number",id:"contactnumber",placeholder:"Contact Number"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"website"},"Website"),o.a.createElement(z.a,{type:"url",id:"website",placeholder:"Web Address"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"languages"},"Languages"),o.a.createElement(A.a,{isMulti:!0,defaultValue:[H[0],H[1],H[2]],isClearable:!0,styles:K,options:H,className:"React",classNamePrefix:"select",id:"languages"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{className:"d-block mb-50"},"Gender"),o.a.createElement("div",{className:"d-inline-block mr-1"},o.a.createElement(I.a,{label:"Male",color:"primary",defaultChecked:!1,name:"gender"})),o.a.createElement("div",{className:"d-inline-block mr-1"},o.a.createElement(I.a,{label:"Female",color:"primary",defaultChecked:!0,name:"gender"})),o.a.createElement("div",{className:"d-inline-block"},o.a.createElement(I.a,{label:"Others",color:"primary",defaultChecked:!1,name:"gender"}))),o.a.createElement(S.a,null,o.a.createElement(x.a,{className:"d-block mb-50",for:"communication"},"Communication"),o.a.createElement("div",{className:"d-inline-block mr-1"},o.a.createElement(G.a,{color:"primary",icon:o.a.createElement(M.a,{className:"vx-icon",size:16}),label:"Email",defaultChecked:!1})),o.a.createElement("div",{className:"d-inline-block mr-1"},o.a.createElement(G.a,{color:"primary",icon:o.a.createElement(M.a,{className:"vx-icon",size:16}),label:"SMS",defaultChecked:!1})),o.a.createElement("div",{className:"d-inline-block"},o.a.createElement(G.a,{color:"primary",icon:o.a.createElement(M.a,{className:"vx-icon",size:16}),label:"Phone",defaultChecked:!1})))),o.a.createElement(i.a,{className:"mt-1",md:"6",sm:"12"},o.a.createElement("h5",{className:"mb-1"},o.a.createElement(F.a,{className:"mr-50",size:16}),o.a.createElement("span",{className:"align-middle"},"Address")),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"address1"},"Address Line 1"),o.a.createElement(z.a,{type:"text",id:"address1",placeholder:"Last Name Here"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"address1"},"Address Line 2"),o.a.createElement(z.a,{type:"text",id:"address1",placeholder:"Address Line 2"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"pincode"},"Pincode"),o.a.createElement(z.a,{type:"text",id:"pincode",placeholder:"Pincode"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"city"},"City"),o.a.createElement(z.a,{type:"text",defaultValue:"Camden Town",id:"city",placeholder:"City"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"State"},"State"),o.a.createElement(z.a,{type:"text",defaultValue:"London",id:"State",placeholder:"State"})),o.a.createElement(S.a,null,o.a.createElement(x.a,{for:"Country"},"Country"),o.a.createElement(z.a,{type:"text",defaultValue:"UK",id:"Country",placeholder:"Country"}))),o.a.createElement(i.a,{className:"d-flex justify-content-end flex-wrap",sm:"12"},o.a.createElement(R.a.Ripple,{className:"mr-1",color:"primary"},"Save Changes"),o.a.createElement(R.a.Ripple,{color:"flat-warning"},"Reset"))))}}]),t}(o.a.Component),$=t(348),B=t(451),Q=t(312),X=t(342),Z=t(330),_=t(283),ee=t(423),ae=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,{className:"mt-2",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("h5",{className:"mb-1"},o.a.createElement($.a,{size:15}),o.a.createElement("span",{className:"align-middle ml-50"},"Social Links")),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:"6",sm:"12"},o.a.createElement(x.a,{for:"twitter"},"Twitter"),o.a.createElement(S.a,{className:"position-relative has-icon-left"},o.a.createElement(z.a,{id:"twitter",placeholder:"https://www.twitter.com/"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(B.a,{size:15}))),o.a.createElement(x.a,{for:"facebook"},"Facebook"),o.a.createElement(S.a,{className:"position-relative has-icon-left"},o.a.createElement(z.a,{id:"facebook",placeholder:"https://www.facebook.com/"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(Q.a,{size:15}))),o.a.createElement(x.a,{for:"instagram"},"Instagram"),o.a.createElement(S.a,{className:"position-relative has-icon-left"},o.a.createElement(z.a,{id:"instagram",placeholder:"https://www.instagram.com/"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(X.a,{size:15})))),o.a.createElement(i.a,{md:"6",sm:"12"},o.a.createElement(x.a,{for:"github"},"Github"),o.a.createElement(S.a,{className:"position-relative has-icon-left"},o.a.createElement(z.a,{id:"github",placeholder:"https://www.github.com/"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(Z.a,{size:15}))),o.a.createElement(x.a,{for:"codepen"},"Codepen"),o.a.createElement(S.a,{className:"position-relative has-icon-left"},o.a.createElement(z.a,{id:"codepen",placeholder:"https://www.codepen.com/"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(_.a,{size:15}))),o.a.createElement(x.a,{for:"slack"},"Slack"),o.a.createElement(S.a,{className:"position-relative has-icon-left"},o.a.createElement(z.a,{id:"slack",placeholder:"https://www.slack.com/"}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(ee.a,{size:15})))),o.a.createElement(i.a,{className:"d-flex justify-content-end flex-wrap",sm:"12"},o.a.createElement(R.a.Ripple,{className:"mr-1",color:"primary"},"Save Changes"),o.a.createElement(R.a.Ripple,{color:"flat-warning"},"Reset"))))}}]),t}(o.a.Component),te=(t(1007),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggle=function(a){e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(s.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"pt-2"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(p.a,null,o.a.createElement(b.a,{className:g()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},o.a.createElement(N.a,{size:16}),o.a.createElement("span",{className:"align-middle ml-50"},"Account"))),o.a.createElement(p.a,null,o.a.createElement(b.a,{className:g()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},o.a.createElement(k.a,{size:16}),o.a.createElement("span",{className:"align-middle ml-50"},"Information"))),o.a.createElement(p.a,null,o.a.createElement(b.a,{className:g()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},o.a.createElement(y.a,{size:16}),o.a.createElement("span",{className:"align-middle ml-50"},"Social")))),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(f.a,{tabId:"1"},o.a.createElement(P,null)),o.a.createElement(f.a,{tabId:"2"},o.a.createElement(Y,null)),o.a.createElement(f.a,{tabId:"3"},o.a.createElement(ae,null)))))))}}]),t}(o.a.Component));a.default=te},807:function(e,a,t){"use strict";var l=t(13),n=t(14),c=t(16),r=t(15),m=t(0),o=t.n(m),s=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=s},911:function(e,a,t){}}]);
//# sourceMappingURL=63.07ad4772.chunk.js.map