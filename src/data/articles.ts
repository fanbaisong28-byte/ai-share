export interface Article {
  id: number
  title: string
  icon: string
  img: string
  tag: string
  category: string
  date: string
  desc: string
  content: string
}

export interface Category {
  name: string
  key: string
  icon: string
  count: number
}

export const categories: Category[] = [
  { name: 'Codex', key: 'codex', icon: '/images/icon-codex.svg', count: 2 },
  { name: 'Claude', key: 'claude', icon: '/images/icon-claude.svg', count: 2 },
  { name: 'Ollama', key: 'ollama', icon: '/images/icon-ollama.svg', count: 2 },
  { name: 'Hermes', key: 'hermes', icon: '/images/icon-hermes.svg', count: 2 },
  { name: 'Skill', key: 'skill', icon: '/images/icon-skill.svg', count: 1 },
  { name: 'AI 工具', key: 'ai-tool', icon: '/images/category-ai-icon.svg', count: 1 },
  { name: '部署', key: 'deploy', icon: '/images/category-ai-icon.svg', count: 1 },
  { name: '智能体', key: 'agent', icon: '/images/category-ai-icon.svg', count: 1 },
  { name: '前端', key: 'frontend', icon: '/images/category-ai-icon.svg', count: 1 },
  { name: '其他', key: 'other', icon: '/images/category-ai-icon.svg', count: 1 },
]

