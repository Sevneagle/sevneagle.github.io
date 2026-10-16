---
title: 四、信号与系统
published: 2026-10-16
pinned: false
description: 这篇文章开始记录我的信号与系统学习笔记
tags: [信号与系统]
category: 知识
licenseName: "CC BY-NC-SA 4.0"
author: Sevneagle
draft: true
date: 2026-10-16
image: "./images/cover.png"
pubDate: 2026-10-16
permalink: "04信号与系统"
---



<!--前提-->
## 前提:文末有可直接查看的[例题](#li-ti)
- 首先约定几个记号：连续时间信号记作 $f(t)$，离散时间信号记作 $f[n]$；单位阶跃记作 $u(\cdot)$，单位冲激记作 $\delta(\cdot)$。
- 偶信号与奇信号的分解是后面判断系统性质、化简积分的基础：
<div style="overflow-x:auto; padding:4px 0;">

$$
f_e(t)=\dfrac{f(t)+f(-t)}{2}
\qquad
f_o(t)=\dfrac{f(t)-f(-t)}{2}
\qquad
f(t)=f_e(t)+f_o(t)
$$

</div>

<!--信号分类-->
## 信号的分类
### 连续时间与离散时间
- 连续时间信号：在连续时间范围内除有限个间断点外都有定义，记作 $f(t)$。
- 离散时间信号：只在离散时刻 $n=0,\pm1,\pm2,\dots$ 上有定义，记作 $f[n]$，也称序列。
- 两类信号的运算法则、变换工具（拉普拉斯变换 / $z$ 变换）一一对应，学习时建议对照记忆。

### 周期与非周期
- 若存在最小正数 $T$，使 $f(t)=f(t+T)$ 对任意 $t$ 成立，则 $f(t)$ 是周期信号，$T$ 为周期。
$$

f(t)=A\cos(\omega_0 t+\varphi),\qquad T=\dfrac{2\pi}{\omega_0},\qquad f_0=\dfrac{1}{T}

$$
- 离散序列周期的判定要特别小心：需要存在正整数 $N$ 使 $f[n]=f[n+N]$。

<!--性质1-->
<details>
  <summary>
    性质1：两个周期信号之和不一定是周期信号（周期比必须为有理数）
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
f(t)=\cos(2t)+\cos(\pi t)
$$

  $\cos(2t)$ 的周期 $T_1=\pi$，$\cos(\pi t)$ 的周期 $T_2=2$，两者之比 $T_1/T_2=\dfrac{\pi}{2}$ 为无理数，
  找不到公共周期，因此 $f(t)$ 是非周期信号。

  </div>
</details>

<!--性质2-->
<details>
  <summary>
    性质2：离散序列的周期（离散频率以 $2\pi$ 为周期）
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
f[n]=\cos(\Omega_0 n),\qquad N=\dfrac{2\pi}{\Omega_0}\cdot k
$$

  当且仅当 $\dfrac{\Omega_0}{2\pi}$ 为有理数时序列才是周期的。例如 $f[n]=\cos\left(\dfrac{3\pi}{4}n\right)$：
  $\dfrac{\Omega_0}{2\pi}=\dfrac{3}{8}$ 为有理数，取 $k=3$ 得 $N=8$，即该序列以 $8$ 为周期。

  </div>
</details>

### 能量信号与功率信号
- 归一化能量与平均功率（连续、离散两种形式）：
$$

E=\int_{-\infty}^{+\infty}|f(t)|^2\,dt
\qquad
P=\lim_{T\to\infty}\dfrac{1}{2T}\int_{-T}^{T}|f(t)|^2\,dt
$$
$$

E=\sum_{n=-\infty}^{+\infty}|f[n]|^2
\qquad
P=\lim_{N\to\infty}\dfrac{1}{2N+1}\sum_{n=-N}^{N}|f[n]|^2
$$
- 判定口诀：能量有限 $\Rightarrow$ 能量信号（$P=0$）；功率有限且非零 $\Rightarrow$ 功率信号（$E=\infty$）。
- 周期信号、阶跃信号、复指数信号一般为功率信号；单个脉冲、衰减指数一般为能量信号。

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

