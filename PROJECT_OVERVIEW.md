# fmnet 项目概览

本文档旨在提供 fmnet 项目的全面概述，包括其目标、技术选型、当前状态和发展方向，方便开发者快速了解项目。

## 1. 项目目标

* **初始目标**: 使用 Next.js 和 Fumadocs 构建一个个人知识库或文档网站。
* **当前目标**: 逐步完善网站功能，优化内容结构和用户体验，具体任务见 <mcfile name="TODO.md" path="/Users/jac/fmnet/TODO.md"></mcfile>。

## 2. 技术栈

* **框架**: [Next.js](https://nextjs.org/) (React 框架)
* **文档系统**: [Fumadocs](https://fumadocs.vercel.app/)
* **UI**: fumadocs-ui, Tailwind CSS
* **语言**: TypeScript, Markdown (MDX)
* **包管理器**: npm

## 3. 目录结构

```
.
├── content/
│   └── docs/         # 文档内容 (.mdx 文件)
├── public/           # 静态资源 (如果需要)
├── src/
│   ├── app/          # Next.js App Router
│   │   ├── (home)/     # 首页特定布局和页面
│   │   ├── api/        # API 路由 (如果需要)
│   │   ├── docs/       # Fumadocs 文档页面布局
│   │   ├── global.css  # 全局样式
│   │   ├── layout.config.tsx # Fumadocs 导航等配置
│   │   └── layout.tsx    # 根布局
│   ├── lib/          # 库代码 (例如 source.ts)
│   └── mdx-components.tsx # 自定义 MDX 组件
├── next.config.mjs   # Next.js 配置文件
├── package.json      # 项目依赖和脚本
├── postcss.config.mjs # PostCSS 配置
├── source.config.ts  # Fumadocs 内容源配置
├── tsconfig.json     # TypeScript 配置
├── README.md         # 项目 Readme
├── TODO.md           # 项目任务清单
└── PROJECT_OVERVIEW.md # 本文档
```

*注：根据 `list_dir` 工具的输出生成，可能随项目进展而变化。*

## 4. 核心功能

项目基于 Fumadocs，天然具备以下核心功能：

* **Markdown/MDX 支持**: 方便编写文档内容。
* **基于文件的路由**: `content/docs` 目录下的文件自动生成路由。
* **代码高亮**: 使用 `rehype-pretty-code` 提供美观的代码块。
* **可定制 UI**: `fumadocs-ui` 提供基础 UI 组件和主题系统。
* **导航与侧边栏**: 自动生成或通过配置生成文档导航。

待增强功能见 <mcfile name="TODO.md" path="/Users/jac/fmnet/TODO.md"></mcfile>。

## 5. 当前状态

* **基础配置**: 已完成 Next.js 和 Fumadocs 的基本项目搭建。
* **内容**: 包含少量示例 `.mdx` 文件。
* **UI/UX**: 使用 Fumadocs 默认主题，导航等需优化。
* **功能**: 基本文档展示功能可用，搜索、高级代码块等功能待实现。

详细待办事项请参考 <mcfile name="TODO.md" path="/Users/jac/fmnet/TODO.md"></mcfile>。

## 6. 参考资料

* [Next.js 文档](https://nextjs.org/docs)
* [Fumadocs 文档](https://fumadocs.vercel.app/)
*