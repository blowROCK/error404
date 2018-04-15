---
layout: post
comments: true
title: "[DEV] Jekyll(지킬) Windows(윈도우 10) 설치하기"
description: >
    윈도우에서 지킬 설치와 실행해보기
    Jekyll은 기본적으로 윈도우는 지원하지 않는다.
    윈도우에서 지킬을 설치하기 위해 퇴근 후 고생했던 방법을 설명하겠습니다.
image: /assets/img/default.jpg
categories: [dev]
tags: [jekyll]
date: 2018-04-13
---

test

## 윈도우에서 지킬 설치하기
{:.no_toc}
0. list
{:toc}



**준비물과 요구사항**
![image](/assets/img/post/jekyll-for-windows/0414-01.png)



## 기본 설치
{:toc}

**다운로드 하는 곳**: [[다운로드]](https://rubyinstaller.org/downloads/){:target="_blank"}



**루비 설치** 

![image](/assets/img/post/jekyll-for-windows/0414-02.png)


**NOTE**: 2.4버전 이상으로 시도했지만 여러 테마들과 여러 gem들이 버전이 안맞아서 에러가 겁나 났습니다. 3일 내내 고생한 부분이니 왠만하면 2.3.3 버전으로 설치하시길 바랍니다.
{:.message}


![image](/assets/img/post/jekyll-for-windows/0414-03.png)
**NOTE**: 설치 하실 때, Add Ruby executables to your PATH는 꼭 체크 하시길 바랍니다.
자동으로 정말 귀찮은 환경변수를 등록해줍니다.
{:.message}

**DevKit(데브킷) 설치**

데브킷은 원하는 위치에 압축을 풀어 놓습니다.
C드라이브 바로 아래에 위치하는 것이 편합니다.

> Win + R 후 "cmd" 입력! 명령 프롬프트 실행

~~~powershell
cd c:\devkit
ruby dk.rb init
ruby dk.rb install
~~~
{:.message}

위 명령어로 데브킷을 설치합니다.

설치 완료되면 [ruby --version]()  [gem --version]() 명령어로 ruby와 gem이 잘 설치 되었는지 확인해봅니다.
![image](/assets/img/post/jekyll-for-windows/0414-04.png)


## 지킬과 부가기능 설치
{:toc}

**NOTE**: gem은 npm이나 yarm 처럼 ruby에서 쓰는 패키지 매니저입니다. 자세한 사항은 [이곳](http://guides.rubygems.org/what-is-a-gem/){:target="_blank"} 에서 확인하세요.
{:.message}

아래 명령어로 지킬과 나머지 필수 패키지를 설치합니다.

~~~powershell
gem install jekyll
gem install minima
gem install bundler
gem install jekyll-feed
gem install tzinfo-data
~~~
{:.message}

모두 설치가 되었으면 CMD로 돌아가서 Jekyll 프로젝트를 생성합니다.


## 지킬 프로젝트 생성과 실행
{:toc}

~~~powershell
jekyll new .
~~~
{:.message}
![image](/assets/img/post/jekyll-for-windows/0414-05.png)

위와 같이 잘 생성된다면 로컬에서 실행 해봅시다.

~~~powershell
jekyll serve
~~~
{:.message}
![image](/assets/img/post/jekyll-for-windows/0414-06.png)

![image](/assets/img/post/jekyll-for-windows/0414-07.png){:.border1px}

**NOTE**: http://127.0.0.1:4000 에 접속하면 서버가 생성 되었습니다.
