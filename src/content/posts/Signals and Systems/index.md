---
title: 四、信号与系统 Chap.1
published: 2026-10-17
pinned: false
description: 第一章：6 个知识点、6 道例题，覆盖能量/功率、奇偶分解、周期复指数与离散序列周期性
tags: [信号与系统]
category: 知识
licenseName: "CC BY-NC-SA 4.0"
author: Sevneagle
draft: false
date: 2026-10-17
image: "./images/cover.png"
pubDate: 2026-10-17
permalink: "04信号与系统"
---


<!--前提-->
## 前提:文末有可直接查看的[例题](#li-ti)
- 本章对应教材（奥本海姆《信号与系统》第二版）**§1.2**，共 **6 个知识点、6 道例题**。
- 图片是同一段内容的连续截图（部分被截断），因此按**组**插入：图 1-2 与图 1-3 一组、图 1-4 与图 1-5 一组，依此类推。
- **图即知识点，一组图配一道例题**。记号：连续信号 $x(t)$、离散信号 $x[n]$。

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--知识点1-->
## 一、能量与功率信号

### 图 1-1　能量与平均功率的定义

![能量与平均功率的定义（式 1.6–1.10）](./images/ch1-01-energy-power.png)

- 总能量 $E_\infty$、平均功率 $P_\infty$ 的定义，以及三类信号：能量信号、功率信号、都不是。

<span id="li-1"></span>

1. [返回](#li-ti)例题1（三类信号的判断）
<div style="overflow-x:auto; padding:4px 0;">

判断下列信号的类型，并求出对应的 $E_\infty$、$P_\infty$：  
(1) $x_1(t)$ 在 $0\le t\le 1$ 内为 $1$，其余为 $0$　
(2) $x_2[n]=4$　
(3) $x_3(t)=t$

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1)** 按式 (1.6)：
$$

E_\infty=\int_{0}^{1}1^2dt=1<\infty
\qquad
P_\infty=\lim_{T\to\infty}\dfrac{E_\infty}{2T}=0
$$

→ **能量信号**（能量有限、平均功率为零，见式 1.10）。

**(2)** 按式 (1.7)、(1.9)：
$$

E_\infty=\sum_{n=-\infty}^{+\infty}4^2\to\infty
\qquad
P_\infty=\lim_{N\to\infty}\dfrac{1}{2N+1}\sum_{n=-N}^{N}16=16
$$

→ **功率信号**（$E_\infty$ 无限、$P_\infty$ 有限非零）。

**(3)** 按式 (1.6)、(1.8)：
$$

E_\infty=\int_{0}^{+\infty}t^2dt\to\infty
\qquad
P_\infty=\lim_{T\to\infty}\dfrac{1}{2T}\int_{0}^{T}t^2dt
=\lim_{T\to\infty}\dfrac{T^2}{6}\to\infty
$$

→ $E_\infty$、$P_\infty$ **都不是有限值**，既非能量信号也非功率信号。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--知识点2-->
## 二、偶信号与奇信号

### 图 1-2 + 图 1-3　偶/奇信号的定义与奇偶分解

![偶信号与奇信号的定义（式 1.14–1.18）](./images/ch1-02-even-odd-def.png)

![奇部定义（式 1.19）与图 1.17、图 1.18](./images/ch1-03-even-odd-part.png)

- 两张图是**同一段落**的上下两段：图 1-2 到式 (1.18) 为止，图 1-3 从式 (1.19) 接着往下，合起来才完整。
- 偶：$x(-t)=x(t)$、$x[-n]=x[n]$；奇：$x(-t)=-x(t)$、$x[-n]=-x[n]$，奇信号在 $t=0$（$n=0$）处必为 $0$。
- 任何信号 $=$ 偶部 $+$ 奇部：
$$

Ev\left\{x(t)\right\}=\dfrac{1}{2}\left[x(t)+x(-t)\right]
\qquad
Od\left\{x(t)\right\}=\dfrac{1}{2}\left[x(t)-x(-t)\right]
$$

<span id="li-2"></span>

