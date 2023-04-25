import{_ as i,X as e,Y as n,a1 as s}from"./framework-fa0a4005.js";const a={},d=s(`<h1 id="jenkins推送mexus" tabindex="-1"><a class="header-anchor" href="#jenkins推送mexus" aria-hidden="true">#</a> jenkins推送mexus</h1><h2 id="_1-配置参数化构建" tabindex="-1"><a class="header-anchor" href="#_1-配置参数化构建" aria-hidden="true">#</a> 1.配置参数化构建</h2><p><img src="https://img.brinish.eu.org:6205/images/2023/04/25/a06b3375e02fddb18580c4f0b76cf45f.png" alt="配置参数化构建" loading="lazy"></p><h2 id="_2-拉取代码" tabindex="-1"><a class="header-anchor" href="#_2-拉取代码" aria-hidden="true">#</a> 2.拉取代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch: &#39;master&#39;, credentialsId: &#39;XXXXXXXXXXXXXXXXXXXXXXXXX&#39;, url: &#39;http://xxxx.xxxx.xxxx/xxx/demo.git&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img.brinish.eu.org:6205/images/2023/04/25/a4c62dab431aff95316df2d90c3ad11e.png" alt="查看凭据" loading="lazy"></p><h2 id="_3-打包" tabindex="-1"><a class="header-anchor" href="#_3-打包" aria-hidden="true">#</a> 3.打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh &#39;mvn clean package -f pom.xml&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-推送" tabindex="-1"><a class="header-anchor" href="#_4-推送" aria-hidden="true">#</a> 4.推送</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>script {
    pom = readMavenPom file: &quot;pom.xml&quot;;
    filesByGlob = findFiles(glob: &quot;target/*.\${pom.packaging}&quot;);
    echo &quot;\${filesByGlob[0].name} \${filesByGlob[0].path} \${filesByGlob[0].directory} \${filesByGlob[0].length} \${filesByGlob[0].lastModified}&quot;
    artifactPath = filesByGlob[0].path;
    artifactExists = fileExists artifactPath;
    if(artifactExists) {
        echo &quot;*** File: \${artifactPath}, group: \${pom.groupId}, packaging: \${pom.packaging}, version \${version}&quot;;
        nexusArtifactUploader(
            nexusVersion: NEXUS_VERSION,
            protocol: NEXUS_PROTOCOL,
            nexusUrl: NEXUS_URL,
            groupId: pom.groupId,
            version: version,
            repository: NEXUS_REPOSITORY,
            credentialsId: NEXUS_CREDENTIAL_ID,
            artifacts: [
                [artifactId: pom.artifactId,
                classifier: &#39;&#39;,
                file: artifactPath,
                type: pom.packaging],
                [artifactId: pom.artifactId,
                classifier: &#39;&#39;,
                file: &quot;pom.xml&quot;,
                type: &quot;pom&quot;]
            ]
        );
    } else {
        error &quot;*** File: \${artifactPath}, could not be found&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-发送邮件通知-可选" tabindex="-1"><a class="header-anchor" href="#_5-发送邮件通知-可选" aria-hidden="true">#</a> 5.发送邮件通知 (可选)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post {
    always {
        emailext(
            subject: &#39;\${DEFAULT_SUBJECT}&#39;,
            body: &#39;\${DEFAULT_CONTENT}&#39;,
            to: &#39;XXXXXXXXX@qq.com&#39;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-完整配置-可根据环境自行配置" tabindex="-1"><a class="header-anchor" href="#_6-完整配置-可根据环境自行配置" aria-hidden="true">#</a> 6.完整配置 (可根据环境自行配置)</h2><div class="language-pipeline line-numbers-mode" data-ext="pipeline"><pre class="language-pipeline"><code>pipeline {
    agent {
        docker {
            image &#39;maven:3.8-openjdk-8-slim&#39;
            args &#39;-v /root/.m2:/root/.m2&#39;
        }
    }
    environment {
        NEXUS_VERSION = &quot;nexus3&quot;
        NEXUS_PROTOCOL = &quot;http&quot;
        NEXUS_URL = &quot;XXX.XXXX.XXX&quot;
        NEXUS_REPOSITORY = &quot;maven-\${type}&quot;
        NEXUS_CREDENTIAL_ID = &quot;XXXXXXXXXXXXXXXXXXXX&quot;
    }
    stages {
        stage(&quot;拉取代码&quot;){
            steps {
                git branch: &#39;master&#39;, credentialsId: &#39;XXXXXXXXXXXXXXXXXXXXXXXXX&#39;, url: &#39;http://xxxx.xxxx.xxxx/xxx/demo.git&#39;
            }    
        }
        stage(&#39;打包项目&#39;) {
            steps() {
                sh &#39;mvn clean package -f pom.xml&#39;
            }
        }
        stage(&#39;上传私服&#39;) { 
            steps {
                script {
                    pom = readMavenPom file: &quot;pom.xml&quot;;
                    filesByGlob = findFiles(glob: &quot;target/*.\${pom.packaging}&quot;);
                    echo &quot;\${filesByGlob[0].name} \${filesByGlob[0].path} \${filesByGlob[0].directory} \${filesByGlob[0].length} \${filesByGlob[0].lastModified}&quot;
                    artifactPath = filesByGlob[0].path;
                    artifactExists = fileExists artifactPath;
                    if(artifactExists) {
                        echo &quot;*** File: \${artifactPath}, group: \${pom.groupId}, packaging: \${pom.packaging}, version \${version}&quot;;
                        nexusArtifactUploader(
                            nexusVersion: NEXUS_VERSION,
                            protocol: NEXUS_PROTOCOL,
                            nexusUrl: NEXUS_URL,
                            groupId: pom.groupId,
                            version: version,
                            repository: NEXUS_REPOSITORY,
                            credentialsId: NEXUS_CREDENTIAL_ID,
                            artifacts: [
                                [artifactId: pom.artifactId,
                                classifier: &#39;&#39;,
                                file: artifactPath,
                                type: pom.packaging],
                                [artifactId: pom.artifactId,
                                classifier: &#39;&#39;,
                                file: &quot;pom.xml&quot;,
                                type: &quot;pom&quot;]
                            ]
                        );
                    } else {
                        error &quot;*** File: \${artifactPath}, could not be found&quot;;
                    }
                }
            }
        } 
    }
    post {
        always {
            emailext(
                subject: &#39;\${DEFAULT_SUBJECT}&#39;,
                body: &#39;\${DEFAULT_CONTENT}&#39;,
                to: &#39;XXXXXXXXX@qq.com&#39;
            )
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[d];function r(v,t){return e(),n("div",null,l)}const u=i(a,[["render",r],["__file","4.html.vue"]]);export{u as default};
