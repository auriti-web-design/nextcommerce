import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaccia per il prodotto nel carrello
interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

// Stato iniziale del carrello: array vuoto
const initialState: Array<IProduct> = [];

// Definizione dello slice del carrello con createSlice
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // Aggiunge un prodotto al carrello
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProductIndex = state.findIndex(
        (pro) => pro.id === action.payload.id
      );

      // Se il prodotto non è già nel carrello, lo aggiunge
      if (existingProductIndex === -1) {
        state.push(action.payload);
      } else {
        // Se il prodotto è già nel carrello, incrementa la quantità
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },

    // Rimuove un prodotto dal carrello
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      // Filtra lo stato per mantenere solo i prodotti con id diverso da quello da rimuovere
      return state.filter((item) => item.id !== id);
    },
  },
});

// Esporta le azioni del cartSlice
export const { addToCart, removeFromCart } = cartSlice.actions;

// Esporta il reducer del cartSlice
export default cartSlice.reducer;