2. [返回](#li-ti)例题2（判断奇偶 + 求奇偶分解）
<div style="overflow-x:auto; padding:4px 0;">

(1) 判断 $x_1(t)=\cos(3t)$、$x_2(t)=\sin(3t)$ 是偶信号还是奇信号；  
(2) 求 $x_3[n]=u[n]$ 的偶部与奇部（对照图 1.18）。

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1)** 由式 (1.14)、(1.16)：
$$

x_1(-t)=\cos(-3t)=\cos(3t)=x_1(t)\ \Rightarrow\ x_1(t)\ \text{是偶信号}
$$

$$

x_2(-t)=\sin(-3t)=-\sin(3t)=-x_2(t)\ \Rightarrow\ x_2(t)\ \text{是奇信号}
$$

校验：$x_2(0)=\sin0=0$，符合奇信号在原点必为 $0$ 的要求。

**(2)** $u[-n]$ 与 $u[n]$ 代入式 (1.18)、(1.19)：
$$

Ev\left\{x_3[n]\right\}=
\begin{cases}
\dfrac{1}{2}, & n<0\\[6pt]
1, & n=0\\[6pt]
\dfrac{1}{2}, & n>0
\end{cases}
\qquad
Od\left\{x_3[n]\right\}=
\begin{cases}
-\dfrac{1}{2}, & n<0\\[6pt]
0, & n=0\\[6pt]
\dfrac{1}{2}, & n>0
\end{cases}
$$

与图 1.18 完全一致：偶部在 $n=0$ 处为 $1$、其余为 $\dfrac{1}{2}$；奇部在 $n=0$ 处为 $0$。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--知识点3-->
## 三、连续时间周期复指数信号

### 图 1-4 + 图 1-5　周期性与基波频率

![周期复指数信号的周期性（式 1.21–1.24）](./images/ch1-04-periodic-exponential.png)

![基波频率与周期信号的能量、功率（式 1.30–1.32）](./images/ch1-05-fundamental-freq.png)

- 由 $e^{j\omega_0 T}=1$ 得**基波周期** $T_0=\dfrac{2\pi}{|\omega_0|}$（图 1-4）；图 1-5 接着说明 $\omega_0$ 为**基波频率**。
- $T_0$ 与 $|\omega_0|$ 成**反比**：$\omega_0$ 越大 → 振荡越快 → 周期越短。
- 周期复指数：一个周期内能量 $E_{\text{period}}=T_0$，平均功率恒为 $P_\infty=1$。

<span id="li-3"></span>

3. [返回](#li-ti)例题3（基波周期、基波频率与功率）
<div style="overflow-x:auto; padding:4px 0;">

设 $x(t)=e^{j5\pi t}$。  
(1) 求基波周期 $T_0$ 与基波频率 $f_0$；  
(2) 求一个周期内的能量 $E_{\text{period}}$ 与平均功率 $P_\infty$；  
(3) 若把 $\omega_0$ 增大为原来的 $2$ 倍，$T_0$ 与 $f_0$ 各如何变化？

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1)** $\omega_0=5\pi$，由式 (1.24)：
$$

T_0=\dfrac{2\pi}{5\pi}=\dfrac{2}{5}\ \text{s}
\qquad
f_0=\dfrac{1}{T_0}=2.5\ \text{Hz}
$$

**(2)** 由式 (1.30)、(1.31)：
$$

E_{\text{period}}=\int_{0}^{T_0}\left|e^{j5\pi t}\right|^2dt
=\int_{0}^{T_0}1\,dt=T_0=\dfrac{2}{5}
\qquad
P_\infty=\dfrac{E_{\text{period}}}{T_0}=1
$$

**(3)** $\omega_0$ 加倍后 $\omega_0'=10\pi$：
$$

T_0'=\dfrac{2\pi}{10\pi}=\dfrac{1}{5}\ \text{s}=\dfrac{T_0}{2},
\qquad
f_0'=5\ \text{Hz}=2f_0
$$

