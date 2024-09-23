(function(){"use strict";var e={1022:function(e,t,n){var s=n(9242),i=n(3396),a=n(7139);const o={key:0,id:"app",role:"main"},r={key:2,class:"app-wrapper"};function l(e,t,n,s,l,c){const d=(0,i.up)("app-loading"),u=(0,i.up)("app-error"),p=(0,i.up)("FormWrapper"),m=(0,i.up)("SubFooter");return e.translations?((0,i.wg)(),(0,i.iD)("main",o,[l.loading?((0,i.wg)(),(0,i.j4)(d,(0,a.vs)((0,i.dG)({key:0},{loadingMessage:l.loadingMessage})),null,16)):l.error?((0,i.wg)(),(0,i.j4)(u,(0,a.vs)((0,i.dG)({key:1},{errorHeading:l.errorHeading,errorIntro:l.errorIntro,errorMessage:l.errorMessage})),null,16)):((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(p),(0,i.Wm)(m)]))])):(0,i.kq)("",!0)}var c=n(65),d=n(4806),u=n.n(d),p={currentUserCan:e=>t=>!(!e.user||!e.user.capabilities.length)&&e.user.capabilities.includes(t)},m={setApi(e,t){e.api=t},setUser(e,t){e.user=t},setSettings(e,t){e.settings=t},setSectionsSchema(e,t){e.sectionsSchema=t},setTranslations(e,t){e.translations=t},setFieldValue:(e,{fieldId:t,key:n,newValue:s})=>{let i=JSON.parse(JSON.stringify(e.sectionsSchema));const a=i.find((e=>e.fields.some((e=>e.id===t))));if(a){const o=a.fields.find((e=>e.id===t));o&&o.values.hasOwnProperty(n)&&(o.values[n]=s?"1":"0",e.sectionsSchema=i)}},resetCurrentSection:e=>{const t=e.currentSectionId;if(!t)return;let n=JSON.parse(JSON.stringify(e.sectionsSchema));const s=n.find((e=>e.id===t));s?(s.fields.forEach((e=>{e.default&&(e.values={...e.default})})),e.sectionsSchema=n):console.warn(`Section with id ${t} not found.`)},resetAllSections:e=>{let t=JSON.parse(JSON.stringify(e.sectionsSchema));t.forEach((e=>{e.fields.forEach((e=>{e.default&&(e.values={...e.default})}))})),e.sectionsSchema=t},setChangesDetected(e,t){e.changesDetected=t},setChangesSaved(e,t){e.changesSaved=t},setCurrentSectionId(e,t){e.currentSectionId=t},resetCurrentSectionId(e){e.currentSectionId=""},toggleSidebarMenu(e){e.displaySidebarMenu=!e.displaySidebarMenu},setDisplaySidebarMenu(e,t){e.displaySidebarMenu=t},setTextFieldValue(e,{sectionId:t,fieldId:n,newValue:s}){let i=e.sectionsSchema.find((e=>e.id===t)),a=i.fields.find((e=>e.id===n));a.values=s}},h=n(7387),g=n.n(h);const v=e=>e&&"object"===typeof e&&Object.keys(e).length>0,f=e=>{let t=typeof e;switch(t){case"string":{let t=parseInt(e,10);return isNaN(t)?"true"===e:Boolean(t)}case"number":return Boolean(e);case"boolean":return e;default:return!!e}};var S={fetchDevAppData({commit:e}){return new Promise(((t,n)=>{g().ajax({url:"getApi.php",method:"GET",dataType:"json"}).done((n=>{e("setApi",n.api),e("setUser",n.user),e("setTranslations",n.translations),t()})).fail(((e,t,s)=>{n(s)}))}))},fetchSettings({commit:e,state:t}){return new Promise(((n,s)=>{g().ajax({url:t.api.root+"/settings",method:"GET",cache:!1,dataType:"json",beforeSend:e=>{e.setRequestHeader("X-WP-Nonce",t.api.nonce),e.setRequestHeader("X-PUBLIC-Nonce",t.api.public_nonce)}}).done((t=>{e("setSettings",t.data),n()})).fail(((e,t,n)=>{s(e,n)}))}))},fetchSectionsSchema({commit:e,state:t}){return new Promise(((n,s)=>{g().ajax({url:t.api.root+"/schema",method:"GET",cache:!1,dataType:"json",beforeSend:e=>{e.setRequestHeader("X-WP-Nonce",t.api.nonce),e.setRequestHeader("X-PUBLIC-Nonce",t.api.public_nonce)}}).done((t=>{e("setSectionsSchema",t.data.sections_schema),n()})).fail(((e,t,n)=>{s(e,n)}))}))},saveConfig({state:e,dispatch:t},n){if(v(n))return new Promise(((s,i)=>{g().ajax({url:e.api.root+"/settings",method:"POST",dataType:"json",data:JSON.stringify(n),contentType:"application/json",beforeSend:t=>{t.setRequestHeader("X-WP-Nonce",e.api.nonce),t.setRequestHeader("X-PUBLIC-Nonce",e.api.public_nonce)}}).done((e=>{t("fetchSectionsSchema"),s(e)})).fail(((e,t,n)=>{i(n)}))}));console.error("Invalid type data from saveConfig action")}};const w=["install_plugins","update_plugins","edit_plugins","delete_plugins"],y="webmaster_caps_plugins",_="activate_plugins",b=e=>{e.subscribe(((t,n)=>{if("setFieldValue"===t.type){const{fieldId:n,key:s,newValue:i}=t.payload;n===y&&k(s,i,e)}}))};function k(e,t,n){t?w.includes(e)&&n.commit("setFieldValue",{fieldId:y,key:_,newValue:!0}):e===_&&w.forEach((e=>{n.commit("setFieldValue",{fieldId:y,key:e,newValue:!1})}))}var D=b;const I={api:void 0,user:void 0,connectionError:!1,settings:void 0,sectionsSchema:{},translations:void 0,changesDetected:!1,changesSaved:!1,currentSectionId:"",displaySidebarMenu:!0};var C=(0,c.MT)({state:I,getters:p,mutations:m,actions:S,plugins:[D]}),F=n(4870);function M(e,t,n,a,o,r){return(0,i.wg)(),(0,i.iD)("form",{onSubmit:t[0]||(t[0]=(0,s.iM)(((...t)=>e.submitForm&&e.submitForm(...t)),["prevent"]))},[(0,i.WI)(e.$slots,"default")],32)}const U=["save_changes","reset_section","reset_all"];var V=(0,i.aZ)({name:"MyForm",computed:{...(0,c.rn)(["sectionsSchema"])},methods:{submitForm(e){let t=e.submitter.name;U.includes(t)?this[t]():console.error("Invalid action on form submission!")},save_changes(){let e=this.parseValues(this.sectionsSchema);this.saveConfig(e),this.setChangesDetected(!1),this.setChangesSaved(!0)},reset_section(){this.resetCurrentSection(),this.setChangesDetected(!0)},reset_all(){this.resetAllSections(),this.setChangesDetected(!0)},parseValues(e){let t=e.reduce(((e,t)=>(Array.isArray(t.fields)&&f(t.active)&&t.fields.forEach((t=>{let n=(0,F.IU)(t.values);e[t.id]=n})),e)),{});return t},...(0,c.nv)(["saveConfig"]),...(0,c.OI)(["setChangesDetected","setChangesSaved","resetCurrentSection","resetAllSections"])}}),E=n(89);const T=(0,E.Z)(V,[["render",M]]);var H=T;const W=e=>((0,i.dD)("data-v-d7da9016"),e=e(),(0,i.Cn)(),e),j={class:"display-header"},A=W((()=>(0,i._)("h2",null,"Simple Client Dashboard",-1))),O={key:0,class:"header-pro-span"};var q={__name:"FormHeader",setup(e){const t=(0,c.oR)(),n=(0,i.Fl)((()=>t.state.api));return(e,t)=>((0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("div",j,[A,"pro"===(0,F.SU)(n).scd_edition?((0,i.wg)(),(0,i.iD)("span",O," PRO ")):(0,i.kq)("",!0),(0,i._)("span",null,"v."+(0,a.zw)((0,F.SU)(n).scd_version),1)])]))}};const x=(0,E.Z)(q,[["__scopeId","data-v-d7da9016"]]);var P=x;const Z={class:"intro"};var L={__name:"FormIntro",setup(e){const t=(0,c.oR)(),n=(0,i.Fl)((()=>t.state.translations));return(e,t)=>((0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("p",null,(0,a.zw)((0,F.SU)(n).general.intro),1)]))}};const z=L;var R=z;const $={class:"bar actions-bar"},N={class:"actions"};function B(e,t){return(0,i.wg)(),(0,i.iD)("div",$,[(0,i._)("div",null,[(0,i.WI)(e.$slots,"left")]),(0,i._)("div",N,[(0,i.WI)(e.$slots,"actions")])])}const Y={},J=(0,E.Z)(Y,[["render",B]]);var X=J;const G={class:"actions-buttons"};var K={__name:"FormActions",setup(e){const t=(0,c.oR)(),n=(0,i.Fl)((()=>t.state.translations)),a=(0,i.Fl)((()=>t.state.displaySidebarMenu));return(e,t)=>{const o=(0,i.up)("Button");return(0,i.wg)(),(0,i.iD)("div",G,[(0,i.Wm)(o,{type:"submit",name:"save_changes",id:"save_changes",label:(0,F.SU)(n).actions.saveChanges},null,8,["label"]),(0,i.Wm)(s.uT,null,{default:(0,i.w5)((()=>[(0,F.SU)(a)?((0,i.wg)(),(0,i.j4)(o,{key:0,type:"submit",name:"reset_section",id:"reset_section",label:(0,F.SU)(n).actions.resetSection,outlined:""},null,8,["label"])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(o,{type:"submit",name:"reset_all",id:"reset_all",label:(0,F.SU)(n).actions.resetAll,outlined:""},null,8,["label"])])}}};const Q=(0,E.Z)(K,[["__scopeId","data-v-7e1edf1c"]]);var ee=Q;const te={class:"scd-left-sidebar"},ne={key:0,class:"button-disabled-pro-span"};var se={__name:"LeftSideBar",props:{modelValue:String,default:()=>""},emits:["update:modelValue"],setup(e,{emit:t}){const n=(0,c.oR)(),s=(0,i.Fl)((()=>n.state.translations)),o=(0,i.Fl)((()=>n.state.sectionsSchema)),r=e=>e,l=e=>{t("update:modelValue",e.id)};return(t,n)=>{const c=(0,i.up)("Button");return(0,i.wg)(),(0,i.iD)("div",te,[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,F.SU)(o),(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id,class:(0,a.C_)({"item-grayed-out":!t.active})},[(0,i.Wm)(c,{label:r(t.title),severity:e.modelValue!=t.id?"secondary":"",text:"",onClick:e=>l(t),pt:{root:{class:e.modelValue===t.id?"active":""}}},{icon:(0,i.w5)((()=>[(0,i._)("i",{class:(0,a.C_)(t.dashicon)},null,2),t.active?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",ne,(0,a.zw)((0,F.SU)(s).general.pro),1))])),_:2},1032,["label","severity","onClick","pt"])],2)))),128))])])}}};const ie=se;var ae=ie;n(7658);const oe={class:"p-float-label"},re=["for"];var le={__name:"FormTextField",props:{section:Object,field:Object},setup(e){const t=e,n=(0,c.oR)(),s=(0,F.iH)(),o=(0,F.iH)(null),r=(0,F.iH)(!1),l=(0,i.Fl)((()=>({"p-invalid":!d.value}))),d=(0,i.Fl)((()=>void 0===typeof t.field.valid||t.field.valid));(0,i.bv)((()=>{o.value=s.value.querySelector("input"),o.value.addEventListener("focus",u),o.value.addEventListener("blur",p)}));const u=()=>{r.value=!0},p=()=>{r.value=!1};(0,i.Ah)((()=>{o.value.removeEventListener("focus",u),o.value.removeEventListener("blur",p)}));const m=(0,i.Fl)({get:()=>t.field.encrypt&&!r.value?t.field.values.replace(/.(?=.{4,}$)/g,"• "):t.field.values,set:e=>{n.commit("setTextFieldValue",{sectionId:t.section.id,fieldId:t.field.id,newValue:e})}});return(t,n)=>{const o=(0,i.up)("InputText");return(0,i.wg)(),(0,i.iD)("div",{ref_key:"inputContainer",ref:s},[(0,i._)("span",oe,[(0,i.Wm)(o,{id:e.field.id,modelValue:(0,F.SU)(m),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,F.dq)(m)?m.value=e:null),class:(0,a.C_)((0,F.SU)(l)),pt:{root:{class:"width-40"}}},null,8,["id","modelValue","class"]),(0,i._)("label",{for:e.field.id},(0,a.zw)(e.field.title),9,re)])],512)}}};const ce=le;var de=ce;const ue=["innerHTML"];function pe(e,t,n,s,o,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)(n.section.content.class)},[(0,i._)("div",{innerHTML:n.section.content.desc},null,8,ue)],2)}var me={name:"UpgradeSection",props:{section:{type:Object,required:!0}}};const he=(0,E.Z)(me,[["render",pe]]);var ge=he;const ve={class:"scd-content"},fe={key:0,class:"pi pi-lock",style:{"font-size":"1.3rem"}},Se=["aria-labelledby"],we=["id"],ye={class:"scd-description"},_e={class:"scd-input-container"},be={key:0},ke={class:"checkbox-container"},De=["for"],Ie=["id"],Ce=["innerHTML"],Fe={key:1},Me=["innerHTML"],Ue={key:0,class:"scd_unlock_btn-wrapper"};var Ve={__name:"FormMainContent",props:{modelValue:String,default:()=>""},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=(0,c.oR)(),o=(0,i.Fl)((()=>s.state.translations)),r=(0,i.Fl)((()=>s.state.sectionsSchema)),l=(0,i.Fl)((()=>{const e=s.state.sectionsSchema;if(!n.modelValue||!Array.isArray(e))return e;const t=e.filter((e=>e.id===n.modelValue));return t||[]})),d=(0,F.iH)([]);(0,i.YP)((()=>r.value),((e,t)=>{const n=e;Array.isArray(n)&&n.forEach((e=>{e.fields&&e.fields.forEach((e=>{for(const t in e.values){let n=`${e.id}_${t}`;if("1"===e.values[t])d.value.includes(n)||d.value.push(n);else if(d.value.includes(n)){let e=d.value.indexOf(n);d.value.splice(e,1)}}}))}))}),{deep:!0,immediate:!0});const u=(e,t,n)=>{let i=e.target.checked;if(void 0===i){let e=document.getElementById(`${t}_${n}`);i=!e.checked}s.commit("setFieldValue",{fieldId:t,key:n,newValue:i}),s.commit("setChangesDetected",!0)},p=()=>{t("update:modelValue","upgrade_pro")};return(e,t)=>{const n=(0,i.up)("Checkbox"),s=(0,i.up)("Button");return(0,i.wg)(),(0,i.iD)("div",ve,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,F.SU)(l),(e=>((0,i.wg)(),(0,i.iD)("section",{key:e.id,class:(0,a.C_)(["scd-section-group",{"scd-section-grayed-out":!e.active}])},[(0,i._)("h2",null,[e.active?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",fe)),(0,i.Uk)(" "+(0,a.zw)(e.title),1)]),e.fields?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.fields,((s,o)=>((0,i.wg)(),(0,i.iD)("div",{key:s.id,class:"scd-section-inner-container"},[s.title?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,a.C_)([{"b-top":0!=o},"scd-section-field"]),role:"group","aria-labelledby":"pseudolegend"+s.id},[(0,i._)("div",{id:"pseudolegend"+s.id,class:"scd-input-title"},[(0,i._)("h3",null,(0,a.zw)(s.title),1),(0,i._)("span",ye,(0,a.zw)(s.subtitle),1)],8,we),(0,i._)("div",_e,[s.options&&"checkbox"===s.type?((0,i.wg)(),(0,i.iD)("ul",be,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.options,((o,r)=>((0,i.wg)(),(0,i.iD)("li",{key:r},[(0,i._)("div",ke,[(0,i.Wm)(n,{name:s.id,inputId:`${s.id}_${r}`,value:`${s.id}_${r}`,modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),disabled:!e.active,onChange:e=>u(e,s.id,r),"aria-describedby":s.id,pt:{hiddenInput:()=>({"aria-describedby":s.desc?"desc_"+s.id:void 0})}},null,8,["name","inputId","value","modelValue","disabled","onChange","aria-describedby","pt"]),(0,i._)("label",{for:`${s.id}_${r}`},(0,a.zw)(o),9,De)])])))),128))])):"text"===s.type?((0,i.wg)(),(0,i.j4)(de,{key:1,section:e,field:s},null,8,["section","field"])):(0,i.kq)("",!0),s.desc?((0,i.wg)(),(0,i.iD)("div",{key:2,id:"desc_"+s.id,class:"scd-fields-notes"},[(0,i._)("div",{innerHTML:s.desc},null,8,Ce)],8,Ie)):(0,i.kq)("",!0)])],10,Se)):"raw"===s.type?((0,i.wg)(),(0,i.iD)("div",Fe,[(0,i._)("div",{innerHTML:s.content},null,8,Me)])):(0,i.kq)("",!0)])))),128)),e.active?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Ue,[(0,i.Wm)(s,{type:"button",severity:"info",icon:"pi pi-lock-open",raised:"",label:(0,F.SU)(o).general.unlock,"aria-label":(0,F.SU)(o).general.unlock,onClick:p,size:"large"},null,8,["label","aria-label"])]))],64)):e.content?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},["upgrade_pro"===e.id?((0,i.wg)(),(0,i.j4)(ge,{key:0,section:e},null,8,["section"])):(0,i.kq)("",!0)],64)):(0,i.kq)("",!0)],2)))),128))])}}};const Ee=(0,E.Z)(Ve,[["__scopeId","data-v-0ed96e84"]]);var Te=Ee;const He={class:"form-main"},We={class:"content-wrapper"};var je={__name:"FormMain",setup(e){const t=(0,c.oR)(),n=(0,F.iH)("plugins");(0,i.bv)((()=>{t.commit("setCurrentSectionId",n.value)})),(0,i.YP)(n,(e=>{e&&t.commit("setCurrentSectionId",e)}));const a=(0,i.Fl)((()=>t.state.displaySidebarMenu));return(0,i.YP)(a,(e=>{n.value=e?"plugins":""})),(e,t)=>((0,i.wg)(),(0,i.iD)("div",He,[(0,i.Wm)(s.uT,{name:"shrink-sidebar"},{default:(0,i.w5)((()=>[(0,F.SU)(a)?((0,i.wg)(),(0,i.j4)(ae,{key:0,modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,8,["modelValue"])):(0,i.kq)("",!0)])),_:1}),(0,i._)("div",We,[(0,i.Wm)(Te,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e)},null,8,["modelValue"])])]))}};const Ae=(0,E.Z)(je,[["__scopeId","data-v-376dc7cc"]]);var Oe=Ae,qe={__name:"FormNoticeBar",setup(e){const t=(0,c.oR)(),n=(0,i.Fl)((()=>t.state.translations)),o=(0,i.Fl)((()=>t.state.changesDetected)),r=(0,i.Fl)((()=>t.state.changesSaved)),l=(0,i.Fl)((()=>o.value||r.value)),d=(0,F.qj)({bar:1,"warning-bar":1,"notice-bar":1});return(0,i.YP)([o,r],(()=>{d["warning-bar"]=o.value,d["notice-bar"]=r.value&&!o.value})),(0,i.YP)(r,(e=>{e&&setTimeout((function(){t.commit("setChangesSaved",!1)}),2e3)})),(e,t)=>((0,i.wg)(),(0,i.j4)(s.uT,null,{default:(0,i.w5)((()=>[(0,F.SU)(l)?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,a.C_)(d)},[(0,F.SU)(o)?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,a.zw)((0,F.SU)(n).notices.changesDetected),1)],64)):(0,F.SU)(r)?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,a.zw)((0,F.SU)(n).notices.settingsSaved),1)],64)):(0,i.kq)("",!0)],2)):(0,i.kq)("",!0)])),_:1}))}};const xe=qe;var Pe=xe;const Ze={class:"form-wrapper"};var Le={__name:"FormWrapper",setup(e){const t=(0,c.oR)(),n=(0,i.Fl)((()=>t.state.translations)),s=()=>{t.commit("toggleSidebarMenu")},a=(0,F.iH)(),o=e=>{e.matches?(t.commit("setDisplaySidebarMenu",!1),a.value.$el.style.display="none"):(t.commit("setDisplaySidebarMenu",!0),a.value.$el.style.display="block")};return(0,i.bv)((()=>{const e=window.matchMedia("(max-width: 595px)");e.addEventListener("change",o),o(e)})),(0,i.Ah)((()=>{const e=window.matchMedia("(max-width: 595px)");e.removeEventListener("change",o)})),(e,t)=>{const o=(0,i.up)("Button"),r=(0,i.Q2)("tooltip");return(0,i.wg)(),(0,i.iD)("div",Ze,[(0,i.Wm)(H,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P),(0,i.Wm)(R),(0,i.Wm)(X,null,{left:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(o,{ref_key:"toggleMenuBtn",ref:a,"aria-label":(0,F.SU)(n).actions.toggleMenu,icon:"pi pi-bars",text:"",onClick:s},null,8,["aria-label"]),[[r,(0,F.SU)(n).actions.toggleMenu]])])),actions:(0,i.w5)((()=>[(0,i.Wm)(ee)])),_:1}),(0,i.Wm)(Pe),(0,i.Wm)(Oe),(0,i.Wm)(X,null,{actions:(0,i.w5)((()=>[(0,i.Wm)(ee)])),_:1})])),_:1})])}}};const ze=(0,E.Z)(Le,[["__scopeId","data-v-42239688"]]);var Re=ze;const $e={class:"sub-footer"},Ne={target:"_blank",href:"https://simpleclientdashboard.com/"};var Be={__name:"SubFooter",setup(e){const t=(0,c.oR)(),n=(0,i.Fl)((()=>t.state.translations));return(e,t)=>((0,i.wg)(),(0,i.iD)("div",$e,[(0,i._)("p",null,[(0,i._)("a",Ne,(0,a.zw)((0,F.SU)(n).general.pluginDocumentation),1)])]))}};const Ye=(0,E.Z)(Be,[["__scopeId","data-v-a2554dcc"]]);var Je=Ye;const Xe={class:"scd-app-empty"};function Ge(e,t,n,s,o,r){const l=(0,i.up)("ProgressSpinner");return(0,i.wg)(),(0,i.iD)("div",Xe,[(0,i._)("h1",null,(0,a.zw)(n.loadingMessage),1),(0,i.Wm)(l,{"aria-label":n.loadingMessage},null,8,["aria-label"])])}var Ke={props:{loadingMessage:{type:String,default:"Loading..."}}};const Qe=(0,E.Z)(Ke,[["render",Ge]]);var et=Qe;const tt={class:"scd-app-empty"},nt=(0,i._)("i",{class:"pi pi-exclamation-circle",style:{"font-size":"2rem",color:"var(--scd-error-color)"}},null,-1);function st(e,t,n,s,o,r){return(0,i.wg)(),(0,i.iD)("div",tt,[nt,(0,i._)("h1",null,(0,a.zw)(n.errorHeading),1),(0,i._)("h2",null,(0,a.zw)(n.errorIntro+": "+n.errorMessage),1)])}var it={props:{errorHeading:{type:String,required:!0},errorIntro:{type:String,required:!0},errorMessage:{type:String,required:!0}}};const at=(0,E.Z)(it,[["render",st]]);var ot=at,rt={name:"App",components:{FormWrapper:Re,SubFooter:Je,AppLoading:et,AppError:ot},store:C,data(){return{error:!1,errorHeading:"",errorIntro:"",errorMessage:"",loading:!0,loadingMessage:"",noConnection:!1,localApi:window.scd&&window.scd.api?window.scd.api:{},localUser:window.scd&&window.scd.user?window.scd.user:null,localSettings:window.scd_settings?window.scd_settings:{},localSectionsSchema:window.scd_sections_schema?window.scd_sections_schema:{},localTranslations:window.scd&&window.scd.translations?window.scd.translations:{}}},mounted(){this.init()},watch:{connection(e){e&&(this.noConnection=!0)},translations(e){u().isEmpty(e)||(this.loadingMessage=e.general.loadingInitial,this.errorHeading=e.errors.heading,this.errorIntro=e.errors.intro)}},computed:{connection(){return this.connectionError},...(0,c.rn)(["api","user","connectionError","settings","sectionsSchema","translations"]),...(0,c.Se)(["urlParams"])},methods:{init(){return"undefined"!==typeof this.api&&"undefined"!==typeof this.user&&"undefined"!==typeof this.translations||u().isEmpty(this.localApi)||u().isEmpty(this.localUser)||u().isEmpty(this.localTranslations)?"undefined"===typeof this.api||"undefined"===typeof this.user||"undefined"===typeof this.translations?(this.loading=!0,void this.fetchDevAppData().then((()=>this.init())).catch(((e,t)=>{console.log(t),this.showError("Error loading API")}))):"undefined"!==typeof this.settings||u().isEmpty(this.localSettings)?"undefined"===typeof this.settings?(this.loading=!0,this.loadingMessage=this.translations.general.loadingSettings,void this.fetchSettings().then((()=>{this.init()})).catch((e=>{console.log(e),this.showError(this.translations.errors.settings)}))):u().isEmpty(this.sectionsSchema)&&!u().isEmpty(this.localSectionsSchema)?(this.setSectionsSchema(this.localSectionsSchema),void this.init()):u().isEmpty(this.sectionsSchema)?(this.loading=!0,this.loadingMessage=this.translations.general.loadingSettings,void this.fetchSectionsSchema().then((()=>{this.init()})).catch((e=>{console.log(e),this.showError(this.translations.errors.settings)}))):void(this.loading=!1):(this.setSettings(this.localSettings),void this.init()):(this.setApi(this.localApi),this.setUser(this.localUser),this.setTranslations(this.localTranslations),void this.init())},showError(e){this.loading=!1,this.errorMessage=e,this.error=!0},...(0,c.nv)(["fetchDevAppData","fetchSettings","fetchSectionsSchema"]),...(0,c.OI)(["setApi","setUser","setSettings","setSectionsSchema","setTranslations"])}};const lt=(0,E.Z)(rt,[["render",l]]);var ct=lt,dt=n(3852),ut=n(5571),pt=n(2739),mt=n(6709),ht=n(3585),gt=n(7267),vt={install(e){e.component("Checkbox",ut.Z),e.component("Button",pt.Z),e.component("InputText",mt.Z),e.component("ProgressSpinner",gt.Z),e.directive("tooltip",ht.Z)}};const ft=(0,s.ri)(ct);ft.use(C),ft.use(dt.ZP),ft.use(vt),ft.mount("#scd-admin-app")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,a){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],a=e[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(r=!1,a<o&&(o=a));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var d=l(n)}for(t&&t(s);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},s=self["webpackChunkscd_admin_app"]=self["webpackChunkscd_admin_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(1022)}));s=n.O(s)})();