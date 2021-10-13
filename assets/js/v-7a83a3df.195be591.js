"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{83320:(e,r,l)=>{l.r(r),l.d(r,{data:()=>t});const t={key:"v-7a83a3df",path:"/zh/projects/zerotier/ssh/",title:"通过 SSH 配置 ZeroTier 网络",lang:"zh-CN",frontmatter:{title:"通过 SSH 配置 ZeroTier 网络",editLink:!0},excerpt:"",headers:[{level:2,title:"注册 ZeroTier",slug:"注册-zerotier",children:[]},{level:2,title:"创建网络",slug:"创建网络",children:[]},{level:2,title:"让 ZimaBoard 加入 ZeroTier 网络",slug:"让-zimaboard-加入-zerotier-网络",children:[{level:3,title:"安装 ZeroTier",slug:"安装-zerotier",children:[]},{level:3,title:"加入 ZeroTier 网络",slug:"加入-zerotier-网络",children:[]},{level:3,title:"网络授权",slug:"网络授权",children:[]}]},{level:2,title:"把你的电脑、笔记本、手机都加进来",slug:"把你的电脑、笔记本、手机都加进来",children:[]}],filePathRelative:"zh/projects/zerotier/ssh/README.md",git:{updatedTime:162989305e4,contributors:[{name:"John Guan",email:"Guan.Ningchuan@gmail.com",commits:1}]}}},74825:(e,r,l)=>{l.r(r),l.d(r,{default:()=>oe});var t=l(66252),i=l(99558),n=l(71688),o=l(83371),a=l(42069),A=l(28753),s=l(69293),u=l(85975),d=l(50286);const p=(0,t._)("h1",{id:"通过-ssh-配置-zerotier-网络",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#通过-ssh-配置-zerotier-网络","aria-hidden":"true"},"#"),(0,t.Uk)(" \b通过 SSH 配置 ZeroTier 网络")],-1),k=(0,t._)("h2",{id:"注册-zerotier",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#注册-zerotier","aria-hidden":"true"},"#"),(0,t.Uk)(" 注册 ZeroTier")],-1),h=(0,t.Uk)("我们先打开ZeroTier的"),g={href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("官网"),U=(0,t._)("p",null,[(0,t._)("img",{src:i,alt:"ZeroTier Index"})],-1),m=(0,t._)("p",null,[(0,t.Uk)("在页面右上角点击 "),(0,t._)("img",{src:n,alt:"Sign Up"}),(0,t.Uk)(" 按钮进行注册")],-1),Z=(0,t.Uk)("完成后你将会进入ZeroTier的"),x={href:"https://my.zerotier.com/network",target:"_blank",rel:"noopener noreferrer"},I=(0,t.Uk)("Central(控制面板)"),b=(0,t._)("p",null,[(0,t._)("img",{src:o,alt:"ZeroTier Central"})],-1),z=(0,t._)("h2",{id:"创建网络",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#创建网络","aria-hidden":"true"},"#"),(0,t.Uk)(" 创建网络")],-1),C=(0,t._)("p",null,[(0,t.Uk)('在控制面板中点击"'),(0,t._)("strong",null,"Create Network(创建网络)"),(0,t.Uk)('"按钮，在下面的"'),(0,t._)("strong",null,"Your Networks(你的网络)"),(0,t.Uk)('"列表中会自动创建一个新的随机网络ID和名称的网络。')],-1),G=(0,t._)("p",null,"类似这样：",-1),E=(0,t._)("p",null,[(0,t._)("img",{src:a,alt:"ZeroTier New Network"})],-1),w=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,[(0,t.Uk)('记住你的"'),(0,t._)("strong",null,"NETWORK ID(网络ID)"),(0,t.Uk)('"，后面配置的时候会用到！')])],-1),j=(0,t._)("h2",{id:"让-zimaboard-加入-zerotier-网络",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#让-zimaboard-加入-zerotier-网络","aria-hidden":"true"},"#"),(0,t.Uk)(" 让 ZimaBoard 加入 ZeroTier 网络")],-1),J=(0,t._)("p",null,"我们先通过 SSH 连接到 ZimaBoard",-1),M=(0,t._)("details",{class:"custom-container details"},[(0,t._)("summary",null,"通过 SSH 连接 ZimaBoard 的方法"),(0,t._)("p",null,[(0,t.Uk)("打开"),(0,t._)("strong",null,[(0,t.Uk)("终端(macOS)"),(0,t._)("strong",null,"或"),(0,t.Uk)("PowerShell(Windows)")]),(0,t.Uk)("，输入以下内容并按下"),(0,t._)("kbd",null,"Enter"),(0,t.Uk)("。")]),(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"ssh zima@zimaboard\n")])]),(0,t._)("p",null,"如果当前电脑是首次通过 SSH 连接 ZimaBoard 的话，，会出现类似如下的提示："),(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"The authenticity of host 'zimaboard (xxx.xxx.xxx.xxx)' can't be established.\nECDSA key fingerprint is SHA256:iyEW3H75xxAxxxvyk1M3O/mMfNRxXxxx02Xebal8hgo.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? \n")])]),(0,t._)("p",null,[(0,t.Uk)("直接输入"),(0,t._)("code",null,"yes"),(0,t.Uk)("并按下"),(0,t._)("kbd",null,"Enter"),(0,t.Uk)("。")]),(0,t._)("p",null,[(0,t.Uk)("然后输入密码"),(0,t._)("code",null,"zimaboard"),(0,t.Uk)("并按下"),(0,t._)("kbd",null,"Enter"),(0,t.Uk)("。（输入密码时不会显示任何字符，输就完了）")])],-1),f=(0,t._)("h3",{id:"安装-zerotier",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#安装-zerotier","aria-hidden":"true"},"#"),(0,t.Uk)(" 安装 ZeroTier")],-1),v=(0,t._)("p",null,[(0,t.Uk)("输入以下内容并按下"),(0,t._)("kbd",null,"Enter"),(0,t.Uk)("，输入密码"),(0,t._)("code",null,"zimaboard"),(0,t.Uk)("，开始安装 ZeroTier。")],-1),H=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"curl -s https://install.zerotier.com | sudo bash\n")])],-1),S=(0,t._)("p",null,[(0,t._)("img",{src:A,alt:"ZeroTier Install"})],-1),T=(0,t._)("p",null,"等待安装完成即可。",-1),D=(0,t._)("h3",{id:"加入-zerotier-网络",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#加入-zerotier-网络","aria-hidden":"true"},"#"),(0,t.Uk)(" 加入 ZeroTier 网络")],-1),X=(0,t._)("p",null,[(0,t.Uk)("输入以下内容，将"),(0,t._)("code",null,"<YourNetworkID>"),(0,t.Uk)('替换为你的"'),(0,t._)("strong",null,"NETWORK ID(网络ID)"),(0,t.Uk)('"，按下'),(0,t._)("kbd",null,"Enter"),(0,t.Uk)("，输入密码"),(0,t._)("code",null,"zimaboard"),(0,t.Uk)("即可。。")],-1),P=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"sudo zerotier-cli join <YourNetworkID>\n")])],-1),O=(0,t._)("p",null,[(0,t.Uk)('指令应该和下面这个类似，只是后面的"'),(0,t._)("strong",null,"NETWORK ID(网络ID)"),(0,t.Uk)('"不一样。')],-1),Q=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"sudo zerotier-cli join 1d71939404639237\n")])],-1),B=(0,t._)("p",null,[(0,t._)("img",{src:s,alt:"ZeroTier Join Nettwork"})],-1),N=(0,t._)("p",null,[(0,t.Uk)("显示"),(0,t._)("code",null,"200 join OK"),(0,t.Uk)("即代表加入完成。")],-1),R=(0,t._)("h3",{id:"网络授权",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#网络授权","aria-hidden":"true"},"#"),(0,t.Uk)(" 网络授权")],-1),K=(0,t.Uk)("\b回到ZeroTier的"),W={href:"https://my.zerotier.com/network",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("Central(控制面板)"),F=(0,t._)("p",null,[(0,t.Uk)('点击刚才之前加入的网络，进入控制页面，找到"'),(0,t._)("strong",null,"Members(成员)"),(0,t.Uk)('"标签。')],-1),L=(0,t._)("p",null,[(0,t._)("img",{src:u,alt:"ZeroTier Members"})],-1),Y=(0,t._)("p",null,[(0,t.Uk)('你会看到一个新加入的设备，然后在前面这列"'),(0,t._)("strong",null,"Auth?"),(0,t.Uk)('"打上勾，就完成授权了。')],-1),_=(0,t._)("p",null,[(0,t._)("img",{src:d,alt:"ZeroTier Auth"})],-1),V=(0,t._)("p",null,"其他设备加入网络也是一样的授权方法，简单吧？快去试试吧！",-1),q=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,[(0,t.Uk)('设备后面的 "'),(0,t._)("strong",null,"Managed IPs"),(0,t.Uk)('" 中记录了这个设备在 ZeroTier 网络中的 IP 地址')]),(0,t._)("p",null,"你需要把它记下来，或者自己设置一个好记的 IP 地址，之后通过 ZeroTier 网络访问的时候都要用到这个 IP 地址。"),(0,t._)("p",null,[(0,t.Uk)("在其他教程中使用到的功能基本上都可以通过 ZeroTier 网络来访问，只需要将地址中"),(0,t._)("code",null,"zimaboard"),(0,t.Uk)("换成记下的这个 IP 地址即可。")]),(0,t._)("p",null,[(0,t.Uk)("也就是说"),(0,t._)("code",null,"http://zimaboard"),(0,t.Uk)("改成"),(0,t._)("code",null,"http://IP"),(0,t.Uk)("，"),(0,t._)("code",null,"smb://zimaboard"),(0,t.Uk)("改成"),(0,t._)("code",null,"smb://IP"),(0,t.Uk)("就好了。")])],-1),$=(0,t._)("h2",{id:"把你的电脑、笔记本、手机都加进来",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#把你的电脑、笔记本、手机都加进来","aria-hidden":"true"},"#"),(0,t.Uk)(" 把你的电脑、笔记本、手机都加进来")],-1),ee=(0,t.Uk)("从"),re={href:"https://www.zerotier.com/download/",target:"_blank",rel:"noopener noreferrer"},le=(0,t.Uk)("ZeroTier官网"),te=(0,t.Uk)("下载对应的客户端到你的设备上。"),ie=(0,t._)("p",null,[(0,t.Uk)("打开程序就可以输入网络ID，参照上面的步骤进行"),(0,t._)("a",{href:"#%E7%BD%91%E7%BB%9C%E6%8E%88%E6%9D%83"},"网络授权"),(0,t.Uk)("，即可完成加入网络。")],-1),ne={},oe=(0,l(83744).Z)(ne,[["render",function(e,r){const l=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,k,(0,t._)("p",null,[h,(0,t._)("a",g,[c,(0,t.Wm)(l)])]),U,m,(0,t._)("p",null,[Z,(0,t._)("a",x,[I,(0,t.Wm)(l)])]),b,z,C,G,E,w,j,J,M,f,v,H,S,T,D,X,P,O,Q,B,N,R,(0,t._)("p",null,[K,(0,t._)("a",W,[y,(0,t.Wm)(l)])]),F,L,Y,_,V,q,$,(0,t._)("p",null,[ee,(0,t._)("a",re,[le,(0,t.Wm)(l)]),te]),ie],64)}]])},83744:(e,r)=>{r.Z=(e,r)=>{for(const[l,t]of r)e[l]=t;return e}},50286:(e,r,l)=>{e.exports=l.p+"assets/img/zerotier-auth.dadb175c.png"},83371:(e,r,l)=>{e.exports=l.p+"assets/img/zerotier-central.e378925c.jpeg"},99558:(e,r,l)=>{e.exports=l.p+"assets/img/zerotier-index.33430d7f.jpeg"},85975:(e,r,l)=>{e.exports=l.p+"assets/img/zerotier-members.4f40d285.png"},42069:(e,r,l)=>{e.exports=l.p+"assets/img/zerotier-new-network.6d32fbcf.jpg"},71688:e=>{e.exports="data:image/png;base64,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"},28753:(e,r,l)=>{e.exports=l.p+"assets/img/zerotier-install.b082e5aa.png"},69293:(e,r,l)=>{e.exports=l.p+"assets/img/zerotier-join-network.af513a68.png"}}]);