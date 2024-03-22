'use client'

// Importa la libreria `SessionProvider` da `next-auth/react`
import { SessionProvider } from 'next-auth/react'

// Importa il tipo `ReactNode` da `react`
import { ReactNode } from 'react';

// Definisce l'interfaccia `PropsType` che estende `ReactNode`
interface PropsType {
  children: ReactNode;
}

// La funzione `AuthProvider` accetta un oggetto di props di tipo `PropsType`
const AuthProvider = ({ children }: PropsType) => {
  // Ritorna un componente `SessionProvider` che avvolge un componente `AuthProvider`
  // che a sua volta avvolge i figli passati come props
  return (
    <SessionProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SessionProvider>
  )
};

// Esporta il componente `AuthProvider` come default
export default AuthProvider;
