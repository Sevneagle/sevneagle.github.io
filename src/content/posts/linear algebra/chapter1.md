---
title: 三、线性代数Chap.1
published: 2026-04-02
pinned: false
description: 这篇文章开始记录我的考研线代复习
tags: [maths]
category: maths
licenseName: "CC BY-NC-SA 4.0"
author: Sevneagle
//sourceLink: "https://github.com/emn178/markdown"
draft: false
date: 2026-04-02
image: "./images/cover1.jpg"
pubDate: 2026-04-02
permalink: "一些分享"
---


<!--前提-->
## 前提:文末有可直接查看的[例题](#li-ti)
- 首先需要知道一些基本知识。r(row横)代表行,c(column竖)代表列
<div style="overflow-x:auto; padding:4px 0;">

$$
\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
\text{ n 阶行列式}
$$

</div>

<div style="overflow-x:auto; padding:4px 0;">

$$
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
\text{m行n列矩阵}
$$  

</div>

<!--逆序数-->
- 由1,2,…,n组成的有顺序的数组定义为n级排列(不能缺数字且有n!种排列)  
$$
145980 \quad \times \qquad 14523 \quad \checkmark
$$  

<details open>
  <summary>
    逆序数定义
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">


若较大的数 $i_j$ 在较小的数 $i_k$ 前面，则构成一个逆序。  
排列 $i_1i_2\cdots i_n$ 中逆序的个数称为逆序数，记作 $N(i_1i_2\cdots i_n)$。  
例如：$N(563421)=4+4+2+2+1=13$，$N(14532)=0+2+2+1=5$。  
累加后面有几个比当前数小的数字。  


  </div>
</details>

<!--行列式-->
## 行列式
### 概念与理解
行列式(行列相等,方的)实际是一个函数，如
$$
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
=ad-bc
$$ 
最后结果是一个标量(数字),是后续会经常用到的工具。  
以下性质有助于计算出行列式的值:  
通常按行展开。i为行,j为列(基本不用该方法,但需了解逆序数的使用)
$$

\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
=\sum_{j_1j_2\cdots j_n}(-1)^{N(j_1j_2\cdots j_n)}a_{1j_1}a_{2j_2}\cdots a_{nj_n}
$$

<!--性质1-->
<details>
  <summary>
    性质1：D=D<sup>T</sup>(行列式转置不变)
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
D=\begin{vmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{vmatrix}=
D^T=\begin{vmatrix}
1&4&7\\
2&5&8\\
3&6&9
\end{vmatrix}
$$

  </div>
</details>

<!--性质2-->
<details>
  <summary>
    性质2：D=-D<sub>1</sub>(交换两行/两列,行列式变号)
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
D=\begin{vmatrix}
1&1\\
4&5
\end{vmatrix}
=1\quad
D_1=\begin{vmatrix}
4&5\\
1&1
\end{vmatrix}
=-1\quad
D=-D_1\\
$$
当两行(两列)元素相等时,行列式为0:
$$
D_1=\begin{vmatrix}
1&1&1\\
1&1&1\\
1&1&4
\end{vmatrix}
=-D_2=\begin{vmatrix}
1&1&1\\
1&1&1\\
1&1&4
\end{vmatrix}
=0
$$

  </div>
</details>

<!--性质3-->
<details>
  <summary>
    性质3：D<sub>1</sub>=kD、D<sub>2</sub>=k<sup>n</sup>D（行/列提公因子）
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
D=\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix},\quad
D_1=\begin{vmatrix}
ka_{11} & ka_{12} & \cdots & ka_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}=kD
$$
!注意:
$$
D_2=\begin{vmatrix}
ka_{11} & ka_{12} & \cdots & ka_{1n} \\
ka_{21} & ka_{22} & \cdots & ka_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
ka_{n1} & ka_{n2} & \cdots & ka_{nn}
\end{vmatrix}=\boldsymbol{k^n D}
$$
当两行(两列)成比例时,行列式为0:
$$
\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
ka_{11} & ka_{12} & \cdots & ka_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}=0
$$

  </div>
</details>

