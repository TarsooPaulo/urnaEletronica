(()=>{"use strict";var e={14:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J,urna:()=>K});let n=[],a="";document.querySelector(".voto-nulo");const i=document.querySelector(".candidato-info");document.querySelector(".tela-urna");let r=document.querySelector(".pisca");const c=(document.querySelector(".digitos-tela"),document.querySelectorAll(".digitos-tela")),s=e=>{const t=e.target;if(t.classList.contains("numeros")){const e=new Audio;e.src="../../audios/numeros.mp3",e.play(),(e=>{r&&(r=document.querySelector(".pisca"),r.innerText+=e.innerText,r.nextElementSibling.classList.contains("digitos-tela")&&(r.nextElementSibling.classList.add("pisca"),r.classList.remove("pisca")),r=document.querySelector(".pisca"),n.push(e.innerText),5===n.length&&(()=>{a=n.join("");const e=y.filter((e=>e.number.toString()===a));console.log(n),console.log(a),e.length?L(e[0]):L(null)})())})(t)}},d=()=>{document.removeEventListener("click",s)},u=()=>{c.forEach((e=>{e.classList.add("esconde-pisca")}))},l=document.querySelector(".foto"),m=document.querySelector(".nome"),g=document.querySelector(".partido"),p=document.querySelector(".voto-nulo"),y=[{name:"Son Goku",number:55555,image:"./img/Son Goku.png",partido:"Dragon Ball"},{name:"Vegeta",number:55123,image:"./img/Vegeta.jpeg",partido:"Dragon Ball"},{name:"Sakuta",number:56666,image:"./img/Sakuta.jpg",partido:"Bunny girl"},{name:"Makinohara",number:56023,image:"./img/Makinohara.jpeg",partido:"Bunny girl"},{name:"Naruto Uzumaki",number:12796,image:"./img/Naruto.jpg",partido:"Naruto"},{name:"Sasuke Uchiha",number:12751,image:"./img/Sasuke.jpg",partido:"Naruto"},{name:"Satoru Gojo",number:90152,image:"./img/Satoru Gojo.jpg",partido:"Jujutsu Kaisen"},{name:"Yuji Itadori",number:90034,image:".img/Yuji Itadori.png",partido:"Jujutsu Kaisen"}],L=e=>{var t,o,n;null!==e?(t=e.name,o=e.partido,n=e.image,l.setAttribute("src",n),m.innerHTML=`Nome: ${t}`,g.innerHTML=`Partido: ${o}`,d(),u(),i.classList.remove("candidato-info"),i.classList.add("aparece-candidato-info"),w()):(d(),u(),p.classList.remove("voto-nulo"),p.classList.add("aparece-nulo"),w())},S=document.querySelector(".voto-nulo"),v=document.querySelectorAll(".digitos-tela"),f=document.querySelector(".candidato-info"),b=document.getElementById("branco"),q=document.querySelector(".primeiro-digito"),h=document.querySelector(".corrige"),k=document.querySelector(".fim"),j=e=>{if(e.target.classList.contains("corrige")){const e=new Audio;e.src="../../audios/corrige.mp3",e.play(),E()}},E=()=>{K.run=!0,K.branco=!1,K.confirma=!1,K.run&&(v.forEach((e=>{e.innerHTML="",e.classList.remove("esconde-pisca"),e.classList.remove("pisca"),K.branco||q.classList.toggle("pisca")})),f.classList.add("candidato-info"),f.classList.remove("aparece-candidato-info"),S.classList.add("voto-nulo"),S.classList.remove("aparece-nulo"),b.classList.add("hidden"),k.classList.add("hidden"),n=[],a="",K.reset())},x=document.querySelector(".candidato-info"),T=document.querySelector(".fim"),B=document.getElementById("branco"),M=e=>{if(e.target.classList.contains("confirma")){const e=new Audio;e.src="../../audios/confirma.mp3",e.play(),I()}},w=()=>{document.addEventListener("click",M)},A=()=>{document.removeEventListener("click",M)},I=()=>{K.confirma=!0,x.classList.add("hidden"),p.classList.add("hidden"),B.classList.add("hidden"),T.classList.remove("hidden"),d(),A(),H(),h.removeEventListener("click",j)},N=document.querySelector(".voto-nulo"),O=document.querySelector(".candidato-info"),P=(document.querySelector(".voto-branco"),document.querySelector(".branco"),document.querySelector(".candidato-info"),document.getElementById("branco")),G=e=>{e.target.classList.contains("branco")&&D()},H=()=>{document.removeEventListener("click",G)},D=()=>{K.run=!0,K.branco=!0,u(),O.classList.remove("aparece-candidato-info"),O.classList.add("candidato-info"),N.classList.add("voto-nulo"),P.classList.contains("hidden")&&P.classList.remove("hidden"),document.removeEventListener("click",s),w()};class J{run=!1;branco=!1;confirma=!1;inicia=()=>{document.addEventListener("click",s),document.addEventListener("click",G),h.addEventListener("click",j),A()};reset(){this.inicia(),this.run=!1,this.branco=!1,this.confirma=!1}}const K=new J;K.inicia()}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},new(o(14).default)})();