---
title: 一、介绍
published: 2026-03-24
pinned: false
description: 这篇文章中将了解的博客网站的由来以及一些简单的教程
tags: [Introduction]
category: Introduction
licenseName: "CC BY-NC-SA 4.0"
author: Sevneagle
//sourceLink: "https://github.com/emn178/markdown"
draft: false
date: 2026-03-15
image: "./images/cover.gif"
pubDate: 2026-03-24
permalink: "一些介绍"
---

# 🦅无题  
## 🐏介绍
第一篇文章并没有特别明确的内容，将以博客的由来、发展为主。附带一些搭建我这样的网站的简易教程等 *(后续会出另一篇文章详细讲解，如果迟迟未等来，可先在本地先部署调试并尝试催更)*。
### 💩由来与发展  
- **由来**:搭建一个博客网站是我一直以来想做的事情，*只.因.* 各种理由搁置了。这个网站我将用来分享自己学习的知识，完成的项目，以及作为个人项目为日后求职就业做些准备。同时，这也是我用来记念某些事物的……  
- **发展**:待补充。更新随机，内容随机，文章随机，挖坑更是随机。  
## 🐟简易教程  
简易教程(推荐年龄14+)
具备独立思考能力,有解决问题能力,会正常提问。
### 🍡注册github
使用浏览器如edge、chrome打开<a href="https://github.com" target="_blank" rel="noopener noreferrer">Github官网</a>(点击可打开外部链接,后面这个样式的都是`链接`)
![图片寄了,也可能是网络问题|200](./images/github.png)
点击<a href="https://github.com/signup?source=form-home-signup&user_email=" target="_blank" rel="noopener noreferrer">sign up</a>注册 ，推荐使用google账号。以QQ邮箱为例 *(你的QQ号@qq.com,如 `114514@qq.com`)*，输入密码与用户名后需验证QQ邮箱，完成注册。
![图片寄了,也可能是网络问题](./images/githubsignup.png)
### 🌊安装git并绑定github
使用浏览器如edge、chrome打开<a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">Git官网</a>
&emsp;<!--这个是空格代码-->
后边是可供下载的<a href="https://release-assets.githubusercontent.com/github-production-release-asset/23216272/198a1615-fcfc-4230-ac15-7128ab67e3f6?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-03-19T02%3A19%3A50Z&rscd=attachment%3B+filename%3DGit-2.53.0.2-64-bit.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-03-19T01%3A18%3A59Z&ske=2026-03-19T02%3A19%3A50Z&sks=b&skv=2018-11-09&sig=ixpqyvpjVoxCnNNu14IHqR2patly7Aw3efnED%2F8Vg3w%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3Mzg4NDkzOSwibmJmIjoxNzczODgzMTM5LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.vqBzkV9KDhOumOKS-0iSntXTohGgHSGcyQwZoks-YTw&response-content-disposition=attachment%3B%20filename%3DGit-2.53.0.2-64-bit.exe&response-content-type=application%2Foctet-stream" target="_blank" rel="noopener noreferrer">git安装包</a>(可能过时)<!--外部超链接格式:<a href="链接" target="_blank" rel="noopener noreferrer">标题</a> -->  
我的电脑系统类型是64位Windows。双击Git-2.53.0-64-bit.exe(可能与我版本不同)文件运行，依据自己的需求完成安装。Git Bash与命令提示符使用类似，可在桌面或文件夹处右键后选择Open Git Bash here打开。  
<video controls width="100%" style="max-width:100%;">
  <source src="/videos/contents1/git.mp4" type="video/mp4">
  视频寄了,也可能是网络或浏览器问题
</video>  
推荐找到安装目录设置以管理员身份运行。
推荐利用SSH登录远程主机实现绑定github:在D盘新建文件夹Blogtest，在Blogtest中右键打开Git Bash输入

```bash
ssh
```
可以检查是否安装SSH。  
一般都需安装SSH:输入
```bash
ssh-keygen -t rsa
```
*(注意空格,可以直接复制粘贴。git中的复制粘贴不是  `Ctrl+C和Ctrl+V,而是 Ctrl+insert和Shift+insert`)*，然后敲击四次回车键，将生成两个文件，分别为秘钥 id_rsa 和公钥 id_rsa.pub.文件位置在Git Bash上有显示，默认生成在C:/Users/你的用户名/.ssh用记事本打开id_rsa.pub文件复制(一般很长且勿外泄)通过以下指令也可以找到
```bash
cd ~/.ssh
ls
cat id_rsa.pub
```  
<video controls width="100%" style="max-width:100%;">
  <source src="/videos/contents1/ssh.mp4" type="video/mp4">
  视频寄了,也可能是网络或浏览器问题
</video>  
进入Github主页，点击头像--→Settings--→<a href="https://github.com/settings/keys" target="_blank" rel="noopener noreferrer">SSH and GPG keys</a>(外部链接)--→右上New SSH key，将复制的公钥id_rsa.pub内容粘贴到key内，点击Add SSH key。回到Git Bash输入

