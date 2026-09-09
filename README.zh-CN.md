# DaisyUI Starter

[English](README.md) | 简体中文

一个基于 **React、Webpack、Tailwind CSS 和 DaisyUI** 的前端入门项目，适用于 [**Code App**](https://thebaselab.com/code)。

## 快速开始

在项目目录中打开终端，安装依赖：

```bash
npm i
```

启动开发服务器：

```bash
npm run dev
```

然后在 **Safari** 中打开：

```text
http://localhost
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| npm run dev | 启动开发服务器 |
| npm run build | 构建生产版本 |
| npm run format | 使用 Prettier 格式化项目 |

## 项目结构

```text
.
├── src/                 # 源代码
├── public/              # 静态资源
├── scripts/
│   ├── dev.js           # 开发服务器
│   └── build.js         # 生产构建
├── .babelrc             # Babel 配置
├── .prettierrc          # Prettier 配置
├── webpack.config.js    # Webpack 配置
├── postcss.config.js    # PostCSS 配置
└── tailwind.config.js   # Tailwind CSS 配置
```

## 技术栈

- React 19
- React Router
- Webpack 5
- Tailwind CSS 3
- DaisyUI 4
- Babel
- PostCSS
