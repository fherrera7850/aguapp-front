import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from './src/Screens/Splash'; // Importa el SplashScreen
import HomeProductsScreen from './src/Screens/HomeProducts'; // Importa la lista de productos
import axios from 'axios'; // Para hacer llamadas a la API

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataPromise = axios.get('https://jsonplaceholder.typicode.com/photos');
      const timerPromise = new Promise((resolve) => setTimeout(resolve, 3000)); // Espera 3 segundos

      try {
        const [response] = await Promise.all([dataPromise, timerPromise]); // Esperar ambas promesas
        const limitedData = response.data.slice(0, 20); // Limitar a 20 resultados
        setData(limitedData);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      } finally {
        setIsLoading(false); // Una vez que el tiempo y los datos estén listos, ocultar el splash
      }
    };

    fetchData();
  }, []);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onFinish={handleFinishLoading} />;
  }

  return (
    <View style={styles.container}>
      {/* Pasar los datos cargados a la lista */}
      <HomeProductsScreen data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
