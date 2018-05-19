---
layout: post
comments: true
title: "[DEV] Jekyll(지킬), Gitpages(깃페이지)에 커스텀 도메인 적용"
categories: [dev]
tags: [jekyll]
date: 2018-05-19
---
![headerimg](/assets/img/subcate/jekyll-head.png)
도메인 구매부터 gitpages에 등록하고 jekyll에 적용까지!



**준비물**
>Github에 등록된 Gitpages! <br>
>ex : http://<userId>.github.io


## 일단 도메인을 구해보자!

<br>
**[Godaddy](https://kr.godaddy.com/offers/domains/godaddy-nb?isc=gofhlkr01&countryview=1&currencytype=krw&slid=&pgrid=41737987654&ptaid=kwd-381116485117&mkwid=sZBC3fD4V_pcrid_260523075795_pkw_%C3%AB%C2%AC%C2%B4%C3%AB%C2%A3%C2%8C%C3%AB%C2%8F%C2%84%C3%AB%C2%A9%C2%94%C3%AC%C2%9D%C2%B8_pmt_p_pdv_c_&gclid=Cj0KCQjwlv_XBRDrARIsAH-iRJScRJUCrobaK7d6pnRwRnuoJHUNalSOlljrRMGHjPMNoi8xpCJqOQsaAt9hEALw_wcB)**
>싸다 최소 `1099원`으로 .com 도메인을 구매할 수 있다.


<br>
**[whois](http://whois.co.kr/)**
>유명함. 안써봐서 모른다.


<br>
**[gabia](https://domain.gabia.com)**
>지금 사용중인 업체, `error404.co.kr` 이 가장 싸서 여기서 구매했다.


<br>
**[freenom](http://www.freenom.com)**
>무료이다. 단점으로는 홈페이지 자체가 무진장 느리고 여기서주는 몇몇 TDL은 구글에서 검색제한이 걸려있기도 하다.  <br> 
>나는 여기서 `blow.gq`과 `bung.ga` 라는 미친 짧은 도메인을 무료로 가지고있는데, <br> 
>`.gq`는 특히 `구글 서치 콘솔`에서 `sitemap`이 1달넘게 리젝당한 경험이 있다.


## 그래 뭐든 샀다 어떻게 적용하지?

일단은 깃의 `Settings`에 가자.

![image](/assets/img/post/jekyll-domain/01.png){:.center}

아래로 쭉~ 내려가다보면 `Github pages` 라는 항목이 나온다.


![image](/assets/img/post/jekyll-domain/02.png){:.center}

>여기서 custom domain에 자신의 도메인을 넣어주고 세이브!


## 다음은 도메인을 구매한곳으로

나는 일단 가비아에서 샀으니 가비아에서 진행한다. 다른 곳도 이런 방식이니 그냥 따라하면 된다.

![image](/assets/img/post/jekyll-domain/03.png){:.center} <br>
![image](/assets/img/post/jekyll-domain/04.png){:.center} <br>
![image](/assets/img/post/jekyll-domain/05.png){:.center} <br>
![image](/assets/img/post/jekyll-domain/07.png){:.center} <br>

> A레코드에 <br>
> `192.30.252.153` <br>
> `192.30.252.154` <br>
> 이렇게 치면된다.
