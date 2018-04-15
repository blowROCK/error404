---
layout: post
comments: true
title: '[DEV] Jekyll(지킬) Error(에러) Invalid CP949 character "￦xE2"'
description: >
    'Jekyll(지킬) \xE2 CP949 에러 대처법'
image: /assets/img/default.jpg
categories: [dev]
tags: [jekyll]
date: 2018-04-14
---
..
## 윈도우에서 CP949 에러 대처법

![image](/assets/img/post/jekyll-error/1.png){:.lead}

이런 메시지가 가끔 뜬다. 보통은 새로운 플러그인이나 기능을 추가하거나 테마를 받아 실행해볼 때, 많이 일어난다. 기본 jekyll 프로젝트에서는 보지 못한 에러라 많이 당황했다.

Liquid Exception: Incompatible character encoding
{:.message}
위와 같은 encoding 에러도 아래 명령어로 해결될 수 있다.

chcp 65001
{:.message}

![image](/assets/img/post/jekyll-error/2.png){:.lead}

자~알 굴러간다. 굿!


## 참고
[윈도우에서 Jekyll 실행 방법](https://github.com/juthilo/run-jekyll-on-windows){:target="_blank"} 으로 Ruby2.0 기준으로 잘 설명한 git이 있어서 링크 남깁니다.
