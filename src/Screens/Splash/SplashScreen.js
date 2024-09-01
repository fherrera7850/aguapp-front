// SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ onFinish }) => {
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -30, // Altura del salto
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    );

    bounceAnimation.start();

    const timer = setTimeout(() => {
      bounceAnimation.stop();
      onFinish();
    }, 3000); // Duración del splash screen

    return () => {
      clearTimeout(timer);
      bounceAnimation.stop();
    };
  }, [bounceValue, onFinish]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./../../assets/img/gotasplash1.png')} // Cambia esta ruta por la ruta de tu imagen
        style={[styles.logo, { transform: [{ translateY: bounceValue }] }]}
      />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default SplashScreen;