### 基本运算
- 移位：$f(t\pm t_0)$，左加右减。
- 反褶：$f(-t)$，波形关于纵轴翻转。
- 尺度变换：$f(at)$，$a>1$ 压缩，$0<a<1$ 展宽，并且横向坐标整体除以 $a$。
- 三者常组合出现，推荐顺序：**先移位 $\to$ 再反褶 $\to$ 最后尺度变换**。
- 离散序列还有抽取与内插：$f[2n]$ 为抽取（可能丢失信息），内插则补零或插值。

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--典型信号-->
## 典型信号
### 单位阶跃与单位冲激
$$

u(t)=
\begin{cases}
1, & t>0\\
0, & t<0
\end{cases}
\qquad
\delta(t)=
\begin{cases}
\infty, & t=0\\
0, & t\ne 0
\end{cases}
\quad
\int_{-\infty}^{+\infty}\delta(t)\,dt=1
$$

<!--性质3-->
<details>
  <summary>
    性质3：冲激函数的四条常用性质
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

  1. 取样性质：
$$

f(t)\delta(t-t_0)=f(t_0)\delta(t-t_0)
$$
$$

\int_{-\infty}^{+\infty}f(t)\delta(t-t_0)\,dt=f(t_0)
$$

  2. 与阶跃的关系（互为微积分）：
$$

\delta(t)=\dfrac{du(t)}{dt}
\qquad
u(t)=\int_{-\infty}^{t}\delta(\tau)\,d\tau
$$

  3. 偶函数性质：$\delta(-t)=\delta(t)$。
  4. 尺度变换性质：
$$

\delta(at)=\dfrac{1}{|a|}\delta(t)
$$

  </div>
</details>

### 复指数信号与正弦信号
- 连续复指数 $e^{j\omega_0 t}$，实部与虚部分别为余弦与正弦。
- 欧拉公式是把三角函数与指数打通的桥梁：
$$

e^{j\theta}=\cos\theta+j\sin\theta
\qquad
\cos\theta=\dfrac{e^{j\theta}+e^{-j\theta}}{2}
\qquad
\sin\theta=\dfrac{e^{j\theta}-e^{-j\theta}}{2j}
$$
- 复指数信号是 LTI 系统的特征函数：输入 $e^{st}$ 时输出为 $H(s)e^{st}$，这正是变换法的出发点。

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--系统性质-->
## 系统的基本性质
### 线性与非线性
- 线性 $=$ 齐次性 $+$ 可加性，合起来写作：
$$

T\{a f_1(t)+b f_2(t)\}=a\,T\{f_1(t)\}+b\,T\{f_2(t)\}
$$

<!--性质4-->
<details>
  <summary>
    性质4：判断线性时不要忽略直流项（反例）
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

  已知 $y(t)=2f(t)+3$。
  取 $f_1(t)=0$，则 $y_1(t)=3\ne 0$，破坏齐次性，因此该**不是**线性系统，而是"线性 $+$ 直流偏置"的增量线性系统。

  </div>
</details>

### 时不变、因果、稳定
- 时不变：输入延迟 $t_0$，输出只发生同样的延迟，波形形状不变。
- 因果：输出只取决于当前与过去的输入，不"预知未来"。
- 稳定（BIBO）：有界输入必有有界输出。

<!--性质5-->
<details>
  <summary>
    性质5：判断时不变的通用流程
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

  1. 先按原式写出 $y(t)=T\{f(t)\}$；
  2. 再用 $f(t-t_0)$ 代入，得到 $T\{f(t-t_0)\}$；
  3. 把第 1 步结果整体移位得 $y(t-t_0)$；
  4. 比较第 2、3 步，若含 $t$ 的系数不同则**时变**。

  例：$y(t)=f(2t)$ 为时变；$y(t)=f(t-t_0)$ 为时不变；$y(t)=t f(t)$ 为时变。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--LTI与卷积-->
## LTI 系统与卷积
### 卷积的定义
- 连续卷积：
$$

y(t)=f(t)*h(t)=\int_{-\infty}^{+\infty}f(\tau)h(t-\tau)\,d\tau
$$
- 离散卷积（卷积和）：
$$

