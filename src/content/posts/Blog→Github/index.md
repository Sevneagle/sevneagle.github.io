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

## Github仓库创建、绑定和初提交
通过github主页左上角NEW或<a href="https://github.com/new" target="_blank" rel="noopener noreferrer">Github-New repository</a>(点击可访问外部链接)进入repository(仓库)创建界面。对于部署在github pages上的仓库,要求仓库名为:`用户名.github.io`*(例如maimaifinale.github.io)*  
Description中可以填写的对仓库项目的描述,剩下保持默认即可,仓库需要公开且不用添加README等。
![图片寄了,也可能是网络问题](./images/repository.png)
创建完仓库后,Github会显示一个教程界面,首先我们需要先调整传输协议为SSH。SSH拥有免去重复验证、更高的安全性、网络环境适应性等特点。我们先前已经对SSH配置完毕。
![图片寄了,也可能是网络问题](./images/repository2.png)
github网页上的内容先放一边,但还是需要重点关注最下方的`...or push an existing...`中的  
`git@github.com:你的用户名/你的用户名/github.io.git`  
我们可以大致先了解下接下来的流程:
1. 本地仓库(自己电脑上的文件夹)初始化与分支命名
2. 配置好remote远程仓库(可以认为是github仓库)
3. 正式修改本地仓库
4. 提交本地修改至远程

先对Blogtest下的Muziki进行Git Bash,根据自身情况输入以下代码进行信息查询或更改:
![图片寄了,也可能是网络问题](./images/repository3.png)
```bash
git init    #无法使用其他git指令时,说明未将文件夹初始化为Git仓库,需要先初始化
git branch -m main  #必须为main,现在github默认仓库分支为main,便于提交管理
```

```bash
git remote -v   #查看先前是否绑定过远程仓库
git remote set-url origin git@github.com:...    #若已绑定其他origin(通过指令下载的mizuki)
git remote add origin git@github.com:...    #若未绑定其他origin(直接下载的mizuki.zip)
```
>其中git@github.com:...直接复制github仓库网页上的内容。  
其中origin只是个名字,你可以随意更改,但一般都是以origin命名。  
(当然你也可以选择origin绑mizuki的git,origin1绑定自己的git,但是后续提交时比较麻烦)

```bash
git status  #检查本地状态,例如修改增减了哪些文件
git add .   # add .(英文句号)将工作区修改添加到暂存区,点代表当前目录所有修改
git commit -m "随意描述信息"    #将暂存区内容正式提交到本地仓库
```
其中`git add .`可以选择`git status`查到的单个文件,如`git add patchouli.txt`  
其中`git commit ...`中-m是message的缩写,用于说明这次提交改动了什么,""中填写你的说明

```bash
git push -u origin main #推送本地仓库到github
```
***后续提交指令只需`git push origin main`即可***
根据github仓库网页说明,此步为最后一步,刷新网页后界面会更改(此时action会进行部署deploy报错,可以选择无视)  

## Github pages部署
- 修改astro.config.mjs中的配置文件设置base
````javascript
export default defineConfig({
  site: 'https://你的名字.github.io',   //设置site为你的专属地址,即https://yourname.github.io
  base: "/",    //设置base为/
  trailingSlash: "always",
});