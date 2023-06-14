import{b as l,c as v,a as c,F as E,j as e}from"./app-d99d8f80.js";import{I as n,a as u,B as m}from"./theme-02204269.js";import{I as w,C as N}from"./inputtextarea.esm-29d56ff7.js";import{a as U,C as H,b as K,D as M,c as W}from"./toast.esm-bf0a1e04.js";import{D as G,a as J,b as h,e as S}from"./rating.esm-eaaedadc.js";import{u as B}from"./useFormValidation-3d1c8305.js";import{f as Q}from"./helpers-10e0c415.js";const ne=({categories:D})=>{const i=l.useRef(null),[F,g]=l.useState(!1),[y,C]=l.useState(),[p,X]=l.useState(D),[I,T]=l.useState(),[f,_]=l.useState([]),[d,x]=l.useState({first:0,rows:50,page:0}),t=B({category:"",investigation_number:"",title:"",pdf:null,description:"",issued_date:""},{category:"required|numeric",investigation_number:"required",title:"required",pdf:"required",description:"",issued_date:"required"},q),s=B({category:"",investigation_number:"",title:"",pdf:null,description:"",issued_date:""},{category:"required|numeric",investigation_number:"",title:"required",pdf:"",description:"",issued_date:"required"},V);function q(){const a=new FormData;a.append("category",t.state.category),a.append("title",t.state.title),a.append("pdf",t.state.pdf[0]),a.append("description",t.state.description),a.append("issued_date",t.state.issued_date),a.append("investigation_number",t.state.investigation_number),v.post("/dashboard/cases",a,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:r})=>{t.clearValues(!0),t.updateIsSubmitting(!1),i.current.show({severity:"success",summary:"Case added successfully",life:3e3});const o=f.length<d.rows?[r.data,...f]:[r.data,...[].concat(f.pop())];_(o)}).catch(r=>{t.updateIsSubmitting(!1),r.response?r.response.status===422?t.setServerErrors(r.response.data.errors):r.response.status===413?i.current.show({severity:"error",summary:"File to large",life:3e3}):r.response.status===500?i.current.show({severity:"error",summary:"Ooops! Something went wrong, please refresh and try again.",life:3e3}):console.trace(r):console.trace(r)})}function V(){const a=new FormData;a.append("category",s.state.category),a.append("title",s.state.title),a.append("investigation_number",s.state.investigation_number),a.append("pdf",s.state.pdf?s.state.pdf[0]:s.state.pdf),a.append("description",s.state.description),a.append("issued_date",s.state.issued_date),v.post(`/dashboard/cases/${y.id}`,a,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:r})=>{s.updateIsSubmitting(!1),i.current.show({severity:"success",summary:"Case updated successfully",life:3e3}),_(o=>o.map(b=>b.id===r.data.id?r.data:b)),g(!1)}).catch(r=>{s.updateIsSubmitting(!1),r.response?r.response.status===422?s.setServerErrors(r.response.data.errors):r.response.status===413?i.current.show({severity:"error",summary:"Files to large",life:3e3}):r.response.status===500?i.current.show({severity:"error",summary:"Ooops! Something went wrong, please refresh and try again.",life:3e3}):console.trace(r):console.trace(r)})}const z=(a,r)=>{W({target:a.currentTarget,message:"Do you want to delete this case?",icon:"pi pi-trash",acceptClassName:"p-button-danger",accept:()=>{v.delete(`/dashboard/cases/${r}`).then(({data:o})=>{i.current.show({severity:"success",summary:"Case deleted successfully",life:3e3}),_(b=>b.filter($=>$.id!==r))}).catch(o=>{o.response?o.response.status===413?i.current.show({severity:"error",summary:"Files to large",life:3e3}):o.response.status===500?i.current.show({severity:"error",summary:"Ooops! Something went wrong, please refresh and try again.",life:3e3}):console.trace(o):console.trace(o)})}})},A=a=>{s.setValues({category:a.case_category_id,investigation_number:a.investigation_number,title:a.title,pdf:null,description:a.description,issued_date:new Date(a.issued_date)}),C(a),g(!0)},O=a=>{x(a)},P=()=>c("div",{className:"table__header",children:[e("div",{className:"table__header__search",children:c("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(u,{placeholder:"Search cases..."})]})}),e("div",{className:"table__header__buttons",children:e(m,{label:"New Case",type:"button",icon:"pi pi-plus",className:"p-button-primary",onClick:()=>g(!0)})})]}),j=a=>e("span",{children:Q(a.issued_date)}),k=a=>e("a",{href:`/uploads/cases/${a.pdf}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline"},children:a.title}),L=a=>c("div",{children:[e(m,{type:"button",icon:"pi pi-pencil",tooltip:"Edit Case ",tooltipOptions:{position:"top"},className:"p-button-text p-button-secondary p-button-sm",onClick:()=>A(a)}),e(m,{type:"button",icon:"pi pi-trash",tooltip:"Delete Case",tooltipOptions:{position:"top"},className:"p-button-text p-button-danger p-button-sm",onClick:r=>z(r,a.id)})]}),R=l.useCallback(async()=>{v.get(`/dashboard/cases/all?offset=${d.first}&limit=${d.rows}`).then(({data:a})=>{if(a.status){const r=a.data;T(r.count),_(r.records)}}).catch(a=>{console.trace(`Could not fetch data: 
`,a)})},[d]);return l.useEffect(()=>{R()},[d]),c(E,{children:[e(U,{ref:i}),e(H,{}),e(G,{page:"Cases",children:e(K,{children:c(J,{value:f,first:d.first,rows:d.rows,totalRecords:I,onPage:O,paginator:!0,lazy:!0,dataKey:"id",header:P,className:"mt-6",responsiveLayout:"scroll",emptyMessage:"No case found.",children:[e(h,{header:"Investigation #",field:"investigation_number"}),e(h,{header:"Title",body:k}),e(h,{header:"Description",field:"description",bodyStyle:{width:"40rem"}}),e(h,{header:"Issued On",body:j}),e(h,{header:"Actions",body:L})]})})}),e(M,{header:y?"Update Case":"Add New Case",visible:F,style:{width:"50%"},onHide:()=>{g(!1),t.clearValues(),s.clearValues(),C()},children:y?c("form",{onSubmit:s.handleSubmit,children:[e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Category",name:"category",errors:s.errors,children:e(S,{value:s.state.category,name:"category",options:(p==null?void 0:p.map(a=>({name:a.name,value:a.id})))||[],onChange:s.handleChange,onBlur:s.handleBlur,optionLabel:"name",optionValue:"value",filter:!0,showClear:!0,filterBy:"name",placeholder:"Select a category"})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Investigation #",name:"investigation_number",errors:s.errors,children:e(u,{name:"investigation_number",value:s.state.investigation_number,onBlur:s.handleBlur,onChange:s.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Title",name:"title",errors:s.errors,children:e(u,{name:"title",value:s.state.title,onBlur:s.handleBlur,onChange:s.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Description",name:"description",errors:s.errors,children:e(w,{rows:5,cols:30,autoResize:!0,name:"description",value:s.state.description,onBlur:s.handleBlur,onChange:s.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Case File",name:"pdf",errors:s.errors,children:e(u,{type:"file",accept:"application/pdf",name:"pdf",onChange:s.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Issued Date",name:"issued_date",errors:s.errors,children:e(N,{name:"issued_date",value:s.state.issued_date,onBlur:s.handleBlur,onChange:s.handleChange})})})}),e("div",{className:"flex justify-end mt-6",children:e(m,{type:"submit",label:"Update",loading:s.isSubmitting,disabled:s.isSubmitting})})]}):c("form",{onSubmit:t.handleSubmit,children:[e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Category",name:"category",errors:t.errors,children:e(S,{value:t.state.category,name:"category",options:(p==null?void 0:p.map(a=>({name:a.name,value:a.id})))||[],onChange:t.handleChange,onBlur:t.handleBlur,optionLabel:"name",optionValue:"value",filter:!0,showClear:!0,filterBy:"name",placeholder:"Select a category"})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Investigation #",name:"investigation_number",errors:t.errors,children:e(u,{name:"investigation_number",value:t.state.investigation_number,onBlur:t.handleBlur,onChange:t.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Title",name:"title",errors:t.errors,children:e(u,{name:"title",value:t.state.title,onBlur:t.handleBlur,onChange:t.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Description",name:"description",errors:t.errors,children:e(w,{rows:5,cols:30,autoResize:!0,name:"description",value:t.state.description,onBlur:t.handleBlur,onChange:t.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Case File",name:"pdf",errors:t.errors,children:e(u,{type:"file",accept:"application/pdf",name:"pdf",onChange:t.handleChange})})})}),e("div",{className:"s__row",children:e("div",{className:"s__col c--12",children:e(n,{label:"Issued Date",name:"issued_date",errors:t.errors,children:e(N,{name:"issued_date",value:t.state.issued_date,onBlur:t.handleBlur,onChange:t.handleChange})})})}),e("div",{className:"flex justify-end mt-6",children:e(m,{type:"submit",label:"Add",loading:t.isSubmitting,disabled:t.isSubmitting})})]})})]})};export{ne as default};