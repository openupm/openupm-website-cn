(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1121:function(e,t,r){"use strict";r.r(t);var a=r(30),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("OpenUPM is a service for hosting and building open-source UPM (Unity Package Manager) packages. OpenUPM provides a managed UPM registry and automatic build pipelines. The intention is to create a universal platform to discover, share, and distribute open-source UPM packages.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("DISCLAIMER")]),e._v(" "),r("p",[e._v("OpenUPM is an open-source service, not an official service provided by Unity Technologies Inc.")])]),e._v(" "),r("h2",{attrs:{id:"how-it-works"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How It Works")]),e._v(" "),r("h3",{attrs:{id:"scoped-registry-and-command-line-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scoped-registry-and-command-line-interface"}},[e._v("#")]),e._v(" Scoped Registry and Command-Line Interface")]),e._v(" "),r("p",[e._v("Unity supports the "),r("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-scoped.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("scoped registry"),r("OutboundLink")],1),e._v(" that allowing developers to setup 3rd-party registries to host custom packages. OpenUPM provides a public UPM registry at "),r("code",[e._v("https://package.openupm.com")]),e._v(", and a group of services and tools to support it.")]),e._v(" "),r("p",[e._v("The downside of the scoped registry is that you need to "),r("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-manifestPrj.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("maintain the scope field"),r("OutboundLink")],1),e._v(" of the "),r("code",[e._v("manifest.json")]),e._v(" file to make it work. It's not a problem when working with a single namespace. But it's a challenge to work with a public registry with various namespaces. The dependency chain makes the issue worse. For example, the package-a depends on b, and b depends on c. It's a headache for a human to resolve all these dependencies to fill the scope field manually.")]),e._v(" "),r("p",[e._v("To remove the pain to install a 3rd-party package, we create a command-line tool called "),r("a",{attrs:{href:"https://github.com/openupm/openupm-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("openupm-cli"),r("OutboundLink")],1),e._v(" to maintain the manifest file. It can add, remove, and search packages in a terminal app, like Bash, Git-Bash, CMD, or PowerShell. When Unity detects the change of the manifest file, it will resolve it and install or remove packages for you.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("+-----+   update   +---------------+   resolve   +-----+\n| CLI | ---------\x3e | manifest.json | <---------- | UPM |\n+-----+            +---------------+             +-----+\n")])])]),r("p",[e._v("Learn how to use the command-line tool at "),r("RouterLink",{attrs:{to:"/docs/getting-started.html"}},[e._v("Getting Started with CLI")]),e._v(", or visit "),r("a",{attrs:{href:"https://github.com/openupm/openupm-cli#openupm-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenUPM-CLI Readme"),r("OutboundLink")],1),e._v(" for references. For more information about the Unity editor integration, please follow "),r("a",{attrs:{href:"https://github.com/openupm/openupm/issues/10",target:"_blank",rel:"noopener noreferrer"}},[e._v("#10"),r("OutboundLink")],1),e._v(".")],1),e._v(" "),r("p",[e._v("If you are unfamiliar with the command-line, you can still use other installation options available on the package detail page.")]),e._v(" "),r("h3",{attrs:{id:"automatic-build-pipelines"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#automatic-build-pipelines"}},[e._v("#")]),e._v(" Automatic Build Pipelines")]),e._v(" "),r("p",[e._v("OpenUPM maintains a "),r("a",{attrs:{href:"https://github.com/openupm/openupm/tree/master/data/packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("curated list"),r("OutboundLink")],1),e._v(" of open-source UPM repositories hosting on GitHub. Our build pipelines watch the list regularly to detect versioned Git tags, bundle the asset, then publish it to the OpenUPM registry as a package. This continuous publishing approach is different from the traditional package registry that requires the package owner/maintainer to submit the new release. It enables any developer with a GitHub account to contribute new UPM packages to the platform. The role is called "),r("RouterLink",{attrs:{to:"/contributors/"}},[e._v("Package Hunter")]),e._v(" to help the community grow faster.")],1),e._v(" "),r("h2",{attrs:{id:"regions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regions"}},[e._v("#")]),e._v(" Regions")]),e._v(" "),r("p",[e._v("For users who need to use OpenUPM services in China mainland, we suggest you switch to the "),r("a",{attrs:{href:"https://openupm.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("China region"),r("OutboundLink")],1),e._v(", which provided the localized website and a mirror registry server at "),r("code",[e._v("https://package.openupm.cn")]),e._v(". The mirror registry synced with the global region every hour.")]),e._v(" "),r("h2",{attrs:{id:"why-not"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-not"}},[e._v("#")]),e._v(" Why Not ...?")]),e._v(" "),r("h3",{attrs:{id:"unity-asset-store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unity-asset-store"}},[e._v("#")]),e._v(" Unity Asset Store")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://assetstore.unity.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity Asset Store"),r("OutboundLink")],1),e._v(" is the official solution for publishing software, assets, and services, offering both paid and free content. However, assets are installed into the Asset folder. The old fashion way is good for managing assets, but it lacks dependency management for libraries. Unity has a progressive way to encourage its large content to convert to the UPM format. But it takes time.")]),e._v(" "),r("p",[e._v("Unlike the Unity asset store, OpenUPM is focusing on the open-source from day one, and our open-source community is growing fast. Both the Unity Asset Store and OpenUPM will continue growing and inspiring each other.")]),e._v(" "),r("h3",{attrs:{id:"other-3rd-party-registries"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-3rd-party-registries"}},[e._v("#")]),e._v(" Other 3rd-party Registries")]),e._v(" "),r("p",[e._v("The other 3rd-party registries like "),r("a",{attrs:{href:"https://xcrew.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xcrew.dev"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://upm-packages.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("upm-packages.dev"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://unitynuget-registry.azurewebsites.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("unitynuget-registry"),r("OutboundLink")],1),e._v(" offering valuable contents and usually maintained by a few passionate developers.")]),e._v(" "),r("p",[e._v("If repositories of these UPM packages are hosting on GitHub, then they could be contributed to the OpenUPM platform as well.")]),e._v(" "),r("p",[e._v("In fact that openupm-cli is designed to support any 3rd-party registries when specifying the "),r("a",{attrs:{href:"https://github.com/openupm/openupm-cli#command-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("registry option"),r("OutboundLink")],1),e._v(". i.e. search the unitynuget-registry.")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("$ openupm search memory --registry"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://unitynuget-registry.azurewebsites.net\n┌───────────────────────────┬──────────────────────┬────────────┬──────────┐\n│ Name                      │ Version              │ Author     │ Date     │\n├───────────────────────────┼──────────────────────┼────────────┼──────────┤\n│ org.nuget.system.memory   │ "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.5")]),e._v(".3                │            │          │\n└───────────────────────────┴──────────────────────┴────────────┴──────────┘\n")])])]),r("h3",{attrs:{id:"upm-and-git-url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upm-and-git-url"}},[e._v("#")]),e._v(" UPM and Git Url")]),e._v(" "),r("p",[e._v("Since Unity 2019.3, developers can install the UPM package directly via Git URL. It's a quick way to install packages, however")]),e._v(" "),r("ul",[r("li",[e._v("lacking version control.")]),e._v(" "),r("li",[e._v("lacking support for the custom package with Git dependencies. Git URL is not the standard syntax of package dependency, hence you cannot resolve a custom package that depends on another custom package using Git URLs.")])]),e._v(" "),r("p",[e._v("To overcome these barriers, "),r("a",{attrs:{href:"https://github.com/mob-sakai/UpmGitExtension",target:"_blank",rel:"noopener noreferrer"}},[e._v("UpmGitExtension"),r("OutboundLink")],1),e._v(" is a 3rd-party plugin that providing the Git tag based version control and the "),r("a",{attrs:{href:"https://github.com/mob-sakai/GitDependencyResolverForUnity",target:"_blank",rel:"noopener noreferrer"}},[e._v("dependency resolver"),r("OutboundLink")],1),e._v(" for Git URLs. Along with "),r("a",{attrs:{href:"https://github.com/starikcetin/awesome-upm",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-upm"),r("OutboundLink")],1),e._v(" - a curated list of UPM repositories, together they offering a similar experience with OpenUPM. While the OpenUPM platform may be a better package discovery service.")]),e._v(" "),r("h2",{attrs:{id:"the-power-of-open-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-power-of-open-source"}},[e._v("#")]),e._v(" The Power of Open Source")]),e._v(" "),r("p",[e._v("OpenUPM is an open-source service. It's impossible to make it work without these amazing projects and services.")]),e._v(" "),r("p",[e._v("Open-source software")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://verdaccio.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verdaccio"),r("OutboundLink")],1),e._v(" for the package registry.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress"),r("OutboundLink")],1),e._v(" for writing docs.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/picturepan2/spectre",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spectre"),r("OutboundLink")],1),e._v(" for styling.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://fontawesome.com/license/free",target:"_blank",rel:"noopener noreferrer"}},[e._v("Font Awesome"),r("OutboundLink")],1),e._v(" for icon.")])]),e._v(" "),r("p",[e._v("Open-source friendly services")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://m.do.co/c/50e7f9860fa9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digital Ocean"),r("OutboundLink")],1),e._v(" for the cloud computing.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/devops/pipelines/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Pipelines"),r("OutboundLink")],1),e._v(" for build pipelines.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/netlify",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify"),r("OutboundLink")],1),e._v(" for hosting the website (region US).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Actions"),r("OutboundLink")],1),e._v(" for CI.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://mergify.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mergify"),r("OutboundLink")],1),e._v(" for automatically merging. (use referral code "),r("code",[e._v("openupm-241828")]),e._v(" to get one year free seat)")])])])}),[],!1,null,null,null);t.default=n.exports}}]);