<!--性质4-->
<details>
  <summary>
    性质4：D=D<sub>1</sub>+D<sub>2</sub>（行列式分行列拆分）
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
\begin{vmatrix}
1 & 1 & 4 \\
a+1 & b+9 & c+1 \\
5 & 1 & 4
\end{vmatrix}
=
\begin{vmatrix}
1 & 1 & 4 \\
a & b & c \\
5 & 1 & 4
\end{vmatrix}
+
\begin{vmatrix}
1 & 1 & 4 \\
1 & 9 & 1 \\
5 & 1 & 4
\end{vmatrix}
$$

  </div>
</details>

<!--性质5-->
<details>
  <summary>
    性质5：D=D<sub>1</sub>（某行k倍加到另一行，行列式值不变）
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
D=\begin{vmatrix}
1 & 2 & 3 \\
a & b & c \\
m & n & p
\end{vmatrix},\quad
D_1=\begin{vmatrix}
1 & 2 & 3 \\
a & b & c \\
m+k & n+2k & p+3k
\end{vmatrix}
$$

$$
D_1=
\begin{vmatrix}
1 & 2 & 3 \\
a & b & c \\
m & n & p
\end{vmatrix}
+
\begin{vmatrix}
1 & 2 & 3 \\
a & b & c \\
k & 2k & 3k
\end{vmatrix}=D\quad
\text{其中}
\begin{vmatrix}
1 & 2 & 3 \\
a & b & c \\
k & 2k & 3k
\end{vmatrix}=0
$$

  </div>
</details>

<!--性质6-->
<details>
  <summary>
    性质6：反对称行列式 a<sub>ij</sub>=-a<sub>ji</sub>
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
D=\begin{vmatrix}
0 & a & b \\
-a & 0 & c \\
-b & -c & 0
\end{vmatrix}
$$

$$
D=D^T=
\begin{vmatrix}
0 & -a & -b \\
a & 0 & -c \\
b & c & 0
\end{vmatrix}
=(-1)^3 D
$$

$$
D=-\boldsymbol{D} \implies 2D=0 \implies D=0
$$

  </div>
</details>

<!--性质7-->
<details>
  <summary>
    性质7：三角行列式、对角行列式（主/副对角）
  </summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
0&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&a_{nn}
\end{vmatrix}
=
\begin{vmatrix}
a_{11}&0&\cdots&0\\
a_{21}&a_{22}&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{vmatrix}
=
\begin{vmatrix}
a_{11}&0&\cdots&0\\
0&a_{22}&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&a_{nn}
\end{vmatrix}\\
=(-1)^{N(123\cdots n)}\boldsymbol{a_{11}a_{22}\cdots a_{nn}}
$$
逆序数 $N(123\cdots n)=0$,$(-1)^0=1$,原式=$a_{11}a_{22}\cdots a_{nn}$

$$
\begin{vmatrix}
0&\cdots&0&a_{1n}\\
0&\cdots&a_{2,n-1}&0\\
\vdots&\ddots&\vdots&\vdots\\
a_{n1}&\cdots&0&0
\end{vmatrix}
=
\begin{vmatrix}
0&\cdots&0&a_{1n}\\
0&\cdots&a_{2,n-1}&a_{2n}\\
\vdots&\ddots&\vdots&\vdots\\
a_{n1}&\cdots&a_{n,n-1}&a_{nn}
\end{vmatrix}
=\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&\cdots&a_{2,n-1}&0\\
\vdots&\ddots&\vdots&\vdots\\
a_{n1}&0&\cdots&0
\end{vmatrix}\\
=(-1)^{N(n\cdots21)}a_{1n}a_{2,n-1}\cdots a_{n1}
$$
逆序数 $N(n\cdots21)=(n-1)+(n-2)\dots+1=\dfrac{n(n-1)}{2}$,原式=$(-1)^\dfrac{n(n-1)}{2}\boldsymbol{a_{1n}a_{2,n-1}\cdots a_{n1}}$

  </div>
</details>
<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

### 余子式与代数余子式

