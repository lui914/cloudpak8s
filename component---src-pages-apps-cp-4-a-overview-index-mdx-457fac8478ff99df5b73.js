(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),l=a("q1tI"),r=a.n(l),i=a("NmYn"),o=a.n(i),b=a("OKom"),p=a("k4MR"),c=a("TSYQ"),s=a.n(c),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,l=void 0===n?[]:n;return Object(d.b)("div",{className:s()(u.pageHeader,(t={},t[u.withTabs]=l.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,l=a||n,r=l.baseUrl,i=l.subDirectory,o=r+"/edit/"+l.branch+i+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=o()(e,{lower:!0}),r=l===n,i=new RegExp(n+"(?!-)"),b=a.replace(i,l);return Object(d.b)("li",{key:e,className:s()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(d.b)(f.Link,{className:N.link,to:""+b},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},l))))))},n}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,l=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,s=t.relativePagePath,u=t.titleType,O=c.tabs,j=c.title,f=c.theme,N=c.description,y=c.keywords,S=n.data.site.pathPrefix,_=S?l.pathname.replace(S,""):l.pathname,k=O?_.split("/").filter(Boolean).slice(-1)[0]||o()(O[0],{lower:!0}):"";return Object(d.b)(p.a,{tabs:O,homepage:!1,theme:f,pageTitle:j,pageDescription:N,pageKeywords:y,titleType:u},Object(d.b)(m,{title:r?Object(d.b)(r,null):j,label:"label",tabs:O}),O&&Object(d.b)(w,{slug:_,tabs:O,currentTab:k}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:s})),Object(d.b)(g.a,{pageContext:t,location:l,slug:_,tabs:O,currentTab:k}),Object(d.b)(b.a,null))}},"5MoZ":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),l=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},o={_frontmatter:i},b=l.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(b,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",null,"Table of Contents"),Object(n.b)("p",null,"Before you get started:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a-prereq/"}),"Prerequisites"))),Object(n.b)("p",null,"Installing Cloud Pak on a cluster:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a_installation/"}),"Installing Cloud Pak for Applications"))),Object(n.b)("p",null,"Setting up a developer environment:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a_install_dev_tools_mac/"}),"Install Cloud Pak for Applications (Mac OSx) Developer Tools")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a_install_dev_tools_win/"}),"Install Cloud Pak for Applications (Windows) Developer Tools"))),Object(n.b)("p",null,"Using the Cloud Pak:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a_use_case_app_mod/"}),"Modernize existing applications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a_use_case_cloud_native/"}),"Building new applications"))),Object(n.b)("p",null,"Learn more"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a_learn_more/"}),"Next steps"))),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"The Cloud Pak for Applications provides product offerings to support modernizing existing applications and building new cloud native applications.\nThe applications run within a Kubernetes cluster provided with the Red Hat OpenShift Container Platform.\nThe focus provided here is on running application workloads as containers.\nThe Cloud Pak for Applications is a bundle of multiple offerings.\nThis diagram provides an overview of what offerings are included and what they would be used for."),Object(n.b)("img",{src:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/images/icpa_overview.png",alt:"Overview"}),Object(n.b)("p",null,"The key offerings reviewed in this installation and usage scenarios are:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Offering"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Installation Steps"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Red Hat OpenShift Container Platform"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"../../ocp/introduction"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Kubernetes platform required for running application workloads")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Kabanero"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"../cp4a_installation"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Open source projects to build, deploy and run applications.  Installs into an OpenShift Container Platform cluster.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Developer Tools"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"../cp4a_install_dev_tools_mac"}),"MacOS")," / ",Object(n.b)("a",r({parentName:"td"},{href:"../cp4a_install_dev_tools_win"}),"Windows")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Tools needed for a developer to build, test and debug applications.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Red Hat Runtimes"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-icpa.html"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Application runtimes and framework for JBoss, Vert.x and Node.")))),Object(n.b)("p",null,"These offerings are also included in the Cloud Pak for Applications but not focus within this material.  These offerings support running existing applications but not focused on the container platform."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Offering"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Installation Steps"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"IBM WebSphere Application Server Network Deployment"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-icpa.html"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Continue to run existing WebSphere apps.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"IBM WebSphere Application Server"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-icpa.html"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Continue to run existing WebSphere apps.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"IBM WebSphere Application Server Liberty Core"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-icpa.html"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Continue to run existing Liberty apps.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"IBM Mobile Foundation"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-icpa.html"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Run existing mobile apps.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"IBM Cloud Private"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-icpa.html"}),"Install")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Migrate existing workloads to OpenShift Container Platform.")))),Object(n.b)("h2",null,"Installation Overview"),Object(n.b)("p",null,"The primary method for installing the Cloud Pak for Applications follows the key high level steps of:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Install Red Hat OpenShift Container Platform")," -  Cloud Pak provides OpenShift Container Platform to create a new cluster.  You can also use any existing OpenShift 4.2 to install the Cloud Pak into."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Install Cloud Pak for Applications"),"  - The Cloud Pak is installed into the cluster and provides Transformation Advisor and Kabanero.  The installation provides IBM runtimes for Liberty, Microprofile, and Spring, as well as several open source projects which include Appsody, Tekton, and Knative."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Install developer tools")," - A developer is provided tools for an IDE and key CLIs to access the cluster.  Instructions are available for both Mac OSx and Windows."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Building DevOps pipeline to use cloud runtimes")," - Application workloads are deployed with an automated deployment pipeline that will use cloud runtimes such as Liberty or other additional Red Hat Runtimes.")))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-apps-cp-4-a-overview-index-mdx-457fac8478ff99df5b73.js.map