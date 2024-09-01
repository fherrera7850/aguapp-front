// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from './src/Screens/Splash/SplashScreen'; // Asegúrate de importar el componente correctamente

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
      <Text style={styles.text}>¡Bienvenido a la aplicación!</Text>
      {/* Aquí va el contenido principal de tu aplicación */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
