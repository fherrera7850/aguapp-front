import './Reactotron';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import reactotron from 'reactotron-react-native';

reactotron.log('Hello from Reactotron!');

AppRegistry.registerComponent(appName, () => App);
