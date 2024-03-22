'use client'

// Importa il provider di sessioni da `next-auth/react`
import { SessionProvider } from 'next-auth/react'

// Importa `ReactNode` da React
import { ReactNode } from 'react';

// Definisce l'interfaccia `PropsType` che richiede una proprietà `children` di tipo `ReactNode`
interface PropsType {
    children: ReactNode;
}

// La funzione `AuthProvider` accetta un oggetto `props` di tipo `PropsType`
const AuthProvider = ({children}: PropsType ) => {

  // Restituisce un componente `SessionProvider` che avvolge i figli
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

// Esporta il componente `AuthProvider` come default
export default AuthProvider
