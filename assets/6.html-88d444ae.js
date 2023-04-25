import{_ as e,X as i,Y as x,a1 as n}from"./framework-fa0a4005.js";const d={},s=n(`<h1 id="jenkins推送harbor" tabindex="-1"><a class="header-anchor" href="#jenkins推送harbor" aria-hidden="true">#</a> jenkins推送harbor</h1><h2 id="_1-拉取代码" tabindex="-1"><a class="header-anchor" href="#_1-拉取代码" aria-hidden="true">#</a> 1.拉取代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch: &#39;master&#39;, credentialsId: &#39;XXXXXXXXXXXXXXXXXXXXXXXXX&#39;, url: &#39;http://xxxx.xxxx.xxxx/xxx/demo.git&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-构建镜像" tabindex="-1"><a class="header-anchor" href="#_2-构建镜像" aria-hidden="true">#</a> 2.构建镜像</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>script {
    app = docker.build(&quot;xx/xxx:$Tag&quot;, &quot;.&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-推送到harbor-xxxxxxxxxxxxxxxxxxxxxxxxxx为凭据id" tabindex="-1"><a class="header-anchor" href="#_3-推送到harbor-xxxxxxxxxxxxxxxxxxxxxxxxxx为凭据id" aria-hidden="true">#</a> 3.推送到harbor (xxxxxxxxxxxxxxxxxxxxxxxxxx为凭据ID)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>script {
    docker.withRegistry(&quot;http://xxx.xxxx.xxxx&quot;, &#39;xxxxxxxxxxxxxxxxxxxxxxxxxx&#39;){
        app.push()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-删除本地镜像" tabindex="-1"><a class="header-anchor" href="#_4-删除本地镜像" aria-hidden="true">#</a> 4.删除本地镜像</h2><div class="language-pipeline line-numbers-mode" data-ext="pipeline"><pre class="language-pipeline"><code>pipeline {
    agent {
        docker {
            image &quot;python:3.7&quot;
        }
    }
    environment {
        app = null
    }
    stages {
        stage(&quot;拉取代码&quot;){
            steps {
                git branch: &#39;master&#39;, credentialsId: &#39;XXXXXXXXXXXXXXXXXXXXXXXXX&#39;, url: &#39;http://xxxx.xxxx.xxxx/xxx/demo.git&#39;
            }
        }
        stage(&quot;构建镜像&quot;){
            steps {
                script {
                    app = docker.build(&quot;xx/xxx:$Tag&quot;, &quot;.&quot;)
                }
            }
        }
        stage(&#39;推送镜像&#39;){
            steps {
                script {
                    docker.withRegistry(&quot;http://xxx.xxxx.xxxx&quot;, &#39;xxxxxxxxxxxxxxxxxxxxxxxxxx&#39;){
                        app.push()
                    }
                }
            }
        }
        stage(&#39;删除本地镜像&#39;){
            steps {
                sh &quot;docker rmi xxx.xxxx.xxxx/xx/&quot;+&quot;xxx:$Tag&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[s];function l(r,t){return i(),x("div",null,a)}const c=e(d,[["render",l],["__file","6.html.vue"]]);export{c as default};
