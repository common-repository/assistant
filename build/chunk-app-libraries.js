"use strict";(self.webpackChunkfl_assistant=self.webpackChunkfl_assistant||[]).push([[634],{4532:(e,t,r)=>{r.r(t),r.d(t,{default:()=>J});var a={};r.r(a),r.d(a,{getActions:()=>D});var n={};r.r(n),r.d(n,{getActions:()=>N});var i={};r.r(i),r.d(i,{getActions:()=>O});var s={};r.r(s),r.d(s,{getActions:()=>W});var l={};r.r(l),r.d(l,{getActions:()=>$});var o={};r.r(o),r.d(o,{getActions:()=>V});var c={};r.r(c),r.d(c,{code:()=>o,document:()=>s,image:()=>n,post:()=>a,svg:()=>i,theme_settings:()=>l});var m=r(1594),u=r.n(m),d=r(9665),p=r(2578),y=r(6075),_=r(2470),b=r(8449),g=r(2405);const h=()=>{const e=(0,d.useHistory)(),{cloudUser:t}=(0,y.useSystemState)(),{pathname:r}=(0,d.useLocation)(),{isReadOnly:a,library:n,items:i,showUpload:s,setShowUpload:l}=b.Libraries.LibraryContext.use(),o=`/libraries/${n.id}`,c=t.id===n.permissions.permissions_user_id,{isSelecting:m,setIsSelecting:h}=p.Selection.use(),E=i&&!!i.length;if(!(n.permissions.update||n.permissions.edit_items||n.permissions.shared||c))return null;return u().createElement(u().Fragment,null,E&&!r.includes("/settings")&&u().createElement(g.Layout.Row,{align:"right"},u().createElement(g.Button,{onClick:()=>h(!0)},(0,_.__)("Select"))),!a&&n.permissions.edit_items&&u().createElement(g.Button,{appearance:"transparent",isSelected:s&&!r.includes("/settings"),title:(0,_.__)("Add Items"),onClick:()=>{l(!s),r!==o&&e.goBack()},style:{marginLeft:"auto"}},u().createElement(g.Icon.Plus,null)),(n.permissions.update||n.permissions.shared||c)&&u().createElement(g.Button,{appearance:"transparent",isSelected:r.includes("/settings"),title:(0,_.__)("Settings"),onClick:()=>{r===o&&e.push(`${o}/settings`)}},u().createElement(g.Icon.Cog,null)))};var E=r(8168);const f=()=>{const{isReadOnly:e,library:t,showUpload:r,uploader:a}=b.Libraries.LibraryContext.use();return e||!t.permissions.edit_items?null:u().createElement(u().Fragment,null,r&&u().createElement(b.Libraries.LibraryUpload,null),!!a.queuedFiles.length&&u().createElement(g.Layout.Box,{padY:!1},u().createElement(b.Uploader.FileList,{files:a.queuedFiles})))},L=()=>{const{library:e}=b.Libraries.LibraryContext.use();return u().createElement(u().Fragment,null,u().createElement(g.Layout.Box,{style:{textAlign:"center",padding:0}},u().createElement(g.Layout.Headline,{style:{margin:10}},e.name),e.description&&u().createElement("div",{style:{marginTop:"var(--fluid-sm-space)"}},e.description)),u().createElement(b.Libraries.LibraryMemberThumbs,null))},v=e=>{const{useItemsFilter:t}=(0,y.getAppHooks)("libraries"),[r,a]=t(),{defaultItemsFilter:n}=(0,y.useAppState)("libraries",["defaultItemsFilter"]),i=()=>"type"===r.viewBy?u().createElement(g.Filter.RadioGroupItem,{title:(0,_.__)("Type"),items:b.Libraries.getItemTypeOptions(),value:r.type,defaultValue:n.type,onChange:e=>a({...r,type:e})}):u().createElement(g.Filter.RadioGroupItem,{title:(0,_.__)("Collection"),items:b.Libraries.getCollectionOptions(),value:r.collection,defaultValue:n.collection,onChange:e=>a({...r,collection:e})});return u().createElement(g.Filter,e,u().createElement(g.Filter.RadioGroupItem,{title:(0,_.__)("View By"),items:{type:(0,_.__)("Type"),collection:(0,_.__)("Collection")},value:r.viewBy,defaultValue:n.viewBy,onChange:e=>a({...r,viewBy:e})}),u().createElement(i,null),u().createElement(g.Filter.RadioGroupItem,{title:(0,_.__)("Sort By"),items:{name:(0,_.__)("Title"),created_at:(0,_.__)("Date Created"),updated_at:(0,_.__)("Last Updated")},value:r.orderBy,defaultValue:n.orderBy,onChange:e=>a({...r,orderBy:e})}),u().createElement(g.Filter.RadioGroupItem,{title:(0,_.__)("Order"),items:{ASC:(0,_.__)("Ascending"),DESC:(0,_.__)("Descending")},value:r.order,defaultValue:n.order,onChange:e=>a({...r,order:e})}),u().createElement(g.Filter.Button,{onClick:()=>a(n)},(0,_.__)("Reset Filter")))};var w=r(816),S=r.n(w);const C=()=>{const{items:e,setItems:t}=b.Libraries.LibraryContext.use(),{items:r,clearSelection:a,totalSelectedItems:n}=p.Selection.use();return React.createElement(g.Button,{status:"destructive",icon:React.createElement(g.Icon.Trash,null),disabled:0>=n,onClick:()=>{confirm((0,_.__)("Do you really want to delete these items?"))&&(async(n=[])=>{S().libraries.deleteItem(n).finally((()=>{t([...e.filter((e=>!r.includes(e.id)))]),a()}))})(r)}},(0,_.__)("Delete"))};var I=r(9489);const R=()=>{const e=(0,I.getWpRest)().libraries(),t=(0,m.useRef)(0),r=(t,r,n)=>{e.importPostThumb(t.id,r.media.thumb).finally((()=>{a(t,r,n)}))},a=(r,n,i)=>{const{attachments:s}=n.media;if(void 0===s)return void i(r);const l=s[t.current];void 0===l?(t.current=0,i(r)):e.importPostMedia(r.id,l).finally((()=>{t.current++,a(r,n,i)}))};return(e,t)=>new Promise((n=>{t.media.thumb?r(e,t,n):a(e,t,n)}))},k=()=>{const{items:e,setItems:t,createNotice:r}=b.Libraries.LibraryContext.use(),{items:a,clearSelection:n,totalSelectedItems:i}=p.Selection.use(),[s,l]=(0,m.useState)(null),[o,c]=(0,m.useState)(0),u=R(),d=(0,I.getWpRest)().libraries();return React.createElement(React.Fragment,null,React.createElement(g.Button,{disabled:null!==s,onClick:async()=>{let t=0,i=0,s=[];for(const r of a){const a=e.find((e=>e.id===r));void 0!==a&&(l(a),"color"===a.type||"theme_settings"===a.type||"code"===a.type?(s.push({name:a.name,type:a.type}),i++):"post"===a.type?await S().libraries.getItem(a.id).then((async e=>{await d.importPost(e.data).then((async t=>{if(t.data.error&&"post_type_not_registered"===t.data.error_code)return s.push({name:a.name,type:t.data.post_type}),void i++;await u(t.data,e.data)}))})):await d.importItem(a)),t++,c(t)}const o=s.map((e=>React.createElement("li",{key:e.name},e.name," (",e.type,")")));r(i<t?{status:"success",shouldDismiss:!1,content:React.createElement(React.Fragment,null,(0,_.__)("Library items imported!"),i>0&&React.createElement(React.Fragment,null," ",(0,_.__)("Some items were not able to be imported due to these post types not being registered on this site: "),React.createElement("br",null),React.createElement("ul",null,o)))}:{status:"error",shouldDismiss:!1,content:React.createElement(React.Fragment,null,(0,_.__)("The selected items were not able to be imported due to these post types not being registered on this site: "),React.createElement("br",null),React.createElement("ul",null,o))}),c(0),n()}},(0,_.__)("Import")),null!==s&&React.createElement("div",{className:"fl-asst-import-bar"},React.createElement("p",null,(0,_.__)("Import in progress. Navigating away from this view will stop the import process!")),React.createElement(x,{progress:o/a.length*100}),React.createElement("p",{style:{fontStyle:"italic",fontSize:"12px",marginTop:"var(--fluid-sm-space)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},(0,_.__)("Importing")," ",s.name)))},x=({progress:e})=>React.createElement("div",{style:{background:"var(--fluid-transparent-10)",borderRadius:"var(--fluid-radius)",height:"6px"}},React.createElement("div",{style:{background:"var(--fluid-transparent-4)",borderRadius:"var(--fluid-radius)",height:"6px",width:`${e}%`}})),F=({children:e,...t})=>{const{isReadOnly:r,library:a,uploader:n}=b.Libraries.LibraryContext.use();return!r&&a.permissions.edit_items?u().createElement(g.Layout.DropArea,(0,E.A)({onDrop:n.handleDrop},t),e):u().createElement("div",t,e)},B=()=>{const e=(0,d.useLocation)(),{items:t,showUpload:r,library:a}=b.Libraries.LibraryContext.use(),{defaultItemsFilter:n}=(0,y.useAppState)("libraries","defaultItemsFilter"),{useItemsFilter:i}=(0,y.getAppHooks)("libraries"),[s,l]=i(),o=b.Libraries.getFilteredItems(s,t),c=t&&!!t.length,{isSelecting:m}=p.Selection.use(),h=a.permissions.edit_items&&!((e,t=[])=>t.some((t=>e.endsWith(t))))(e.pathname,["/share","/settings","/collections"]);return u().createElement(F,{className:"fl-asst-library-content"},u().createElement(v,{style:{display:m&&"none"},isSticky:!0}),m&&u().createElement(p.Selection.Toolbar,{style:{minHeight:48,flexBasis:48,position:"sticky",width:"100%"},isSticky:!0},u().createElement(k,null),u().createElement(C,null)),u().createElement(p.Selection.Box,{itemSelector:".fluid-collection-item",mapElementToData:e=>parseInt(e.dataset.selectionId),isEnabled:h},u().createElement(L,null),u().createElement(f,null),u().createElement(b.Libraries.ItemsList,null),(()=>{const{viewBy:e,type:r,collection:a}=s;if(t&&!Object.keys(o).length){if("type"===e&&"all"!==r)return!0;if("collection"===e&&"all"!==a)return!0}return!1})()&&!r&&u().createElement(u().Fragment,null,u().createElement(g.Layout.Box,{style:{textAlign:"center"}},(0,_.__)("No results found.")),u().createElement(g.Layout.Row,null,u().createElement(g.Button,{onClick:()=>l(n)},(0,_.__)("Reset Filter")))),t&&!c&&!r&&u().createElement(g.Layout.Box,{style:{textAlign:"center"}},(0,_.__)("This library doesn't have any items yet."))))},D=(e,t)=>{const{library:r}=b.Libraries.LibraryContext.use();return t.unshift({component:u().createElement(T,{item:e})}),t.unshift({component:u().createElement(P,{item:e}),shouldRender:r.permissions.edit_items}),t.unshift({component:u().createElement(A,{item:e})}),t},T=({item:e})=>{const{createNotice:t}=b.Libraries.ItemContext.use(),[r,a]=(0,m.useState)(!1),n=(0,I.getWpRest)().libraries(),i=e=>{!e||e.data.error?t({status:"error",content:(0,_.__)("Error previewing content.")}):window.open(e.data.url)};return u().createElement(g.Button,{onClick:()=>{a(!0),n.previewPost(e).then((e=>{i(e)})).catch((()=>{i()})).finally((()=>{a(!1)}))},disabled:r},(0,_.__)("Preview"))},P=({item:e})=>{const{currentPageView:t,isLocalhost:r}=(0,y.getSystemConfig)(),{id:a,type:n,isSingular:i}=t,[s,l]=(0,m.useState)(!1),{updateItems:o}=b.Libraries.LibraryContext.use(),{createNotice:c,setItem:d}=b.Libraries.ItemContext.use(),{updateFormValues:p}=b.Libraries.ItemFormContext.use(),h=(0,I.getWpRest)().libraries(),E=(0,I.getWpRest)().posts(),f=[{label:(0,_.__)("Cancel"),disabled:s,onClick:({closeDialog:e})=>e()}];i&&f.push({label:s?(0,_.__)("Updating..."):(0,_.__)("Update"),isSelected:!0,disabled:s,onClick:({closeDialog:t})=>{const r=(0,_.sprintf)((0,_.__)("Do you really want to update this library item and replace its content with the current %s? This cannot be undone."),n.toLowerCase());if(!confirm(r))return;l(!0);E.findById(a).then((({data:r})=>{b.Uploader.screenshotUrl(r.previewUrl).then((r=>{((r="")=>{h.syncLibraryPost(a,e,{screenshot:r}).then((e=>{d(e.data),o(e.data),p(e.data),c({status:"success",content:(0,_.__)("Library item updated!"),shouldDismiss:!1})})).catch((()=>{c({status:"error",content:(0,_.__)("Error updating library item."),shouldDismiss:!1})})).finally((()=>{l(!1),t()}))})(r)}))}))}});const[L,v]=g.Modal.useDialog({title:(0,_.__)("Update this Library Item"),message:u().createElement(U,null),buttons:f});return u().createElement(u().Fragment,null,u().createElement(g.Button,{onClick:L},(0,_.__)("Update")),u().createElement(v,null))},U=()=>{const{currentPageView:e}=(0,y.getSystemConfig)(),{intro:t,name:r,type:a,isSingular:n}=e;return n?u().createElement(u().Fragment,null,u().createElement("div",{style:{padding:"var(--fluid-med-space) 0"}},u().createElement("strong",null,t,":")," ",r),u().createElement("div",null,(0,_.sprintf)((0,_.__)("Updating this library item will replace its content with the content of the current %s."),a.toLowerCase()))):(0,_.__)("Updating is currently not available. To update this library item, navigate to the post or page you'd like to update it with and click the update button again.")},A=({item:e})=>{const{currentPageView:t,contentTypes:r}=(0,y.getSystemConfig)(),{createNotice:a}=b.Libraries.ItemContext.use(),[n,i]=(0,m.useState)(null),[s,l]=(0,m.useState)(!1),o=(0,I.getWpRest)().libraries(),c=R(),d=e=>{const{editUrl:t,type:n,postTypeRegistered:s}=e,o=r[n]?r[n].labels.singular:(0,_.__)("Content");i(null),l(!1),e.error?a({status:"error",shouldDismiss:!1,content:(0,_.__)("Error importing library item.")}):a({status:"success",shouldDismiss:!1,content:u().createElement(u().Fragment,null,s&&(0,_.__)("Library item imported!"),!s&&u().createElement(u().Fragment,null,(0,_.__)("The library item was not able to be imported.")," ",(0,_.__)("The post type"),' "',u().createElement("strong",null,n),'" ',(0,_.__)("is not registered on this site.")),t&&u().createElement("a",{style:{textDecoration:"underline",marginLeft:"var(--fluid-sm-space)"},onClick:()=>{window.location.href=t}},(0,_.sprintf)((0,_.__)("Edit %s."),o)))})},p=e=>{i(null),l(!1),!e||e.error?a({status:"error",shouldDismiss:!1,content:(0,_.sprintf)((0,_.__)("Error replacing %s."),t.type.toLowerCase())}):(a({status:"success",shouldDismiss:!1,content:(0,_.sprintf)((0,_.__)("%s replaced!"),t.type)}),window.location.reload())};return(0,m.useEffect)((()=>{"create"===n?o.importPost(e).then((t=>{t.data.error&&"post_type_not_registered"===t.data.error_code?a({status:"error",shouldDismiss:!1,content:u().createElement(u().Fragment,null,(0,_.__)("The library item was not able to be imported.")," ",(0,_.__)("The post type"),' "',u().createElement("strong",null,t.data.post_type),'" ',(0,_.__)("is not registered on this site."))}):(l(!0),c(t.data,e).then(d))})).catch((()=>{i(null),l(!1),a({status:"error",content:(0,_.__)("Error importing library item.")})})):"replace"===n&&(()=>{if(!t.isSingular)return alert((0,_.__)("Replacing is currently not available. Navigate to the post or page you'd like to replace and click the import button again.")),void i(null);const r=(0,_.sprintf)((0,_.__)("Do you really want to replace the current %s with this library item? This cannot be undone."),t.type.toLowerCase());confirm(r)?o.syncPost(t.id,e).then((t=>{l(!0),c(t.data,e).then((()=>{p(t.data)}))})).catch((()=>{p()})):i(null)})()}),[n]),u().createElement(u().Fragment,null,u().createElement("select",{value:"",onChange:e=>i(e.target.value),disabled:n},u().createElement("option",{value:""},!s&&!n&&(0,_.__)("Import..."),!s&&n&&(0,_.__)("Importing..."),s&&(0,_.__)("Importing media...")),u().createElement("option",{value:"create"},(0,_.__)("Create New")),u().createElement("option",{value:"replace"},t.isSingular?(0,_.sprintf)((0,_.__)("Replace Current %s"),t.type):(0,_.__)("Replace Current Page"))))},N=(e,t)=>{const{createNotice:r}=b.Libraries.ItemContext.use(),[a,n]=(0,m.useState)(!1),i=(0,I.getWpRest)();return t.unshift({label:(0,_.__)("Import"),onClick:()=>{n(!0),i.libraries().importItem(e).then((e=>{r({status:e.data.error?"error":"success",content:e.data.error?e.data.error:(0,_.__)("Item imported!")})})).catch((e=>{r({status:"error",content:e.response.data.message})})).finally((()=>{n(!1)}))},disabled:a}),t},O=(e,t)=>{const{createNotice:r}=b.Libraries.ItemContext.use(),[a,n]=(0,m.useState)(!1),i=(0,I.getWpRest)();return t.unshift({label:(0,_.__)("Import"),onClick:()=>{n(!0),i.libraries().importItem(e).then((e=>{r({status:e.data.error?"error":"success",content:e.data.error?e.data.error:(0,_.__)("Item imported!")})})).catch((e=>{r({status:"error",content:e.response.data.message})})).finally((()=>{n(!1)}))},disabled:a}),t},W=(e,t)=>{const{createNotice:r}=b.Libraries.ItemContext.use(),[a,n]=(0,m.useState)(!1),i=(0,I.getWpRest)();return t.unshift({label:(0,_.__)("Import"),onClick:()=>{n(!0),i.libraries().importItem(e).then((e=>{r({status:e.data.error?"error":"success",content:e.data.error?e.data.error:(0,_.__)("Item imported!")})})).catch((e=>{r({status:"error",content:e.response.data.message})})).finally((()=>{n(!1)}))},disabled:a}),t},$=(e,t)=>{const{adminURLs:r,themeSlug:a,themeParentSlug:n}=(0,y.getSystemConfig)(),{createNotice:i}=b.Libraries.ItemContext.use(),[s,l]=(0,m.useState)(!1),o=(0,I.getWpRest)().libraries(),c=()=>{const{name:t,slug:r,parent:i}=e.data.theme;return(!i||i.slug!==a&&i.slug!==n)&&(r!==a&&r!==n&&(i?alert((0,_.sprintf)((0,_.__)('The themes "%s" or "%s" must be active to apply or preview these settings.'),i.name,t)):alert((0,_.sprintf)((0,_.__)('The theme "%s" must be active to apply or preview these settings.'),t)),!0))};return t.unshift({label:(0,_.__)("Apply to Theme"),onClick:()=>{c()||confirm((0,_.__)("Do you really want to import these theme settings? This will update your site design and cannot be undone."))&&(l(!0),o.importThemeSettings(e.id).then((e=>{l(!1),e.data.data.error?i({status:"error",content:e.data.data.error,shouldDismiss:!1}):(i({status:"success",content:(0,_.__)("Settings imported!")}),window.location.reload())})))},disabled:s}),t.unshift({label:(0,_.__)("Preview"),onClick:()=>{c()||window.open(`${r.customizeBase}?fl-asst-customizer-preview-init=${e.id}`)}}),t},V=(e,t)=>{const{createNotice:r}=b.Libraries.ItemContext.use(),[a,n]=(0,m.useState)(!1),i=(0,I.getWpRest)();return t.unshift({label:(0,_.__)("Import"),onClick:()=>{n(!0),i.libraries().importItem(e).then((e=>{r({status:e.data.error?"error":"success",content:e.data.error?e.data.error:(0,_.__)("Item imported!")})})).catch((e=>{r({status:"error",content:e.response.data.message})})).finally((()=>{n(!1)}))},disabled:a}),t},H=()=>u().createElement("div",{style:{display:"flex",position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%"}},u().createElement(b.Libraries.ItemDetail,{formConfig:c})),z=()=>{const{items:e,createNotice:t}=b.Libraries.LibraryContext.use(),[r,a]=(0,m.useState)(null),[n,i]=(0,m.useState)([]),[s,l]=(0,m.useState)(!1),[o,c]=(0,m.useState)(0),d=R(),p=(0,I.getWpRest)().libraries(),y=async()=>{let r=0,n=0,s=[],o=e.map((e=>e.id));i(o),l(!1);for(const t of o){const i=e.find((e=>e.id===t));void 0!==i&&(a(i),"color"===i.type||"theme_settings"===i.type||"code"===i.type?(s.push({name:i.name,type:i.type}),n++):"post"===i.type?await S().libraries.getItem(i.id).then((async e=>{await p.importPost(e.data).then((async t=>{if(t.data.error&&"post_type_not_registered"===t.data.error_code)return s.push({name:i.name,type:t.data.post_type}),void n++;await d(t.data,e.data)}))})):await p.importItem(i)),r++,c(r)}const m=s.map((e=>u().createElement("li",{key:e.name},e.name," (",e.type,")")));t(n<r?{status:"success",shouldDismiss:!1,content:u().createElement(u().Fragment,null,(0,_.__)("Library items imported!"),n>0&&u().createElement(u().Fragment,null," ",(0,_.__)("Some items were not able to be imported due to these post types not being registered on this site: "),u().createElement("br",null),u().createElement("ul",null,m)))}:{status:"error",shouldDismiss:!1,content:u().createElement(u().Fragment,null,(0,_.__)("The selected items were not able to be imported due to these post types not being registered on this site: "),u().createElement("br",null),u().createElement("ul",null,m))}),c(0),l(!0)};return null!==r||s?u().createElement("div",{style:{gridColumn:"span 2"}},!s&&u().createElement("p",null,(0,_.__)("Import in progress. Navigating away from this view will stop the import process!")),u().createElement(Y,{progress:o/n.length*100}),u().createElement("p",{style:{fontStyle:"italic",fontSize:"12px",marginTop:"var(--fluid-sm-space)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},null!==r&&!s&&(0,_.sprintf)((0,_.__)("Importing %s"),r.name),s&&(0,_.__)("Import Complete!"))):u().createElement(g.Button,{onClick:y,title:(0,_.__)("Import all items in this library into your site.")},(0,_.__)("Import Library"))},Y=({progress:e})=>u().createElement("div",{style:{background:"var(--fluid-transparent-10)",borderRadius:"var(--fluid-radius)",height:"6px"}},u().createElement("div",{style:{background:"var(--fluid-transparent-4)",borderRadius:"var(--fluid-radius)",height:"6px",width:`${e}%`}})),G=()=>{const{library:e}=b.Libraries.LibraryContext.use(),[t,r]=(0,m.useState)(!1);return u().createElement(g.Button,{title:(0,_.__)("Download a ZIP file of all items in this library."),disabled:t,onClick:async()=>{r(!0);const t=document.createElement("form"),a=document.createElement("input");t.method="POST",t.action=`${S().http.defaults.baseURL}/libraries/${e.id}/download`,a.name="token",a.type="hidden",a.value=S().session.getToken(),t.appendChild(a),document.body.appendChild(t),t.submit(),t.remove(),r(!1)}},(0,_.__)("Download ZIP"))},M=()=>{const{isReadOnly:e,library:t}=b.Libraries.LibraryContext.use(),{cloudUser:r}=(0,y.useSystemState)(),a=r.id===t.permissions.permissions_user_id&&!t.permissions.owner,n=t.permissions.shared&&!t.permissions.owner||a;return u().createElement(u().Fragment,null,!n&&u().createElement(g.Layout.Box,{padY:!1,className:"fl-asst-library-settings"},u().createElement(g.Page.Section,{label:(0,_.__)("Library Settings"),padY:!1},u().createElement(b.Libraries.LibrarySettingsForm,null))),!e&&u().createElement(u().Fragment,null,!n&&u().createElement(g.Layout.Box,{padY:!1},u().createElement(g.Page.Section,{label:(0,_.__)("Library Collections")},u().createElement(b.Libraries.LibraryCollectionsForm,null))),n&&t.permissions.edit_collections&&u().createElement(g.Layout.Box,{padY:!1},u().createElement(g.Page.Section,{label:(0,_.__)("Library Collections")},u().createElement(b.Libraries.LibraryCollectionsForm,null))),u().createElement(g.Layout.Box,{padY:!1},u().createElement(g.Page.Section,{label:(0,_.__)("Actions")},u().createElement(g.Button.Group,{appearance:"grid"},u().createElement(z,null),u().createElement(G,null))))),t.permissions.delete&&u().createElement(g.Layout.Box,null,u().createElement(g.Page.Section,{label:(0,_.__)("Danger Zone")},u().createElement(g.Layout.Headline,null,(0,_.__)("Delete This Library")),u().createElement("p",{style:{margin:"0"}},(0,_.__)("Once a library has been deleted, it is gone forever. Please be sure you want to delete this library."))),u().createElement(b.Libraries.LibraryDeleteForm,null)))},j=()=>{const{pathname:e}=(0,d.useLocation)();return u().createElement(b.Libraries.LibraryDetail,null,u().createElement("div",{style:{visibility:e.includes("/items/")?"hidden":"",width:"100%",flex:"1 1 auto",display:"flex",position:"absolute",top:0,bottom:0}},u().createElement(g.Page,{title:(0,_.__)("Library"),shouldShowBackButton:!0,actions:u().createElement(h,null),padX:!1,padY:!1},u().createElement(d.Switch,null,u().createElement(d.Route,{path:"/libraries/:id/settings",component:M}),u().createElement(d.Route,{path:"/libraries/:id",component:B})))),u().createElement(d.Switch,null,u().createElement(d.Route,{path:"/libraries/:id/item/:itemId",component:H})))},Z=()=>{const{cloudConfig:e}=(0,y.getSystemConfig)(),{cloudUser:t}=(0,y.useSystemState)(),[r,a]=(0,m.useState)(!1),n=()=>u().createElement(u().Fragment,null,u().createElement(g.Menu.Item,{href:e.appUrl,target:"_blank"},(0,_.__)("Launch Cloud")),u().createElement(g.Menu.Item,{onClick:()=>S().auth.logout()},(0,_.__)("Disconnect")));return u().createElement(g.Menu,{content:u().createElement(n,null),isShowing:r,onOutsideClick:()=>a(!1),style:{zIndex:9}},u().createElement(g.Button,{onClick:()=>a(!r),className:"fl-asst-cloud-gravatar-link",appearance:"elevator",size:"sm",style:{backgroundImage:`url(${t.gravatar.sm})`,backgroundSize:"contain",height:"25px",width:"25px",minHeight:"0",minWidth:"0"}}))},q=(e,t,r)=>{const a=(e="user",t=null)=>{const a=t?r[e][t]:r[e];return a?a.map(b.formatItem):[]},n=a("access"),i=[{key:"user",label:e?e.name:"",avatar:e.avatar?e.avatar.sizes.thumb.url:e.gravatar.md,to:"/libraries/user",items:a(),canCreateLibraries:!0},{key:"shared",label:(0,_.__)("Shared Libraries"),avatar:u().createElement(g.Icon.Shared,null),to:"/libraries/shared",isEnabled:!!r.shared.length,items:a("shared"),canCreateLibraries:!1},{key:"community",label:(0,_.__)("Community Libraries"),avatar:u().createElement(g.Icon.Swirl,null),isEnabled:!!n.length,items:n,canCreateLibraries:!1},...((e=[])=>e.map((e=>({...(0,b.formatSection)(e),items:a("team",e.id),canCreateLibraries:e.permissions.edit_libraries}))))(t)];return i},X=()=>{const{cloudUser:e}=(0,y.useSystemState)(),{filter:t,libraries:r,teams:a}=(0,y.useAppState)("libraries"),{owner:n,...i}=t;return u().createElement(g.Page,{title:(0,_.__)("Libraries"),icon:u().createElement(g.Icon.Library,{context:"sidebar"}),shouldShowBackButton:!1,actions:u().createElement(Z,null),padX:!1,padY:!1},u().createElement(b.LibraryNav,{sections:q(e,a,r),isLoading:!1,linkSectionHeaders:!1,displayItemsAs:"grid"}))},J=({baseURL:e})=>{const t=(0,d.useHistory)(),{isCloudConnected:r}=(0,y.useSystemState)("isCloudConnected");return r?u().createElement(p.Selection.Provider,null,u().createElement(d.Switch,null,u().createElement(d.Route,{exact:!0,path:`${e}`,component:X}),u().createElement(d.Route,{path:`${e}/:id`,component:j}))):(t.replace("/fl-cloud-connect"),null)}},8168:(e,t,r)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(this,arguments)}r.d(t,{A:()=>a})}}]);