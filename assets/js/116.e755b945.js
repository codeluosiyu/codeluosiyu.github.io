(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{539:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"消息提示-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息提示-message"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v("  消息提示 Message")],1),t._v(" "),a("blockquote",[a("p",[t._v("用于主动操作后的消息反馈。")])]),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("Message组件有以下两种用法：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("常规组件的使用方式，通过更改传入的属性值来控制"),a("code",[t._v("Message")]),t._v("的显示和隐藏。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("wx.lin.showMessage(object)")]),t._v("，使用"),a("code",[t._v("wx.lin.showMessag")]),t._v("的调用时，与组件的使用一致，需要在json文件中引入组件，且在wxml中写入"),a("code",[t._v("Message")]),t._v("组件。")])])]),t._v(" "),a("p",[a("code",[t._v("wx.lin.showMessage")]),t._v("接受的参数是个对象，里面包含了与消息提示相关的属性。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("第一种用法小程序基础库版本 "),a("code",[t._v("2.6.1")]),t._v(" 开始支持。")])]),t._v(" "),a("h3",{attrs:{id:"示例代码-第一种用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-第一种用法"}},[t._v("#")]),t._v(" 示例代码（第一种用法）")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- wxml --\x3e\n<l-button bind:lintap="showMessage">操作</l-button>\n<l-message content="{{content}}"/>\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'消息提示'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"示例代码-第二种用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-第二种用法"}},[t._v("#")]),t._v(" 示例代码（第二种用法）")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<l-message />\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'消息提示'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"显示消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示消息"}},[t._v("#")]),t._v(" 显示消息")]),t._v(" "),a("p",[t._v("通过设置"),a("code",[t._v("show")]),t._v("属性为"),a("code",[t._v("true")]),t._v("显示消息（第一种用法使用该属性）,设置为"),a("code",[t._v("fasle")]),t._v("隐藏消息。")]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-wxml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- wxml --\x3e\n<l-button bind:lintap="showMessage">操作</l-button>\n<l-message content="{{content}}"/>\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'消息提示'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"消息内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息内容"}},[t._v("#")]),t._v(" 消息内容")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("content")]),t._v("属性设置消息提示的内容，此处文字建议不超过十个。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/message/1.png",alt:"height=50"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"提示类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示类型"}},[t._v("#")]),t._v(" 提示类型")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("type")]),t._v("属性设置为"),a("code",[t._v("primary")]),t._v("、"),a("code",[t._v("success")]),t._v("、"),a("code",[t._v("warning")]),t._v("、"),a("code",[t._v("error")]),t._v("创建不同类型的消息提示。默认值为"),a("code",[t._v("primary")]),t._v("。")]),t._v(" "),a("p",[t._v(":::img\n"),a("img",{attrs:{src:"/screenshots/message/2.png",alt:"height=200"}}),t._v("\n:::")]),t._v(" "),a("h3",{attrs:{id:"示例代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"消息提示时长"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息提示时长"}},[t._v("#")]),t._v(" 消息提示时长")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("duration")]),t._v("属性设置消息提示时长。默认值为"),a("code",[t._v("1500ms")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        duration："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"消息图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息图标"}},[t._v("#")]),t._v(" 消息图标")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("icon")]),t._v("属性设置消息内的图标的名称。默认图标为对应"),a("code",[t._v("type")]),t._v("的图标，当"),a("code",[t._v("type")]),t._v("为primary 时无图标。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("image")]),t._v("属性设置消息文字前的自定义图片。通过"),a("code",[t._v("l-image-class")]),t._v("属性可更改自定义图片的样式。")]),t._v(" "),a("h3",{attrs:{id:"示例代码-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        duration："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"消息提示属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息提示属性"}},[t._v("#")]),t._v(" 消息提示属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示与隐藏消息")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("fasle")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息提示类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("primary/warning/success/error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("primary")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息显示的时长")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息图标")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("type")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息图标的大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息图标的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息前的自定义图片")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息调用成功后的回调函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("top")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息弹出时距离视窗顶部的距离（单位"),a("code",[t._v("rpx")]),t._v("）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])]),t._v(" "),a("h2",{attrs:{id:"消息提示外部样式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息提示外部样式类"}},[t._v("#")]),t._v(" 消息提示外部样式类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖消息区域自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l-image-class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖消息前自定义图片的自定义外部样式类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=n.exports}}]);