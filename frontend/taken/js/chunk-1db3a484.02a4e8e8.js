(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1db3a484"],{"65f3":function(e,t,n){"use strict";n("f417")},"6d5b":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c=Object(o["w"])("data-v-6b1135c6");Object(o["l"])("data-v-6b1135c6");const l=Object(o["f"])("div",{id:"title"},"Kamer toevoegen",-1),a=Object(o["f"])("td",null,[Object(o["f"])("label",{for:"name"},"Naam: ")],-1),d=Object(o["f"])("td",null,null,-1);Object(o["k"])();const b=c((e,t,n,c,b,i)=>(Object(o["j"])(),Object(o["c"])("div",null,[l,Object(o["f"])("table",null,[Object(o["f"])("tr",null,[a,Object(o["f"])("td",null,[Object(o["v"])(Object(o["f"])("input",{id:"name",type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.name=t)},null,512),[[o["t"],e.name]])])]),Object(o["f"])("tr",null,[d,Object(o["f"])("td",null,[Object(o["f"])("button",{onClick:t[2]||(t[2]=(...t)=>e.addRoom&&e.addRoom(...t))},"Voeg toe")])])])])));var i=n("5502"),s=Object(o["h"])({name:"addRoom",data(){return{name:""}},methods:{addRoom:function(){if(""!=this.name){const e={name:this.name},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://wolleserver.local:2400/room",t).then(e=>e.json()).then(e=>console.log(e)).then(()=>{this.fetchRooms(),this.$emit("close")})}else alert("Sommige verplichten velden zijn niet ingevuld!")},...Object(i["b"])(["fetchRooms"])}});n("65f3");s.render=b,s.__scopeId="data-v-6b1135c6";t["default"]=s},f417:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1db3a484.02a4e8e8.js.map