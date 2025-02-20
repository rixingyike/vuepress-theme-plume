import{_ as i,c as a,a as e,o as n}from"./app-CGoujCZj.js";const l={};function t(p,s){return n(),a("div",null,s[0]||(s[0]=[e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>此文档 fork 自 <a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">vuepress official doc</a>。</p></div><p>下述的指南基于以下条件：</p><ul><li>Markdown 源文件放置在你项目的 <code>docs</code> 目录；</li><li>使用的是默认的构建输出目录 (<code>.vuepress/dist</code>) ；</li><li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a> 作为包管理器，当然也支持使用 npm 或 yarn 。</li><li>VuePress 作为项目依赖安装，并在 <code>package.json</code> 中配置了如下脚本：</li></ul><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">scripts</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">docs:build</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress build docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages"><span>GitHub Pages</span></a></h2><ol><li><p>设置正确的 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base</a> 选项。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p></li><li><p>选择你想要使用的 CI 工具。这里我们以 <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a> 为例。</p><p>创建 <code>.github/workflows/docs.yml</code> 文件来配置工作流。</p></li></ol><details class="hint-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    branches</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 手动触发部署</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  workflow_dispatch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">jobs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  docs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    runs-on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    steps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          fetch-depth</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Setup pnpm</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm/action-setup@v4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 选择要使用的 pnpm 版本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 8</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 使用 pnpm 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          run_install</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Setup Node.js</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 选择要使用的 node 版本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          node-version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 缓存 pnpm 依赖</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          cache</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 运行构建脚本</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Build VuePress site</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 查看 workflow 的文档来获取更多信息</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> crazy-max/ghaction-github-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 部署到 gh-pages 分支</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          target_branch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gh-pages</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          build_dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs/.vuepress/dist</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        env</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          GITHUB_TOKEN</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> \${{ secrets.GITHUB_TOKEN }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请参考 <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages 官方指南</a> 来获取更多信息。</p></div><h2 id="gitlab-pages" tabindex="-1"><a class="header-anchor" href="#gitlab-pages"><span>GitLab Pages</span></a></h2><ol><li><p>设置正确的 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base</a> 选项。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p></li><li><p>创建 <code>.gitlab-ci.yml</code> 文件来配置 <a href="https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/" target="_blank" rel="noopener noreferrer">GitLab CI</a> 工作流。</p></li></ol><details class="hint-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 选择你要使用的 docker 镜像</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node:18-buster</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">pages</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  only</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 缓存 node_modules</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  cache</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      files</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    paths</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 安装 pnpm</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  before_script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> curl -fsSL https://get.pnpm.io/install.sh | sh -</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm config set store-dir .pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 安装依赖并运行构建脚本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm docs:build --dest public</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  artifacts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    paths</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> public</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请参考 <a href="https://docs.gitlab.com/ce/user/project/pages/#getting-started" target="_blank" rel="noopener noreferrer">GitLab Pages 官方指南</a> 来获取更多信息。</p></div><h2 id="google-firebase" tabindex="-1"><a class="header-anchor" href="#google-firebase"><span>Google Firebase</span></a></h2><ol><li><p>请确保你已经安装了 <a href="https://www.npmjs.com/package/firebase-tools" target="_blank" rel="noopener noreferrer">firebase-tools</a>。</p></li><li><p>在你项目的根目录下创建 <code>firebase.json</code> 和 <code>.firebaserc</code>，并包含以下内容：</p><p><code>firebase.json</code>:</p><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">hosting</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">public</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./docs/.vuepress/dist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ignore</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p><code>.firebaserc</code>:</p><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">projects</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">default</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&lt;YOUR_FIREBASE_ID&gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div></li><li><p>在执行了 <code>pnpm docs:build</code> 后, 使用 <code>firebase deploy</code> 指令来部署。</p></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请参考 <a href="https://firebase.google.com/docs/cli" target="_blank" rel="noopener noreferrer">Firebase CLI 官方指南</a> 来获取更多信息。</p></div><h2 id="heroku" tabindex="-1"><a class="header-anchor" href="#heroku"><span>Heroku</span></a></h2><ol><li><p>首先安装 <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI</a>；</p></li><li><p><a href="https://signup.heroku.com" target="_blank" rel="noopener noreferrer">在这里</a> 注册一个 Heroku 账号；</p></li><li><p>运行 <code>heroku login</code> 并填写你的 Heroku 认证信息：</p><div class="language-bash" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">heroku</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> login</span></span></code></pre></div></li><li><p>在你的项目根目录中，创建一个名为 <code>static.json</code> 的文件，并包含下述内容：</p></li></ol><p><code>static.json</code>:</p><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">root</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./docs/.vuepress/dist</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>这里是你项目的配置，请参考 <a href="https://github.com/heroku/heroku-buildpack-static" target="_blank" rel="noopener noreferrer">heroku-buildpack-static</a> 来获取更多信息。</p><h2 id="kinsta" tabindex="-1"><a class="header-anchor" href="#kinsta"><span>Kinsta</span></a></h2><p>请查看 <a href="https://kinsta.com/docs/vuepress-application/" target="_blank" rel="noopener noreferrer">Set Up VuePress on Kinsta</a> 。</p><h2 id="edgio" tabindex="-1"><a class="header-anchor" href="#edgio"><span>Edgio</span></a></h2><p>请查看 <a href="https://docs.edg.io/guides/vuepress" target="_blank" rel="noopener noreferrer">Edgio Documentation &gt; Framework Guides &gt; VuePress</a> 。</p><h2 id="netlify" tabindex="-1"><a class="header-anchor" href="#netlify"><span>Netlify</span></a></h2><ol><li><p>前往 <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a> ，从 GitHub 创建一个新项目，并进行如下配置：</p><ul><li><strong>Build Command:</strong> <code>pnpm docs:build</code></li><li><strong>Publish directory:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>设置 <a href="https://docs.netlify.com/configure-builds/environment-variables" target="_blank" rel="noopener noreferrer">Environment variables</a> 来选择 Node 版本：</p><ul><li><code>NODE_VERSION</code>: 18</li></ul></li><li><p>点击 deploy 按钮。</p></li></ol><h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel"><span>Vercel</span></a></h2><ol><li><p>前往 <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> ，从 GitHub 创建一个新项目，并进行如下配置：</p><ul><li><strong>FRAMEWORK PRESET:</strong> <code>Other</code></li><li><strong>BUILD COMMAND:</strong> <code>pnpm docs:build</code></li><li><strong>OUTPUT DIRECTORY:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>点击 deploy 按钮。</p></li></ol><h2 id="云开发-cloudbase" tabindex="-1"><a class="header-anchor" href="#云开发-cloudbase"><span>云开发 CloudBase</span></a></h2><p><a href="https://cloudbase.net/?site=vuepress" target="_blank" rel="noopener noreferrer">云开发 CloudBase</a> 是一个云原生一体化的 Serverless 云平台， 支持静态网站、容器等多种托管能力，并提供简便的部署工具 <a href="https://cloudbase.net/framework.html?site=vuepress" target="_blank" rel="noopener noreferrer">CloudBase Framework</a> 来一键部署应用。</p><ol><li><p>全局安装 CloudBase CLI ：</p><div class="language-bash" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @cloudbase/cli</span></span></code></pre></div></li><li><p>在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 <a href="https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&amp;tdl_site=vuejs" target="_blank" rel="noopener noreferrer">开通环境</a>：</p><div class="language-bash" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cloudbase</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --without-template</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cloudbase</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> framework:deploy</span></span></code></pre></div></li></ol><p>CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。</p><p>确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。</p><p>也可以使用 <code>cloudbase init --template vuepress</code> 快速创建和部署一个新的 VuePress 应用。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>更多详细信息请查看 CloudBase Framework 的<a href="https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">部署项目示例</a></p></div><h2 id="_21-云盒子" tabindex="-1"><a class="header-anchor" href="#_21-云盒子"><span>21 云盒子</span></a></h2><p>请查看 <a href="https://www.21yunbox.com/docs/#/deploy-vuepress" target="_blank" rel="noopener noreferrer">21 云盒子 - 部署一个 VuePress 静态网页</a>。</p>`,37)]))}const r=i(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/guide/deployment/","title":"部署","lang":"zh-CN","frontmatter":{"title":"部署","author":"pengzhanbo","icon":"material-symbols:deployed-code-outline","createTime":"2024/03/20 12:38:48","permalink":"/guide/deployment/","tags":["指南","部署"],"description":"提示 此文档 fork 自 vuepress official doc。 下述的指南基于以下条件： Markdown 源文件放置在你项目的 docs 目录； 使用的是默认的构建输出目录 (.vuepress/dist) ； 使用 pnpm 作为包管理器，当然也支持使用 npm 或 yarn 。 VuePress 作为项目依赖安装，并在 package....","head":[["meta",{"property":"og:url","content":"https://theme-plume.vuejs.press/guide/deployment/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"部署"}],["meta",{"property":"og:description","content":"提示 此文档 fork 自 vuepress official doc。 下述的指南基于以下条件： Markdown 源文件放置在你项目的 docs 目录； 使用的是默认的构建输出目录 (.vuepress/dist) ； 使用 pnpm 作为包管理器，当然也支持使用 npm 或 yarn 。 VuePress 作为项目依赖安装，并在 package...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-01T16:03:15.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"部署"}],["meta",{"property":"article:modified_time","content":"2024-09-01T16:03:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-01T16:03:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":4.27,"words":1282},"git":{"updatedTime":1725206595000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":4,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"23d1128c4b5c0d908462af70713132a0e9fba59c","date":1710950982000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update deployment doc","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/23d1128c4b5c0d908462af70713132a0e9fba59c"},{"hash":"822d861daef23a289c5e7720cdd7b0beb79b60c1","date":1711040997000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: lint fix md","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/822d861daef23a289c5e7720cdd7b0beb79b60c1"},{"hash":"69d1b0f2d94b1eb36c8709d67884ec735c47d90c","date":1718985907000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/69d1b0f2d94b1eb36c8709d67884ec735c47d90c"},{"hash":"bf9ef6372a7c1ffa8a378b81e60ed05cf2623caa","date":1725206595000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/bf9ef6372a7c1ffa8a378b81e60ed05cf2623caa"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/部署.md","bulletin":false}');export{r as comp,d as data};
