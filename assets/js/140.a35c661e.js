(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{589:function(t,e,l){"use strict";l.r(e);var a=l(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"价格-price"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#价格-price"}},[t._v("#")]),t._v(" "),l("H2Icon"),t._v(" 价格 Price")],1),t._v(" "),l("blockquote",[l("p",[t._v("售卖商品的价格。")])]),t._v(" "),l("h2",{attrs:{id:"价格及价格符号"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#价格及价格符号"}},[t._v("#")]),t._v(" 价格及价格符号")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("value")]),t._v("属性设定价格。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("unit")]),t._v("属性设置价格单位。默认值为"),l("code",[t._v("￥")]),t._v("。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("mode")]),t._v("属性设置价格类型，可选值为"),l("code",[t._v("number")]),t._v("、"),l("code",[t._v("text")]),t._v("，默认值为"),l("code",[t._v("number")]),t._v("。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/price/1.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("h3",{attrs:{id:"示例代码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-price unit="￥" value="666"></l-price>\n  <l-price unit="$" value="666"></l-price>\n  <l-price unit="￥" value="666~777" mode="text"></l-price>\n')])])]),l("h2",{attrs:{id:"是否为删除态价格"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#是否为删除态价格"}},[t._v("#")]),t._v(" 是否为删除态价格")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("deleted")]),t._v("属性设置价格是否为删除态。默认值为"),l("code",[t._v("false")]),t._v("。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("del-color")]),t._v("属性设置价格删除态的颜色。")]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/price/2.png",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("h3",{attrs:{id:"示例代码-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-price \n    unit="￥"\n    value="666"\n    deleted="{{true}}"\n    del-color="#3963bc"\n  ></l-price>\n')])])]),l("h2",{attrs:{id:"价格小数保留位数及自动补零"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#价格小数保留位数及自动补零"}},[t._v("#")]),t._v(" 价格小数保留位数及自动补零")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("reserve-digit")]),t._v("属性设置价格小数保留的位数。默认保留"),l("code",[t._v("2")]),t._v("位小数。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("autofix")]),t._v("属性设置自动补零。例如设置"),l("code",[t._v("value")]),t._v("为"),l("code",[t._v("666.00")]),t._v("，默认显示为"),l("code",[t._v("666")]),t._v("，开启自动补零可正常显示。")]),t._v(" "),l("h3",{attrs:{id:"示例代码-3"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-price \n    unit="￥"\n    value="666.00"\n    autofix\n    reserve-digit="2"\n    unit-color="#3963bc"\n    unit-size="28"\n  ></l-price>\n')])])]),l("h2",{attrs:{id:"价格颜色及大小"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#价格颜色及大小"}},[t._v("#")]),t._v(" 价格颜色及大小")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("color")]),t._v("、"),l("code",[t._v("size")]),t._v("、"),l("code",[t._v("bold")]),t._v("属性设置价格整体的颜色、大小及字体粗细。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("unit-size")]),t._v("属性设置价格单位的大小。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("unit-color")]),t._v("属性设置价格单位的颜色。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("value-size")]),t._v("属性设置价格的大小。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("value-color")]),t._v("属性设置价格的颜色。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),l("p",[l("code",[t._v("color")]),t._v("、"),l("code",[t._v("size")]),t._v("、"),l("code",[t._v("bold")]),t._v("可以被"),l("code",[t._v("unit-size")]),t._v("等属性覆盖。")])]),t._v(" "),l("p",[t._v(":::img\n"),l("img",{attrs:{src:"/screenshots/price/3.jpg",alt:"height=100"}}),t._v("\n:::")]),t._v(" "),l("h3",{attrs:{id:"示例代码-4"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('  <l-price \n    unit="￥"\n    value="666"\n    unit-color="#3963bc"\n    unit-size="28"\n  ></l-price>\n')])])]),l("h2",{attrs:{id:"价格属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#价格属性"}},[t._v("#")]),t._v(" 价格属性")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("unit")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格单位")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("￥")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("mode")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格内容类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number/text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("text")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("deleted")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("价格是否为删除态")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("reserve-digit")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格小数保留位数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格整体颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格整体字体大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bold")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格整体字体粗细")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("’500‘")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("autofix")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启自动补零")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("del-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("删除态价格删除线颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格数字颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("unit-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格单位颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格数字大小（单位rpx）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("unit-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格单位大小（单位rpx）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("unit-bold")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格单位字体粗细")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number/String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value-bold")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置价格字体粗细")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number/String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("--")])])])]),t._v(" "),l("h2",{attrs:{id:"价格外部样式类"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#价格外部样式类"}},[t._v("#")]),t._v(" 价格外部样式类")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖价格部分的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-unit-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖价格单位的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-value-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖价格数字部分的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-decimal-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖价格小数部分的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l-dot-class")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖价格小数点的外部样式类")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),l("RightMenu")],1)}),[],!1,null,null,null);e.default=v.exports}}]);