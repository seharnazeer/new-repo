import{r as x,j as s,L as m,q as p}from"./index-f4K5m2mx.js";import{L as f,k as j}from"./Layout-CsxQcuAC.js";import{G as h}from"./GetAPI-DAFj_H2f.js";import{d as c}from"./dayjs.min-CCEdbQ8I.js";function A(){var a,d;const{data:t,reFetch:u}=h("admin/getAllOrders");return console.log("🚀 ~ Bookings ~ data:",t),x.useState(""),(t==null?void 0:t.length)===0?s.jsx(m,{}):s.jsx(f,{content:s.jsxs("div",{className:"p-5 space-y-5",children:[s.jsx("div",{className:"flex items-center flex-wrap gap-10",children:s.jsx("div",{className:"flex items-center gap-10",children:s.jsx("h2",{className:"text-themeDarkBlue text-2xl font-bold font-poppins",children:"Manage bookings"})})}),s.jsx("div",{className:"px-5 py-10 bg-[#9797971A] space-y-3",children:(d=(a=t==null?void 0:t.data)==null?void 0:a.orderData)==null?void 0:d.map((e,g)=>{var l,n,r,i;return s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsx("div",{children:s.jsx("img",{src:"/images/user.webp",alt:"user",className:"w-20 h-20"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-base font-poppins",children:(l=e==null?void 0:e.user)==null?void 0:l.email}),s.jsxs("div",{className:"flex items-center text-[#767676] gap-2",children:[s.jsx(j,{size:18}),s.jsx("span",{className:"font-poppins",children:c((n=e==null?void 0:e.user)==null?void 0:n.createdAt).format("DD MMM, YYYY")})]}),s.jsxs("div",{className:"flex items-center text-[#767676] gap-2",children:[s.jsx(p,{size:18}),s.jsx("span",{className:"font-poppins",children:c((r=e==null?void 0:e.user)==null?void 0:r.createdAt).format("h:mm a")})]})]})]}),s.jsx("div",{className:"text-base font-poppins",children:(i=e==null?void 0:e.user)==null?void 0:i.phone}),s.jsx("div",{className:"text-base font-poppins",children:e==null?void 0:e.co2Reduction}),s.jsx("div",{className:"text-base font-poppins",children:e==null?void 0:e.preference}),s.jsx("div",{children:(e==null?void 0:e.orderStatus)==="Completed"?s.jsx("div",{className:"bg-[#21965314]  text-themeGreen font-semibold p-2 rounded-md flex justify-center",children:"Completed"}):(e==null?void 0:e.orderStatus)==="Cancelled"?s.jsx("div",{className:`bg-[#EE4A4A14] text-themeRed font-semibold p-2 rounded-md 
          flex justify-center`,children:"Cancelled"}):(e==null?void 0:e.orderStatus)==="Rejected"?s.jsx("div",{className:"bg-[#1860CC33] text-[#1860CC] font-semibold p-2 rounded-md flex justify-center",children:"Rejected"}):(e==null?void 0:e.orderStatus)==="Placed"?s.jsx("div",{className:"bg-[#faff7533] text-yellow-400 font-semibold p-2 rounded-md flex justify-center",children:"Placed"}):s.jsx("div",{className:"bg-[#EC6C3033] text-[#EC6C30] font-semibold p-2 rounded-md flex justify-center",children:"Scheduled"})})]})})})]})})}export{A as default};