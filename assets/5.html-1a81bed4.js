import{_ as e,Y as n,Z as i,a2 as s}from"./framework-52b6375a.js";const a={},d=s(`<h1 id="jenkins推送verdaccio" tabindex="-1"><a class="header-anchor" href="#jenkins推送verdaccio" aria-hidden="true">#</a> jenkins推送verdaccio</h1><h2 id="_1-拉取代码" tabindex="-1"><a class="header-anchor" href="#_1-拉取代码" aria-hidden="true">#</a> 1.拉取代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch: &#39;master&#39;, credentialsId: &#39;XXXXXXXXXXXXXXXXXXXXXXXXX&#39;, url: &#39;http://xxxx.xxxx.xxxx/xxx/demo.git&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-安装依赖并构建" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖并构建" aria-hidden="true">#</a> 2.安装依赖并构建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token string">&#39;npm install --registry=https://registry.npmmirror.com/&#39;</span>
<span class="token function">sh</span> <span class="token string">&#39;npm run build&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-获取私服token" tabindex="-1"><a class="header-anchor" href="#_3-获取私服token" aria-hidden="true">#</a> 3.获取私服token</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.npmrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img.brinish.eu.org:6205/images/2023/04/25/72b71cd5cd99787b382cafe44a7be2df.png" alt="获取私服token" loading="lazy"></p><h2 id="_4-推送到verdaccio" tabindex="-1"><a class="header-anchor" href="#_4-推送到verdaccio" aria-hidden="true">#</a> 4.推送到verdaccio</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token string">&#39;echo //xxx.xxxx.xxxx/:_authToken=&quot;xxxxxxxxx&quot; &gt; .npmrc&#39;</span> // 可在已登录设备获取
<span class="token function">sh</span> <span class="token string">&#39;npm publish --registry http://xxx.xxxx.xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-发送企业微信通知-可选" tabindex="-1"><a class="header-anchor" href="#_5-发送企业微信通知-可选" aria-hidden="true">#</a> 5.发送企业微信通知 (可选)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post {
    always() {
        wxwork(
                robot: &#39;tears&#39;,
                type: &#39;markdown&#39;,
                text: [
                        &quot;# 任务\${JOB_NAME}&quot;,
                        &quot;- 状态: \${currentBuild.result}&quot;,
                        &quot;- 次数: \${BUILD_NUMBER}&quot;,
                        &quot;- 执行人: \${BUILD_USER}&quot;,
                        &quot;- [查看控制台](\${BUILD_URL})&quot;
                ]
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-完整配置-可根据环境自行配置" tabindex="-1"><a class="header-anchor" href="#_6-完整配置-可根据环境自行配置" aria-hidden="true">#</a> 6.完整配置 (可根据环境自行配置)</h2><div class="language-pipeline line-numbers-mode" data-ext="pipeline"><pre class="language-pipeline"><code>pipeline {
    agent {
        docker {
            image &#39;node:14&#39;
        }
    }
    stages {
        stage(&quot;拉取代码&quot;){
            steps {
                git branch: &#39;master&#39;, credentialsId: &#39;XXXXXXXXXXXXXXXXXXXXXXXXX&#39;, url: &#39;http://xxxx.xxxx.xxxx/xxx/demo.git&#39;
            }    
        }
        stage(&#39;打包项目&#39;) {
            steps() {
                sh &#39;npm install --registry=https://registry.npmmirror.com/&#39;
                sh &#39;npm run build&#39;
            }
        }
        stage(&#39;发布私服&#39;) {
            steps {
                sh &#39;echo //xxx.xxxx.xxxx/:_authToken=&quot;xxxxxxxxx&quot; &gt; .npmrc&#39; // 可在已登录设备获取
                sh &#39;npm publish --registry http://xxx.xxxx.xxxx&#39;
            }
        }
    }
    post {
        always() {
            wxwork(
                    robot: &#39;xxxx&#39;,
                    type: &#39;markdown&#39;,
                    text: [
                            &quot;# 任务\${JOB_NAME}&quot;,
                            &quot;- 状态: \${currentBuild.result}&quot;,
                            &quot;- 次数: \${BUILD_NUMBER}&quot;,
                            &quot;- 执行人: \${BUILD_USER}&quot;,
                            &quot;- [查看控制台](\${BUILD_URL})&quot;
                    ]
            )
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[d];function r(t,c){return n(),i("div",null,l)}const u=e(a,[["render",r],["__file","5.html.vue"]]);export{u as default};
