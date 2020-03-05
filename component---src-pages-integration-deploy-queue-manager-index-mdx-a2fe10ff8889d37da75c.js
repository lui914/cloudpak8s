(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),r=a.n(i),o=a("NmYn"),l=a.n(o),c=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("pEPl"),O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0}),r=i===n,o=new RegExp(n+"(?!-)"),c=a.replace(o,i);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(N.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},i))))))},n}(r.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,h=s.tabs,O=s.title,N=s.theme,f=s.description,v=s.keywords,C=n.data.site.pathPrefix,k=C?i.pathname.replace(C,""):i.pathname,x=h?k.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:h,homepage:!1,theme:N,pageTitle:O,pageDescription:f,pageKeywords:v,titleType:m},Object(d.b)(u,{title:r?Object(d.b)(r,null):O,label:"label",tabs:h}),h&&Object(d.b)(y,{slug:k,tabs:h,currentTab:x}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:i,slug:k,tabs:h,currentTab:x}),Object(d.b)(c.a,null))}},bGeB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l={_frontmatter:o},c=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This page provides the guidance for installing MQ for both Red Hat OpenShift on-prem and on IBM Cloud."),Object(n.b)("h3",null,"Make sure permissions are set"),Object(n.b)("p",null,"You can open up permissions for install in you ",Object(n.b)("inlineCode",{parentName:"p"},"mq")," namespace by issing the following commands:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc adm policy add-scc-to-group ibm-anyuid-scc system:serviceaccounts:mq\noc adm policy add-scc-to-group anyuid system:serviceaccounts:mq\n")),Object(n.b)("h3",null,"Create MQ instance in Cloud Pak for Integration"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create an instance of MQ queue manager by clicking on “Add new instance” in the MQ tile in Platform Navigator.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("img",r({parentName:"p"},{src:"5.mq-nav.png",alt:"Add New Instance"})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"This will open a pop up window showing requirements for deploying MQ. Click ",Object(n.b)("strong",{parentName:"p"},"Continue"),".   ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"This will open the MQ helm chart to deploy MQ to the cluster.  Click ",Object(n.b)("strong",{parentName:"p"},"Overview")," to review the requirements to deploy MQ chart.  ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Unless you require fine grained rights to be defined for your installation, the default rbac settings defined on install will be sufficient.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"MQ also requires Storage class or Persistent volume to be pre-defined if persistence is being used. It is possible to deploy MQ chart without using persistence. However, it is highly recommended to use persistent storage as any changes you make in the MQ UI will be lost if the pods were recreated.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you are using the entitled registry, your image pull secret will already be created for you as ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you are not using entitled registry, obtain an image pull secret using the command below:"),Object(n.b)("p",{parentName:"li"},"To obtain the secret for pulling the image login to the OCP CLI and run:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"oc get secrets -n mq\n")),Object(n.b)("p",{parentName:"li"},"The pull secret starts with ",Object(n.b)("strong",{parentName:"p"},"deployer-dockercfg"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"After performing the above pre-requisites, click on ",Object(n.b)("strong",{parentName:"p"},"Configuration")," tab to provide the values required to deploy MQ chart. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Provide the name for the chart, select ",Object(n.b)("strong",{parentName:"p"},"mq")," as Target namespace and select ",Object(n.b)("strong",{parentName:"p"},"local-cluster")," as Target-Cluster. Also check the ‘License’ box to accept license.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Expand the ‘Quick Start’ twisty to expose the Configuration Settings for TLS.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("img",r({parentName:"p"},{src:"6.mq-quickstart.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the Cluster Hostname as the proxy node address for your installation.  Omit the ",Object(n.b)("inlineCode",{parentName:"p"},"https://")," in the url.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Next, click to expand ‘All parameters’ to configure the chart for deployment. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Untickthe box “Production usage” box.  Double check your image repository is correct.  For entitled registry it will look like ",Object(n.b)("inlineCode",{parentName:"p"},"cp.icr.io/ibm-mqadvanced-server-integration"),".  ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the ",Object(n.b)("inlineCode",{parentName:"p"},"Image Pull Secret")," to ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," for the entitled registry or the ",Object(n.b)("strong",{parentName:"p"},"deployer-dockercfg")," value specific to your environment as indicated in the step above.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Moving down, under the ",Object(n.b)("inlineCode",{parentName:"p"},"IBM Cloud Pak for Integration")," heading it will ask for the location of your platform navigator is installed at.  In most installations, this will be the ",Object(n.b)("inlineCode",{parentName:"p"},"integration")," namespace, but check to be sure.  ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Moving down, under the ",Object(n.b)("inlineCode",{parentName:"p"},"TLS")," -> ",Object(n.b)("inlineCode",{parentName:"p"},"Configuration Settings for TLS"),".  Tick the ",Object(n.b)("inlineCode",{parentName:"p"},"Generate Certificate")," box. The cluster hostname value should already be populated with the proxy node value defined earlier.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Under the ",Object(n.b)("inlineCode",{parentName:"p"},"Persistence")," heading.  If you choose to use persistent storage then you will need to tick both the ",Object(n.b)("inlineCode",{parentName:"p"},"Enable persistence")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Use dynamic provisioning")," boxes.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Under the ",Object(n.b)("inlineCode",{parentName:"p"},"Data PVC")," heading.  Populate the ",Object(n.b)("inlineCode",{parentName:"p"},"Storage Class name")," with the requisite storageclass.  Use ",Object(n.b)("inlineCode",{parentName:"p"},"oc get storageclasses")," to get a list on your system.  If you are using ROKS this can be the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmc-file-bronze"),".  Either way, file storage (not block) is required for use with MQ.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"There is no need to repeat this for the other sections (Log PVC and QM PVC etc) for a dev environment.  If you want to use a separate storage class for these items, you can individually specify the storageclasses as required.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Moving down, under Security, ensure the check box for ",Object(n.b)("inlineCode",{parentName:"p"},"Initialize volume as root")," is ticked.  This is the default.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Last item to configure is to enable OD Tracing for the MQ instance.  At the bottom of the MQ Chart you will find the ",Object(n.b)("inlineCode",{parentName:"p"},"Operation Dashboard Configuration"),".\n",Object(n.b)("img",r({parentName:"p"},{src:"11.tracingchart.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the Tick Box for ",Object(n.b)("inlineCode",{parentName:"p"},"Enable Operations Dashboard"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"At the bottom, populate the ",Object(n.b)("inlineCode",{parentName:"p"},"OD tracing instance namespace")," with the name of the tracing namespace, which in this sample is ",Object(n.b)("inlineCode",{parentName:"p"},"tracing"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Scroll to the bottom and then click install."))),Object(n.b)("h3",null,"Monitoring the Deployment"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Once all the pods are up, it will resemble the following.  Use the ",Object(n.b)("inlineCode",{parentName:"li"},"oc get pods")," to view the pods in flight\n",Object(n.b)("img",r({parentName:"li"},{src:"12.mqpods.png",alt:null})))),Object(n.b)("h3",null,"Register with Tracing Service"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Near the end of the install of MQ, a job will be created that has the name ",Object(n.b)("inlineCode",{parentName:"li"},"odtracing.registration"),".  This job will not complete until the Registration is completed inside of the Tracing capability."),Object(n.b)("li",{parentName:"ol"},"What will happen is that a request will be created inside of tracing that you need to act upon.  Navigate to the Platform Navigator and via the Hamburger menu select Tracing and then when the window pops out select the name of your tracing instance which should be called ",Object(n.b)("inlineCode",{parentName:"li"},"tracing"),Object(n.b)("img",r({parentName:"li"},{src:"13.tracing-nav.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"Within tracing, select the ",Object(n.b)("inlineCode",{parentName:"li"},"Manage")," icon from the menu.  Looks like a cog wheel.\n",Object(n.b)("img",r({parentName:"li"},{src:"14.tracing-from-menu.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"Click on the ",Object(n.b)("inlineCode",{parentName:"li"},"Registration Requests")," icon."),Object(n.b)("li",{parentName:"ol"},"You should see a new registration request for your MQ install.  Click the ",Object(n.b)("inlineCode",{parentName:"li"},"approve")," link"),Object(n.b)("li",{parentName:"ol"},"You will see a pop up window with some lines to copy to your clipboard.  Click the 2 boxes icon in the top right icon to copy the commands required.\n",Object(n.b)("img",r({parentName:"li"},{src:"15.process-request.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"Ensuring you have an active ",Object(n.b)("inlineCode",{parentName:"li"},"oc")," session and in the ",Object(n.b)("inlineCode",{parentName:"li"},"mq")," project.  Paste the commands to the window and it will run then and finish the processing."),Object(n.b)("li",{parentName:"ol"},"If you are slow in doing the steps above.  It is possible you might see the ",Object(n.b)("inlineCode",{parentName:"li"},"odtracing.registration")," job fail.  No worries.  Once you complete the pasting of the commands to create your secret, the job will re-create itself.")))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-deploy-queue-manager-index-mdx-a2fe10ff8889d37da75c.js.map