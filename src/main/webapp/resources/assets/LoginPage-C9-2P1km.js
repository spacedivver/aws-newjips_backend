import{u as h,a as b,b as v,r as y,c as g,d as w,o as c,e as n,f as s,w as u,v as m,t as x,g as k,h as o,i as V}from"./index-Bgv5Leqj.js";const q={class:"mt-5 mx-auto",style:{width:"500px"}},D=s("h1",{class:"my-5"},[s("i",{class:"fa-solid fa-right-to-bracket"}),o(" 로그인 ")],-1),S={class:"mb-3 mt-3"},B=s("label",{for:"id",class:"form-label"},[s("i",{class:"fa-solid fa-user"}),o(" 사용자 ID: ")],-1),N={class:"mb-3"},I=s("label",{for:"password",class:"form-label"},[s("i",{class:"fa-solid fa-lock"}),o(" 비밀번호: ")],-1),M={key:0,class:"text-danger"},R=["disabled"],T=s("i",{class:"fa-solid fa-right-to-bracket"},null,-1),C={__name:"LoginPage",setup(U){const i=h(),d=b(),p=v(),e=y({id:"",password:""}),a=g(""),f=w(()=>!(e.id&&e.password)),_=async()=>{console.log(e);try{await p.login(e),i.query.next?d.push({name:i.query.next}):d.push("/")}catch(l){console.log("에러=======",l),a.value=l.response.data}};return(l,t)=>(c(),n("div",q,[D,s("form",{onSubmit:V(_,["prevent"])},[s("div",S,[B,u(s("input",{type:"text",class:"form-control",placeholder:"사용자 ID","onUpdate:modelValue":t[0]||(t[0]=r=>e.id=r),required:""},null,512),[[m,e.id]])]),s("div",N,[I,u(s("input",{type:"password",class:"form-control",placeholder:"비밀번호","onUpdate:modelValue":t[1]||(t[1]=r=>e.password=r),required:""},null,512),[[m,e.password]])]),a.value?(c(),n("div",M,x(a.value),1)):k("",!0),s("button",{type:"submit",class:"btn btn-primary mt-4",disabled:f.value},[T,o(" 로그인 ")],8,R)],32)]))}};export{C as default};