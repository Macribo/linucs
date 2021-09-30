// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Image
          style={styles.baile}
          source={require('./assets/backgrounds/background_image.png')}
        />

        <ImageBackground source={require('./assets/backgrounds/logo@4x.png')}></ImageBackground>
         
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  baile: {},
  uiSlider: {}
  ,
});
