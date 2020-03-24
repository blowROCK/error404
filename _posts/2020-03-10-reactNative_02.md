---
layout: post
comments: true
title: '[DEV] react native 02 - component와 layout'
categories: [dev]
tags: [react]
date: 2020-03-10
---
![headerimg](/assets/img/subcate/react.png)

## 경고
공부기록용임.
코드나 커리큘럼 방식 등 모든 지적 재산권은 노마드 코더에게 있으며,
무료로 볼 수 있으니 들어가서 여기서 공부할 것!!
갓 니콜라이 노마드 코더님 만세!
[https://academy.nomadcoders.co](https://academy.nomadcoders.co/)


## App을 만드는 3가지 방식  
1. 네이티브 방식
    Swift Objective-c, java 등으로 ios, android를 각각 만드는 방법  
2. 하이브리드
    웹뷰를 이용해 cordova, phoneGap 을 이용해 하이브리드 방식으로 심플한 앱을 제작  
    > Ionic도 결국 웹뷰..쪽 아닌가 싶다
3. react native
    javascript를 android나 ios가 이해할 수 있게 하는 `브릿지`가 있다.  
    데이터량이 많아져 `브릿지`가 트레픽잼이 걸리면 점차 느려질 수 있다. 거기다가 뷰가 많아지면 더 느려짐..  
    적절한 라이프사이클 관리가 필수적임.


## Component  
~~~javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Title~~</Text>
    </View>
  );
}
// View는 일단 div이고 Text는 span으로 생각하자.
// 스타일은 style={styles.container} 이런식으로 넣어주고
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); // 여기서 정의한다.
~~~



## Layout  
~~~javascript
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellow}></View>
      <View style={styles.blue}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yellow:{
    flex: 2,
    backgroundColor: 'yellow'
  },
  blue:{
    flex: 1,
    backgroundColor: 'blue'
  }
});
~~~  
이러면 어떻게 될까 reat-native에서는 flex가 웹에서는 row인 것에 반해 기본적으로 column이다. 거기에 flex값은 일종의 내가 차지할 크기 비율을 따진다.
만약 전체 넓이를 3으로 쳤을때, yellow는 2만큼, blue는 1만큼을 가지게 된다.
container는 혼자있기 때문에 1은 100%를 나타낸다.  

![image](/assets/img/post/react_native/Screenshot_4.png)  

> 웹과 다르게 폰은 가로 세로 길이가 항상 변하고 수많은 기기들의 사이즈가 모두다 다르기 때문에 절대 width나 height를 layout에서는 최대한 쓰지 않게 해야한다. 모두 `FLEX` 하자