import{_ as t,Y as i,Z as p,$ as n,a0 as s,a1 as c,a2 as a,H as l}from"./framework-52b6375a.js";const o={},u=a(`<h1 id="github构建docker镜像并推送" tabindex="-1"><a class="header-anchor" href="#github构建docker镜像并推送" aria-hidden="true">#</a> github构建docker镜像并推送</h1><h2 id="_1-新建github仓库" tabindex="-1"><a class="header-anchor" href="#_1-新建github仓库" aria-hidden="true">#</a> 1.新建github仓库</h2><p><img src="https://img.brinish.eu.org:6205/images/2023/04/29/8fc1fdcc600b8ebb1cd8cae591b868b4.th.png" alt="新建github仓库" loading="lazy"></p><h2 id="_2-新建dockerfile" tabindex="-1"><a class="header-anchor" href="#_2-新建dockerfile" aria-hidden="true">#</a> 2.新建Dockerfile</h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:alpine <span class="token keyword">AS</span> builder</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /app</span>
<span class="token instruction"><span class="token keyword">ADD</span> . /app/</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">ENV</span> GO111MODULE=off</span>
<span class="token instruction"><span class="token keyword">RUN</span> go build -o hello .</span>
<span class="token instruction"><span class="token keyword">FROM</span> alpine</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /app</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/hello .</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./hello&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-新建-github-workflows-docker-yml" tabindex="-1"><a class="header-anchor" href="#_3-新建-github-workflows-docker-yml" aria-hidden="true">#</a> 3.新建.github/workflows/docker.yml</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CD

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">tags</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;v*.*.*&#39;</span>  <span class="token comment"># 推送tag时触发</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">push_to_registries</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 发布多平台docker镜像
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
      <span class="token key atrule">packages</span><span class="token punctuation">:</span> write
      <span class="token key atrule">contents</span><span class="token punctuation">:</span> read
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 拉取代码
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 登录docker
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/login<span class="token punctuation">-</span>action@v2.1.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKER_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment">#dockerhub用户名</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKER_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment">#dockerhub密码</span>
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 登录github仓库
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/login<span class="token punctuation">-</span>action@v2.1.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">registry</span><span class="token punctuation">:</span> ghcr.io
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.actor <span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment">#github用户名</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKER_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment">#github token</span>
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 推送标记
        <span class="token key atrule">id</span><span class="token punctuation">:</span> meta
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/metadata<span class="token punctuation">-</span>action@v4.4.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">images</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            brinishness/go-test  #dockerhub仓库
            ghcr.io/\${{ github.repository }}  #ghcr.io仓库</span>
            
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 配置buildx
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/setup<span class="token punctuation">-</span>buildx<span class="token punctuation">-</span>action@v2.5.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">use</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">platforms</span><span class="token punctuation">:</span> linux/amd64<span class="token punctuation">,</span>linux/arm64<span class="token punctuation">,</span>linux/arm64/v8<span class="token punctuation">,</span>linux/arm/v7  <span class="token comment"># 构建平台</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建并发布镜像
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/build<span class="token punctuation">-</span>push<span class="token punctuation">-</span>action@v4.0.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">context</span><span class="token punctuation">:</span> .
          <span class="token key atrule">no-cache</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">push</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">platforms</span><span class="token punctuation">:</span> linux/amd64<span class="token punctuation">,</span>linux/arm64<span class="token punctuation">,</span>linux/arm/v7<span class="token punctuation">,</span>linux/arm/v6
          <span class="token key atrule">tags</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.meta.outputs.tags <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">labels</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.meta.outputs.labels <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-配置dockerhub用户密码和github-token" tabindex="-1"><a class="header-anchor" href="#_4-配置dockerhub用户密码和github-token" aria-hidden="true">#</a> 4.配置dockerhub用户密码和github token</h2><p><img src="https://img.brinish.eu.org:6205/images/2023/04/29/780792b63c9393a929fbd95c4010c5e8.png" alt="配置dockerhub用户密码" loading="lazy"></p><h2 id="_5-拉取代码" tabindex="-1"><a class="header-anchor" href="#_5-拉取代码" aria-hidden="true">#</a> 5.拉取代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/brinishness/go-test.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-添加文件到git并推送" tabindex="-1"><a class="header-anchor" href="#_6-添加文件到git并推送" aria-hidden="true">#</a> 6.添加文件到git并推送</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add&quot;</span>
<span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-创建tag并推送" tabindex="-1"><a class="header-anchor" href="#_7-创建tag并推送" aria-hidden="true">#</a> 7.创建tag并推送</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag v1.0.0
<span class="token function">git</span> push origin v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-查看github-actions" tabindex="-1"><a class="header-anchor" href="#_8-查看github-actions" aria-hidden="true">#</a> 8.查看github actions</h2><p><img src="https://img.brinish.eu.org:6205/images/2023/04/29/31e8b38c6f7ceae852796c73c008cc10.png" alt="查看github actions" loading="lazy"></p><h2 id="_9-查看github镜像" tabindex="-1"><a class="header-anchor" href="#_9-查看github镜像" aria-hidden="true">#</a> 9.查看github镜像</h2><p><img src="https://img.brinish.eu.org:6205/images/2023/04/30/adeceb0922814345d03a89cc27b1e3c2.png" alt="查看github镜像" loading="lazy"></p><h2 id="_10-查看dockerhub" tabindex="-1"><a class="header-anchor" href="#_10-查看dockerhub" aria-hidden="true">#</a> 10.查看dockerhub</h2><p><img src="https://img.brinish.eu.org:6205/images/2023/04/29/3d7fb4ea3b4f66af400feef226d2e741.png" alt="查看dockerhub" loading="lazy"></p>`,21),r={id:"_11-查看例子-github",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#_11-查看例子-github","aria-hidden":"true"},"#",-1),k={href:"https://github.com/brinishness/go-test.git",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token scheme">https<span class="token scheme-delimiter">:</span></span><span class="token authority"><span class="token authority-delimiter">//</span><span class="token host">github.com</span></span><span class="token path"><span class="token path-separator">/</span>brinishness<span class="token path-separator">/</span>go-test.git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function v(b,m){const e=l("ExternalLinkIcon");return i(),p("div",null,[u,n("h2",r,[d,s(" 11.查看例子 "),n("a",k,[s("github"),c(e)])]),h])}const y=t(o,[["render",v],["__file","3.html.vue"]]);export{y as default};