```bash
ssh -T git@github.com
```
进行验证，一般会提示是否确认，这里输入yes后会返回”Hi 你的github名字!......”  

### 🐉Mizuki本地部署
我用的主题是<a href="https://docs.mizuki.mysqil.com/guide/get-started/" target="_blank" rel="noopener noreferrer">Mizuki</a>(点击可访问外部链接)  
#### ⚪环境依赖  
在开始使用 Mizuki 之前，您需要确保系统满足以下要求：
- [ ] Node.js >= 20
- [ ] pnpm >= 9
- [x] Git✅  
使用浏览器如edge、chrome打开<a href="https://nodejs.org/zh-cn/download" target="_blank" rel="noopener noreferrer">Node.js官网</a>&emsp;<!--这个是空格代码-->
后边是可供下载的<a href="https://nodejs.org/dist/v24.14.0/node-v24.14.0-x64.msi" target="_blank" rel="noopener noreferrer">Node.js安装包</a>(可能过时)  
选择合适的系统与版本。我选择的是Windows x64,且使用Docker和npm的Node.js(v24.14.0LTS)  
双击node-v24.14.0-x64.msi(可能与我版本不同)文件运行安装，默认安装即可,也可以选择修改安装位置。![图片寄了,也可能是网络问题](./images/nodejs.png)  

<a href="https://blog.csdn.net/antma/article/details/86104068" target="_blank" rel="noopener noreferrer">CSDN-Node.js详细安装教程</a>(点击可访问外部链接)该链接中有详细的安装教程可供参考  
推荐参考csdn链接配置好npm在安装全局模块时路径和缓存cache的路径(需配置系统环境)，部分模块默认会装在C盘某路径中，容易占用C盘空间,以下是一些说明:  
先在nodejs文件夹中新建两个空文件夹node_cache、node_global,如下图:  

![图片寄了,也可能是网络问题](./images/nodejs2.png)

```bash
#同时按Win+R
cmd    #打开命令提示符终端
# 以你自己的路径为准（示例为 C 盘 为什么不试试D盘喵）
npm config set prefix "C:\Program Files\nodejs\node_global"
npm config set cache "C:\Program Files\nodejs\node_cache"
```

设置环境变量:系统-->打开控制面板-->系统-->高级系统设置-->环境变量或直接在cmd输入:
```bash
#在cmd中输入
sysdm.cpl #进入系统属性,然后点击第三个高级,然后点击最下方的环境变量
```
进入系统属性,然后点击第三个高级,然后点击最下方的环境变量  
![图片寄了,也可能是网络问题](./images/path0.png)
在系统变量(S)处点击新建,变量名为NODE_PATH,变量值可通过浏览目录来设置,选中nodejs中的node_modules**文件夹**即可
![图片寄了,也可能是网络问题](./images/path1.png)
选中用户变量Path后进行编辑,在其中新建后浏览设置,选择nodejs中的node_global,选中node_global**文件夹**即可
![图片寄了,也可能是网络问题](./images/path2.png)
![图片寄了,也可能是网络问题](./images/path3.png)

此时已完成系统环境配置,可以在Git bash中使用更多代码了
```bash
node -v
npm -v
```
可用cmd或Git Bash(使用git前需要配置好系统环境)检验是否成功:输入node –v 和npm -v返回版本号。 *(git中的复制粘贴不是 `Ctrl+C 和 Ctrl+V，而是 Ctrl+insert 和 Shift+insert`)*
具体问题可参考csdn链接来解决,只需要保证在Git bash中能查到node和npm版本号即为成功。  

安装完成后,在cmd或Git Bash中输入
```bash
npm install -g pnpm #安装pnpm
pnpm -v             #验证是否安装成功，显示版本号
```
- [x] Node.js >= 20✅
- [x] pnpm >= 9✅
- [x] Git✅  

<details>
  <summary style="
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  color: #b91c1c;
  background: #fef2f2;
  padding: 8px 12px;
  border-left: 6px solid #ef4444;
  border-radius: 8px;
  margin-bottom: 4px;
">
  ⚠️ pnpm指令会在你使用的盘符根目录下生成 .pnpm-store 文件，如不介意可不用展开
</summary>
  <div style="margin-top: 12px; padding: 8px; border-left: 3px solid #3b82f6; background: rgba(59,130,246,0.05);">
  感谢展开!这说明你对文件管理已有更高要求:为避免在根目录自动生成.pnpm-store(可能隐藏)我们需要修改store默认位置

  ![图片寄了,也可能是网络问题](./images/pnpm0.png)
  
  先在D盘Blogtest下新建名为pnpm-store的空文件夹(以你想放的位置为主)
  ![图片寄了,也可能是网络问题](./images/pnpm1.png)

  接着在Blogtest处git bash运行代码:
  ```bash
  # 把路径换成你自己的,比如D:\Blogtest\pnpm-store
  pnpm config set store-dir "D:\Blogtest\pnpm-store"
  ```
  ***此时盘符根目录下可能生成.pnpm-store,但是这不影响,因为只要运行pnpm相关指令就会生成***
  接着运行代码:
  ```bash
  pnpm config list  #查看 pnpm 的所有配置项
  pnpm store path   #查看 pnpm 依赖缓存文件夹的真实路径
  ```

  ![图片寄了,也可能是网络问题](./images/pnpm2.png)
  确保你的路径已经配置正确后,可以删除根目录下的.pnpm-store文件夹,然后运行`pnpm -v`来查看是否还会生成。

  </div>
