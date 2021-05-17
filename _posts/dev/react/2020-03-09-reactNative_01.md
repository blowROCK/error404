---
layout: post
comments: true
title: '[DEV] react native 01 - expo와 안드로이드'
categories: [dev]
tags: [react]
date: 2020-03-09
---
![headerimg](/assets/img/subcate/react.png)

## 경고
공부기록용임.
코드나 커리큘럼 방식 등 모든 지적 재산권은 노마드 코더에게 있으며,
무료로 볼 수 있으니 들어가서 여기서 공부할 것!!
갓 니콜라이 노마드 코더님 만세!
[https://academy.nomadcoders.co](https://academy.nomadcoders.co/)

## 시작하기전 
나는 니콜라스때문이 아닌 이미 expo를 쓰기로 마음먹은 상태였다.  
expo는 생태계가 기본 react-native보다 좁고 빌드파일이 크며, 다양한 기능을 만들어 쓰기 힘들 수 있다.  
그러나 초기 공수가 적게 들어가며, 학습용도로써 매우 좋아보여 일단 선택하게되었다.  
애초에 지금 개발하고 싶은 앱도 네이티브 기능을 쓰지 않으니 뭐.. 적당하다 싶다.  

## install
1. > npm install expo-cli --global
2. [expo.io](https://expo.io) 접속 & 가입
3. 프로젝트 생성  
    > expo init my-new-project  
    > cd my-new-project  
    > expo login  
    > expo start
4. `[옵션]` 깃헙 연결하기

`끗!`{:.lead}



## 실행  
**에뮬레이터**

1. 안드로이드 기준 [android studio](https://developer.android.com/studio) 설치  
2. 에뮬레이터 설치  
![image](/assets/img/post/react_native/Screenshot_1.png)  
    > AVD Manager 들어가서 아무폰이나 설치, 아니면 구글링해서 새로운 폰 만들어도됨

3. 다시 AVD Manager와서 초록 화살표로 실행  
![image](/assets/img/post/react_native/Screenshot_2.png)  

4. expo dev 창에서 에뮬레이터 실행  
![image](/assets/img/post/react_native/Screenshot_3.png)  



**내 폰**  
1. 폰에서 expo 설치 후 expo dev 창의 QR코드를 인식 시키면 바로 실행!