import React, { useState } from 'react';
import MainView from "../components/MainView";
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Timer2Icon from '../assets/timer2.svg'
import Play from '../assets/play.svg'
import Stop from '../assets/stop.svg'

const Silent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <MainView title="Wycisz się">
      <Swiper
        loop={false}
        onIndexChanged={handleIndexChanged}
        showsButtons={true}
        showsPagination={true}
        autoplay={false}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,.3)',
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#fff',
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7
            }}
          />
        }
        paginationStyle={{
          bottom: 70
        }}
      >
        <View style={styles.container}>
          <ImageBackground source={require('../assets/bg2.jpg')} style={styles.backgroundImage}>
            <Text style={styles.timer}>14s</Text>
            <Stop width={120} height={120} fill="white"/>
          </ImageBackground>
        </View>
        <View style={styles.container}>
          <ImageBackground source={require('../assets/bg3.jpg')} style={styles.backgroundImage}>
            {/* Your content here */}
          </ImageBackground>
        </View>
        <View style={styles.container}>
          <ImageBackground source={require('../assets/bg4.jpg')} style={styles.backgroundImage}>
            {/* Your content here */}
          </ImageBackground>
        </View>
        <View style={styles.container}>
          <ImageBackground source={require('../assets/bg1.jpg')} style={styles.backgroundImage}>
            <Timer2Icon width={40} fill="white" style={styles.timer}/>
            <Play width={120} height={120} fill="white"/>
          </ImageBackground>
        </View>
      </Swiper>
      <Text>Current Index: {currentIndex}</Text>

    </MainView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    marginBottom: -20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: 'white',
    fontSize: 20
  },

});

export default Silent