</details>  


#### 🍚本地部署(时效性:版本问题可能与自身教程不符,如缺少config.ts等,此时应访问<a href="https://github.com/LyraVoid/Mizuki/releases" target="_blank" rel="noopener noreferrer">Mizuki/releases</a>,只下载Mizuki.zip文件)

- 克隆项目(两种方法,注意复制粘贴快捷键)  
    - 法一:简单!只需网络配置正确以在D盘新建文件夹Blogtest为例D:\Blogtest处右键打开Git Bash,输入

    ```bash
    Git clone https://github.com/matsuzaka-yuki/mizuki.git  #采用https协议克隆mizuki项目
    cd Mizuki   #移至Mizuki文件夹,Git Bash左上角地址变动。
    ```

    来克隆到本地，可能会报fatal，大概率为网络问题或代理配置错误(请严肃学习科学上网)      
    可参考链接<a href="https://blog.csdn.net/qq_43546721/article/details/139506583" target="_blank" rel="noopener noreferrer">CSDN-fatal解决</a>(点击可访问外部链接)  
    随后在D:\Blogtest\Mizuki处右键打开Git Bash或参考上面的代码直接移至Mizuki文件夹  
    - 法二:较复杂!但与先前ssh配置相关联,还可以了解main与master的'爱恨情仇',输入  
    ```bash 
    git init    #初始化新的Git仓库,具体表项为生成隐藏.git文件夹
    git branch -m main  #修改当前分支为main分支
    git remote add origin git@github.com:matsuzaka-yuki/mizuki.git   #添加远程仓库
    git clone git@github.com:matsuzaka-yuki/mizuki.git  #采用ssh协议克隆mizuki项目
    cd Mizuki   #移至Mizuki文件夹,Git Bash左上角地址变动。
    ```  
    其中Git历史上默认使用 master 作为主分支名称,2020年后GitHub,GitLab等平台改为默认使用main,但Git本身配置是可定制的;其中origin是对于远程仓库的一个命名,也可以为origin2,origintest等。可输入`git remote -v`查看你的配置  
    随后在D:\Blogtest\Mizuki处右键打开Git Bash或参考上面的代码直接移至Mizuki文件夹
- 本地部署(初始启动较慢且可能会有警告)  
确保是对Mizuki文件夹进行git,输入
```bash
cd Mizuki   #确保处于mizuki文件夹
pnpm install    #安装项目依赖
pnpm dev    #启动开发服务器
```
启动完成后,可以在浏览器中访问http://localhost:4321 查看自己的博客。(运行界面会有提示)  
如需关闭,可按`Ctr+c`来停止,如有提示则输入`y`确认退出  

### 🦐重要提示
如遇文件缺少config.ts等文件无法启动且无法从<a href="https://github.com/LyraVoid/Mizuki/releases" target="_blank" rel="noopener noreferrer">Mizuki/releases</a>处下载Mizuki.zip文件的情况,可直接点击<a href="https://release-assets.githubusercontent.com/github-production-release-asset/1036553277/91c1f3ff-2f27-47e3-8cee-deda5f382d8e?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-05-27T15%3A50%3A41Z&rscd=attachment%3B+filename%3DMizuki.zip&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-05-27T14%3A49%3A53Z&ske=2026-05-27T15%3A50%3A41Z&sks=b&skv=2018-11-09&sig=SFR%2Bu6UuzfbtrPdekZPqhtcnAoy9pdUPUD%2FwsQEsSLM%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3OTg5NjQzMCwibmJmIjoxNzc5ODk0NjMwLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.myy-RYqgCA-1mVoihbftHkgsIlwWiZYgZJJbqam_vW4&response-content-disposition=attachment%3B%20filename%3DMizuki.zip&response-content-type=application%2Foctet-stream">mizuki9.0包</a>来下载,之后请解压后使用,并且需要对Mizuki进行git bash(确保你的当前muziki目录下包含许多文件,**而不是嵌套mizuki文件夹**)  

此时网站为本地静态部署，可以在D:\Blogtest\mizuki\src中的config.ts等文件修改布局。可以用记事本等文件打开进行修改，尤其推荐使用Vscode(修改请具体参考<a href="https://docs.mizuki.mysqil.com/Basic-Layout/site-config/" target="_blank" rel="noopener noreferrer">Mizuki配置</a>)  

## 🌽结语
感谢阅读!至此已完成网站的本地部署与修改，部署到Github Pages与域名相关等步骤将在详细教程中涉及。  

<!--
git branch -m main  #修改当前分支为main分支
-->
