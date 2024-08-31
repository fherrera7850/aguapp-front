// ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ name: 'Aguapp' }) // Aquí puedes personalizar el nombre de la app en Reactotron
  .useReactNative() // Añade todos los plugins de React Native
  .connect(); // Permite la conexión con la aplicación

// Clear logs en cada inicio de la aplicación
Reactotron.clear();

console.tron = Reactotron; // Añade la consola de Reactotron como alias global

export default Reactotron;
