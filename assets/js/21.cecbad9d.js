(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{224:function(t,e,a){"use strict";a.r(e);var r=a(2),n=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[a("i",{staticClass:"fa fa-exclamation-triangle"}),t._v(" 注意")]),t._v(" "),a("p",[t._v("本教程需要 macOS 系统环境，如果没有 macOS 设备可使用PC安装macOS虚拟机操作。另外由于电脑配置不同，安装过程可能出现各种问题，后续驱动还需进行针对性安装。")])]),t._v(" "),a("h1",{attrs:{id:"黑苹果系统简易安装教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#黑苹果系统简易安装教程","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("strong",[t._v("黑苹果系统简易安装教程")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.tonymacx86.com/attachments/mojave-dark-png.354912/",alt:"macOS"}})]),t._v(" "),a("h2",{attrs:{id:"第1步-制作系统安装盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第1步-制作系统安装盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 第1步 制作系统安装盘")]),t._v(" "),a("p",[t._v("通过 AppStore 下载"),a("code",[t._v("macOS镜像文件")]),t._v("，或从其他途径下载 "),a("code",[t._v("Mojave.app")]),t._v(" 并拖入应用程序文件夹。\n使用"),a("code",[t._v("磁盘管理工具")]),t._v("格式化U盘为GUID分区格式"),a("code",[t._v("Mac OS Extended（日志式）")]),t._v("，单击抹掉U盘。\n"),a("img",{attrs:{src:"https://cdn.img.wenhairu.com/images/2019/11/10/AaHWA.png",alt:"磁盘管理"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("使用 UniBeast 制作")])])]),t._v(" "),a("p",[t._v("直接使用 "),a("a",{attrs:{href:"http://unibeast.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("UniBeast")]),a("OutboundLink")],1),t._v(" 开始制作，引导过程根据设备情况选择，默认选择如下图所示:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.img.wenhairu.com/images/2019/11/10/AaQ7T.png",alt:"UniBeast"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("使用 macOS 终端制作")])])]),t._v(" "),a("p",[t._v("使用终端制作安装U盘，以安装 macOS Mojave 系统为例，输入如下代码并等待制作完成，据自己实际情况修改代码内容，此代码适用于系统版本为 Mojave ，U盘名称为 Mojave。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo /Applications/Install\\ macOS\\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/Mojave --applicationpath /Applications/Install\\ macOS\\ Mojave.app --nointeraction\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.img.wenhairu.com/images/2019/11/10/AaRsG.png",alt:"终端"}})]),t._v(" "),a("h2",{attrs:{id:"第2步-安装原始系统引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第2步-安装原始系统引导","aria-hidden":"true"}},[t._v("#")]),t._v(" 第2步 安装原始系统引导")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[a("i",{staticClass:"fa fa-exclamation-circle"}),t._v(" 提示")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("UniBeast")]),t._v(" 制作的系统安装U盘会自带基础引导程序，可跳过此步骤。")])]),t._v(" "),a("p",[t._v("使用macOS操作环境下载并安装 "),a("a",{attrs:{href:"https://github.com/CloverHackyColor/CloverBootloader/releases",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Clover EFI bootloader")]),a("OutboundLink")],1),t._v(" 程序，注意安装时选择正确的安装位置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.img.wenhairu.com/images/2019/11/10/AaoNv.png",alt:"Clover"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.img.wenhairu.com/images/2019/11/10/Aa7y0.png",alt:"Clover"}})]),t._v(" "),a("h2",{attrs:{id:"第3步-安装系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第3步-安装系统","aria-hidden":"true"}},[t._v("#")]),t._v(" 第3步 安装系统")]),t._v(" "),a("p",[t._v("将制作好的系统安装U盘插入待安装的设备，重启进入"),a("code",[t._v("BIOS")]),t._v("并调整下表中的选项（如果有）。然后选择"),a("code",[t._v("系统安装U盘")]),t._v("为启动"),a("strong",[t._v("首选项")]),t._v("，按"),a("code",[t._v("F10")]),t._v("保存设置并重启设备。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[a("i",{staticClass:"fa fa-exclamation-circle"}),t._v(" 提示")]),t._v(" "),a("p",[t._v("进入BIOS台式机可使用按键 "),a("code",[t._v("Del")]),t._v("，笔记本一般使用 "),a("code",[t._v("F2")]),t._v(" "),a("code",[t._v("F12")]),t._v(" "),a("code",[t._v("F11")]),t._v(" "),a("code",[t._v("Esc")]),t._v("。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("开关")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VT-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Disable")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CFG-Lock")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Disable")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Secure Boot Mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Disable")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("IO Serial Port")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Disable")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("XHCI Handoff")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enabled")])])])]),t._v(" "),a("p",[t._v("重启进入"),a("code",[t._v("clover")]),t._v("界面后选择U盘启动。系统安装完后进行简单地配置就能进入桌面了，建议首次安装配置过程中设备不要联网。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.tonymacx86.com/images/guides/screenshot0.png",alt:"Clover"}})]),t._v(" "),a("h2",{attrs:{id:"第4步-详细配置系统引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第4步-详细配置系统引导","aria-hidden":"true"}},[t._v("#")]),t._v(" 第4步 详细配置系统引导")]),t._v(" "),a("p",[t._v("可使用 "),a("a",{attrs:{href:"https://mackie100projects.altervista.org/download-clover-configurator/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Clover Configurator")]),a("OutboundLink")],1),t._v("  根据设备情况配置自己的 Clover 配置文件。")]),t._v(" "),a("h2",{attrs:{id:"第5步-系统优化-安装驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第5步-系统优化-安装驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 第5步 系统优化 (安装驱动)")]),t._v(" "),a("p",[t._v("初级玩家可使用 "),a("a",{attrs:{href:"http://www.multibeast.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("MultiBeast")]),a("OutboundLink")],1),t._v(" 安装基本驱动，AMD显卡大部分免驱，英伟达 NVIDIA 显卡用户仅能安装"),a("code",[t._v("macOS 10.13.6")]),t._v("之前的系统版本才能正常"),a("a",{attrs:{href:"https://www.tonymacx86.com/nvidia-drivers/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("驱动")]),a("OutboundLink")],1),t._v("。下表为部分用于优化 macOS 的驱动程序，根据需要选择下载：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("文件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirportBrcmFixup"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("网卡驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("博通无线网卡驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/AppleALC",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppleALC"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("声卡驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启用原生macOS高清音频")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/chunnann/ATH9KFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATH9KFixup"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("网卡驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atheros网卡驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/BT4LEContiunityFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("BT4LEContiunityFixup"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("网卡驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开启接力，隔空投送等功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/fidele007/CX20752",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodecCommander"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("声卡驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于耳机与内置扬声器切换")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/CPUFriend",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPUFriend"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("电源驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("注入CPU动态电源数据的驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://bitbucket.org/RehabMan/os-x-fake-pci-id",target:"_blank",rel:"noopener noreferrer"}},[t._v("FakePCIID"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("硬件驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("硬件ID仿冒驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/Goldfish64/DiskArbitrationFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("DiskArbitrationFixup"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外设驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁止“此电脑不能读取您插入的磁盘”提示")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/HibernationFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("HibernationFixup"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("电源驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复休眠问题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/Lilu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lilu"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("框架注入")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一些驱动的依赖")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/0xFireWolf/NightShiftUnlocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("NightShiftUnlocker"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开启夜览功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/al3xtjames/NoTouchID",target:"_blank",rel:"noopener noreferrer"}},[t._v("NoTouchID"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外设驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁用触控ID支持")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/Mieze/RTL8111_driver_for_OS_X",target:"_blank",rel:"noopener noreferrer"}},[t._v("RTL8111_Driver"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("网卡驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Realtek RTL8111/8168有线网卡驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/RehabMan/hack-tools/tree/master/kexts/SATA-unsupported.kext",target:"_blank",rel:"noopener noreferrer"}},[t._v("SATA_unsupported"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外设驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("SATA硬盘驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/Goldfish64/SystemProfilerMemoryFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("SystemProfilerMemoryFixup"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("仿冒驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示关于本机的内存标签")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://bitbucket.org/RehabMan/os-x-usb-inject-all",target:"_blank",rel:"noopener noreferrer"}},[t._v("USB_Inject"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外设驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("USB端口注入框架")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/alexandred/VoodooI2C",target:"_blank",rel:"noopener noreferrer"}},[t._v("VoodooI2C"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外设驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("I2C触控板驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/VoodooPS2",target:"_blank",rel:"noopener noreferrer"}},[t._v("VoodooPS2Controller"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外设驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("PS2键盘和触控板驱动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/VirtualSMC",target:"_blank",rel:"noopener noreferrer"}},[t._v("VirtualSMC"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("仿冒驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("SMC仿冒驱动，和FakeSMC二选一")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhateverGreen"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("仿冒驱动")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显卡注入框架，集成了很多补丁")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("上表内容于Github上搜集而来")])]),t._v(" "),a("p",[t._v("这些并不能保证将所有硬件完全驱动，需要根据出现的问题上网查询解决办法，下面推荐几个较热门的黑果网站社区："),a("a",{attrs:{href:"https://www.tonymacx86.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Tonymacx86")]),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"http://heipingguowu.top/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("黑苹果屋")]),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"https://blog.daliansky.net/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("黑果小兵的部落阁")]),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"https://imac.hk/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("黑苹果乐园")]),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"第6步-优化系统设置-选做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第6步-优化系统设置-选做","aria-hidden":"true"}},[t._v("#")]),t._v(" 第6步 优化系统设置 (选做)")]),t._v(" "),a("p",[t._v("待更新...")]),t._v(" "),a("h2",{attrs:{id:"第7步-性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第7步-性能测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 第7步 性能测试")]),t._v(" "),a("p",[t._v("可使用 "),a("a",{attrs:{href:"https://www.videoproc.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("VideoProc")]),a("OutboundLink")],1),t._v(" 检测显卡驱动是否正确安装，打开程序后点击右下角"),a("code",[t._v("设置")]),t._v("，在通用选项卡中点击硬件加速引擎后的 "),a("code",[t._v("选项")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.img.wenhairu.com/images/2019/11/10/AaSXU.png",alt:"VideoProc"}})])])},[],!1,null,null,null);e.default=n.exports}}]);