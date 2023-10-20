(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1123:function(e,t,a){"use strict";a.r(t);var s=a(30),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nuget-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuget-packages"}},[e._v("#")]),e._v(" NuGet Packages")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Experiments")]),e._v(" "),a("p",[e._v("The UnityNuGet uplink is an experimental feature.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/nuget/what-is-nuget",target:"_blank",rel:"noopener noreferrer"}},[e._v("NuGet"),a("OutboundLink")],1),e._v(" is the package manager for .NET, designed to enable developers to share fundamental reusable code. Many UPM packages use NuGet packages as embed DLLs. The practice gets troubled when two packages included the same DLL or different versions of one NuGet package. The solution is to create a shared NuGet package that everyone can depend on.")]),e._v(" "),a("p",[e._v("Thanks to xoofx's "),a("a",{attrs:{href:"https://github.com/xoofx/UnityNuGet",target:"_blank",rel:"noopener noreferrer"}},[e._v("UnityNuGet"),a("OutboundLink")],1),e._v(" which is a project that provides a service to bundle NuGet packages into the UPM format. Similar to OpenUPM, UnityNuGet maintains a "),a("a",{attrs:{href:"https://github.com/xoofx/UnityNuGet/blob/master/registry.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("curated list"),a("OutboundLink")],1),e._v(" of NuGet packages. All packages list there should be available on a registry at "),a("a",{attrs:{href:"https://unitynuget-registry.azurewebsites.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://unitynuget-registry.azurewebsites.net"),a("OutboundLink")],1),e._v(". The NuGet Registry takes care of packaging up these NuGet packages in a consistent, automated way, uses proper package naming under the "),a("code",[e._v("org.nuget")]),e._v(" scope.")]),e._v(" "),a("p",[e._v("OpenUPM registry "),a("a",{attrs:{href:"https://verdaccio.org/docs/en/uplinks",target:"_blank",rel:"noopener noreferrer"}},[e._v("uplinks"),a("OutboundLink")],1),e._v(" to UnityNuGet registry to make it easier to use a NuGet package.")]),e._v(" "),a("ul",[a("li",[e._v("OpenUPM registry sync with UnityNuGet registry hourly.")]),e._v(" "),a("li",[e._v("Cached tarballs are hosting on CDN as well.")]),e._v(" "),a("li",[e._v("You can view package detail via openupm-cli "),a("code",[e._v("openupm view org.nuget.some-package")]),e._v(".")])]),e._v(" "),a("p",[e._v("The integration comes with a few limitations.")]),e._v(" "),a("ul",[a("li",[e._v("NuGet packages are not searchable or browse-able on the OpenUPM website.")]),e._v(" "),a("li",[e._v("Search for NuGet packages via OpenUPM registry's search endpoint will result in \"404 packages not found\". This affects both openupm-cli's search command and Untiy PackMan's search feature. As a side-effect of the issue,\n"),a("ul",[a("li",[e._v('NuGet packages will be invisible in Unity PackMan\'s "My Registries" section, but still visible on the "In Project" section.')]),e._v(" "),a("li",[e._v('Unity console will warn "Error searching for packages" the first time open the PackMan.')]),e._v(" "),a("li",[e._v("The search issue may be resolved with an improved search endpoint behavior in the future.")])])])]),e._v(" "),a("h2",{attrs:{id:"using-uplinked-unitynuget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-uplinked-unitynuget"}},[e._v("#")]),e._v(" Using Uplinked UnityNuGet")]),e._v(" "),a("p",[e._v("See the demo project at "),a("a",{attrs:{href:"https://github.com/favoyang/com.example.nuget-consumer",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/favoyang/com.example.nuget-consumer"),a("OutboundLink")],1),e._v(" that including,")]),e._v(" "),a("ul",[a("li",[e._v("Install an OpenUPM package that depends on UnityNuGet.")]),e._v(" "),a("li",[e._v('Solve the potential assembly conflicting by disabling the "Assembly Version Validation".')])]),e._v(" "),a("h2",{attrs:{id:"using-unitynuget-directly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-unitynuget-directly"}},[e._v("#")]),e._v(" Using UnityNuGet Directly")]),e._v(" "),a("p",[e._v("Put UnityNuGet registry with scopes "),a("code",[e._v("org.nuget")]),e._v(" as the first element of the scoped registries.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scopedRegistries"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Unity NuGet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://unitynuget-registry.azurewebsites.net"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scopes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.nuget"')]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ...\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"list-all-unitynuget-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-all-unitynuget-packages"}},[e._v("#")]),e._v(" List all UnityNuGet Packages")]),e._v(" "),a("p",[e._v("Checkout the "),a("a",{attrs:{href:"https://github.com/xoofx/UnityNuGet/blob/master/registry.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("curated list"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Or use the "),a("a",{attrs:{href:"https://unitynuget-registry.azurewebsites.net/-/all",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("/-/all")]),e._v(" API endpoint"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -s https://unitynuget-registry.azurewebsites.net/-/all"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("json -k\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);