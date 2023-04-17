import{_ as u,X as m,Y as b,Z as e,$ as n,a0 as o,a2 as s,a3 as t,F as r}from"./framework-c8dc88ca.js";const v={},p=t(`<h1 id="macos简单配置" tabindex="-1"><a class="header-anchor" href="#macos简单配置" aria-hidden="true">#</a> macos简单配置</h1><h2 id="_1-解锁系统偏好设置" tabindex="-1"><a class="header-anchor" href="#_1-解锁系统偏好设置" aria-hidden="true">#</a> 1.解锁系统偏好设置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> spctl --master-disable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),h={id:"_2-安装iterm2-官网下载",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_2-安装iterm2-官网下载","aria-hidden":"true"},"#",-1),k={href:"https://iterm2.com/downloads.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<p><img src="http://img.brinish.eu.org:5205/images/2023/04/16/aa859c809e85a064491349e5ed4491e6.png" alt="下载iterm2" loading="lazy"></p><h2 id="_3-安装brew" tabindex="-1"><a class="header-anchor" href="#_3-安装brew" aria-hidden="true">#</a> 3.安装brew</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-配置brew国内镜像加速" tabindex="-1"><a class="header-anchor" href="#_3-配置brew国内镜像加速" aria-hidden="true">#</a> 3.配置brew国内镜像加速</h2>`,4),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 替换各个源"),n(`
`),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
`),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/core"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
`),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/cask"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

`),e("span",{class:"token comment"},"# zsh 替换 brew bintray 镜像"),n(`
`),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},"'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles'"),n(),e("span",{class:"token operator"},">>"),n(` ~/.zshrc
`),e("span",{class:"token builtin class-name"},"source"),n(` ~/.zshrc

`),e("span",{class:"token comment"},"# bash 替换 brew bintray 镜像"),n(`
`),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},"'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles'"),n(),e("span",{class:"token operator"},">>"),n(` ~/.bash_profile
`),e("span",{class:"token builtin class-name"},"source"),n(` ~/.bash_profile
brew update
`),e("span",{class:"token comment"},"# 刷新源"),n(`

`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n(`
`),e("span",{class:"token comment"},"# 替换各个源"),n(`
`),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.ustc.edu.cn/brew.git
`),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/core"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
`),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/cask"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

`),e("span",{class:"token comment"},"# zsh 替换 brew bintray 镜像"),n(`
`),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},"'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'"),n(),e("span",{class:"token operator"},">>"),n(` ~/.zshrc
`),e("span",{class:"token builtin class-name"},"source"),n(` ~/.zshrc

`),e("span",{class:"token comment"},"# bash 替换 brew bintray 镜像"),n(`
`),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},"'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'"),n(),e("span",{class:"token operator"},">>"),n(` ~/.bash_profile
`),e("span",{class:"token builtin class-name"},"source"),n(` ~/.bash_profile

`),e("span",{class:"token comment"},"# 刷新源"),n(`
brew update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 查看 brew.git 当前源"),n(`
$ `),e("span",{class:"token builtin class-name"},"cd"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),e("span",{class:"token variable"},")")]),n('"')]),n(),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token function"},"git"),n(" remote "),e("span",{class:"token parameter variable"},"-v"),n(`
origin    https://github.com/Homebrew/brew.git `),e("span",{class:"token punctuation"},"("),n("fetch"),e("span",{class:"token punctuation"},")"),n(`
origin    https://github.com/Homebrew/brew.git `),e("span",{class:"token punctuation"},"("),n("push"),e("span",{class:"token punctuation"},")"),n(`

`),e("span",{class:"token comment"},"# 查看 homebrew-core.git 当前源"),n(`
$ `),e("span",{class:"token builtin class-name"},"cd"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/core"),e("span",{class:"token variable"},")")]),n('"')]),n(),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token function"},"git"),n(" remote "),e("span",{class:"token parameter variable"},"-v"),n(`
origin    https://github.com/Homebrew/homebrew-core.git `),e("span",{class:"token punctuation"},"("),n("fetch"),e("span",{class:"token punctuation"},")"),n(`
origin    https://github.com/Homebrew/homebrew-core.git `),e("span",{class:"token punctuation"},"("),n("push"),e("span",{class:"token punctuation"},")"),n(`

`),e("span",{class:"token comment"},"# 修改 brew.git 为阿里源"),n(`
$ `),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

`),e("span",{class:"token comment"},"# 修改 homebrew-core.git 为阿里源"),n(`
$ `),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/core"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

`),e("span",{class:"token comment"},"# zsh 替换 brew bintray 镜像"),n(`
$ `),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},"'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles'"),n(),e("span",{class:"token operator"},">>"),n(` ~/.zshrc
$ `),e("span",{class:"token builtin class-name"},"source"),n(` ~/.zshrc