即**周期减半、频率加倍**，正是 $T_0$ 与 $|\omega_0|$ 成反比。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--知识点4-->
## 四、成谐波关系的复指数信号

### 图 1-6 + 图 1-7　谐波关系与第 $k$ 次谐波

![成谐波关系的复指数信号](./images/ch1-06-harmonic-related.png)

![谐波条件与第 k 次谐波（式 1.33–1.37）](./images/ch1-07-harmonic-condition.png)

- 图 1-6 提出**成谐波关系**与公共周期 $T_0$，图 1-7 紧跟给出判据与结论。
- 判据：$e^{j\omega T_0}=1$，即 $\omega T_0=2\pi k$，$\omega$ 必须是 $\omega_0=\dfrac{2\pi}{T_0}$ 的**整数倍**。
- 第 $k$ 次谐波 $\phi_k(t)=e^{jk\omega_0 t}$：基波频率 $|k|\omega_0$，基波周期 $\dfrac{T_0}{|k|}$。

<span id="li-4"></span>

4. [返回](#li-ti)例题4（判断谐波关系 + 求第 $k$ 次谐波）
<div style="overflow-x:auto; padding:4px 0;">

已知公共周期 $T_0=0.5\ \text{s}$（对应 $\omega_0=4\pi$）。  
(1) 判断 $e^{j4\pi t}$ 与 $e^{j6\pi t}$ 是否与它成谐波关系；  
(2) 求第 $3$ 次谐波 $\phi_3(t)$ 的基波频率与基波周期。

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1)** 用必要条件 $e^{j\omega T_0}=1$，即 $\omega T_0=2\pi k$：

对 $e^{j4\pi t}$：$\omega T_0=4\pi\times0.5=2\pi=2\pi\cdot1$ → $k=1$ ✔ **成**谐波关系（第 1 次谐波）。

对 $e^{j6\pi t}$：$\omega T_0=6\pi\times0.5=3\pi$，不是 $2\pi$ 的整数倍 → ✘ **不成**谐波关系。
（$e^{j6\pi t}$ 自身周期为 $\dfrac{1}{3}\ \text{s}$，是周期信号，但频率不是 $\omega_0=4\pi$ 的整数倍。）

**(2)** 由式 (1.36)、(1.37)，取 $k=3$：
$$

\phi_3(t)=e^{j3\omega_0 t}=e^{j12\pi t}
$$

$$

\text{基波频率}=\left|3\right|\omega_0=12\pi\ \text{rad/s}\ (6\ \text{Hz}),
\qquad
\text{基波周期}=\dfrac{T_0}{\left|3\right|}=\dfrac{0.5}{3}=\dfrac{1}{6}\ \text{s}
$$

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--知识点5-->
## 五、离散复指数的频率模糊性

### 图 1-8 + 图 1-9　$2\pi$ 模糊性与高频位置

![离散复指数的 2π 模糊性（式 1.51）](./images/ch1-08-discrete-periodicity.png)

![离散复指数的高频位置（式 1.52）](./images/ch1-09-discrete-highfreq.png)

- 图 1-8 给出 $e^{j(\omega_0+2\pi)n}=e^{j\omega_0 n}$，图 1-9 是它的直接后果（振荡速率规律）。
- 离散复指数：$\omega_0+2\pi$ 与 $\omega_0$ 是**同一个序列**，只需在 $2\pi$ 区间内取 $\omega_0$。
- 振荡速率从 $\omega_0=0$ 增大到 $\omega_0=\pi$ 最快，之后反而下降；在 $\omega_0=\pm\pi$ 处 $e^{j\pi n}=(-1)^n$。

<span id="li-5"></span>

5. [返回](#li-ti)例题5（$2\pi$ 模糊性与最高频）
<div style="overflow-x:auto; padding:4px 0;">

(1) 判断 $e^{j0.2\pi n}$ 与 $e^{j2.2\pi n}$ 是否为同一个序列；  
(2) 验证 $e^{j\pi n}=(-1)^n$ 并求其周期 $N$；  
(3) $e^{j0.1\pi n}$ 与 $e^{j0.9\pi n}$ 哪一个振荡更快？

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1)** 由式 (1.51)，因为 $2.2\pi=0.2\pi+2\pi$：
$$