- 余子式 $M_{ij}$:去掉第i行第j列后剩下的行列式值
  <div style="overflow-x:auto; padding:4px 0;">

  $$
  D=
  \begin{vmatrix}
  1&2&3\\
  4&5&6\\
  7&8&9
  \end{vmatrix}
  $$

  取 $i=1,j=1$，划去第1行第1列：$M_{11}=\begin{vmatrix}5&6\\8&9\end{vmatrix}=5\times9 - 6\times8=45-48=-3$  
  取 $i=1,j=2$，划去第1行第2列：$M_{12}=\begin{vmatrix}4&6\\7&9\end{vmatrix}=4\times9 - 6\times7=36-42=-6$

- 代数余子式 $A_{ij}=(-1)^{i+j}M_{ij}$：在余子式基础上根据行标加列标添加正负号
  $$
  D=\begin{vmatrix}1&2\\3&4\end{vmatrix}
  $$
  行1加列1结果为$2$：$M_{11}=\begin{vmatrix}4\end{vmatrix}=4,\quad A_{11}=(-1)^{1+1}M_{11}=4$  
  行2加列1结果为$3$：$M_{21}=\begin{vmatrix}2\end{vmatrix}=2,\quad A_{21}=(-1)^{2+1}M_{21}=-2$

  </div>


<span id="li-1"></span>

