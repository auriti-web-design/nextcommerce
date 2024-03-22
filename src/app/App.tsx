'use client'

// Importa lo store Redux creato nel file '@redux/store'
import { store } from '@/redux/store';

// Importa React e il componente Provider da react-redux
import React from 'react';
import { Provider } from 'react-redux';

// Definisce il componente App che accetta un oggetto di props con la proprietà children
const App = ({ children }: { children: React.ReactNode }) => {
  // Ritorna un componente Provider che rende lo store Redux disponibile a tutti i componenti figli
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

// Esporta il componente App come default
export default App;