e^{j2.2\pi n}=e^{j2\pi n}e^{j0.2\pi n}=e^{j0.2\pi n}
$$

→ **是**同一个序列。

**(2)** 由式 (1.52)：
$$

e^{j\pi n}=\left(e^{j\pi}\right)^n=(-1)^n=1,-1,1,-1,\cdots
$$

故周期 $N=2$，这是离散复指数的**最高频**。

**(3)** 由本节结论，在 $0\le\omega_0\le\pi$ 内振荡速率随 $\omega_0$ 增大而增大：
$$

0.9\pi>0.1\pi\ \Rightarrow\ e^{j0.9\pi n}\ \text{振荡更快}
$$

（若 $\omega_0$ 从 $\pi$ 继续增大到 $2\pi$，振荡速率反而下降。）

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--知识点6-->
## 六、离散复指数序列的周期性

### 图 1-10 + 图 1-11　周期性条件与有理数判据

![离散复指数的周期性条件（式 1.53–1.55）](./images/ch1-10-discrete-period-cond.png)

![有理数判据、基波周期与表 1.1（式 1.56–1.58）](./images/ch1-11-periodic-summary.png)

- 图 1-10 推出 $e^{j\omega_0 N}=1$、$\omega_0 N=2\pi m$；图 1-11 把它整理成**有理数判据**并给出表 1.1。
- 判据：$\dfrac{\omega_0}{2\pi}$ 为**有理数**才周期；写成 $\dfrac{m}{N}$ 且 $m$、$N$ 互素时，$N$ 就是基波周期。
- 与连续的最大差别：$e^{j\omega_0 t}$ 对任何 $\omega_0$ 都周期，而 $e^{j\omega_0 n}$ 不一定。

<span id="li-6"></span>

6. [返回](#li-ti)例题6（离散周期性判定）
<div style="overflow-x:auto; padding:4px 0;">

(1) 求 $x_1[n]=e^{j\frac{2\pi}{5}n}$ 的周期 $N$；  
(2) 判断 $x_2[n]=e^{j0.6n}$ 是否为周期序列；  
(3) 求 $x_3[n]=e^{j\frac{12\pi}{5}n}$ 的基波周期 $N$；  
(4) 取相同的 $\omega_0=2$，比较 $e^{j2t}$ 与 $e^{j2n}$ 的周期性。

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1)** 用式 (1.55)：$\omega_0 N=2\pi m$，其中 $\omega_0=\dfrac{2\pi}{5}$：
$$

\dfrac{2\pi}{5}N=2\pi m\ \Rightarrow\ N=5m
$$

取 $m=1$ 得 $N=5$。

**(2)** 由式 (1.56)：
$$

\dfrac{\omega_0}{2\pi}=\dfrac{0.6}{2\pi}=\dfrac{0.3}{\pi}\ \text{为无理数}
$$

→ **不是**周期序列。

**(3)** $\dfrac{\omega_0}{2\pi}=\dfrac{12\pi/5}{2\pi}=\dfrac{6}{5}$，有理数，$m=6$ 与 $N=5$ 互素：
$$

N=5
$$

（校验：$\omega_0 N=\dfrac{12\pi}{5}\times5=12\pi=2\pi\cdot6$。）

**(4)** 同为 $\omega_0=2$：
$$

e^{j2t}:\quad T_0=\dfrac{2\pi}{2}=\pi\ \text{（连续，任何 }\omega_0\text{ 都周期）}
$$

$$

e^{j2n}:\quad \dfrac{\omega_0}{2\pi}=\dfrac{2}{2\pi}=\dfrac{1}{\pi}\ \text{为无理数，故非周期}
$$

这正是表 1.1 中连续与离散最关键的不同点。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<span id="li-ti">例题(点击下面跳转)</span>  

[例1](#li-1)　[例2](#li-2)　[例3](#li-3)　[例4](#li-4)　[例5](#li-5)　[例6](#li-6)
