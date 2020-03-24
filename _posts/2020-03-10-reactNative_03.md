---
layout: post
comments: true
title: '[DEV] react native 03 - loading screen!'
categories: [dev]
tags: [react]
date: 2020-03-11
---
![headerimg](/assets/img/subcate/react.png)

## 경고
공부기록용임.
코드나 커리큘럼 방식 등 모든 지적 재산권은 노마드 코더에게 있으며,
무료로 볼 수 있으니 들어가서 여기서 공부할 것!!
갓 니콜라이 노마드 코더님 만세!
[https://academy.nomadcoders.co](https://academy.nomadcoders.co/)


## Loading Screen
간단한 로딩 컴포넌트를 하나 만든 후 App.js에 연결해준다.  
~~~javascript
export default function App() {
  return (
    <Loading />
  );
}
      console.log('찾았다! 2 ', this.state.coords);
~~~


![image](/assets/img/post/react_native/Screenshot_5.png)  


## Location  
react-native에는 geolocation이 라는 api가 있지만 기능이 부족하고 expo에서 제공하는 api중 [`expo-location`](https://docs.expo.io/versions/v36.0.0/sdk/location/)라는 녀석이 있으니 이것을 사용해 내 위치를 파악하겠따!

> expo install expo-location

으로 설치.

~~~javascript


~~~