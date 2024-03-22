import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Stato iniziale del prodotto
const initialState: IProduct = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: "",
  category: "",
};

// Definizione dello slice del prodotto con createSlice
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // Imposta le informazioni del prodotto
    setProduct: (state, action: PayloadAction<IProduct>) => {
      return action.payload;
    },
  },
});

// Esporta l'azione del productSlice
export const { setProduct } = productSlice.actions;

// Esporta il reducer del productSlice
export default productSlice.reducer;