y[n]=f[n]*h[n]=\sum_{k=-\infty}^{+\infty}f[k]h[n-k]
$$
- 卷积的图解法四步：**反褶 $\to$ 移位 $\to$ 相乘 $\to$ 积分**（离散为求和）。

### 卷积的常用性质
<div style="overflow-x:auto; padding:4px 0;">

$$
\begin{aligned}
&\text{交换律：} && f*h=h*f\\
&\text{分配律：} && f*(h_1+h_2)=f*h_1+f*h_2\\
&\text{结合律：} && (f*h_1)*h_2=f*(h_1*h_2)\\
&\text{与冲激卷积：} && f(t)*\delta(t-t_0)=f(t-t_0)\\
&\text{与阶跃卷积：} && f(t)*u(t)=\int_{-\infty}^{t}f(\tau)\,d\tau
\end{aligned}
$$

</div>

### 卷积的时移性质
- 若 $f(t)*h(t)=y(t)$，则
$$

f(t-t_1)*h(t-t_2)=y(t-t_1-t_2)
$$
- 记忆方法：卷积结果的时间范围 $=$ 两信号时间范围之和，即 $[t_{f1},t_{f2}]+[t_{h1},t_{h2}]$。
- 卷积结果的长度（离散）：$N=N_1+N_2-1$。

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--变换-->
## 常用变换对速查
### 傅里叶变换
<details>
  <summary>
    性质6：三条最基本的傅里叶变换对
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
\text{矩形脉冲：}\quad G_\tau(t)\ \longleftrightarrow\ \tau\,\mathrm{Sa}\!\left(\dfrac{\omega\tau}{2}\right)
$$
$$
\text{单边指数：}\quad e^{-at}u(t)\ \longleftrightarrow\ \dfrac{1}{a+j\omega}\qquad(a>0)
$$
$$
\text{冲激：}\quad \delta(t)\ \longleftrightarrow\ 1,\qquad 1\ \longleftrightarrow\ 2\pi\delta(\omega)
$$

  其中 $\mathrm{Sa}(x)=\dfrac{\sin x}{x}$，矩形脉冲与 Sa 函数构成一对对偶关系。

  </div>
</details>

### 拉普拉斯变换与 z 变换
- 拉普拉斯变换把微分方程化为代数方程，$s=\sigma+j\omega$；令 $\sigma=0$ 即退化为傅里叶变换。
- $z$ 变换是离散系统的对应工具，$z=e^{sT}$，收敛域（ROC）与时域序列的左右边性密切相关。

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<span id="li-1"></span>

