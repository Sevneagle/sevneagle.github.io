---
title: 二、Blog部署的一些详解
published: 2026-04-01
pinned: false
description: 这篇文章详解如何将Mizuki部署到Github Pages
tags: [Blog]
category: Blog
licenseName: "CC BY-NC-SA 4.0"
author: Sevneagle
draft: false
date: 2026-03-15
image: "./images/cover.jpg"
pubDate: 2026-04-01
permalink: "Blog部署"
---

# 前提提示
此文章重点讲解如何部署于Github Pages上,但是部署起来有些难度。  
实在难以攻克可以参考<a href="https://docs.mizuki.mysqil.com/guide/deploy/Vercel/" target="_blank" rel="noopener noreferrer">部署到Vercel</a>(点击可访问外部链接)这个相对来说比较简单。

## Github仓库创建与绑定
通过github主页左上角NEW或<a href="https://github.com/new" target="_blank" rel="noopener noreferrer">Github-New repository</a>(点击可访问外部链接)进入repository(仓库)创建界面。对于部署在github pages上的仓库,要求仓库名为:`用户名.github.io`*(例如maimaifinale.github.io)*  
Description中可以填写的对仓库项目的描述,剩下保持默认即可,仓库需要公开且不用添加README等。
![图片寄了,也可能是网络问题](./images/repository.png)
创建完仓库后,Github会显示一个教程界面,首先我们需要先调整传输协议为SSH。SSH拥有免去重复验证、更高的安全性、网络环境适应性等特点。我们先前已经对SSH配置完毕。
![图片寄了,也可能是网络问题](./images/repository2.png)
我们重点关注最下方的`...or push an existing...`。
先对Blogtest下的Muziki进行Git Bash,根据自身情况输入以下代码进行信息查询或更改:
```bash
git init #无法使用git指令时,说明未将文件夹初始化为Git仓库

```
