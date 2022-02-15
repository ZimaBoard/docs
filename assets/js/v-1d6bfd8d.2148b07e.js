"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2280],{48191:(a,l,e)=>{e.r(l),e.d(l,{data:()=>t});const t={key:"v-1d6bfd8d",path:"/zh/get-started/",title:"初见家庭服务器",lang:"zh-CN",frontmatter:{title:"初见家庭服务器",editLink:!0},excerpt:"",headers:[{level:2,title:"总览",slug:"总览",children:[]},{level:2,title:"硬件筹备",slug:"硬件筹备",children:[]},{level:2,title:"接线与上电",slug:"接线与上电",children:[]}],filePathRelative:"zh/get-started/README.md",git:{updatedTime:1630637204e3,contributors:[{name:"John Guan",email:"Guan.Ningchuan@gmail.com",commits:9},{name:"Lauren",email:"lauren.pan@hotmail.com",commits:6}]}}},19049:(a,l,e)=>{e.r(l),e.d(l,{default:()=>D});var t=e(66252),n=e(25192),i=e(63743),r=e(48038),s=e(96548),o=e(92624),d=e(14159),c=e(33605);const u=(0,t._)("h1",{id:"初见家庭服务器",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#初见家庭服务器","aria-hidden":"true"},"#"),(0,t.Uk)(" 初见家庭服务器")],-1),_=(0,t._)("p",null,[(0,t._)("img",{src:n,alt:"zimaboard-get-started"})],-1),m=(0,t._)("p",null,"不论你是专家还是新手，快速上手教程将带你熟悉ZimaBoard的基础硬件规格、预制的家庭服务器基本应用，和调试与开发的一些基础的账号权限系统等。 通过这个简短的教程，你将在15分钟内，搭建起你家全新的一台个人数据中心。这就让我们开始吧！",-1),p=(0,t._)("h2",{id:"总览",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#总览","aria-hidden":"true"},"#"),(0,t.Uk)(" 总览")],-1),g=(0,t._)("ul",null,[(0,t._)("li",null,"ZimaBoard上电开机"),(0,t._)("li",null,"发现与访问共享盘（Samba）"),(0,t._)("li",null,"体验Nextcloud私有云"),(0,t._)("li",null,"用Emby管理你的影音资源")],-1),h=(0,t._)("h2",{id:"硬件筹备",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#硬件筹备","aria-hidden":"true"},"#"),(0,t.Uk)(" 硬件筹备")],-1),B=(0,t._)("p",null,[(0,t._)("img",{src:i,alt:"zimaboard power on hardware list"})],-1),f=(0,t._)("ul",null,[(0,t._)("li",null,"ZimaBoard"),(0,t._)("li",null,"12v3A 电源适配器"),(0,t._)("li",null,"超5类或更高规格网线"),(0,t._)("li",null,"SATA Cable for ZimaBoard"),(0,t._)("li",null,'2.5" SATA SSD or HDD')],-1),k=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,"不需要像鼠标键盘和显示屏接入ZimaBoard，一通繁琐的接线，你可以直接通过网络访问ZimaBoard上所有服务。 当然，如果你觉得接插显示屏更为便捷，也可以配上miniPD转HDMI线和鼠键。")],-1),Z=(0,t._)("h2",{id:"接线与上电",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#接线与上电","aria-hidden":"true"},"#"),(0,t.Uk)(" 接线与上电")],-1),b=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("先接配件再上电是基本礼仪，推荐将ZimaBoard通过网线接入到你的路由器或者光猫下，参考该图 "),(0,t._)("img",{src:r,alt:"ethernet connection guide"})])],-1),w=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("p",{class:"custom-container-title"},"注意"),(0,t._)("p",null,"如果你的网络里有多个路由器，请确保将 ZimaBoard 接入到你的主路由器下。或者至少接入到你用来访问设备的同级路由器。"),(0,t._)("p",null,"简单来说，尽量接到最上层的路由器就好了！"),(0,t._)("details",{class:"custom-container details"},[(0,t._)("p",null,[(0,t._)("strong",null,"举个例子如果你的网络是这种情况：")]),(0,t._)("p",null,[(0,t._)("img",{src:s,alt:"Network Case 1"})]),(0,t._)("p",null,"路由器的连接关系如图所示，A路由器和B路由器都连接着不同的上网设备，你希望他们都能连接到 ZimaBoard 的话，请将 ZimaBoard 连接到A路由器。"),(0,t._)("p",null,"但是如果你的所有上网设备实际上都连接到B路由器上，或者说你只希望B路由器下的设备访问到 ZimaBoard ，那就连接到B路由器上就可以了。"),(0,t._)("hr"),(0,t._)("p",null,[(0,t._)("strong",null,"下面这种网络情况也是一样：")]),(0,t._)("p",null,[(0,t._)("img",{src:o,alt:"Network Case 2"})]),(0,t._)("p",null,"路由器的连接关系如图所示，A、B、C、D路由器都连接着不同的上网设备，你希望他们都能连接到 ZimaBoard 的话，请将 ZimaBoard 连接到A路由器。"),(0,t._)("p",null,"如果你只希望B路由器下的设备访问到 ZimaBoard ，那就连接到B路由器上就可以了。这个时候，连接到A、C路由器的设备都访问不到 ZimaBoard 了。")])],-1),x=(0,t._)("ol",{start:"2"},[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("strong",null,"先不上电！"),(0,t.Uk)(" 一张图到位，硬件接线图如下 "),(0,t._)("img",{src:d,alt:"SATA and Ethernet Connection"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("插上电源线，网络指示灯闪烁！(ง ͡ʘ ͜ʖ ͡ʘ)ง "),(0,t._)("img",{src:c,alt:"Power On"})])])],-1),A=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("p",{class:"custom-container-title"},"注意"),(0,t._)("p",null,"网络指示灯正常闪烁，即系统已经正常上电，请耐心等待10-15秒左右！如果没有接插外部磁盘，系统启动可能略长。")],-1),v=(0,t._)("p",null,"系统已启动， 下一步！",-1),C={},D=(0,e(83744).Z)(C,[["render",function(a,l){return(0,t.wg)(),(0,t.iD)(t.HY,null,[u,_,m,p,g,h,B,f,k,Z,b,w,x,A,v],64)}]])},83744:(a,l)=>{l.Z=(a,l)=>{for(const[e,t]of l)a[e]=t;return a}},48038:(a,l,e)=>{a.exports=e.p+"assets/img/eth-connection.240c5b0c.jpeg"},14159:(a,l,e)=>{a.exports=e.p+"assets/img/get-started-eth-connection.e462024a.jpg"},63743:(a,l,e)=>{a.exports=e.p+"assets/img/get-started-hardware-list.fc1d0bc4.jpg"},33605:(a,l,e)=>{a.exports=e.p+"assets/img/get-started-power-on.f6b7e8c0.jpg"},25192:(a,l,e)=>{a.exports=e.p+"assets/img/hero-image-get-started.4796e42a.png"},96548:(a,l,e)=>{a.exports=e.p+"assets/img/network-case-1.a1570f90.png"},92624:(a,l,e)=>{a.exports=e.p+"assets/img/network-case-2.6daa23c7.png"}}]);