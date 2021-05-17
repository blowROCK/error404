---
layout: post
comments: true
title: '[DEV] react styled components 간단하게 개념잡기'
categories: [dev]
tags: [react]
date: 2020-03-24
---
![headerimg](/assets/img/subcate/react.png)

## 경고
공부기록용임.
코드나 커리큘럼 방식 등 모든 지적 재산권은 노마드 코더에게 있으며,
무료로 볼 수 있으니 들어가서 여기서 공부할 것!!
갓 니콜라이 노마드 코더님 만세!
[https://academy.nomadcoders.co](https://academy.nomadcoders.co/)


## CSS SCSS는?  
**CSS 시절**  
Button이 만약 3가지가 있다면
~~~HTML
<button className="button">Button</button>
<button className="button button--success">Success</button>
<button className="button button--danger">Danger</button>
~~~
  
~~~CSS
.button{
    border: none;
    padding: 1rem 2rem;
    background-color: gray;
    cursor: pointer;
    font-weight: bold;
    color: white;
    margin-right: 1rem;
}
.button--success{
    background-color: #27ae60;
}
.button--danger{
    background-color: #c0392b;
}
~~~
이런식으로 쓰게된다. `SCSS or SASS`에서는 크게 달라지지 않지만 그래도 많이 줄일 수 있다.


**SCSS 시절**  
~~~HTML
<button className="button">Button</button>
<button className="button success">Success</button>
<button className="button danger">Danger</button>
~~~  

~~~SCSS
.button{
    border: none;
    padding: 1rem 2rem;
    background-color: gray;
    cursor: pointer;
    font-weight: bold;
    color: white;
    margin-right: 1rem;
    &.success{
        background-color: #27ae60;
    }
    &.danger{
        background-color: #c0392b;
    }
}
~~~
어느정도 줄었고 논리적으로 쉽게 쓸 수 있게 되었다!


## Styled Component!
스타일 컴포넌트는 어떨까

> npm i --save styled-components

~~~javascript
import React, { Component } from 'react';
import styled from 'styled-components';


class App extends Component {
  render(){
    return (
      <Container className="App">
        <Button>Button</Button>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
      </Container>

    );
  }
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  padding-top: 10rem;
  text-align: center;
`
const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: gray;
  cursor: pointer;
  font-weight: bold;
  color: white;
  margin-right: 1rem;
  &:active,
  &:forcus{
    outline: none;
  }
  background-color: ${props => {
    return props.danger ? "#c0392b" : props.success ? "#27ae60" : "gray";
  } };
`
~~~  
styled는 기본적으로 컴포넌트이기 때문에 props도 받는다.

**장점**
1. 클래스명에대한 고민을 줄일 수 있다. 프로그래머라면 변수명 만드는 것이 제일 고민..
2. React는 컴포넌트 별로 세분화해서 개발한다. 그렇기 때문에 한두번만 적용해놓으면 편하게 가져다 쓸 수 있다. 
3. extending, props, animation 등 다양한 기능들을 통해서 더 쉽고 빠르게 개발할 수 있다.
4. SASS나 SCSS를 좋아한다면 별다른 설치없이 바로 사용 가능하다.
5. **React native에서 바로 적용 가능하다! 웹, 앱 동시에 만든다면 너무 좋은 선택**


**단점**
1. VScode 기준으로 자동완성이 안된다. 끔찍해라 거기다가 읽기도 불편하다. vscode에 좋은 확장프로그램이 있다면 해결
2. 컴포넌트마다 css가 어디에서 적용되어 있는지 잘모르겠다.
3. 지금까지 SCSS로 잘 개발하고 있었다면.. 굳이 적용할 이유가 없어보인다.

**결론**  
레이아웃등 글로벌한 CSS는 따로 적용하고 자잘한 네비바, 버튼 등 따로 컴포넌트 적용 해서 사용하면 괜찮을 뜻 하다.