`),e("span",{class:"token comment"},"# bash 替换 brew bintray 镜像"),n(`
$ `),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},"'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles'"),n(),e("span",{class:"token operator"},">>"),n(` ~/.bash_profile
$ `),e("span",{class:"token builtin class-name"},"source"),n(` ~/.bash_profile

`),e("span",{class:"token comment"},"# 刷新源"),n(`
$ brew update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 重置 brew.git 为官方源"),n(`
$ `),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://github.com/Homebrew/brew.git

`),e("span",{class:"token comment"},"# 重置 homebrew-core.git 为官方源"),n(`
$ `),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/core"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://github.com/Homebrew/homebrew-core.git

`),e("span",{class:"token comment"},"# 重置 homebrew-cask.git 为官方源"),n(`
$ `),e("span",{class:"token function"},"git"),n(),e("span",{class:"token parameter variable"},"-C"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("brew "),e("span",{class:"token parameter variable"},"--repo"),n(" homebrew/cask"),e("span",{class:"token variable"},")")]),n('"')]),n(` remote set-url origin https://github.com/Homebrew/homebrew-cask

`),e("span",{class:"token comment"},"# zsh 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置"),n(`
$ `),e("span",{class:"token function"},"vi"),n(` ~/.zshrc
`),e("span",{class:"token comment"},"# export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx"),n(`

`),e("span",{class:"token comment"},"# bash 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置"),n(`
$ `),e("span",{class:"token function"},"vi"),n(` ~/.bash_profile
`),e("span",{class:"token comment"},"# export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx"),n(`

