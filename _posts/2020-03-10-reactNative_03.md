---
layout: post
comments: true
title: '[DEV] react native 03 - 완성'
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


## App.js
~~~javascript
import Weather from './src/weather/Weather';
import Loading from './src/loading/Loading';

const API_KEY = '받은 api 키를 넣어주세요.';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
    if (Platform.OS === 'android' && !Constants.isDevice) {
      // expo에서 gps함수는 안드로이드 에뮬레이터는 돌릴 수 없어 기본 값을 입력해주었다.
      this._getWeather(37.5520514, 126.9885617)
    } else {
      this._getLocationAsync();
    }
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert('거절하셨네요', '슬퍼요.');
    }
    //찾기 시작
    try {
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      this._getWeather(latitude, longitude)
    } catch (err) {
      Alert.alert('위치를 찾을 수 없어요.', '이상하다?');
    }
  };
  // api를 이용해서 날씨를 가져오는 함수.
  _getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: temp,
      name
    });
  };
  render() {
    const { isLoading, condition, temp, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        { 
          isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} name={name}/>
        }
      </View>
    );
  }
}
~~~


## Weather Component
~~~javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions } from './weatherOptions';

class Weather extends Component{
  render(){
    const PROPS = this.props;
    return (
      <LinearGradient style={styles.container} 
          colors={weatherOptions[PROPS.condition].backgroundColor}>
          <StatusBar barStyle="light-content"/>
          <View style={styles.IconContainer}>
            <MaterialCommunityIcons 
              size={96} 
              name={weatherOptions[PROPS.condition].iconName} color="white"
            />
            <Text style={styles.temp}>{PROPS.temp}°</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.city]}>{PROPS.name}</Text>
            <Text style={[styles.text, styles.title]}>
              <Text>{weatherOptions[PROPS.condition].kr}</Text>
              <Text style={{fontSize:22}}>  {PROPS.condition}</Text>
            </Text>
            <Text style={[styles.text, styles.subtitle]}>{weatherOptions[PROPS.condition].subTitle}</Text>
          </View>
      </LinearGradient>
    )
  }
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado'
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    paddingHorizontal: '15%',
    width: '100%'
  },
  text: {
    color: 'white',
  },
  city: {
    fontSize: 22,
  },
  title: {
    fontSize: 32
  },
  subtitle: {
    fontSize: 16
  },
  temp: {
    fontSize: 42,
    paddingLeft: 10,
    color: 'white',
  },
});

export default Weather;
~~~

weatherOptions.js는 이렇게 생겼다.
![image](/assets/img/post/react_native/Screenshot_6.png) 



## 완성
![image](/assets/img/post/react_native/screen.jpg)  
리액트 네이티브로 만든 첫 앱!

리액트는 배우면 배울수록 재미있는 것 같다.  
물론 angular로는 대형 홈페이지 밖에 안만들었으니 어렵고 짜증날 수 밖에 없지만 많은 불편 사항이 있었다.  
다음엔 간단한 프로젝트 후에 평소 생각에만 있던 앱을 만들어볼 계획이다.