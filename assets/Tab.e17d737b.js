import{_ as s,o as n,c as d,b as a,v as l}from"./app.b307a2c7.js";const c={props:{name:{required:!0},default:{default:!1}},data:()=>({active:!1}),computed:{id(){return this.name.toLowerCase().replace(/ /g,"-")},parentId(){return this.$parent.$parent.$props.id.toLowerCase().replace(/ /g,"-")},parentIdSafe(){return this.parentId.replace(/[\-\/\\^$*+?.()|[\]{}]/g,"\\$&")}},created(){this.active=this.default===""},mounted(){const e=decodeURI(window.location.href).match(RegExp(`[?&]${this.parentIdSafe}=(.*?)(?=&|#|$)`));e&&e.length>1&&e[1]===this.id&&(this.active=!0),this.default&&(this.active=!0)},methods:{setTab(){let e=window.location.href;e.match(RegExp(`[?&]${this.parentIdSafe}=`))?e=e.replace(RegExp(`([?&]${this.parentIdSafe}=)(.*?)(?=&|#|$)`),"$1"+this.id):e.match(/\?/)?e=e.replace(/[?&].*?(?=#|$)/,`$&&${this.parentId}=`+this.id):e=e.replace(/(?=#|$)/,`?${this.parentId}=`+this.id),e!=window.location.href&&history.pushState({},"",encodeURI(e))}}},o=["id","name","checked"],h=["for","innerHTML"],p={class:"tab"};function f(e,r,i,u,$,t){return n(),d("section",null,[a("input",{id:t.parentId+"-"+t.id,name:t.parentId,type:"radio",checked:e.active},null,8,o),a("label",{for:t.parentId+"-"+t.id,class:"tab-link",innerHTML:i.name,onClick:r[0]||(r[0]=m=>this.setTab())},null,8,h),a("div",p,[l(e.$slots,"default")])])}var _=s(c,[["render",f],["__file","Tab.vue"]]);export{_ as default};
