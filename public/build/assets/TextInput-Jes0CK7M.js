import{E as r,G as i,o as u,f as n,b as d,t as c,K as m,k as p,m as f,L as _}from"./app-B8o5NAov.js";const g={class:"text-sm text-red-600"},h={__name:"InputError",props:{message:{type:String}},setup(e){return(o,t)=>r((u(),n("div",null,[d("p",g,c(e.message),1)],512)),[[i,e.message]])}},y={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:o}){const t=m(e,"modelValue"),s=p(null);return f(()=>{s.value.hasAttribute("autofocus")&&s.value.focus()}),o({focus:()=>s.value.focus()}),(v,a)=>r((u(),n("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),ref_key:"input",ref:s},null,512)),[[_,t.value]])}};export{y as _,h as a};