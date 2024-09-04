// UserListScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { Text, Divider, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

const HomeProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a la API de fotos
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        const limitedData = response.data.slice(0, 20); // Limitar a 20 resultados
        setData(limitedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Separador entre elementos
  const renderSeparator = () => (
    <Divider style={styles.divider} />
  );

  // Función que maneja la acción al presionar un ítem
  const handlePress = (item) => {
    Alert.alert('Item Presionado', `Has seleccionado: ${item.title}`);
  };

  // Renderiza cada elemento de la lista
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.itemContainer}>
        {/* Imagen a la izquierda */}
        <Image
          source={{ uri: item.thumbnailUrl }} // Imagen desde la API de fotos
          style={styles.avatar}
        />
        {/* Textos al centro */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>Photo ID: {item.id}</Text>
        </View>
        {/* Número a la derecha */}
        <Text style={styles.number}>{item.albumId}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator animating={true} size="large" style={styles.loading} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // Imagen redondeada
    marginRight: 15,
  },
  textContainer: {
    flex: 1, // Ocupa el espacio restante entre imagen y número
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0', // Gris claro
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeProducts;
