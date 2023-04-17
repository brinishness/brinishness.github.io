import{_ as l,X as u,Y as h,a0 as c,a2 as s,Z as e,$ as a,F as i}from"./framework-c8dc88ca.js";const m={},_=e("h1",{id:"docker安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker安装","aria-hidden":"true"},"#"),a(" docker安装")],-1),p={id:"_1-下载系统对应docker-官方链接",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_1-下载系统对应docker-官方链接","aria-hidden":"true"},"#",-1),b={href:"https://www.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[e("mark",null,"mac m1芯片需执行")],-1),v=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`softwareupdate --install-rosetta
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),f=e("p",null,[e("img",{src:"http://img.brinish.eu.org:5205/images/2023/04/16/36d08530c0035d1d4c38741a57a26e47.png",alt:"下载docker",loading:"lazy"})],-1),x=e("h2",{id:"_2-安装docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-安装docker","aria-hidden":"true"},"#"),a(" 2.安装docker")],-1),y=e("p",null,[e("img",{src:"http://img.brinish.eu.org:5205/images/2023/04/16/329aa40e327b5c439b7d34374f389668.png",alt:"安装docker",loading:"lazy"})],-1),w=e("h2",{id:"_3-启动docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-启动docker","aria-hidden":"true"},"#"),a(" 3.启动docker")],-1),j=e("p",null,[e("img",{src:"http://img.brinish.eu.org:5205/images/2023/04/16/cee1b14fa3d06c7153162187739a9f87.png",alt:"启动docker",loading:"lazy"})],-1),z=e("h2",{id:"_4-测试docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-测试docker","aria-hidden":"true"},"#"),a(" 4.测试docker")],-1),A=e("h2",{id:"_5-完成安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-完成安装","aria-hidden":"true"},"#"),a(" 5.完成安装")],-1),B=e("p",null,[e("img",{src:"http://img.brinish.eu.org:5205/images/2023/04/16/455ccaf660a1b0b5973a8f5233dc5629.png",alt:"测试docker",loading:"lazy"})],-1),E=e("h2",{id:"_6-配置docker镜像加速-可选",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-配置docker镜像加速-可选","aria-hidden":"true"},"#"),a(" 6.配置docker镜像加速 (可选)")],-1),L=e("div",{class:"language-json line-numbers-mode","data-ext":"json"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),a(`
  `),e("span",{class:"token property"},'"registry-mirrors"'),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"["),a(`
    `),e("span",{class:"token string"},'"https://docker.mirrors.ustc.edu.cn/"'),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token string"},'"https://hub-mirror.c.163.com/"'),a(`
  `),e("span",{class:"token punctuation"},"]"),a(`
`),e("span",{class:"token punctuation"},"}"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("h2",{id:"_1-安装docker时linux-内核-官方建议3-10以上",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-安装docker时linux-内核-官方建议3-10以上","aria-hidden":"true"},"#"),a(" 1: 安装docker时Linux 内核：官方建议3.10以上")],-1),T=e("h2",{id:"_2-使用-root-权限更新-yum-包-生产环境中此步操作需慎重",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-使用-root-权限更新-yum-包-生产环境中此步操作需慎重","aria-hidden":"true"},"#"),a(" 2: 使用 root 权限更新 yum 包(生产环境中此步操作需慎重)")],-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum "),e("span",{class:"token parameter variable"},"-y"),a(` update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),C=e("h2",{id:"_3-卸载旧版本-如果之前安装过的话",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-卸载旧版本-如果之前安装过的话","aria-hidden":"true"},"#"),a(" 3: 卸载旧版本(如果之前安装过的话)")],-1),I=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum remove "),e("span",{class:"token function"},"docker"),a(`  docker-common docker-selinux docker-engine
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),F=e("h2",{id:"_4-安装需要的软件包-yum-util提供yum-config-manager功能-另两个是devicemapper驱动依赖",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-安装需要的软件包-yum-util提供yum-config-manager功能-另两个是devicemapper驱动依赖","aria-hidden":"true"},"#"),a(" 4: 安装需要的软件包，yum-util提供yum-config-manager功能，另两个是devicemapper驱动依赖")],-1),X=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum "),e("span",{class:"token function"},"install"),a(),e("span",{class:"token parameter variable"},"-y"),a(` yum-utils device-mapper-persistent-data lvm2
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Y=e("h2",{id:"_5-设置yum源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-设置yum源","aria-hidden":"true"},"#"),a(" 5: 设置yum源")],-1),Z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum-config-manager --add-repo http://download.docker.com/linux/centos/docker-ce.repo "),e("span",{class:"token comment"},"# 中央仓库"),a(`
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo `),e("span",{class:"token comment"},"# 阿里仓库"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),$=e("h2",{id:"_6-选择docker版本并安装-查看可用版本有哪些",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-选择docker版本并安装-查看可用版本有哪些","aria-hidden":"true"},"#"),a(" 6: 选择docker版本并安装 查看可用版本有哪些")],-1),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum list docker-ce "),e("span",{class:"token parameter variable"},"--showduplicates"),a(),e("span",{class:"token operator"},"|"),a(),e("span",{class:"token function"},"sort"),a(),e("span",{class:"token parameter variable"},"-r"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),D=e("h2",{id:"_7-选择一个版本并安装-yum-install-docker-ce-版本号",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-选择一个版本并安装-yum-install-docker-ce-版本号","aria-hidden":"true"},"#"),a(" 7: 选择一个版本并安装：yum install docker-ce-版本号")],-1),G=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum "),e("span",{class:"token parameter variable"},"-y"),a(),e("span",{class:"token function"},"install"),a(" docker-ce-18.03.1.ce "),e("span",{class:"token comment"},"# 例子"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),H=e("h2",{id:"_8-启动docker并设置开机自启",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-启动docker并设置开机自启","aria-hidden":"true"},"#"),a(" 8: 启动docker并设置开机自启")],-1),J=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("systemctl start "),e("span",{class:"token function"},"docker"),a(),e("span",{class:"token comment"},"# 启动docker"),a(`
systemctl stop `),e("span",{class:"token function"},"docker"),a(),e("span",{class:"token comment"},"# 停止docker"),a(`
systemctl `),e("span",{class:"token builtin class-name"},"enable"),a(),e("span",{class:"token function"},"docker"),a(),e("span",{class:"token comment"},"# 设置docker开机自启"),a(`
systemctl disable `),e("span",{class:"token function"},"docker"),a(),e("span",{class:"token comment"},"# 取消docker开机自启"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),K=e("h2",{id:"_9-配置docker镜像加速-无daemon-json文件自行创建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9-配置docker镜像加速-无daemon-json文件自行创建","aria-hidden":"true"},"#"),a(" 9: 配置docker镜像加速 (无daemon.json文件自行创建)")],-1),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"vim"),a(` /etc/docker/daemon.json
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=e("div",{class:"language-json line-numbers-mode","data-ext":"json"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),a(`
  `),e("span",{class:"token property"},'"registry-mirrors"'),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"["),a(`
    `),e("span",{class:"token string"},'"https://docker.mirrors.ustc.edu.cn/"'),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token string"},'"https://hub-mirror.c.163.com/"'),a(`
  `),e("span",{class:"token punctuation"},"]"),a(`
`),e("span",{class:"token punctuation"},"}"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=e("h2",{id:"_10-重启docker服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_10-重启docker服务","aria-hidden":"true"},"#"),a(" 10: 重启docker服务")],-1),Q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("systemctl daemon-reload "),e("span",{class:"token comment"},"# 重新加载某个服务的配置文件，如果新安装了一个服务，归属于systemctl管理，要是新服务的服务程序配置文件生效，需重新加载"),a(`
systemctl restart `),e("span",{class:"token function"},"docker"),a(),e("span",{class:"token comment"},"# 重启docker"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("p",null,"ubuntu",-1),S=e("p",null,"windows",-1),U={id:"_1-下载系统对应docker-官方链接-1",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#_1-下载系统对应docker-官方链接-1","aria-hidden":"true"},"#",-1),ee={href:"https://www.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"},ae=e("p",null,[e("img",{src:"http://img.brinish.eu.org:5205/images/2023/04/16/36d08530c0035d1d4c38741a57a26e47.png",alt:"下载docker",loading:"lazy"})],-1),se=e("h2",{id:"_2-安装docker-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-安装docker-1","aria-hidden":"true"},"#"),a(" 2.安装docker")],-1),ne=e("p",null,[e("img",{src:"http://img.brinish.eu.org:5205/images/2023/04/16/d9b5d88437a97c3ef92c269f40a0d919.png",alt:"安装docker",loading:"lazy"})],-1),te=e("h2",{id:"_3-启动docker-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-启动docker-1","aria-hidden":"true"},"#"),a(" 3.启动docker")],-1),re=e("p",null,[e("img",{src:"http://img.brinish.eu.org:5205/images/2023/04/17/3a68b4fa80d6819365ef4b0b635536ca.png",alt:"启动docker",loading:"lazy"})],-1),ce=e("h2",{id:"_4-测试docker-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-测试docker-1","aria-hidden":"true"},"#"),a(" 4.测试docker")],-1),oe=e("h2",{id:"_5-完成安装-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-完成安装-1","aria-hidden":"true"},"#"),a(" 5.完成安装")],-1),ie=e("h2",{id:"_6-配置docker镜像加速-可选-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-配置docker镜像加速-可选-1","aria-hidden":"true"},"#"),a(" 6.配置docker镜像加速 (可选)")],-1),de=e("div",{class:"language-json line-numbers-mode","data-ext":"json"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),a(`
  `),e("span",{class:"token property"},'"registry-mirrors"'),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"["),a(`
    `),e("span",{class:"token string"},'"https://docker.mirrors.ustc.edu.cn/"'),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token string"},'"https://hub-mirror.c.163.com/"'),a(`
  `),e("span",{class:"token punctuation"},"]"),a(`
`),e("span",{class:"token punctuation"},"}"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function le(ue,he){const o=i("ExternalLinkIcon"),d=i("Tabs");return u(),h("div",null,[_,c(d,{id:"3",data:[{title:"macos"},{title:"centos"},{title:"ubuntu"},{title:"windows"}],active:0},{tab0:s(({title:n,value:t,isActive:r})=>[e("h2",p,[k,a(" 1.下载系统对应docker ("),e("a",b,[a("官方链接"),c(o)]),a(")")]),g,v,f,x,y,w,j,z,A,B,E,L]),tab1:s(({title:n,value:t,isActive:r})=>[N,T,V,C,I,F,X,Y,Z,$,q,D,G,H,J,K,M,O,P,Q]),tab2:s(({title:n,value:t,isActive:r})=>[R]),tab3:s(({title:n,value:t,isActive:r})=>[S,e("h2",U,[W,a(" 1.下载系统对应docker ("),e("a",ee,[a("官方链接"),c(o)]),a(")")]),ae,se,ne,te,re,ce,oe,ie,de]),_:1})])}const _e=l(m,[["render",le],["__file","1.html.vue"]]);export{_e as default};