export const articles: Article[] = [
  {
    id: 1, title: 'Codex 入门指南', icon: '🤖', img: '/images/article-thumb-1.svg', tag: '入门', category: 'codex',
    date: '2026-06-01',
    desc: 'OpenAI 推出的桌面级 AI 编程工具，支持 Computer Use 与终端操作。',
    content: '<h2>Codex 是什么？</h2><p>Codex 是 OpenAI 推出的桌面级 AI 编程工具，支持 Computer Use 功能，可以直接操作终端和代码编辑器。</p><h3>核心功能</h3><ul><li>Computer Use：直接操控桌面环境</li><li>终端集成：在终端中直接执行命令</li><li>多文件编辑：同时修改多个文件</li></ul><h3>快速开始</h3><pre><code># 安装 Codex\npip install codex-cli\n# 启动\ncodex --model claude-sonnet-4</code></pre>'
  },
  {
    id: 2, title: 'Codex 实战技巧', icon: '🤖', img: '/images/article-thumb-2.svg', tag: '进阶', category: 'codex',
    date: '2026-05-28',
    desc: '掌握 Codex 的高级用法，提升编程效率。',
    content: '<h2>Codex 实战技巧</h2><p>本文分享 Codex 在实际开发中的高级用法。</p><h3>高效提示词</h3><p>编写清晰的提示词是使用 Codex 的关键。</p><pre><code># 好的提示词示例\n"用 Python 写一个快速排序算法，包含测试用例"</code></pre><h3>工作流集成</h3><p>将 Codex 集成到日常开发工作流中。</p>'
  },
  {
    id: 3, title: 'Claude Code 完全指南', icon: '🟣', img: '/images/article-thumb-3.svg', tag: '入门', category: 'claude',
    date: '2026-05-20',
    desc: 'Anthropic 官方终端 AI 编程助手，支持 MCP 协议与 Skill 系统。',
    content: '<h2>Claude Code 简介</h2><p>Claude Code 是 Anthropic 推出的终端 AI 编程助手，支持 MCP 协议和 Skill 系统。</p><h3>安装方式</h3><pre><code>npm install -g @anthropic/claude-code\nclaude</code></pre><h3>核心特性</h3><ul><li>MCP 协议支持</li><li>Skill 插件系统</li><li>多模型切换</li></ul>'
  },
  {
    id: 4, title: 'Claude Code Skill 开发', icon: '🟣', img: '/images/article-thumb-1.svg', tag: '进阶', category: 'claude',
    date: '2026-05-15',
    desc: '学习如何为 Claude Code 编写自定义 Skill 插件。',
    content: '<h2>Skill 开发入门</h2><p>Skill 是 Claude Code 的插件系统，可以扩展其功能。</p><h3>Skill 结构</h3><pre><code>my-skill/\n  ├── SKILL.md\n  ├── script.py\n  └── config.json</code></pre><h3>开发步骤</h3><ol><li>创建 Skill 目录</li><li>编写 SKILL.md 描述文件</li><li>实现核心逻辑</li><li>测试并发布</li></ol>'
  },
  {
    id: 5, title: 'Ollama 本地模型部署', icon: '🦙', img: '/images/article-thumb-2.svg', tag: '入门', category: 'ollama',
    date: '2026-05-10',
    desc: '本地运行大语言模型，免费、隐私、离线可用。',
    content: '<h2>Ollama 是什么？</h2><p>Ollama 是一个本地大模型部署工具，支持在本地运行各种开源大语言模型。</p><h3>安装与使用</h3><pre><code># 下载安装 Ollama\nollama pull llama3\nollama run llama3</code></pre><h3>优势</h3><ul><li>完全免费</li><li>数据隐私安全</li><li>离线可用</li><li>支持多种模型</li></ul>'
  },
  {
    id: 6, title: 'Ollama 模型管理', icon: '🦙', img: '/images/article-thumb-3.svg', tag: '进阶', category: 'ollama',
    date: '2026-05-05',
    desc: '管理多个本地模型，优化性能和资源使用。',
    content: '<h2>模型管理技巧</h2><p>同时管理多个本地模型的技巧和最佳实践。</p><h3>常用命令</h3><pre><code>ollama list          # 列出模型\nollama pull llama3   # 下载模型\nollama rm llama3     # 删除模型</code></pre>'
  },
  {
    id: 7, title: 'Hermes 智能体终端', icon: '🔮', img: '/images/article-thumb-1.svg', tag: '入门', category: 'hermes',
    date: '2026-04-28',
    desc: 'Nous Research 出品的智能体协作终端，支持多智能体协作。',
    content: '<h2>Hermes 简介</h2><p>Hermes 是 Nous Research 推出的智能体协作终端。</p><h3>核心概念</h3><ul><li>多智能体协作</li><li>任务分解与分配</li><li>上下文共享</li></ul>'
  },
  {
    id: 8, title: 'Hermes 高级配置', icon: '🔮', img: '/images/article-thumb-2.svg', tag: '进阶', category: 'hermes',
    date: '2026-04-20',
    desc: '深入配置 Hermes 智能体终端的各项参数。',
    content: '<h2>高级配置</h2><p>定制 Hermes 的行为和性能。</p><pre><code>{\n  "model": "hermes-3",\n  "temperature": 0.7,\n  "max_tokens": 4096\n}</code></pre>'
  },
  {
    id: 9, title: 'AI 编程工具对比', icon: '⚡', img: '/images/article-thumb-3.svg', tag: '对比', category: 'ai-tool',
    date: '2026-04-15',
    desc: '主流 AI 编程工具的横向对比与选型建议。',
    content: '<h2>工具对比</h2><table><tr><th>工具</th><th>特点</th><th>适用场景</th></tr><tr><td>Codex</td><td>Computer Use</td><td>桌面操作</td></tr><tr><td>Claude Code</td><td>MCP + Skill</td><td>终端编程</td></tr><tr><td>Ollama</td><td>本地部署</td><td>隐私敏感</td></tr></table>'
  },
  {
    id: 10, title: 'Vibe Coding 入门', icon: '🧠', img: '/images/article-thumb-1.svg', tag: '入门', category: 'agent',
    date: '2026-04-10',
    desc: '用自然语言描述需求，让 AI 帮你写代码的全新编程方式。',
    content: '<h2>什么是 Vibe Coding？</h2><p>Vibe Coding 是一种用自然语言描述需求，让 AI 自动生成代码的编程方式。</p><h3>工作流程</h3><ol><li>描述你想要的功能</li><li>AI 生成代码</li><li>审查并迭代</li></ol>'
  },
]
