---
layout: post
comments: true
title: '[DEV] Jekyll(지킬) Error(에러) Invalid CP949 character "￦xE2"'
categories: [dev]
tags: [jekyll]
date: 2018-04-14
---

Window에서 Jekyll CP949 에러 해결 방법


## 윈도우에서 CP949 에러! 무엇?

![image](/assets/img/post/jekyll-error/1.png){:.lead}

이런 메시지가 가끔 뜬다. 보통은 새로운 플러그인이나 기능을 추가하거나 테마를 받아 실행해볼 때, 많이 일어난다. 기본 jekyll 프로젝트에서는 보지 못한 에러라 많이 당황했다. 로그에 보이듯이 SASS가 문제

윈도우에서 SASS를 사용하는 패키지 인코딩이 문제카더라.. 
구글링에서는 _config.yml 파일에 UFT-8 인코딩으로 추가 하라던데 `"응, 안돼. 돌아가"`

## 해결법

>chcp 65001
{:.lead}

![image](/assets/img/post/jekyll-error/2.png){:.lead}

자~알 굴러간다. 굿!


## 참고

>Liquid Exception: Incompatible character encoding
{:.message}
위와 같은 encoding 에러도 아래 명령어로 해결될 수 있다.

[윈도우에서 Jekyll 문서](https://github.com/juthilo/run-jekyll-on-windows){:target="_blank"} 으로 Ruby2.0 기준으로 잘 설명한 git이 있어서 링크 남깁니다.
