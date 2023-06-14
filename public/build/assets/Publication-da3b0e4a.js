import{r as s,a as r,j as e,F as f,L as o}from"./app-d99d8f80.js";import{u as x}from"./react-fb3f0ea5.js";import{W as N}from"./WebsiteLayout-6f3a090f.js";import{l as w,a as S,b as y,M as L,c as i}from"./index-45b6d8f7.js";import"./helpers-10e0c415.js";const P={transformSize:({size:a})=>({height:a.height+20,width:a.width+20})},_={0:"JAN",1:"FEB",2:"MAR",3:"APR",4:"MAY",5:"JUN",6:"JUL",7:"AUG",8:"SEP",9:"OCT",10:"NOV",11:"DEC"},D=({publications:a})=>{const c=w.defaultLayoutPlugin(),p=S.pageNavigationPlugin(),[d,n]=s.useState(!1),[m,h]=s.useState();s.useState(null),s.useState(1);function u(t){h(t),n(!0)}const g=y.getFilePlugin(),[F,b]=s.useState(0),[$,v]=s.useState(!1);return x({breakpoints:{"(min-width: 400px)":{slides:{perView:1,spacing:1},loop:!0,mode:"free-snap"},"(min-width: 1000px)":{slides:{perView:3,spacing:20},loop:!0,mode:"free-snap"}},initial:0,slideChanged(t){b(t.track.details.rel)},created(){v(!0)}}),r(N,{page:"publication",children:[e(L,{classNames:{modal:"pdf__modal"},open:d,onClose:()=>n(!1),children:e("div",{className:"sm:w-[50rem] sm:h-[60rem] w-[19rem] h-[30rem]",children:d&&e(i.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js",children:e(i.Viewer,{fileUrl:m,plugins:[c,g,p],defaultScale:i.SpecialZoomLevel.PageFit,pageLayout:P})})})},"pdf__modal"),r("div",{className:"overflow-hidden bg-white",children:[e("div",{className:"pt-10 text-center",children:e("h2",{className:"sm:pb-16 pb-5 sm:text-[3rem] text-[2rem] text-center text-red-600",children:"Press Releases and Speeches"})}),e("div",{className:" sm:px-[6rem]  ",children:r("div",{className:"relative sm:pb-28",children:[e("div",{className:"grid gap-6 sm:grid-cols-3",children:a.data.map((t,l)=>e("div",{className:"",children:r("div",{className:"cursor-pointer",onClick:()=>u(`/uploads/publications/pdf/${t.pdf}`),children:[r("div",{className:"relative",children:[e("img",{src:`/uploads/publications/images/${t.image}`,className:"object-cover sm:h-[20rem]",alt:t.title}),e("div",{className:"absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]",children:r("div",{className:"block font-bold text-center text-white uppercase",children:[e("div",{children:_[new Date(t.published_date).getMonth()]}),e("div",{children:new Date(t.published_date).getDate()}),e("div",{children:new Date(t.published_date).getFullYear()})]})})]}),r("div",{className:"bg-slate-100 p-3 overflow-hidden h-[60%]",children:[e("p",{className:"font-bold uppercase text-primary",children:t.title}),e("p",{children:t.description})]})]})},l))}),e("div",{className:"flex gap-2 pt-[2rem] justify-center",children:e(f,{children:a==null?void 0:a.links.map((t,l)=>t.url?e(o,{preserveScroll:!0,href:`${t.url}`,className:`${t.active&&"bg-red-400 text-white "} px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white `,as:"button",type:"button",children:e("span",{dangerouslySetInnerHTML:{__html:t.label}})},l):e(o,{preserveScroll:!0,href:`${t.url}`,className:`${t.active&&"bg-red-400 text-white "} px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white `,disabled:!0,as:"button",type:"button",children:e("span",{dangerouslySetInnerHTML:{__html:t.label}})},l))})})]})})]})]})};export{D as default};