1. [返回](#li-ti)例题1:
<div style="overflow-x:auto; padding:4px 0;">

若行列式$D=\begin{vmatrix}2 & 1 & 5 \\0 & 3 & x \\4 & x & -1\end{vmatrix}$中代数余子式 $A_{23}=-8$,则代数余子式 $A_{21}=\underline{\hspace{1.5em}}.$

</div>

<details>
  <summary>点击查看解析与答案</summary>
  <div style="overflow-x:auto; padding:4px 0;">

已知 $A_{23}=(-1)^{2+3}M_{23}=-\begin{vmatrix}2&1\\4&x\end{vmatrix}=-(2x-4)=-8\Rightarrow x=6$  
代入 $x=6$ 求 $A_{21}$：$A_{21}=(-1)^{2+1}M_{21}=-\begin{vmatrix}1&5\\6&-1\end{vmatrix}=-\left[1\times(-1)-5\times6\right]=31$

  </div>
</details>

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!-- 行列式按行/列展开 精简最终版 -->
- 行列式按行(列)展开 **(此方法可把高阶行列式化为低阶)**
  <div style="overflow-x:auto; padding:4px 0;">

  $$
  D=a_{i1}A_{i1}+a_{i2}A_{i2}+\dots+a_{in}A_{in}
  $$

  例如 $D=\begin{vmatrix}1&1\\4&5\end{vmatrix}$
  按第一行展开:
  $D=a_{11}A_{11}+a_{12}A_{12}=1\times5 + 1\times(-4)=1$  
  按第二行展开:
  $D=a_{21}A_{21}+a_{22}A_{22}=4\times(-1) + 5\times1=1$

<!-- 行列式按0多行列展开计算 · 步骤详细 · 结果-9 -->
- 行列式按行（列）展开计算
  $$
  D=\begin{vmatrix}3&-1&1&-1\\1&4&2&2\\0&3&0&0\\0&-3&1&2\end{vmatrix}
  $$
  $
  D
  \stackrel{按第三行展开}{=\!=\!=}
  0+(-1)^{3+2}\cdot3\cdot\begin{vmatrix}3&1&-1\\1&2&2\\0&1&2\end{vmatrix}+0+0
  =-3\begin{vmatrix}3&1&-1\\1&2&2\\0&1&2\end{vmatrix}
  $
  $
  \stackrel{r_1-3r_2}{=\!=\!=}
  -3\begin{vmatrix}0&-5&-7\\1&2&2\\0&1&2\end{vmatrix}
  $
  $
  \stackrel{按第一列展开}{=\!=\!=}
  -3\cdot(-1)^{2+1}\cdot1\begin{vmatrix}-5&-7\\1&2\end{vmatrix}
  =3\cdot(-10+7)=3\cdot(-3)=-9
  $

  </div>

<span id="li-2"></span>

2. [返回](#li-ti)例题2
<div style="overflow-x:auto; padding:4px 0;">

计算行列式
$
D=\begin{vmatrix}
1&-1&1&-1\\
2&3&1&1\\
1&-5&3&3\\
-5&1&1&2
\end{vmatrix}
$

</div>

<details>
<summary>点击查看解析与答案(过程不唯一)</summary>
<div style="overflow-x:auto; padding:4px 0;">

$$
D=\begin{vmatrix}
1&-1&1&-1\\
2&3&1&1\\
1&-5&3&3\\
-5&1&1&2
\end{vmatrix}
\stackrel{c_2+c_1,\ c_3-c_1,\ c_4+c_1}{=\!=\!=}
\begin{vmatrix}
1&0&0&0\\
2&5&-1&3\\
1&-4&2&4\\
-5&-4&6&-3
\end{vmatrix}
\stackrel{\text{第一行展开}}{=\!=\!=}
\begin{vmatrix}
5&-1&3\\
-4&2&4\\
-4&6&-3
\end{vmatrix}
$$

$$
\stackrel{c_1+5c_2,\ c_3+3c_2}{=\!=\!=}
\begin{vmatrix}
0&-1&0\\
6&2&8\\
26&6&15
\end{vmatrix}
\stackrel{\text{第一行展开}}{=\!=\!=}
\begin{vmatrix}6&8\\26&15\end{vmatrix}
=-170
$$

</div>
</details>
<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

- 异乘变零(通俗来说就是仅当元素与代数余子式一致时和为D,不一致时和为0)
  <div style="overflow-x:auto; padding:4px 0;">

  同阶行列式中，某一行元素与另一行对应代数余子式乘积之和等于0:
  $
  \sum_{i=1}^{n}a_{ij}A_{it}=
  \begin{cases}
  D,&j=t\\
  0,&j\ne t
  \end{cases}
  $

  含义：同一组元素搭配自身代数余子式求和，结果为行列式本身 $D$；
  不同行元素交叉搭配代数余子式求和，结果直接为 0。
  $$
  D=\begin{vmatrix}
  3&0&4&0\\
  3&2&2&2\\
  0&-7&0&0\\
  5&3&-2&2
  \end{vmatrix}
  $$

  求 $A_{41}+A_{42}+A_{43}+A_{44}$。

  原理：代数余子式只与位置有关，与元素值无关，将第四行元素替换为 $1,1,1,1$。

  $
  A_{41}+A_{42}+A_{43}+A_{44}
  \stackrel{\text{按第四行展开}}{=\!=\!=}
  \begin{vmatrix}3&0&4&0\\3&2&2&2\\0&-7&0&0\\1&1&1&1\end{vmatrix}
  \stackrel{\text{按第三行展开}}{=\!=\!=}
  7\begin{vmatrix}3&4&0\\3&2&2\\1&1&1\end{vmatrix}
  $

  $
  \stackrel{c_1-c_3}{=\!=\!=}
  7\begin{vmatrix}3&4&0\\1&0&2\\0&0&1\end{vmatrix}
  \stackrel{\text{按第三行展开}}{=\!=\!=}
  7\times1\times\begin{vmatrix}3&4\\1&0\end{vmatrix}
  =7\times(0-4)=-28
  $

  </div>


<span id="li-3"></span>

3. [返回](#li-ti)例题3(注意观察与运用结论)

<div style="overflow-x:auto; padding:4px 0;">

$
D=\begin{vmatrix}
2&-3&1&5\\
-1&5&7&-8\\
2&2&2&2\\
0&1&-1&0
\end{vmatrix}\\
(1)求\ 2A_{41}-3A_{42}+A_{43}+5A_{44}\\
(2)求\ M_{11}-M_{12}+M_{13}-M_{14}
$

</div>

<details>
<summary>点击查看解析与答案</summary>

<div style="overflow-x:auto; padding:4px 0;">

$
(1) \ 2A_{41}-3A_{42}+A_{43}+5A_{44} 等于第四行元素与自身代数余子式乘积之和，与第一行元素异乘,结果=0\\
(2) \ M_{11}-M_{12}+M_{13}-M_{14}=A_{11}+A_{12}+A_{13}+A_{14}\\
将第一行替换为1,1,1,1，与第三行成比例结果=0
$

</div>
</details>
<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">


- 行列式按多行(列)展开（拉普拉斯展开）
  <div style="overflow-x:auto; padding:4px 0;">

  取定 $k$ 行，行列式值
  $= \sum$ 子式 $M \times$ 对应的代数余子式 $A$

  代数余子式定义：
  $A=(-1)^{(i_1+i_2+\dots+i_k)+(j_1+j_2+\dots+j_k)} \cdot M$
  $$
  D=\begin{vmatrix}
  1&2&3&0&0\\
  0&1&-1&0&0\\
  0&2&4&0&0\\
  1&2&3&4&5\\
  0&-1&0&3&1
  \end{vmatrix}
  $$
  选定第 1、2、3 行，第 1、2、3 列进行拉普拉斯展开：  
  $
  D=(-1)^{(1+2+3)+(1+2+3)}
  \begin{vmatrix}1&2&3\\0&1&-1\\0&2&4\end{vmatrix}
  \cdot
  \begin{vmatrix}4&5\\3&1\end{vmatrix}
  $

- 分块行列式常用结论
  $$
  \begin{vmatrix}A&C\\0&B\end{vmatrix}=
  \begin{vmatrix}A&0\\C&B\end{vmatrix}=
  \begin{vmatrix}A&0\\0&B\end{vmatrix}
  =|A|\cdot|B|
  $$

  $$
  \begin{vmatrix}0&A\\B&0\end{vmatrix}=
  \begin{vmatrix}C&A\\B&0\end{vmatrix}=
  \begin{vmatrix}0&A\\B&C\end{vmatrix}
  =(-1)^{mn}|A|\cdot|B|
  $$
  设 $A$ 为 $m$ 阶方阵，$B$ 为 $n$ 阶方阵。
  拉普拉斯展开对应符号为：
  $(-1)^{(1+2+\dots+m)+(n+1+n+2+\dots+n+m)}$
  前 $1\sim m$ 行求和为偶数项抵消，仅剩m组n次移位，最终符号幂次简化为 $mn$。

  </div>


<span id="li-4"></span>

4. [返回](#li-ti)例题4
<div style="overflow-x:auto; padding:4px 0;">

$
行列式D=\begin{vmatrix}
0&a&b&0\\
a&0&0&b\\
0&c&d&0\\
c&0&0&d
\end{vmatrix}=(\hspace{1.5em})\\
\text{选项：}
(A)\ (ad-bc)^2\quad
(B)\ -(ad-bc)^2\quad
(C)\ a^2d^2-b^2c^2\quad
(D)\ b^2c^2-a^2d^2
$

</div>

<details>
<summary>点击查看解题步骤与答案</summary>
<div style="overflow-x:auto; padding:4px 0;">

选取第$1、3$行，第$2、3$列进行拉普拉斯展开：
$
D=(-1)^{(1+3)+(2+3)}
\begin{vmatrix}a&b\\c&d\end{vmatrix}
\cdot
\begin{vmatrix}a&b\\c&d\end{vmatrix}
$
$
=(-1)^9(ad-bc)(ad-bc)=-(ad-bc)^2
$
最终答案：选B

</div>
</details>
<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">


<!--计算-->
### 计算
- 典型例题：行和相等
  <div style="overflow-x:auto; padding:4px 0;">

  $$
  D=\begin{vmatrix}
  a&b&b&b\\
  b&a&b&b\\
  b&b&a&b\\
  b&b&b&a
  \end{vmatrix}
  $$
  将所有列加到第$1$列并提取公因子：
  $$
  D=\begin{vmatrix}
  a+3b&b&b&b\\
  a+3b&a&b&b\\
  a+3b&b&a&b\\
  a+3b&b&b&a
  \end{vmatrix}
  =(a+3b)
  \begin{vmatrix}
  1&b&b&b\\
  1&a&b&b\\
  1&b&a&b\\
  1&b&b&a
  \end{vmatrix}
  $$
  作行变换 $r_2-r_1,\ r_3-r_1,\ r_4-r_1$ 化简：
  $$
  =(a+3b)
  \begin{vmatrix}
  1&b&b&b\\
  0&a-b&0&0\\
  0&0&a-b&0\\
  0&0&0&a-b
  \end{vmatrix}
  $$
  由上三角行列式求值可得：
  $D=(a+3b)(a-b)^3$

  </div>

- 典型例题：爪形行列式
  <div style="overflow-x:auto; padding:4px 0;">

  爪形行列式特征：仅首行、首列与主对角线元素非零，其余位置均为0
  $$
  D=\begin{vmatrix}
  1&1&1&1&1\\
  1&-2&0&0&0\\
  1&0&-3&0&0\\
  1&0&0&-4&0\\
  1&0&0&0&-5
  \end{vmatrix}
  $$
  利用列变换消去首列下方元素造零：
  $c_1+\dfrac{1}{2}c_2,\ c_1+\dfrac{1}{3}c_3,\ c_1+\dfrac{1}{4}c_4,\ c_1+\dfrac{1}{5}c_5$
  $$
  D=\begin{vmatrix}
  1+\frac12+\frac13+\frac14+\frac15&1&1&1&1\\
  0&-2&0&0&0\\
  0&0&-3&0&0\\
  0&0&0&-4&0\\
  0&0&0&0&-5
  \end{vmatrix}
  $$
  合并计算首行首列数值：
  $1+\dfrac12+\dfrac13+\dfrac14+\dfrac15=\dfrac{137}{60}$
  由上三角行列式性质直接计算结果：
  $D=\dfrac{137}{60}\times(-2)\times(-3)\times(-4)\times(-5)=274$

  </div>


- 典型例题：范德蒙德行列式
  <div style="overflow-x:auto; padding:4px 0;">

  $$
  V_n=
  \begin{vmatrix}
  1&1&\dots&1\\
  x_1&x_2&\dots&x_n\\
  x_1^2&x_2^2&\dots&x_n^2\\
  \vdots&\vdots&\ddots&\vdots\\
  x_1^{n-1}&x_2^{n-1}&\dots&x_n^{n-1}
  \end{vmatrix}
  =\prod_{1\le i<j\le n}(x_j-x_i)
  $$
  记忆重点：看第二行，按 $(x_2-x_1)(x_3-x_1)(x_3-x_2)\dots$ 依次写出。
  (2) 例题直接套用公式：
  $$
  D=\begin{vmatrix}
  1&1&1&1\\
  a&b&c&d\\
  a^2&b^2&c^2&d^2\\
  a^3&b^3&c^3&d^3
  \end{vmatrix}
  =(b-a)(c-a)(d-a)(c-b)(d-b)(d-c)
  $$
  (3) 简易推导思路：
  作行变换 $r_4-ar_3,\ r_3-ar_2,\ r_2-ar_1$：
  $$
  D=\begin{vmatrix}
  1&1&1&1\\
  0&b-a&c-a&d-a\\
  0&b(b-a)&c(c-a)&d(d-a)\\
  0&b^2(b-a)&c^2(c-a)&d^2(d-a)
  \end{vmatrix}
  $$
  提取公因子 $(b-a)(c-a)(d-a)$：
  $$
  D=(b-a)(c-a)(d-a)\cdot
  \begin{vmatrix}
  1&1&1&1\\
  0&1&1&1\\
  0&b&c&d\\
  0&b^2&c^2&d^2
  \end{vmatrix}
  $$
  重复消元、提取公因子，依次分离出 $(c-b),(d-b),(d-c)$，
  最终化为上三角行列式，合并所有差值乘积，
  即得到 $n$ 阶范德蒙德行列式通式。

  </div>

<span id="li-5"></span>

5. [返回](#li-ti)例题5
<div style="overflow-x:auto; padding:4px 0;">

$
(1)\text{ 计算行列式 }D_1=
\begin{vmatrix}
2&1&4\\
3&1&9\\
4&1&16
\end{vmatrix}
$

$
(2)\text{ 计算行列式 }D_2=
\begin{vmatrix}
a&b&c\\
a^2&b^2&c^2\\
b+c&c+a&a+b
\end{vmatrix}
$

</div>

<details>
<summary>点击查看解析与答案</summary>
<div style="overflow-x:auto; padding:4px 0;">

**题(1)解析**

交换列构造标准三阶范德蒙德行列式：
$$
D_1=-\begin{vmatrix}
1&2&4\\
1&3&9\\
1&4&16
\end{vmatrix}
$$

套用公式 $(x_2-x_1)(x_3-x_1)(x_3-x_2)$：
$D_1=-(3-2)(4-2)(4-3)=\boldsymbol{-2}$

<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

**题(2)解析**

作行变换 $r_3+r_1$：
$$
D_2=\begin{vmatrix}
a&b&c\\
a^2&b^2&c^2\\
a+b+c&a+b+c&a+b+c
\end{vmatrix}
$$

提取公因子 $a+b+c$：
$$
D_2=(a+b+c)\begin{vmatrix}
a&b&c\\
a^2&b^2&c^2\\
1&1&1
\end{vmatrix}
$$

调整行列顺序化为标准范德蒙德行列式化简可得：
$D_2=\boldsymbol{(a+b+c)(b-a)(c-a)(c-b)}$

</div>
</details>
<hr style="margin: 2rem 0; border: none; height: 2px; background: #1f1e33; border-radius: 1px;">

<!--克莱默法则-->

- 克莱默法则<em>（本内容了解替换列即可）</em>

  <div style="overflow-x:auto; padding:4px 0;">

  对于$n$元线性方程组，若系数行列式$D\neq0$，则方程组存在唯一解：
  $x_1=\dfrac{D_1}{D},\ x_2=\dfrac{D_2}{D},\ \dots,\ x_n=\dfrac{D_n}{D}$
  其中$D_j$表示将$D$的第$j$列替换为常数项得到的行列式。

  求解线性方程组：
  $$
  \begin{cases}
  2x_1-x_2+x_3=0\\
  3x_1+2x_2-5x_3=1\\
  x_1+3x_2-2x_3=4
  \end{cases}
  $$

  系数行列式：
  $$
  D=\begin{vmatrix}
  2&-1&1\\
  3&2&-5\\
  1&3&-2
  \end{vmatrix}=28\neq0
  $$

  $D_1$：第$1$列替换常数项$\begin{pmatrix}0\\1\\4\end{pmatrix}=\begin{pmatrix}0&1&4\end{pmatrix}^T$
  $$
  D_1=\begin{vmatrix}
  0&-1&1\\
  1&2&-5\\
  4&3&-2
  \end{vmatrix}=13
  $$

  $D_2$：第$2$列替换常数项$\begin{pmatrix}0\\1&4\end{pmatrix}=\begin{pmatrix}0&1&4\end{pmatrix}^T$
  $$
  D_2=\begin{vmatrix}
  2&0&1\\
  3&1&-5\\
  1&4&-2
  \end{vmatrix}=47
  $$

  $D_3$：第$3$列替换常数项$\begin{pmatrix}0\\1\\4\end{pmatrix}=\begin{pmatrix}0&1&4\end{pmatrix}^T$
  $$
  D_3=\begin{vmatrix}
  2&-1&0\\
  3&2&1\\
  1&3&4
  \end{vmatrix}=21
  $$

  方程组最终解：
  $x_1=\dfrac{D_1}{D}=\dfrac{13}{28},\quad
  x_2=\dfrac{D_2}{D}=\dfrac{47}{28},\quad
  x_3=\dfrac{D_3}{D}=\dfrac{21}{28}=\dfrac{3}{4}$

  </div>





<span id="li-ti">例题(点击下面跳转)</span>  

[例1](#li-1)
[例2](#li-2)
[例3](#li-3)
[例4](#li-4)
[例5](#li-5)


<!--

模板1：m行n列矩阵 - 明文直接显示，支持中文，手机左右滑动
<div style="overflow-x:auto; padding:4px 0;">

$$
\begin{pmatrix}
中文_{11} & 中文_{12} & \cdots & 中文_{1n} \\
中文_{21} & 中文_{22} & \cdots & 中文_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
中文_{m1} & 中文_{m2} & \cdots & 中文_{mn}
\end{pmatrix}
\quad \text{m行n列矩阵}
$$

</div>

模板2：m行n列矩阵 - 明暗文折叠，支持中文，手机左右滑动
<details>
  <summary>m行n列矩阵（点击展开/收起）</summary>
  <div style="overflow-x:auto; padding:4px 0;">

$$
\begin{pmatrix}
中文_{11} & 中文_{12} & \cdots & 中文_{1n} \\
中文_{21} & 中文_{22} & \cdots & 中文_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
中文_{m1} & 中文_{m2} & \cdots & 中文_{mn}
\end{pmatrix}
\quad \text{m行n列矩阵}
$$

  </div>
</details>

-->
