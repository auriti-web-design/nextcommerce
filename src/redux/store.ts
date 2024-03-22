import { configureStore } from "@reduxjs/toolkit";

// Importa i reducer
import cartReducer from "./features/cartSlice";
import loadingReducer from "./features/loadingSlice";
import productsReducer from "./features/productsSlice";

// Esporta lo store Redux creato con configureStore
export const store = configureStore({
  // Riduttore: definisce lo stato iniziale e come lo stato cambia in risposta alle azioni
  reducer: {
    cartReducer, // Gestisce lo stato del carrello
    products: productsReducer, // Gestisce lo stato dei prodotti
    loading: loadingReducer, // Gestisce lo stato di caricamento
  },

  // DevTools: abilita gli strumenti di sviluppo Redux in ambiente di sviluppo
  devTools: process.env.NODE_ENV !== "production",
});

// Tipi per lo stato e l'azione
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
