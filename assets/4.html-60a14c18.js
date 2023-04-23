import{_ as s,X as a,Y as n,a1 as e}from"./framework-fa0a4005.js";const d={},i=e(`<h1 id="mac安装dnsmasq" tabindex="-1"><a class="header-anchor" href="#mac安装dnsmasq" aria-hidden="true">#</a> mac安装dnsmasq</h1><h2 id="_1-安装dnsmasq" tabindex="-1"><a class="header-anchor" href="#_1-安装dnsmasq" aria-hidden="true">#</a> 1.安装dnsmasq</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> dnsmasq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-备份配置文件" tabindex="-1"><a class="header-anchor" href="#_2-备份配置文件" aria-hidden="true">#</a> 2.备份配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> /usr/local/etc/dnsmasq.conf /usr/local/etc/dnsmasq.conf_back
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_3-修改配置文件" aria-hidden="true">#</a> 3.修改配置文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /usr/local/etc/dnsmasq.conf # 打开配置文件
address=/brinish.com/127.0.0.1 # 添加brinish.com域名解析为127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-新建dns文档" tabindex="-1"><a class="header-anchor" href="#_4-新建dns文档" aria-hidden="true">#</a> 4.新建dns文档</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/resolver
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/resolver/brinish.com
nameserver <span class="token number">127.0</span>.0.1 <span class="token comment"># 写入brinish.com文件中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-重启dnsmasq服务" tabindex="-1"><a class="header-anchor" href="#_5-重启dnsmasq服务" aria-hidden="true">#</a> 5.重启dnsmasq服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> brew services stop dnsmasq <span class="token comment"># 关闭dnsmasq服务</span>
<span class="token function">sudo</span> brew services start dnsmasq <span class="token comment"># 启动dnsmasq服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-清dns缓存" tabindex="-1"><a class="header-anchor" href="#_6-清dns缓存" aria-hidden="true">#</a> 6.清dns缓存</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">killall</span> <span class="token parameter variable">-HUP</span> mDNSResponder <span class="token comment"># 清dns缓存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-测试dnsmasq服务是否正常" tabindex="-1"><a class="header-anchor" href="#_7-测试dnsmasq服务是否正常" aria-hidden="true">#</a> 7.测试dnsmasq服务是否正常</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ping</span> brinish.com
<span class="token function">nslookup</span> brinish.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[i];function r(l,t){return a(),n("div",null,c)}const u=s(d,[["render",r],["__file","4.html.vue"]]);export{u as default};
