(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{610:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件上手"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 组件上手")],1),t._v(" "),a("p",[t._v("关于微信小程序组件的相关知识，本文不会做详细的描述，这些知识点需要你去参考微信小程序的"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义组件"),a("OutboundLink")],1),t._v("来获取，本文的重点是保证每一个使用者都能正确快速的在自己的项目里使用Lin-UI。")]),t._v(" "),a("h2",{attrs:{id:"组件的引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的引入"}},[t._v("#")]),t._v(" 组件的引入")]),t._v(" "),a("p",[t._v("引入Lin-UI组件和引入自己写的组件一样，首先需要在 "),a("code",[t._v("json")]),t._v(" 文件中进行自定义组件声明，也就是在"),a("code",[t._v("usingComponents")]),t._v(" 下以键值对的形式去注册，"),a("code",[t._v("l-icon")]),t._v(" 是组件的名称，"),a("code",[t._v("path/to/icon/index")]),t._v(" 是组件的路径。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("需要注意的是，由于引入lin-ui的方式不同，（npm引入/ 复制源码的dist文件夹），所以这里的"),a("code",[t._v("path/to")]),t._v(" 只是用来表示路径这个含义，并不能直接复制进项目里。需要你根据实际情况来配置正确的路径。")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/icon/index"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"组件的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的使用"}},[t._v("#")]),t._v(" 组件的使用")]),t._v(" "),a("p",[t._v("当组件的声明已经完成，那么我们在页面的 "),a("code",[t._v("wxml")]),t._v(" 中就可以像使用基础组件一样使用自定义组件。\n"),a("br"),t._v("同时每个组件都有相对应的"),a("code",[t._v("props")]),t._v("（属性）, 例如: "),a("code",[t._v("l-icon")]),t._v("标签上的"),a("code",[t._v("name")]),t._v("属性，就是根据传递不同的name值，来显示不同的"),a("code",[t._v("icon")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。")])]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<l-icon name="add" />\n')])])]),a("h2",{attrs:{id:"组件的事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的事件"}},[t._v("#")]),t._v(" 组件的事件")]),t._v(" "),a("p",[t._v("大部分的组件都有对应的事件，详细的内容请参阅每个组件的文档，以及统一的"),a("a",{attrs:{href:"http://doc.mini.talelin.com/start/event.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件说明"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"全局自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局自定义组件"}},[t._v("#")]),t._v(" 全局自定义组件")]),t._v(" "),a("p",[t._v("我们都知道微信小程序的组件使用需要在页面的json文件里注册，那么这个时候会有一个问题：一些常用的基础组件，如"),a("code",[t._v("toast")]),t._v("，"),a("code",[t._v("diolag")]),t._v("等等，每次在一个页面使用都要在"),a("code",[t._v("json")]),t._v("中去声明一次，实在过于繁琐，或则说这一点也不"),a("code",[t._v("前端")]),t._v("。\n"),a("br"),t._v("\n所以，对于这类跨页面，使用频率高的组件，我们可以在"),a("code",[t._v("app.json")]),t._v("里一次性声明，也就是创建"),a("code",[t._v("全局自定义组件")]),t._v("，声明的方法和页面声明一样。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Demo"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabBar"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"list"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pagePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"首页"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pagePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs/logs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日志"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-toast"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/toast/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/message/index"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样，我们使用Lin-UI开发的效率又会大大提升啦！")]),t._v(" "),a("p",[a("code",[t._v("官方提示")]),t._v(":组件开发体验爽，一直使用一直爽！")]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=e.exports}}]);