1. [返回](#li-ti)例题1（冲激的取样性质）:
<div style="overflow-x:auto; padding:4px 0;">

计算积分 $\displaystyle\int_{-\infty}^{+\infty}(t^2+3t+2)\,\delta(t-1)\,dt=\underline{\hspace{1.5em}}.$

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

按取样性质 $\int_{-\infty}^{+\infty}f(t)\delta(t-t_0)\,dt=f(t_0)$，取 $f(t)=t^2+3t+2$、$t_0=1$：
$$

f(1)=1+3+2=\boldsymbol{6}
$$

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<span id="li-2"></span>

2. [返回](#li-ti)例题2（能量信号与功率信号）
<div style="overflow-x:auto; padding:4px 0;">

(1) 求 $f_1(t)=2e^{-3t}u(t)$ 的能量 $E$ 与平均功率 $P$。  
(2) 求 $f_2(t)=2\cos(100t)$ 的能量 $E$ 与平均功率 $P$。

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1)** 由 $E=\int_{-\infty}^{+\infty}|f_1(t)|^2dt$：
$$

E=\int_{0}^{+\infty}4e^{-6t}\,dt=4\cdot\dfrac{1}{6}=\boldsymbol{\dfrac{2}{3}}
\qquad
P=\lim_{T\to\infty}\dfrac{1}{2T}\cdot\dfrac{2}{3}=\boldsymbol{0}
$$

能量有限，故 $f_1(t)$ 是能量信号。

**(2)** 周期信号能量无穷 $E=\infty$，平均功率可直接用 $P=\dfrac{A^2}{2}$：
$$

P=\dfrac{2^2}{2}=\boldsymbol{2}
$$

故 $f_2(t)$ 是功率信号。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<span id="li-3"></span>

3. [返回](#li-ti)例题3（卷积：两个矩形脉冲）
<div style="overflow-x:auto; padding:4px 0;">

设 $f(t)=u(t)-u(t-1)$，$h(t)=u(t)-u(t-1)$，求 $y(t)=f(t)*h(t)$。

</div>

<details>
  <summary>点击查看解析与答案（图解法）</summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
y(t)=\int_{-\infty}^{+\infty}f(\tau)h(t-\tau)\,d\tau
$$

分段讨论重叠区间：
$$

y(t)=
\begin{cases}
0, & t<0\\[4pt]
\displaystyle\int_{0}^{t}1\,d\tau=t, & 0\le t<1\\[8pt]
\displaystyle\int_{t-1}^{1}1\,d\tau=2-t, & 1\le t<2\\[8pt]
0, & t\ge 2
\end{cases}
$$

即两个宽度为 1 的矩形脉冲卷积得到一个底宽为 2、峰值为 1 的三角波：
$$

y(t)=t\,u(t)-2(t-1)u(t-1)+(t-2)u(t-2)
$$

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<span id="li-4"></span>

4. [返回](#li-ti)例题4（卷积：两个指数信号）
<div style="overflow-x:auto; padding:4px 0;">

设 $f(t)=e^{-t}u(t)$，$h(t)=e^{-2t}u(t)$，求 $y(t)=f(t)*h(t)$。

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

$t<0$ 时无重叠，$y(t)=0$；$t\ge0$ 时两个信号尾部自 $0$ 起重叠：
$$

y(t)=\int_{0}^{t}e^{-\tau}\cdot e^{-2(t-\tau)}\,d\tau
=e^{-2t}\int_{0}^{t}e^{\tau}\,d\tau
=e^{-2t}\left(e^{t}-1\right)
$$

整理得：
$$

y(t)=\left(e^{-t}-e^{-2t}\right)u(t)
$$

验证：$t=1$ 时 $y(1)=e^{-1}-e^{-2}\approx0.233$，与自编数值积分一致。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<span id="li-5"></span>

5. [返回](#li-ti)例题5（系统性质判定）
<div style="overflow-x:auto; padding:4px 0;">

判断下列系统是否为线性、时不变系统，并说明理由：  
(1) $y(t)=t\,f(t)$　(2) $y(t)=f(t+1)$　(3) $y[n]=\displaystyle\sum_{k=-\infty}^{n}f[k]$

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

**(1) $y(t)=t f(t)$**  
线性：$T\{af_1+bf_2\}=t(af_1+bf_2)=a\,tf_1+b\,tf_2$，满足。  
时不变：$T\{f(t-t_0)\}=t f(t-t_0)$，而 $y(t-t_0)=(t-t_0)f(t-t_0)$，两者不等 $\Rightarrow$ **时变**。

**(2) $y(t)=f(t+1)$**  
线性：显然满足。  
时不变：$T\{f(t-t_0)\}=f(t+1-t_0)$ 与 $y(t-t_0)=f(t+1-t_0)$ 相同 $\Rightarrow$ **时不变**。  
注意：它是时不变的，但**非因果**（用到了 $t+1$ 时刻的输入）。

**(3) $y[n]=\sum_{k=-\infty}^{n}f[k]$**  
线性：求和是线性运算，满足。  
时不变：$T\{f[n-n_0]\}=\sum_{k\le n}f[k-n_0]=\sum_{m\le n-n_0}f[m]=y[n-n_0]$，$\Rightarrow$ **时不变**，且是**因果**的。

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<span id="li-ti">例题(点击下面跳转)</span>  


[例1](#li-1)
[例2](#li-2)
[例3](#li-3)
[例4](#li-4)
[例5](#li-5)


<!--

模板1：单位阶跃定义 - 明文直接显示，支持中文，手机左右滑动
<div style="overflow-x:auto; padding:4px 0;">

$$
u(t)=
\begin{cases}
1, & t>0\\
0, & t<0
\end{cases}
$$

</div>

-->


