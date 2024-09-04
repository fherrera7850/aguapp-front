// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from './src/Screens/Splash'; // Asegúrate de importar el SplashScreen correctamente
import HomeProductsScreen from './src/Screens/HomeProducts'; // Asegúrate de importar la pantalla de la lista correctamente

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onFinish={handleFinishLoading} />;
  }

  return (
    <View style={styles.container}>
      <HomeProductsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
