import{n as v,k as m,a as g,o as u,c as p,d as e,t as c,q as f,v as b,x as k,f as h,b as y,e as j}from"./vendor.7d12e349.js";import{_,R as x}from"./index.bc4bbed2.js";import{c as D}from"./counterLogic.31a1ceb1.js";const V={name:"HelloWorld",props:{msg:String},setup(s,t){const n=v("global"),{addToCounter:o}=D(n),r=m(),i=g({requestdata:"No Data"});function a(d){r.value.show()}return x.get("https://jsonplaceholder.typicode.com/todos/1").then(d=>{i.requestdata=d.data}),{state:i,showPopup:a,helloDialog:r,addToCounter:o,global:n}}},l=s=>(b("data-v-24001872"),s=s(),k(),s),S={class:"hello"},C=f('<p data-v-24001872> For a guide and recipes on how to configure / customize this project,<br data-v-24001872> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-24001872>vue-cli documentation</a>. </p><h3 data-v-24001872>Essential Links</h3><ul data-v-24001872><li data-v-24001872><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-24001872>Vue.js Docs</a></li><li data-v-24001872><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-24001872>Vue Router Docs</a></li><li data-v-24001872><a href="https://vuejs.org/style-guide/rules-essential.html" target="_blank" rel="noopener" data-v-24001872>Vue Style Guide</a></li><li data-v-24001872><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-24001872>awesome-vue</a></li></ul><h3 data-v-24001872>Vue Devtools</h3><ul data-v-24001872><li data-v-24001872><a href="https://devtools.vuejs.org/guide/installation.html#chrome" target="_blank" rel="noopener" data-v-24001872>Debugger for Chrome</a></li><li data-v-24001872><a href="https://devtools.vuejs.org/guide/installation.html#firefox" target="_blank" rel="noopener" data-v-24001872>Debugger for Firefox</a></li><li data-v-24001872><a href="https://plugins.jetbrains.com/plugin/9442-vue-js" target="_blank" rel="noopener" data-v-24001872>Pycharm Plugin</a></li><li data-v-24001872><a href="https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack" target="_blank" rel="noopener" data-v-24001872>VSCode Extension</a></li></ul><h3 data-v-24001872>ViUR Shoelace Components</h3>',6),w=l(()=>e("sl-icon",{name:"cloud"},null,-1)),H=h(" I'am a shoelace button "),q=[w,H],I=l(()=>e("h4",null,"Use Shoelace for bootstrap icons, viur icons and custom icons",-1)),N=l(()=>e("sl-icon",{class:"viuricon",library:"myicons",name:"viur"},null,-1)),W=l(()=>e("sl-icon",{style:{"font-size":"2em",color:"var(--sl-color-info-500)"},library:"bootstrap",name:"puzzle-fill"},null,-1)),z=l(()=>e("sl-icon",{style:{"font-size":"2em",color:"var(--sl-color-success-500)","margin-left":"10px"},name:"heart-fill"},null,-1)),P={ref:"helloDialog",label:"Dialog"},R=h(" I'am a Shoelace Dialog "),$=l(()=>e("h3",null,"Request Some Demo Data",-1)),T=l(()=>e("h3",null,"Use a global State counter",-1));function B(s,t,n,o,r,i){return u(),p("div",S,[e("h1",null,c(n.msg),1),C,e("sl-button",{onClick:t[0]||(t[0]=(...a)=>o.showPopup&&o.showPopup(...a))},q),I,N,W,z,e("sl-dialog",P,[R,e("sl-button",{slot:"footer",type:"primary",onClick:t[1]||(t[1]=a=>o.helloDialog.hide())},"Close")],512),$,e("p",null,c(o.state.requestdata),1),T,e("sl-button",{type:"primary",onClick:t[2]||(t[2]=(...a)=>o.addToCounter&&o.addToCounter(...a))}," Click me: "+c(o.global.state.counter),1)])}var E=_(V,[["render",B],["__scopeId","data-v-24001872"]]),U="/static/app/logo.03d6d6da.png";const F={name:"HomeView",components:{HelloWorld:E}},L={class:"home"},A=e("img",{alt:"Vue logo",src:U},null,-1),G=e("div",{style:{height:"100px"}},null,-1);function Y(s,t,n,o,r,i){const a=y("HelloWorld");return u(),p("div",L,[A,j(a,{msg:"Welcome to Your Vue.js App"}),G])}var O=_(F,[["render",Y]]);export{O as default};