`),e("span",{class:"token comment"},"# 刷新源"),n(`
$ brew update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=t(`<h2 id="_4-安装oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#_4-安装oh-my-zsh" aria-hidden="true">#</a> 4.安装oh-my-zsh</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-安装zsh-autosuggestions" tabindex="-1"><a class="header-anchor" href="#_5-安装zsh-autosuggestions" aria-hidden="true">#</a> 5.安装zsh-autosuggestions</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git://github.com/zsh-users/zsh-autosuggestions <span class="token variable">$ZSH_CUSTOM</span>/plugins/zsh-autosuggestions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-安装zsh-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#_6-安装zsh-syntax-highlighting" aria-hidden="true">#</a> 6.安装zsh-syntax-highlighting</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-安装zsh-completions" tabindex="-1"><a class="header-anchor" href="#_7-安装zsh-completions" aria-hidden="true">#</a> 7.安装zsh-completions</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-completions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>\${ZSH<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh}</span>/custom<span class="token punctuation">}</span>/plugins/zsh-completions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-安装autojump" tabindex="-1"><a class="header-anchor" href="#_8-安装autojump" aria-hidden="true">#</a> 8.安装autojump</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> autojump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-安装vim-bat-duf-exa等工具" tabindex="-1"><a class="header-anchor" href="#_9-安装vim-bat-duf-exa等工具" aria-hidden="true">#</a> 9.安装vim bat duf exa等工具</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-设置zsh-附本人配置文件" tabindex="-1"><a class="header-anchor" href="#_10-设置zsh-附本人配置文件" aria-hidden="true">#</a> 10.设置zsh (附本人配置文件)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH
ZSH_DISABLE_COMPFIX=true
# Path to your oh-my-zsh installation.
export ZSH=&quot;$HOME/.oh-my-zsh&quot;
;export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_333.jdk/Contents/Home
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.17.jdk/Contents/Home
export PATH=$PATH:$JAVA_HOME/bin:.
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
# export PATH=&quot;/opt/homebrew/anaconda3/bin:$PATH&quot;  # commented out by conda initialize
# export HOMEBREW_CORE_GIT_REMOTE=&quot;https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git&quot;
export TAURI_PRIVATE_KEY=&quot;dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVuY3J5cHRlZCBzZWNyZXQga2V5ClJXUlRZMEl5ZnFxclJEZXlzYTdFWUF5bS9aZlBsK3U3amhycGpPVnlwWkFaZm9DQkU4b0FBQkFBQUFBQUFBQUFBQUlBQUFBQWxrQ05uMldRcUJVUTV5VVk4MDA0ZUF0QmFMMHZkWXZ1eEtFbUpFeFk5cnpzYmlzbWQ4NUxKNG1ZV3B6djJibnlBcTVGaE1XZTNxRFVtcmM4eDhYWWRiYVFrRGp6bmdKSmIxZ0Y3V1pUa0VsM05pMHVvTDFobE1jRkRLYTM4V2dkMVZMb3VIaGVWbms9Cg==&quot;
export TAURI_KEY_PASSWORD=&quot;qjm13164816910&quot;
export GITHUB_TOKEN=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
export GITHUB_REPOSITORY=&quot;https://github.com/ming-alone/ming-alone.github.io.git&quot;

# Set name of the theme to load --- if set to &quot;random&quot;, it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME=&quot;michelebologna&quot;

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( &quot;robbyrussell&quot; &quot;agnoster&quot; )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE=&quot;true&quot;

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE=&quot;true&quot;

# Uncomment one of the following lines to change the auto-update behavior
# zstyle &#39;:omz:update&#39; mode disabled  # disable automatic updates
# zstyle &#39;:omz:update&#39; mode auto      # update automatically without asking
# zstyle &#39;:omz:update&#39; mode reminder  # just remind me to update when it&#39;s time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle &#39;:omz:update&#39; frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=&quot;true&quot;

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS=&quot;true&quot;

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE=&quot;true&quot;

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION=&quot;true&quot;

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS=&quot;%F{yellow}waiting...%f&quot;
# Caution: this setting can cause issues with multiline prompts in zsh &lt; 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS=&quot;true&quot;

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY=&quot;true&quot;

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# &quot;mm/dd/yyyy&quot;|&quot;dd.mm.yyyy&quot;|&quot;yyyy-mm-dd&quot;
# or set a custom format using the strftime function format specifications,
# see &#39;man strftime&#39; for details.
# HIST_STAMPS=&quot;mm/dd/yyyy&quot;
  HIST_STAMPS=&quot;yyyy-mm-dd&quot;
# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git docker node npm pm2 svn zsh-syntax-highlighting zsh-autosuggestions autojump)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH=&quot;/usr/local/man:$MANPATH&quot;

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR=&#39;vim&#39;
# else
#   export EDITOR=&#39;mvim&#39;
# fi

# Compilation flags
# export ARCHFLAGS=&quot;-arch x86_64&quot;

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run \`alias\`.
#
# Example aliases
# alias zshconfig=&quot;mate ~/.zshrc&quot;
# alias ohmyzsh=&quot;mate ~/.oh-my-zsh&quot;
alias nrd=&quot;npm run dev&quot;
alias nrb=&quot;npm run build&quot;
alias mcp=&quot;maven clean package -f pom-war.xml&quot;
alias bs=&quot;brew services&quot;
#source ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] &amp;&amp; . $(brew --prefix)/etc/profile.d/autojump.sh

# &gt;&gt;&gt; conda initialize &gt;&gt;&gt;
# !! Contents within this block are managed by &#39;conda init&#39; !!
__conda_setup=&quot;$(&#39;/opt/homebrew/anaconda3/bin/conda&#39; &#39;shell.zsh&#39; &#39;hook&#39; 2&gt; /dev/null)&quot;
if [ $? -eq 0 ]; then
    eval &quot;$__conda_setup&quot;
else
    if [ -f &quot;/opt/homebrew/anaconda3/etc/profile.d/conda.sh&quot; ]; then
        . &quot;/opt/homebrew/anaconda3/etc/profile.d/conda.sh&quot;
    else
        export PATH=&quot;/opt/homebrew/anaconda3/bin:$PATH&quot;
    fi
fi
unset __conda_setup
# &lt;&lt;&lt; conda initialize &lt;&lt;&lt;

___MY_VMOPTIONS_SHELL_FILE=&quot;\${HOME}/.jetbrains.vmoptions.sh&quot;; if [ -f &quot;\${___MY_VMOPTIONS_SHELL_FILE}&quot; ]; then . &quot;\${___MY_VMOPTIONS_SHELL_FILE}&quot;; fi

# tabtab source for packages
# uninstall by removing these lines
[[ -f ~/.config/tabtab/zsh/__tabtab.zsh ]] &amp;&amp; . ~/.config/tabtab/zsh/__tabtab.zsh || true

export NVM_DIR=&quot;$HOME/.nvm&quot;
[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm
[ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function E(T,z){const c=r("ExternalLinkIcon"),d=r("Tabs");return m(),b("div",null,[p,e("h2",h,[g,n(" 2.安装iterm2 ("),e("a",k,[n("官网下载"),o(c)]),n(")")]),_,o(d,{id:"20",data:[{title:"清华源"},{title:"中科大源"},{title:"阿里源"},{title:"官方源"}],active:0},{tab0:s(({title:a,value:i,isActive:l})=>[f]),tab1:s(({title:a,value:i,isActive:l})=>[w]),tab2:s(({title:a,value:i,isActive:l})=>[x]),tab3:s(({title:a,value:i,isActive:l})=>[q]),_:1}),y])}const M=u(v,[["render",E],["__file","2.html.vue"]]);export{M as default};