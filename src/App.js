import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BookProvider from './contexts/BookContext';


import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <BookProvider>
        <Routes />
      </BookProvider>
    </NavigationContainer>
  );
}