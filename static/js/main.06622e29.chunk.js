(this["webpackJsonpcharacter-visualizer"]=this["webpackJsonpcharacter-visualizer"]||[]).push([[0],{154:function(e,t){},160:function(e,t){},162:function(e,t){},172:function(e,t){},174:function(e,t){},201:function(e,t){},202:function(e,t){},207:function(e,t){},209:function(e,t){},216:function(e,t){},235:function(e,t){},255:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i(23),n=i.n(a),s=i(6),r=(i(58),i(260)),l=i(258),j=i(259),d=i(262),o=i(261),b=i(80),u=i(0),h=function(e){var t=Object(c.useState)(!1),i=Object(s.a)(t,2),a=i[0],n=i[1],r=function(){n(!1),f(!1),y(!1)},h=Object(c.useState)(!1),x=Object(s.a)(h,2),O=x[0],f=x[1],m=Object(c.useState)(!1),v=Object(s.a)(m,2),p=v[0],y=v[1],N=Object(c.useState)("0"),k=Object(s.a)(N,2),w=k[0],A=k[1],C=function(t,i){var c;i?(c=new b.DiceRoll("d20"+t),f(!0),y(!1),A(c.output)):(c=new b.DiceRoll("d20"+t+(e.proficient?"+".concat(e.proficiencyBonus):"+0")),f(!1),y(!0),A(c.output))};return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsxs)(o.a,{show:a,onHide:r,children:[Object(u.jsx)(o.a.Header,{children:Object(u.jsxs)(o.a.Title,{children:["VAMO ROLAR ",e.title," CARAI!"]})}),Object(u.jsxs)(o.a.Body,{children:[!O&&!p&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Quer fazer um Check ou Saving Throw?"}),Object(u.jsxs)("div",{className:"d-flex justify-content-center  mt-2",children:[Object(u.jsx)(d.a,{className:"mx-2",variant:"primary",onClick:function(){C(e.mod,!0)},children:"Check"}),Object(u.jsx)(d.a,{className:"mx-2",variant:"primary",onClick:function(){C(e.mod,!1)},children:"Saving Throw"})]})]}),O&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("h4",{children:["RESULTADO: ",w]}),Object(u.jsx)("div",{className:"d-flex justify-content-center  mt-2",children:Object(u.jsx)(d.a,{variant:"primary",onClick:function(){C(e.mod,!0)},children:"Rerolar"})})]})})}),p&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("h4",{children:["RESULTADO: ",w]}),Object(u.jsx)("div",{className:"d-flex justify-content-center  mt-2",children:Object(u.jsx)(d.a,{variant:"primary",onClick:function(){C(e.mod,!1)},children:"Rerolar"})})]})})})]}),Object(u.jsx)(o.a.Footer,{children:Object(u.jsx)(d.a,{variant:"secondary",onClick:r,children:"Fechar"})})]}),Object(u.jsx)("button",{className:"btn",onClick:function(){n(!0)},children:Object(u.jsxs)("div",{className:"col text-center",children:[Object(u.jsx)("h4",{children:e.title}),Object(u.jsx)("h5",{children:e.value}),Object(u.jsx)("h5",{className:"border",children:e.mod})]})})]})},x=function(e){var t=Object.keys(e.skills),i=[];return t.forEach((function(t,c){var a,n=e.skills["".concat(t)].ability;"str"===n?a=0:"dex"===n?a=1:"con"===n?a=2:"int"===n?a=3:"wis"===n?a=4:"cha"===n&&(a=5);var s=e.skills["".concat(t)].value;i.push(Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(j.a,{className:"d-flex",xl:1,children:[Object(u.jsx)("h4",{children:t}),Object(u.jsxs)("h6",{children:["(",n,")"]})]}),Object(u.jsx)(j.a,{xl:1,children:Object(u.jsx)("h5",{children:s?e.modArray[a]+"+"+e.proficiencyBonus:e.modArray[a]})})]}))})),Object(u.jsx)("div",{children:Object(u.jsx)(r.a,{className:"d-flex flex-wrap row mt-5 justify-content-center",children:Object(u.jsx)(l.a,{children:i.map((function(e){return e}))})})})};function O(e){e.children;var t=Object(c.useState)(""),i=Object(s.a)(t,2),a=i[0],n=i[1],o=Object(c.useState)(!0),b=Object(s.a)(o,2),O=b[0],f=b[1],m=function(e){return 1===e?"-5":2===e||3===e?"-4":4===e||5===e?"-3":6===e||7===e?"-2":8===e||9===e?"-1":10===e||11===e?"+0":12===e||13===e?"+1":14===e||15===e?"+2":16===e||17===e?"+3":18===e||19===e?"+4":20===e||21===e?"+5":void 0};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{children:[O&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"mt-5",children:"Ficha :D"}),Object(u.jsx)("input",{accept:".json",type:"file",onChange:function(e){var t=new FileReader;t.readAsText(e.target.files[0],"UTF-8"),t.onload=function(e){n(JSON.parse(e.target.result)),f(!1)}},className:"mb-5"}),Object(u.jsx)("br",{})]}),""!==a&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"mb-3 mt-2",children:["Nome: ",a.name]}),Object(u.jsx)("h3",{className:"mb-3",children:"Habilidades:"}),Object(u.jsx)(r.a,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(j.a,{children:[" ",Object(u.jsx)(h,{title:"STR",value:a.data.abilities.str.value,mod:m(a.data.abilities.str.value),proficient:a.data.abilities.str.proficient,proficiencyBonus:a.data.attributes.prof})]}),Object(u.jsxs)(j.a,{children:[" ",Object(u.jsx)(h,{title:"DEX",value:a.data.abilities.dex.value,mod:m(a.data.abilities.dex.value),proficient:a.data.abilities.dex.proficient,proficiencyBonus:a.data.attributes.prof})]}),Object(u.jsxs)(j.a,{children:[" ",Object(u.jsx)(h,{title:"CON",value:a.data.abilities.con.value,mod:m(a.data.abilities.con.value),proficient:a.data.abilities.con.proficient,proficiencyBonus:a.data.attributes.prof})]}),Object(u.jsxs)(j.a,{children:[" ",Object(u.jsx)(h,{title:"INT",value:a.data.abilities.int.value,mod:m(a.data.abilities.int.value),proficient:a.data.abilities.int.proficient,proficiencyBonus:a.data.attributes.prof})]}),Object(u.jsxs)(j.a,{children:[" ",Object(u.jsx)(h,{title:"WIS",value:a.data.abilities.wis.value,mod:m(a.data.abilities.wis.value),proficient:a.data.abilities.wis.proficient,proficiencyBonus:a.data.attributes.prof})]}),Object(u.jsxs)(j.a,{children:[" ",Object(u.jsx)(h,{title:"CHA",value:a.data.abilities.cha.value,mod:m(a.data.abilities.cha.value),proficient:a.data.abilities.cha.proficient,proficiencyBonus:a.data.attributes.prof})]})]})}),Object(u.jsx)(r.a,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(x,{modArray:[m(a.data.abilities.str.value),m(a.data.abilities.dex.value),m(a.data.abilities.con.value),m(a.data.abilities.int.value),m(a.data.abilities.wis.value),m(a.data.abilities.cha.value)],skills:a.data.skills,proficiencyBonus:a.data.attributes.prof})})})}),Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)(d.a,{className:"mt-5",variant:"primary",onClick:function(){f(!O)},children:"Esconder/Abrir Upload"})})]})]})})})}function f(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{children:Object(u.jsx)("button",{children:"Upload Files"})})})}var m=document.getElementById("root");n.a.render(Object(u.jsx)(f,{}),m)}},[[255,1,2]]]);
//# sourceMappingURL=main.06622e29.chunk.js.map