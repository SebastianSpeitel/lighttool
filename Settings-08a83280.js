import{_ as t,a as e,C as n,V as o,b as r,c as s,d as a,e as i}from"./main-d584057d.js";const c=i({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-text-field",{attrs:{label:"Projektname"},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}}),t._v(" "),n("v-text-field",{attrs:{label:"Bearbeiter"},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),t._v(" "),n("v-text-field",{attrs:{label:"Auftraggeber"},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}}),t._v(" "),n("v-text-field",{attrs:{label:"Kontakt"},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}}),t._v(" "),n("v-text-field",{attrs:{label:"Export",value:t.url,readonly:"",disabled:""}}),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{color:"primary",dark:""},on:{click:t.start}},[t._v("Beginnen")])],1)},staticRenderFns:[]},void 0,function(a){function i(){var t=null!==a&&a.apply(this,arguments)||this;return t.name="Settings",t}return t(i,a),Object.defineProperty(i.prototype,"url",{get:function(){return this.$store.getters.shareURL},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"projectName",{get:function(){return this.$store.state.session.name},set:function(t){this.$store.commit("session",{name:t})},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"author",{get:function(){return this.$store.state.session.author},set:function(t){this.$store.commit("session",{author:t})},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"client",{get:function(){return this.$store.state.session.client},set:function(t){this.$store.commit("session",{client:t})},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"contact",{get:function(){return this.$store.state.session.contact},set:function(t){this.$store.commit("session",{contact:t})},enumerable:!0,configurable:!0}),i.prototype.start=function(){this.$store.commit("continue")},i=e([n({components:{VTextField:o,VBtn:r,VContainer:s}})],i)}(a),void 0,!1,void 0,!1,void 0,void 0,void 0);export default c;