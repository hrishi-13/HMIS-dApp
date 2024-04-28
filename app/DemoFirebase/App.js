import React from 'react';
import AppNavigator from './Navigation/AppNavigator.js';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { registerRootComponent } from 'expo';
import { View } from 'react-native';



export default function App() {
  const firebaseConfig = {
    apiKey: 'api-key',
    authDomain: 'project-id.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'project-id',
    storageBucket: 'project-id.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
  };
  
  // const app = initializeApp(firebaseConfig);
  

  return (
    <AppNavigator />
  );
}